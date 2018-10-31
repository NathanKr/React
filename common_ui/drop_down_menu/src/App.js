import React, { Component } from "react";
import DropDownMenu from "./DropDownMenu";
import DefaultListItem from "./DefaultListItem";

class App extends Component {
  arItems = [
    { href: "http://ynet.co.il", text: "Home" },
    { href: "https://edition.cnn.com/", text: "News" },
    { href: "http://www.sport5.co.il/", text: "Sport" }
  ];

  render() {
    return (
      <div>
        <h3>hover over the button to show the drop down menu</h3>
        <h3>
          move the mouse from the button left|right|top will hide the drop down
          menu
        </h3>
        <h3>move the mouse from the drop down menu will hide it</h3>
        <h3>click on menu item to navigate</h3>
        <DropDownMenu
          items={this.arItems}
          text="Hover Me"
          listItem={DefaultListItem}
        />
      </div>
    );
  }
}

export default App;
