// DarkModeToggle.js
import React from "react";
function handle(event, setDark){
    // console.log(event);
    setDark(event.target.checked);
    console.log("DarkMode set to ", event.target.checked);
}
export default function DarkModeToggle({setDark}) {
  console.log(setDark, "Dark set");
  return (
    <div>
      <label htmlFor="dark-mode-toggle">Dark Mode:</label>
      <input
        id="dark-mode-toggle"
        type="checkbox"
        onChange={(event) => handle(event, setDark) }
      />
    </div>
  );
}
