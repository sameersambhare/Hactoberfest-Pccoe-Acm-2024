const mongoose = require("mongoose");
teamSchema = mongoose.Schema({
  teamname: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  college: {
    type: String,
  },
  member1: {
    type: String,
  },
  member2: {
    type: String,
  },
  member3: {
    type: String,
  },
  member4: {
    type: String,
  },
});
module.exports = mongoose.model("TEAM", teamSchema);
