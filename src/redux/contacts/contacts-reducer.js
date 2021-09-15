import { combineReducers } from 'redux';
import types from './contacts-types';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const CheckedContactName = (contacts, newContact) => {
  const nameNormalize = newContact.name.toLowerCase();
     const checkedName = contacts.find(
       contact => nameNormalize === contact.name.toLowerCase(),
     );
 
     if(checkedName) { alert(`${newContact.name} is already in contacts!`)
     return contacts;
     } return [...contacts, newContact];
 }

const item = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.ADD:     
      return CheckedContactName(state, payload);
      
      case types.DELETE:
        return state.filter(({id}) => id !== payload)
      
     
    default:
      return state;
  }
};

const filter = (state = '', {type, payload}) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;     
  
    default:
     return state;
  }
}

const contactsReducer = combineReducers({
  item,
  filter, 
});

export default contactsReducer;