import React, { Component } from "react";
import "./DropDownMenu.css";

class DropDownMenu extends Component {
  state = {
    showMenu: false
  };

  buttonRef = React.createRef();
  buttonRect;

  onWindowResize = () => {
    this.setRect();
  };
  setRect = () => {
    this.buttonRect = this.buttonRef.current.getBoundingClientRect();
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
      `componentDidMount \nbuttonRect.x : ${
        this.buttonRect.x
      } , buttonRect.y : ${this.buttonRect.y}`
    );
    window.addEventListener("resize", this.onWindowResize);
  }

  render() {

    const items = this.props.items.map(item =>
      <li>{this.props.listItem({ href: item.href, text: item.text })}</li>
    );

    const menu = (
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

    return (
      <div className="DropDownMenu">
        <button
          ref={this.buttonRef}
          onMouseEnter={() => {
            this.setState({
              ...this.state,
              showMenu: true
            });
          }}
          onMouseLeave={e => {
            const showMenu =
              this.leaveSide(
                this.buttonRect,
                e.nativeEvent.clientX,
                e.nativeEvent.clientY
              ) === "bottom";

            this.setState({ ...this.state, showMenu });
          }}
        >
          {this.props.text}
        </button>
        {menu}
      </div>
    );
  }
}

export default DropDownMenu;
