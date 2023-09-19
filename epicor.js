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


var pay = 0;


$(document).ready(function(){
	$( "div.slider"+"[data-info ='1']" ).siblings("div").hide();
});


function linked(dataInfo){
	// $("button.menu-bar_section"+"[data-info ='"+dataInfo+"']").addClass("menu-bar_section_click");
	
	var menuBarSlide = $( "div.slider"+"[data-info ='"+dataInfo+"']" );
	menuBarSlide.show().siblings("div").fadeOut(300);

	// console.log("asma")
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


