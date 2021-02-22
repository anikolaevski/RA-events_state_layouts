import React from 'react';
import PropTypes from 'prop-types';

export class Store extends React.Component {
  static propTypes = {
    layout: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired
  };
  state = { prev: 1, current: 1 }
  constructor(props) {
    super(props);
  }
  switcher() { 
    this.setState( (prev) => ({prev: prev.current, current: (prev.current == 1)? 0: 1}) );
  }
  render () {
    return (
      < ShopView layout={this.props.layout} products={this.props.products} switcher={this.switcher.bind(this)} state={this.state} />
    );
  }
}

class ShopView extends React.Component {
  static propTypes = {
    layout: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    switcher: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
  }
  render () {
    let k = 0;
    if (this.props.state.current == 1) {
      return (
        <div className="store-box">
          {this.props.products.map( o => <ShowCard key={k++} item = {o} />)}
          < ShowIcon switcher={this.props.switcher} state={this.props.state} />
        </div>
      );      
    } else {
      return (
        <div className="store-line-box">
          {this.props.products.map( o => <ShowLine key={k++} item = {o} />)}
          < ShowIcon switcher={this.props.switcher} state={this.props.state} />
        </div>);
    }
  }
}

class ShowIcon extends React.Component {
  static propTypes = {
    switcher: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
  }
  handleClick () {
    this.props.switcher();
  }
  render() {
    // console.log(this.switcher.state);
    if (this.props.state.current == 1) {
      return(
        <div className="switch-icon" onClick={() => this.handleClick()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
        </div>
      );      
    } else {
      return(
        <div className="switch-icon" onClick={evt => this.handleClick(evt)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
        </div>
      ); 
    }

  }
}


class ShowCard extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.name = props.item.name;
    this.price = props.item.price;
    this.color = props.item.color;
    this.img = props.item.img;
  }
  render () {
    return (
    <div className="item-container">
      <h1>{this.name}</h1>
      <h3>{this.color}</h3>
      <img src={this.img} alt={`Cannot find ${this.img}`} />
      <div className="item-bottom">
      {/* eslint-disable-next-line no-undef */}
      <div className="price">{Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          currencyDisplay: 'symbol',
        }).format(this.price.toString())}</div>
        <button className="add-button">Add to card</button>
      </div>
    </div>
    );
  }
}

class ShowLine extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.name = props.item.name;
    this.price = props.item.price;
    this.color = props.item.color;
    this.img = props.item.img;
  }
  render () {
    return (
    <div className="item-line">
      <img src={this.img} alt={`Cannot find ${this.img}`} />
      <h1>{this.name}</h1>
      <h3>{this.color}</h3>
      {/* eslint-disable-next-line no-undef */}
      <div className="price">{Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
      }).format(this.price.toString())}</div>
      <button className="add-button">Add to card</button>
    </div>
    );
  }
}