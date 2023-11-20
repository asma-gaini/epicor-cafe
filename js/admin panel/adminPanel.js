
// ********************* horizontal navigation json file  *********************
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

// ********************* vertical navigation json file  *********************
var navigationBar_key= {
    "headerNav":
        {
            "berandName": "nameCoffe_verticalNavigation",
            "logoImg": "../../img/admin panel/logo/logo.jpg",
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
    "choosePictureCategoryMenu": "انتخاب تصویر منو :",
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



$( document ).ready(function() {

    changeLanguage();
})  

// ********************* json file for bilanguage horizontal navigation  *********************
function getAndSetTranslateLanguage_horizontal_navigation(){
    var ContainsKeyName = $("*[text_key_horizontal_navigation]");
    for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){
 
        for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
            
            if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "text_key_horizontal_navigation") {
 
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

// ********************* json file for bilanguage vertical navigation  *********************
function getAndSetTranslateLanguage_vertical_navigation(){
    var ContainsKeyName = $("*[text_key_vertical_navigation]");
    for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){
 
        for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
            
            if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "text_key_vertical_navigation") {
 
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

// ********************* json file for bilanguage add new user form  *********************
 function getAndSetTranslateLanguage_addUser_form(){
    var ContainsKeyName = $("*[text_key_adduser]");
    for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){
 
        for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
            
            if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "text_key_adduser") {
 
                var keyValue = ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].value;
                var translatedValueNav;
                if(window.localStorage.getItem("lang") == "En"){
                    translatedValueNav = addUserEnJson[keyValue];
                }
                else{
                    translatedValueNav = addUserFaJson[keyValue];
                }
 
                 ContainsKeyName[elementContainKeyName].innerHTML = translatedValueNav;
            }
        }
    }
 }

 // ********************* json file for bilanguage add new category menu form  *********************
 function getAndSetTranslateLanguage_addCategoryMenu_form(){
    var ContainsKeyName = $("*[text_key]");
    for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){
 
        for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
            
            if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "text_key") {
 
                var keyValue = ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].value;
                var translatedValueNav;
                if(window.localStorage.getItem("lang") == "En"){

                    translatedValueNav = categoryMenuEnJson[keyValue];
                }
                else{

                    translatedValueNav = categoryMenuFaJson[keyValue];
                }
 
                 ContainsKeyName[elementContainKeyName].innerHTML = translatedValueNav;
            }
        }
    }
 }
// ********************* main function ffor change language on html onchange *********************
 function changeLanguage()
 {
     var getLang = $("#language").val();
     var setValueLang = window.localStorage.setItem("lang" ,getLang );
     getAndSetTranslateLanguage_horizontal_navigation();
     getAndSetTranslateLanguage_vertical_navigation();
     getAndSetTranslateLanguage_addUser_form();
     getAndSetTranslateLanguage_addCategoryMenu_form();
 }