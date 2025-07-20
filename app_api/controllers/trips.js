const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register model
//const Model = mongoose.model('trips');

//GET: /trips - lists all the trips 
//Regardless of outcome, response must include HTML status code
//and JSON message to the requesting client
const tripslist = async(req, res) => {
    const q = await Trip
    .find({}) // no filter, return all records
    .exec();

    //Uncomment the following line to show results of querey
    //on the console
    //console.log(q);

    if(!q)
    { // Database returned no data 
        return res
                .status(404)
                .json(console.error());
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

//GET: /trips/:tripCode - lists a single trip
//Regardless of outcome, response must include HTML Status code
// and JSOn meesage to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Trip
        .findOne({'code': req.params.tripCode}) // return single record
        .exec();

        //Uncomment the following to show results of querey
        //on console
        console.log(q);

    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    } 
};


module.exports = {
    tripslist,
    tripsFindByCode
};


//POST: /trips - adds a new trip
//rgeardless of outcome, responde must include html status code
//and JSOn meesage to the requesting client
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();
        if(!q)
        {// Database return no data
            return res
                .status(404)
                .json(err);
        } else { // return new trip
            return res
            .status(201)
            .json(q);
        } 
        //Uncomment the folliwng line to show results of operation
         //on the console
        //console.log(q);
};


// PUT: /trips/:tripCode - Adds a new Trip 
// Regardless of outcome, response must include HTML status code 
// and JSON message to the requesting client 
const tripsUpdateTrip = async(req, res) => { 
// Uncomment for debugging 
console.log(req.params); 
    console.log(req.body); 
 
    const q = await Trip
        .findOneAndUpdate( 
            { 'code' : req.params.tripCode }, 
            { 
                code: req.body.code, 
                name: req.body.name, 
                length: req.body.length, 
                start: req.body.start, 
                resort: req.body.resort, 
                perPerson: req.body.perPerson, 
                image: req.body.image, 
                description: req.body.description 
            }  
        ) 
        .exec(); 
         
        if(!q) 
        { // Database returned no data 
            return res 
                .status(400) 
                .json(err); 
        } else { // Return resulting updated trip 
            return res 
                .status(201) 
                .json(q); 
        }     
                
        // Uncomment the following line to show results of operation 
        // on the console 
        // console.log(q); 
};

module.exports = {
    tripslist,
    tripsFindByCode,
    tripsAddTrip, 
    tripsUpdateTrip
};