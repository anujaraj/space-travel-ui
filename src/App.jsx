import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Destination from './components/Destination';
import AstronautCursor from './components/AstronautCursor';

function App() {
    return (
        <>   
        <Router>
            <AstronautCursor/>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/destination/:id" element={<Destination />} />
                </Routes>
            </div>
        </Router>
        </>
        
    );
}

export default App;
