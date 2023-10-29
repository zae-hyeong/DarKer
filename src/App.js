import { useState } from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";

function App() {
  const [pageSelect, setPageSelect] = useState(0);

  console.log(pageSelect);

  const navSelector = (navNum) => {
    setPageSelect(navNum);
  }

  return (
    <div className="App">
      <Header navSelect={navSelector}/>
      {pageSelect === 0 ? <Main /> : pageSelect === 1 ? <Login /> : <Signup />}
      <Footer />
    </div>
  );
}

export default App;
