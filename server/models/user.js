var mongoose = require("mongoose");

var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    }
});

// var addUser = new User({
//     email: "kla"
// });

// addUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log("Unable to save ", e);
// });

module.exports = {User};