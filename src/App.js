import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaDecorator from "./components/MetaDecorator/MetaDecorator";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <MetaDecorator
        metaTitle="Talha Asre | Web Developer"
        metaDesc="I develop and code pixel perfect sites & apps, and I love what I do."
        canonicalLink={window.location}
      />
      <ToastContainer />

      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="*" element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
