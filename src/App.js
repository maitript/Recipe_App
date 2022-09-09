import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDinnerDining } from "react-icons/md";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav>
        <MdDinnerDining />
          <Logo to ={"/"} >Tasty</Logo>
        </Nav>
        <Text>A one stop platform for recipes to all dishes!!</Text>
        <Search/>
    <Category/>
    <Pages/>
    </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Lobster Two' , cursive;
`;

const Nav = styled.div`
padding: 2rem 0rem;
display:flex;
justify-content: flex-start;
align-items:center;

svg{
  font-size: 2rem;
}
`;

const Text = styled.h2`
  font-size:80;
  padding-bottom:2rem;
`;

export default App;
