$(document).ready(function(){	
			
			 $('#ResultBody').hide();		
					 $("#calcu").click(function(){
   						
   						$('#ResultBody').fadeIn("10000");
   						
   						var HorseType = $("input[name=horseType]:checked").val();
   						
   						var Horse = $("input[name=horse]:checked").val();
   							
   						
   						var weight = parseInt($('#weight2').val());
      					var weight2 = (0.5 * (weight * 0.75)).toFixed(1);
							
							if (Horse == "Lite"){																							 
								var feed = weight2;
								}						
							else if (Horse == "Normal"){																							 
								var feed = (weight2 * 1.05).toFixed(1);
								}																															 
							else if (Horse == "Hard"){																								 
							 	var feed = (weight2 * 1.10).toFixed(1);
								}
							else if (Horse !== ""){																								 
							 	var feed = weight2;
								}
						
						
						
						
						var prot = (feed * 6).toFixed(1);				// It works out the SMRC math formulas//
						
						var kal = (feed * 0.4).toFixed(1);				// It works out the calciam math formulas//
						
						var fos = (feed * 0.25).toFixed(1);				// It works out the fosfers math formulas//
						
						var mag = (feed * 0.15).toFixed(1);				// It works out the magnizam math formulas//
						
						var SE = (0.2 * (weight2/100)).toFixed(1) ;		// It works out the SE math formulas//
					
						var TS = (1.5 * (weight2/100)).toFixed(1);		// It works out the TS math formulas//
				
						
						
						var HayType = $('#hayInput').val();
						
						
						
						
						var Horsefiger = $("input[name=horsefiger]:checked").val();
							if (Horsefiger == "Smal"){																							 
								 var sizeType = ("<p id='redTxt'>Din häst är för smal,Se till att den äter mer</p>");
								}						
							else if (Horsefiger == "Normal"){																							 
								 var sizeType =("<p id ='greenTxt'>Din häst vikt är perfekt fortsätt så</p>");
								}																															 
							else if (Horsefiger == "Tjok"){																								 
							 	 var sizeType = ("<p id='redTxt'>Din häst är för fet,Ge den mindre mat</p>");
								}
							else if (typeof Horsefiger === "undefined"){																								 
							 	 var sizeType = ("<p id='redTxt'>You have not selected horse weight type </p>");
								
								}
						
						
						
						var MJenergy = ($('#MJ1').val());
							if (MJenergy == feed){
								 var Energy = ("<p id='greenTxt'>Din häst får tillräckligt med MJ </p>");
								}
							else if (MJenergy > feed){
							     var Energy = ("<p id='redTxt'>Din häst får för mycket MJ </p>");
								}
							else if (MJenergy < feed){
								 var Energy = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}

						
						var SMBRPenergy = ($('#SMBRP2').val());
							if (SMBRPenergy == prot){
								var ProtineEnergy =  ("<p id='greenTxt'>Din häst får tillräckligt med Protein </p>");
								}
							else if (SMBRPenergy > prot){
								var ProtineEnergy =  ("<p id='redTxt'>Din häst får för mycket Protein </p>");
								}
							else if (SMBRPenergy < prot){
								var ProtineEnergy =  ("<p id='redTxt'>Din häst får inte tillräckligt med Protein </p>");
								}

						
						
						var Caenergy = ($('#Ca3').val());
							if (Caenergy == kal){
								var Calintake =  ("<p id='greenTxt'>Din häst får tillräckligt med Calcium </p>");
								}
							else if (Caenergy > kal){
								var Calintake =  ("<p id='redTxt'>Din häst får för mycket Calcium </p>");
								}
							else if (Caenergy < kal){
								var Calintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med Calcium </p>");
								}
						
						var Penergy =($('#Phos4').val());
							if (Penergy == fos){
								var Fosintake =  ("<p id='greenTxt'>Din häst får tillräckligt med Fosfor </p>");
								}
							else if (Penergy > fos){
								var Fosintake =  ("<p id='redTxt'>Din häst får för mycket Fosfor </p>");
								}
							else if (Penergy < fos){
								var Fosintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med Fosfor </p>");
								}
						
						
						var Mgenergy = ($('#MG5').val());
							if (Mgenergy == mag){
								var MGintake =  ("<p id='greenTxt'>Din häst får tillräckligt med Magnesium </p>");
								}
							else if (Mgenergy > mag){
								var MGintake =  ("<p id='redTxt'>Din häst får för mycket Magniseum </p>");
								}
							else if (Mgenergy < mag){
								var MGintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med Magniseum </p>");
								}
						
						
						var SEenergy = ($('#SE6').val());
							if (SEenergy == SE){
								var SEintake =  ("<p id='greenTxt'>Din häst får tillräckligt med Selenium </p>");
								}
							else if (SEenergy > SE){
								var SEintake =  ("<p id='redTxt'>Din häst får för mycket Selenium </p>");
								}
							else if (SEenergy < SE){
								var SEintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med Selenium </p>");
								}

						
						
						var TSenergy = ($('#TS7').val());
							if (TSenergy == TS){
								var TSintake =  ("<p id='greenTxt'>Din häst får tillräckligt med TS </p>");
								}
							else if (TSenergy > TS){
								var TSintake =  ("<pid='redTxt'>Din häst får för mycket TS </p>");
								}
							else if (TSenergy < TS){
								var TSintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med TS </p>");
								}
						
						
						var days = parseInt($('#horseWorkout').val());						// It works out the days Per Week math formulas//
						var daysPerWeek = (days/10).toFixed(1);														
						
						var skrit1 = parseInt($('#horseWorkoutSkritt').val());				// It gets the value of the horse Workout Skritt//
						var skrittCalc = ((skrit1 * daysPerWeek) * 0.2);					
						var skrittCalc2 = (skrittCalc).toFixed(1);	
						
						var TravAmout = parseInt($('#horseWorkoutTrav').val());				// It gets the value of the horse Workout Trav//
						var travCalc = ((TravAmout * daysPerWeek) * 1.3);							
						var travCalc2 = (travCalc).toFixed(1);
						
						var workoutMJ = (parseInt(skrittCalc2) + parseInt(travCalc2) + parseInt(feed)).toFixed(1);		// It works out how much MJ needs to be added after the horse works out//
						
    					var aChecked = [];
							$(':checkbox:checked').each(function(){
      							aChecked.push(this.getAttribute("value"));
							}); 
       						 
 							
   						
   			$("#ResultHead").html("<h2>Din häst är en : "+ HorseType + "</h2>");
   			
   			$("#ResultText").html(
   								"<h3>Din häst energibehov är: </h3>" +
   							  	"Work feeding : "+ Horse +'<br/>' +
							  	"MJ : " + feed +"Kg"+ '<br/>' +
							  	"Protein: " + prot +"g"+ '<br/>' +
							  	"Kalcium : " + kal +"g"+ '<br/>' +
							  	"Fosfers : " + fos +"g"+ '<br/>' +
							  	"Magnien : " + mag +"g"+ '<br/>' +
							  	"Seleniam : " + SE +"g"+ '<br/>' +
							  	"TS : " + TS +"g"+ '<br/>' 
							  );
				
			$("#ResultText2").html(
									"<h3>Du valde: </h3>" +
									"Horse Body figure : " + Horsefiger + sizeType +'<br/>');
  			
  			$("#ResultText3").html(
  									"<h3>Here are your chemical input result :</h3> " +
							  		"Your hay type is : "+ HayType +'<br/>' +'<br/>' +
							  		'MJ :' +  MJenergy +"g"+'<br/>'+ Energy+
							 		'Protein :' +  SMBRPenergy +"g"+'<br/>'+ ProtineEnergy +
							 		'Kalcium :' +  Caenergy +"g"+'<br/>'+ Calintake +
									'Fosfers :' +  Penergy +"g"+'<br/>'+ Fosintake +	 
							 		'Magnien:' +  Mgenergy +"g"+'<br/>'+ MGintake +
							 		'Seleniam :' +  SEenergy +"g"+'<br/>'+ SEintake +
							 		'TS :' +  TSenergy +"g"+'<br/>'+ TSintake
							 		);
  			
  			$("#ResultText4").html(
  									"<h3>Daily required energy after Trav and Skrit :</h3>" 
									+ daysPerWeek + " days per week"+'<br/>'
									+ skrittCalc + " Skrit hours per week" + '<br/>'
									+ travCalc +" Trav hours in week"+'<br/>'+'<br/>'
									+ workoutMJ +" Kg : MJ after working out "+'<br/>'
									+ 'Horse foods you have selected :' +  aChecked
									
									);		
  						
  							});
				
				
				});
 
 




