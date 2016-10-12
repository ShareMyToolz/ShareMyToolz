$(function(){
    var ip;
    
    $.get("http://ipinfo.io", function(response) {
        ip = response.ip;
        mixpanel.identify(ip);
        mixpanel.track("Arrival");
    }, "jsonp");
    
    $("#sendForm").click(function(e) {
        if($("#email").val()) {
            mixpanel.people.set({
                "$created": new Date(),
                "$email": $("#email").val()
            });
            mixpanel.track("Subscribe");
            $("#email").val('').placeholder();
        }
    });  
});