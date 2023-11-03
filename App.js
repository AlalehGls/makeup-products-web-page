import "./App.css";
import { createContext, useState } from "react";
import MakeupProducts from "./MakeupProducts";

export const ThemeContext = createContext();



function App() {
  const [DarkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={DarkMode}>
      
      <div className="App">
         <MakeupProducts setDark={(p)=>setDarkMode(p)} /> 
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
