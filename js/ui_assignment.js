//Save the reference to text-field into a variable. | <input type="text">
let inputText = document.getElementById("input-item");
//Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let btn = document.getElementById("submit-button");
//Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let ul = document.getElementById("list");
//Save the reference to paragraph for feedback | <p class="feedback"></p>
let feedback = document.querySelector(".feedback");
// Start function addItem.
function addItem()  {
    inputText.focus();
    // Create list-item and store output in a variable.
    let li = document.createElement("li");
    let x = document.createElement("HR");//add line to list item
    // remove white space before or after entry
    inputText.value = inputText.value.trim();
    // Check if user entered the value in input text-field.
    if (inputText.value !== "") {
    // If so:
       // Use textContent property on created list-item
        li.textContent = inputText.value;       
       // and assign it with the value of the text written in the text-field
       // Append list item to unordered list.
        //document.body.appendChild(li);
        ul.appendChild(li);        
        li.appendChild(x);                
       // Clear a feedback-message.
        feedback.innerText = " ";
       // Clear the text-field.
        inputText.value = "";
       // Put the cursor back to text-field  
        inputText.focus();
        inputText.select();
    // End if. 
  } else {
    // Otherwise:
       // Print the message nothing entered in the paragraph "feedback"
       feedback.innerText = "You have not entered anything yet.  Please enter item to shop.";
    // End otherwise.
  }
// //End function addItem.
};
// //Register your function addItem for click event on button.
btn.addEventListener("click", addItem);
// put cursor on the input field all the time
$('#input-item').focus();
