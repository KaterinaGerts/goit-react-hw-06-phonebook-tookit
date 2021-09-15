import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import {deleteContact} from 'redux/contacts/contacts-actions';


 function ContactList({ contacts, onDeleteContact }) {
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

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};


const mapStateToProps = state => {
  const {filter, item} = state.contacts; 
  const visibleContacts = getVisibleContacts(item, filter);

 return {
   contacts: visibleContacts,
  }
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList)