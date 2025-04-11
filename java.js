A closure is a function that has access to its outer function’s variables even after the outer function has returned.
function outer() {  let count = 0;  return function inner() {    count++;    console.log(count);  };}const counter = outer();counter();counter();

An HttpOnly cookie is a type of cookie that cannot be accessed by JavaScript running in the browser. It is only sent in HTTP requests (like during form submissions or API calls), making it more secure. Helps prevent XSS (Cross-Site Scripting) attacks from stealing sensitive data (like session tokens).
example: Set-Cookie: sessionToken=abc123; HttpOnly
3 storing in different variable f() makes it bound to item. now it refers to global object so getfFullName will give undefined unless it is defined globally
4 due declaring two times one in catch(x) and one with var it gives this output. 1 and undefined, 1 is from catch and undefined is because of var variable nature its declared but value is never given. x exists in whole function and doesnt have value outside. y is 2.
5. output NaN and 3 to simplify the code 
7. function inner() {    b++;     console.log(b);     var b = 3;     console.log(b); }function sortByTitle(arr) {  return arr.sort(function(a, b) {    return a.title.localeCompare(b.title);  });}
