const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const metaDataSchema = new Schema({
  
    desc : {
        type : String,
        required : true
    },
    lattitude : {
        type : String,
        required : true
    },
    longitude : {
        type : String,
        required : true
    },
    numberTrees : {
        type : Number,
        required : true
    },
    AreaUnderSustainablePractices :{
        type : Number,
        required : true
    },
    Watersaved:{
        type : Number,
        required : true
    },
    PollutionReduced:{
        type : Number,
        required : true
    },
    Areaofmangroves:{
        type : Number,
        required : true
    }
});

const MetaData = mongoose.model('MetaData',metaDataSchema);

module.exports = MetaData;
