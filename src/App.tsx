import React, { useRef } from 'react';
import { Experience } from './pages/Experience';
import MyHistory from './pages/MyHistory';
import MyProjects from './pages/MyProjects';
import Section1 from './pages/Section1';
import Section2 from './pages/Section2';

function App() {
  const aboutSection = useRef<HTMLDivElement>(null);
  return (
    <>
      <Section1 ref={aboutSection} />
      <Section2 ref={aboutSection} />
      <MyHistory />
      <Experience />
      <MyProjects />
    </>
  );
}

export default App;
