
var receipt_key= {
    "InformationBrand":
        {
            "recieptBerandName": "nameCafe_receipt",
            "recieptLogoImg": "../../img/general image/logo.jpg",
            "recieptAddress": "recieptAddress",
            "recieptPhone": "recieptPhone"
        },

        "InformationReceipt":
        [
            {
                "receiptNumber":"receiptNumber",
                "resiptDate":"resiptDate",
                "receiptTime":"receiptTime"
            }
        ],

        "InformationCustomer":
        [
            {
              "headerCustomerText":"receiptHeaderCustomer"
            },
            {
              "receiptCustomerName":"receiptCustomerName",
              "receiptCustomerPhone":"receiptCustomerPhone"
            }
        ],

        "InformationTable":
        [
            {
                "PurchaseItems":"receiptListOfItems",
                "numberOfProducts":"receiptQuantity",
                "UnitPrice":"receiptUnitCost",
                "TotalPrice":"receiptAmount"
            }
        ]
  }
  
  var receipt_Fa={
     "nameCafe_receipt": " کافه اپیکور",
     "recieptAddress": "آدرس: انتهای اشرفی، سیمون بولیوار، خیابان مرادآباد",
     "recieptPhone":"تلفن:02186128863",
     "receiptNumber":"شماره رسید:",
     "resiptDate": "تاریخ:",
     "receiptTime":"زمان:",
     "receiptHeaderCustomer" : ":اطلاعات مشتری",
     "receiptCustomerName": ":نام",
     "receiptCustomerPhone": ":تلفن",
     "receiptListOfItems": "اقلام سفارش",
     "receiptQuantity": "تعداد",
     "receiptUnitCost": " فی قیمت",
     "TotalPrice": "قیمت کل"
  }
  
  var receipt_En={
     "nameCafe_receipt": "Epicor Cafe",
     "recieptAddress": "address : End of Ashrafi, Simon Bolivar, Moradabad St",
     "recieptPhone":"phone:02186128863",
     "receiptNumber":"Receipt No:",
     "resiptDate": "Date:",
     "receiptTime": "Time:",
     "receiptHeaderCustomer":"customer details:",
     "receiptCustomerName": "name:",
     "receiptCustomerPhone": "phone:",
     "receiptListOfItems": "List Of Items",
     "receiptQuantity": "Quantity",
     "receiptUnitCost": "Unit Cost",
     "TotalPrice": "Amount",
  }
  
  var receiptFaJsonString = JSON.stringify(receipt_Fa);
  var receiptFaJson = JSON.parse(receiptFaJsonString);
  
  var receiptEnJsonString = JSON.stringify(receipt_En);
  var receiptEnJson = JSON.parse(receiptEnJsonString);
  
  
$(document).ready(function(){
    createReceiptTemplate();
    setPersianDate();
    setTime();
  });
  
  // ********************* create login page  ********************* 
  function createReceiptTemplate(){
    const template = document.createElement('template');
  
    $("template").html(createReceipt())
  
    var HorizontalNavigation = document.getElementById("receipt");
    HorizontalNavigation.append(template.content);
  }
  
  function createReceipt(){
    var receiptId = $("#receipt");
    var mainReceiptDiv = $("<div>").addClass("receipt");
    receiptId.append(mainReceiptDiv);
    createReceiptHeader(mainReceiptDiv);
    createReceiptDetails(mainReceiptDiv);
    createReceiptCustomerDetails(mainReceiptDiv);
    createReceiptTable(mainReceiptDiv);
  }

  function createReceiptHeader(mainReceiptDiv){
    var receiptHeaderDiv = $("<div>").addClass("receiptHeader");
    mainReceiptDiv.append(receiptHeaderDiv);
    var berandName = $("<h2>").addClass("brandNameReceipt").attr("text_key_receipt",receipt_key.InformationBrand.recieptBerandName).html(receipt_key.InformationBrand.recieptBerandName);
    receiptHeaderDiv.append(berandName);
    var imageLogo = $("<img>").addClass("receipLogo").attr("src" , receipt_key.InformationBrand.recieptLogoImg).attr("alt",receipt_key.InformationBrand.recieptBerandName);
    receiptHeaderDiv.append(imageLogo);
    var epicorAddress = $("<p>").addClass("addressReceipt").attr("text_key_receipt",receipt_key.InformationBrand.recieptAddress).html("address : End of Ashrafi, Simon Bolivar, Moradabad St");
    receiptHeaderDiv.append(epicorAddress);
    var epicorPhone = $("<p>").addClass("telephoneReceipt").attr("text_key_receipt",receipt_key.InformationBrand.recieptPhone).html("phone:02186128863");
    receiptHeaderDiv.append(epicorPhone);
  }

  function createReceiptDetails(mainReceiptDiv){
    var receiptDetailDiv = $("<div>").addClass("receiptDetails");
    mainReceiptDiv.append(receiptDetailDiv);
    var receiptNumber = $("<p>").addClass("numberReceipt").attr("text_key_receipt",receipt_key.InformationReceipt.receiptNumber).html("Receipt No: ");
    receiptDetailDiv.append(receiptNumber);
    var receiptDate = $("<p>").addClass("dateReceipt").attr("text_key_receipt",receipt_key.InformationReceipt.receiptDate).html("Date: ");
    receiptDetailDiv.append(receiptDate);
    var receiptTime = $("<p>").addClass("timeReceipt").attr("text_key_receipt",receipt_key.InformationReceipt.receiptTime).html("Time: ");
    receiptDetailDiv.append(receiptTime);
  }

  function createReceiptCustomerDetails(mainReceiptDiv){
    var receiptHeaderCustomer = $("<h4>").addClass("headerCustomerDetails").attr("text_key_receipt",receipt_key.InformationCustomer.receiptHeaderCustomer).html("customer details:");
    mainReceiptDiv.append(receiptHeaderCustomer);
    var containCustomerDetail = $("<div>").addClass("receiptCustomerDetails");
    mainReceiptDiv.append(containCustomerDetail);
    var customerName = $("<p>").addClass("customerName").attr("text_key_receipt",receipt_key.InformationCustomer.receiptCustomerName).html("name: asma gaini");
    containCustomerDetail.append(customerName);
    var customerPhone = $("<p>").addClass("customerPhone").attr("text_key_receipt",receipt_key.InformationCustomer.receiptCustomerPhone).html("phone: 09333404259");
    containCustomerDetail.append(customerPhone);
  }

  function createReceiptTable(mainReceiptDiv){
    var receiptTableDiv = $("<div>").addClass("receiptTable");
    mainReceiptDiv.append(receiptTableDiv);
    var divContainTable = $("<div>").css("overflow-x","auto");
    receiptTableDiv.append(divContainTable);
    var table = $("<table>");
    divContainTable.append(table);
    
  }

function setTime(){
    var date = new Date();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    $(".timeReceipt").html("Time: "+current_time);
}

function setPersianDate(){
    $(".dateReceipt").text("Date: "+moment().locale('fa').format('YYYY/M/D'));
}