import { check, param, header, query } from 'express-validator/check';

export const signUpValidationRules = [
    check('name').isString().withMessage('Name is required'),
    check('surname').isString().withMessage('Surname is required'),
    check('username').isString().withMessage('UserName is required'),
    check('tel').isString().withMessage('telephone is required'),
    check('email').isEmail().withMessage('Invalid Email is provided'),
    check('password').isLength({ min: 6 }).withMessage('Password must contain at least six characters'),
];

export const resetPasswordRules = [
    check('email').isEmail().withMessage('Invalid Email is provided'),
];

export const setNewPasswordRules = [
    check('password').isString().withMessage('Password is required'),
];

export const resendEmailValidationRules = [
    check('email').isEmail().withMessage('Invalid Email is provided'),
];

export const confirmEmailValidationRules = [
    query('token').isLength({ min: 20 , max: 20}).withMessage('Invalid verification ID provided'),
];

export const confirmInviteValidationRules = [
    query('token').isString().withMessage('Invalid verification ID provided'),
];

export const loginValidationRules = [
    check('emailOrUsername').isString().withMessage('Email or Username is required'),
    check('password').isString().withMessage('Password is required'),
];
export const joinBoardValidationRules = [
    check('boardLevel').isNumeric().withMessage('Boardlevel is required'),
    check('bypassReferrer').isBoolean().withMessage('ByPassReferer is required'),
];
export const tokenValidationRules = [
    header('Authorization').matches(/(Bearer)\s/i).withMessage('Valid Authorization Token is required'),
];

export const sendContactValidationRules = [
    check('name').isString().withMessage('name is required'),
    check('phone').isString().withMessage('phone is required'),
    check('email').isEmail().withMessage('Invalid Email is provided'),
    check('message').isLength({ min: 1 }).withMessage('message must contain at least one character'),
];

export const confirmResetValidateionRules = [
    query('token').isString().withMessage('Invalid verification token provided'),
    query('id').isString().withMessage('Invalid verification id provided'),
]