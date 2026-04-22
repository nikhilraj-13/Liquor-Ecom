import {Routes, Route} from 'react-router'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<h1 className="text-4xl text-center mt-20">Home Page</h1>} />
          <Route path="/about" element={<h1 className="text-4xl text-center mt-20">About Page</h1>} />
          <Route path="/career" element={<h1 className="text-4xl text-center mt-20">Career Page</h1>} />
          <Route path="/contact" element={<h1 className="text-4xl text-center mt-20">Contact Page</h1>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;