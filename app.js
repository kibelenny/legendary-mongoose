const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/fruitDB");

const fruitSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Missing Fruit Name']
    },

    ratings : {
        type : Number,
        min : 1,
        max : 10
    },

    review : String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const personSchema = new mongoose.Schema({
    name : {
        type : String
    },
    age : Number,
    favouriteFruit : fruitSchema
})


const apple = new Fruit({
    name : "Apple",
    ratings : 8,
    review : "Tastes Good"
})

//apple.save()

const banana = new Fruit({
    name : 'Banana',
    ratings : 9,
    review : "Yello Fruit"
})

const orange = new Fruit({
    name : 'Orange',
    ratings : 10,
    review : "Good Chaser"
})

// CRUD : Create
// Fruit.insertMany([apple, banana, orange], function(err){
//     if (err) {
//         console.log(err) 
//     }else{
//         console.log("DB Update Successful");
//     }
// })


// CRUD : Read
// Fruit.find(function(err, data){
//     if (err){
//         console.log(err);
//     }else{
//         data.forEach(function(fruit){
//             console.log(fruit.name);
//         })
//     }
// })

// // CRUD : Update
// Fruit.updateOne({_id : "632a8d2039c7bdd21ec0790a"}, {review : "Works well with Gin"}, function(err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Updated Successfully")
//         mongoose.connection.close()
//     }
// })

//CRUD : Delete
// Fruit.deleteOne({_id : "632a8d2039c7bdd21ec07909"}, function(err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log('Deleted');
//         mongoose.connection.close()

//     }
// })

const Person = mongoose.model("Person", personSchema)

const john = new Person({
    name : 'John',
    age : 43
})

// john.save()

const jane = new Person({
    name : 'Jane',
    age : 24,
    favouriteFruit : orange
})

// jane.save()

Person.updateOne({name : 'John'}, {favouriteFruit : apple}, function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Updated")
    }
})