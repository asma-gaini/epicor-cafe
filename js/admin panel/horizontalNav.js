
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
                "icon":"&#xf015;",
                "notificationCounter":"null",
                "dropdownLink":"null"
            },
            {
                "linkName":"",
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
 
    createHorizontalNav();
    

    getAndSetTranslateLanguage();

})  
 
// ********************* create login page  ********************* 
function createHorizontalNav(){
    const template = document.createElement('template');

    $("template").html(HorizontalNav())

    var HorizontalNavigation = document.getElementById("horizontalNav");
    HorizontalNavigation.append(template.content);
}

function HorizontalNav(){
    var horizontalNavId = $("#horizontalNav");
    
    var mainDivHorizontalNav = $("<div>").addClass("navbar").addClass("navbar-inverse");
    horizontalNavId.append(mainDivHorizontalNav);

    var headerDiv = $("<div>").addClass("navbar-header");
    mainDivHorizontalNav.append(headerDiv);
    var headerLink = $("<a>").addClass("navbar-brand").attr("href" , "#");
    headerDiv.append(headerLink);
    var logoImageHorizontalNav = $("<img>").addClass("horizontalNavLogo").attr("src" , horizontalNav_key.InformationBrand.logoImg).attr("alt" , horizontalNav_key.InformationBrand.berandName)
    headerLink.append(logoImageHorizontalNav);
    var brandHorizontalNav = $("<span>").addClass("horizontalNavBerand").attr("text_key" , horizontalNav_key.InformationBrand.berandName).html(horizontalNav_key.InformationBrand.berandName);
    headerLink.append(brandHorizontalNav);



    var mainLeftList = $("<ul>").addClass("nav").addClass("navbar-nav");
    mainDivHorizontalNav.append(mainLeftList);

    for (let i = 0; i < horizontalNav_key.InformationLink.length; i++) {
        if (horizontalNav_key.InformationLink[i].dropdownLink== "null") {
            var mainLeftLi = $("<li>");
            mainLeftList.append(mainLeftLi);
            var mainLeftLink = $("<a>").attr("href" , "#").addClass("mainLink");
            mainLeftLi.append(mainLeftLink);
            // var iconLink = $("<i>").addClass("fa").html(horizontalNav_key.InformationLeftList[i].icon);
            // mainLeftLink.append(iconLink);
            var spanLinkName = $("<span>").addClass("mainLink").attr("text_key" , horizontalNav_key.InformationLink[i].linkName).html(horizontalNav_key.InformationLink[i].linkName);
            mainLeftLink.append(spanLinkName)
        }
        else{
            var badgesLi = $("<li>").addClass("dropdown");
            mainLeftList.append(badgesLi);
            var badgesLink = $("<a>").addClass("dropdown-toggle").attr("data-toggle" , "dropdown").attr("href" , "#").html(horizontalNav_key.InformationLink[i].linkName);
            badgesLi.append(badgesLink);
            var badgesImage = $("<i>").addClass("fa").addClass("notifications").html(horizontalNav_key.InformationLink[i].icon);
            badgesLink.append(badgesImage);
            var notificationCounter = $("<span>").addClass("badge").html(horizontalNav_key.InformationLink[i].notificationCounter);
            badgesLink.append(notificationCounter);
            var badgesCollapse = $("<span>").addClass("caret");
            badgesLink.append(badgesCollapse);

            var dropdownList = $("<ul>").addClass("dropdown-menu");
            badgesLi.append(dropdownList);
            for (let dropdownLinkCounter = 0; dropdownLinkCounter <horizontalNav_key.InformationLink[i].dropdownLink.length; dropdownLinkCounter++) {
                var dropdownLi = $("<li>");
                dropdownList.append(dropdownLi);
                var dropdownLink = $("<a>").attr("href" , "#").attr("text_key" , horizontalNav_key.InformationLink[i].dropdownLink[dropdownLinkCounter].linkName)
                    .html(horizontalNav_key.InformationLink[i].dropdownLink[dropdownLinkCounter].linkName);
                dropdownLi.append(dropdownLink);  
            }
        }
        
    }

    var mainRightList = $("<ul>").addClass("nav").addClass("navbar-nav").css("float" , "right");
    mainDivHorizontalNav.append(mainRightList);

    var userLi = $("<li>").addClass("profileUser");
    mainRightList.append(userLi);
    var userShape = $("<i>").css("font-size", "24px").addClass("fa").html(horizontalNav_key.InformationUsers.icon);
    userLi.append(userShape);
    var userName = $("<span>").addClass("profileUserHorizontalNav").attr("text_key" , horizontalNav_key.InformationUsers.userName).html(horizontalNav_key.InformationUsers.userName);
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

