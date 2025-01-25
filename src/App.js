import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <SpeedInsights />
      <Header />
      <Routes>
        <Route path="/" element= {<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
