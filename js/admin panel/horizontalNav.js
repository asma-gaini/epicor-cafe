
// ********************* json file  *********************
var horizontalNav_key= {
    "InformationBrand":
        {
            "berandName": "nameCoffe",
            "logoImg": "../../img/admin panel/logo/logo.jpg",
        },
        "InformationLink":
        [
            {
                "linkName":"home",
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
                "userName":"username",
                "icon":"&#xf2be;"
            }
 }
 
 var horizontalNav_Fa={
     "nameCoffe": " کافه اپیکور",
     "home": "صفحه اصلی",
     "checkInbox": "چک کردن پیام های ورودی",
     "PaymenOfSalary":"پرداخت حقوق",
     "StatementOfExpenses" : "بیانیه هزینه ها",
     "username": "نام کاربری",
 }
 
 var horizontalNav_En={
     "nameCoffe": "Epicor Cafe",
     "home": "Home",
     "checkInbox": "check inbox",
     "PaymenOfSalary": "Payment of salary",
     "StatementOfExpenses":"Statement of expenses",
     "username": "User name",
 }
 
 var horizontalNavFaJsonString = JSON.stringify(horizontalNav_Fa);
 var horizontalNavFaJson = JSON.parse(horizontalNavFaJsonString);
 
 var horizontalNavEnJsonString = JSON.stringify(horizontalNav_En);
 var horizontalNavEnJson = JSON.parse(horizontalNavEnJsonString);

 $( document ).ready(function() {
 
    createHorizontalNavigationTemplate();
    

    getAndSetTranslateLanguage();

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
    var mainLinkList = $("<ul>").addClass("nav").addClass("navbar-nav");
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
    var brandHorizontalNav = $("<span>").addClass("horizontalNavBerand").attr("text_key" , brandNameHorizontalNavigation).html(brandNameHorizontalNavigation);
    headerLink.append(brandHorizontalNav);
}

function createhorizontalNavigationLinkes(mainDiv , linkIcon ,  horizontalNavigationLinkName , counter){
    var mainLi = $("<li>");
    mainDiv.append(mainLi);
    var mainLink = $("<a>").attr("href" , "#").addClass("mainLink");
    mainLi.append(mainLink);
    var iconLink = $("<i>").addClass("fa").html(linkIcon);
    mainLink.append(iconLink);
    var spanLinkName = $("<span>").addClass("mainLink").attr("text_key" , horizontalNavigationLinkName).html(horizontalNavigationLinkName);
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
    var dropdownLink = $("<a>").attr("href" , "#").attr("text_key" , dropDownLinkName)
        .html(dropDownLinkName);
    dropdownLi.append(dropdownLink); 
}

function createUsers(mainDiv , userIcon , nserName){
    var mainUserList = $("<ul>").addClass("nav").addClass("navbar-nav").css("float" , "right");
    mainDiv.append(mainUserList);

    var userLi = $("<li>").addClass("profileUser");
    mainUserList.append(userLi);
    var userShape = $("<i>").css("font-size", "24px").addClass("fa").html(userIcon);
    userLi.append(userShape);
    var userName = $("<span>").addClass("profileUserHorizontalNav").attr("text_key" , nserName).html(nserName);
    userLi.append(userName);
}


// ********************* change language  *********************

function getAndSetTranslateLanguage(){
   var ContainsKeyName = $("*[text_key]");
   for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){

       for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
           
           if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "text_key") {

               var keyValue = ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].value;
               var translatedValueNav;
               if(window.localStorage.getItem("lang") == "En"){
                   translatedValueNav = horizontalNavEnJson[keyValue];
               }
               else{
                   translatedValueNav = horizontalNavFaJson[keyValue];
               }

                ContainsKeyName[elementContainKeyName].innerHTML = translatedValueNav;
           }
       }
   }
}

function changeLanguage()
{
    var getLang = $("#language").val();
    var setValueLang = window.localStorage.setItem("lang" ,getLang );
    getAndSetTranslateLanguage();
}

