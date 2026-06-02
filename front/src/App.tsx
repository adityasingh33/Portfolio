import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Project from './pages/Project'
import Main from './pages/Main'

const App = () => {
  return (

    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Navbar />

        <main className='flex-1'>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} /> */}

           <Route path="/" element = {<Main/>}></Route>
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>


  );


}

export default App
