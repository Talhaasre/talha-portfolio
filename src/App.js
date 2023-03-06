import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaDecorator from "./components/MetaDecorator/MetaDecorator";
function App() {
  return (
    <>
      <MetaDecorator
        metaTitle="Talha Asre | Frontend Developer, Consultant & Mentor"
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
