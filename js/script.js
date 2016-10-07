$(function(){
    $("#sendForm").click(function(e) {
        if($("#email").val()) {
            mixpanel.track($("#email").val());
            $("#email").val('').placeholder();
        }
    });
    
});