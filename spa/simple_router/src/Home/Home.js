    import React , { Component } from 'react';

    class Home extends Component {
        componentDidMount()
        {
            console.log(this.props);
        }


        render() {
        return <h2>Home</h2>;
        }
    }

    export default Home;