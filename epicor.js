// ********************* global var *********************
var linkClass = 'menu-bar_section';
var mainBtnClass = 'breakfast_contant_info_price_btn';
var mainBtnClass2 = 'minabar_contant_info_price_btn';
var mainBtnClass3 = 'espressobar_contant_info_price_btn';


var pay = 0;


$(document).ready(function(){
	$( "div.slider"+"[data-info ='1']" ).siblings("div").hide();
});


function linked(dataInfo){
	var menuBarSlide = $( "div.slider"+"[data-info ='"+dataInfo+"']" );
	menuBarSlide.show().siblings("div").hide();
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

