const Joi = require('joi');
module.exports.listingSchema =Joi.object({


    title:Joi.string().required(),
    Description:Joi.string().required(),
    Country:Joi.string().required(),
    Location:Joi.string().required(),
    Price:Joi.number().required().min(0),
    Image:Joi.string().allow("",null)
    }).required()


    module.exports.reviewSchema=Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    })