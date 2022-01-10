const Contact = require("../models/contact.model.js")


// create and Save a new contact

exports.create = (req,res) => {
    //Validate request
    console.log(req.body)
    if(!req.body) {
      res.status(400).send({
        message: "Content can not be empty"
      });
    }

     // create a Tutorials
     const contact = new Contact({
       name: req.body.name,
       company_name: req.body.company_name,
       message: req.body.message,
       email: req.body.email,
       phone_number: req.body.phone_number,
       service: req.body.service,
       createDate: new Date()
     })

     console.log(contact)

     Contact.create(contact,(err,data) => {
       if(err) {
         res.status(500).send({
           message: err.message || "some error occurred while creating the contact"
         })

       }
       else res.send(data)
     })

}

exports.findAll = (req,res) => {
         const title = req.query.title

         Contact.getAll(title,(err,data) =>{
               if(err) {
                 res.status(500).send({
                   message: err.message || "some error occurred while retriving contact"
                 })
               }
               else res.send(data)
         })
}

exports.findOne = (req,res) => {
  console.log(req.params.id)
  Contact.findById(req.params.id,(err,data) => {
    if(err) {
      if(err.kind === "not_found") {
        res.send(404).send({
          message: `Not found contact with id ${req.params.id}`
        })
      }  else {
        res.status(500).send({
          message: "Error retrieving contact with id " + req.params.id
        })
      }
    } else res.send(data)
  })
}
