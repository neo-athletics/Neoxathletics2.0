import React from "react";
import Gender from "./inputs/Gender";
import Weight from "./inputs/Weight";
import HeightandAge from "./inputs/HeightandAge";
import ActivityLevel from "./inputs/ActivityLevel";
import {calorieCalculations,caloriesForMacroNutrient,switchActivity,filterZeros,goal} from "./calorieCalculations";
import Chart from "chart.js";
import CustomMacros from "./inputs/CustomMacros";
import Goals from "./inputs/Goals";
import Pounds from "./inputs/Pounds";
import Fade from 'react-reveal/Fade';

let doughnutChart;
class CalorieCalculator extends React.Component {

constructor(props){
  super(props);
  this.state = {
      gender:'male',
      weight:'',
      weightType:'lbs',
      feet:'',
      inches:'',
      age:'',
      activity:'sedentary',
      protein: '',
      fats: '',
      carbohydrates: '',
      percentages:switchActivity('sedentary'),
      total: 100,
      remainder: 0,
      goal: "equilibrium",
      pounds: "1",
      count:1,
      disabled: true,
      submitted: false
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.percentagesValues = this.percentagesValues.bind(this);
  this.setUpMacros = this.setUpMacros.bind(this);
  this.handleCount = this.handleCount.bind(this);
  this.handleErrors = this.handleErrors.bind(this);
  this.handleSection =  this.handleSection.bind(this);
};

percentagesValues(val){
    let remainder = 100-(100 - (val === ''?0:Math.abs(parseInt((val)))));
    return remainder;
}

handleChange (event){

    this.setState({
        [event.target.name]:event.target.value,
    },this.handleErrors);

    this.setState((state) =>
        ({
            percentages:switchActivity(state.activity),
            total:100 - (this.percentagesValues(state.fats) + this.percentagesValues(state.carbohydrates) + this.percentagesValues(state.protein))

        })
    );

};

handleSection(event){
    console.log(this.state.count);
    this.setState({
        count:parseInt(event.target.value)
    });
    console.log(this.state.count);
}

setUpMacros(carbohydrates,protein,fats,calories){
    let macros = [["carbohydrates",carbohydrates,"#EBC048"],["protein",protein,"#EB6F48"],["fats",fats,"#347296"]];
    let macroNutrientArray = caloriesForMacroNutrient(calories,macros);
    return filterZeros(macroNutrientArray);
}

handleSubmit(){

  this.setState({submitted:true});
  let {gender,weight,weightType,feet,inches,age,activity} = this.state;
  let height = (Math.abs(parseInt(feet))*12) + Math.abs(parseInt(inches));
  let calories = calorieCalculations(gender,weight,weightType,height,age,activity);
  calories = goal(this.state.goal,this.state.pounds,calories);
  console.log(calories,this.state.goal,this.state.pounds);
  let results;
  this.props.setCalories(calories.toFixed());
  if(this.state.total === 0){
      results = this.setUpMacros(this.state.carbohydrates,this.state.protein,this.state.fats,calories);
      this.props.setMacros(results[0]);
      this.props.setGrams(results[1])
  }
  else{
      let percentages = switchActivity(activity);
      results = this.setUpMacros(percentages[0],percentages[1],percentages[2],calories);
      this.props.setMacros(results[0]);
      this.props.setGrams(results[1]);
  }

    doughnutChart.data.labels = results[0];
    doughnutChart.data.datasets[0].data = results[1];
    doughnutChart.data.datasets[0].backgroundColor = results[2];
    doughnutChart.update();

    this.props.setDisplayChart(true);

}
handleCount(event){
    console.log(event.target.name);

    if(event.target.name === "previous"){
        this.setState((state) =>({
                count: state.count - 1
            })
        );
    }
    else if(event.target.name === "next"){

        this.setState((state) =>({
                count: state.count + 1
            })
        );
    }
console.log(this.state.count);
}

handleErrors(){

    if(this.state.count === 1){
        if(this.state.weight !== '' && this.state.weight >= 20 && this.state.age !== '' && this.state.age >= 1 && this.state.feet !== '' && this.state.feet >= 1 && this.state.inches !== ''){
            this.setState({
                disabled: false
            })
        }
        else{
            this.setState({
                disabled: true
            })
        }
    }

}

componentDidMount() {
    let chart = document.getElementById("pie");
     doughnutChart = new Chart(chart, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [{
                data: 0,
                backgroundColor:[],

            }]
        }
    });
 
}

render(){
    let macroNutrient= ["carbohydrates","protein","fat"];
  return (
      <>
    <form id="calorie-calculator" >

        <div id="group-1" style = {{display: this.state.count === 1?"block": "none"}}>
            <Fade right delay={400} duration={1200}>
                <Gender handleChange = {this.handleChange} gender = {this.state.gender}/>

                <Weight handleChange = {this.handleChange} Weight = {this.state.weight} weightType = {this.state.weightType}/>

                <HeightandAge handleChange = {this.handleChange} age = {this.state.age} feet = {this.state.feet} inches = {this.state.inches}/>
            </Fade>
        </div>

        <div id="group-2" style = {{display: this.state.count === 2?"block":"none"}}>
            <Fade right delay={200} duration={1200}>
                <ActivityLevel handleChange = {this.handleChange} activity = {this.state.activity} />

                <ul id = {"percentages"}>
                    <p className={"note"}>Current macro nutrient percentages based on activity level</p>
                    {

                        this.state.percentages.map((percent,index) => (

                            <li>{(percent*100).toFixed()}% {macroNutrient[index]}</li>
                        ))
                    }
                </ul>

                <CustomMacros total = {this.state.total} fats = {this.state.fats} carbohydrates = {this.state.carbohydrates} protein = {this.state.protein} handleChange = {this.handleChange}  />
            </Fade>
        </div>
      <Fade right delay={200} duration={1200}>
        <div id="group-3" style = {{display: this.state.count === 3 ?"block":"none"}}>

            <Goals handleChange = {this.handleChange} goal = {this.state.goal}/>


            {this.state.goal === "equilibrium" &&

                    <button id="submit-button" type="button" onClick={event => this.handleSubmit(event)}>
                        <a href={"#group-5"}>calculate</a>
                    </button>

            }
        </div>
      </Fade>
      <Fade right delay={200} duration={1200}>
        <div id="group-4" style = {{display: this.state.count === 4 ?"block":"none"}}>

            <Pounds pounds = {this.state.pounds} goal ={this.state.goal} handleChange = {this.handleChange} />
            
                {/*<input id="submit-button" type="submit" value="Calculate"/>*/}
                <button id="submit-button" type="button" onClick={event => this.handleSubmit(event)}>
                    <a href={"#group-5"}>calculate</a>
                </button>
        </div>
      </Fade>
        <div className="control-buttons">
            <button style={{display: this.state.count <= 1?"none":"inline-block"}} type={"button"} name={"previous"} onClick={event => this.handleCount(event)}>prev</button>

            <button style={{display: this.state.count >= 4 || (this.state.goal === "equilibrium" && this.state.count === 3)?"none":"inline-block"}} disabled={this.state.disabled } type={"button"} name={"next"} onClick={event => this.handleCount(event)}>next</button>
        </div>

        <br/>

    </form>

    {this.state.submitted &&
        <div id={"sections"}>
            <ul>
                <li><button className={"sections"} value={1} type={"button"} onClick={event => this.handleSection(event)} style={this.state.count === 1?{opacity: "0.7", border: '1px solid aliceblue'}:null}>Biometrics</button></li>
                <li><button className={"sections"} value={2} type={"button"} onClick={event => this.handleSection(event)} disabled={this.state.disabled } style={this.state.count === 2?{opacity: "0.7", border: '1px solid aliceblue'}:null}>activity</button></li>
                <li><button className={"sections"} value={3} type={"button"} onClick={event => this.handleSection(event)} disabled={this.state.disabled } style={this.state.count === 3?{opacity: "0.7", border: '1px solid aliceblue'}:null}>Goal</button></li>
                <li style={{visibility: this.state.goal === "equilibrium"?"hidden":"visible"}}><button className={"sections"} value={4} type={"button"} onClick={event => this.handleSection(event)} disabled={this.state.disabled } style={this.state.count === 4?{opacity: "0.7", border: '1px solid aliceblue'}:null}>Pounds</button></li>
            </ul>
        </div>

    }
      </>
  );
  }
}

export default CalorieCalculator;
