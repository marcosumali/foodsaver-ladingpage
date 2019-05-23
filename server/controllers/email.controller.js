const fs = require('fs')
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const handlebars = require('handlebars');
const path = require('path');

const AUTH_USERNAME = process.env.SENDGRID_USERNAME
const AUTH_PASS = process.env.SENDGRID_PASS
const AUTO_EMAIL = process.env.EMAIL_CEO
const USERS_LIST = fs.readFileSync(path.join(__dirname, '../nodemailer/templates/users.txt'), 'utf-8').split('\n')
const REGISTER_EMAIL = fs.readFileSync(path.join(__dirname, '../nodemailer/templates/avengers.assemble.html'), 'utf-8')

module.exports = {
  avengersAssemble (req, res) {

    // CREATING THE USER LIST FROM TXT
    let users = []
    
    USERS_LIST && USERS_LIST.map((userString) => {
      let userSplit = userString.split(",")
      let user = {
        id: userSplit[0],
        name: userSplit[1],
        email: userSplit[2],
        createdDate: userSplit[3],
        url: userSplit[4]
      }
      users.push(user)
    })
    console.log(USERS_LIST)
    console.log(users)
    
    // SEND EMAIL TO CUSTOMER
    users && users.map(userData => {
      let customerName = userData.name
      let customerNameCapitalize = customerName.charAt(0).toUpperCase() + customerName.slice(1)
      let customerEmail = userData.email
      let customerUrl = userData.url
  
      let emailTemplate = REGISTER_EMAIL
  
      // setting up email with data in handlebars
      let template = handlebars.compile(emailTemplate)
      let data = { 'name': customerNameCapitalize, 'url': customerUrl }
      let templateWithData = template(data)
  
      // setup email data with unicode symbols
      let mailOptions = {
        from: `"Dishkon Indonesia" ${AUTO_EMAIL}`,
        to: customerEmail,
        subject: `Food Avengers Initiative - RSVP`, 
        html: `${templateWithData}`
      }
  
      // send mail with defined transport object
      let options = {
        auth: {
          api_user: `${AUTH_USERNAME}`,
          api_key: `${AUTH_PASS}`
        }
      }
      
      let client = nodemailer.createTransport(sgTransport(options))
  
      client.sendMail(mailOptions, function(err, info){
        if (err){
          console.log('ERROR: Avengers Assemble Message not sent ', err)
          res.status(400).json({
            message: 'ERROR: Avengers Assemble Message not sent',
            err,
          })    
        }
        else {
          console.log(`Avengers Assemble Message sent`, info.message)
        }
      })
    })

    res.status(200).json({
      message: 'Avengers Assemble Message is sent',
    })    
  }
}