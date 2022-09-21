const Favorites = require("../models/FavPatient.js");


const FavoritesPatient = {
    all: async (req, res, next) => {
        console.log(req.body);
        try {
            if (req.user_id && !req.body.doctorId) {
                const favoritos = await Favorites.find({
                    // patient: req.user_id,
                    patient: req.body.patientId
                });
                return res.status(200).json({ data: favoritos });
            }
            if(req.body.doctorId){
                const favoritos = await Favorites.find({
                    patient: req.user_id,
                    doctor: req.body.dortorId
                });
                return res.status(200).json({ data: favoritos });
            }
            const favoritosall = await Favorites.find();
            return res.status(200).json({ data: favoritosall });
        } catch (error) {
            // console.log(error);
            return error
        }
    },
    add: async (req, res, next) => {
        try {
            const fav = await Favorites.find({
                patient: req.user_id,
                doctor: req.body.idDoctor,
            });
            if (!fav) {
                const newFav = new Favorites({
                    patient: req.user_id,
                    doctor: req.body.idDoctor,
                    enable: true,
                });
                await newFav.save();
                return res.status(200).json({ data: newFav });
            }
            const enableFav = await Favorites.findOneAndUpdate(
                {
                    patient: req.user_id,
                    doctor: req.body.idDoctor,
                },
                { $set: { enable: req.body.enable } },
                {
                    new: true,
                    upsert: true,
                }
            );
            // fav.enable = req.body.enable;
            console.log(enableFav, "chaoo");
            return res.status(200).json({ data: enableFav });
        } catch (error) {
            return error        }
    },
    likeId :async (req, res) => {
        try {
            const likeDoctor = await Favorites.find({
                patient: req.user_id,
                doctor: req.params.id,
            })
            return res.status(200).json({ data: likeDoctor });

        } catch (error) {
            return error
        }
    },
    favorites :async (req, res) => {
        try {
            const favorites = await Favorites.find({
                patient: req.user_id,
                // doctor: req.params.id,
                }
                )
                .populate('doctor')
                // .populate({
                //     path: 'doctor',
                //     model: 'Doctor',
                //     select: ['name', 'email', 'specialities', 'address', 'city', 'schedule', 'checkUpPrice'],
                //     .populate({
                        
                //     })
                //   })
                
                
                
            return res.status(200).json({ data: favorites });

        } catch (error) {
console.log(error);        }
    }
    
};

module.exports = FavoritesPatient;
