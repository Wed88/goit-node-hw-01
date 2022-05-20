const fs = require("fs/promises");
const path = require("path");
const uuid = require("uuid")

const contactsPath = path.join(__dirname, 'db/contacts.json');


// TODO: задокументировать каждую функцию
async function listContacts() {
    const dataString = await fs.readFile(contactsPath);
    const data = JSON.parse(dataString);
    return data
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts };