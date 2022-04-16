import { Route, Routes } from "react-router-dom";
import Breakfast from "./Pages/Home/Breakfast/Breakfast";
import Home from "./Pages/Home/Home";
import Meals from "./Pages/Home/Meals/Meals";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import Signup from "./Pages/Signup/Signup";


function App() {
  return (
    <div>
     <Header/>
     <main>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/*" element={<Meals/>}>
           <Route path="breakfast" element={<Breakfast/>}/>
           <Route path="launch" element={<Breakfast/>}/>
           <Route path="dinner" element={<Breakfast/>}/>
         </Route>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
     </main>
    </div>
  );
}

export default App;
