import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import "./App.css";
import cat from "./images/cat.gif";
import land from "./images/land.png";
import moon from "./images/moon.png";


function App() {
  const ref = useRef();

  return (
    <div className="App">
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={2}
          style={{
            backgroundColor: "black"
          }}
        >
          <h1>Be Patient, Slowly Scroll Down</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.9}
          speed={0.05}
        >
          <h1>Why are you so allured? I tricked you. There is nothing here. Get out this site. <span>Otherwise I will hack your information.</span> </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={5}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.5}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>I wanna tell <span> U</span> something.</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.1}
          speed={0.25}
        >
          <h1><span>Still Here!</span> Ok Listen</h1>
        </ParallaxLayer>


        <ParallaxLayer
          offset={3.4}
          speed={5}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2><span>RITU,</span> I Love You. 😭😭</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;