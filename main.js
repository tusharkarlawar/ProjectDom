function q(event){   
    event.preventDefault() 
let ob = { 

      fname: document.getElementById("fname").value, 
      email: document.getElementById("email").value, 
      phone: document.getElementById("phone").value, 

} 
     //localstorage
    localStorage.setItem('userDetails', JSON.stringify(ob)) 

    addd(ob) 
}     



function addd(ob) { 
        let ul = document.getElementById('ulul'); 
        let li = document.createElement('li'); 
        let nText = ob.fname 
        let nEmail = ob.email 
        let nPhone = ob.phone 
        let nNode = document.createTextNode(`${nText} - ${nEmail} - ${nPhone}`) 
        li.appendChild(nNode) 
        ul.appendChild(li) 


    } 

