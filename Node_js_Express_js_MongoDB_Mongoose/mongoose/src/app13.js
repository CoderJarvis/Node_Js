// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

// connection to the mongodb databae
async function main() {
  await mongoose.connect('mongodb://localhost:27017/jarvis');
}

// creating our collection schema
const userSchema = new mongoose.Schema({
    username : String,
    password :  String,
    email : String,
    phone : String,
    dateOfCreation : {
        type : Date,
        default : Date.now()
    }
})

// creating our collection
const User = mongoose.model('User',userSchema);

// inserting mulitiple documents into collection (modern method)
const insertDocument = async ()=>{
    const doc1 = new User({
        username:"sagar",
        password : "sagar123",
        email : "sagar@gmail.com",
        phone : "647387475"
    })

    const doc2 = new User({
        username:"vidit",
        password : "vidit123",
        email : "vidyt@gmail.com",
        phone : "63537353"
    })
    const doc3 = new User({
        username:"tanmay",
        password : "tanmay123",
        email : "tanmay@gmail.com",
        phone : "647854675"
    })

    const result = await User.insertMany([doc1,doc2,doc3]);
    console.log(result);
}
insertDocument();

