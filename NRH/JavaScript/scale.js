							 var errorText = (" Var snäll och skriv in ditt mätning av hästens");
										   $(document).ready(function(){	
										    	 $(".submit1").click(function(){
   										    		var result1 = parseInt($('#horseLansmarkeomgang').val() || 0);
										    		var result2 =parseInt($('#horseMankhojd').val() || 0);							
										    		var resultLansmark = 4.3 * result1;
										    		var resultMankhojd = 3.0 * result2;
										    		var resultALL = (resultLansmark + resultMankhojd)-785;
										    		var measureHorse1 = Math.round(resultALL);
										        	if (result1 == 0){
										       			$("#error1").html(errorText);
										       			$("#error1").show(errorText);
										       		}else{
										       			$("#error1").hide(errorText);
										       			}
										       		if	(result2 == 0){
										       			$("#error2").html(errorText);
										       			$("#error2").show(errorText); 	
										       		}else{	
										       			$("#error2").hide(errorText);
										       			$("#theanswer").html(measureHorse1 + " Kg");
  										    		}
  										    	});
  										
  										    	$(".submit2").click(function(){
   										    		var result3 = parseInt($('#horseBrostomfang').val() || 0);
										    		var result4 = parseInt($('#horseLenght').val() || 0);							
										    		var result33 = result3 * result3;
										    		var result5 = (result33 * result4) / 8900;
										    		var measureHorse2 = Math.round(result5);
										       		if (result3 == 0){
										       			$("#error3").html(errorText);
										       			$("#error3").show(errorText);
										       		}else{
										       			$("#error3").hide(errorText);
										       			}
										       		if (result4 == 0){
										       			$("#error4").html(errorText);
										       			$("#error4").show(errorText);
										       		}else{	
										       			$("#error4").hide(errorText);
										       			$("#theanswer2").html(measureHorse2 + " Kg");
  										    		}	
  										    	});
										
										    			jQuery('.numbersOnly').keyup(function () { 
    									    				this.value = this.value.replace(/[^0-9\.]/g,'');
										    	});
										    
										    });
