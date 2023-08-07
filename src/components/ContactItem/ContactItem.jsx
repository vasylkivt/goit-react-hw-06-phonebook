import { Button } from 'components';
import { Item, Text, TextWrap } from './ContactItem.style';
import { useDispatch } from 'react-redux';

import { AiOutlineDelete } from 'react-icons/ai';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Item>
        <TextWrap>
          <Text>{name}</Text>
          <Text>{number}</Text>
        </TextWrap>
        <Button
          $colorHover={'red'}
          onClick={() => {
            dispatch(deleteContact(id));
          }}
          type="button"
        >
          <AiOutlineDelete />
        </Button>
      </Item>
    </>
  );
};
