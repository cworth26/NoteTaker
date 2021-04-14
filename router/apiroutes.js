const router = require('express').Router();
const fs = require("fs");

// function updateDB(){
//     fs.writeFile("db/db.json",JSON.stringify(notes, '\t'), err => {
//         if (err) throw err;
//         return true;
//     }
// });


router.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    console.log(notes)
    res.json(notes)
});

//writing new note to JSON file)
router.post('/notes', (req, res) => {
    //reading the JSON file
    notesData = fs.readFileSync("db/db.json", "utf8");
    console.log(notesData);
//parsing data & changing into Javascript
    notesData = JSON.parse(notesData);
//adding new notes to array
    notesData.push(req.body);
//changing into string so it can be written to file
    notesData = JSON.stringify(notesData);
    fs.writeFile("db/db.json", notesData, "utf8", function(err) {
        if (err) throw err;
    });

//sends back info to browser
res.json(JSON.parse(notesData));
//ACTION ITEMS:
// how to write to a json file from node.js
//read file first
//change into java script (parse)
//add to it & then save (writetofile)
});

module.exports = router;