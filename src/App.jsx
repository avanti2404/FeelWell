import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop'
import { Suspense, lazy } from "react";

// Lazy load the components
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Philanthropy = lazy(() => import("./pages/Philanthropy"));
const ProductServices = lazy(() => import("./pages/ProductServices"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const location = useLocation();

  const getHeaderComponent = () => {
    const headerRoutes = ['/'];
    const header1Routes = ['/aboutus', '/product&Services', '/philanthropy', '/contact'];

    if (headerRoutes.includes(location.pathname)) {
      return <Header />;
    } else if (header1Routes.includes(location.pathname)) {
      return <Header1 />;
    }
    return null; // In case there's no matching route, return null or a default header
  };

  return (
    <div className="app">
      {getHeaderComponent()}
      <ScrollToTop />
      {/* Suspense fallback allows for a loading state while components are being lazy-loaded */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product&Services" element={<ProductServices />} />
          <Route path="/philanthropy" element={<Philanthropy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
