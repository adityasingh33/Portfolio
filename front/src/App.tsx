import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Main from './pages/Main'

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Main />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App
