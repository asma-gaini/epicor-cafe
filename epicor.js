
$(document).ready(function(){
    var pay = parseInt($(".pay_counter").html());
    console.log(pay);
    $(".Purchase-count").hide();
    $(".breakfast_contant_info_price_btn").on("click" ,function(e){
       
        $(this).hide();
        var span = "menu = '" + $(this).attr("menu") + "'"
        console.log(span);
        // var section_count = $('<div class="Purchase-count"><button class="btn-counter-Decrement">-</button><span class="span"'+span+'>'+$(this).attr('menu')+ '</span><button class="btn-counter-Increment">+</button></div>');
        var section_count = $('<div class="Purchase-count"><button class="btn-counter-Decrement">-</button><span class="span"'+span+'> 1 </span><button class="btn-counter-Increment">+</button></div>');
        $(this).after(section_count);

        // **********************ta inja code dorost kar mikone va span ba menu attribute unic ro dorost sar jash mizare *************

        var temp = $(this).attr("menu");
        console.log("temp= " + temp);

        // var counter_val =  $(".span").attr("menu", temp).html();
        // var counter = parseInt(counter_val);
        // console.log("counter= " + counter);

       
        var spanContantCounter = parseInt($(this).siblings("div").find("span").html());
        console.log("spanContantCounter= " + spanContantCounter);

        
        var price = parseInt($(".price").html());
        console.log(price);
        pay += price;

        $(".pay_counter").html(pay + "/000");
        
        $(".btn-counter-Increment").click(function(e){
            spanContantCounter = $(this).parent().find("span").html();
            console.log(" ghbl ezafe kardan = "+spanContantCounter);
            spanContantCounter++;
            // console.log( "spanContantCounter" + spanContantCounter);
            // console.log("temp= " + temp);
            
            $(this).parent().find("span").html(" "+spanContantCounter+" ");
            console.log("meghdar span bade ezafe"+$(this).parent().find("span").html());
            pay += price;
            console.log(pay);
            $(".pay_counter").html(pay + "/000");
        })

        $(".btn-counter-Decrement").click(function(e){
            spanContantCounter = $(this).parent().find("span").html();
            console.log(" ghbl kam kardan = "+spanContantCounter);


            spanContantCounter--;
            if (spanContantCounter < 1) {
                $(this).parent().hide();
                // $(".Purchase-count").hide();
                
                $(".pay_counter").html("0");

                $(this).parent().parent().find("button").show();
                // $(".breakfast_contant_info_price_btn").show();
            }
            $(this).parent().find("span").html(" "+spanContantCounter+" ");
            console.log("meghdar span bade kam"+$(this).parent().find("span").html());

            pay -= price;
            console.log(pay);
            $(".pay_counter").html(pay + "/000");
        })

    })

    // counter = 1;
});