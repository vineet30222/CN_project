//require the library
const mongoose=require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/item_list_db');

//acquire the coonection (to check if it is successful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print the message

db.once('open',function(){
    console.log('Sucessfully connected to the database');

});