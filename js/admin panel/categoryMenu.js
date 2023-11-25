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

    createCategoryMenuTemplate();

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
       
        var labelValue = categoryMenu_key.Information[i].label;
        var inlineAttribute = categoryMenu_key.Information[i].inlineAttributeValue;
        createCategoryMenuInformation(formCategoryMenu , labelValue , inlineAttribute );
    }

    for (let j = 0; j < categoryMenu_key.Information_choosePicture.length; j++) {

        var labelValuePicture = categoryMenu_key.Information_choosePicture[j].label;
        var inlineAttributePicture = categoryMenu_key.Information_choosePicture[j].inlineAttributeValue;
        createChoosePictureButton(formCategoryMenu , labelValuePicture , inlineAttributePicture)
    }


    var divContainSubmitButton = $("<div>").addClass("sendButton_category_menu")
    formCategoryMenu.append(divContainSubmitButton)
    var inputSubmit = $("<input>").addClass("sendCategoryMenuForm").attr("type" , "submit").attr("value" , categoryMenu_key.Information_submit.inlineAttributeValue)
    .attr("text_key_category_menu" , categoryMenu_key.Information_submit.inlineAttributeValue)
    .attr("onclick" , "sendAlert()");
    divContainSubmitButton.append(inputSubmit)


}

function createCategoryMenuInformation(mainForm , labelValue , inlineAttribute ){
    var rowOfForm = $("<div>").addClass("row_categoryMenu");
    mainForm.append(rowOfForm);

    var divContainLabel = $("<div>").addClass("labelStyle_categoryMenu");
    rowOfForm.append(divContainLabel);
    var label = $("<label>").attr("for" , inlineAttribute).attr("text_key_category_menu" , labelValue).html(labelValue);
    divContainLabel.append(label);
    var nextLine = $("<br>");
    divContainLabel.append(nextLine);

    var divContainInput = $("<div>").addClass("inputStyle_categoryMenu");
    rowOfForm.append(divContainInput);
    var input = $("<input>").attr("type" , "text").attr("id" , inlineAttribute).attr("name" , inlineAttribute);
    divContainInput.append(input)
    divContainInput.append(nextLine);
}

function createChoosePictureButton(mainForm , labelValuePicture , inlineAttributePicture){
    var rowOfForm = $("<div>").addClass("row_categoryMenu");
    mainForm.append(rowOfForm);

        var divContainLabel = $("<div>").addClass("chosePictureLabel_categoryMenu");
        rowOfForm.append(divContainLabel);
        var label = $("<label>").attr("for" , inlineAttributePicture).attr("text_key_category_menu" , labelValuePicture).html(labelValuePicture);
        divContainLabel.append(label);
        var nextLine = $("<br>");
        // divContainLabel.append(nextLine);

        var divContainInput = $("<div>").addClass("chosePictureInput_categoryMenu");
        rowOfForm.append(divContainInput);
        var input = $("<input>").attr("type" , "file").attr("id" , inlineAttributePicture)
        .css("visibility" , "hidden").attr("name" , inlineAttributePicture);
        divContainInput.append(input)
        divContainInput.append(nextLine);
        var divImageName = $("<div>");
        divContainLabel.append(divImageName);

        var displayChooseFile = $("<p>").addClass("picture");
        divImageName.append(displayChooseFile);
        
        $("#"+inlineAttributePicture+"").change(function() {
            filename = this.files[0].name;
            $("p.picture").html(filename);
            console.log(filename);
        });
}


function changeDirection(){
    var valueLanguage = $("#language").val();
    $("label").removeClass("Direction-rtl");
    $("label").removeClass("Direction-ltr");
   
    if(valueLanguage == "En"){
        $("label").css("direction","ltr");
        $(".labelStyle_categoryMenu").css("margin-left","80px");
        $(".labelStyle_categoryMenu").css("text-align","left");
    }
    else{
        $("label").css("direction","rtl");
        $(".labelStyle_categoryMenu").css("margin-right","80px");
        $(".labelStyle_categoryMenu").css("text-align","right");
    }
}


function sendAlert(){
    var valueLanguage = $("#language").val();
    if(valueLanguage == "En"){
        alert("sending this form is: "+categoryMenu_En.sucsessSend);
    }
    else if(valueLanguage == "Fa"){
        alert("ارسال فرم شما: "+categoryMenu_Fa.sucsessSend);
    }
}
