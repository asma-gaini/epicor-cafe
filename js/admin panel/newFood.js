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

    createNewFoodTemplate();

    changeDirection();
})  


function createNewFoodTemplate(){
    const template = document.createElement('template');

    $("template").html(createNewFood())

    var navigationBar = document.getElementById("newFoodForm");
    navigationBar.append(template.content);
}

function createNewFood(){
    var newFoodFormId = $("#newFoodForm");
    
    var mainDiv = $("<div>").addClass("newFoodForm");
    newFoodFormId.append(mainDiv);

    var formNewFood = $("<form>").addClass("form_newFood");
    mainDiv.append(formNewFood);

    for (let i = 0; i < newFood_key.Information.length; i++) {
       
        var labelValue = newFood_key.Information[i].label;
        var inlineAttribute = newFood_key.Information[i].inlineAttributeValue;
        createNewFoodInformation(formNewFood , labelValue , inlineAttribute );
    }
    addDescriptionClasses();

    for (let j = 0; j < newFood_key.Information_choosePicture.length; j++) {

        var labelValuePicture = newFood_key.Information_choosePicture[j].label;
        var inlineAttributePicture = newFood_key.Information_choosePicture[j].inlineAttributeValue;
        createChoosePictureButton(formNewFood , labelValuePicture , inlineAttributePicture)
    }


    var divContainSubmitButton = $("<div>").addClass("sendButton_NewFood")
    formNewFood.append(divContainSubmitButton)
    var inputSubmit = $("<input>").addClass("sendNewFoodForm").attr("type" , "submit").attr("value" , newFood_key.Information_submit.inlineAttributeValue)
    .attr("text_key_food" , newFood_key.Information_submit.inlineAttributeValue)
    .attr("onclick" , "sendAlert()");
    divContainSubmitButton.append(inputSubmit)
}

function createNewFoodInformation(mainForm , labelValue , inlineAttribute ){
    var rowOfForm = $("<div>").addClass("row_newFood");
    mainForm.append(rowOfForm);

    var divContainLabel = $("<div>").addClass("labelStyle_newFood");
    rowOfForm.append(divContainLabel);
    var label = $("<label>").attr("for" , inlineAttribute).attr("text_key_food" , labelValue).html(labelValue);
    divContainLabel.append(label);
    var nextLine = $("<br>");
    divContainLabel.append(nextLine);

    var divContainInput = $("<div>").addClass("inputStyle_newFood");
    rowOfForm.append(divContainInput);
    var input = $("<input>").attr("type" , "text").attr("id" , inlineAttribute).attr("name" , inlineAttribute);
    divContainInput.append(input)
    divContainInput.append(nextLine);
}

function createChoosePictureButton(mainForm , labelValuePicture , inlineAttributePicture){
    var rowOfForm = $("<div>").addClass("row_newFood");
    mainForm.append(rowOfForm);

        var divContainLabel = $("<div>").addClass("chosePictureLabel_newFood");
        rowOfForm.append(divContainLabel);
        var label = $("<label>").attr("for" , inlineAttributePicture).attr("text_key_food" , labelValuePicture).html(labelValuePicture);
        divContainLabel.append(label);
        var nextLine = $("<br>");
        divContainLabel.append(nextLine);

        var divContainInput = $("<div>").addClass("chosePictureInput_newFood");
        rowOfForm.append(divContainInput);
        var input = $("<input>").attr("type" , "file").attr("id" , inlineAttributePicture).attr("name" , inlineAttributePicture);
        divContainInput.append(input)
        divContainInput.append(nextLine);
}

function addDescriptionClasses(){
    var description = $("input[name='explanation']").addClass("description");
}

function changeDirection(){
    var valueLanguage = $("#language").val();
    $("label").removeClass("Direction-rtl");
    $("label").removeClass("Direction-ltr");
    // $(".chosePictureLabel_newFood").removeClass("Direction-rtl");
    // $(".chosePictureLabel_newFood").removeClass("Direction-ltr");
    if(valueLanguage == "En"){
        $("label").css("direction","ltr");
        $(".chosePictureLabel_newFood").css("margin-left","-20px");
        $(".labelStyle_newFood").css("margin-left","-30px");
        
    }
    else{
        $("label").css("direction","rtl");
        $(".chosePictureLabel_newFood").css("margin-left","80px");
        $(".labelStyle_newFood").css("margin-left","90px");
        
    }
}
function sendAlert(){
    var valueLanguage = $("#language").val();
    if(valueLanguage == "En"){
        alert("sending this form is: "+newFood_En.sucsessSend);
    }
    else if(valueLanguage == "Fa"){
        alert("ارسال فرم شما: "+newFood_Fa.sucsessSend);
    }
}

