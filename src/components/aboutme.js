import React, { Component } from "react";
import { Cell, Grid, Button } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-grid" id="hi">
        <div className="about-content">
          <Grid>
            <Cell col={12}>
              <h1>About Me</h1>
              <h4>
                Computer Science B.Sc. Graduate with an extended knowledge at
                Java, c, c++, sql, javascript, html, css.
              </h4>
              <h4>graduated from Ashkelon Academic College in October 2019.</h4>

              <div className="resume-btn">
                <Button href="/resume" raised colored>
                  Resume
                </Button>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
export default AboutMe;
