const contactsOperations = require('./contacts');

async function invokeAction({ action, id, name, email, phone }){
    switch(action) {
        case "list":
            const contacts = await contactsOperations.list();
            console.log(contacts);
            break;
        case "get":
            const contact = await contactsOperations.get(id);
            if (!contact) {
                throw new Error(`Product with id=${id} not found`);
            };
            console.log(contact);
            break;
        case "add":
            await contactsOperations.add(name, email, phone);
            break;
        case "remove":
            await contactsOperations.removeContact(id);
            break;
        default:
            console.log("Unknown action")
    }
}

// invokeAction({ action: 'listContacts' })

// invokeAction({action:'getContactById', id: '5' })

// invokeAction({
//     action: 'addContact',
//     name: 'John Rambo',
//     email: "johnrambo@mail.com",
//     phone: "(826) 145-8756"
// })

invokeAction({action: 'remove', id: 'bb8b7834-9cc5-4dc0-a1f3-501f15888b8c'})


