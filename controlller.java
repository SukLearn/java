"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and Consuming code

A closure is a function that has access to its outer function’s variables even after the outer function has returned.

function areAnagrams(str1, str2) {  let s1 = str1.trim().toLowerCase();  let s2 = str2.trim().toLowerCase();  if (s1.length !== s2.length) return false;  return s1.split('').sort().join('') === s2.split('').sort().join('');}

let is block-scoped, so each iteration of the loop has its own copy of i. When setTimeout runs after 1000ms, it remembers the correct i from each iteration
var is function-scoped, so all closures share the same i, which ends at 10 after the loop completes. So after 1 second, it logs: undefined

function downloadURLs(urls) {  const fetchPromises = urls.map(url => fetch(url).then(res => res.text()));  return Promise.all(fetchPromises);}
const urls = [  'https://jsonplaceholder.typicode.com/posts/1',  'https://jsonplaceholder.typicode.com/posts/2'];
downloadURLs(urls)  .then(contents => {    contents.forEach((content, index) => {      console.log(`Content from URL ${index + 1}:\n`, content);    });  })  .catch(err => {    console.error("Error fetching URLs:", err);  });
function countCharacters(text) {  const count = {};  for (let char of text) {   if (count[char]) {     count[char]++;   } else {     count[char] = 1;   }  }  return count;}



async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Status: ${res.status}`);
      return await res.json(); 
    } catch (err) {
      if (i === retries - 1) throw err;
      console.warn(`Retrying (${i + 1}/${retries})...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}