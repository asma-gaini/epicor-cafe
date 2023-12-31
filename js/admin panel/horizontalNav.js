
// ********************* json file  *********************
var horizontalNav_key= {
    "InformationBrand":
        {
            "berandName": "nameCoffe_horizontalNavigation",
            "logoImg": "../../img/general image/logo.jpg",
        },
        "InformationLink":
        [
            {
                "linkName":"home_horizontalNavigation",
                "icon":null,
                "notificationCounter":null,
                "dropdownLink":null
            },
            {
                "linkName":null,
                "icon":"&#xf0a2;",
                "notificationCounter":"3",
                "dropdownLink":[
                    {
                        "linkName":"checkInbox"
                    },
                    {
                        "linkName":"PaymenOfSalary"
                    },
                    {
                        "linkName":"StatementOfExpenses"
                    }
                ]
            }
            

        ],
        "InformationUsers":
            {
                "userName":"username_horizontalNavigation",
                "icon":"&#xf2be;"
            }
 }
 
 var horizontalNav_Fa={
     "nameCoffe_horizontalNavigation": " کافه اپیکور",
     "home_horizontalNavigation": "صفحه اصلی",
     "checkInbox": "چک کردن پیام های ورودی",
     "PaymenOfSalary":"پرداخت حقوق",
     "StatementOfExpenses" : "بیانیه هزینه ها",
     "username_horizontalNavigation": "نام کاربری",
 }
 
 var horizontalNav_En={
     "nameCoffe_horizontalNavigation": "Epicor Cafe",
     "home_horizontalNavigation": "Home",
     "checkInbox": "check inbox",
     "PaymenOfSalary": "Payment of salary",
     "StatementOfExpenses":"Statement of expenses",
     "username_horizontalNavigation": "User name",
 }
 
 var horizontalNavFaJsonString = JSON.stringify(horizontalNav_Fa);
 var horizontalNavFaJson = JSON.parse(horizontalNavFaJsonString);
 
 var horizontalNavEnJsonString = JSON.stringify(horizontalNav_En);
 var horizontalNavEnJson = JSON.parse(horizontalNavEnJsonString);

 $( document ).ready(function() {
 
    createHorizontalNavigationTemplate();
})  
 
// ********************* create login page  ********************* 
function createHorizontalNavigationTemplate(){
    const template = document.createElement('template');

    $("template").html(createHorizontalNav())

    var HorizontalNavigation = document.getElementById("horizontalNavigation");
    HorizontalNavigation.append(template.content);
}

function createHorizontalNav(){
    var horizontalNavId = $("#horizontalNavigation");
    var mainDivHorizontalNav = $("<div>").addClass("navbar").addClass("navbar-inverse");
    horizontalNavId.append(mainDivHorizontalNav);

    // create header of horizontal navigation 
    var logoImageHorizontalNavigation = horizontalNav_key.InformationBrand.logoImg;
    var brandNameHorizontalNavigation = horizontalNav_key.InformationBrand.berandName;
    createHeader(mainDivHorizontalNav , logoImageHorizontalNavigation ,brandNameHorizontalNavigation )

    // create link list for Horizontal Navigation 
    var responsivMenu = $("<span>").addClass("glyphicon").addClass("glyphicon-align-center").addClass("collapseIconPosition").attr("onclick" , "mobileDisplaye()");
    mainDivHorizontalNav.append(responsivMenu);
    var mainLinkList = $("<ul>").addClass("nav").addClass("navbar-nav").addClass("dashbord_horizontalList");
    mainDivHorizontalNav.append(mainLinkList);
    for (let i = 0; i < horizontalNav_key.InformationLink.length; i++){
        var linkIcon = horizontalNav_key.InformationLink[i].icon;
        var horizontalNavigationLinkName = horizontalNav_key.InformationLink[i].linkName;
        createhorizontalNavigationLinkes(mainLinkList , linkIcon ,  horizontalNavigationLinkName , i);
    }

    // create users information 
    var userIcon = horizontalNav_key.InformationUsers.icon;
    var nserName = horizontalNav_key.InformationUsers.userName;
    createUsers(mainDivHorizontalNav , userIcon , nserName);
}

function createHeader(mainDiv , logoImageHorizontalNavigation ,brandNameHorizontalNavigation ){
    var headerDiv = $("<div>").addClass("navbar-header");
    mainDiv.append(headerDiv);
    var headerLink = $("<a>").addClass("navbar-brand").attr("href" , "#");
    headerDiv.append(headerLink);
    var logoImageHorizontalNav = $("<img>").addClass("horizontalNavLogo").attr("src" , logoImageHorizontalNavigation).attr("alt" , brandNameHorizontalNavigation)
    headerLink.append(logoImageHorizontalNav);
    var brandHorizontalNav = $("<span>").addClass("horizontalNavBerand").attr("text_key_horizontal_navigation" , brandNameHorizontalNavigation).html(brandNameHorizontalNavigation);
    headerLink.append(brandHorizontalNav);
}

function createhorizontalNavigationLinkes(mainDiv , linkIcon ,  horizontalNavigationLinkName , counter){
    var mainLi = $("<li>");
    mainDiv.append(mainLi);
    var mainLink = $("<a>").attr("href" , "#").addClass("mainLink");
    mainLi.append(mainLink);
    var iconLink = $("<i>").addClass("fa").html(linkIcon);
    mainLink.append(iconLink);
    var spanLinkName = $("<span>").addClass("mainLink").attr("text_key_horizontal_navigation" , horizontalNavigationLinkName).html(horizontalNavigationLinkName);
    mainLink.append(spanLinkName)

    if (horizontalNav_key.InformationLink[counter].dropdownLink!= null) {

        var notificationCounter = horizontalNav_key.InformationLink[counter].notificationCounter;
        addDropdownClasses(mainLi , mainLink ,  notificationCounter);
        var dropdownList = $("<ul>").addClass("dropdown-menu");
        mainLi.append(dropdownList);
        for (let dropdownLinkCounter = 0; dropdownLinkCounter <horizontalNav_key.InformationLink[counter].dropdownLink.length; dropdownLinkCounter++)
        {
            var dropDownLinkName = horizontalNav_key.InformationLink[counter].dropdownLink[dropdownLinkCounter].linkName;
            cerateDropdownList(dropdownList , dropDownLinkName)
        }
    }
}

function addDropdownClasses(mainLi , mainlink , notificationCounter){

    mainLi.addClass("dropdown");
    var badgesLink = mainlink.removeClass("mainLink").addClass("dropdown-toggle").attr("data-toggle" , "dropdown");
    $("i.fa").addClass("notifications");
    var notificationCounter = $("<span>").addClass("badge").html(notificationCounter);
    badgesLink.append(notificationCounter);
    var collapseIcon = $("<span>").addClass("caret");
    badgesLink.append(collapseIcon);
}

function cerateDropdownList(mainList , dropDownLinkName){
    var dropdownLi = $("<li>");
    mainList.append(dropdownLi);
    var dropdownLink = $("<a>").attr("href" , "#").attr("text_key_horizontal_navigation" , dropDownLinkName)
        .html(dropDownLinkName);
    dropdownLi.append(dropdownLink); 
}

function createUsers(mainDiv , userIcon , nserName){
    var mainUserList = $("<ul>").addClass("nav").addClass("navbar-nav") .addClass("displayUser").css("float" , "right");
    mainDiv.append(mainUserList);

    var userLi = $("<li>").addClass("profileUser");
    mainUserList.append(userLi);
    var userShape = $("<i>").css("font-size", "24px").addClass("fa").html(userIcon);
    userLi.append(userShape);
    var userName = $("<span>").addClass("profileUserHorizontalNav").attr("text_key_horizontal_navigation" , nserName).html(nserName);
    userLi.append(userName);
}

function mobileDisplaye(){
    $(".dashbord_horizontalList").toggleClass("dashbord_horizontalList_none","dashbord_horizontalList_black")
}