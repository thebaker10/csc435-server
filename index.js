const cors = require("cors")
const express = require("express")
const {MongoClient} = require("mongodb")
const url = "mongodb://24.111.54.41:27017"
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

app.listen(8000)