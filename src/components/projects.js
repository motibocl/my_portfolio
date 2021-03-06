import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardTitle,
  Grid,
  Cell,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }
  moveTab() {
    if (this.state.activeTab === 0) {
      return (
        <div className="grid-tabs">
          <Card shadow={0} style={{ width: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "100px",
                background:
                  "url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover",
              }}
            >
              My Portfolio
            </CardTitle>
            <CardText>This is my website.</CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/motibocl/my_portfolio"
                  target="blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Github
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="grid-tabs">
          <Card shadow={0} style={{ width: "350px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "100px",
                background:
                  "url(https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg) center / cover",
              }}
            >
              TimeUp-Final Project
            </CardTitle>
            <CardText>
              My final project is an employee Time Reporting web application,
              programmed in IntelliJ.
            </CardText>
            <CardActions border>
              <Button colored>
                {" "}
                <a
                  href="https://1drv.ms/p/s!AtEFsysrYXemgYAuw8kI3QD__dJxVA"
                  target="blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Presentation
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="grid-tabs">
          <div>
            <Card shadow={0} style={{ width: "350px", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "white",
                  height: "100px",
                  background:
                    "url(https://www.mvps.net/docs/wp-content/uploads/2019/04/php.png) center / cover",
                }}
              >
                shop
              </CardTitle>
              <CardText>
                Online shop from scratch using MySql for data.
              </CardText>
              <CardActions border>
                <Button colored>
                  <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="http://cs.aac.ac.il/~motibocl/exe5/"
                    style={{ textDecoration: "none" }}
                  >
                    visit
                  </a>
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="category-tab">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>React</Tab>
            <Tab>JAVA</Tab>
            <Tab>PHP</Tab>
          </Tabs>
        </div>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.moveTab()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
export default Projects;
