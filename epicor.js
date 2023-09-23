// ********************* global var *********************
var linkClass = 'menu-bar_section';
var mainBtnClass = 'breakfast_contant_info_price_btn';
var mainBtnClass2 = 'minabar_contant_info_price_btn';
var mainBtnClass3 = 'espressobar_contant_info_price_btn';
var mainBtnClass4 = 'icecoffee_contant_info_price_btn';
var mainBtnClass5 = 'coffeebar_contant_info_price_btn';
var mainBtnClass6 = 'hotdrinks_contant_info_price_btn';
var mainBtnClass7 = 'drinkchoise_contant_info_price_btn';
var mainBtnClass8 = 'naturaljuise_contant_info_price_btn';
var mainBtnClass9 = 'smoothiebulls_contant_info_price_btn';
var mainBtnClass10 = 'milkshake_contant_info_price_btn';
var mainBtnClass11 = 'cake_contant_info_price_btn';
var mainBtnClass12 = 'appetizers_contant_info_price_btn';
var mainBtnClass13 = 'fries_contant_info_price_btn';
var mainBtnClass14 = 'sandwiches_contant_info_price_btn';
var mainBtnClass15 = 'pasta_contant_info_price_btn';
var mainBtnClass16 = 'grill_contant_info_price_btn';
var mainBtnClass17 = 'accompanying_contant_info_price_btn';
var mainBtnClass18 = 'sauces_contant_info_price_btn';
var mainBtnClass19 = 'pizza_contant_info_price_btn';
var mainBtnClass20 = 'persian_contant_info_price_btn';


var pay = 0;


$(document).ready(function(){
	$( "div.slider"+"[data-info ='1']" ).siblings("div").hide();
	$( "button"+"[data-info ='1']" ).addClass("menu-bar_section_click");

});


function linked(dataInfo){
	$("button.menu-bar_section").removeClass("menu-bar_section_click");
	$("button.menu-bar_section"+"[data-info ='"+dataInfo+"']").addClass("menu-bar_section_click");
	
	var menuBarSlide = $( "div.slider"+"[data-info ='"+dataInfo+"']" );
	menuBarSlide.show().siblings("div").fadeOut(300);
}


// ---------------------------------------------------------------------------> breakfast item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> breakfast *********************
function AddToBreakfast(customAttr)
{
	// var myHtmlTag = sender.getAttribute('menuID');
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
// ********************* Click the main button at the same time price ----> breakfast *********************
function primaryPrice(customAttr){
	var price = $("h4.price"+"[menuID='"+customAttr+"']");
	var price_info = parseInt(price.html());
	pay += price_info;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> breakfast *********************
function IncrementPrice(customAttr){
	price = $("h4.price"+"[menuID='"+customAttr+"']");
	price_info = parseInt(price.html());
	pay += price_info;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> breakfast *********************
function DecrementPrice(customAttr){
	price = $("h4.price"+"[menuID='"+customAttr+"']");
	price_info = parseInt(price.html());
	pay -= price_info;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> breakfast *********************
function Increament(customClass,customAttr)
{
	var increament_counter = $("span."+customClass+"[menuID='"+customAttr+ "']");
	var counter = increament_counter.html();
	counter++;
	increament_counter.html(" "+counter+" ");
	
	IncrementPrice(customAttr);
}
// ********************* decrement order button ----> breakfast *********************
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


// ---------------------------------------------------------------------------> minabar item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> minabar *********************
function AddToMinabar(customAttr)
{
	var myHtmlTag2 = $("button." +mainBtnClass2+"[menuID2='"+customAttr+"']");
	myHtmlTag2.hide();
    var span2 = "menuID2 = '" + myHtmlTag2.attr("menuID2") + "'";
	var menuIDContent2 = myHtmlTag2.attr("menuID2");
	var increament_onclick = "onclick=Increament2('span','"+menuIDContent2+"')";
	var decreament_onclick = "onclick=Decreament2('span','"+menuIDContent2+"')";
    var section_count2 = $('<div class="Purchase-count" menuID2="'+menuIDContent2+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span2+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag2.after(section_count2);

	primaryPrice2(customAttr);
}
// ********************* Click the main button at the same time price ----> minabar *********************
function primaryPrice2(customAttr){
	var price2 = $("h4.price"+"[menuID2='"+customAttr+"']");
	var price_info2 = parseInt(price2.html());
	pay += price_info2;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> minabar *********************
function IncrementPrice2(customAttr){
	price2 = $("h4.price"+"[menuID2='"+customAttr+"']");
	price_info2 = parseInt(price2.html());
	pay += price_info2;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> minabar *********************
function DecrementPrice2(customAttr){
	price2 = $("h4.price"+"[menuID2='"+customAttr+"']");
	price_info2 = parseInt(price2.html());
	pay -= price_info2;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> minabar *********************
function Increament2(customClass,customAttr)
{
	var increament_counter2 = $("span."+customClass+"[menuID2='"+customAttr+ "']");
	var counter2 = increament_counter2.html();
	counter2++;
	increament_counter2.html(" "+counter2+" ");
	
	IncrementPrice2(customAttr);
}
// ********************* decrement order button ----> minabar *********************
function Decreament2(customClass,customAttr)
{
	var decreament_counter2 = $("span."+customClass+"[menuID2='"+customAttr+ "']");
	var counter2 = decreament_counter2.html();
	counter2--;
	
	if(counter2 < 1)
	{
		var parentDiv2 = $("div.Purchase-count[menuID2='"+customAttr+ "']");
		parentDiv2.hide();
		var mainButton2 = $("button."+mainBtnClass2+"[menuID2='"+customAttr+"']");
		mainButton2.show();
	}
	
	decreament_counter2.html(" "+counter2+" ");

	DecrementPrice2(customAttr);
}


// ---------------------------------------------------------------------------> espressobar item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> espressobar *********************
function AddToEspressobar(customAttr)
{
	var myHtmlTag3 = $("button." +mainBtnClass3+"[menuID3='"+customAttr+"']");
	myHtmlTag3.hide();
    var span3 = "menuID3 = '" + myHtmlTag3.attr("menuID3") + "'";
	var menuIDContent3 = myHtmlTag3.attr("menuID3");
	var increament_onclick = "onclick=Increament3('span','"+menuIDContent3+"')";
	var decreament_onclick = "onclick=Decreament3('span','"+menuIDContent3+"')";
    var section_count3 = $('<div class="Purchase-count" menuID3="'+menuIDContent3+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span3+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag3.after(section_count3);

	primaryPrice3(customAttr);
}
// ********************* Click the main button at the same time price ----> espressobar *********************
function primaryPrice3(customAttr){
	var price3 = $("h4.price"+"[menuID3='"+customAttr+"']");
	var price_info3 = parseInt(price3.html());
	pay += price_info3;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> espressobar *********************
function IncrementPrice3(customAttr){
	price3 = $("h4.price"+"[menuID3='"+customAttr+"']");
	price_info3 = parseInt(price3.html());
	pay += price_info3;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> espressobar *********************
function DecrementPrice3(customAttr){
	price3 = $("h4.price"+"[menuID3='"+customAttr+"']");
	price_info3 = parseInt(price3.html());
	pay -= price_info3;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> espressobar *********************
function Increament3(customClass,customAttr)
{
	var increament_counter3 = $("span."+customClass+"[menuID3='"+customAttr+ "']");
	var counter3 = increament_counter3.html();
	counter3++;
	increament_counter3.html(" "+counter3+" ");
	
	IncrementPrice3(customAttr);
}
// ********************* decrement order button ----> espressobar *********************
function Decreament3(customClass,customAttr)
{
	var decreament_counter3 = $("span."+customClass+"[menuID3='"+customAttr+ "']");
	var counter3 = decreament_counter3.html();
	counter3--;
	
	if(counter3 < 1)
	{
		var parentDiv3 = $("div.Purchase-count[menuID3='"+customAttr+ "']");
		parentDiv3.hide();
		var mainButton3 = $("button."+mainBtnClass2+"[menuID3='"+customAttr+"']");
		mainButton3.show();
	}
	
	decreament_counter3.html(" "+counter3+" ");

	DecrementPrice3(customAttr);
}


// ---------------------------------------------------------------------------> icecoffee item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> icecoffee *********************
function AddToIcecoffee(customAttr)
{
	var myHtmlTag4 = $("button." +mainBtnClass4+"[menuID4='"+customAttr+"']");
	myHtmlTag4.hide();
    var span4 = "menuID4 = '" + myHtmlTag4.attr("menuID4") + "'";
	var menuIDContent4 = myHtmlTag4.attr("menuID4");
	var increament_onclick = "onclick=Increament4('span','"+menuIDContent4+"')";
	var decreament_onclick = "onclick=Decreament4('span','"+menuIDContent4+"')";
    var section_count4 = $('<div class="Purchase-count" menuID4="'+menuIDContent4+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span4+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag4.after(section_count4);

	primaryPrice4(customAttr);
}
// ********************* Click the main button at the same time price ----> icecoffee *********************
function primaryPrice4(customAttr){
	var price4 = $("h4.price"+"[menuID4='"+customAttr+"']");
	var price_info4 = parseInt(price4.html());
	pay += price_info4;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> espressobar *********************
function IncrementPrice4(customAttr){
	price4 = $("h4.price"+"[menuID4='"+customAttr+"']");
	price_info4 = parseInt(price4.html());
	pay += price_info4;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> espressobar *********************
function DecrementPrice4(customAttr){
	price4 = $("h4.price"+"[menuID4='"+customAttr+"']");
	price_info4 = parseInt(price4.html());
	pay -= price_info4;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> icecoffee *********************
function Increament4(customClass,customAttr)
{
	var increament_counter4 = $("span."+customClass+"[menuID4='"+customAttr+ "']");
	var counter4 = increament_counter4.html();
	counter4++;
	increament_counter4.html(" "+counter4+" ");
	
	IncrementPrice4(customAttr);
}
// ********************* decrement order button ----> icecoffee *********************
function Decreament4(customClass,customAttr)
{
	var decreament_counter4 = $("span."+customClass+"[menuID4='"+customAttr+ "']");
	var counter4 = decreament_counter4.html();
	counter4--;
	
	if(counter4 < 1)
	{
		var parentDiv4 = $("div.Purchase-count[menuID4='"+customAttr+ "']");
		parentDiv4.hide();
		var mainButton4 = $("button."+mainBtnClass4+"[menuID4='"+customAttr+"']");
		mainButton4.show();
	}
	
	decreament_counter4.html(" "+counter4+" ");

	DecrementPrice4(customAttr);
}


// ---------------------------------------------------------------------------> coffeebar item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> coffeebar *********************
function AddToCoffeebar(customAttr)
{
	var myHtmlTag5 = $("button." +mainBtnClass5+"[menuID5='"+customAttr+"']");
	myHtmlTag5.hide();
    var span5 = "menuID5 = '" + myHtmlTag5.attr("menuID5") + "'";
	var menuIDContent5 = myHtmlTag5.attr("menuID5");
	var increament_onclick = "onclick=Increament5('span','"+menuIDContent5+"')";
	var decreament_onclick = "onclick=Decreament5('span','"+menuIDContent5+"')";
    var section_count5 = $('<div class="Purchase-count" menuID5="'+menuIDContent5+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span5+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag5.after(section_count5);

	primaryPrice5(customAttr);
}
// ********************* Click the main button at the same time price ----> coffeebar *********************
function primaryPrice5(customAttr){
	var price5 = $("h4.price"+"[menuID5='"+customAttr+"']");
	var price_info5 = parseInt(price5.html());
	pay += price_info5;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> coffeebar *********************
function IncrementPrice5(customAttr){
	price5 = $("h4.price"+"[menuID5='"+customAttr+"']");
	price_info5 = parseInt(price5.html());
	pay += price_info5;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> coffeebar *********************
function DecrementPrice5(customAttr){
	price5 = $("h4.price"+"[menuID5='"+customAttr+"']");
	price_info5 = parseInt(price5.html());
	pay -= price_info5;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> coffeebar *********************
function Increament5(customClass,customAttr)
{
	var increament_counter5 = $("span."+customClass+"[menuID5='"+customAttr+ "']");
	var counter5 = increament_counter5.html();
	counter5++;
	increament_counter5.html(" "+counter5+" ");
	
	IncrementPrice5(customAttr);
}
// ********************* decrement order button ----> coffeebar *********************
function Decreament5(customClass,customAttr)
{
	var decreament_counter5 = $("span."+customClass+"[menuID5='"+customAttr+ "']");
	var counter5 = decreament_counter5.html();
	counter5--;
	
	if(counter5 < 1)
	{
		var parentDiv5 = $("div.Purchase-count[menuID5='"+customAttr+ "']");
		parentDiv5.hide();
		var mainButton5 = $("button."+mainBtnClass5+"[menuID5='"+customAttr+"']");
		mainButton5.show();
	}
	
	decreament_counter5.html(" "+counter5+" ");

	DecrementPrice5(customAttr);
}


// ---------------------------------------------------------------------------> hotdrinks item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> hotdrinks *********************
function AddToHotdrinks(customAttr)
{
	var myHtmlTag6 = $("button." +mainBtnClass6+"[menuID6='"+customAttr+"']");
	myHtmlTag6.hide();
    var span6 = "menuID6 = '" + myHtmlTag6.attr("menuID6") + "'";
	var menuIDContent6 = myHtmlTag6.attr("menuID6");
	var increament_onclick = "onclick=Increament6('span','"+menuIDContent6+"')";
	var decreament_onclick = "onclick=Decreament6('span','"+menuIDContent6+"')";
    var section_count6 = $('<div class="Purchase-count" menuID6="'+menuIDContent6+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span6+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag6.after(section_count6);

	primaryPrice6(customAttr);
}
// ********************* Click the main button at the same time price ----> hotdrinks *********************
function primaryPrice6(customAttr){
	var price6 = $("h4.price"+"[menuID6='"+customAttr+"']");
	var price_info6 = parseInt(price6.html());
	pay += price_info6;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> hotdrinks *********************
function IncrementPrice6(customAttr){
	price6 = $("h4.price"+"[menuID6='"+customAttr+"']");
	price_info6 = parseInt(price6.html());
	pay += price_info6;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> hotdrinks *********************
function DecrementPrice6(customAttr){
	price6 = $("h4.price"+"[menuID6='"+customAttr+"']");
	price_info6 = parseInt(price6.html());
	pay -= price_info6;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> hotdrinks *********************
function Increament6(customClass,customAttr)
{
	var increament_counter6 = $("span."+customClass+"[menuID6='"+customAttr+ "']");
	var counter6 = increament_counter6.html();
	counter6++;
	increament_counter6.html(" "+counter6+" ");
	
	IncrementPrice6(customAttr);
}
// ********************* decrement order button ----> hotdrinks *********************
function Decreament6(customClass,customAttr)
{
	var decreament_counter6 = $("span."+customClass+"[menuID6='"+customAttr+ "']");
	var counter6 = decreament_counter6.html();
	counter6--;
	
	if(counter6 < 1)
	{
		var parentDiv6 = $("div.Purchase-count[menuID6='"+customAttr+ "']");
		parentDiv6.hide();
		var mainButton6 = $("button."+mainBtnClass6+"[menuID6='"+customAttr+"']");
		mainButton6.show();
	}
	
	decreament_counter6.html(" "+counter6+" ");

	DecrementPrice6(customAttr);
}


// ---------------------------------------------------------------------------> drinkchoise item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> drinkchoise *********************
function AddToDrinkchoise(customAttr)
{
	var myHtmlTag7 = $("button." +mainBtnClass7+"[menuID7='"+customAttr+"']");
	myHtmlTag7.hide();
    var span7 = "menuID7 = '" + myHtmlTag7.attr("menuID7") + "'";
	var menuIDContent7 = myHtmlTag7.attr("menuID7");
	var increament_onclick = "onclick=Increament7('span','"+menuIDContent7+"')";
	var decreament_onclick = "onclick=Decreament7('span','"+menuIDContent7+"')";
    var section_count7 = $('<div class="Purchase-count" menuID7="'+menuIDContent7+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span7+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag7.after(section_count7);

	primaryPrice7(customAttr);
}
// ********************* Click the main button at the same time price ----> drinkchoise *********************
function primaryPrice7(customAttr){
	var price7 = $("h4.price"+"[menuID7='"+customAttr+"']");
	var price_info7 = parseInt(price7.html());
	pay += price_info7;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> drinkchoise *********************
function IncrementPrice7(customAttr){
	price7 = $("h4.price"+"[menuID7='"+customAttr+"']");
	price_info7 = parseInt(price7.html());
	pay += price_info7;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> drinkchoise *********************
function DecrementPrice7(customAttr){
	price7 = $("h4.price"+"[menuID7='"+customAttr+"']");
	price_info7 = parseInt(price7.html());
	pay -= price_info7;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> drinkchoise *********************
function Increament7(customClass,customAttr)
{
	var increament_counter7 = $("span."+customClass+"[menuID7='"+customAttr+ "']");
	var counter7 = increament_counter7.html();
	counter7++;
	increament_counter7.html(" "+counter7+" ");
	
	IncrementPrice7(customAttr);
}
// ********************* decrement order button ----> drinkchoise *********************
function Decreament7(customClass,customAttr)
{
	var decreament_counter7 = $("span."+customClass+"[menuID7='"+customAttr+ "']");
	var counter7 = decreament_counter7.html();
	counter7--;
	
	if(counter7 < 1)
	{
		var parentDiv7 = $("div.Purchase-count[menuID7='"+customAttr+ "']");
		parentDiv7.hide();
		var mainButton7 = $("button."+mainBtnClass7+"[menuID7='"+customAttr+"']");
		mainButton7.show();
	}
	
	decreament_counter7.html(" "+counter7+" ");

	DecrementPrice7(customAttr);
}


// ---------------------------------------------------------------------------> naturaljuise item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> naturaljuise *********************
function AddToNaturaljuise(customAttr)
{
	var myHtmlTag8 = $("button." +mainBtnClass8+"[menuID8='"+customAttr+"']");
	myHtmlTag8.hide();
    var span8 = "menuID8 = '" + myHtmlTag8.attr("menuID8") + "'";
	var menuIDContent8 = myHtmlTag8.attr("menuID8");
	var increament_onclick = "onclick=Increament8('span','"+menuIDContent8+"')";
	var decreament_onclick = "onclick=Decreament8('span','"+menuIDContent8+"')";
    var section_count8 = $('<div class="Purchase-count" menuID8="'+menuIDContent8+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span8+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag8.after(section_count8);

	primaryPrice8(customAttr);
}
// ********************* Click the main button at the same time price ----> naturaljuise *********************
function primaryPrice8(customAttr){
	var price8 = $("h4.price"+"[menuID8='"+customAttr+"']");
	var price_info8 = parseInt(price8.html());
	pay += price_info8;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> naturaljuise *********************
function IncrementPrice8(customAttr){
	price8 = $("h4.price"+"[menuID8='"+customAttr+"']");
	price_info8 = parseInt(price8.html());
	pay += price_info8;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> naturaljuise *********************
function DecrementPrice8(customAttr){
	price8 = $("h4.price"+"[menuID8='"+customAttr+"']");
	price_info8 = parseInt(price8.html());
	pay -= price_info8;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> naturaljuise *********************
function Increament8(customClass,customAttr)
{
	var increament_counter8 = $("span."+customClass+"[menuID8='"+customAttr+ "']");
	var counter8 = increament_counter8.html();
	counter8++;
	increament_counter8.html(" "+counter8+" ");
	
	IncrementPrice8(customAttr);
}
// ********************* decrement order button ----> naturaljuise *********************
function Decreament8(customClass,customAttr)
{
	var decreament_counter8 = $("span."+customClass+"[menuID8='"+customAttr+ "']");
	var counter8 = decreament_counter8.html();
	counter8--;
	
	if(counter8 < 1)
	{
		var parentDiv8 = $("div.Purchase-count[menuID8='"+customAttr+ "']");
		parentDiv8.hide();
		var mainButton8 = $("button."+mainBtnClass8+"[menuID8='"+customAttr+"']");
		mainButton8.show();
	}
	
	decreament_counter8.html(" "+counter8+" ");

	DecrementPrice8(customAttr);
}


// ---------------------------------------------------------------------------> smoothiebulls item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> smoothiebulls *********************
function AddToSmoothiebulls(customAttr)
{
	var myHtmlTag9 = $("button." +mainBtnClass9+"[menuID9='"+customAttr+"']");
	myHtmlTag9.hide();
    var span9 = "menuID9 = '" + myHtmlTag9.attr("menuID9") + "'";
	var menuIDContent9 = myHtmlTag9.attr("menuID9");
	var increament_onclick = "onclick=Increament9('span','"+menuIDContent9+"')";
	var decreament_onclick = "onclick=Decreament9('span','"+menuIDContent9+"')";
    var section_count9 = $('<div class="Purchase-count" menuID9="'+menuIDContent9+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span9+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag9.after(section_count9);

	primaryPrice9(customAttr);
}
// ********************* Click the main button at the same time price ----> smoothiebulls *********************
function primaryPrice9(customAttr){
	var price9 = $("h4.price"+"[menuID9='"+customAttr+"']");
	var price_info9 = parseInt(price9.html());
	pay += price_info9;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> smoothiebulls *********************
function IncrementPrice9(customAttr){
	price9 = $("h4.price"+"[menuID9='"+customAttr+"']");
	price_info9 = parseInt(price9.html());
	pay += price_info9;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> smoothiebulls *********************
function DecrementPrice9(customAttr){
	price9 = $("h4.price"+"[menuID9='"+customAttr+"']");
	price_info9 = parseInt(price9.html());
	pay -= price_info9;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> smoothiebulls *********************
function Increament9(customClass,customAttr)
{
	var increament_counter9 = $("span."+customClass+"[menuID9='"+customAttr+ "']");
	var counter9 = increament_counter9.html();
	counter9++;
	increament_counter9.html(" "+counter9+" ");
	
	IncrementPrice9(customAttr);
}
// ********************* decrement order button ----> smoothiebulls *********************
function Decreament9(customClass,customAttr)
{
	var decreament_counter9 = $("span."+customClass+"[menuID9='"+customAttr+ "']");
	var counter9 = decreament_counter9.html();
	counter9--;
	
	if(counter9 < 1)
	{
		var parentDiv9 = $("div.Purchase-count[menuID9='"+customAttr+ "']");
		parentDiv9.hide();
		var mainButton9 = $("button."+mainBtnClass9+"[menuID9='"+customAttr+"']");
		mainButton9.show();
	}
	
	decreament_counter9.html(" "+counter9+" ");

	DecrementPrice9(customAttr);
}


// ---------------------------------------------------------------------------> milkshake item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> milkshake *********************
function AddToMilkshake(customAttr)
{
	var myHtmlTag10 = $("button." +mainBtnClass10+"[menuID10='"+customAttr+"']");
	myHtmlTag10.hide();
    var span10 = "menuID10 = '" + myHtmlTag10.attr("menuID10") + "'";
	var menuIDContent10 = myHtmlTag10.attr("menuID10");
	var increament_onclick = "onclick=Increament10('span','"+menuIDContent10+"')";
	var decreament_onclick = "onclick=Decreament10('span','"+menuIDContent10+"')";
    var section_count10 = $('<div class="Purchase-count" menuID10="'+menuIDContent10+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span10+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag10.after(section_count10);

	primaryPrice10(customAttr);
}
// ********************* Click the main button at the same time price ----> milkshake *********************
function primaryPrice10(customAttr){
	var price10 = $("h4.price"+"[menuID10='"+customAttr+"']");
	var price_info10 = parseInt(price10.html());
	pay += price_info10;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> milkshake *********************
function IncrementPrice10(customAttr){
	price10 = $("h4.price"+"[menuID10='"+customAttr+"']");
	price_info10 = parseInt(price10.html());
	pay += price_info10;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> milkshake *********************
function DecrementPrice10(customAttr){
	price10 = $("h4.price"+"[menuID10='"+customAttr+"']");
	price_info10 = parseInt(price10.html());
	pay -= price_info10;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> milkshake *********************
function Increament10(customClass,customAttr)
{
	var increament_counter10 = $("span."+customClass+"[menuID10='"+customAttr+ "']");
	var counter10 = increament_counter10.html();
	counter10++;
	increament_counter10.html(" "+counter10+" ");
	
	IncrementPrice10(customAttr);
}
// ********************* decrement order button ----> milkshake *********************
function Decreament10(customClass,customAttr)
{
	var decreament_counter10 = $("span."+customClass+"[menuID10='"+customAttr+ "']");
	var counter10 = decreament_counter10.html();
	counter10--;
	
	if(counter10 < 1)
	{
		var parentDiv10 = $("div.Purchase-count[menuID10='"+customAttr+ "']");
		parentDiv10.hide();
		var mainButton10 = $("button."+mainBtnClass10+"[menuID10='"+customAttr+"']");
		mainButton10.show();
	}
	
	decreament_counter10.html(" "+counter10+" ");

	DecrementPrice10(customAttr);
}


// ---------------------------------------------------------------------------> cake item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> cake *********************
function AddToCake(customAttr)
{
	var myHtmlTag11 = $("button." +mainBtnClass11+"[menuID11='"+customAttr+"']");
	myHtmlTag11.hide();
    var span11 = "menuID11 = '" + myHtmlTag11.attr("menuID11") + "'";
	var menuIDContent11 = myHtmlTag11.attr("menuID11");
	var increament_onclick = "onclick=Increament11('span','"+menuIDContent11+"')";
	var decreament_onclick = "onclick=Decreament11('span','"+menuIDContent11+"')";
    var section_count11 = $('<div class="Purchase-count" menuID11="'+menuIDContent11+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span11+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag11.after(section_count11);

	primaryPrice11(customAttr);
}
// ********************* Click the main button at the same time price ----> cake *********************
function primaryPrice11(customAttr){
	var price11 = $("h4.price"+"[menuID11='"+customAttr+"']");
	var price_info11 = parseInt(price11.html());
	pay += price_info11;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> cake *********************
function IncrementPrice11(customAttr){
	price11 = $("h4.price"+"[menuID11='"+customAttr+"']");
	price_info11 = parseInt(price11.html());
	pay += price_info11;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> cake *********************
function DecrementPrice11(customAttr){
	price11 = $("h4.price"+"[menuID11='"+customAttr+"']");
	price_info11 = parseInt(price11.html());
	pay -= price_info11;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> cake *********************
function Increament11(customClass,customAttr)
{
	var increament_counter11 = $("span."+customClass+"[menuID11='"+customAttr+ "']");
	var counter11 = increament_counter11.html();
	counter11++;
	increament_counter11.html(" "+counter11+" ");
	
	IncrementPrice11(customAttr);
}
// ********************* decrement order button ----> cake *********************
function Decreament11(customClass,customAttr)
{
	var decreament_counter11 = $("span."+customClass+"[menuID11='"+customAttr+ "']");
	var counter11 = decreament_counter11.html();
	counter11--;
	
	if(counter11 < 1)
	{
		var parentDiv11 = $("div.Purchase-count[menuID11='"+customAttr+ "']");
		parentDiv11.hide();
		var mainButton11 = $("button."+mainBtnClass11+"[menuID11='"+customAttr+"']");
		mainButton11.show();
	}
	
	decreament_counter11.html(" "+counter11+" ");

	DecrementPrice11(customAttr);
}


// ---------------------------------------------------------------------------> appetizers item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> appetizers *********************
function AddToAppetizers(customAttr)
{
	var myHtmlTag12 = $("button." +mainBtnClass12+"[menuID12='"+customAttr+"']");
	myHtmlTag12.hide();
    var span12 = "menuID12 = '" + myHtmlTag12.attr("menuID12") + "'";
	var menuIDContent12 = myHtmlTag12.attr("menuID12");
	var increament_onclick = "onclick=Increament12('span','"+menuIDContent12+"')";
	var decreament_onclick = "onclick=Decreament12('span','"+menuIDContent12+"')";
    var section_count12 = $('<div class="Purchase-count" menuID12="'+menuIDContent12+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span12+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag12.after(section_count12);

	primaryPrice12(customAttr);
}
// ********************* Click the main button at the same time price ----> appetizers *********************
function primaryPrice12(customAttr){
	var price12 = $("h4.price"+"[menuID12='"+customAttr+"']");
	var price_info12 = parseInt(price12.html());
	pay += price_info12;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> appetizers *********************
function IncrementPrice12(customAttr){
	price12 = $("h4.price"+"[menuID12='"+customAttr+"']");
	price_info12 = parseInt(price12.html());
	pay += price_info12;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> appetizers *********************
function DecrementPrice12(customAttr){
	price12 = $("h4.price"+"[menuID12='"+customAttr+"']");
	price_info12 = parseInt(price12.html());
	pay -= price_info12;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> appetizers *********************
function Increament12(customClass,customAttr)
{
	var increament_counter12 = $("span."+customClass+"[menuID12='"+customAttr+ "']");
	var counter12 = increament_counter12.html();
	counter12++;
	increament_counter12.html(" "+counter12+" ");
	
	IncrementPrice12(customAttr);
}
// ********************* decrement order button ----> appetizers *********************
function Decreament12(customClass,customAttr)
{
	var decreament_counter12 = $("span."+customClass+"[menuID12='"+customAttr+ "']");
	var counter12 = decreament_counter12.html();
	counter12--;
	
	if(counter12 < 1)
	{
		var parentDiv12 = $("div.Purchase-count[menuID12='"+customAttr+ "']");
		parentDiv12.hide();
		var mainButton12 = $("button."+mainBtnClass12+"[menuID12='"+customAttr+"']");
		mainButton12.show();
	}
	
	decreament_counter12.html(" "+counter12+" ");

	DecrementPrice12(customAttr);
}


// ---------------------------------------------------------------------------> fries item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> fries *********************
function AddToFries(customAttr)
{
	var myHtmlTag13 = $("button." +mainBtnClass13+"[menuID13='"+customAttr+"']");
	myHtmlTag13.hide();
    var span13 = "menuID13 = '" + myHtmlTag13.attr("menuID13") + "'";
	var menuIDContent13 = myHtmlTag13.attr("menuID13");
	var increament_onclick = "onclick=Increament13('span','"+menuIDContent13+"')";
	var decreament_onclick = "onclick=Decreament13('span','"+menuIDContent13+"')";
    var section_count13 = $('<div class="Purchase-count" menuID13="'+menuIDContent13+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span13+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag13.after(section_count13);

	primaryPrice13(customAttr);
}
// ********************* Click the main button at the same time price ----> fries *********************
function primaryPrice13(customAttr){
	var price13 = $("h4.price"+"[menuID13='"+customAttr+"']");
	var price_info13 = parseInt(price13.html());
	pay += price_info13;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> fries *********************
function IncrementPrice13(customAttr){
	price13 = $("h4.price"+"[menuID13='"+customAttr+"']");
	price_info13 = parseInt(price13.html());
	pay += price_info13;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> fries *********************
function DecrementPrice13(customAttr){
	price13 = $("h4.price"+"[menuID13='"+customAttr+"']");
	price_info13 = parseInt(price13.html());
	pay -= price_info13;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> fries *********************
function Increament13(customClass,customAttr)
{
	var increament_counter13 = $("span."+customClass+"[menuID13='"+customAttr+ "']");
	var counter13 = increament_counter13.html();
	counter13++;
	increament_counter13.html(" "+counter13+" ");
	
	IncrementPrice13(customAttr);
}
// ********************* decrement order button ----> fries *********************
function Decreament13(customClass,customAttr)
{
	var decreament_counter13 = $("span."+customClass+"[menuID13='"+customAttr+ "']");
	var counter13 = decreament_counter13.html();
	counter13--;
	
	if(counter13 < 1)
	{
		var parentDiv13 = $("div.Purchase-count[menuID13='"+customAttr+ "']");
		parentDiv13.hide();
		var mainButton13 = $("button."+mainBtnClass13+"[menuID13='"+customAttr+"']");
		mainButton13.show();
	}
	
	decreament_counter13.html(" "+counter13+" ");

	DecrementPrice13(customAttr);
}


// ---------------------------------------------------------------------------> sandwiches item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> sandwiches *********************
function AddToSandwiches(customAttr)
{
	var myHtmlTag14 = $("button." +mainBtnClass14+"[menuID14='"+customAttr+"']");
	myHtmlTag14.hide();
    var span14 = "menuID14 = '" + myHtmlTag14.attr("menuID14") + "'";
	var menuIDContent14 = myHtmlTag14.attr("menuID14");
	var increament_onclick = "onclick=Increament14('span','"+menuIDContent14+"')";
	var decreament_onclick = "onclick=Decreament14('span','"+menuIDContent14+"')";
    var section_count14 = $('<div class="Purchase-count" menuID14="'+menuIDContent14+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span14+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag14.after(section_count14);

	primaryPrice14(customAttr);
}
// ********************* Click the main button at the same time price ----> sandwiches *********************
function primaryPrice14(customAttr){
	var price14 = $("h4.price"+"[menuID14='"+customAttr+"']");
	var price_info14 = parseInt(price14.html());
	pay += price_info14;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> sandwiches *********************
function IncrementPrice14(customAttr){
	price14 = $("h4.price"+"[menuID14='"+customAttr+"']");
	price_info14 = parseInt(price14.html());
	pay += price_info14;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> sandwiches *********************
function DecrementPrice14(customAttr){
	price14 = $("h4.price"+"[menuID14='"+customAttr+"']");
	price_info14 = parseInt(price14.html());
	pay -= price_info14;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> sandwiches *********************
function Increament14(customClass,customAttr)
{
	var increament_counter14 = $("span."+customClass+"[menuID14='"+customAttr+ "']");
	var counter14 = increament_counter14.html();
	counter14++;
	increament_counter14.html(" "+counter14+" ");
	
	IncrementPrice14(customAttr);
}
// ********************* decrement order button ----> sandwiches *********************
function Decreament14(customClass,customAttr)
{
	var decreament_counter14 = $("span."+customClass+"[menuID14='"+customAttr+ "']");
	var counter14 = decreament_counter14.html();
	counter14--;
	
	if(counter14 < 1)
	{
		var parentDiv14 = $("div.Purchase-count[menuID14='"+customAttr+ "']");
		parentDiv14.hide();
		var mainButton14 = $("button."+mainBtnClass14+"[menuID14='"+customAttr+"']");
		mainButton14.show();
	}
	
	decreament_counter14.html(" "+counter14+" ");

	DecrementPrice14(customAttr);
}


// ---------------------------------------------------------------------------> pasta item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> pasta *********************
function AddToPasta(customAttr)
{
	var myHtmlTag15 = $("button." +mainBtnClass15+"[menuID15='"+customAttr+"']");
	myHtmlTag15.hide();
    var span15 = "menuID15 = '" + myHtmlTag15.attr("menuID15") + "'";
	var menuIDContent15 = myHtmlTag15.attr("menuID15");
	var increament_onclick = "onclick=Increament15('span','"+menuIDContent15+"')";
	var decreament_onclick = "onclick=Decreament15('span','"+menuIDContent15+"')";
    var section_count15 = $('<div class="Purchase-count" menuID15="'+menuIDContent15+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span15+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag15.after(section_count15);

	primaryPrice15(customAttr);
}
// ********************* Click the main button at the same time price ----> pasta *********************
function primaryPrice15(customAttr){
	var price15 = $("h4.price"+"[menuID15='"+customAttr+"']");
	var price_info15 = parseInt(price15.html());
	pay += price_info15;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> pasta *********************
function IncrementPrice15(customAttr){
	price15 = $("h4.price"+"[menuID15='"+customAttr+"']");
	price_info15 = parseInt(price15.html());
	pay += price_info15;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> pasta *********************
function DecrementPrice15(customAttr){
	price15 = $("h4.price"+"[menuID15='"+customAttr+"']");
	price_info15 = parseInt(price15.html());
	pay -= price_info15;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> pasta *********************
function Increament15(customClass,customAttr)
{
	var increament_counter15 = $("span."+customClass+"[menuID15='"+customAttr+ "']");
	var counter15 = increament_counter15.html();
	counter15++;
	increament_counter15.html(" "+counter15+" ");
	
	IncrementPrice15(customAttr);
}
// ********************* decrement order button ----> pasta *********************
function Decreament15(customClass,customAttr)
{
	var decreament_counter15 = $("span."+customClass+"[menuID15='"+customAttr+ "']");
	var counter15 = decreament_counter15.html();
	counter15--;
	
	if(counter15 < 1)
	{
		var parentDiv15 = $("div.Purchase-count[menuID15='"+customAttr+ "']");
		parentDiv15.hide();
		var mainButton15 = $("button."+mainBtnClass15+"[menuID15='"+customAttr+"']");
		mainButton15.show();
	}
	
	decreament_counter15.html(" "+counter15+" ");

	DecrementPrice15(customAttr);
}


// ---------------------------------------------------------------------------> grill item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> grill *********************
function AddToGrill(customAttr)
{
	var myHtmlTag16 = $("button." +mainBtnClass16+"[menuID16='"+customAttr+"']");
	myHtmlTag16.hide();
    var span16 = "menuID16 = '" + myHtmlTag16.attr("menuID16") + "'";
	var menuIDContent16 = myHtmlTag16.attr("menuID16");
	var increament_onclick = "onclick=Increament16('span','"+menuIDContent16+"')";
	var decreament_onclick = "onclick=Decreament16('span','"+menuIDContent16+"')";
    var section_count16 = $('<div class="Purchase-count" menuID16="'+menuIDContent16+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span16+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag16.after(section_count16);

	primaryPrice16(customAttr);
}
// ********************* Click the main button at the same time price ----> grill *********************
function primaryPrice16(customAttr){
	var price16 = $("h4.price"+"[menuID16='"+customAttr+"']");
	var price_info16 = parseInt(price16.html());
	pay += price_info16;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> grill *********************
function IncrementPrice16(customAttr){
	price16 = $("h4.price"+"[menuID16='"+customAttr+"']");
	price_info16 = parseInt(price16.html());
	pay += price_info16;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> grill *********************
function DecrementPrice16(customAttr){
	price16 = $("h4.price"+"[menuID16='"+customAttr+"']");
	price_info16 = parseInt(price16.html());
	pay -= price_info16;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> grill *********************
function Increament16(customClass,customAttr)
{
	var increament_counter16 = $("span."+customClass+"[menuID16='"+customAttr+ "']");
	var counter16 = increament_counter16.html();
	counter16++;
	increament_counter16.html(" "+counter16+" ");
	
	IncrementPrice16(customAttr);
}
// ********************* decrement order button ----> grill *********************
function Decreament16(customClass,customAttr)
{
	var decreament_counter16 = $("span."+customClass+"[menuID16='"+customAttr+ "']");
	var counter16 = decreament_counter16.html();
	counter16--;
	
	if(counter16 < 1)
	{
		var parentDiv16 = $("div.Purchase-count[menuID16='"+customAttr+ "']");
		parentDiv16.hide();
		var mainButton16 = $("button."+mainBtnClass16+"[menuID16='"+customAttr+"']");
		mainButton16.show();
	}
	
	decreament_counter16.html(" "+counter16+" ");

	DecrementPrice16(customAttr);
}


// ---------------------------------------------------------------------------> accompanying item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> accompanying *********************
function AddToAccompanying(customAttr)
{
	var myHtmlTag17 = $("button." +mainBtnClass17+"[menuID17='"+customAttr+"']");
	myHtmlTag17.hide();
    var span17 = "menuID17 = '" + myHtmlTag17.attr("menuID17") + "'";
	var menuIDContent17 = myHtmlTag17.attr("menuID17");
	var increament_onclick = "onclick=Increament17('span','"+menuIDContent17+"')";
	var decreament_onclick = "onclick=Decreament17('span','"+menuIDContent17+"')";
    var section_count17 = $('<div class="Purchase-count" menuID17="'+menuIDContent17+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span17+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag17.after(section_count17);

	primaryPrice17(customAttr);
}
// ********************* Click the main button at the same time price ----> accompanying *********************
function primaryPrice17(customAttr){
	var price17 = $("h4.price"+"[menuID17='"+customAttr+"']");
	var price_info17 = parseInt(price17.html());
	pay += price_info17;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> accompanying *********************
function IncrementPrice17(customAttr){
	price17 = $("h4.price"+"[menuID17='"+customAttr+"']");
	price_info17 = parseInt(price17.html());
	pay += price_info17;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> accompanying *********************
function DecrementPrice17(customAttr){
	price17 = $("h4.price"+"[menuID17='"+customAttr+"']");
	price_info17 = parseInt(price17.html());
	pay -= price_info17;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> accompanying *********************
function Increament17(customClass,customAttr)
{
	var increament_counter17 = $("span."+customClass+"[menuID17='"+customAttr+ "']");
	var counter17 = increament_counter17.html();
	counter17++;
	increament_counter17.html(" "+counter17+" ");
	
	IncrementPrice17(customAttr);
}
// ********************* decrement order button ----> accompanying *********************
function Decreament17(customClass,customAttr)
{
	var decreament_counter17 = $("span."+customClass+"[menuID17='"+customAttr+ "']");
	var counter17 = decreament_counter17.html();
	counter17--;
	
	if(counter17 < 1)
	{
		var parentDiv17 = $("div.Purchase-count[menuID17='"+customAttr+ "']");
		parentDiv17.hide();
		var mainButton17 = $("button."+mainBtnClass17+"[menuID17='"+customAttr+"']");
		mainButton17.show();
	}
	
	decreament_counter17.html(" "+counter17+" ");

	DecrementPrice17(customAttr);
}


// ---------------------------------------------------------------------------> sauces item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> sauces *********************
function AddToSauces(customAttr)
{
	var myHtmlTag18 = $("button." +mainBtnClass18+"[menuID18='"+customAttr+"']");
	myHtmlTag18.hide();
    var span18 = "menuID18 = '" + myHtmlTag18.attr("menuID18") + "'";
	var menuIDContent18 = myHtmlTag18.attr("menuID18");
	var increament_onclick = "onclick=Increament18('span','"+menuIDContent18+"')";
	var decreament_onclick = "onclick=Decreament18('span','"+menuIDContent18+"')";
    var section_count18 = $('<div class="Purchase-count" menuID18="'+menuIDContent18+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span18+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag18.after(section_count18);

	primaryPrice18(customAttr);
}
// ********************* Click the main button at the same time price ----> sauces *********************
function primaryPrice18(customAttr){
	var price18 = $("h4.price"+"[menuID18='"+customAttr+"']");
	var price_info18 = parseInt(price18.html());
	pay += price_info18;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> sauces *********************
function IncrementPrice18(customAttr){
	price18 = $("h4.price"+"[menuID18='"+customAttr+"']");
	price_info18 = parseInt(price18.html());
	pay += price_info18;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> sauces *********************
function DecrementPrice18(customAttr){
	price18 = $("h4.price"+"[menuID18='"+customAttr+"']");
	price_info18 = parseInt(price18.html());
	pay -= price_info18;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> sauces *********************
function Increament18(customClass,customAttr)
{
	var increament_counter18 = $("span."+customClass+"[menuID18='"+customAttr+ "']");
	var counter18 = increament_counter18.html();
	counter18++;
	increament_counter18.html(" "+counter18+" ");
	
	IncrementPrice18(customAttr);
}
// ********************* decrement order button ----> sauces *********************
function Decreament18(customClass,customAttr)
{
	var decreament_counter18 = $("span."+customClass+"[menuID18='"+customAttr+ "']");
	var counter18 = decreament_counter18.html();
	counter18--;
	
	if(counter18 < 1)
	{
		var parentDiv18 = $("div.Purchase-count[menuID18='"+customAttr+ "']");
		parentDiv18.hide();
		var mainButton18 = $("button."+mainBtnClass18+"[menuID18='"+customAttr+"']");
		mainButton18.show();
	}
	
	decreament_counter18.html(" "+counter18+" ");

	DecrementPrice18(customAttr);
}


// ---------------------------------------------------------------------------> pizza item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> pizza *********************
function AddToPizza(customAttr)
{
	var myHtmlTag19 = $("button." +mainBtnClass19+"[menuID19='"+customAttr+"']");
	myHtmlTag19.hide();
    var span19 = "menuID19 = '" + myHtmlTag19.attr("menuID19") + "'";
	var menuIDContent19 = myHtmlTag19.attr("menuID19");
	var increament_onclick = "onclick=Increament19('span','"+menuIDContent19+"')";
	var decreament_onclick = "onclick=Decreament19('span','"+menuIDContent19+"')";
    var section_count19 = $('<div class="Purchase-count" menuID13="'+menuIDContent19+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span19+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag19.after(section_count19);

	primaryPrice19(customAttr);
}
// ********************* Click the main button at the same time price ----> pizza *********************
function primaryPrice19(customAttr){
	var price19 = $("h4.price"+"[menuID19='"+customAttr+"']");
	var price_info19 = parseInt(price19.html());
	pay += price_info19;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> pizza *********************
function IncrementPrice19(customAttr){
	price19 = $("h4.price"+"[menuID19='"+customAttr+"']");
	price_info19 = parseInt(price19.html());
	pay += price_info19;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> pizza *********************
function DecrementPrice19(customAttr){
	price19 = $("h4.price"+"[menuID19='"+customAttr+"']");
	price_info19 = parseInt(price19.html());
	pay -= price_info19;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> pizza *********************
function Increament19(customClass,customAttr)
{
	var increament_counter19 = $("span."+customClass+"[menuID19='"+customAttr+ "']");
	var counter19 = increament_counter19.html();
	counter19++;
	increament_counter19.html(" "+counter19+" ");
	
	IncrementPrice19(customAttr);
}
// ********************* decrement order button ----> pizza *********************
function Decreament19(customClass,customAttr)
{
	var decreament_counter19 = $("span."+customClass+"[menuID19='"+customAttr+ "']");
	var counter19 = decreament_counter19.html();
	counter19--;
	
	if(counter19 < 1)
	{
		var parentDiv19 = $("div.Purchase-count[menuID19='"+customAttr+ "']");
		parentDiv19.hide();
		var mainButton19 = $("button."+mainBtnClass19+"[menuID19='"+customAttr+"']");
		mainButton19.show();
	}
	
	decreament_counter19.html(" "+counter19+" ");

	DecrementPrice19(customAttr);
}


// ---------------------------------------------------------------------------> Persian item <---------------------------------------------------------------------------


// ********************* main button for increment or decrement order ----> Persian *********************
function AddToPersian(customAttr)
{
	var myHtmlTag20 = $("button." +mainBtnClass20+"[menuID20='"+customAttr+"']");
	myHtmlTag20.hide();
    var span20 = "menuID20 = '" + myHtmlTag20.attr("menuID20") + "'";
	var menuIDContent20 = myHtmlTag20.attr("menuID20");
	var increament_onclick = "onclick=Increament20('span','"+menuIDContent20+"')";
	var decreament_onclick = "onclick=Decreament20('span','"+menuIDContent20+"')";
    var section_count20 = $('<div class="Purchase-count" menuID20="'+menuIDContent20+'"><button class="btn-counter-Decrement"'+decreament_onclick+'>-</button><span class="span"'+span20+'> 1 </span><button class="btn-counter-Increment" '+increament_onclick+'  >+</button></div>');
    myHtmlTag20.after(section_count20);

	primaryPrice20(customAttr);
}
// ********************* Click the main button at the same time price ----> Persian *********************
function primaryPrice20(customAttr){
	var price20 = $("h4.price"+"[menuID20='"+customAttr+"']");
	var price_info20 = parseInt(price20.html());
	pay += price_info20;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment price ----> Persian *********************
function IncrementPrice20(customAttr){
	price20 = $("h4.price"+"[menuID20='"+customAttr+"']");
	price_info20 = parseInt(price20.html());
	pay += price_info20;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* decrement price ----> Persian *********************
function DecrementPrice20(customAttr){
	price20 = $("h4.price"+"[menuID20='"+customAttr+"']");
	price_info20 = parseInt(price20.html());
	pay -= price_info20;
	$(".pay_counter").html(" "+pay + "/000 ");
}
// ********************* increment order button ----> Persian *********************
function Increament20(customClass,customAttr)
{
	var increament_counter20 = $("span."+customClass+"[menuID20='"+customAttr+ "']");
	var counter20 = increament_counter20.html();
	counter20++;
	increament_counter20.html(" "+counter20+" ");
	
	IncrementPrice20(customAttr);
}
// ********************* decrement order button ----> Persian *********************
function Decreament20(customClass,customAttr)
{
	var decreament_counter20 = $("span."+customClass+"[menuID20='"+customAttr+ "']");
	var counter20 = decreament_counter20.html();
	counter20--;
	
	if(counter20 < 1)
	{
		var parentDiv20 = $("div.Purchase-count[menuID20='"+customAttr+ "']");
		parentDiv20.hide();
		var mainButton20 = $("button."+mainBtnClass20+"[menuID20='"+customAttr+"']");
		mainButton20.show();
	}
	
	decreament_counter20.html(" "+counter20+" ");

	DecrementPrice20(customAttr);
}



