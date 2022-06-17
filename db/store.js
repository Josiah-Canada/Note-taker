const fs = require('fs');
const util = require('util');
const uuidv1 = require('uuidv1'); //generates a random id


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
    // function that reads from the db.json file
    read() {
        return readFile("db/db.json", "utf8")
    }
    // function to write to the db.json file. that will take in some data. parameters
   write(note) {
        console.log(note)
        return writeFile("db/db.json", JSON.stringify(note));
   }
    // function to get all the data from the db.json file. calls read function, and parse the notes.
   getNotes() {
    return this.read().then(note => {
        console.log(note)
        let noteParse;

        try {
            noteParse = [].concat(JSON.parse(note));
        } catch (err) {
            noteParse = [];
        }
        return noteParse;
    });
   }
    // function to add to the notes. and use the write function already written. and pass on new notes as the parameter to the write function.
    // get all notes and save the new notes to the list and write them all back to the file.
    addNotes(note) {
        return this.read().then(existing => {
            var notes = JSON.parse(existing)
            notes.push(note)
            this.write(notes)
            console.log("these are my" + notes)
        });
    
    };
    // function to removes notes. take in the id parameters and look for the note associated with the id and remove the note
    removeNotes(note) {
        return this.read().then(removing => {
            let remove = deleteNote(note)
            removing.slice(remove)
            console.log(note)
        });
    }
    
}

module.exports = new Store();