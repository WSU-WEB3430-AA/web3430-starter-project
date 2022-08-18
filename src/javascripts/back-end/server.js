let path = require("path")
require("dotenv").config()
const express = require("express")

let port = process.env.PORT || "8080"

const app = express()
app.use(express.static(path.join(__dirname, "..", "..", "..", "public")))

app.get("/hello", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body style="width: 80%; margin: 3rem auto;">
        <h1>Hello World!</h1>
        <p>Welcome to the back-end of WEB 3430!</p>
        <a href="/">Back to the front-end</a>
    </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
