const nodemailer = require("nodemailer");
const moment = require("moment");
const nodemailerSendGrid = require("nodemailer-sendgrid");

/* Mail Templates */
const confirmationRegisterTemplate = require("./ConfirmationRegister");
const confirmationAppointmentTemplate = require("./ConfirmationAppointment");

/* Models for Appointment */
const Patient = require("../../models/Patient");
const Doctor = require("../../models/Doctor");

const createTransport = () => {
  /* Test with MailTrap */
  /* const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c5ede4159841b3",
      pass: "19572a2f48110a"
    }
  }); */

  /* Config for send Email with Gmail */
  /* const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
      user: "medic.app.mails@gmail.com",
      password: process.env.GMAIL_MAILS_PASS,
    }
  }); */

  /* Config for send Email with SendGrid */
  const transport = nodemailer.createTransport(
    nodemailerSendGrid({
      apiKey:'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'
    })
  );
  return transport;
};

const sendMailRegister = async(user, type) => {
  const transporter = createTransport();
  await transporter.sendMail({
    from: '"MedicApp " <medic.app.mails@gmail.com>',
    to: `${user.email}`,
    subject: "Confirmamos tu Registro | MedicApp",
    html: confirmationRegisterTemplate(user, type)
  });
  return;
};

const sendMailAppointment = async(data) => {
  const doctor = await Doctor.findById(data.doctor);
  const patient = await Patient.findById(data.patient);
  const appointmentDate =  moment.utc(data.date).format("MMM Do, YYYY");
  const appointmentHour =  data.hour;
  const transporter = createTransport();
  await transporter.sendMail({
    from: '"MedicApp " <medic.app.mails@gmail.com>',
    to: [`${doctor.email}`,`${patient.email}`],
    subject: "Cita Confirmada | MedicApp",
    html: confirmationAppointmentTemplate(appointmentHour, appointmentDate, doctor, patient)
  });
  return;
};


exports.sendMailRegister = (user , type) => sendMailRegister(user , type);
exports.sendMailAppointment = (data) => sendMailAppointment(data);