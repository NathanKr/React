  <h2>Project title</h2>
    Learning React Ref 
  
  <h2>Introduction</h2>
    <ul>
      <li>Ref enable access to the DOM element</li>
      <li>Ref should be used only when nothing else is possible e.g. handling focus</li>
      <li>Ref is possible only inside a class component</li>
    </ul>

   
  
  <h2>Show me some code</h2>

```javascript
 class App extends Component {
  // --- create ref using React.createRef()
  myRef = React.createRef();
  style = {width:'200px', height:'100px' , backgroundColor:'red'};
 
  componentDidMount(){
    // --- access ref using current
    console.log("width : " ,this.myRef.current.style.width);
  }

 render() {
   return (
     <div className="App">
        <h3>Check red rectangle width in console using ref</h3>
        {/* assign ref to DOM element using ref */}
        <div  style={this.style} ref={this.myRef}></div>
     </div>
   );
  }
}
```
  
  
  <h2>React version</h2>
    <p>This was tested with react version 16.3</p>
    <p>In particular using createRef and current is new in 16.3</p>
  
  <h2>Creator</h2>
  <p>Nathan Krasney</p>
  <p>https://www.linkedin.com/in/nathankrasney/</p>
  
