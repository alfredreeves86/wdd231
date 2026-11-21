const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');

// "Show the dialog" button opens the dialog modally
openButton.addEventListener("click", () => {
    dialogBox.showModal(); //dialog box shows when clicked//
});

// "Close Button for when OpenButton is still active"
closeButton.addEventListener("click", () => {
    dialogBox.close(); //close the the dialog button
});