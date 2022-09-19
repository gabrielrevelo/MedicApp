const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Admin = require("../models/Admin");

const validateUser = {
  userExist: async (req, res, next) => {
    try {
      const { email } = req.body;
      let patient = await Patient.findOne({ email: email });
      let doctor = await Doctor.findOne({ email: email });
      let admin = await Admin.findOne({ email: email });
      if (!patient && !doctor && !admin) {
        next()
      } else {
        res.status(400).json({error: "Ya existe un usuario con ese correo electronico"});
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },
};

module.exports = validateUser;
