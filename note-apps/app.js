const yargs = require('yargs')
const note = require('./node.js')

/**  
 * Chapter 4
*/
//create add command
yargs.command({
     command: 'add',
     describe: 'Add a new note',
     builder: {
         title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
         },
         body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
         }
     },
     handler: function(argv) {
        note.addNote(argv.title, argv.body)

        //  console.log('Title: ',argv.title)
        //  console.log('Body: ', argv.body)
     }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title: {
            describe: 'remove title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        note.removeNotes(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function() {
        console.log('List a note!!')
    }
})
//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('read a note')
    }
})

yargs.parse()
// console.log(yargs.argv)

