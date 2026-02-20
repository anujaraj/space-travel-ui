import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Destination from './components/Destination';
import AstronautCursor from './components/AstronautCursor';

function App() {
    return (
        <Router>
            { location.pathname === "/" && <AstronautCursor /> }

            <div className="app-container">
                {/* <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '20px' }}>
                    <Link to="/">Home</Link>
                    <Link to="/destination/mars">Destination: Mars</Link>
                </nav> */}

                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/destination/:id" element={<Destination />} />
                </Routes>
            </div>
        </Router>
        
    );
}

export default App;
