import styled from "styled-components";
import CountryList from "./components/CountryList";

const App = () => {
  return (
    <StBack>
      <CountryList />
    </StBack>
  );
};

const StBack = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

export default App;
