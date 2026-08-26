import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/hero/Hero';
import Readme from '@/components/readme/Readme';
import Services from '@/components/services/Services';
import Cases from '@/components/cases/Cases';
import Process from '@/components/process/Process';
import Contact from '@/components/contact/Contact';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Readme />
        <Services />
        <Cases />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
