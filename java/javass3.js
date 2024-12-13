const textElement = document.getElementById("gradientText");
    const gradient = document.createElement("span");
    gradient.classList.add("gradient-text");

   
    gradient.innerText = textElement.innerText;
    textElement.innerHTML = ""; 
    textElement.appendChild(gradient);

    var productnameinput=document.getElementById("productname");
    var producturlinput=document.getElementById("producturl")
    var productcontainer=[] ;
    function addproduct(){
        if(validationname() && validationurl()){
            
        
        
        var product={
        code:productnameinput.value,
        code:producturlinput.value
        
        }
productcontainer.push(product);
localStorage.setItem("myproducts",JSON.stringify(productcontainer));
clearform();


console.log(productcontainer);
}
}

function clearform(){
    productnameinput.value=null;
    producturlinput.value=null;
productnameinput.classList.remove("is-valid");
producturlinput.classList.remove("is-valid")


}

function validationname() {
    var regex = /^[a-zA-Z0-9_]{1,50}$/;

 // Corrected regex
   var messagename=document.getElementById("message1")
    var text = productnameinput.value; // Get the value

    if (regex.test(text)) {
        // console.log("Match");
        productnameinput.classList.add("is-valid")
        productnameinput.classList.remove("is-invalid")
        messagename.classList.add("d-none")
        return true;
    } else {
        // console.log("No match");
        productnameinput.classList.add("is-invalid")
        productnameinput.classList.remove("is-valid")
        messagename.classList.remove("d-none")
        return false;
    }
}


function validationurl() {
    var regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9#?&=_-]*)?$/;


   var messageurl=document.getElementById("message2")
    var text = producturlinput.value; // Get the value

    if (regex.test(text)) {
        // console.log("Match");
        producturlinput.classList.add("is-valid")
        producturlinput.classList.remove("is-invalid")
        messageurl.classList.add("d-none")
        return true;
    } else {
        // console.log("No match");
        producturlinput.classList.add("is-invalid")
        producturlinput.classList.remove("is-valid")
        messageurl.classList.remove("d-none")
        return false;
    }
}