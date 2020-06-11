import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div
        className="Contact-grid"
        id="contact"
        style={{ width: "100%", margin: "auto", height: "100%" }}
      >
        <h1>Contact Me</h1>
        <Grid>
          <Cell col={3} style={{ margin: "auto" }}>
            <i className="fa fa-skype" aria-hidden="true" />
            <h2>mattbuchel</h2>
          </Cell>
          <Cell col={3} style={{ margin: "auto" }}>
            <div className="contact-info">
              <i className="fa fa-mobile" aria-hidden="true" />
              <h2>0504230780</h2>
            </div>
          </Cell>
          <Cell col={3} style={{ margin: "auto" }}>
            <i className="fa fa-envelope" aria-hidden="true" />
            <h2>moti.buchel@gmail.com</h2>
          </Cell>
          <Cell col={3} style={{ margin: "auto" }}>
            <i class="fa fa-map-marker" aria-hidden="true" />
            <h2>Ashkelon</h2>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
