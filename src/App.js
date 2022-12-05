import './App.css';
import EffectComponent from './componenets/EffectComponent';
import Header from './componenets/Header'
import StateComponent from './componenets/StateComponent';
import {Routes, Route} from 'react-router-dom'
import Homescreen from './screens/HomeScreen'
import ReferenceScreen from './screens/ReferenceScreen'
import DetailScreen from './screens/DetailScreen'


function App() {
  return (
    <div className="App col-container">
      <Header />
      <Routes>
        <Route path= "/" element={<HomeScreen />} />
        <Route path= "/reference" element={<ReferenceScreen />} />
        <Route path= "/details/:id" element={<DetailScreen />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
