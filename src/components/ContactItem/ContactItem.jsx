import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';

import { ButtonDel, Item, Text, TextWrap } from './ContactItem.style';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handlerDeleteBtn = () => {
    dispatch(deleteContact(id));
    toast.success(`${name} deleted from your contacts list.`);
  };

  return (
    <>
      <Item>
        <TextWrap>
          <Text>{name}</Text>
          <Text>{number}</Text>
        </TextWrap>
        <ButtonDel onClick={handlerDeleteBtn} type="button">
          <AiOutlineDelete />
        </ButtonDel>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
