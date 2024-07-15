import AboutUs from '../AboutUs/AboutUs'
import Contact from '../Contact/Contact'
import History from '../History/History'
import Home from '../Home/Home'
import Discover from '../Discover/Discover'
import Movie from '../Movie/Movie'
import { Route, Routes } from 'react-router-dom'

function AnimatedRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Discover" element={<Discover />} />
            <Route path="/MyHistory" element={<History />} />
            <Route path="/Movie" element={<Movie />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
  );
}

export default AnimatedRoutes;