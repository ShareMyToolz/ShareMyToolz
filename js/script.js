$(function(){
    $("#emailForm").submit(function(e) {
        if($("#email").val()) {
            alert($("#email").val());
            mixpanel.track($("#email").val());
        }
    });
    
});