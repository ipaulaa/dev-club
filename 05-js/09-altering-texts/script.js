const list = document.getElementById("list");

console.log(`
~~~ innerHTML ~~~
${list.innerHTML}

~~~ innerText ~~~
${list.innerText}

~~~ textContent ~~~
${list.textContent}
`);

const item1 = document.getElementById("item-1");
item1.innerText += " [innerText]";

const item3 = document.getElementById("item-3");
item3.textContent += " [textContent]";

const item4 = document.getElementById("item-4");
item4.innerHTML += " <b>[innerHTML]</b>";
