
$(document).ready(function(){
    // var pay = parseInt($(".pay_counter").html());
    var pay = 0;
    console.log("tarif pay = "+pay);
    $(".Purchase-count").hide();
    $(".breakfast_contant_info_price_btn").on("click" ,function(e){
       
        $(this).hide();
        var span = "menu = '" + $(this).attr("menu") + "'"
        console.log(span);
        var section_count = $('<div class="Purchase-count"><button class="btn-counter-Decrement">-</button><span class="span"'+span+'> 1 </span><button class="btn-counter-Increment">+</button></div>');
        $(this).after(section_count);

        var temp = $(this).attr("menu");
        console.log("temp= " + temp);

        var spanContantCounter = parseInt($(this).siblings("div").find("span").html());
        console.log("spanContantCounter= " + spanContantCounter);

        var price = parseInt($(this).parent().siblings("div").find(".price").html());
        console.log("price = "+price);
        pay += price;

        $(".pay_counter").html(pay + "/000");
        
        $(".btn-counter-Increment").click(function(e){
            // spanContantCounter = $(this).parent().find("span").html();

            spanContantCounter = $(this).siblings("span").html();
// debugger
            console.log(" ghbl ezafe kardan = "+spanContantCounter);
            spanContantCounter++;
            // $(this).parent().find("span").html(" "+spanContantCounter+" ");
            $(this).siblings("span").html(" "+spanContantCounter+" ");
            console.log("meghdar span bade ezafe"+$(this).siblings("span").html());


            // price = parseInt($(this).parent().parent().siblings("div").find(".price").html());
            // console.log(price)
            // console.log("pay ghabl = "+pay);
            // console.log("price = "+price);
            // pay += price;
            // console.log("price = "+price);
            // console.log("pay bad = "+pay);
            // $(".pay_counter").html(pay + "/000");
        })

        $(".btn-counter-Decrement").click(function(e){
            spanContantCounter = $(this).siblings("span").html();
            console.log(" ghbl kam kardan = "+spanContantCounter);
            spanContantCounter--;
            if (spanContantCounter < 1) {
                $(this).parent().hide();
                $(".pay_counter").html("0");
                $(this).parent().parent().find("button").show();
            }
            $(this).siblings("span").html(" "+spanContantCounter+" ");
            console.log("meghdar span bade kam" + $(this).siblings("span").html());


            // price = parseInt($(this).parent().parent().siblings("div").find(".price").html());
            // pay -= price;
            // console.log(pay);
            // $(".pay_counter").html(pay + "/000");
        })

    })
});



// che bara addad che bara gheymat az yeki ru in yeki miam  yedone az ghabl ezafe karde