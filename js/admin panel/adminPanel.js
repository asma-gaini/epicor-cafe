
// ********************* horizontal navigation json file  *********************
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

// ********************* vertical navigation json file  *********************
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

// ********************* add user form json file  *********************
var addUser_key= {
    "Information":
    [
        {
            "inlineAttributeValue" : "email_User",
            "label": "email_addUser",
        },
        {
            "inlineAttributeValue" : "passWord_user",
            "label": "password_addUser"
        },
        {
            "inlineAttributeValue" : "nikname_user",
            "label": "nikName_addUser"
        }
    ],
    
    "Information_submit":
    {
        "inlineAttributeValue" : "send_addUser",
        "sucsessSendValue" :"sucsessSend_addUser"
    }

}

var addUser_Fa={
    "email_addUser": "ایمیل :",
    "password_addUser" : "رمز :",
    "nikName_addUser": "نام مستعار :",
    "send_addUser": "ارسال",
    "sucsessSend_addUser":"موفق"
}

var addUser_En={
    "email_addUser": "Email :",
    "password_addUser": "Password :",
    "nikName_addUser": "Nikname :",
    "send_addUser": "send",
    "sucsessSend_addUser":"sucsess"
}

var addUserFaJsonString = JSON.stringify(addUser_Fa);
var addUserFaJson = JSON.parse(addUserFaJsonString);


var addUserEnJsonString = JSON.stringify(addUser_En);
var addUserEnJson = JSON.parse(addUserEnJsonString);

// ********************* add category menu form json file  *********************
var categoryMenu_key= {
    "Information":
    [
        {
            "inlineAttributeValue" : "nameMenuFa",
            "label": "PersianNameFood"
        },
        {
            "inlineAttributeValue" : "nameMenuEn",
            "label": "englishNameFood"
        }
    ],
    
    "Information_choosePicture":
    [
        {
            "inlineAttributeValue" : "foodPicture_categoryMenu",
            "label": "choosePictureCategoryMenu"
        }
    ],

    "Information_submit":
    {
        "inlineAttributeValue" : "send",
        "sucsessSendValue" :"sucsessSend"
    }

}

var categoryMenu_Fa={
    "PersianNameFood" : "نام فارسی منو :",
    "englishNameFood": "نام انگلیسی منو :",
    "choosePictureCategoryMenu": "انتخاب تصویر :",
    "send": "ارسال",
    "sucsessSend":"موفق"
}

var categoryMenu_En={
    "PersianNameFood": "Menu Persian Neme :",
    "englishNameFood": "Menu English Neme :",
    "choosePictureCategoryMenu": "Choose Menu Picture :",
    "send": "send",
    "sucsessSend":"sucsess"
}

var categoryMenuFaJsonString = JSON.stringify(categoryMenu_Fa);
var categoryMenuFaJson = JSON.parse(categoryMenuFaJsonString);


var categoryMenuEnJsonString = JSON.stringify(categoryMenu_En);
var categoryMenuEnJson = JSON.parse(categoryMenuEnJsonString);

// ********************* add category menu form json file  *********************
var newFood_key= {
    "Information":
    [
        {
            "inlineAttributeValue" : "categoryId",
            "label": "foodCategory",
        },
        {
            "inlineAttributeValue" : "nameMenuFa",
            "label": "PersianNameFood"
        },
        {
            "inlineAttributeValue" : "nameMenuEn",
            "label": "englishNameFood"
        },
        {
            "inlineAttributeValue" : "explanation",
            "label": "description"
        },
        {
            "inlineAttributeValue" : "price_rial",
            "label": "price_rial" 
        },
        {
            "inlineAttributeValue" : "price_dollar",
            "label": "price_dollar" 
        }
    ],
    
    "Information_choosePicture":
    [
        {
            "inlineAttributeValue" : "foodPicture_newFood",
            "label": "choosePictureNewFood"
        }
    ],

    "Information_submit":
    {
        "inlineAttributeValue" : "send",
        "sucsessSendValue" :"sucsessSend"
    }

}

var newFood_Fa={
    "foodCategory": "دسته بندی غذا :",
    "PersianNameFood" : "نام فارسی منو :",
    "englishNameFood": "نام انگلیسی منو :",
    "description": "توضیحات غذا :",
    "price_rial": "قیمت به ریال :",
    "price_dollar": "قیمت به دلار :",
    "choosePictureNewFood": "انتخاب تصویر منو :",
    "send": "ارسال",
    "sucsessSend":"موفق"
}

var newFood_En={
    "foodCategory": "Food Category :",
    "PersianNameFood": "Menu Persian Neme :",
    "englishNameFood": "Menu English Neme :",
    "description": "Description Food :",
    "price_rial": "price(rial) :",
    "price_dollar": "price(dollar) :",
    "choosePictureNewFood": "Choose Menu Picture :",
    "send": "send",
    "sucsessSend":"sucsess"
}

var newFoodFaJsonString = JSON.stringify(newFood_Fa);
var newFoodFaJson = JSON.parse(newFoodFaJsonString);


var newFoodEnJsonString = JSON.stringify(newFood_En);
var newFoodEnJson = JSON.parse(newFoodEnJsonString);




$( document ).ready(function() {

    changeLanguage();
})  


// ********************* get json file for bilanguage  *********************
function getAndSetTranslateLanguage(text_key , jsonEn , jsonFa){
    var ContainsKeyName = $("*["+text_key+"]");
    for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){
 
        for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
            
            if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == ""+text_key+"") {

                var keyValue = ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].value;

                var languageValu = window.localStorage.getItem("lang");
                var translatedValueNav = changeLanguageTitle (languageValu, keyValue,jsonFa ,jsonEn)
                 ContainsKeyName[elementContainKeyName].innerHTML = translatedValueNav;
            }
        }
    }
 }

//  translate by value language
 function changeLanguageTitle (languageValu, chooseTextKey,jsonNameFa ,jsonNameEn){
    if(languageValu == "En"){
        changeFont("En");
       return(jsonNameEn[chooseTextKey]);
    }
    else if(languageValu == "Fa"){
        changeFont("Fa");
        return(jsonNameFa[chooseTextKey]);
    }
}
function changeFont(language){
    if (language=="En"){
        $("body").css("font-family" , "Nunito");
    }
    else if(language=="Fa"){
        $("body").css("font-family" , "iransans");
    }
}

// ********************* main function ffor change language on html onchange *********************
 function changeLanguage()
 {
     var getLang = $("#language").val();
     window.localStorage.setItem("lang" ,getLang );
     getAndSetTranslateLanguage("text_key_horizontal_navigation" , horizontalNavEnJson , horizontalNavFaJson);
     getAndSetTranslateLanguage("text_key_vertical_navigation" , navigationBarEnJson , navigationBarFaJson);
     getAndSetTranslateLanguage("text_key_adduser" , addUserEnJson , addUserFaJson);
     getAndSetTranslateLanguage("text_key_category_menu" , categoryMenuEnJson , categoryMenuFaJson);
     getAndSetTranslateLanguage("text_key_food" , newFoodEnJson , newFoodFaJson);
 
 }