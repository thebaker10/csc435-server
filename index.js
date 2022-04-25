const cors = require("cors")
// const books = require("./storeData.json")
const express = require("express")
const {MongoClient} = require("mongodb")
const url = "mongodb://appuser:Ramadan2022@24.111.54.41:27017"
const client = new MongoClient(url)
const database = "bookstore"
const app = express()
app.use(cors())



app.get("/books", async (req, res)=> {
    const books = await getBooks()
    res.json(books)
})



async function getBooks() {
    await client.connect()
    const db = client.db(database)
    const collection = db.collection("books")
    const books = await collection.find({}).toArray()
    return books
}

// async function addBooks(){
//     await client.connect()
//     const db = client.db(database)
//     const collection = db.collection("books")
//     collection.insertMany(books)
// }

// addBooks()
app.listen(8000)