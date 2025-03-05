import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { BioJogja } from "./components/BioJogja/bioJogja";

function App() {
  return (
    <div className="App">
      <header>
        <div className="navigasi">
          <ul>
            <li>Sejarah</li>
            <li>Geografis</li>
            <li>Wisata</li>
          </ul>
        </div>
      </header>

      <Parallax pages={2} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="bg-image" id="background-landscape"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="heading-jogja">
            <h1 className="style-jogja">YOGYAKARTA</h1>
            <p className="slogan">"Yogyakarta Berhati Nyaman"</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <div className="candi" id="candi"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className="candi2" id="candi2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="tugu" id="tugu"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <BioJogja />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
