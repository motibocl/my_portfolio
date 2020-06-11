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
              <Button colored>Github</Button>
              <Button colored>Presentation</Button>
              <Button colored>Note</Button>
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
                color: "black",
                height: "100px",
                background:
                  "url(https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/java-logo.png?itok=zBtyY02v) center / cover",
              }}
            >
              TimeUp-Final Project
            </CardTitle>
            <CardText>
              My final project is an employee Time Reporting web application,
              programmed in IntelliJ.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>
                {" "}
                <a
                  href="https://1drv.ms/p/s!AtEFsysrYXemgYAuw8kI3QD__dJxVA"
                  target="blank"
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
                  color: "black",
                  height: "100px",
                  background:
                    "url(https://www.1-more-thing.com/wp-content/uploads/2017/05/logo_php-300x225.png) center / cover",
                }}
              >
                Project #1
              </CardTitle>
              <CardText>Online shop from scratch.</CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Presentation</Button>
                <Button colored>Note</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 3) {
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
            <Tab>SQL</Tab>
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
