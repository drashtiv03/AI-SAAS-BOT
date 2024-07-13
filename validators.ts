import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";
export const validate=(validations:ValidationChain[])=>{
    return async(req:Request,res:Response,next:NextFunction)=>
    {
        for(let validation of validations){
            const result=await validation.run(req);
            if (!result.isEmpty())
            {
                break;
            }
        }
        const errors=validationResult(req);
        if (errors.isEmpty()){//if there are no errors we can move to next middleware for data storage
            return next();
        }
        return res.status(422).json({errors:errors.array()});//return errors in form of array
    };
};
export const loginValidator=[
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({min:6}).withMessage("Password should contain atleast 6 characters")
]


export const signupValidator=[
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];

export const chatCompletionValidator=[
    body("message").notEmpty().withMessage("Message is required"),
    
];
