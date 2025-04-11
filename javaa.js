// User logs in and server creates a session. Server stores the session data (like user ID) in memory or a database. Server sends a cookie with a session ID to the client. On each request, the cookie is sent automatically by the browser to the server. Server checks the session ID and retrieves user data.
// User logs in and server generates a signed JWT token. Token contains payload (e.g. user ID, roles) and is sent to the client. Client stores the token (usually in localStorage or memory). On each request, the token is sent in the Authorization header. Server verifies the token signature and extracts user info from payload.

// 2
// Objects inherit from other objects directly. Uses a prototype chain to share properties and methods. More flexible and dynamic—you can create and extend objects on the fly. Common in JavaScript using Object.create() or classes behind the scenes.

// Based on classes and instances. A class defines a blueprint, and objects are created from it. Uses constructors and the extends keyword (in class-based JS too). More rigid and structured.
// 4 storing in different variable stolen...() makes it no longer bound to item. now it refers to global object so getsecret.... will give undefined unless it is defined globally
// 5 var nature
// 6 function amountToCoins(amount, coins) {  let result = [];  for (let i = 0; i < coins.length; i++) {    while (amount >= coins[i]) {      amount -= coins[i];      result.push(coins[i]);    }  }  return result;}
// 7 function getUniqueChars(str) {  return [...new Set(str)].join('');}
