import { useState } from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import Cart from "./Component/Cart/Cart";

function App() {
  const [pageSelect, setPageSelect] = useState(1);
  const [isAsideActive, setIsAsideActive] = useState(false);

  const asideActiveHandler = (isActive) => {
    setIsAsideActive(isActive);
  }

  const navSelectHandler = (navNum) => {
    setPageSelect(Number(navNum));
  }

  return (
    <div className="App">
      <Header onNavSelect={navSelectHandler} onAsideActive={asideActiveHandler}/>
      {pageSelect === 1 ? <Main /> : pageSelect === 2 ? <Login /> : <Signup />}
      <Cart isAsideActive={isAsideActive} onAsideActive={asideActiveHandler}/>
      <Footer />
    </div>
  );
}

export default App;
