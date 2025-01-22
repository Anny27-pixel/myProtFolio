
import './App.css'
import Banner from './components/banner/Banner';
import Capabilities from './components/capabilities/Capabilities';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className='max-w-screen-2xl mx-auto px-16'>
      <NavBar />
      <Banner />
      <Capabilities />
      </div>
    </div>
  );
}

export default App
