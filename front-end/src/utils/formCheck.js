import { REGEX } from "./regex";

export const validName = (name) => {
    let isValid = REGEX.general.test(name);
    return {
        isValid: isValid,
        message: isValid ? '' : 'Veuillez entrer un nom valide'
    }
};

export const validFirstname = (firstname) => {
    let isValid = REGEX.general.test(firstname);
    return {
        isValid: isValid,
        message: isValid ? '' : 'Veuillez entrer un prénom valide'
    }
};

export const validEmail = (email) => {
    let isValid = REGEX.email.test(email);
    return {
        isValid: isValid,
        message: isValid ? '' : 'Veuillez entrer une adresse email valide'
    }
};

export const validPassword = (password) => {
    let isValid = REGEX.password.test(password);
    return {
        isValid: isValid,
        message: isValid ? '' : `Doit contenir au moins 6 lettres, une majuscule, 2 chiffres et un caractère spécial`
    }
};

