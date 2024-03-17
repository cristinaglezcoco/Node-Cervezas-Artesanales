const User = require ("../api/models/user.model");

//Formato correcto
const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email)
};

const validatePassword = (password) => {
    const regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)[a-zA-Z\d]{8,}$/; //  REGEX PASSWORD 1 Uppercase 1 Lowercase 1 number, minimo 8

    return regex.test(password);
};

//Para verificar que el email no existe
const usedEmail = async (email) => {
    const users = await User.find({email: email});
    return users.length;
}

module.exports = { validateEmail, validatePassword, usedEmail} 