import React from 'react';

/*
 hocLogProps return a component with logs
*/
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

  export default hocLogProps;