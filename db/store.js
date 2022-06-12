const fs = require('fs');
const util = require('util');
const uuidv1 = require('uuidv1'); //generates a random id


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    // function that reads from the db.json file
    read() {
        return readFile("db.json", "utf8")
    }
    // function to write to the db.json file. that will take in some data. parameters
    
    // function to get all the data from the db.json file. calls read function, and parse the notes.
    
    // function to add to the notes. and use the write function already written. and pass on new notes as the parameter to the write function.
    // function to removes notes. take in the id parameters and look for the note associated with the id and remove the note
    
    
}

module.exports = new Store();