const passwordValidator = require('password-validator');

const passwordValidatorSchema = new passwordValidator();

passwordValidatorSchema
    .is().min(6)
    .is().max(30)
    .has().uppercase()
    .has().lowercase()
    .has().digits(2)
    .has().not().spaces()
    .is().not().oneOf(['Passw0rd', 'Password123']);

module.exports = (req, res, next) => {

    if (passwordValidatorSchema.validate(req.body.password)) {
        next();
    } else {
        return res.status(401).json({ message: `Votre mot de passe n'est pas assez fort ${passwordValidatorSchema.validate('req.body.password', { list: true })}` })
    }
}

