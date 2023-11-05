
const mongoose = require('mongoose')

const settings = mangoose.schema({
    loginName:String,
    userId:String,
    loginstatus: { type: Boolean, default: false }
})