use patient

db.patient.insertOne(
   {
      firstName: "Max",
      lastName: "Schwarzmueller",
      age: 29,
      history: [
         {
            disease: "cold",
            treatment: "rest and hydration"
         }
      ]
   }
)

db.patient.insertOne(
   {
      firstName: "Min",
      lastName: "Jackson",
      age: 31,
      history: [
         {
            disease: "cold",
            treatment: "lots and lots of pretzels"
         }
      ]
   }
)

db.patient.insertOne(
   {
      firstName: "Mike",
      lastName: "Giebner",
      age: 54,
      history: [
         {
            disease: "tired",
            treatment: "get a good night's sleep"
         },
         {
            physician: {
               one: "my wife",
               two: "Dr. McKinney"
            }
         }
      ]
   }
)

db.patient.insertMany([
   {
      firstName: "Stephen",
      lastName: "Giebner",
      age: 54,
      history: [
         {
            disease: "annoyed",
            treatment: "get a remote job"
         }
      ]
   },
   {
      firstName: "Shari",
      lastName: "Giebner",
      age: 54,
      history: [
         {
            disease: "works at Clemson",
            treatment: "get better teammates"
         }
      ]
   }
]
)

// Challenge 2
// But this gets rid of the treatment portion of history and the physician document
db.patient.updateOne(
   { firstName: "Mike" },
   {
      $set: {
         lastName: "Gibbels",
         age: 53,
         history: {disease: "really tired"}
      }
   }
)

// To access
db.patient.find({"history.disease": "tired"}).pretty()
db.patient.find({"history.physician": "my wife"}).pretty()

// Challenge 3
db.patient.find({age: {$gt: 50}}).pretty()

// Challenge 4
db.patient.deleteMany({"history.disease": "cold"})