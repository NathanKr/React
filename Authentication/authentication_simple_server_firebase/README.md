<h3>Authentication using Firebase</h3>


<h4>Sign Up</h4>
<ol>
  <li>done using https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY] , email ,password</li>
  <li>reuslt on success : user id , token id</li>
</ol>

<h4>Sign In</h4>
<ol>
  <li>done using https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY] , email ,password</li>
  <li>reuslt on success : user id , token id</li>
</ol>



<h4>Installation</h4>
<ol>
  <li>npm install axios</li>
  <li>firebase project with user\password authentication is required</li>
  <li>apiKey in App.js should be updated accordig to the firebase project</li>
</ol>


<h4>Future</h4>
<ol>
  <li>save token id and user id in local store</li>
  <li>handle expire in client using timeout</li>
  <li>generic authentication component (if possible) using callback : signIn , signOut , signUp </li>
  <li>prevent non authorized used to access aothorized pages </li>
  <li>authorization</li>
</ol>
