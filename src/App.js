import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element= {<Main />} />
        <Route path="Blog" element= {<Blog />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
