const mongoose = require("mongoose");
const falso = require("@ngneat/falso");
const { Hospital, Department, Doctor } = require("../models");
require("dotenv").config();
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
];
const departments = [
  "General practitioner",
  "Dental & Maxillofacial center",
  "Vascular Surgery",
  "Psychiatry",
];
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(":white_check_mark: MongoDB connected...");
    seed();
  })
  .catch((e) => console.error(":x: Connection error", e));
const seed = async () => {
  try {
    // Step 1: Clear old data
    await Doctor.deleteMany({});
    await Department.deleteMany({});
    await Hospital.deleteMany({});
    // Step 2: Loop over hospitals
    for (let i = 0; i < hospitalsData.length; i++) {
      const hospital = new Hospital({
        name: hospitalsData[i].name,
        location: hospitalsData[i].location,
        departmentsId: [], // To be filled later
      });
      await hospital.save();
      // Step 3: Loop over departments
      for (let j = 0; j < departments.length; j++) {
        const department = new Department({
          depName: departments[j],
        });
        await department.save();
        // Add department to the hospital's departments array
        hospital.departmentsId.push(department._id);
        // Step 4: Create 3 doctors for each department
        for (let k = 0; k < 3; k++) {
          const doctor = new Doctor({
            drName: falso.randFullName(),
            hospitalId: hospital._id,
            departmentId: department._id,
          });
          await doctor.save();
        }
      }
      // Step 5: Save hospital with departments
      await hospital.save();
    }
    console.log(":seedling: Seeding completed!");
    mongoose.connection.close();
  } catch (error) {
    console.error(":x: Seeding failed:", error);
    mongoose.connection.close();
  }
};