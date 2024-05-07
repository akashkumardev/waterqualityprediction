import logo from './logo.svg';
import './App.css';
import "./Component/water.css"

import WaterQuality from './Component/WaterPrediction';
import WaterQualityPrediction from './Component/WaterPredictionNew';

function App() {
  return (
    <div >
     {/* <WaterQuality/> */}
     <WaterQualityPrediction/>
   
    </div>
  );
}

export default App;
