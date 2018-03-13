    import React , { Component } from 'react';

<<<<<<< HEAD
    class Home extends Component {
        componentDidMount()
        {
            console.log(this.props);
        }
=======

function Home(props)
{
    console.log(props);
    return <h2>Home</h2>;
}
>>>>>>> fd4e14d11bbedd06d9475d35e3a83b526ea57087

        render() {
        return <h2>Home</h2>;
        }
    }

    export default Home;