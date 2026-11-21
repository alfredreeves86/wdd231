const openButton1 = document.querySelector('#openButton1');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3');

const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div'); //Targeting the empty div in the html
const closeButton = document.querySelector('#closeButton');

// "Show the dialog" button opens the dialog modally

openButton1.addEventListener("click", () => {
    dialogBoxText.innerHTML = "An Apple has 95 calories"
    dialogBox.showModal(); //dialog box shows when clicked//
});

openButton2.addEventListener("click", () => {
    dialogBoxText.innerHTML = "An orange has it own color name to it name"
    dialogBox.showModal(); //dialog box shows when clicked//
});

openButton3.addEventListener("click", () => {
    dialogBoxText.innerHTML = "Has strong pottasium"
    dialogBox.showModal(); //dialog box shows when clicked//
});


// "Close Button for when OpenButton is still active"
closeButton.addEventListener("click", () => {
    dialogBox.close(); //close the the dialog button
});