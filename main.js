console.log(document);
    var itemList = document.querySelector('#items');
    //parentNode
    console.log(itemList.parentNode);
    itemList.parentNode.style.backgroundColor = 'red';
    console.log(itemList.parentNode.parentNode.parentNode);

    //parentElement
    console.log(itemList.parentNode);
    itemList.parentNode.style.backgroundColor = 'red';
    console.log(itemList.parentNode.parentNode.parentNode); 

    //childNodes//
    console.log(itemList.childNodes);
    console.log(itemList.children);
    console.log(itemList.children[1]);
    itemList.children[1].style.backgroundColor = 'yellow';

    //firstChild
    console.log(itemList.firstChild);

    //firstElementChild
    console.log(itemList.firstElementChild);
    itemList.firstElementChild.textContent = 'HELLO';

    //lastChild
    console.log(itemList.lastChild);

    //lastElementChild
    console.log(itemList.lastElementChild);
    itemList.lastElementChild.textContent = 'HELLO 1';

    //nextSibling
    console.log(itemList.nextSibling);

    //nextElementSibling
    console.log(itemList.nextElementSibling);

    //previousSibling
    console.log(itemList.previousSibling);

    //previousElementSibling
    console.log(itemList.previousElementSibling);
    itemList.previousElementSibling.style.color = "green";

    //createElement

    //create Div
    var newDiv = document.createElement('div');

    //add class
    newDiv.className = 'hello';

    //add id
    newDiv.id = 'hello1';

    //add Attribute
    newDiv.setAttribute('title','Hello Div');

    //create a text node
    var newDivText = document.createTextNode('Hello World');

    //add text to div

    newDiv.appendChild(newDivText);

    var container = document.querySelector('header.container');
    var h1 = document.querySelector('header h1');

    console.log(newDiv);
    newDiv.style.fontsize = '30px';
    container.insertBefore(newDiv, h1);

