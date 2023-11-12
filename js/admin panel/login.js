
// ********************* json file  *********************
var login_key= {
    "image": "../../img/admin panel/logo/logo.jpg",
    "brand" : "brandName",
    "userName":"usernamePlaceHolder",
    "pasword": "paswordPlaceHolder",
    "remmemberMe": "remmemberMe",
    "loginBtn": "login",
    "forgetPass": "forgetPass"
 }
 
 var login_Fa={
     "brandName": " کافه اپیکور",
     "usernamePlaceHolder": "نام کاربری",
     "paswordPlaceHolder": "رمز",
     "remmemberMe": "مرا بخاطر بسپار",
     "login":"وارد شدن",
     "forgetPass" : "رمز را فراموش کردی ؟"
 }
 
 var login_En={
     "brandName": "Epicor Cafe",
     "usernamePlaceHolder": "User name",
     "paswordPlaceHolder": "Password",
     "remmemberMe": "Remmember me",
     "login": "Login",
     "forgetPass":"Forget password?"
 }
 
 var loginFaJsonString = JSON.stringify(login_Fa);
 var loginFaJson = JSON.parse(loginFaJsonString);
 
 var loginEnJsonString = JSON.stringify(login_En);
 var loginEnJson = JSON.parse(loginEnJsonString);
 
 
 $( document ).ready(function() {
 
     createLogin();
     
 
     getAndSetTranslateLanguageNavAdminPanel();
 
 })  
 
// ********************* create login page  ********************* 
 function createLogin(){
     const template = document.createElement('template');
 
     $("template").html(JqueryLogin())
 
     var login = document.getElementById("login");
     login.append(template.content);
 }
 
 function JqueryLogin(){
    var loginId = $("#login");
    
    var mainDivLogin = $("<div>").addClass("wrapperLogin");
    loginId.append(mainDivLogin);

     // create logo 
    var logoLogin = $("<div>").addClass("logo");
    mainDivLogin.append(logoLogin);
    var imageLogo = $("<img>").attr("src" , login_key.image).attr("alt" , login_key.brand);
    logoLogin.append(imageLogo);

     // create brand name 
    var brandName = $("<div>").addClass("text-center").addClass("mt-4").addClass("name").attr("text_key" , login_key.brand).html(login_key.brand);
    mainDivLogin.append(brandName);

     // create form 
    var formLogin = $("<form>").addClass("p-3").addClass("mt-3");
    mainDivLogin.append(formLogin);

     // create username field 
    var usernameField = $("<div>").addClass("form-field").addClass("d-flex").addClass("align-items-center");
    formLogin.append(usernameField);
    var usernameShape = $("<span>").addClass("far").addClass("fa-user");
    usernameField.append(usernameShape);
    var usernameInput = $("<input>").attr("type" , "text").attr("name" , "userName").attr("id" , "userName").attr("text_key" , login_key.userName).attr("placeholder" , "User name");
    usernameField.append(usernameInput);

     // create password field 
    var passwordField = $("<div>").addClass("form-field").addClass("d-flex").addClass("align-items-center");
    formLogin.append(passwordField);
    var passwordShape = $("<span>").addClass("fas").addClass("fa-key");
    passwordField.append(passwordShape);
    var passwordInput = $("<input>").attr("type" , "password").attr("name" , "password").attr("id" , "pwd").attr("text_key" , login_key.pasword).attr("placeholder" , "Password");
    passwordField.append(passwordInput);

    var remembermeField = $("<div>").attr("id" , "remember").addClass("checkbox");
    formLogin.append(remembermeField);
    var rememberInput = $("<input>").attr("type" , "checkbox").attr("value" , "remember-me").attr("id" , login_key.remmemberMe);
    remembermeField.append(rememberInput);
    var labelRemember = $("<label>").attr("text_key" , login_key.remmemberMe).attr("for" , login_key.remmemberMe).html(login_key.remmemberMe);
    remembermeField.append(labelRemember);
   


    var buttonLogin = $("<button>").addClass("btn").addClass("mt-3").attr("text_key" , login_key.loginBtn).html(login_key.loginBtn);
    formLogin.append(buttonLogin);

    var forgetPass = $("<div>").addClass("text-center").addClass("fs-6");
    mainDivLogin.append(forgetPass);
    var forgetPassLink = $("<a>").attr("href" , "#").attr("text_key" , login_key.forgetPass).html(login_key.forgetPass);
    forgetPass.append(forgetPassLink);

 }
 
// ********************* change language  *********************

 function getAndSetTranslateLanguageNavAdminPanel(){
    var ContainsKeyName = $("*[text_key]");
    for(elementContainKeyName=0 ; elementContainKeyName<ContainsKeyName.length ; elementContainKeyName++){

        for (let SpecificَAttrName = 0; SpecificَAttrName <ContainsKeyName[elementContainKeyName].attributes.length ; SpecificَAttrName++) {
            
            if (ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].name == "text_key") {

                var keyValue = ContainsKeyName[elementContainKeyName].attributes[SpecificَAttrName].value;
                var translatedValueNav;
                if(window.localStorage.getItem("language") == "En"){
                    translatedValueNav = loginEnJson[keyValue];
                }
                else{
                    translatedValueNav = loginFaJson[keyValue];
                }

                // if("[placeholder]"==true){
                //     console.log("asma")
                // }
                // else{
                    ContainsKeyName[elementContainKeyName].innerHTML = translatedValueNav;
                // }
            }
        }
    }
}

 function changeLanguageNavAdminPanel()
 {
     var getLangAdmin = $("#languageAdmin").val();
     var setValueLang = window.localStorage.setItem("language" ,getLangAdmin );
     getAndSetTranslateLanguageNavAdminPanel();
 }
 
 