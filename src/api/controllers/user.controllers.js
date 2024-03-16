const User = require("../models/user.model");
const { validateEmail, usedEmail } = require("../../utils/validation")
const { generateSign } = require("../../utils/jwt")
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    const userData = new User(req.body);
    const isValid = validateEmail(req.body.email)

    if (!isValid) {
        return res.status(400).json({ success: false, data: "email sin formato correcto" })
    }
    else {
        const validate = await usedEmail(req.body.email)
        if (validate===0) {
            userData.password = bcrypt.hashSync(req.body.password, 10);
            const createdUser = await userData.save()
            return res.status(200).json({ success: true, data: createdUser })
        }
        else {
            return res.status(400).json({ success: false, data: "email ya existe" })
        }
    }
}
const login = async (req, res) => {
    const info = req.body;
    const userDB = await validateEmail(req.body.email)
    if (!userDB) {
        return res.status(400).json({ success: false, data: "email usuario no registrado" })
    }
    if (!bcrypt.compareSync(info.password, userDB.password)) {
        return res.status(400).json({ success: false, data: "Contraseña incorrecta" })
    }
    ///email y contraseña correcto
    const token = generateSign(userDB._id, userDB.email)
    return res.status(200).json({ success: true, data: "Se ha logueado", token: token })
}
const profile = (req, res) => {
    // devuelve la respuesta al front
    console.log(req.user);
    return res.status(200).json({ success: true, data: req.user })
}

const getUsers = async (req, res) => {
    // devuelve  todos los usuarios de bD, si el que inicio la sesion es un admin

    const numUsers = await User.countDocuments(); 15
    let { page } = req.query; 3
    const limit = 3;
    page = parseInt(page)
    const numPage = Math.ceil(numUsers / limit);

    if (page <= 0) {
        page = 1;
    }
    if (page > numPage) {
        page = 1 // page= numPage
    }
    if (isNaN(page)) {
        page = 4;
    }
    const skipUser = (page - 1) * limit;
    const allUsers = await User.find().skip(skipUser).limit(limit)

    const nextPage = page === numPage ? null : page + 1;
    const prevPage = page === 1 ? null : page - 1;

    console.log(nextPage, prevPage)
    return res.status(200).json({ success: true, users: allUsers, nextpage: nextPage, prevPage: prevPage })
}
module.exports = { register, login, profile, getUsers }