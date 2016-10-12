$(function(){
    mixpanel.track("Arrival");
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