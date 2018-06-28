<h2>Introduction</h2>
This is a sample for single page application and routing

<h2>Components</h2>
<table border=1>
<tr>
<th>Name</th>
<th>Description</th>
<th>Is page</th>
<th>Stateless \ Stateful</th>
</tr>

<tr>
<td>Library</td>
<td>
<ul>
<li>Root component</li>
<li>Data member - indexEditedBook</>
<li>State 
<ul>
<li> listBooks</li>
<li> listOperations</li>
<li> lastBookId</li>
</ul>
</li>
</ul>
</td>
<td>No</td>
<td>Stateful</td>
<tr>

<tr>
<td>Menu</td>
<td>Render menu options : Home , Add Book , Books , History</td>
<td>No</td>
<td>Stateless</td>
</tr>

<tr>
<td>Home</td>
<td>Render home page</td>
<td>Yes</td>
<td>Stateless</td>
</tr>

<tr>
<td>Books</td>
<td>
<ul>
<li>State : navigateToEdit</li>
<li>Render books page :  properties and edit\delete buttons per book</li>
</ul>
</td>
<td>Yes</td>
<td>Stateful</td>
</tr>



<tr>
<td>EditBook</td>
<td>
<ul>
<li>Render Edit book form page: name , numPages ,isNew</li>
<li>State : saved</li>
</ul>
</td><td>Yes</td>
<td>Stateful</td>
</tr>

<tr>
<td>AddBook</td>
<td>
<ul>
<li>Render Add book form page: id(auto incremented) , name , numPages ,isNew</li>
<li>State : saved</li>
</ul>
</td>
<td>Yes</td>
<td>Stateful</td>
</tr>



<tr>
<td>History</td>
<td>Render history of operations on book
<ul>
<li>id</li>
<li>datetime</li>
<li>type :  created, deleted , edited</li>
<li>book properties</li>
</ul>
</td>
<td>Yes</td>
<td>Stateless</td>
</tr>

<tr>
<td>Book</td>
<td>Render book properties</td>
<td>No</td>
<td>Stateless</td>
</tr>


</table>


<h2>Points of interest</h2>
Handling EditBook is not trivial
<ul>
<li>You need to navigate to EditBook programatically</li>
<li>You need to pass it old book parameters </li>
<li>You need to pass back new book parameters </li>
</ul>

Pass argument forward and backward are done by means of callback functions getBookAfterEdit , setBookAfterEdit and indexEditedBook ,all are implemented by Library Component.

<h2>Detecting book create \ delete \ edit</h2>
Book component life cycle hooks is perfect for detecting book create \ edit \ delete but not in this routing case becaue unmount is called when we navigate from books. 
In this case it is ok to use the following :
<ul>
<li>Detect book create\delete via ComponentDidUpdate of Library and comparing #books in listBooks</li>
<li>Detect book edit via setBookAfterEdit</li>
</ul>

Using component life cycle hook make the design more flexible because we dont care who cause the create \ delete \ update.
<p>However , you could also handle create \ delete in  saveAddBookClickHandler() \ deleteBook() respectively</p>

<h2>Assumptions</h2>
No need to handle persistence

<h2>Challenge</h2>
Add a helper component - BookForm which has all common stuff in AddBook and EditBook and make them thinner by using it - code reuse


<h2>Specific package intallation</h2>
npm install react-router react-router-dom