// This is for the Dynamic systems of the website
var activePage = "home"
var activePage2 = "home2" //<!--Delete me-->

function hide(id)
{
    document.getElementById(id).style.display = "none";
}

function show(id)
{
    document.getElementById(id).style.display = "block";
}

function showHomePage()
{
    hide(activePage);
    show("home");
    show("home2");
    activePage = "home";
}

function showContactPage()
{
    hide(activePage);
    hide(activePage2);
    show("contact");
    activePage = "contact";
}

showHomePage();

var homeLink = document.querySelectorAll("#topMenuBar a")[0];
homeLink.addEventListener("click", showHomePage)

var contactLink = document.querySelectorAll("#topMenuBar a")[2];
contactLink.addEventListener("click", showContactPage)

// Delete everything below later
function hideFromList()
{
    document.querySelectorAll("#topMenuBar a")[8].style.display = "none";
    document.querySelectorAll("#topMenuBar a")[9].style.display = "block";
    console.info("item hidden!");
}

function showFromList()
{
    document.querySelectorAll("#topMenuBar a")[8].style.display = "block";
    document.querySelectorAll("#topMenuBar a")[9].style.display = "none";
    console.info("item shown!");
}

var hideMe = document.querySelectorAll("#topMenuBar a")[8];
hideMe.addEventListener("click", hideFromList);

var showMe = document.querySelectorAll("#topMenuBar a")[9];
showMe.addEventListener("click", showFromList);