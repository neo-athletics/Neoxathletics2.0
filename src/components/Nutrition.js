import React, {useState,useRef,useEffect} from 'react';
import CalorieCalculator from './forms/CalorieCalculator';
import "./Nutrition.css";
import Carbohydrate from "./Carbohydrate";
import Fat from "./Fat";
import Protein from "./Protein";
import Fade from "react-reveal/Fade";

function Nutrition(){
  const [displayChart,setDisplayChart] = useState(false);
  const [calories,setCalories] = useState(0);
  const [macros,setMacros] = useState([]);
  const [grams,setGrams] = useState([]);
  const [square, setSquare] = useState(false);
  const node = useRef();

  // exit out of the circle menu by clicking outside area of it
  function handleClickOutside(event){
      if(node.current.contains(event.target)){
          return;
      }
      return setSquare(false);

  }

  useEffect(()=>{
      document.addEventListener("click",handleClickOutside);

      return() =>{
          document.removeEventListener("click",handleClickOutside);
      };
  });

  return (
    <React.Fragment>
    <main>
        <div className="circle-menu" ref={node} onClick={() => square?setSquare(false):setSquare(true)} style={square?{transform:"scale(1.3)",borderRadius:"10px",height:"100px",width: "100px"}:{transform:"scale(1)",borderRadius:"50%",height:"55px",width: "55px"}}>
            <div className="bars-container" style={{display:square?"none":"block"}}>
                <div className="mini-bar"></div>
                <div className="mini-bar"></div>
                <div className="mini-bar"></div>

            </div>
            {
            square &&

            <ul className={"list-container"}>
                <li ><a href="#carbohydrates-article">Carbohydrates</a></li>
                <li ><a href="#protein-article">Protein</a></li>
                <li ><a href="#fat-article">Fats</a></li>
                <li ><a href="#calorieForm">Calculator</a></li>
            </ul>

            }
        </div>
      <div className={"banner-section nutrition-sec"}>
        <section>
          <Fade duration={1700} bottom>
          <h1>Sport Nutrition</h1>

          <p>Nutrition plays an important role in your pre, intra, and post workout,
            even on your days off you must be aware of what to consume. The food we eat is
            composed of three macro nutrients protein, carbohydrates and fats. Each playing an essential
            role in the human body. Like the saying goes you are what you eat. That is why we must be
            aware of what we eat on a daily basis.
          </p>
          </Fade>
      </section>
    </div>

  <section className={"macro-sec"}>
    <h2>Macro Nutrients</h2>

      <Carbohydrate/>
      <Protein/>
      <Fat/>

  </section>

  <section class="formGrid" id="calorieForm">

        <h2>Caloric Calculator</h2>
        <Fade bottom delay={300}>
          <div className="details">
            <p>Check out your caloric needs based on your activity . Dont track your food intake? That's fine who does any
              way, but at least get an estimate on your daily caloric needs.
              Start by filling out the form. You'll get an estimate of your daily
              caloric need once you submit the form. You are more than welcome to adjust your macro nutrient percentages
              and choose your goal. If its weight loose or weight gain you decide.</p>
          </div>
        </Fade>

<div id={displayChart?"chart-grid":null}>
    <div className={"form-container"}>
      <CalorieCalculator setDisplayChart = {setDisplayChart} setMacros = {setMacros} setCalories = {setCalories} setGrams = {setGrams} />
    </div>
  <div id={"macro-count"} style={{display: displayChart?"block":"none"}}>
    <h2>Daily caloric intake: {calories} calories</h2>
    <div className="macros-grams-container">
    <Fade left>
      <ul id = "macros-list">
        {
          macros.map((macro) =>
              <li>{macro}:</li>
          )
        }
      </ul>
    </Fade>
    <Fade delay={500}>
      <ul id = "grams-list">
        {
          grams.map(gramsPerMacro =>
              <li>{gramsPerMacro}g</li>
          )
        }
      </ul>

    </Fade>
    </div>
  </div>
    <div id="group-5">

      <div>
    <Fade bottom duration={1500} delay={500}>
      <div className="chart" style={{display: displayChart?"block":"none"}}>
        <canvas id="pie"></canvas>
      </div>
    </Fade>
    </div>
  </div>
  </div>
  </section>

</main>
</React.Fragment>
  );
}
 export default Nutrition;
