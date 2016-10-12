$(function(){
    function Generator() {};
    Generator.prototype.rand =  Math.floor(Math.random() * 26) + Date.now();

    Generator.prototype.getId = function() {
        return this.rand++;
    };
    var idGen =new Generator();
    
    mixpanel.identify(idGen.getId());
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