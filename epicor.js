

$(document).ready(function(){
    var pay = parseInt($(".pay_counter").html());
    console.log(pay);
    $(".Purchase-count").hide();
    $(".breakfast_contant_info_price_btn").click(function(e){
       
        $(this).hide();
        var section_count = $('<div class="Purchase-count"><button class="btn-counter-Decrement">-</button><span class="span"> 1 </span><button class="btn-counter-Increment">+</button></div>');
        $(this).after(section_count);
        // alert("salam")
        // var section_count = '<div class="Purchase-count"><button class="btn-counter-Decrement">-</button><span class="span"> 1 </span><button class="btn-counter-Increment">+</button></div>';
        // $(this).replaceWith(section_count);
        var counter_val = $(".span").html();
        var counter = parseInt(counter_val);
        console.log(counter);
        price=0;
        var price = parseInt($(".price").html());
        console.log(price);
        pay += price;

        $(".pay_counter").html(pay + "/000");
        
        $(".btn-counter-Increment").click(function(e){
            counter++;
            console.log(counter);
            $(".span").html(" "+counter+" ");
            pay += price;
            console.log(pay);
            $(".pay_counter").html(pay + "/000");
        })

        $(".btn-counter-Decrement").click(function(e){
            counter--;
            if (counter < 1) {
                // var btn = '<button class="breakfast_contant_info_price_btn">افزودن ب دفترچه</button>'
                // $(section_count).replaceWith(btn);

                // const new_button = $("<div>");
                // $(new_button).html('<button class="breakfast_contant_info_price_btn">افزودن ب دفترچه</button>');
                // $(".Purchase-count").append(new_button);
                // alert("salam")
                $(".Purchase-count").hide();
                
                $(".pay_counter").html("0");

                $(".breakfast_contant_info_price_btn").show();
            }
            console.log(counter);
            $(".span").html(" "+counter+" ");
            pay -= price;
            console.log(pay);
            $(".pay_counter").html(pay + "/000");
        })
    })
});