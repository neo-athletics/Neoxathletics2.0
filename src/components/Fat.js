import React from "react";
import Fade from "react-reveal/Fade";

function Fat() {
    return (

        <article id={"fat-article"}>
        <Fade bottom delay={700} duration={1000}>
            <div className={"macro-summary"}>
                <h3>Fats</h3>

                <p>Lipids also known as fats, the one thing some of us hope to have less of in our bodies.
                    So how much and what type of fats we should be intaking.
                    Just like carbohydrates. There are different types of fats. Which will be covered later on.
                    Just know that fats are able to be used as a source of energy for the human body during
                    prolong exercise. </p>
            </div>
        </Fade>
            <h4> Different types of fat</h4>
            <div className={"fat-sec"}>
                <Fade left delay={500}>
                <div className="fat-types">
                    <ul>
                        <li>Polyunsaturated fat (good fat)</li>
                        <li>Monounsaturated fat (good fat)</li>
                        <li>saturated fat (bad fat)</li>
                        <li>trans fat (bad fat)</li>
                    </ul>
                </div>
            </Fade>
                <Fade right delay={500}>
                <div className="fat-info">
                    <p>When is the optimal time to take it?</p>
                    <p >Fat intake should be moderate during the day. But keep them light during the time you are going to work out.
                    </p>
                    <p className={"answer"}>In moderation both mono and poly improves HDL (good cholesterol) and reduce risk of heart disease
                        Trans fat (bad fat)-stay away from it.
                        Saturated fat (bad fat)- keep at a minimal
                    </p>
                    <p>Sources of this macro nutrient?</p>
                    <p className={"answer"}> E.g. peanuts, salmon, and coconut oil.</p>
                    <p>1 gram of fat = 9 kcal.</p>

                </div>
            </Fade>
            </div>



        </article>
    );

}

export default Fat;