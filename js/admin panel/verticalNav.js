var navigationBar_key= {
    "headerNav":
        {
            "berandName": "nameCoffe",
            "logoImg": "../../img/admin panel/logo/logo.jpg",
        },
    "Information":
    [
        {
            "Name": "home",
            "Image": "glyphicon-briefcase",
            "target" : "#",
            "glyphinCollapsible": "null",
            "subid": "null",
            "subLink":"null"
        },
        {
            "Name": "popular",
            "Image": "glyphicon-heart-empty",
            "target" : "#",
            "glyphinCollapsible": "null",
            "subid": "null",
            "subLink":"null"
        },
        {
            "Name": "addingMenu",
            "Image": "glyphicon-cutlery",
            "target" : "#",
            "glyphinCollapsible": "glyphicon-menu-right",
            "subid": "1",
            "subLink":[
                {
                    "Name": "addingMenuBar",
                },
                {
                    "Name": "addingslide",
                }
            ]
        },
        {
            "Name": "shortage",
            "Image": "glyphicon-shopping-cart",
            "target" : "#",
            "glyphinCollapsible": "null",
            "subid": "null",
            "subLink":"null"
        },
        {
            "Name": "charts",
            "Image": "glyphicon-stats",
            "glyphinCollapsible": "glyphicon-menu-right",
            "subid": "2",
            "subLink":[
                {
                    "Name": "sales",
                },
                {
                    "Name": "incom",
                }
            ]
        },
        {
            "Name": "commentes",
            "Image": "glyphicon-comment",
            "target" : "#",
            "glyphinCollapsible": "null",
            "subid": "null",
            "subLink":"null"
        },
        {
            "Name": "emaile",
            "Image": "glyphicon-envelope",
            "target" : "#",
            "glyphinCollapsible": "null",
            "subid": "null",
            "subLink":"null"
        },
        {
            "Name": "customerClub",
            "Image": "glyphicon-gift",
            "target" : "#",
            "glyphinCollapsible": "null",
            "subid": "null",
            "subLink":"null"
        }
    ]
}

var navigationBar_Fa={
    "nameCoffe": " کافه اپیکور",
    "home": "داشبورد",
    "popular": "غذا های پرطرفدار",
    "addingMenu": "اضافه کردن منو",
    "addingMenuBar": "اضافه کردن سر منو",
    "addingslide":"اضافه کردن غذا",
    "shortage" : "کسری",
    "charts": "نمودار ها",
    "sales": "میزان فروش",
    "incom":"میزان درآمد",
    "commentes": "نظرات",
    "emaile": "ایمیل",
    "customerClub": "باشگاه مشتریان"
}

var navigationBar_En={
    "nameCoffe": "Epicor Cafe",
    "home": "Dashboard",
    "popular": "Popular",
    "addingMenu": "Add new menu",
    "addingMenuBar": "Add main menu",
    "addingslide": "Add new Food",
    "shortage": "Shortage",
    "charts": "charts",
    "sales": "sales amount",
    "incom": "Amount of income",
    "commentes": "Commentes",
    "emaile":"Emailes",
    "customerClub": "Customer Club"
}

var navigationBarFaJsonString = JSON.stringify(navigationBar_Fa);
var navigationBarFaJson = JSON.parse(navigationBarFaJsonString);


var navigationBarEnJsonString = JSON.stringify(navigationBar_En);
var navigationBarEnJson = JSON.parse(navigationBarEnJsonString);


$( document ).ready(function() {

    createNave();


    getAndSetTranslateLanguageNavAdminPanel();

})  


function createNave(){
    const template = document.createElement('template');

    $("template").html(NavigationBar())

    var navigationBar = document.getElementById("navBar");
    navigationBar.append(template.content);
}

function headerVerticalNav(htmlId , urlLogo , brandName){
    var verticalNavigation = $("<div>").attr("id" , "mySidebar").addClass("sidebar").addClass("mySidebarWidthOpen");
    htmlId.append(verticalNavigation);
    var createHeaderNav = $("<div>").addClass("headerVerticalNav");
    verticalNavigation.append(createHeaderNav);
    var logoImage = $("<img>").addClass("logoVerticalNav")
      .attr("src" , urlLogo)
      .attr("alt", brandName);
    createHeaderNav.append(logoImage);
    var berandNme = $("<span>").addClass("brandName").addClass("displayInline").attr("text_key" , brandName).html( brandName);
    createHeaderNav.append(berandNme);
}

function listContionSubLink(mainList , mainLinkName ,subNumber , glyphiconCollapsible , counter ){
    var linkList = $("<a>").addClass("link").addClass("displayInline").attr("href" , "#")
    .attr("text_key" , mainLinkName)
    .attr("subid" , subNumber).attr("onclick" , "dropdownSubLink("+subNumber+")")
    .html(mainLinkName);
    mainList.append(linkList);
    var glyphinCollapsible = $("<span>").attr("subid" , subNumber).addClass("glyphicon")
        .addClass(glyphiconCollapsible).addClass("collapsibleGlyph").addClass("collapsibleGlyphShow");
        mainList.append(glyphinCollapsible);

    var subLinkList = $("<ul>").attr("subid" , subNumber).addClass("subLink").addClass("closeDropdown");
    mainList.append(subLinkList);
    for (let subLinkNumber = 0; subLinkNumber < navigationBar_key.Information[counter].subLink.length; subLinkNumber++) {
        var subLinkName = navigationBar_key.Information[counter].subLink[subLinkNumber].Name;
        subLink(subLinkList ,subLinkName);
    }
}

function subLink(mainList ,  subLinkName){
    var subListLi = $("<li>");
    mainList.append(subListLi);
    var subLink = $("<a>").attr("href" , "#").attr("text_key" , subLinkName)
        .html( subLinkName);
    subListLi.append(subLink);
}

function NavigationBar(){
    var navId = $("#navBar");
    
    var urlLogo = navigationBar_key.headerNav.logoImg;
    var brandName = navigationBar_key.headerNav.berandName;
    headerVerticalNav(navId , urlLogo , brandName);

    var verticalNavigation = $("#mySidebar")
    var mainList = $("<ul>");
    verticalNavigation.append(mainList);

    for (let listNumber = 0; listNumber < navigationBar_key.Information.length; listNumber++) {
        var mainListLi =  $("<li>");
        mainList.append(mainListLi);
        var glyphin = $("<span>").addClass("glyphicon").addClass(navigationBar_key.Information[listNumber].Image);
        mainListLi.append(glyphin);

        if (navigationBar_key.Information[listNumber].subLink != "null") { 
            var mainLinkName =  navigationBar_key.Information[listNumber].Name;
            var subNumber = navigationBar_key.Information[listNumber].subid;
            var glyphiconCollapsible = navigationBar_key.Information[listNumber].glyphinCollapsible;
            listContionSubLink(mainListLi , mainLinkName ,subNumber , glyphiconCollapsible ,listNumber)
        }
        else{
            var linkList = $("<a>").addClass("link").addClass("displayInline").attr("href" , "#").attr("text_key" , navigationBar_key.Information[listNumber].Name).html(navigationBar_key.Information[listNumber].Name);
            mainListLi.append(linkList);
        }
        
    }

    var openNavBarBtn = $("<div>").attr("id" , "main").addClass("mainMarginleftOpen");
    navId.append(openNavBarBtn);
    var Collapsibleflesh = $("<span>").addClass("glyphicon").addClass("glyphicon-triangle-right").addClass("openerOcloser")
    var openBtnShape = $("<button>").addClass("openbtn").addClass("openbtnToggleOpen").attr("onclick" , "openAndClose()").html(Collapsibleflesh);
    openNavBarBtn.append(openBtnShape);
}

function getAndSetTranslateLanguageNavAdminPanel(){
    var ContainsKeyName = $("*[text_key]");
    for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){

        for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
            
            if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "text_key") {

                var keyValue = ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].value;
                var translatedValueNav;
                if(window.localStorage.getItem("lang") == "En"){
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
    var setValueLang = window.localStorage.setItem("lang" ,getLangAdmin );
    getAndSetTranslateLanguageNavAdminPanel();
}

function openAndClose(){
    $(".link").toggleClass("displayInline displayNone");
    $(".brandName").toggleClass("displayInline displayNone");
    $(".openbtn").toggleClass("openbtnToggleOpen openbtnToggleClose");
    $("#main").toggleClass("mainMarginleftOpen mainMarginleftClose");
    $("#mySidebar").toggleClass("mySidebarWidthOpen mySidebarWidthClose");
    $(".collapsibleGlyph").toggleClass("collapsibleGlyphShow collapsibleGlyphHide");

}

  function dropdownSubLink(subID){
    var subLink = $("ul.subLink[subId='"+subID+"']");
    subLink.toggleClass("closeDropdown openDropdown");
    var glyphinIcon = $("span.glyphicon[subId='"+subID+"']");
    glyphinIcon.toggleClass("glyphicon-menu-right glyphicon-menu-down");
  }
  