import React, { Component } from 'react';

const itemMenu = [
  {
    link: 'Hot'
  },
  {
    link: 'New'
  },
  {
    link: 'Rising'
  },
]

export default class Menu extends Component {
  state = {
    selected: '',
  }

  onClick = e => {
    e.preventDefault();
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    return (
      <div className="navigation">
        <ul>
          {
            itemMenu.map((itemLink, i) => {
              return (
                <li key={i} onClick={this.onClick} className={this.state.selected ? "selected" : ""}>
                  {itemLink.link}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
