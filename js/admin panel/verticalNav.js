var navigationBar_key= {
    "headerNav":
        {
            "berandName": "nameCoffe_verticalNavigation",
            "logoImg": "../../img/general image/logo.jpg",
        },
    "Information":
    [
        {
            "mainId": "1",
            "Name": "home_verticalNavigation",
            "Image": "glyphicon-briefcase",
            "target" : "#",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "2",
            "Name": "popular_verticalNavigation",
            "Image": "glyphicon-heart-empty",
            "target" : "#",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "3",
            "Name": "addingMenu_verticalNavigation",
            "Image": "glyphicon-cutlery",
            "target" : "#",
            "subid": "1",
            "subLink":[
                {
                    "mainId": "4",
                    "Name": "addingMenuBar_verticalNavigation",
                },
                {
                    "mainId": "5",
                    "Name": "addingslide_verticalNavigation",
                }
            ]
        },
        {
            "mainId": "6",
            "Name": "shortage_verticalNavigation",
            "Image": "glyphicon-shopping-cart",
            "target" : "#",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "7",
            "Name": "charts_verticalNavigation",
            "Image": "glyphicon-stats",
            "glyphinCollapsible": "glyphicon-menu-right",
            "subid": "2",
            "subLink":[
                {
                    "mainId": "8",
                    "Name": "sales_verticalNavigation",
                },
                {
                    "mainId": "9",
                    "Name": "incom_verticalNavigation",
                }
            ]
        },
        {
            "mainId": "10",
            "Name": "commentes_verticalNavigation",
            "Image": "glyphicon-comment",
            "target" : "#",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "11",
            "Name": "emaile_verticalNavigation",
            "Image": "glyphicon-envelope",
            "target" : "#",
            "glyphinCollapsible": "null",
            "subid": "null",
            "subLink":"null"
        },
        {
            "mainId": "12",
            "Name": "customerClub_verticalNavigation",
            "Image": "glyphicon-gift",
            "target" : "#",
            "subid": "null",
            "subLink":"null"
        }
    ]
}

var navigationBar_Fa={
    "nameCoffe_verticalNavigation": " کافه اپیکور",
    "home_verticalNavigation": "داشبورد",
    "popular_verticalNavigation": "غذا های پرطرفدار",
    "addingMenu_verticalNavigation": "اضافه کردن منو",
    "addingMenuBar_verticalNavigation": "اضافه کردن سر منو",
    "addingslide_verticalNavigation":"اضافه کردن غذا",
    "shortage_verticalNavigation" : "کسری",
    "charts_verticalNavigation": "نمودار ها",
    "sales_verticalNavigation": "میزان فروش",
    "incom_verticalNavigation":"میزان درآمد",
    "commentes_verticalNavigation": "نظرات",
    "emaile_verticalNavigation": "ایمیل",
    "customerClub_verticalNavigation": "باشگاه مشتریان"
}

var navigationBar_En={
    "nameCoffe_verticalNavigation": "Epicor Cafe",
    "home_verticalNavigation": "Dashboard",
    "popular_verticalNavigation": "Popular",
    "addingMenu_verticalNavigation": "Add new menu",
    "addingMenuBar_verticalNavigation": "Add main menu",
    "addingslide_verticalNavigation": "Add new Food",
    "shortage_verticalNavigation": "Shortage",
    "charts_verticalNavigation": "charts",
    "sales_verticalNavigation": "sales amount",
    "incom_verticalNavigation": "Amount of income",
    "commentes_verticalNavigation": "Commentes",
    "emaile_verticalNavigation":"Emailes",
    "customerClub_verticalNavigation": "Customer Club"
}

var holdMaimId = 0;

var navigationBarFaJsonString = JSON.stringify(navigationBar_Fa);
var navigationBarFaJson = JSON.parse(navigationBarFaJsonString);


var navigationBarEnJsonString = JSON.stringify(navigationBar_En);
var navigationBarEnJson = JSON.parse(navigationBarEnJsonString);


$( document ).ready(function() {

    createNave();
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
    var berandNme = $("<span>").addClass("brandName").addClass("displayInline").attr("text_key_vertical_navigation" , brandName).html( brandName);
    createHeaderNav.append(berandNme);
}

function createVerticalNavigationList(mainList, icon , mainLinkName , mainId , counter){
        var mainListLi =  $("<li>");
        mainList.append(mainListLi);
        var glyphin = $("<span>").addClass("glyphicon").addClass(icon);
        mainListLi.append(glyphin);
        var linkList = $("<a>").addClass("link").addClass("displayInline").attr("href" , "#").attr("text_key_vertical_navigation" , mainLinkName)
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

function createVerticalNavigationSubLink(mainListSubLink ,  subLinkName ,subId ,mainId){
    var subListLi = $("<li>");
    mainListSubLink.append(subListLi);
    var subLink = $("<a>").attr("href" , "#").attr("text_key_vertical_navigation" , subLinkName).attr("mainId" , mainId).attr("subid" , subId)
        .attr("onclick" , "holdLink("+mainId+")").html( subLinkName);
    subListLi.append(subLink);
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