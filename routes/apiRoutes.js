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
   });
});
// for the delete route you need the id from req.params.id

module.exports = router