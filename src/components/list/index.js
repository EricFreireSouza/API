import React, { Component } from "react";
// import './styles.css';

export default class List extends Component {
  render() {
    var storyNodes = this.props.items.map((item) => {
      return (
        <tr key={item.data.url}>
          <td>
            <p className="score">{item.data.score}</p>
          </td>
          <td>
            <p className="title">
              <a href={item.data.url}>
                {item.data.title}
              </a>
            </p>
            <p className="author">
              Posted by <b>{item.data.author}</b>
            </p>
          </td>
        </tr>
      );
    });

    return (
      <table>
        <tbody>
          {storyNodes}
        </tbody>
      </table>
    );
  }
}
