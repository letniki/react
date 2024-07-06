import Joi from "joi";

export const postValidator=Joi.object({
    userId: Joi.number().min(1).max (10).required().messages({
        'number.min':'UserId must be at least 1 character',
        'number.max':'UserId must be less than 11 characters'
        }),
    title: Joi.string().min(5).max(50).required().messages({
        'string.empty':'Title is required',
        'string.min':'Title must be at least 5 characters',
        'string.max': 'Title must be less than 50 characters'
    }),
    body:Joi.string().min(10).max(200).required().messages({
        'string.empty':'Body is required',
        'string.min': 'Body must be greater than 10 characters',
        'string.max': 'Body must be less than 200 characters'
    })
})
