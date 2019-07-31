/* 
The code below works as an image changer.
It switches between two pictures, every time the
picture is clicked.
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/reading-kids.jpg'){
        myImage.setAttribute ('src','images/reading-kids-2.jpg');
    } else {
        myImage.setAttribute ('src','images/reading-kids.jpg');
        }
}
/*
The code below changes the page's title to a
personalized welcome message when the user first
navigates to the site. The welcome message will 
be saged using the Web Storage API, meaning it 
will persist. There is also an option, to change
the user (thus also changing the welcome message)
by clicking on a button.
 */

 // takes refrences to the button and heading and stores them inside variables
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*
The following function sets up the personalized greeting.
It opens a dialog box that asks the user to enter data. 
The data is stored in the variable, myName. Then an API 
called localStorage is called, allowing us to store the 
data in the browser so that it can be retrived later. 
Finally, the textContent of heading is set to a string, 
plus the user's newly stored name.
*/
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Literacy is cool, ' + myName;
}

/*
The intialization code that structures the app when it
first loads. First, the neation operator checks whether
the name data exists. If it does not, the setUserName()
function programmed above is run. If it does, it retrieves
the stored name using getItem() and sets the textContent
of the heading.
*/
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Literacy is cool, ' + storedName;
}

// allows the user to set a new name by pressing the button
myButton.onclick = function() {
    setUserName();
}