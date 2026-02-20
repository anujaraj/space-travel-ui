import './ControlPanel.css';
export default function ControlPanel({ side }) {
  return (
    <div className={`controlPanel ${side}`}>
      <div className="panelScreen">
        <h3>SYSTEM STATUS</h3>
        <p>Navigation: Online</p>
        <p>Fuel: 87%</p>
        <p>AI: Active</p>
      </div>
      <div className="ledRow">
        <div className="led green"></div>
        <div className="led yellow"></div>
        <div className="led red"></div>
      </div>


      <div className="panelButtons">
        <button>SCAN</button>
        <button>LOCK TARGET</button>
        <button>BOOST</button>
      </div>
    </div>
  );
}
