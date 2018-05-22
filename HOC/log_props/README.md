  <h2>Project title</h2>
    Learning React HOC via tiny props logger 
  
  <h2>Introduction</h2>
    <ul>
      <li>HOC is abbreviation for Higher Order Component</li>
      <li>HOC is an advanced technique for reusing component code</li>
      <li>HOC is function that take a component and add logic to produce new component</li>
      <li>HOC is pure function without side effects</li>
    </ul>

  <h2>Important players in this project</h2>
  <table border=1>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>Person</td>
    <td>Component</td> 
    <td>Component to be logged using HOC</td> 
  </tr>
  <tr>
    <td>hocLogProps</td>
    <td>Function</td> 
    <td>HOC function to be invoked on ANY component to create component with logged props. In this project it is invoked on Person</td> 
  </tr>
</table>
  
  <h2>Show me some code</h2>
  hocLogProps.js : 

```javascript
  function hocLogProps(WrappedComponent) {
    return class extends React.Component {
      state = {};        
      static getDerivedStateFromProps(nextProps, prevState)
      {
        console.log('Next props: ', nextProps);
        return null;//must return state or null if no change here
      }

      render() {
        // Wraps the input component in a container, without mutating it.
        return <WrappedComponent {...this.props} />;
      }
    }
  }
```
    
  notice in Person.js :
  ```javascript
  export default hocLogProps(Person);
  ```

  
  
  <h2>React version</h2>
    <p>This was tested with react version 16.3</p>
    <p>In particular getDerivedStateFromProps used in hocLogProps is new in 16.3</p>
  
  <h2>Creator</h2>
  <p>Nathan Krasney</p>
  <p>https://www.linkedin.com/in/nathankrasney/</p>
  
