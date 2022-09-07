const patient = require('../models/Patient')
// const doctor = require('../models/doctor')
// const admin = require('../models/doctor')
const bcrypt = require ('bcryptjs')




const controllerAuth = {
    signIn: async(req, res, next) =>{
        console.log(req.body);
        const {email, password} = req.body;
        if (!email || !password) return res.status(400).json({ error: ' Email y Password required' })
        const user = await patient.findOne({email:email})
        // const doctor = await doctor.findOne({email:email})
        // const admin = await admin.findOne({email:email})
        try {
            if(!user) return res.status(404).json({ succes: false, error: 'Email ó Password Incorrecto' })
            const comparePassword =  bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                    return res.status(404).json({ succes: false, error: 'Email ó Password Incorrecto!!' })
                }
            res.status(200).json({ succes: true, data: user })
        } catch (error) {
            res.status(404).json({ succes: false, error: error })
        }
    }
}

module.exports = controllerAuth;
