 //$(document).ready(function(){	   //   remove item 
   function closeout(){ 
   $('.closeout').click(function(event){
     	$(this).closest("p.item").remove();
       });
    }
    	 function strikethrough() {
    	$('.item').click(function(event){		//  strikethrough
            if ($(this).hasClass('strikethrough')){
             	$(this).removeClass('strikethrough');   
            } else {
        		 $(this).addClass("strikethrough");
                 }
       });
    };
  
  
  	$(document).ready(function() {			 //  add new item
      $('#additem').click(function(){
	   var testInput = " ";
	   testInput = document.getElementById('inputtagname').value;
	   if (testInput == " " || testInput == "")
	    {  alert("Please do not enter an empty line");
	    }
		else {
 	  	 $('#itemlist').append("<p class=\'item\' onclick=\'strikethrough()\'> " + $('#inputtagname').val()+ "<span class=\"closeout\" onclick=\"closeout()\"> X </span> </p>");
         $('#inputtagname').val(""); 
		 }
      });
   });
 
         // slideDown Top Menu 
$(document).ready(function() {
 $(".menubox").click(function() {
   $(this).next(".menufull").slideToggle(330);
   $('body').toggleClass('dimmer');
  }) 

  $(".changelist").click(function() {	 // slideDown changeto To-Do List
   $(this).next(".slideup").slideToggle(330);
   });
 });

        
$(document).ready(function() {	   // Hide/Delete whole List
 $(".resett").click(function() {
   $('.item').hide();
  });
});