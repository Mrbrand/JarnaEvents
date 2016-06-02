 	
 	
function load_data(){

 $.ajax({url: "https://manu21.manufrog.com/~norrtuna/betarabbit.com/milito/jhandler.php", success: function(result){
    $("#output").html(result);
}});
 }	
 	

 	

