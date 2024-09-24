const express = require("express");
const router = express.Router();
const TEAM = "database";
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
    res.status(422).json({ message: "Please fill required fields." });
  } else {
    TEAM.findOne({ email: email }).then((savedUser) => {
      if (savedUser) {
        res.status(422).json({ error: "Email is already registered." });
      } else {
        const newuser = new TEAM({
          teamname,
          email,
          mobile,
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
              console.log(user);
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
