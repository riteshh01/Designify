import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import OurLatestCreation from "./sections/our-latest-creation";
import AboutOurApps from "./sections/about-our-apps";
import OurTestimonials from "./sections/our-testimonials";
import TrustedCompanies from "./sections/trusted-companies";
import GetInTouch from "./sections/get-in-touch";
import SubscribeNewsletter from "./sections/subscribe-newsletter";
import Generate from "./sections/generate";
import MyGeneration from "./sections/myGeneration";
import YtPreview from "./sections/ytPreview";
import Login from "./components/Login"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <OurLatestCreation />
              <AboutOurApps />
              <OurTestimonials />
              <TrustedCompanies />
              <GetInTouch />
              <SubscribeNewsletter />
            </>
          }
        />

        <Route path="/generate" element={<Generate/>} />
        <Route path="/generate/:id" element={<Generate/>} />
        <Route path="/my-generating" element={<MyGeneration/>} />
        <Route path="/generate" element={<Generate/>} />
        <Route path="/preview" element={<YtPreview/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}