const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const Jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const controllerAuth = {
  
  google: async (req, res,next) => {
    const { google } = req.body;
    const authClient = new OAuth2Client(
      "31532081050-nrgri514im6srt8c3e4thvg2dg6ionem.apps.googleusercontent.com"
    );
    // console.log("googlepas")
    // console.log(google)

    await authClient
      .verifyIdToken({
        idToken: google,
        audience:
          "31532081050-nrgri514im6srt8c3e4thvg2dg6ionem.apps.googleusercontent.com",
      })
      .then(async (response) => {
     
        //   console.log(response)
        const { email} = response.payload;

        const patient = await Patient.findOne({ email: email });
        const doctor = await Doctor.findOne({ email: email });
        const admin = await Admin.findOne({ email: email });
        console.log(patient,"paciente")

        try{
        if (patient) {
          const tokenPatient = Jwt.sign(
            { user_id: patient.id },
            "pacientetoken"
          ); // process.env.TOKEN_SECRET_ADMIN )
          const data = {
            name: patient.name,
            email: patient.email,
            image: patient.image,
            rol: "PATIENT",
          };
          return res.status(200).json({ data: data, token: tokenPatient });
        }
        if (doctor) {
            const tokenDoctor = Jwt.sign({ user_id: doctor.id }, "doctortoken"); // process.env.TOKEN_SECRET_ADMIN )
            const data = {
              name: doctor.name,
              email: doctor.email,
              rol: "DOCTOR",
            };
            return res.status(200).json({ data: data, token: tokenDoctor });
        }
        if (admin) {
            const tokenAdmin = Jwt.sign({ user_id: admin.id }, "admintoken"); // process.env.TOKEN_SECRET_ADMIN )
        const data = {
          name: admin.name,
          email: admin.email,
          rol: "ADMIN",
        };
        return res.status(200).json({ data: data, token: tokenAdmin });
        }
        if (!patient || !doctor || !admin) {
            return res
              .status(404)
              .json({
                succes: false,
                error: "Email ó Password Incorrecto paciente",
              });
          }
        }catch(error){
            next(error);
        }
      });
  },

  
  
  signIn: async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: " Email y Password required--" });
    const patient = await Patient.findOne({ email: email });
    const doctor = await Doctor.findOne({ email: email });
    const admin = await Admin.findOne({ email: email });

    try {
      if (patient) {
        const comparePassword = bcrypt.compareSync(password, patient.password);
        if (!comparePassword) {
          return res
            .status(404)
            .json({ succes: false, error: "Email ó Password Incorrecto!!" });
        }
        const tokenPatient = Jwt.sign({ user_id: patient.id }, "pacientetoken"); // process.env.TOKEN_SECRET_ADMIN )
        const data = {
          name: patient.name,
          email: patient.email,
          image: patient.image,
          rol: "PATIENT",
        };
        return res.status(200).json({ data: data, token: tokenPatient });
      }
      if (doctor) {
        const comparePassword = bcrypt.compareSync(password, doctor.password);
        if (!comparePassword) {
          return res
            .status(404)
            .json({ succes: false, error: "Email ó Password Incorrecto!!" });
        }
        const tokenDoctor = Jwt.sign({ user_id: doctor.id }, "doctortoken"); // process.env.TOKEN_SECRET_ADMIN )
        const data = {
          name: doctor.name,
          email: doctor.email,
          rol: "DOCTOR",
        };
        return res.status(200).json({ data: data, token: tokenDoctor });
      }
      if (admin) {
        const comparePassword = bcrypt.compareSync(password, admin.password);
        if (!comparePassword) {
          return res
            .status(404)
            .json({ succes: false, error: "Email ó Password Incorrecto!!" });
        }
        const tokenAdmin = Jwt.sign({ user_id: admin.id }, "admintoken"); // process.env.TOKEN_SECRET_ADMIN )
        const data = {
          name: admin.name,
          email: admin.email,
          rol: "ADMIN",
        };
        return res.status(200).json({ data: data, token: tokenAdmin });
      }
      if (!patient || !doctor || !admin) {
        return res
          .status(404)
          .json({
            succes: false,
            error: "Email ó Password Incorrecto paciente",
          });
      }
    } catch (error) {
      // res.status(404).json({ succes: false, error: error });
      next(error);
    }
  },
};

module.exports = controllerAuth;
