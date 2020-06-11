import React, { Component } from "react";
import AboutMe from "./aboutme";
import Contact from "./contact";
import { HashLink as Link } from "react-router-hash-link";
class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="landing-grid">
          <section className="section_intro">
            <img
              src={require("./images/avatar.png")}
              alt="avatar"
              className="avatar-img"
            />

            <div className="landing-content">
              <h1>Computer Science B.Sc graduate</h1>
              <hr />
              <p> HTML | CSS |Java | PHP | C | C++ | SQL | JavaScript </p>
              <div className="landing-links">
                {/*linkdin */}
                <a
                  href="https://www.linkedin.com/in/moti-buchel-271347177/"
                  rel="noopener-noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*github */}
                <a
                  href="https://github.com/motibocl"
                  rel="noopener-noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/*facebook */}
                <a
                  href="https://www.facebook.com/moti.buchel"
                  rel="noopener-noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div class="downArrow bounce">
              <Link to="/#hi" smooth={true} duration={1000}>
                <img
                  width="40"
                  height="40"
                  alt=""
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="
                />
              </Link>
            </div>
          </section>
          <section className="section_about">
            <AboutMe />
          </section>
          <section className="section_contact">
            <Contact />
          </section>
        </div>
      </div>
    );
  }
}
export default LandingPage;
