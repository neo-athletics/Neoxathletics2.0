import React, {useEffect,useState} from 'react';
import Chart from "chart.js";
import Fade from 'react-reveal/Fade';

function MaxRepForm() {

    const [reps, setReps] = useState('');
    const [resistanceUsed,setResistanceUsed] = useState('');
    const [submitted,setSubmitted] = useState(false);

    const maxRep = (reps,resistance) =>{
        reps = Math.abs(reps);
        resistance = Math.abs(resistance);
        let max = Math.floor(((0.03 * reps) + 1.0) * resistance);
        let remainder = max % 5;

        if(remainder === 0 ){
           return max ;
        }
        else if(remainder > 2){
            let left = 5 - remainder;
            max += left ;
            return max;
        }
        else{
            max -= remainder ;
            return max;
        }

    };

    const repRange = (maxRep) =>{
        //the initial value is our 100% 1 rep max a.k.a max rep
        const percentRange =[maxRep];
        //starting percentage of second rep
        let percent = 95;
        //get rep range results
        for(let i = 2; i < 13;i++) {
            let lbs = Math.floor((maxRep * (percent * 0.01)));

            let remainder = lbs % 5;

            if (remainder === 0) {
                percentRange.push(lbs);
            }
            else if (remainder > 2) {
                let left = 5 - remainder;
                percentRange.push(lbs + left);
            }
            else {
                percentRange.push(lbs - remainder);
            }
            percent -= 2.5;
        }
        return percentRange;
    };

    const handleInputChange = (event) =>{
        event.target.name === "reps"?setReps(event.target.value): setResistanceUsed(event.target.value)
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        myChart.data.datasets[0].data = repRange(maxRep(reps,resistanceUsed));
        myChart.update();
        setSubmitted(true);

    };

    const newMr = () =>{
        setSubmitted(false);
        setReps('');
        setResistanceUsed('');
        myChart.destroy();

    };
    let myChart;

    useEffect(() =>{
        let ctx = document.getElementById('lineChart').getContext('2d');
        //setSubmitted(false);
         myChart = new Chart(ctx, {
            type: "line",
            data:{
                labels: (function (){
                    let count = [];
                    for(let i = 1; i < 13; i++){
                        count.push(i);
                    }
                    return count;
                })(),
                datasets: [{
                    label: "Rep Range",
                    data: 0,
                    borderColor:"#16608C",
                    borderWidth:"2",
                    borderDash: [10,10],
                    fill:"false",
                    pointBackgroundColor:"white",
                    pointBorderColor:"#DCA817",
                    pointBorderWidth:"0",
                    pointRadius:"6",
                    pointStyle:"circle",
                    pointHoverBackgroundColor:"white",
                    pointHoverBorderColor:"rgb(18, 267, 236)",
                    pointHoverBorderWidth:"2",
                    pointHoverRadius:"9",
                    showLine:true

                }]
            },
            options:{
                legend: {
                    labels: {
                        fontColor: '#ddd'
                    }
                },
                responsive: true,
                scales:{
                    xAxes:[{
                        ticks: {
                            beginAtZero:false,
                            fontColor: '#00f3ff',
                            fontSize: 14
                        },
                        gridLines:{
                            color:"#0984e3",
                            display: false
                        }

                    }],
                    yAxes:[{
                        ticks: {
                            beginAtZero:false,
                            fontColor: '#00f3ff',
                            fontSize: 14
                        },
                        gridLines:{
                            color:"#0984e3",
                            display: false
                        }
                    }]



                }
            }
        });
    });
    return(
        <>
            <section className="maxRep">
                {/*<p> Get to know your one rep max and exceed your current weight without going through the doubt. By using a max rep calculator you can get an estimate of what your max rep is and your rep range </p>*/}
                <Fade left>
                <div id="formContainer" style={{display: submitted?"none":"block"}}>
                    <form id="repMax" onSubmit={(event) => handleSubmit(event)}>
                        <h1>Max Rep</h1>
                        <div>
                            <label id="first">Reps</label><br/>
                            <input id="reps" name={"reps"} placeholder=" " type="number" value={reps} onChange={(event) => handleInputChange(event)} required/>

                        </div>
                        <div>
                            <label id="second">Weight</label><br/>
                            <input id="resistanceUsed" name={"resistanceUsed"} placeholder=" " type="number" value={resistanceUsed} onChange={(event) => handleInputChange(event)}
                                  step={"5"} required/>
                        </div>
                        <br/>
                        <input onClick={()=>(reps === '' || resistanceUsed === '') || (resistanceUsed%5 !== 0)?null:setSubmitted(true)} id={"calculate"} type="submit" value="Calculate"/>

                    </form>
                </div>
                </Fade>
                <Fade right>
                <div id = "chart-container" style={{display: submitted?"block":"none"}} >

                        <div id="lineChart-container">
                            <canvas id="lineChart"></canvas>

                        </div>
                    <p>
                        The results of this graph are just an estimate of your rep range.
                        The weight correlated with each rep is a reference point.
                    </p>

                    <button id={"newRepMax"} onClick={()=>newMr()}>New MR</button>

                </div>

            </Fade>
            </section>
        </>
    )
}

export default MaxRepForm;