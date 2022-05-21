const fs = require("fs/promises");
const path = require("path");
const uuid = require("uuid")

const contactsPath = path.join(__dirname, 'db/contacts.json');


async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find(constant => constant.id == contactId);
  return contact ? contact : null;
}

async function addContact(name, email, phone) {
  const newContact = {
    id: uuid.v4(),
    name: name,
    email: email,
    phone: phone,
  };
  const contacts = await listContacts();
  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id == contactId);

  const removeContact = contacts[index];
  if(index !== -1) {
    contacts.splice(index,1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
  }
  return removeContact ? removeContact : null;
}

module.exports = { listContacts, getContactById, addContact, removeContact };