import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import BlogId from "./pages/BlogId";
import donnee from "./api/api.json";

function App() {
  injectSpeedInsights();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Blog" element={<Blog donnee={donnee} />} />
        <Route path="Blog/:slug" element={<BlogId data={donnee} />} />
      </Routes>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
