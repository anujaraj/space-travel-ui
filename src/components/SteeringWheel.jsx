import './Steering.css'

export default function SteeringWheel({ onEngage }) {
    return (
        <div className="steeringWheel" onClick={onEngage}>
            <div className="innerCircle">
                ENGAGE DESTINATION :<br/>
                Book you tickets to MARS               
            </div>
        </div>
    );
}