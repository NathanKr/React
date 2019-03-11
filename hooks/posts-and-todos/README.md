<h3>introduction</h3>
todos + posts sample using custom hooks

<h3>useFetchResources - custom hooks</h3>
useFetchResources code include useState and useEffect
at the end it can be used to fetch resource like user,todos,post from https://jsonplaceholder.typicode.com in a very clean way and is used to render list of each one of them :

const users = useFetchResources('users');

<h3>ResourceListComponentUsingClass vs ResourceListComponentUsingHooks</h3>
The code of ResourceListComponentUsingHooks is cleaner : componentDidMount + componentDidUpdate equivalence is done in one useEffect

<h3>ResourceListComponentUsingClass - Points of interest</h3>
<ul>
<li>componentDidMount is required to get posts as the component mount</li>
<li>componentDidUpdate is required to respond to button click which cause re-render but not componentDidMount</li>
<li>componentDidUpdate cause infine loop because he change state and cause componentDidUpdate which cause infinite loop. one must add prevProps.resource != this.props.resource </li>
</ul>


<h3>Credit</h3>
This sample is based on Stephen Grider course