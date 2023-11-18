var navigationBar_key= {
    "headerNav":
        {
            "berandName": "nameCoffe",
            "logoImg": "../../img/admin panel/logo/logo.jpg",
        },
    "Information":
    [
        {
            "mainId": "1",
            "Name": "home",
            "Image": "glyphicon-briefcase",
            "target" : "#",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "2",
            "Name": "popular",
            "Image": "glyphicon-heart-empty",
            "target" : "#",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "3",
            "Name": "addingMenu",
            "Image": "glyphicon-cutlery",
            "target" : "#",
            "subid": "1",
            "subLink":[
                {
                    "mainId": "4",
                    "Name": "addingMenuBar",
                },
                {
                    "mainId": "5",
                    "Name": "addingslide",
                }
            ]
        },
        {
            "mainId": "6",
            "Name": "shortage",
            "Image": "glyphicon-shopping-cart",
            "target" : "#",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "7",
            "Name": "charts",
            "Image": "glyphicon-stats",
            "glyphinCollapsible": "glyphicon-menu-right",
            "subid": "2",
            "subLink":[
                {
                    "mainId": "8",
                    "Name": "sales",
                },
                {
                    "mainId": "9",
                    "Name": "incom",
                }
            ]
        },
        {
            "mainId": "10",
            "Name": "commentes",
            "Image": "glyphicon-comment",
            "target" : "#",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "11",
            "Name": "emaile",
            "Image": "glyphicon-envelope",
            "target" : "#",
            "glyphinCollapsible": "null",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "12",
            "Name": "customerClub",
            "Image": "glyphicon-gift",
            "target" : "#",
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

var holdMaimId = 0;

var navigationBarFaJsonString = JSON.stringify(navigationBar_Fa);
var navigationBarFaJson = JSON.parse(navigationBarFaJsonString);


var navigationBarEnJsonString = JSON.stringify(navigationBar_En);
var navigationBarEnJson = JSON.parse(navigationBarEnJsonString);


$( document ).ready(function() {

    createNave();


    getAndSetTranslateLanguage();

})  


function createNave(){
    const template = document.createElement('template');

    $("template").html(createNavigationBar())

    var navigationBar = document.getElementById("verticalNavigation");
    navigationBar.append(template.content);
}

function createNavigationBar(){
    var navId = $("#verticalNavigation");
    
    // create header of vertical navigation 
    var urlLogo = navigationBar_key.headerNav.logoImg;
    var brandName = navigationBar_key.headerNav.berandName;
    createHeaderVerticalNavigation(navId , urlLogo , brandName);

    // create list of link of vertical navigation 
    var verticalNavigation = $("#mySidebar")
    var mainList = $("<ul>");
    verticalNavigation.append(mainList);
    for (let listNumber = 0; listNumber < navigationBar_key.Information.length; listNumber++){
        var linkIcon = navigationBar_key.Information[listNumber].Image;
        var mainLinkName  = navigationBar_key.Information[listNumber].Name;
        var mainIdLink = navigationBar_key.Information[listNumber].mainId;
        createVerticalNavigationList( mainList, linkIcon , mainLinkName , mainIdLink ,listNumber);
    }

    var openNavBarBtn = $("<div>").attr("id" , "VerticalNavigationButton").addClass("mainMarginleftOpen");
    navId.append(openNavBarBtn);
    var Collapsibleflesh = $("<span>").addClass("openerOcloser").addClass("glyphicon").addClass("glyphicon-align-justify");
    var openBtnShape = $("<button>").addClass("openbtn").addClass("openbtnToggleOpen").attr("onclick" , "openAndClose()").html(Collapsibleflesh);
    openNavBarBtn.append(openBtnShape);
}

function createHeaderVerticalNavigation(htmlId , urlLogo , brandName){
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

function createVerticalNavigationList(mainList, icon , mainLinkName , mainId , counter){
        var mainListLi =  $("<li>");
        mainList.append(mainListLi);
        var glyphin = $("<span>").addClass("glyphicon").addClass(icon);
        mainListLi.append(glyphin);
        var linkList = $("<a>").addClass("link").addClass("displayInline").attr("href" , "#").attr("text_key" , mainLinkName)
        .attr("mainId" , mainId)
        .attr("onclick" , "holdLink("+mainId+")")
        .html(mainLinkName);
        mainListLi.append(linkList);
        
        if (navigationBar_key.Information[counter].subLink != "null"){
            var mainIdLink = navigationBar_key.Information[counter].mainId;
            var subId = navigationBar_key.Information[counter].subid;
            addSubLinkClasses( mainListLi ,mainIdLink , subId );
            var subLinkList = $("<ul>").attr("subid" , subId).addClass("subLink").addClass("closeDropdown");
            mainListLi.append(subLinkList);
            for (let subLinkNumber = 0; subLinkNumber < navigationBar_key.Information[counter].subLink.length; subLinkNumber++){
                var subLinkName = navigationBar_key.Information[counter].subLink[subLinkNumber].Name;
                var mainIdSubLink = navigationBar_key.Information[counter].subLink[subLinkNumber].mainId;

                createVerticalNavigationSubLink(subLinkList ,  subLinkName ,subId ,mainIdSubLink);
            }
        }
    // }
}

function addSubLinkClasses( mainListSubLink,mainId , subId ){
    $("a[mainId='"+mainId+"']").attr("onclick" , "dropdownSubLink("+subId+"); holdLink("+mainId+");")
    var glyphinCollapsible = $("<span>").attr("subid" ,subId).addClass("glyphicon")
    .addClass("glyphicon-menu-right").addClass("collapsibleGlyph").addClass("collapsibleGlyphShow");
    mainListSubLink.append(glyphinCollapsible);
}

// function createVerticalNavigationSubLink(mainListSubLink ,  subLinkName ,subId ,mainId){
//    {
//     var subLinkList = $("<ul>").attr("subid" , subId).addClass("subLink").addClass("closeDropdown");
//     mainListSubLink.append(subLinkList);
//     for (let subLinkNumber = 0; subLinkNumber < navigationBar_key.Information[counter].subLink.length; subLinkNumber++)
//         var subListLi = $("<li>");
//         subLinkList.append(subListLi);
//         var subLink = $("<a>").attr("href" , "#").attr("text_key" , subLinkName).attr("mainId" , mainId).attr("subid" , subId)
//             .attr("onclick" , "holdLink("+mainId+")").html( subLinkName);
//         subListLi.append(subLink);
//     }
// }

function createVerticalNavigationSubLink(mainListSubLink ,  subLinkName ,subId ,mainId){
    var subListLi = $("<li>");
    mainListSubLink.append(subListLi);
    var subLink = $("<a>").attr("href" , "#").attr("text_key" , subLinkName).attr("mainId" , mainId).attr("subid" , subId)
        .attr("onclick" , "holdLink("+mainId+")").html( subLinkName);
    subListLi.append(subLink);
 }





function getAndSetTranslateLanguage(){
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

function changeLanguage()
{
    var getLangAdmin = $("#language").val();
    var setValueLang = window.localStorage.setItem("lang" ,getLangAdmin );
    getAndSetTranslateLanguage();
}

function openAndClose(){
    var allContainMainId = $("*[mainId]");
    allContainMainId.removeClass("colorLink");
    var linkMainId = $("a[mainId='"+holdMaimId+"']");
    linkMainId.addClass("colorLink");

    $(".openbtn").toggleClass("openbtnToggleOpen openbtnToggleClose");
    $("#VerticalNavigationButton").toggleClass("mainMarginleftOpen mainMarginleftClose");
    $("#mySidebar").toggleClass("mySidebarWidthOpen mySidebarWidthClose");
    if( $(".link").hasClass("displayNone")){
        setTimeout(function () {
            $(".link").removeClass("displayNone");
            $(".link").addClass("displayInline");
        }, 300);
        
    }
    else{
        $(".link").toggleClass("displayInline displayNone");
    }
    
    if( $(".collapsibleGlyph").hasClass("collapsibleGlyphHide")){
        setTimeout(function () {
            $(".collapsibleGlyph").removeClass("collapsibleGlyphHide");
            $(".collapsibleGlyph").addClass("collapsibleGlyphShow");
        }, 300);
        
    }
    else{
        $(".collapsibleGlyph").toggleClass("collapsibleGlyphShow collapsibleGlyphHide");}
    $(".brandName").toggleClass("displayInline displayNone");
   
    var listContainSubLink = $("ul.subLink");
    if(listContainSubLink.hasClass("openDropdown")){
        listContainSubLink.removeClass("openDropdown");
        listContainSubLink.addClass("closeDropdown");
    }
    if (linkMainId.attr("subid")!= null &&  $("#mySidebar").hasClass("mySidebarWidthOpen")) {
        var subIdValue = linkMainId.attr("subid");
        var subLink = $("ul[subId='"+subIdValue+"']");
        if(subLink.hasClass("closeDropdown")){
            subLink.removeClass("closeDropdown");
            subLink.addClass("openDropdown");
        }
    }
  
    
}

  function dropdownSubLink(subID){
    var subLink = $("ul.subLink[subId='"+subID+"']");
    subLink.toggleClass("closeDropdown openDropdown");
    var glyphinIcon = $("span.glyphicon[subId='"+subID+"']");
    glyphinIcon.toggleClass("glyphicon-menu-right glyphicon-menu-down");
  }
  
 function holdLink(id){
    holdMaimId = id;
    var allContainMainId = $("*[mainId]");
    allContainMainId.removeClass("colorLink");
 } 