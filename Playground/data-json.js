/**
 * Chapter 4
 */
const fs = require('fs')
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan holiday'
}
const infor = {
    name: 'Long2',
    planet: 'earth',
    age: '25'
}


/**
 *  dataBuffer return a bit
 */
const dataBuffer = fs.readFileSync('infoData.json');
/**
 * Convert bit to string
 */
const infoDataJSON = dataBuffer.toString();
const infoData = JSON.parse(infoDataJSON);
console.log(infoData);
infoData.name = 'Update Name';
infoData.age = 21;
const infoUpdateJSON  = JSON.stringify(infoData);
fs.writeFileSync('infoData.json', infoUpdateJSON);

// //object
// console.log(book) 

// //JSON object -> JSON string
// const bookData = JSON.stringify(book);
// console.log('JSON obj -> JSON str: ',bookData)
// fs.writeFileSync('data-json.json',bookData)
// // string -> object
// const parseData = JSON.parse(bookData);
// // console.log(parseData)
// console.log('author: ',parseData.author)
// const dataBuffer = fs.readFileSync('data-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title)

