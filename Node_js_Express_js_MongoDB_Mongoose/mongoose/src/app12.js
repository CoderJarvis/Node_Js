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

// inserting document into collection (old method)
// const doc1 = new User({
//     username : "saswatkumarpanda",
//     password : "saswat123",
//     email : "saswat@gmail.com",
//     phone : "8337826734"
// })
// doc1.save();

// inserting document into collection (modern method)
const insertDocument = async ()=>{
    const doc2 = new User({
        username:"samay3",
        password : "samay123",
        email : "samaya@gmail.com",
        phone : "737637737"
    })
    const result = await doc2.save();
    console.log(result);
}
insertDocument();

