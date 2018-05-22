<h2>Motivation</h2>
Experiment with context in react . Context was introduced in version 16.3

<h2>Context in general</h2>
<ul>
  <li>Context object is created using React.createContext</li>
  <li>Provider must wrap consumer component</li>
  <li>Only component that need context should consume it</li>
  <li>Seems mandatory to use value (and ONLY value) as props of the provider</li>
</ul>

<h2>Context in this project</h2>
<ul>
  <li>Context is assigned to a variable name UserContext</li>
  <li>Provider is defined using context object- UserContext.Provider</li>
  <li>Consumer is defined using context object- UserContext.Consumer</li>
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
    <td>Provide user as context and pass props : msg , children to Child</td>
  </tr>
</tr>
    <td>Child</td>
    <td>None</td>
    <td>Pass props : msg , children to ChildChild. Display props</td>
</tr>
</tr>
    <td>ChildChild</td>
    <td>Consumer</td>
    <td>Consume user as context . Display props</td>
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

