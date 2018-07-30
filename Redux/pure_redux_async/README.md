<h2>Pure redux async</h2>

<h3>Motivation</h3>
Show async conecpt in Redux 

<h3>State</h3>
<table border=1>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
<tr>
<td>posts</td>
<td>posts fetched from https://jsonplaceholder.typicode.com/posts</td>
</tr>
<tr>
<td>loading</td>
<td>true during fetching of posts , false otherwise</td>
</tr>
<tr>
<td>loaded</td>
<td>true when all posts are fetched , false otherwise</td>
</tr>
<tr>
<td>err</td>
<td>load error</td>
</tr>
</table>


<h3>Points of interest</h3>
<ul>
<li>Async operations like fetching data from server are not implemented in reducer because it is pure function</li>
<li>Async operations are implemented via middleware</li>
<li>The basic idea is that dispatching async operation are done by passing function to dispatch and not action </li>
</ul>

<h3>Show me some code</h3>

```javascript

store.dispatch(dispatch => {
    dispatch({type:'FETCH_POSTS_START'});

    axios.get(url).then(response =>{
        dispatch({
            type:'FETCH_POSTS_FINISH' , 
            payload:response.data});
    }).catch(err =>{
        dispatch({
            type:'FETCH_POSTS_ERROR',
            payload:err});
    });

});

```



<h3>Specific packages installation</h3>
<ul>
  <li>npm install redux</li>
  <li>npm install redux-logger</li>
  <li>npm install redux-thunk</li>
</ul>