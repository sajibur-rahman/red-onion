import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
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
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
     </main>
    </div>
  );
}

export default App;
