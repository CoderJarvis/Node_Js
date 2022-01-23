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

//read operaton from db
const getDocumet1 = async () =>{
    const result = await User.find();
    console.log(result);
}

const getDocumet2 = async () =>{
    const result = await User.find({username:"saswatkumarsk"}).select({phone:1,_id:0}).limit(1);
    console.log(result);
}

// getDocumet1();
// getDocumet2();

// comparision query operator
const getDocument3 =async () =>{
    const result =await User.find({username :{$eq : "saswatkumarsk"}})
    console.log(result);
}
// getDocument3();
const getDocument4 = async () =>{
    const result = await User.find({username : {$in : ["saswatkumarsk","samayraina"]}})
    console.log(result);
}
// getDocument4();

const getDocument5 = async () =>{
    const result =await User.find({$or:[{username : "saswatkumarsk"},{username:"samayraina"}]})
    console.log(result);
}
// getDocument5();
const getDocument6 = async () =>{
    const result = await User.find().count();
    console.log(result);
}
// getDocument6();

const getDocument7 = async () =>{
    const result =await User.find().sort({username:1});
    console.log(result);
}
// getDocument7()

const updateDocument1 = async () =>{
    const result = await User.updateOne({username : "samayraina"},{$set:{username : "samay"}})
    console.log(result);
}
// updateDocument1();

const deleteDocument1 = async () =>{
    const result = await User.deleteOne({username : "sagar"})
    console.log(result);
}
// deleteDocument1();

const insertDocument = async () => {
    const doc1 = new User( {
        username : "amruta",
        password : "amruta123",
        email : "amruta@gmaim.com",
        phone : "759676677"
    })
    const result = await doc1.save();
    console.log(result);
}
// insertDocument();
getDocumet1()
