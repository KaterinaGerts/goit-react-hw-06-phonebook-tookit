import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import {useSelector, useDispatch } from 'react-redux';
import {deleteContact} from 'redux/contacts/contacts-actions';
import {getVisibleContacts} from 'redux/contacts/contacts-selectors';




 function ContactList() {  

   const contacts = useSelector(getVisibleContacts);
   const dispatch = useDispatch();

   const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <ol className={s.contactList}>
      {contacts?.map(({ name, number, id }) => (
        <li className={s.name} key={id}>
          {name}: <span className={s.number}>{number}</span>
          <button
            type="button"
            className={s.button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList