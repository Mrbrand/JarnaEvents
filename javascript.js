 	
 	
function load_data(){

 $.ajax({url: "http://betarabbit.com/milito/handler.php?test_data", success: function(result){
    $("#output").html(result);
}});
 }	
 	

 	

