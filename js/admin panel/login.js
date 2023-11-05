var navigationBar_key= {
   "image": "imageLogo",
   "brand" : "brandName",
   "userName":"usernamePlaceHolder",
   "pasword": "paswordPlaceHolder",
   "remmemberMe": "remmemberMe",
   "loginBtn": "login"
}

var navigationBar_Fa={
    "imageLogo": "",
    "brandName": " کافه اپیکور",
    "usernamePlaceHolder": "نام کاربری",
    "paswordPlaceHolder": "رمز",
    "remmemberMe": "مرا بخاطر بسپار",
    "login":"وارد شدن",

}

var navigationBar_En={
    "imageLogo": "",
    "brandName": "Epicor Cafe",
    "usernamePlaceHolder": "User name",
    "paswordPlaceHolder": "Password",
    "remmemberMe": "Remmember me",
    "login": "Login",
}

var navigationBarFaJsonString = JSON.stringify(navigationBar_Fa);
var navigationBarFaJson = JSON.parse(navigationBarFaJsonString);


var navigationBarEnJsonString = JSON.stringify(navigationBar_En);
var navigationBarEnJson = JSON.parse(navigationBarEnJsonString);


$( document ).ready(function() {

    createNave();
    

    // getAndSetTranslateLanguageNavAdminPanel();

})  


function createNave(){
    const template = document.createElement('template');

    $("template").html(JqueryLogin())

    var navigationBar = document.getElementById("navBar");
    navigationBar.append(template.content);

    

}

function JqueryLogin(){
    var loginId = $("#login");
    var verticalNavigation = $("<div>").attr("id" , "mySidebar").addClass("sidebar").addClass("mySidebarWidthClose");
    navId.append(verticalNavigation);
  
    var createHeaderNav = $("<div>").addClass("header");
    verticalNavigation.append(createHeaderNav);
    var logoImage = $("<img>").addClass("logo")
      .attr("src" , navigationBar_key.headerNav[0].logoImg)
      .attr("alt", "epicor cafe");
    createHeaderNav.append(logoImage);
    var berandNme = $("<span>").addClass("brandName").addClass("displayNone").attr("text_key" , navigationBar_key.headerNav[0].berandName).html( navigationBar_key.headerNav[0].berandName);
    createHeaderNav.append(berandNme);
    var mainList = $("<ul>");
    verticalNavigation.append(mainList);

    for (let listNumber = 0; listNumber < navigationBar_key.Information.length; listNumber++) {
        // console.log(navigationBar_key.Information.length);
        var mainListLi =  $("<li>");
        mainList.append(mainListLi);
        var glyphin = $("<span>").addClass("glyphicon").addClass(navigationBar_key.Information[listNumber].Image);
        mainListLi.append(glyphin);

        if (navigationBar_key.Information[listNumber].subLink) {
            var linkList = $("<a>").addClass("link").addClass("displayNone").attr("href" , "#")
            .attr("subid" , navigationBar_key.Information[listNumber].subid).attr("onclick" , "dropdownSubLink("+navigationBar_key.Information[listNumber].subid+")")
            .css("display" , "none").html(navigationBar_key.Information[listNumber].Name);
            mainListLi.append(linkList);
            var glyphinCollapsible = $("<span>").attr("subid" , navigationBar_key.Information[listNumber].subid).addClass("glyphicon").addClass("glyphicon-menu-right");
            linkList.append(glyphinCollapsible);

            var subLinkList = $("<ul>").attr("subid" , navigationBar_key.Information[listNumber].subid).addClass("subLink").addClass("closeDropdown");
            mainListLi.append(subLinkList);
            // console.log(navigationBar_key.Information[listNumber].subLink)
            for (let subLinkNumber = 0; subLinkNumber < navigationBar_key.Information[listNumber].subLink.length; subLinkNumber++) {
                var subListLi = $("<li>");
                subLinkList.append(subListLi);
                var subLink = $("<a>").attr("href" , "#").html( navigationBar_key.Information[listNumber].subLink[subLinkNumber].Name);
                subListLi.append(subLink);
            }

        }
        else{
            var linkList = $("<a>").addClass("link").attr("href" , "#").css("display" , "none").html(navigationBar_key.Information[listNumber].Name);
            mainListLi.append(linkList);
        }
        
    }

    var openNavBarBtn = $("<div>").attr("id" , "main").addClass("mainMarginleftClose");
    navId.append(openNavBarBtn);
    var Collapsibleflesh = $("<span>").addClass("glyphicon").addClass("glyphicon-triangle-right")
    var openBtnShape = $("<button>").addClass("openbtn").addClass("openbtnToggleClose").attr("onclick" , "openAndClose()").html(Collapsibleflesh);
    openNavBarBtn.append(openBtnShape);
}

function getAndSetTranslateLanguageNavAdminPanel(){
    var ContainsKeyName = $("*[keyname]");
    for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){

        for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
            
            if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "keyname") {

                var keyValue = ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].value;
                var translatedValueNav;
                if(window.localStorage.getItem("language") == "En"){
                    translatedValueNav = navigationBarEnJson[keyValue];
                }
                else{
                    translatedValueNav = navigationBarFaJson[keyValue];
                }
                ContainsKeyName[elementContainKeyName].innerHTML = translatedValueNav;
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

















