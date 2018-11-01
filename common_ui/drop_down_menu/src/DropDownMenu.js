import React, { Component } from "react";
import "./DropDownMenu.css";

class DropDownMenu extends Component {
  state = {
    showMenu: false
  };

  titleRef = React.createRef();
  titleRect;

  onWindowResize = () => {
    this.setRect();
  };

  setRect = () => {
    this.titleRect = this.titleRef.current.getBoundingClientRect();
  };

  leaveSide = (elementBoundingRect, leaveX, leaveY) => {
    let side;

    if (leaveX <= elementBoundingRect.left) {
      side = "left";
    } else if (leaveX >= elementBoundingRect.left + elementBoundingRect.width) {
      side = "right";
    } else if (leaveY <= elementBoundingRect.top) {
      side = "top";
    } else {
      side = "bottom";
    }

    return side;
  };

  componentDidMount() {
    this.setRect();
    console.log(
      `componentDidMount \ntitleRect.x : ${this.titleRect.x} , titleRect.y : ${
        this.titleRect.y
      }`
    );
    window.addEventListener("resize", this.onWindowResize);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("resize", this.onWindowResize);
  }

  render() {
    const items = this.props.items.map((item, index) => (
      <li key={index}>
        {this.props.listItemComponent({ href: item.href, text: item.text })}
      </li>
    ));

    const menuItems = (
      <ul
        style={{
          opacity: this.state.showMenu ? 1 : 0
        }}
        onMouseLeave={() => {
          this.setState({
            ...this.state,
            showMenu: false
          });
        }}
      >
        {items}
      </ul>
    );

    const menuTitle = (
      <span
        ref={this.titleRef}
        onMouseEnter={() => {
          this.setState({
            ...this.state,
            showMenu: true
          });
        }}
        onMouseLeave={e => {
          const showMenu =
            this.leaveSide(
              this.titleRect,
              e.nativeEvent.clientX,
              e.nativeEvent.clientY
            ) === "bottom";

          this.setState({ ...this.state, showMenu });
        }}
      >
        {this.props.text}
      </span>
    );

    return (
      <div className="DropDownMenu" >
        {menuTitle}
        {menuItems}
      </div>
    );
  }
}

export default DropDownMenu;
