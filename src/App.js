import React from "react";
import "./App.css";
import Main from "./components/main";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="navBar"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Moti Buchel
            </Link>
          }
          scroll
        >
          <Navigation>
            <a href="/resume">Resume</a>
            <Link to="/#hi" smooth={true} duration={1000}>
              About me
            </Link>
            <a href="/projects">Projects</a>
            <Link to="/#contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Moti Buchel
            </Link>
          }
        >
          <Navigation>
            <a href="/resume">Resume</a>
            <Link to="/#hi" smooth={true} duration={1000}>
              About me
            </Link>
            <a href="/projects">Projects</a>
            <Link to="/#contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
