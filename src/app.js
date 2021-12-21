/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".cl"];
  let siteName = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in domain) {
          siteName.push(`${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}`);
          console.log(siteName);
          // for (let n in siteName) {
          //   let randomName = Math.floor(Math.random() * n);
          //   document.getElementById("domain").innerHTML = siteName[randomName];
          // }
        }
      }
    }
  }
};
