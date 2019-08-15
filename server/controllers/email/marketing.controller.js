const fs = require('fs')
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const handlebars = require('handlebars');
const path = require('path');

const AUTH_USERNAME = process.env.SENDGRID_USERNAME
const AUTH_PASS = process.env.SENDGRID_PASS
const AUTO_EMAIL = process.env.EMAIL_CEO
const USERS_LIST = fs.readFileSync(path.join(__dirname, '../../nodemailer/templates/marketing/users.csv'), 'utf-8').split('\n')
const FOODS_LIST = fs.readFileSync(path.join(__dirname, '../../nodemailer/templates/marketing/foods.csv'), 'utf-8').split('\n')
const FOOD_EMAIL_3 = fs.readFileSync(path.join(__dirname, '../../nodemailer/templates/marketing/food.promotion.3.html'), 'utf-8')
const EVENT_EMAIL = fs.readFileSync(path.join(__dirname, '../../nodemailer/templates/marketing/event.promotion.html'), 'utf-8')

module.exports = {
  foodPromotion (req, res) {
    let { purpose } = req.body

    // CREATING THE USER LIST FROM TXT
    let users = []
    
    USERS_LIST && USERS_LIST.map((userString) => {
      let userSplit = userString.split(",")
      let user = {
        id: userSplit[0],
        name: userSplit[1],
        email: userSplit[2],
      }
      users.push(user)
    })
    // console.log(USERS_LIST)
    console.log(users)

    // CREATING THE FOOD LIST FROM TXT
    let foods = []
    FOODS_LIST && FOODS_LIST.map((foodString) => {
      let foodSplit = foodString.split(";")
      let food = {
        imageUrl: foodSplit[0],
        name: foodSplit[1],
        producer: foodSplit[2],
        normalPrice: foodSplit[3],
        dishkonPrice: foodSplit[4],
      }
      foods.push(food)
    })
    console.log(foods)

    let score = 0
    // SEND EMAIL TO CUSTOMER
    if (purpose === "send") {
      users && users.map(async userData => {
        let customerName = userData.name
        let customerNameCapitalize = customerName.charAt(0).toUpperCase() + customerName.slice(1)
        let customerEmail = userData.email
              
        let emailTemplate = FOOD_EMAIL_3
        
        // setting up email with data in handlebars
        let template = handlebars.compile(emailTemplate)
        let data = { 'name': customerNameCapitalize, 'foods': foods }
        let templateWithData = template(data)
    
        // setup email data with unicode symbols
        let mailOptions = {
          from: `"Marco from Dishkon" ${AUTO_EMAIL}`,
          to: customerEmail,
          subject: `Makanan Yang Dapat Kamu Selamatkan - Tangerang`, 
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
    
        await client.sendMail(mailOptions, function(err, info){
          if (err){
            console.log(`ERROR: Food Promotion Message not sent to ${userData.name} ${userData.email}`, err)
            res.status(400).json({
              message: 'ERROR: Food Promotion Message not sent',
              err,
              sent: score,
            })    
          }
          else {
            score++
            console.log(`Food Promotion Message sent to ${userData.name} ${userData.email}`, info.message)
            if (score >= users.length) {
              console.log(`Email sent: ${score}`)
              res.status(200).json({
                message: 'Food Promotion Message is sent',
              })    
            }
          }
        })
      })
    } else {
      res.status(200).json({
        message: `Avengers checked: ${users.length}`,
      })
    }
  },
  eventPromotion (req, res) {
    let { purpose } = req.body

    // CREATING THE USER LIST FROM TXT
    let users = []
    
    USERS_LIST && USERS_LIST.map((userString) => {
      let userSplit = userString.split(",")
      let user = {
        id: userSplit[0],
        name: userSplit[1],
        email: userSplit[2],
      }
      users.push(user)
    })
    // console.log(USERS_LIST)
    console.log(users)

    let score = 0
    // SEND EMAIL TO CUSTOMER
    if (purpose === "send") {
      users && users.map(async userData => {
        let customerName = userData.name
        let customerNameCapitalize = customerName.charAt(0).toUpperCase() + customerName.slice(1)
        let customerEmail = userData.email
              
        let emailTemplate = EVENT_EMAIL
        
        // setting up email with data in handlebars
        let template = handlebars.compile(emailTemplate)
        let data = { 'name': customerNameCapitalize }
        let templateWithData = template(data)
    
        // setup email data with unicode symbols
        let mailOptions = {
          from: `"Marco from Dishkon" ${AUTO_EMAIL}`,
          to: customerEmail,
          subject: `FoodVenture - Awesome Event, Limited Seats !`, 
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
    
        await client.sendMail(mailOptions, function(err, info){
          if (err){
            console.log(`ERROR: Event Promotion Message not sent to ${userData.name} ${userData.email}`, err)
            res.status(400).json({
              message: 'ERROR: Event Promotion Message not sent',
              err,
              sent: score,
            })    
          }
          else {
            score++
            console.log(`Event Promotion Message sent to ${userData.name} ${userData.email}`, info.message)
            if (score >= users.length) {
              console.log(`Email sent: ${score}`)
              res.status(200).json({
                message: 'Event Promotion Message is sent',
              })    
            }
          }
        })
      })
    } else {
      res.status(200).json({
        message: `Avengers checked: ${users.length}`,
      })
    }
  },
}