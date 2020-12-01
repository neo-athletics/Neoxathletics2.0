import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responsiveNav: false,
      toggleNav: false,
    };

    this.checkScreenWidth = this.checkScreenWidth.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  checkScreenWidth() {
    let width = window.innerWidth;
    if (width <= 1080) {
      this.setState({ responsiveNav: true });
      console.log("point reached", width);
    } else {
      this.setState({ responsiveNav: false });
      console.log(width);
    }
  }
  handleToggleMenu(event) {
    console.log(event.target.className);
    this.state.toggleNav
      ? this.setState({ toggleNav: false })
      : this.setState({ toggleNav: true });
  }

  handleClick(event) {
    if (this.node.contains(event.target)) {
      return;
    }

    this.handleClickOutside();
  }
  handleClickOutside() {
    this.setState({ toggleNav: false });
  }
  componentDidMount() {
    if (window.innerWidth <= 1080) {
      this.setState({
        responsiveNav: true,
      });
    } else {
      this.setState({
        responsiveNav: false,
      });
    }
    document.getElementsByTagName("body")[0].onresize = () => {
      this.checkScreenWidth();
    };

    document.addEventListener("click", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, false);
  }

  render() {
    return (
      <nav>
        <div id={"nav-bar"}>
          <NavLink id={"home"} to="/" exact>
            <h1>Neoxathletics</h1>
          </NavLink>
          <div style={{ display: "inline" }} ref={(node) => (this.node = node)}>
            <div
              className={
                this.state.toggleNav
                  ? "hamburger-container close"
                  : "hamburger-container"
              }
              onClick={this.handleToggleMenu}
              style={{
                display: this.state.responsiveNav ? "block" : "none",
                position: this.state.toggleNav ? "fixed" : "absolute",
              }}
            >
              <div className="bar1 bar"></div>
              <div className="bar2 bar"></div>
              <div className="bar3 bar"></div>
            </div>

            <div
              className={this.state.responsiveNav ? "nav-container" : null}
              style={{
                display: !this.state.responsiveNav ? "inline" : "block",
                width: this.state.toggleNav ? "300px" : "0px",
                boxShadow: this.state.toggleNav
                  ? "8px 0 10px 12px whitesmoke"
                  : "none",
              }}
            >
              <ul className={this.state.responsiveNav ? "nav" : "full"}>
                <NavLink to="/" exact activeClassName="active">
                  <li onClick={() => this.setState({ toggleNav: false })}>
                    Home
                  </li>
                </NavLink>
                <NavLink to="/Strength" activeClassName="active">
                  <li onClick={() => this.setState({ toggleNav: false })}>
                    Strength
                  </li>
                </NavLink>
                <NavLink to="/Nutrition" activeClassName="active">
                  <li onClick={() => this.setState({ toggleNav: false })}>
                    Nutrition
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
