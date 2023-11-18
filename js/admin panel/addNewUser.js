var addUser_key= {
    "Information":
    [
        {
            "inlineAttributeValue" : "email_User",
            "label": "email",
        },
        {
            "inlineAttributeValue" : "passWord_user",
            "label": "password"
        },
        {
            "inlineAttributeValue" : "nikname_user",
            "label": "nikName"
        }
    ],
    
    "Information_submit":
    {
        "inlineAttributeValue" : "send",
        "sucsessSendValue" :"sucsessSend"
    }

}

var addUser_Fa={
    "email": "ایمیل :",
    "password" : "رمز :",
    "nikName": "نام مستعار :",
    "send": "ارسال",
    "sucsessSend":"موفق"
}

var addUser_En={
    "email": "Email :",
    "password": "Password :",
    "nikName": "Nikname :",
    "send": "send",
    "sucsessSend":"sucsess"
}

var addUserFaJsonString = JSON.stringify(addUser_Fa);
var addUserFaJson = JSON.parse(addUserFaJsonString);


var addUserEnJsonString = JSON.stringify(addUser_En);
var addUserEnJson = JSON.parse(addUserEnJsonString);


$( document ).ready(function() {

    createAddNewUserTemplate();


    getAndSetTranslateLanguage();
    changeDirection();
})  


function createAddNewUserTemplate(){
    const template = document.createElement('template');

    $("template").html(createAddNewUser())

    var navigationBar = document.getElementById("addUserForm");
    navigationBar.append(template.content);
}

function createAddNewUser(){
    var addUserFormId = $("#addUserForm");
    
    var mainDiv = $("<div>").addClass("addUserForm");
    addUserFormId.append(mainDiv);

    var formAddUser = $("<form>");
    mainDiv.append(formAddUser);

    for (let i = 0; i < addUser_key.Information.length; i++) {
       
        var labelValue = addUser_key.Information[i].label;
        var inlineAttribute = addUser_key.Information[i].inlineAttributeValue;
        createAddUserInformation(formAddUser , labelValue , inlineAttribute );
    }
    AddTypeValue();

    var divContainSubmitButton = $("<div>").addClass("sendButton_addUser")
    formAddUser.append(divContainSubmitButton)
    var inputSubmit = $("<input>").addClass("sendAddUserForm").attr("type" , "submit").attr("value" , addUser_key.Information_submit.inlineAttributeValue)
    .attr("text_key" , addUser_key.Information_submit.inlineAttributeValue)
    .attr("onclick" , "sendAlert()");
    divContainSubmitButton.append(inputSubmit)
}

function createAddUserInformation(mainForm , labelValue , inlineAttribute ){
    var rowOfForm = $("<div>").addClass("row_addUser");
    mainForm.append(rowOfForm);

    var divContainLabel = $("<div>").addClass("labelStyle_addUser");
    rowOfForm.append(divContainLabel);
    var label = $("<label>").attr("for" , inlineAttribute).attr("text_key" , labelValue).html(labelValue);
    divContainLabel.append(label);
    var nextLine = $("<br>");
    divContainLabel.append(nextLine);

    var divContainInput = $("<div>").addClass("inputStyle_addUser");
    rowOfForm.append(divContainInput);
    var input = $("<input>").attr("type" , labelValue).attr("id" , inlineAttribute).attr("name" , inlineAttribute);
    divContainInput.append(input)
    divContainInput.append(nextLine);
}

function AddTypeValue(){
    $("input[name='nikname_user']").attr("type" , "text");
}


function changeDirection(){
    var valueLanguage = $("#language").val();
    $("label").removeClass("Direction-rtl");
    $("label").removeClass("Direction-ltr");
    if(valueLanguage == "En"){
        $("label").css("direction","ltr");
        $(".labelStyle_addUser").css("margin-left","-30px");
        
    }
    else{
        $("label").css("direction","rtl");
        $(".labelStyle_addUser").css("margin-left","90px");
        
    }
}
function sendAlert(){
    $(".sendAddUserForm").attr("value" , addUser_key.Information_submit.sucsessSendValue);
}



function getAndSetTranslateLanguage(){
    var ContainsKeyName = $("*[text_key]");
    for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){

        for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
            
            if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "text_key") {

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

function changeLanguage()
{
    var getLangAdmin = $("#language").val();
    var setValueLang = window.localStorage.setItem("lang" ,getLangAdmin );
    getAndSetTranslateLanguage();
    changeDirection();
}

