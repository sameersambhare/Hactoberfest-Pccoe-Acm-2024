const express = require("express");
const router = express.Router();
const TEAM = require("../models/team");
const nodemailer = require("nodemailer");
const UserAuthName = process.env.UserAuthName;
const UserAuthPass = process.env.UserAuthPass;

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: UserAuthName,
    pass: UserAuthPass,
  },
});

router.post("/register", (req, res) => {
  const {
    teamname,
    email,
    mobile,
    college,
    member1,
    member2,
    member3,
    member4,
  } = req.body;
  if (!teamname || !email || !mobile || !college) {
    res.status(422).json({ error: "Please fill required fields." });
  } else {
    TEAM.findOne({ email: email }).then((savedUser) => {
      if (savedUser) {
        res.status(422).json({ error: "Email is already registered." });
      } else {
        const newuser = new TEAM({
          teamname,
          email,
          mobile,
          college,
          member1,
          member2,
          member3,
          member4,
        });
        newuser
          .save()
          .then((user) => {
            if (!user) {
              res.status(401).json({ error: "Internal server error." });
            } else {
              //               const reciever = {
              //                 from: "samuofficial94@gmail.com",
              //                 to: email,
              //                 subject:
              //                   "Welcome to Design and Develope! Your Registration is Confirmed.",
              //                 html: `<div style="font-family: Arial, sans-serif; color: #333;">
              //   <div style="background-color: #004080; padding: 20px; text-align: center; color: white;">
              //     <h1>Welcome to the PCCOE ACM Design & Development Competition!</h1>
              //   </div>
              //   <div style="padding: 20px;">
              //     <p>Dear ${teamName},</p>
              //     <br />
              //     <p>Thank you for registering for the PCCOE ACM Design & Development competition. We're thrilled to confirm that your team's registration has been successfully completed!</p>
              //     <br />
              //     <p>Here's what you can do next to prepare:</p>
              //     <br />
              //     <ul>
              //       <li><strong>Review Guidelines:</strong> Ensure you’re familiar with the competition rules and submission requirements.</li>
              //       <li><strong>Stay Updated:</strong> Keep an eye on your email for any updates or announcements.</li>
              //       <li><strong>Prepare Your Project:</strong> The competition is just around the corner, so it's time to start brainstorming and working on your design!</li>
              //       <li><strong>Contact Us:</strong> If you have any questions or need clarification, feel free to reach out through our <a href="#">support page</a>.</li>
              //     </ul>
              //     <br />
              //     <p>We’re looking forward to seeing your creative and innovative designs! Good luck!</p>
              //   </div>
              //   <br />
              //   <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
              //     <p>Best regards,</p>
              //     <p>The PCCOE ACM Team</p>
              //   </div>
              // </div>
              // `,
              //               };
              console.log(user);
              // transporter.sendMail(reciever);
              res
                .status(200)
                .json({ message: "Team registered successfully." });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  }
});
module.exports = router;
