<h2>introduction</h2>
todos + posts sample using hooks based on Stephen Grider course

<h2>ResourceListComponent - Points of interest</h2>
<ul>
<li>componentDidMount is required to get posts as the component mount</li>
<li>componentDidUpdate is required to respond to button click which cause re-render but not componentDidMount</li>
<li>componentDidUpdate cause infine loop because he change state and cause componentDidUpdate which cause infinite loop. one must add prevProps.resource != this.props.resource </li>
</ul>
