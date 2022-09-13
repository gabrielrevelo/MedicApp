const Stripe = require('stripe');
const   Jwt  = require('jsonwebtoken');
const Appointment = require("../models/Appointment");
const mailer = require("../config/sendMails/mailer");

const stripe = new Stripe(process.env.SK_STRIPE)

const controllerUsers = {
  checkout: async (req, res, next) => {
    const { id,amount} = req.body;
    // console.log("idUser",user_id);

    const { idDoctor, hour, date, paymentProcessed} = req.body;
    //console.log( idDoctor, 'doctor id')
    console.log(req.body);
     const user_id = req.user_id
     console.log(user_id);
    try {
        const payment = await stripe.paymentIntents.create({
			currency: "ARS",
			amount,
			description: "Consulta",
			payment_method: id,
			confirm: true
		});
		// console.log("payment", payment)
    const newAppointment = new Appointment({ patient:user_id, doctor: idDoctor, hour,date, paymentProcessed});
    await newAppointment.save();
    mailer.sendMailAppointment(newAppointment); //envio email
    console.log(newAppointment, 'cita :D')
		res.json({ msg: "Successful payment" })

    } catch (error) {
        res.json({msg:error})
    }
  },
};
module.exports = controllerUsers;
