const mongoose = require('mongoose')
const falso = require('@ngneat/falso')
const { Hospital, Department, Doctor } = require('../models')
require('dotenv').config()
const hospitalsData = [
  {
    name: 'Salmaniya',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.386797771723!2d50.572209900000004!3d26.216618699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af6b066dc6df%3A0xde85e2d0b7b6c605!2sSalmaniya%20Medical%20Complex!5e0!3m2!1sen!2sbh!4v1749569762417!5m2!1sen!2sbh'
  },
  {
    name: 'BDF',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8643609519863!2d50.526927699999995!3d26.135965199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ad8856f26243%3A0x57908a75cda7c94e!2sBDF%20Hospital%20Clinic%20Building-%20Royal%20Medical%20Services!5e0!3m2!1sar!2sbh!4v1749570398794!5m2!1sar!2sbh'
  },
  {
    name: 'KHUH',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.9779018055606!2d50.600902999999995!3d26.2623806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a60ad10a1c05%3A0x59a1c7791e4f638a!2z2YXYs9iq2LTZgdmJINin2YTZhdmE2YMg2K3ZhdivINin2YTYrNin2YXYudmK!5e0!3m2!1sar!2sbh!4v1749570479035!5m2!1sar!2sbh'
  }
]
const departments = [
  'General practitioner',
  'Dental & Maxillofacial center',
  'Vascular Surgery',
  'Psychiatry'
]
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(':white_check_mark: MongoDB connected...')
    seed()
  })
  .catch((e) => console.error(':x: Connection error', e))
const seed = async () => {
  try {
    // Step 1: Clear old data
    await Doctor.deleteMany({})
    await Department.deleteMany({})
    await Hospital.deleteMany({})
    // Step 2: Loop over hospitals
    for (let i = 0; i < hospitalsData.length; i++) {
      const hospital = new Hospital({
        name: hospitalsData[i].name,
        location: hospitalsData[i].location,
        departmentsId: [] // To be filled later
      })
      await hospital.save()
      // Step 3: Loop over departments
      for (let j = 0; j < departments.length; j++) {
        const department = new Department({
          depName: departments[j]
        })
        await department.save()
        // Add department to the hospital's departments array
        hospital.departmentsId.push(department._id)
        // Step 4: Create 3 doctors for each department
        for (let k = 0; k < 3; k++) {
          const doctor = new Doctor({
            drName: falso.randFullName(),
            hospitalId: hospital._id,
            departmentId: department._id
          })
          await doctor.save()
        }
      }
      // Step 5: Save hospital with departments
      await hospital.save()
    }
    console.log(':seedling: Seeding completed!')
    mongoose.connection.close()
  } catch (error) {
    console.error(':x: Seeding failed:', error)
    mongoose.connection.close()
  }
}
