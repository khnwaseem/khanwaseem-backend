const sql = require('./db')

// constructor
const Contact = function(contact) {
  this.name = contact.name,
  this.company_name = contact.company_name,
  this.message = contact.message,
  this.email = contact.email,
  this.phone_number = contact.phone_number,
  this.service = contact.service,
  this.createDate = contact.createDate
}


Contact.create = (newContact,result) => {
  sql.query("INSERT INTO contacts SET ?",newContact,(err,res) => {
    if(err) {
      console.log("error: ".err);
      result(err,null);
      return
    }


    console.log("created contact: ", {id: res.insertId, ...newContact});
    result(null,{id: res.insertId,...newContact})
  })
}


Contact.findById = (id,result) => {
  sql.query(`SELECT * FROM contacts WHERE id = ${id}`,(err,res) => {
    if(err) {
      console.log("error: ",err)
      result(err,null)
      return
    }

    if(res.length) {
      console.log("Found Contact: ", res[0])
      result(null,res[0])
    }

    // not found Tutorails with id
    result({kind: "not_found"},null)
  })
}

Contact.getAll = (title,result) => {

   let query = "SELECT * FROM contacts"

  if (title) {
    query += `WHERE title LIKE '%${title}%'`
  }

  sql.query(query,(err,res) => {
     if(err) {
       console.log("error: ",err);
       result(null,err)
       return
     }

     console.log("Tutorails: ",res)
     result(null,res)

  })
}

module.exports = Contact
