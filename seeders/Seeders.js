const mongoose = require("mongoose")
const falso = require("@ngneat/falso")
const { Hospital, Department, Doctor } = require("../models")
require("dotenv").config()

const hospitalsData = [
  {
    name: "Salmaniya",
    location: "https://maps.app.goo.gl/Gqbx4y8UF8Mutxhg9",
  },
  {
    name: "BDF",
    location: "https://maps.app.goo.gl/WZhz4aysbZ2V6qza8",
  },
  {
    name: "KHUH",
    location: "https://maps.app.goo.gl/2rXTV81PHZmbpgDN6",
  },
]

const departments = [
  "General practitioner",
  "Dental & Maxillofacial center",
  "Vascular Surgery",
  "Psychiatry",
]

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected...")
    seed()
  })
  .catch((e) => console.error("❌ Connection error", e))

const seed = async () => {
  try {
    // Optional: clear old data
    await Doctor.deleteMany({})
    await Department.deleteMany({})
    await Hospital.deleteMany({})

    for (let i = 0; i < hospitalsData.length; i++) {
      const hospital = new Hospital({
        name: hospitalsData[i].name,
        location: hospitalsData[i].location,
      })
      await hospital.save()

      for (let j = 0; j < departments.length; j++) {
        const department = new Department({
          depName: departments[j],
          hospital: hospital._id,
        })
        await department.save()

        for (let k = 0; k < 3; k++) {
          const doctor = new Doctor({
            drName: falso.randFullName(),
            hospitalId: hospital._id,
            departmentId: department._id,
          })
          await doctor.save()
        }
      }
    }

    console.log("🌱 Seeding completed!")
    mongoose.connection.close()
  } catch (error) {
    console.error("❌ Seeding failed:", error)
    mongoose.connection.close()
  }
}
