import {temples} from '../data/temples.js'
//console.log(temples)



import {url} from '../data/temples.js'
//console.log(url)
//--- Grab a refrence to the division where we display the items
const showHere = document.querySelector('#showHere');
//Get a Refrence to the HTML dialog element
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myclose = document.querySelector('#mydialog button');
const myinfo = document.querySelector('#mydialog p')
//dialog button close
myclose.addEventListener("click", () => mydialogclose())

//--- Loop through array of Json items
function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src=`${url}${x.path}`
        photo.alt=x.name

        showHere.appendChild(photo)
    })
}// end function

//Start Displaying all items in the json file
displayItems(temples)