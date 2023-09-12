$(document).ready(function(){
    var counter = 1;
    // $(".Purchase-count").hide();
    $(".breakfast_contant_info_price_btn").click(function(e){
        // function afterText() {
        //     var txt1 = "<button>- </button>";         
        //     var txt2 = "<span>- </span>";
        //     var txt3 = "<button>- </button>"; 
        //     txt3.innerHTML = "jQuery!";
        //     $(".breakfast_contant_info_price_btn").after(txt1, txt2, txt3); 
        //   }
        $(this).hide();
        var section_count = '<div class="Purchase-count"><button class="btn-counter">-</button><span> 1 </span><button class="btn-counter">+</button></div>';
        $(this).replaceWith(section_count);
        // $(".Purchase-count").show();
        // alert("salam");
    })
});