
$(document).ready(function(){
    setPersianDate();
    setTime();
});


function setTime(){
    var date = new Date();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    $(".timeReceipt").html("Time: "+current_time);
}

function setPersianDate(){
    $(".dateReceipt").text("Date: "+moment().locale('fa').format('YYYY/M/D'));
}