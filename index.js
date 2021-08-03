const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated
console.log("This is number %s", 15 + 6);
console.log(`This is number ${3*9}`);

// Styled
console.log("%c This is a styled text", "font-size: 2rem; color: #4fa;");

// warning!
console.warn("Alert! Something is not working properly.");

// Error :|
console.error("Oh Nooo ! Error detected !");

// Info
console.info("Earth revolves around the Sun.");

// Testing
console.assert(2 > 5, "Wrong logic!");

// clearing
// console.clear();

// Viewing DOM Elements
const p =document.querySelector("p");
console.log(p);
console.dir(p);

// Grouping together
for (let i = 0; i < dogs.length; i++) {
  console.groupCollapsed(`${dogs[i].name}`);
  console.log(`Hi there, this is ${dogs[i].name}.`);
  console.log(`${dogs[i].name} is ${dogs[i].age} years old.`);
  console.log(`${dogs[i].name} is ${dogs[i].age * 7} dog years old.`);
  console.groupEnd(`${dogs[i].name}`);
}

// counting
console.count(`AB`);
console.count(`AB`);
console.count(`AB`);
console.count(`AB`);
console.count(`AB`);

// timing
console.time("fetching data");
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  })

//table
console.table(dogs);
