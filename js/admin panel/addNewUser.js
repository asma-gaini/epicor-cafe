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


$( document ).ready(function() {

    createAddNewUserTemplate();

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
    var inputSubmit = $("<input>").addClass("sendAddUserForm").attr("type" , "submit").attr("value" , addUser_En.send_addUser)
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
        $(".labelStyle_addUser").css("margin-left","-110px");
        
    }
    else{
        $("label").css("direction","rtl");
        $(".labelStyle_addUser").css("margin-left","120px");
        
    }
}

function sendAlert(){
    var valueLanguage = $("#language").val();
    if(valueLanguage == "En"){
        alert("sending this form is: "+addUser_En.sucsessSend);
    }
    else if(valueLanguage == "Fa"){
        alert("ارسال فرم شما: "+addUser_Fa.sucsessSend);
    }
   
}


