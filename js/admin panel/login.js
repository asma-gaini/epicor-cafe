var login_key= {
    "image": "./img/admin panel/logo/61ae15e0a4b5f.jpg",
    "brand" : "brandName",
    "userName":"usernamePlaceHolder",
    "pasword": "paswordPlaceHolder",
    "remmemberMe": "remmemberMe",
    "loginBtn": "login"
 }
 
 var login_Fa={
     "brandName": " کافه اپیکور",
     "usernamePlaceHolder": "نام کاربری",
     "paswordPlaceHolder": "رمز",
     "remmemberMe": "مرا بخاطر بسپار",
     "login":"وارد شدن",
 
 }
 
 var login_En={
     "brandName": "Epicor Cafe",
     "usernamePlaceHolder": "User name",
     "paswordPlaceHolder": "Password",
     "remmemberMe": "Remmember me",
     "login": "Login",
 }
 
 var loginFaJsonString = JSON.stringify(login_Fa);
 var loginFaJson = JSON.parse(loginFaJsonString);
 
 
 var loginEnJsonString = JSON.stringify(login_En);
 var loginEnJson = JSON.parse(loginEnJsonString);
 
 
 $( document ).ready(function() {
 
     createLogin();
     
 
     // getAndSetTranslateLanguageNavAdminPanel();
 
 })  
 
 
 function createLogin(){
     const template = document.createElement('template');
 
     $("template").html(JqueryLogin())
 
     var navigationBar = document.getElementById("login");
     navigationBar.append(template.content);
 
     
 
 }
 
 function JqueryLogin(){
    var loginId = $("#login");
    
    var mainDivLogin = $("<div>").addClass("wrapper");
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
    var usernameInput = $("<input>").attr("type" , "text").attr("name" , "userName").attr("id" , "userName").attr("text_key" , login_key.userName).attr("placeholder" , login_key.userName);
    usernameField.append(usernameInput);

     // create password field 
    var passwordField = $("<div>").addClass("form-field").addClass("d-flex").addClass("align-items-center");
    formLogin.append(passwordField);
    var passwordShape = $("<span>").addClass("fas").addClass("fa-key");
    passwordField.append(passwordShape);
    var passwordInput = $("<input>").attr("type" , "password").attr("name" , "password").attr("id" , "pwd").attr("text_key" , login_key.pasword).attr("placeholder" , login_key.pasword);
    passwordField.append(passwordInput);

    var remembermeField = $("<div>").attr("id" , "remember").addClass("checkbox");
    formLogin.append(remembermeField);
    var labelRemember = $("<label>");
    remembermeField.append(labelRemember);
    var rememberInput = $("<input>").attr("type" , "checkbox").attr("value" , "remember-me").attr("text_key" , login_key.remmemberMe).html(login_key.remmemberMe);
    labelRemember.append(rememberInput);
    // var p = $("<p>").html("asma");
    // labelRemember.append(p);


    var buttonLogin = $("<button>").addClass("btn").addClass("mt-3").attr("text_key" , login_key.loginBtn).html(login_key.loginBtn);
    formLogin.append(buttonLogin);

    var forgetPass = $("<div>").addClass("text-center").addClass("fs-6");
    mainDivLogin.append(forgetPass);
    var forgetPassLink = $("<a>").attr("href" , "#").html("Forget password?");
    forgetPass.append(forgetPassLink);

 }
 
 function changeLanguageNavAdminPanel()
 {
     var getLangAdmin = $("#languageAdmin").val();
     var setValueLang = window.localStorage.setItem("language" ,getLangAdmin );
     getAndSetTranslateLanguageNavAdminPanel();
 }
 
 