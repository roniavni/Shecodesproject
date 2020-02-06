$(function() {
/** panels moving */
    $('.tab-panels .tabs li').on('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        //show next panel
        function showNextPanel() {;
    
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
       
                $(this).addClass('active');
            });
        }
    });


});


$(function(){
    /** jumping pictures */
$('.panel .content').on('click',function(){
    var picFile=$(this).attr('valueimg');
    var price=$(this).attr('price');
    var picElemt= document.getElementById('gallery');
    picElemt.src=picFile;
    var priceElemt= document.getElementById('desc');
    priceElemt.innerHTML =price;
    /**
    $('#gallery').src=picFile;
    alert('here!!4');
    $('#desc').innerHTML=price;
    alert('here!!5');
 */

}
)
}
)
;


