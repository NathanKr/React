<h2>Introduction</h2>
This is a small POC to check how the same editor can be used on every array based elements

<h2>Basic idea of Editor</h2>
functionality of edit is common cross pages but view of pages is different. solution :
<ul> 
<li>use render props to handle different views</li>
<li>use array of elements to handle logic</li>
</ul>

<h2>Points of interest</h2>
<ul>
<li>Currently i have put the state inside Editor because its above the pages in the hierarchy tree and easy for pass props to pages level. But this is logically not the right place. A neutral place would be better like store implemented e.g. via redux</li>
</ul>

<h2>Components</h2>
<table>
  <tr>
    <th>Name</th>
    <th>Description</th> 
    <th>Remarks</th>
  </tr>
  <tr>
    <td>Editor</td>
    <td>
<ul>
<li>Generic edit engine</li>
<li>Perform operations such as add item , delete item , edit item on Page without need to know about it</li>
<li>Use Page as render props</li>
</ul>
</td>
    <td></td>
  </tr>
<tr>
    <td>Page1</td>
    <td>Page view - used as render props inside Editor</td>
    <td>Unaware of Editor</td>
  </tr>
<tr>
    <td>Page2</td>
    <td>Page view - used as render props inside Editor</td>
    <td>Unaware of Editor</td>
  </tr>
</table>


<h2>Show me some code</h2>

subject is used to render Page1 


```javascript
<Editor subject={Page1} />
```


<h2>Specific installation</h2>
<ul>
<li>npm install react-router</li>
<li>npm install react-router-dom</li>
</ul>