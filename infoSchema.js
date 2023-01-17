const mongoose = require ("mongoose");

const infoSchema =mongoose .Schema ( {
    name :{
        trim : true,
        required: true,
        type: String
    },
    age : {
        type : Number,
        required: true,
    },
    city :{
        type: String,
        required: true
    },
    createTime :{
        type : Date,
        default: Date.now
    }
})

module.exports = mongoose .model("info",infoSchema);