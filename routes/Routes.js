const express = require("express");
const controllers = require('../controller/userController');

const router = express.Router();

const testMiddleWare = (req, res, next) => {
    console.log(res);
    next();
}

router.get('/', testMiddleWare, (req, res) => {
    res.status(400).send({ value: "hii" });
})

router.post('/user', (req, res) => {
    controllers.addUser(req, res)
    res.end();
})

router.post('/findUser', (req, res) => {
    controllers.findUser(req, res)
})

router.post('/update', (req, res) => {
    controllers.updateUserByName(req, res);
    res.end();
});

router.post('/delete', (req, res) => {
    controllers.deleteUserByName(req, res);
})
module.exports = router;