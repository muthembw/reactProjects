import reactLogo from "./assets/react.svg";
import './App.css'
// App.jsx
export default function App() {
  return(
    <div className = "container">
      <div className = "logo">
        <img src={reactLogo} alt ="React Logo" width = "40px" />

      </div>
      <div className = "header">
        <h1>Fun Facts about React</h1>
      </div>
      <div className="main">
        <ul>
          <li> Was First released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by META</li>
          <li>Powers thousands of enterprise apps, including mobile apps!</li>
        </ul>
      </div>
    </div>
  );
}