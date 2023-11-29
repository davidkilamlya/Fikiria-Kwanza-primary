import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
// import Aboutus from "./Container/About/Aboutus";
import Sponsorship from "./Components/Sponsorship/Sponsorship"
import Home from "./Container/Home/Home";
// import ContactUs from "./Container/Contactus/ContactUs";
// import Academics from "./Container/Academics/Academics";
import AcademicsPage from "./Container/Academics/AcademicsPage";
// import AdmissionPage from "./Container/Admission/AdmissionPage";
import Gallery from "./Components/Gallery/Gallery";
// import Resources from "./Components/Resources/Resources";
// import Calender from "./Components/Resources/ResourcesPages/Calender/Calender";
// import HandBook from "./Components/Resources/ResourcesPages/Handbook/HandBook";
// import CurriculumGuide from "./Components/Resources/ResourcesPages/CurriculumGuide/CurriculumGuide";
// import Study from "./Components/Resources/ResourcesPages/Study/Study"
// import Parent from "./Components/Resources/ResourcesPages/Parent/Parent";
// import HealthWellness from "./Components/Resources/ResourcesPages/HealthWellness/HealthWellness";
// import Library from "./Components/Resources/ResourcesPages/Library/Library";
// import Extra from "./Components/Resources/ResourcesPages/Extra/Extra";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/" element={<Home />} />
        {/* <Route path="contactus" element={<ContactUs />} /> */}
        {/* <Route path="about" element={<Aboutus />} /> */}
        <Route path="academics" element={<AcademicsPage />} />
        <Route path="admission" element={<Sponsorship />} />
        <Route path="gallery" element={<Gallery />} />

        {/* <Route path="resources/" element={<Resources />}>
          <Route path="handBook"  element={<HandBook />} />
          <Route path="curriculumGuide" element={<CurriculumGuide />} />
          <Route path="calender" element={<Calender />} />
          <Route path="study" element={<Study />} />
          <Route path="parent" element={<Parent />} />
          <Route path="healthWellness" element={<HealthWellness />} />
          <Route path="library" element={<Library />} />
          <Route path="extra" element={<Extra />} />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
