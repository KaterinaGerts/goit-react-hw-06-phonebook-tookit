export const CheckedContactName = (contacts, newContact) => {
  const nameNormalize = newContact.name.toLowerCase();
     const checkedName = contacts.find(
       contact => nameNormalize === contact.name.toLowerCase(),
     );
 
     if(checkedName) { alert(`${newContact.name} is already in contacts!`)
     return contacts;
     } return [...contacts, newContact];
 }