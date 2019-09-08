const fs = require('fs')
 
const getNotes = function () {
    return 'Your notes here...!'
}

// [{"title": "hello title"}] <-- [Array(Object(propertise: value))]

/**
 * 
 * @param {*} title 
 * filter the file if title is exist, return length == 0 if no duplicate title
 * @param {*} body 
 */
const addNotes = (title,body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter( (note) => {
        return note.title === title 
    })
    // console.log(duplicateNotes)
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title , 
            body: body
        })
        console.log('New note added: ', notes)
        saveNotes(notes)
    } else {
        console.log('Title is already taken!')
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const searchNote = notes.filter((note) => {
        return note.title !== title
    })
    if(searchNote.length === 0) {
        console.log("not found!!")
    } else {
        saveNotes(searchNote)
    }
}
/**
 * 
 * @param {*} notesData 
 */
const saveNotes = (notesData) => {
    const dataJSON = JSON.stringify(notesData)
    fs.writeFileSync('notes.json', dataJSON)
    console.log("saved Note")
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)    
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNotes,
    removeNotes: removeNotes
} 