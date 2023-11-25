var horizontalNav_key= {
  "InformationBrand":
      {
          "berandName": "nameCoffe_horizontalNavigation",
          "logoImg": "../../img/admin panel/logo/logo.jpg",
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
            "linkName":"news_horizontalNavigation",
            "icon":null,
            "notificationCounter":null,
            "dropdownLink":null
          },
          {
            "linkName":"contact_horizontalNavigation",
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
          },
          {
              "linkName":"username_horizontalNavigation",
              "icon":"&#xf2be;",
              "notificationCounter":null,
              "dropdownLink":null
          }
          
      ]
}

var horizontalNav_Fa={
   "nameCoffe_horizontalNavigation": " کافه اپیکور",
   "home_horizontalNavigation": "صفحه اصلی",
   "news_horizontalNavigation":"اخبار",
   "contact_horizontalNavigation":"مخاطب",
   "checkInbox": "چک کردن پیام های ورودی",
   "PaymenOfSalary":"پرداخت حقوق",
   "StatementOfExpenses" : "بیانیه هزینه ها",
   "username_horizontalNavigation": "نام کاربری",
}

var horizontalNav_En={
   "nameCoffe_horizontalNavigation": "Epicor Cafe",
   "home_horizontalNavigation": "Home",
   "news_horizontalNavigation":"News",
   "contact_horizontalNavigation":"Contact",
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
  var mainDivHorizontalNav = $("<div>").addClass("headerHorizontalNavigation").attr("id","topHorizontalNavigation");
  horizontalNavId.append(mainDivHorizontalNav);

  // create header of horizontal navigation 
  var logoImageHorizontalNavigation = horizontalNav_key.InformationBrand.logoImg;
  var brandNameHorizontalNavigation = horizontalNav_key.InformationBrand.berandName;
  createHeader(mainDivHorizontalNav , logoImageHorizontalNavigation ,brandNameHorizontalNavigation )
 
  // create links of horizontal navigation
  for (let i = 0; i < horizontalNav_key.InformationLink.length; i++){
      var linkIcon = horizontalNav_key.InformationLink[i].icon;
      var horizontalNavigationLinkName = horizontalNav_key.InformationLink[i].linkName;
      createhorizontalNavigationLinkes(mainDivHorizontalNav , linkIcon ,  horizontalNavigationLinkName , i);
  }

  // create colapse  links in mobile 
  var colapseShapeLinks = $("<a>").attr("href", "javascript:void(0);").css("font-size" , "15px").addClass("icon").attr("onclick", "myFunction()").html("&#9776;")
  mainDivHorizontalNav.append(colapseShapeLinks);
}

function createHeader(mainDiv , logoImageHorizontalNavigation ,brandNameHorizontalNavigation ){

  var headerLink = $("<a>").addClass("active").attr("href" , "#");
  mainDiv.append(headerLink);
  var logoImageHorizontalNav = $("<img>").addClass("horizontalLogo").attr("src" , logoImageHorizontalNavigation).attr("alt" , brandNameHorizontalNavigation)
  headerLink.append(logoImageHorizontalNav);
  var brandHorizontalNav = $("<span>").addClass("horizontalBrandName").attr("text_key_horizontal_navigation" , brandNameHorizontalNavigation).html(brandNameHorizontalNavigation);
  headerLink.append(brandHorizontalNav);
}

function createhorizontalNavigationLinkes(mainDiv , linkIcon ,  horizontalNavigationLinkName , counter){
 
  if (horizontalNav_key.InformationLink[counter].dropdownLink!= null) {
    var mainDropDownDiv = $("<div>").addClass("dropdownHorizontalNavigation");
    mainDiv.append(mainDropDownDiv);
    var buttonMainLink = $("<button>").addClass("dropbtn");
    mainDropDownDiv.append(buttonMainLink);
    var iconLink = $("<i>").addClass("fa").html(linkIcon);
    buttonMainLink.append(iconLink);
    var badgeNumber = $("<span>").addClass("badge").html(horizontalNav_key.InformationLink[counter].notificationCounter)
    buttonMainLink.append(badgeNumber);
    var iconLink = $("<i>").addClass("fa").addClass("fa-caret-down");
    buttonMainLink.append(iconLink);

    var dropDownContent = $("<div>").addClass("dropdownHorizontalNavigation-content");
    mainDropDownDiv.append(dropDownContent);
      for (let dropdownLinkCounter = 0; dropdownLinkCounter <horizontalNav_key.InformationLink[counter].dropdownLink.length; dropdownLinkCounter++)
      {
          var dropDownLinkName = horizontalNav_key.InformationLink[counter].dropdownLink[dropdownLinkCounter].linkName;
          cerateDropdownList(dropDownContent , dropDownLinkName)
      }
  }

  else{
    var mainLink = $("<a>").attr("href" , "#");
    mainDiv.append(mainLink);
    var iconLink = $("<i>").addClass("fa").html(linkIcon);
    mainLink.append(iconLink);
    var spanLinkName = $("<span>").attr("text_key_horizontal_navigation" , horizontalNavigationLinkName).html(horizontalNavigationLinkName);
    mainLink.append(spanLinkName);
    addStyleToUser();
  
  }
}
function cerateDropdownList(maindiv , dropDownLinkName){
  var dropdownLink = $("<a>").attr("href" , "#").attr("text_key_horizontal_navigation" , dropDownLinkName)
      .html(dropDownLinkName);
      maindiv.append(dropdownLink); 
}

function addStyleToUser(){
  $("span[text_key_horizontal_navigation='username_horizontalNavigation']").parent("a").css("float","right")
}



function myFunction() {
  var x = document.getElementById("topHorizontalNavigation");
  if (x.className === "headerHorizontalNavigation") {
    x.className += " responsive";
  } else {
    x.className = "headerHorizontalNavigation";
  }
}
