const contacts = require("../controllers/contact.controller.js")


var router = require('express').Router()

// create a new Contact
router.post("/contact",contacts.create)

// retrive all contacts
router.get("/contact",contacts.findAll)

//retrive a Contacts by Id
router.get("/contact/:id",contacts.findOne)


module.exports = router
