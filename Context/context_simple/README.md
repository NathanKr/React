<h2>Motivation</h2>
Experiment with context in react . Context was introduced in version 16.3

<h2>Points of interest</h2>
<ul>
  <li>Provider must wrap consumer</li>
  <li>Seems mandatory to use value (and ONLY value) as props of the provider</li>
</ul>

<h2>Components</h2>
<table border=1> 
  <tr>  
     <tr>  
    <td>Component</td>
    <td>Context Role</td>   
    <td>Description</td>
  </tr>
    <td>App</td>
    <td>Provider</td>
    <td>Provide language as context and pass props : msg , children to Child</td>
  </tr>
</tr>
    <td>Child</td>
    <td>Consumer</td>
    <td>Consume language as context . pass props : msg , children to ChildChild. Display props</td>
</tr>
</tr>
    <td>ChildChild</td>
    <td>Consumer</td>
    <td>Consume language as context . Display props</td>
  </tr>
</table>

<h2>Debugging</h2>
Debugging is not specific to this sample .However, "React Developer Tools" can show props , children , so it may be used here 


<h2>Limitation</h2>
Context should be used ONLY when the same info is shared by many components. e.g. user info , language , theme. It is not intended to replace props mechanism !!

<h2>Installation</h2>
<a href='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
'>Download "React Developer Tools" plugin here </a>


<h2>References</h2>
<a href='https://reactjs.org/docs/context.html'>React context</a>

