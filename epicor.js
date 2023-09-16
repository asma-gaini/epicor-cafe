// ********************* global var *********************
var mainBtnClass = 'breakfast_contant_info_price_btn';
var pay = 0;


$(document).ready(function(){
});

// ********************* main button for increment or decrement order *********************
function AddToBreakfast(customAttr)
{
	var myHtmlTag = $("button." +mainBtnClass+"[menuID='"+customAttr+"']");
	myHtmlTag.hide();
    var span = "menuID = '" + myHtmlTag.attr("menuID") + "'";
	var menuIDContent = myHtmlTag.attr("menuID");
	var increament_onclick = "onclick=Increament('span','"+menuIDContent+"')";
	var decreament_onclick = "onclick=Decreament('span','"+menuIDContent+"')";
    var section_count = $('<div class="Purchase-count" menuID="'+menuIDContent+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag.after(section_count);

	primaryPrice(customAttr);
}

// ********************* Click the main button at the same time *********************
function primaryPrice(customAttr){
	var price = $("h4.price"+"[menuID='"+customAttr+"']");
	var price_info = parseInt(price.html());
	console.log("price = "+price_info);
	pay += price_info;
	console.log("pay = "+pay);
	$(".pay_counter").html(" "+pay + "/000 ");
}

// ********************* increment price *********************
function IncrementPrice(customAttr){
	price = $("h4.price"+"[menuID='"+customAttr+"']");
	price_info = parseInt(price.html());
	pay += price_info;
	$(".pay_counter").html(" "+pay + "/000 ");
}

// ********************* decrement price *********************
function DecrementPrice(customAttr){
	price = $("h4.price"+"[menuID='"+customAttr+"']");
	price_info = parseInt(price.html());
	pay -= price_info;
	$(".pay_counter").html(" "+pay + "/000 ");
}

// ********************* increment order button *********************
function Increament(customClass,customAttr)
{
	var increament_counter = $("span."+customClass+"[menuID='"+customAttr+ "']");
	var counter = increament_counter.html();
	counter++;
	increament_counter.html(" "+counter+" ");
	
	IncrementPrice(customAttr);
}

// ********************* decrement order button *********************
function Decreament(customClass,customAttr)
{
	var decreament_counter = $("span."+customClass+"[menuID='"+customAttr+ "']");
	var counter = decreament_counter.html();
	counter--;
	
	if(counter < 1)
	{
		var parentDiv = $("div.Purchase-count[menuID='"+customAttr+ "']");
		parentDiv.hide();
		var mainButton = $("button."+mainBtnClass+"[menuID='"+customAttr+"']");
		mainButton.show();
	}
	
	decreament_counter.html(" "+counter+" ");

	DecrementPrice(customAttr);
}


