import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="App-weather">
        <Weather defaultCity="New York" />
      </div>
      <p>
        <a
          href="https://github.com/jane-ovcharenko/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>{" "}
        code by{" "}
        <a
          href="https://dazzling-moonbeam-551a6d.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Jane Ovcharenko
        </a>
      </p>
    </div>
  );
}
