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
        "inlineAttributeValue" : "send"
    }

}

var categoryMenu_Fa={
    "PersianNameFood" : "نام فارسی منو :",
    "englishNameFood": "نام انگلیسی منو :",
    "choosePictureCategoryMenu": "انتخاب تصویر منو :",
    "send": "ارسال"
}

var categoryMenu_En={
    "PersianNameFood": "Menu Persian Neme :",
    "englishNameFood": "Menu English Neme :",
    "choosePictureCategoryMenu": "Choose Menu Picture :",
    "send": "send"
}

var categoryMenuFaJsonString = JSON.stringify(categoryMenu_Fa);
var categoryMenuFaJson = JSON.parse(categoryMenuFaJsonString);


var categoryMenuEnJsonString = JSON.stringify(categoryMenu_En);
var categoryMenuEnJson = JSON.parse(categoryMenuEnJsonString);


$( document ).ready(function() {

    createCategoryMenuTemplate();


    getAndSetTranslateLanguage();
    changeDirection();
})  


function createCategoryMenuTemplate(){
    const template = document.createElement('template');

    $("template").html(createCategoryMenu())

    var navigationBar = document.getElementById("categoryMenuForm");
    navigationBar.append(template.content);
}

function createCategoryMenu(){
    var categoryMenuFormId = $("#categoryMenuForm");
    
    var mainDiv = $("<div>").addClass("categoryMenuForm");
    categoryMenuFormId.append(mainDiv);

    var formCategoryMenu = $("<form>");
    mainDiv.append(formCategoryMenu);

    for (let i = 0; i < categoryMenu_key.Information.length; i++) {
       
        var rowOfForm = $("<div>").addClass("row_categoryMenu");
        formCategoryMenu.append(rowOfForm);

        var divContainLabel = $("<div>").addClass("labelStyle_categoryMenu");
        rowOfForm.append(divContainLabel);
        var label = $("<label>").attr("for" , categoryMenu_key.Information[i].inlineAttributeValue).attr("text_key" , categoryMenu_key.Information[i].label).html(categoryMenu_key.Information[i].label);
        divContainLabel.append(label);
        var nextLine = $("<br>");
        divContainLabel.append(nextLine);

        var divContainInput = $("<div>").addClass("inputStyle_categoryMenu");
        rowOfForm.append(divContainInput);
        var input = $("<input>").attr("type" , "text").attr("id" , categoryMenu_key.Information[i].inlineAttributeValue).attr("name" , categoryMenu_key.Information[i].inlineAttributeValue);
        divContainInput.append(input)
        divContainInput.append(nextLine);
    }

    for (let j = 0; j < categoryMenu_key.Information_choosePicture.length; j++) {

        var rowOfForm = $("<div>").addClass("row_categoryMenu");
        formCategoryMenu.append(rowOfForm);

        var divContainLabel = $("<div>").addClass("chosePictureLabel_categoryMenu");
        rowOfForm.append(divContainLabel);
        var label = $("<label>").attr("for" , categoryMenu_key.Information_choosePicture[j].inlineAttributeValue).attr("text_key" , categoryMenu_key.Information_choosePicture[j].label).html(categoryMenu_key.Information_choosePicture[j].label);
        divContainLabel.append(label);
        var nextLine = $("<br>");
        divContainLabel.append(nextLine);

        var divContainInput = $("<div>").addClass("chosePictureInput_categoryMenu");
        rowOfForm.append(divContainInput);
        var input = $("<input>").attr("type" , "file").attr("id" , categoryMenu_key.Information_choosePicture[j].inlineAttributeValue).attr("name" , categoryMenu_key.Information_choosePicture[j].inlineAttributeValue);
        divContainInput.append(input)
        divContainInput.append(nextLine);
    }


    var divContainSubmitButton = $("<div>").addClass("sendButton_category_menu")
    formCategoryMenu.append(divContainSubmitButton)
    var inputSubmit = $("<input>").attr("type" , "submit").attr("value" , categoryMenu_key.Information_submit.inlineAttributeValue).attr("text_key" , categoryMenu_key.Information_submit.inlineAttributeValue);
    divContainSubmitButton.append(inputSubmit)
}


function changeDirection(){
    var valueLanguage = $("#language").val();
    $("label").removeClass("Direction-rtl");
    $("label").removeClass("Direction-ltr");
    // $(".chosePictureLabel_categoryMenu").removeClass("Direction-rtl");
    // $(".chosePictureLabel_categoryMenu").removeClass("Direction-ltr");
    if(valueLanguage == "En"){
        $("label").css("direction","ltr");
        $(".chosePictureLabel_categoryMenu").css("margin-left","-20px");
        $(".labelStyle_categoryMenu").css("margin-left","-30px");
        
    }
    else{
        $("label").css("direction","rtl");
        $(".chosePictureLabel_categoryMenu").css("margin-left","80px");
        $(".labelStyle_categoryMenu").css("margin-left","90px");
        
    }
}

function getAndSetTranslateLanguage(){
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

function changeLanguage()
{
    var getLangAdmin = $("#language").val();
    var setValueLang = window.localStorage.setItem("lang" ,getLangAdmin );
    getAndSetTranslateLanguage();
    changeDirection();
}

