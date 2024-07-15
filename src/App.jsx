import './App.css'
import './Index.css'
import Routes from './components/Routes/Routes'
import Background from './components/Layout/background/Background'
import Footer from './components/Layout/footer/Footer'
import Header from './components/Layout/header/Header'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                    <Routes/>
            </BrowserRouter>
            <div className="background-frame">
                <Background className="background" />
            </div>
            <Footer />
        </>
    )
}

export default App
