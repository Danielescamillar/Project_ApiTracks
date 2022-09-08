const mongoose = require("mongoose");

const dbConnect = () => {

    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useUnifiedTopology: true
    }, (err, request) => {
        if (!err) {
            console.log("****CORRECT CONNECTION*****")
        } else {
            console.log("****CONNECTION ERROR*****")
            console.log(err)
        }
    })
}

module.exports = dbConnect