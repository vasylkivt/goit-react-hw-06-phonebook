import { List, ListWrap } from './ContactList.style';
import { ContactItem } from 'components';

import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = ({ children }) => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ListWrap>
      {children}
      <List>
        {visibleContacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>
    </ListWrap>
  );
};
