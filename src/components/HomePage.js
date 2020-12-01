import React from "react";
import "./HomePage.css";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function HomePage() {
  return (
    <React.Fragment>
      <div className="home-page">
        <Fade duration={1500} bottom>
          <header>
            <div className="title">
              <h1>NeoxAthletics</h1>
            </div>
            <div className="title-summary">
              <p>Time to accelerate your fitness goals.</p>
            </div>
          </header>
        </Fade>

        <main className={"home"}>
          <div className="content">
            <Fade delay={600} left>
              <section>
                <div className="strength">
                  <article>
                    <p>Find out one rep max.</p>
                  </article>

                  <NavLink to="/Strength">
                    <button>Max Rep</button>
                  </NavLink>
                </div>
              </section>
            </Fade>
            <Fade delay={600} right>
              <section>
                <div className="nutrition">
                  <article>
                    <p>Get caloric Intake estimate.</p>
                  </article>

                  <NavLink to={"/Nutrition"}>
                    <button>Macros</button>
                  </NavLink>
                </div>
              </section>
            </Fade>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}
