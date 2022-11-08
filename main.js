console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(`node1`) method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2")[0];
node2.textContent = "I used the getElementByClassName(`node2`) method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let header3 = document.getElementsByTagName("h3");
for (let element of header3){
    element.textContent = "I used the getElementByTagName(`h3`) method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let paraElement = document.createElement("p");
paraElement.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector("#parent");
parent.appendChild(paraElement);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let anchorAdd = document.createElement("a");
anchorAdd.textContent = "I am an <a> tag";

// BONUS: Add a link href to the <a>
anchorAdd.href = "https://www.cycletrader.com"; 

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(anchorAdd, paraElement);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let newParagraph = document.querySelector("#exercise-container3");
let oldDiv = document.querySelector("#N1");

let newChildNode = document.createElement("p");
newChildNode.textContent = "New Child Node";

newParagraph.replaceChild(newChildNode, oldDiv);

// TODO: Remove the "New Child Node"
newParagraph.removeChild(newChildNode);


/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
});

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 
document.querySelector("#container").appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
function show() {
    let modalContainer = document.createElement("div");
    let modalCard = document.createElement("div");
    let pGraph = document.createElement("p");
    let exitBtn = document.createElement("button");

    pGraph.textContent = "Buy or leave!"
    exitBtn.textContent = "Close";
    exitBtn.addEventListener("click", () => {
        document.body.removeChild(modalContainer);
    });

    modalCard.append(pGraph, exitBtn);
    modalCard.classList.add("modal-card");
    
    modalContainer.id = "modal";
    modalContainer.appendChild(modalCard);

    document.body.appendChild(modalContainer);

}

let button = document.querySelector("#btn");
button.addEventListener("click", show);



//div.textContent = 
//"Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
