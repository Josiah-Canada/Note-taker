const router = require('express').Router();


const store = require('../db/store')

router.get('/notes', (req, res) => {
   store.getNotes().then(e => {
    return res.json(e)
   }); 
});

// for the post route use req parameters to get the data for the body

router.post('/notes', (req, res) => {
   store.addNotes(req.body).then(e => {
      return res.json(e)

//       title = store.deleteNotes(req.body)
// .then(m => {
//    return res.json(m)
// })      if (title && text) {
//          const newNotes = {
//             title,
//             text,
//             id: uuid(),
//          }
//       }
   });
});


// for the delete route you need the id from req.params.id

let notes = require('../db/db.json')
const fs = require('fs')
router.delete('/notes/:id', (req, res) => {
   // store.removeNotes(req.body).then(d => {
   //    return res.json(d)
   // });
   const id = req.params.id
   const newNote = notes.filter((note) => {
      return note.id !== id
   })
   fs.writeFile("./db/db.json", JSON.stringify(newNote), (err, data) => {
      if (err) throw err
   })
   res.json(newNote)
});


module.exports = router