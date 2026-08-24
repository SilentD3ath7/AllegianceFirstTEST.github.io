// This is for the Dynamic systems of the website
var activePage = "home"
var activePage2 = "home2" //<!--Delete me-->

function $(selector)
{
    return document.querySelector(selector);
}

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
    show("home2"); //<!--Delete me-->
    activePage = "home";
}

function showContactPage()
{
    hide(activePage);
    hide(activePage2); //<!--Delete me-->
    show("contact");
    show("contact2");
    printContactList();
    activePage = "contact";
}

showHomePage();

var homeLink = document.querySelectorAll("#topMenuBar a")[0];
homeLink.addEventListener("click", showHomePage)

var contactLink = document.querySelectorAll("#topMenuBar a")[2];
contactLink.addEventListener("click", showContactPage)

function printContactList()
{
    var contactList = 
    [
    {name: "Amanda Brennen", email: "amanda@allegiancefirst.com"},
    {name: "Amber Warner", email: "amber@allegiancefirst.com"}];

    var listMapResult = contactList.map(function(list)
    {
        return `<li>${list.name} <span>- ${list.email}</span></li>`
    });

    $("#contact2 ul").innerHTML = listMapResult.join("");
}

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