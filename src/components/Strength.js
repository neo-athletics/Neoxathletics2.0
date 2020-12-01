import React from 'react';
import MaxRepForm from "./forms/MaxRepForm";
import "./Strength.css"
import Fade from "react-reveal/Fade";



function Strength(){

  return(
    <>
    <main>
      <div className={'banner-section strength-sec'}>

        <section >
          <Fade duration={1700} bottom>
          <h1 >Strength</h1>

          <p>
            Strength the power output being applied to a load in rest. Think
            about it when you are lifting weights you are either moving the
            weight or keeping it in place while your muscles are working
            together to stabilize the load. The real question is for how long
            will you be able to endure this force.
          </p>
          </Fade>
        </section>

      </div>
      <div className="grid-repmax">
        <section className="prep">
          <h2>Training for a 1 rep max</h2>
            <ul>
              <Fade bottom delay={400}>
              <li>Warm-up Set 1: 30-50% 1RM, 5 reps</li>
              </Fade>
              <Fade bottom delay={600}>
              <li>Warm-up Set 2: 50-60% 1RM, 5 reps</li>
              </Fade>
              <Fade bottom delay={800}>
              <li>Warm-up Set 3: 60-70% 1RM, 3 reps</li>
              </Fade>
              <Fade bottom delay={1000}>
              <li>Warm-up Set 4: 75-87% 1RM, 3 reps</li>
              </Fade>
              <Fade bottom delay={1200}>
              <li>Warm-up Set 5: 90-93% 1RM 2 reps</li>
              </Fade>
            </ul>
        </section>
        <MaxRepForm/>
      </div>
</main>
    </>
  );
}

export default Strength;
