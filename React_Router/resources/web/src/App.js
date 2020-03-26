import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Vitamin from "./components/Vitamin";
import data from "./data/data.json";
import Lost from "./components/Lost";
import ProductDetails from "./components/ProductDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      cards: []
    };
    this.toggleLogo = this.toggleLogo.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentWillMount() {
    this.setState({ cards: data });
  }

  toggleLogo(event) {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <header className='App-header'>
            <img
              src={logo}
              className={
                this.state.toggleLogo
                  ? "static-logo"
                  : "static-logo animated jello"
              }
              alt='logo'
              onMouseEnter={this.toggleLogo}
              onMouseLeave={this.toggleLogo}
              onClick={this.openNav}
            />
            <h1
              className={
                this.state.toggleLogo
                  ? "menu-hidden"
                  : "menu animated bounceInDown"
              }
              onClick={this.openNav}
            >
              Menu
            </h1>
            <Navigation closeNav={this.closeNav} />
          </header>
          <Switch>
            <Route
              path='/'
              exact
              render={(props) => <Home cards={this.state.cards} />}
            />
            <Route path='/vitamin' exact component={Vitamin} />
            <Route
              path='/product/:id'
              render={(props) => {
                let cardPostion = props.location.pathname.replace(
                  "/product/",
                  ""
                );
                return <ProductDetails card={this.state.cards[cardPostion]} />;
              }}
            />
            <Route component={Lost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
