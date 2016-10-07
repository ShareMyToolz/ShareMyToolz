$(function(){
    $("#emailForm").submit(function(e) {
        if(!$("#email").val()) {
            mixpanel.track($("#email").val());
        }
    });
    
});