import TextBox from "./components/inputs/textbox";
import GlobalStyles from "./globalStyles";
import { Container } from './components/layout/container';

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <TextBox
        name="name"
        label="Name"
      />
    </Container>
  );
}

export default App;
