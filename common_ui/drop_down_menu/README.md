<h2>motivation</h2>
Build a common drop down menu component - DropDownMenu that can be used easyly in projects. currently menu item is link based

<h2>Point pf interest</h2>
<ul>
<li>render props are used to give some freedom using different list item</li>
<li>onMouseLeave \ onMouseEnter are used to identify menu title leave direction</li>
<li>ref is used to accwss the menu item bounding reactangle</li>
<li>ComponentDidMount \ ComponentWillUnmount are used to add\remove event listener for windows resize. it turn out that this dos not trigger componentDidUpdate
</ul>

<h2>Features</h2>
<li>the menu is composed of span as menu title and list of link based component</li>
<li>link based component e.g. DefaultListItem is passed as render props </li>
<li>hover over menu title will show the menu. hiding is also done nicely</li>
<li>attractive ui</li>
<li>menu items text\href are passed via props</li>
<li>menu title text is passed via props</li>

<h2>Flexibilitiy use cases</h2>
<table>
  <tr>
    <th>Use case</th>
    <th>DEscription</th>
  </tr>
  <tr>
    <td>simple apps</td>
    <td>use DefaultListItem which uses regular HTML _a_ element as link</td>
  </tr>
  <tr>
    <td>SPA apps using react-router</td>
    <td>Link component is used here so this requires a different list item component to wrap it</td>
  </tr>
</table>



<h2>Future work</h2>
<ul>
<li>flexible styling - pass class name to DropDownMenu as argument ?</li>
<li>currently the spacing on the horizontal menu are not even (ue npm start to see this). this is because the width of the DropDownMenu is 120px. A better solution is required here</li>
</ul>