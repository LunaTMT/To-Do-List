var add_button = document.getElementById("add_button");
var list_div = document.getElementById("list");

var items = 0;

add_button.addEventListener("click", function(){
    console.log("add!");
    
    // Creating the item div which will contain checkbox and text input
    let item_div = document.createElement("div");
    item_div.id         = "item_" + items; // Using underscore instead of space for ID
    item_div.className  = "item";
    
    let checkbox = document.createElement("input");
    checkbox.type       = "checkbox";
    checkbox.id         = "checkbox_" + items; // Using underscore instead of space for ID
    checkbox.className  = "checkbox";

    let textbox = document.createElement("input"); 
    textbox.type      = "text"; // Correcting the input type
    textbox.id        = "textbox_" + items; // Using underscore instead of space for ID
    textbox.className = "textbox";

    
   
    // Create the button element
    let remove_button = document.createElement("button");
    remove_button.id = "remove_button" + items;
    remove_button.className = "remove_button";
    

    //Add to list
    item_div.appendChild(checkbox);
    item_div.appendChild(textbox);
    item_div.appendChild(remove_button)

    list_div.appendChild(item_div);

    ++items;
});


list_div.addEventListener("click", function(event){
    if (event.target.classList.contains("remove_button")) {
        var item_div = event.target.parentNode;
        list_div.removeChild(item_div);
    } 
});