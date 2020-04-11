const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");
// API Routes
router.use("/api", apiRoutes);

router.get("/google/:query", (req, res) => {
  var query = req.params.query
  console.log(query)
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`).then(x=>{
    console.log(x.data.items)
    res.json(x.data.items)
  })
})
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
