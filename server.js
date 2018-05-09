const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const sgMail = require('@sendgrid/mail');

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').load();
// }

require('dotenv').load();

app.set("port", process.env.PORT || 3001);

app.use(bodyParser.json());

//  Enable CORS for the express server
app.use(cors());
app.options('*', cors());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build")); 
}


app.get("/welcome", (req, res) => {
  res.send("Welcome to my site");
});


app.post("/sending_email", (req, res) => {

  let key = process.env.SENDGRID_API_KEY;
  let username   = process.env.SENDGRID_USERNAME;
  // let password   = process.env.SENDGRID_PASSWORD;
  let name = req.body.name;
  let fromEmail = req.body.email;
  let text = req.body.text;
  let subjectText = `Colloboration inquiry from ${name}`;
  let toEmail = [{email: 'souleymanemoudou@gmail.com'}]

  res.setHeader('Content-Type', 'application/json');
  
  sgMail.setApiKey(key); 

  const msg = {
    to: toEmail,
    from: fromEmail,
    subject: subjectText,
    text: text,
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  sgMail.send(msg, function(error, info){
    console.log(key);
    console.log(username);
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info);
        res.json(info);
        res.status(202)
    };
  });
  
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
