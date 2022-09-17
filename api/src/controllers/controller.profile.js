const Admin = require('../models/Admin');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');



const controllerProfile = {
    profileAdmin: async (req, res, next) =>{
        try {
            
            const id = req.user_id
            console.log(id);
            const user = await Admin.findById(id)
            res.status(200).json({data:user})
        } catch (error) {
            next(error)
        }
    },
    profileDoctor: async (req, res, next) =>{
        try {
            const id = req.user_id
            console.log(id);
            const doctorById = await Doctor.findById(id);
            if (!doctorById) {
              throwError(1202);
            }
            const appointments = await Appointment.find({doctor: id})
            .populate({
                path: 'patient',
                model: 'Patient',
                select: ['name', 'email']
              })
            return res.status(200).send({ data: {doctor: doctorById, appointments: appointments }});
        } catch (error) {
            next(error)
        }
    },
    profilePatient: async (req, res, next) =>{
        try {
            
            const id = req.user_id
            console.log(id);
            const user = await Patient.findById(id)
            res.status(200).json({data:user})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = controllerProfile;