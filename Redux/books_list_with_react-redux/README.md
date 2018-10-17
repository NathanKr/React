<h3>Open issues</h3>
<ul>
<li>should i get the books inside reducer or pass it as action.payload</li>
<li>should i get books inside Books ctor or componentDidMount</li>
<li>how do i eliminatw the books.books stuff</li>
<li>define style for ul inside books is not working for me</li>
<li>design question : should CurrentBook be part of Books or not. If it is than -> simpler in term of code becaue than App does not need to be connected. If it is not -> less flexible because i might want books without current book</li>
<li>how to update the first current book after load. best will be to call dispatch with ActionType.setCurrentBook . This should be after load has finished but now i do it in reducer and there i can not call dispatch. how did Stephen Grider solved it ??????</li>
<li>how did stephan grider styled it</li>
</ul>