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
    const styleLink = { margin: "10px" ,textDecoration:'none'};
    return (
      <div>
        <h3>hover over the button to show the drop down menu</h3>
        <h3>
          move the mouse from the button left|right|top will hide the drop down
          menu
        </h3>
        <h3>move the mouse from the drop down menu will hide it</h3>
        <h3>click on menu item to navigate</h3>
        <a href="https://edition.cnn.com/" style={styleLink}>
          News
        </a>
        <a href="http://www.sport5.co.il/" style={styleLink}>
          Sport
        </a>
        <DropDownMenu
          items={this.arItems}
          text="Hover Me"
          listItemComponent={DefaultListItem}
        />
        <a href="https://en.wikipedia.org/wiki/Art" style={styleLink}>
          Art
        </a>
       
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>



      </div>
    );
  }
}

export default App;
