
  <h3>Pure Redux</h3>

<h4>Motivation</h4>
Provide sample code for pure redux regardless of react. 
The project is react project but no components are used

<h4>Points of interests</h4>
<table border=1>
  <tr>
    <th>Point</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>index.js</td> 
    <td>Only javascript file in the project is index.js because react is not used</td>
  </tr>
  <tr>
    <td>reducer</td>
    <td>a function. has two arguments : state , actons. return state according to action</td> 
  </tr>
  <tr>
    <td>createStore</td>
    <td>a function which create the store and is called once per application. has two arguments : reducer,state</td> 
  </tr>
  <tr>
    <td>subscribe</td>
    <td>a function of store . accept function as argument and call it for every state change</td> 
  </tr>
<tr>
    <td>dispatch</td>
    <td>a function of store . accept an action which is object with type as key and possible more key,value pairs. every dispatch call cause the reducer to be called</td> 
  </tr>
</table>
  
 
<h4>Specific packages installation</h4>
<ul>
  <li>npm install redux</li>
</ul>
  
  
</body>
</html>