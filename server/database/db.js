let mongoose = require('mongoose');
let endpoint = process.env.MONGODB_URI ||  'mongodb://localhost/weather';
mongoose.connect(endpoint, {useNewUrlParser: true});

//Define your schema
let weatherSchema = new mongoose.Schema({
    name: String
});

//compiling our schema into a model
let Weather = mongoose.model('Weather', weatherSchema);

let save = (location) => {

    let blue = new Weather({name: location})

    blue.save((err, blue) => {
        if(err) return console.error(err);
        console.log('saved successfully', blue)
      });

}

module.exports.save = save;