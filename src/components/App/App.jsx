import {
  Header,
  ContactForm,
  Section,
  ContactList,
  Container,
  Filter,
} from 'components';
import { Toaster } from 'react-hot-toast';
import { toastOptions } from 'styles';

export const App = () => {
  return (
    <>
      <Header>PONEBOOK</Header>
      <Section>
        <Container>
          <ContactForm />
          <ContactList>
            <Filter />
          </ContactList>
        </Container>
      </Section>
      <Toaster toastOptions={toastOptions} />
    </>
  );
};
