import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
  

import MainUi from "./MainUI";
import CsvReader from "./CsvReader";
  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Routes>
          <Route exact path="/" element={<CsvReader />} />
          <Route path="/main" element={<MainUi />} />
        </Routes>

    </>
  );
}
  
export default App;