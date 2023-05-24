import './App.css';
import Rating from "../Pages/Pating Page/Rating";
import Navbar from "../Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../src/Components/Footer/Footer";
import {Route,Routes,Navigate} from "react-router-dom";
import HomepageGrid from "../Pages/Homepage/HomepageGrid";



function App() {
  return (
    <div className="App">
     <Navbar/>
        <Routes>
            <Route path='*' element={<Navigate to={'/home'}/>} key={'home'}/>
            <Route path={'/home'} element={<HomepageGrid/>} key={'home'}/>
            <Route path={'/rating'} element={<Rating/>} key={'rating'}/>
        </Routes>

        <br/>

      <Footer/>
      </div>

  );
}

export default App;
