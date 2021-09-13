console.log("hello world");

const myName = "Alex Waller";
console.log(myName);
const h1 = document.querySelector(".heading-primary");
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = "Alex Waller";
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

////////////////////////////////////////////////////////////
// Set copyright year automatically
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear

////////////////////////////////////////////////////////////
// Make mobile navigation work

// ('nav-open')



///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
