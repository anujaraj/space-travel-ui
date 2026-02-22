import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StarBackground from './StarBackground';    
import FloatingAstronaut from "./FloatingAstronaut";
import MarsSphere from './Mars';
import { Canvas } from '@react-three/fiber';
import './Destination.css';

const Destination = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [returnback,setReturnBack] = useState(false);

    const planetData = {
        name: id.charAt(0).toUpperCase() + id.slice(1),
        description: "The Red Planet. Dusty, cold, and perfect for adventure.",
        distance: "225 million km",
        travelTime: "3 Days (Hyper-Warp)",
        price: "$499,999",
    };

        useEffect(() => {
            if(returnback){
                const timer = setTimeout(() => {
                    navigate('/');
                }, 1700);
                return () => clearTimeout(timer);
            }
            
        },[returnback,navigate])

    return (
    <div className="destinationPage">
      <StarBackground  returnback={returnback}/>
       <div className="marsCanvas">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <MarsSphere returnback={returnback} />
        </Canvas>
      </div>

      
  
      <FloatingAstronaut returnback={returnback}/>
      <div className="destination-content"> 
        <div className="destinationHUD">
          <button className="backBtn" onClick={() => setReturnBack(true)}>
              ← Return to Cockpit
          </button>
          <div className="infoCard">
            <h1>{planetData.name.toUpperCase()}</h1>
            <p>{planetData.description}</p>
            <div className="stats">
              <div className="stat">
                <span>Distance</span>
                <strong>{planetData.distance}</strong>
              </div>

              <div className="stat" >
                <span>Travel Time</span>
                <strong>{planetData.travelTime}</strong>
              </div>

              <div className="stat">
                <span>Price</span>
                <strong>{planetData.price}</strong>
              </div>
            </div>

            <button className="confirmBtn" onClick={() => setLaunched(true)}>
              INITIATE LANDING
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Destination;
