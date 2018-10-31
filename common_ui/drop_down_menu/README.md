<h2>motivation</h2>
Build a common drop down menu component - DropDownMenu that can be used easyly in projects. currently menu item is link based

<h2>Features</h2>
<li>the menu is composed of button and list of link based component</li>
<li>link based component e.g. DefaultListItem is passed as render props </li>
<li>hover over button will show the menu. hiding is also done nicely</li>
<li>attractive ui</li>
<li>menu items text\href are passed via props</li>
<li>button text is passed via props</li>

<h2>flexibiliy use cases</h2>
<ul>
<li>on regular apps you may use DefaultListItem which uses regular HTML <a> element as link</li>
<li>on SPA using react-router one use Link component so this requires a different list item component</li>

</ul>



<h2>Future work</h2>
<ul>
<li>flexible styling - pass class name to DropDownMenu as argument ?</li>
</ul>