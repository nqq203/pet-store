import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import AboutCat from "../pages/About/AboutCat";
import AboutDog from "../pages/About/AboutDog";
import News from "../pages/News/News";
import Cat from "../pages/Pet/Cat";
import Dog from "../pages/Pet/Dog";
import NoPage from "../pages/NoPage/NoPage";
const Navbar = (props) => {
  const { scrollY, isNavExpanded } = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isNavExpanded={isNavExpanded} />}>
          <Route index element={<Home />} />
          <Route path="about-cat" element={<AboutCat />} />
          <Route path="about-dog" element={<AboutDog />} />
          <Route path="cat" element={<Cat />} />
          <Route path="dog" element={<Dog />} />
          <Route path="news" element={<News />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
