const http = require("http")
const fs = require("fs")
const { getSystemErrorMap } = require("util")
const args = require("minimist")(process.argv.slice(2))
args["port"]
const port = args.port || process.env.port || 3000
const e = 0
fs.readFile("./www/index.html", "utf8", (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      }) 

      server.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})