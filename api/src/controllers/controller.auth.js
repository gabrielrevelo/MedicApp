const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const Jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const mailer = require("../config/sendMails/mailer");
const jwt_decode = require("jwt-decode");

const controllerAuth = {
  google: async (req, res, next) => {
    const { google, rol } = req.body;
    console.log(rol);
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
        console.log(response);
        const { email } = response.payload;

        const patient = await Patient.findOne({ email: email });
        const doctor = await Doctor.findOne({ email: email });
        const admin = await Admin.findOne({ email: email });
        console.log(patient, "paciente");

        try {
          // if(!patient && rol === 'PATIENT'){
          //   const newPatient = await Patient.create({
          //     email: response.email,
          //     name: response.name,
          //     image: response.picture,
          //     password:'',
          //     phoneNumber: 44444,
          //   })
          //   res.status(200).json({data:newPatient})

          // }
          // if(!doctor){
          //   const newPatient = await Patient.create({

          //   })
          // }
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
          if (!patient && !doctor && !admin) {
            return res.status(404).json({
              succes: false,
              error: "Email ó Password Incorrecto paciente",
            });
          }
        } catch (error) {
          next(error);
        }
      });
  },
  logGoogle: async (req, res, next) => {
    try {
      const { google, rol } = req.body;
      const token = new OAuth2Client(
        "31532081050-nrgri514im6srt8c3e4thvg2dg6ionem.apps.googleusercontent.com"
      );
      // console.log("googlepas")
      // console.log(google)
      // console.log(rol, 'rol');
      // console.log(authClient, 'cliente')

      // res.status(200).json({data: token})

      const user = await token.verifyIdToken({
        idToken: google,
        audience:
          "31532081050-nrgri514im6srt8c3e4thvg2dg6ionem.apps.googleusercontent.com",
      });
      // console.log(user, 'user');
      // console.log(user.payload.email, 'user');
      const patient = await Patient.findOne({ email: user.payload.email });

      if (!patient) {
        const newPatient = await Patient.create({
          email: user.payload.email,
          name: user.payload.name,
          image: user.payload.picture,
          password: "nuevo",
          phoneNumber: 44444,
        });
        console.log("newPatient", newPatient);
        const tokenPatient = Jwt.sign(
          { user_id: newPatient.id },
          "pacientetoken"
        ); // process.env.TOKEN_SECRET_ADMIN )
        const data = {
          isActive: newPatient.active ? true : false,
          name: newPatient.name,
          email: newPatient.email,
          image: newPatient.image,
          rol: "PATIENT",
        };
        return res.status(200).json({ data: data, token: tokenPatient });
      }
      if (patient) {
        const tokenPatient = Jwt.sign({ user_id: patient.id }, "pacientetoken"); // process.env.TOKEN_SECRET_ADMIN )
        const data = {
          isActive: patient.active ? true : false,
          name: patient.name,
          email: patient.email,
          image: patient.image,
          rol: "PATIENT",
        };
        return res.status(200).json({ data: data, token: tokenPatient });
      }

      console.log(user, "user");
    } catch (error) {
      next(error);
    }
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
          isActive: patient.active,
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
          isActive: doctor.active,
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
          isActive: admin.active,
          name: admin.name,
          email: admin.email,
          rol: "ADMIN",
        };
        return res.status(200).json({ data: data, token: tokenAdmin });
      }
      if (!patient && !doctor && !admin) {
        return res.status(404).json({
          succes: false,
          error: "Email ó Password Incorrecto paciente",
        });
      }
    } catch (error) {
      // res.status(404).json({ succes: false, error: error });
      next(error);
    }
  },
  forgotPassword: async (req, res, next) => {
    const { email } = req.body;
    if (!email) return res.status(400).send("Email faltante");
    const patient = await Patient.findOne({ email: email });
    const doctor = await Doctor.findOne({ email: email });
    try {
      if (!patient && !doctor)
        return res.status(400).send("Email no registrado");
      let token;
      if (patient) {
        token = Jwt.sign({ user_id: patient.id }, "pacientetoken");
      }
      if (doctor) {
        token = Jwt.sign({ user_id: doctor.id }, "doctortoken");
      }
      const link = `http://localhost:3000/changePassword/${token}`;
      mailer.sendMailForgotPassword(email, link);
      return res.send("Se ha enviado un correo de recuperacion a " + email)
    } catch (error) {
      return res.status(500).send(error);
    }
    //Enviar correo con el link
  },
  changePassword: async (req, res, next) => {
    const { password, token } = req.body;
    const id = jwt_decode(token).user_id;
    try {
      const patient = await Patient.findOne({ _id: id });
      const doctor = await Doctor.findOne({ _id: id });
      if (patient) {
        const hashedPassword = await bcrypt.hashSync(password, 10);
        patient.password = hashedPassword;
        patient.save();
      }
      if (doctor) {
        const hashedPassword = await bcrypt.hashSync(password, 10);
        doctor.password = hashedPassword;
        doctor.save();
      }
      return res.send("Contraseña cambiada")
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

module.exports = controllerAuth;
