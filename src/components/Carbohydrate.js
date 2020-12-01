import React from "react";
import Fade from "react-reveal/Fade";

function Carbohydrate() {
    return(
        <article id={"carbohydrates-article"}>
            <Fade bottom delay={700} duration={1000}>
                <div className={'macro-summary'}>
                    <h3>Carbohydrates</h3>

                    <p>Carbohydrates the main energy source for the human body. Its importance has
                        been deteriorating in the past recent years because of trending diets and lifestyle.
                        But do we really understand the important role this macro nutrient plays on the body.
                        Also, the importance of carbohydrates for an athlete. First of let’s talk about
                        carbohydrates in general what purpose do they serve in the human body and what
                        is it composed of. We obtain the majority of our carbohydrates from plants.
                        Such as vegetable and fruits. There are different kind of carbohydrates,
                        we have our sugars, starches, and fibrous foods. For some people when they hear
                        sugar they hear danger, but that isn’t always the case. Not all carbohydrates are bad
                        for you.
                    </p>
                </div>
            </Fade>


            <div>

                <h4> Different types of Carbohydrates</h4>

                <div className={"carb-types"}>
                    <Fade left delay={500}>
                    <div className={"simple"}>

                        <h5>Simple carbohydrates</h5>
                        <p>E.g:</p>
                        <ul>
                            <li>potatoes</li>
                            <li>fruits</li>
                            <li>white rice</li>
                        </ul>

                        <p>These are know as Fast acting carbohydrates</p>
                        <p className={"answer"}>Meaning they are absorb at a faster rate by the body opposed to complex carbohydrates. They will be beneficial to take before and after work out.</p>
                        <p>When is the optimal time to take it?</p>
                        <p className={"answer"}> For performance take in fast acting carbohydrates 30 minutes before and if the workout
                            is longer than
                            1 hour 30 minutes take in 60 more grams. For recovery take in carbohydrates and protein as well.
                            The amount you take in is based on your goal.
                        </p>

                    </div>
                    </Fade>
                    <Fade right delay={500}>
                    <div className={"complex"}>

                        <h5>Complex carbohydrates</h5>
                        <p>E.g:</p>
                        <ul>
                            <li>Quinoa</li>
                            <li>brown rice</li>
                            <li>legumes</li>
                            <li>sweet potatoes</li>
                        </ul>
                        <p>These are known as Slow digesting carbohydrates</p>

                        <p className={"answer"}>
                            The majority of these slow acting carbohydrates contain fiber.
                            Fiber is non-digestible, but helps in other physiological aspects of the body.
                            Also helps break down food and some could be soluble and insoluble.
                            Meaning one that is dissolve in water(soluble) and the other which resistant to water it does not
                            absorb or dissolve in water.
                            Fiber isn’t used as an energy source for the body there for they do not count towards the calculations
                            of calories.
                        </p>
                        <p>When is the optimal time to take it?</p>
                        <p className={"answer"}>First thing in the morning or if you know you'll go a long period of time without eating. These types of carbohydrates get release at a slower rate the the fast acting carbohydrates providing constant energy to the body.</p>
                    </div>
                    </Fade>
                </div>
                <Fade bottom delay={500}>
                <div className="info">
                    <p>Sources of this macro nutrient?</p>
                    <p>Fruits and vegetables. E.g. Bananas, corn and cane sugar</p>
                    <p>1 gram of carbohydrate = 4 kcal.</p>
                </div>
                </Fade>
            </div>

        </article>
    );
}

export default Carbohydrate;