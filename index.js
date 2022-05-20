const contactsOperations = require('./contacts');

const invokeAction = async({ action, id, data }) => {
    switch(action) {
        case "listContacts":
            const contacts = await contactsOperations.listContacts();
            console.log(contacts);
            break;
    }
}

invokeAction({action:'listContacts'})
