import { React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import  SpaceScene  from './SpaceScene';
import ControlPanel from './ControlPanel';
import SteeringWheel from './SteeringWheel';
import './Hero.css';
import AstronautCursor from './AstronautCursor';

const Hero = () => {
    const navigate = useNavigate();
    const [hyperdrive, setHyperdrive] = useState(false);


    useEffect(() => {
        if(hyperdrive){
            const timer = setTimeout(() => {
                navigate('/destination/mars');
            }, 1700);
            return () => clearTimeout(timer);
        }
        
    },[hyperdrive,navigate])

    return (
        
        // <div style={{ textAlign: 'center', marginTop: '50px' }}>
        //     <h1>Galactic Travels</h1>
        //     <p>Experience the universe like never before.</p>
        //     <div style={{ margin: '20px 0', border: '1px dashed #666', padding: '20px' }}>
        //         {/* Placeholder for 3D Scene */}
        //         <p style={{ color: '#888' }}>[ 3D Scene Placeholder ]</p>
        //         <p style={{ fontSize: '0.8rem' }}>*Candidate: Add your Three.js magic here!*</p>
        //     </div>
        //     <button
        //         onClick={() => navigate('/destination/mars')}
        //         style={{ padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer' }}
        //     >
        //         Book a Trip to Mars
        //     </button>
        // </div>
        <div className="cockpit">
            <AstronautCursor/>
            <div className="title">COCKPIT AREA</div>
            <div className="frontGlass">
                <SpaceScene hyperdrive={hyperdrive} />
                 
            </div>

             <div className="dashboard">
                <ControlPanel side="left" />
                <SteeringWheel onEngage={() => setHyperdrive(true)} />
                <ControlPanel side="right" />
            </div>
        </div>
    );
};

export default Hero;
