import React from "react";
import Fade from "react-reveal/Fade";

function Protein(){
    return(
        <article id={"protein-article"}>
            <Fade bottom delay={700} duration={1000}>
            <div className={"macro-summary"}>
                <h3>Protein</h3>

                <p>The most overrated macro nutrient of them all Protein. Protein this, protein that.
                    Well do you really know how much protein is needed based on your activity level.
                    Some of us over do it with the protein. We either consume too much of it or not enough.
                    Protein is used to help in muscle recovery. There are different forms of protein.
                    There are fast acting proteins and slow digesting ones. No, I’m not just talking about
                    your traditional whey isolate and casein protein. I am referring to foods that provide
                    you with protein and have various speeds of absorption of protein. Like milk and Greek yogurt.
                    They both are slow digesting proteins, but milk is around 20% whey protein.
                </p>
            </div>
            </Fade>

            <h4>Different types of protein.</h4>
            <div className={"protein-sec"}>
                <Fade left delay={500}>
                <div className="protein-types">
                    <ul>
                        <li> Whey (fast digesting)</li>
                        <li> Casein(slow digested)</li>
                        <li>Food sources:</li>
                        <ul>
                            <li> Eggs</li>
                            <li> Milk (20%whey 80% casein)</li>
                            <li>Meat(usually steak will be slower digesting protein than Greek yogurt)</li>
                            <li> Soy</li>
                            <li>Peas</li>
                        </ul>
                    </ul>
                </div>
            </Fade>
                <Fade right delay={500}>
                <div className="protein-info">
                    <p>When is the optimal time to take it?</p>
                    <p className={"answer"}>During the day and after your workout.</p>
                    <p>Sources of this macro nutrient?</p>
                    <p className={"answer"}>E.g. Milk, meat, and peanuts</p>
                    <p>1 gram of protein = 4 kcal.</p>
                </div>
                </Fade>
            </div>

        </article>
    );
}

export default Protein;