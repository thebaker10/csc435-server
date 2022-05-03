const http = require("http")

it("testing if database connection is successful and if function can convert data to array", () => {
    // const books = await fetch("localhost:8000/books")
    // 
    const option = {
        host: "localhost:8000",
        path: "/books"
    }

    callback = function (response) {
        var str = ''

        response.on('data', function (chunk) {
            str += chunk
        })

        response.on('end', function () {
            const books = JSON.parse(str)
            expect(books.length).toBeGreaterThen(0)
        })
    }

    http.request(option, callback)
})