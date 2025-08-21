
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LoadingSpinner from "./components/LoadingSpinner";

import { Suspense, lazy } from "react";

const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={ <Suspense fallback={<LoadingSpinner />}> <Home /></Suspense>} />
        <Route path="about" element={ <Suspense fallback={<LoadingSpinner />}> <About /> </Suspense> } />
        <Route path="skills" element={ <Suspense fallback={<LoadingSpinner />}> <Skills /></Suspense>} />
        <Route path="projects" element={ <Suspense fallback={<LoadingSpinner />}> <Projects /></Suspense>} />
        <Route path="contact" element={ <Suspense fallback={<LoadingSpinner />}> <Contact /></Suspense>} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
