import React, { Component } from 'react';
import NavigationItem from '../navigation';

export default class Navigation extends Component {
  setSelectedItem = (item) => {
    this.props.itemSelected(item);
  };

  render() {
    const $this = this;

    var items = this.props.items.map((item) => {
      return (
        <NavigationItem
          key={item.data.id}
          item={item} itemSelected={$this.setSelectedItem}
          selected={item.data.url === $this.props.activeUrl}
        />
      );
    });

    return (
      <div className="navigation">
        <div className="header">Navigation</div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}
