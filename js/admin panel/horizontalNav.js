
// ********************* json file  *********************
var login_key= {
    "image": "../../img/admin panel/logo/logo.jpg",
    "brand" : "brandName",
    "userName":"usernamePlaceHolder",
    "pasword": "paswordPlaceHolder",
    "remmemberMe": "remmemberMe",
    "loginBtn": "login",
    "forgetPass": "forgetPass"
 }
 
 var login_Fa={
     "brandName": " کافه اپیکور",
     "usernamePlaceHolder": "نام کاربری",
     "paswordPlaceHolder": "رمز",
     "remmemberMe": "مرا بخاطر بسپار",
     "login":"وارد شدن",
     "forgetPass" : "رمز را فراموش کردی ؟"
 }
 
 var login_En={
     "brandName": "Epicor Cafe",
     "usernamePlaceHolder": "User name",
     "paswordPlaceHolder": "Password",
     "remmemberMe": "Remmember me",
     "login": "Login",
     "forgetPass":"Forget password?"
 }
 
 var loginFaJsonString = JSON.stringify(login_Fa);
 var loginFaJson = JSON.parse(loginFaJsonString);
 
 var loginEnJsonString = JSON.stringify(login_En);
 var loginEnJson = JSON.parse(loginEnJsonString);

 $( document ).ready(function() {
 
    createHorizontalNav();
    

    // getAndSetTranslateLanguageNavAdminPanel();

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
    var headerLink = $("<a>").addClass("navbar-brand").attr("href" , "#")
    headerDiv.append(headerLink);
    var logoImageHorizontalNav = $("<img>").addClass("horizontalNavLogo").attr("src" , "../../img/admin panel/logo/logo.jpg").attr("alt" , "epicor cafe")
    headerLink.append(logoImageHorizontalNav);
    var brandHorizontalNav = $("<span>").addClass("horizontalNavBerand").html("Cafe Epicor");
    headerLink.append(brandHorizontalNav);



    var mainLeftList = $("<ul>").addClass("nav").addClass("navbar-nav");
    mainDivHorizontalNav.append(mainLeftList);

    var mainLeftLi = $("<li>");
    mainLeftList.append(mainLeftLi);
    var mainLeftLink = $("<a>").attr("href" , "#").html("home");
    mainLeftLi.append(mainLeftLink);

    var badgesLi = $("<li>").addClass("dropdown");
    mainLeftList.append(badgesLi);
    var badgesLink = $("<a>").addClass("dropdown-toggle").attr("data-toggle" , "dropdown").attr("href" , "#");
    badgesLi.append(badgesLink);
    var badgesImage = $("<i>").addClass("fa").addClass("notifications").html("&#xf0a2;");
    badgesLink.append(badgesImage);
    var badgesCounter = $("<span>").addClass("badge").html("3");
    badgesLink.append(badgesCounter);
    var badgesCollapse = $("<span>").addClass("caret");
    badgesLink.append(badgesCollapse);

    var dropdownList = $("<ul>").addClass("dropdown-menu");
    badgesLi.append(dropdownList);
    var dropdownLi = $("<li>");
    dropdownList.append(dropdownLi);
    var dropdownLink = $("<a>").attr("href" , "#").html("check inbox");
    dropdownLi.append(dropdownLink);

    var mainRightList = $("<ul>").addClass("nav").addClass("navbar-nav").css("float" , "right");
    mainDivHorizontalNav.append(mainRightList);

    var userLi = $("<li>").addClass("profileUser");
    mainRightList.append(userLi);
    var userShape = $("<i>").css("font-size", "24px").addClass("fa").html("&#xf2be;");
    userLi.append(userShape);
    var userName = $("<span>").addClass("profileUserHorizontalNav").html("user name");
    userLi.append(userName);
}

// ********************* change language  *********************

function getAndSetTranslateLanguageNavAdminPanel(){
   var ContainsKeyName = $("*[text_key]");
   for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){

       for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
           
           if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "text_key") {

               var keyValue = ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].value;
               var translatedValueNav;
               if(window.localStorage.getItem("language") == "En"){
                   translatedValueNav = loginEnJson[keyValue];
               }
               else{
                   translatedValueNav = loginFaJson[keyValue];
               }

               // if("[placeholder]"==true){
               //     console.log("asma")
               // }
               // else{
                   ContainsKeyName[elementContainKeyName].innerHTML = translatedValueNav;
               // }
           }
       }
   }
}

function changeLanguageNavAdminPanel()
{
    var getLangAdmin = $("#languageAdmin").val();
    var setValueLang = window.localStorage.setItem("language" ,getLangAdmin );
    getAndSetTranslateLanguageNavAdminPanel();
}

