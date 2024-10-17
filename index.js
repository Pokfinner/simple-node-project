// index.js
function add(a, b) {
  return a + b;
}

const app = require("express")()

app.get("/", (req, res) => res.send("Server UP."))
app.listen(3000, () => console.log("Server listening on 3000"))

module.exports = { add };

