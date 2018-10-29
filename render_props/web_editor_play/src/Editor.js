import React from "react";

class Editor extends React.Component {
  state = {
    Page1: [1, 2, 3],
    Page2: [4, 5, 6, 7]
  };

  count = 0;
  
  
  render() {
    // --- func name is same as field in state
    const currentPageName = this.props.subject.name;

    const editorElement = (
      <div style={{border :  '1px solid blue' , margin : '10px' , padding : '10px'}}>
        <h1>Editor</h1>
        <button
          onClick={() => {
            const newArray = [
              ...this.state[currentPageName],
              this.count++
            ];
            let newState = { ...this.state };
            newState[currentPageName] = newArray;
            this.setState(newState);
          }}
        >
          add item
        </button>
      </div>
    );

    return (
      <div>
        {editorElement}
        {this.props.subject({ array: this.state[currentPageName] })}
      </div>
    );
  }
}

export default Editor;
