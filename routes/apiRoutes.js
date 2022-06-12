const router = require('express').Router();


const store = require('../db/store')

router.get('/api/notes', (req, res) => {
   store.getNotes().then(e => {
    return res.json(e)
   }); 
});

// for the post route use req parameters to get the data for the body
// for the delete route you need the id from req.params.id