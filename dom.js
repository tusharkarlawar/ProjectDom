 //QUERYSELECTOR//
   /* var header = document.querySelector("#main-header");
    header.style.borderBottom = 'solid 4px #ccc';

    var submit = document.querySelector('input[type="submit"]');
    submit.value = 'SEND';


    var item = document.querySelector(".list-group-item");
    item.style.color = 'red'

    var lastitem = document.querySelector(".list-group-item:last-child");
    lastitem.style.color = 'blue'  */

    var Seconditem = document.querySelector(".list-group-item:nth-child(2)");
    Seconditem.style.color = 'green'

    //QUERYSELECTORALL//
    /*var titles = document.querySelectorAll('.title');
    titles[0].textContent ='Hello';  */

    var odd = document.querySelectorAll('li:nth-child(odd)');
    for(var i=0; i<odd.length; i++)
    {
        odd[i].style.backgroundColor = 'green';
    }


   /* var even = document.querySelectorAll('li:nth-child(even)');
    for(var i=0; i<even.length; i++)
    {
        even[i].style.backgroundColor = '#ccc';
    }   */
