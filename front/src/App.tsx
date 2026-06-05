import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Main from './pages/Main'

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Main />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App
