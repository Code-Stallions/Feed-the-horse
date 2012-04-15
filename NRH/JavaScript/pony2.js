$(document).ready(function(){	
		
		$('.numbersOnly').keyup(function () { 															// It will only allow numbers to be entered in the text field//
    		this.value = this.value.replace(/[^0-9\.]/g,'');
			}); 	
			 $('#ResultBody').hide();																	// It hiddes the result window but its reveled after button is clicked//
					 
					 $("#calcu").click(function(){														// the click function starts here//
   							$('#ResultBody').fadeIn("10000");
   						
   						var HorseType = $("input[name=horseType]:checked").val();						// calls out the horse type you have selected//
   								$("#ResultHead").html("<h2>Din häst är en : "+ HorseType + "</h2>");
   						
   						
   					
   					
   						var Horse = $("input[name=horse]:checked").val();					// calls out the horse feeding you have selected latt, normal, hard,//
   							
   						var weight = parseInt($('#weight2').val());
      					var weight2 = Math.pow(weight,0.75)*(0.5).toFixed(1);
						
							if (Horse == "Lite"){																							 
								var feed = parseInt(weight2).toFixed(1);
								}						
							else if (Horse == "Normal"){																							 
								var feed = parseInt(weight2 * 1.05).toFixed(1);
								}																															 
							else if (Horse == "Hard"){																								 
							 	var feed = parseInt(weight2 * 1.10).toFixed(1);
								}
							else if (Horse !== ""){																								 
							 	var feed = parseInt(weight2);
								}
						
						
						
						
						var prot = (feed * 6).toFixed(1);				// It works out the SMRC math formulas//
						
						var kal = (feed * 0.4).toFixed(1);				// It works out the calciam math formulas//
						
						var fos = (feed * 0.25).toFixed(1);				// It works out the fosfers math formulas//
						
						var mag = (feed * 0.15).toFixed(1);				// It works out the magnizam math formulas//
						
						var SE = (0.2 * (weight/100)).toFixed(1) ;		// It works out the SE math formulas//
					
						var TS = (1.75 * (weight/100)).toFixed(1);		// It works out the TS math formulas//
						
						
						$("#ResultText").html(
   								"<h3>Din häst energibehov är: </h3>" +
   							  	"Work feeding : "+ Horse +'<br/>' +
							  	"MJ : " + feed + "<br/>" +
							  	"Protein: " + prot +"g"+ '<br/>' +
							  	"Kalcium : " + kal +"g"+ '<br/>' +
							  	"Fosfers : " + fos +"g"+ '<br/>' +
							  	"Magnien : " + mag +"g"+ '<br/>' +
							  	"Seleniam : " + SE +"g"+ '<br/>' +
							  	"TS : " + TS +"g"+ '<br/>' 
							 	);
						
					
					
					var DräktigMJ = $("input[name=Months]:checked").val();							// this works out how much to feed a Draktig (pregnant)horse //
   							
   							if (DräktigMJ == 0){
   							$("#ResultText22");
								}
   							else if (DräktigMJ == "EightMonths"){																							 
								var PregnentHast = (feed / (100/15));
								var PregnentHastTotal = (parseInt(PregnentHast) + parseInt(feed)+1);		
								
								var SmbPregnent = (feed * 6);
								var SmbPregnentAdd = (PregnentHast * 12);
								var SmbPregnentResult = parseInt((SmbPregnentAdd)+(SmbPregnent)+3);
								
								var pregnantHastSum = ("<p>Din Dräktighäst MJ  " + PregnentHastTotal + "</p>");
								var pregnantHästSMB = ("<p>Din Dräktighäst SMB.RP  " + SmbPregnentResult + "</p>");
								
								$("#ResultText22").html(pregnantHastSum + pregnantHästSMB);
								}						
							
							else if (DräktigMJ == "TenMonths"){																							 
								var PregnentHast = (feed / (100/25));
								var PregnentHastTotal = (parseInt(PregnentHast) + parseInt(feed)+1);	
								
								var SmbPregnent = (feed * 6);
								var SmbPregnentAdd = (PregnentHast * 12);
								var SmbPregnentResult = parseInt((SmbPregnentAdd)+(SmbPregnent)+3);
								
								var pregnantHastSum = ("<p>Din Dräktighäst MJ  "+ PregnentHastTotal + "</p>");
								var pregnantHästSMB = ("<p>Din Dräktighäst SMB.RP  " + SmbPregnentResult + "</p>");
								
								$("#ResultText22").html(pregnantHastSum + pregnantHästSMB);
								}																															 
							
							else if (DräktigMJ == "ElevenMonths"){																								 
							 	var PregnentHast = (feed / (100/30));
								var PregnentHastTotal = (parseInt(PregnentHast) + parseInt(feed)+1);		
								
								var SmbPregnent = (feed * 6);
								var SmbPregnentAdd = (PregnentHast * 12);
								var SmbPregnentResult = parseInt((SmbPregnentAdd)+(SmbPregnent)+3);
								
								var pregnantHastSum = ("<p>Din Dräktighäst MJ  " + PregnentHastTotal + "</p>");
								var pregnantHästSMB = ("<p>Din Dräktighäst SMB.RP  " + SmbPregnentResult + "</p>");
								
								$("#ResultText22").html(pregnantHastSum + pregnantHästSMB);
								}
						
						
						
						
						
						
						var Horsefiger = $("input[name=horsefiger]:checked").val();			// this is formula is for work the text field available for the user//
																							// this is formular to work out the text field available for the user//
							if (Horsefiger == 0){
								 var sizeType = ("<p id='greenTxt'></p>");
								}
							else if (Horsefiger == "Smal"){																							 
								 var sizeType = ("<p id='redTxt'>Din häst är för smal,Se till att den äter mer</p>");

								}						
							else if (Horsefiger == "Normal"){																							 
								 var sizeType =("<p id ='greenTxt'>Din häst vikt är perfekt fortsätt så</p>");
								}																															 
							else if (Horsefiger == "Tjock"){																								 
							 	 var sizeType = ("<p id='redTxt'>Din häst är för fet,Ge den mindre mat</p>");
								}
							
						
						
						$("#ResultText2").html(
									"<h3>Du valde: </h3>" +
									"Horse Body figure : " + Horsefiger + sizeType +'<br/>');
						
				
						
						var HayType = $('#hayInput').val();												// calls out the horse HAY you have entered//
						
						var MJenergy = ($('#MJ1').val());
							 
							 if (MJenergy == 0){
								 var Energy = ("<p id='greenTxt'></p>");
								}
							else if (MJenergy == feed){
								 var Energy = ("<p id='greenTxt'>Din häst får tillräckligt med MJ </p>");
								}
							else if (MJenergy > feed){
							     var Energy = ("<p id='redTxt'>Din häst får för mycket MJ </p>");
								}
							else if (MJenergy < feed){
								 var Energy = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}
							else if (MJenergy !== ""){																								 
							 	var Energy = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}
					
					
					var SMBRPenergy = ($('#SMBRP1').val());

							
						 	if (SMBRPenergy == 0 ){
								 var ProtineEnergy = ("<p id='redTxt'> </p>");
								}
							

							else if (SMBRPenergy == prot){
								var ProtineEnergy =  ("<p id='greenTxt'>Din häst får tillräckligt med Protein </p>");

								}
							else if (SMBRPenergy > prot){
								var ProtineEnergy =  ("<p id='redTxt'>Din häst får för mycket Protein </p>");
								}
							else if (SMBRPenergy < prot){
								var ProtineEnergy =  ("<p id='redTxt'>Din häst får inte tillräckligt med Protein </p>");
								}
						
						
						
						var Caenergy = ($('#Ca1').val());

							
							if (Caenergy == 0){
								 var Calintake = ("<p id='redTxt'></p>");
								}
							
							else if (Caenergy == kal){
								var Calintake =  ("<p id='greenTxt'>Din häst får tillräckligt med Calcium </p>");

								}
							else if (Caenergy > kal){
								var Calintake =  ("<p id='redTxt'>Din häst får för mycket Calcium </p>");
								}
							else if (Caenergy < kal){
								var Calintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med Calcium </p>");
								}
							
						
						
						var Penergy =($('#Phos1').val());

							
							if (Penergy == 0){
								 var Fosintake = ("<p id='redTxt'></p>");
								}
						

							else if (Penergy == fos){
								var Fosintake =  ("<p id='greenTxt'>Din häst får tillräckligt med Fosfor </p>");

								}
							else if (Penergy > fos){
								var Fosintake =  ("<p id='redTxt'>Din häst får för mycket Fosfor </p>");
								}
							else if (Penergy < fos){
								var Fosintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med Fosfor </p>");
								}
							
						
						
						var Mgenergy = ($('#MG1').val());

							
							if (Mgenergy == 0){
								var MGintake = ("<p id='redTxt'></p>");
								}
							else if (Mgenergy == mag){
								var MGintake =  ("<p id='greenTxt'>Din häst får tillräckligt med Magnesium </p>");

								}
							else if (Mgenergy > mag){
								var MGintake =  ("<p id='redTxt'>Din häst får för mycket Magniseum </p>");
								}
							else if (Mgenergy < mag){
								var MGintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med Magniseum </p>");
								}
							

						
						var SEenergy = ($('#SE1').val());

							if (SEenergy == 0){
								var SEintake = ("<p id='redTxt'></p>");
								}
							else if (SEenergy == SE){
								var SEintake =  ("<p id='greenTxt'>Din häst får tillräckligt med Selenium </p>");

								}
							else if (SEenergy > SE){
								var SEintake =  ("<p id='redTxt'>Din häst får för mycket Selenium </p>");
								}
							else if (SEenergy < SE){
								var SEintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med Selenium </p>");
								}
							
						
						
						var TSenergy = ($('#TS1').val());

							if (TSenergy == 0){
								var TSintake = ("<p id='redTxt'></p>");
								}
							

							else if (TSenergy == TS){
								var TSintake =  ("<p id='greenTxt'>Din häst får tillräckligt med TS </p>");
								}
							else if (TSenergy > TS){
								var TSintake =  ("<p id='redTxt'>Din häst får för mycket TS </p>");

								}
							else if (TSenergy < TS){
								var TSintake =  ("<p id='redTxt'>Din häst får inte tillräckligt med TS </p>");
								}
						
						
						$("#ResultText3").html(
  									"<h3>Here are your chemical input result :</h3> " +
							  		"Your hay type is : "+ HayType +'<br/>' +'<br/>' +
							  		'MJ :' +  MJenergy +'<br/>'+ Energy +'Protein :' + SMBRPenergy +"g"+'<br/>'+ ProtineEnergy +
							 		'Kalcium :' +  Caenergy +"g"+'<br/>'+ Calintake +
									'Fosfers :' +  Penergy +"g"+'<br/>'+ Fosintake +	 
							 		'Magnien:' +  Mgenergy +"g"+'<br/>'+ MGintake +
							 		'Seleniam :' +  SEenergy +"g"+'<br/>'+ SEintake +
							 		'TS :' +  TSenergy +"g"+'<br/>'+ TSintake
							 		
							 		);
						
						
						
						
						
						
							
						
						var days = parseInt($('#horseWorkout').val());						// It works out the days Per Week math formulas//
						var daysPerWeek = (days/10).toFixed(1);														
						
						var skrit1 = parseInt($('#horseWorkoutSkritt').val());				// It gets the value of the horse Workout Skritt//
						var skrittCalc = ((skrit1 * daysPerWeek) * 0.2);					
						var skrittCalc2 = (skrittCalc).toFixed(1);	
						
						var TravAmout = parseInt($('#horseWorkoutTrav').val());				// It gets the value of the horse Workout Trav//
						var travCalc = ((TravAmout * daysPerWeek) * 1.3);							
						var travCalc2 = (travCalc).toFixed(1);
						
						var workoutMJ = (parseInt(skrittCalc2) + parseInt(travCalc2) + parseInt(feed)).toFixed(1); // It works out how much MJ needs to be added after the horse works out//
						
    					var aChecked = [];
							$(':checkbox:checked').each(function(){
      							aChecked.push(this.getAttribute("value"));
							}); 
       						 
 			
 			$("#ResultText4").html(
  									"<h3>Daily required energy after Trav and Skrit :</h3>" 
									+ daysPerWeek + " days per week"+'<br/>'
									+ skrittCalc + " Skrit hours per week" + '<br/>'
									+ travCalc +" Trav hours in week"+'<br/>'+'<br/>'
									+ workoutMJ +": MJ after working out "+'<br/>'
									+ 'Horse foods you have selected :'+ '<br/>'+  aChecked
									);		
  						
								  });
															
														
				var $el, leftPos, newWidth;
								        $mainNav2 = $("#menuBar-one");
								    
								    $mainNav2.append("<li id='magic-line-two'></li>");
								    
								    var $magicLineTwo = $("#magic-line-two");
								    
								    $magicLineTwo
								        .width($(".current_page_item_two").width())
								        .height($mainNav2.height())
								        .css("left", $(".current_page_item_two a").position().left)
								        .data("origLeft", $(".current_page_item_two a").position().left)
								        .data("origWidth", $magicLineTwo.width())
								        .data("origColor", $(".current_page_item_two a").attr("rel"));
								                
								    $("#menuBar-one a").hover(function() {
								        $el = $(this);
								        leftPos = $el.position().left;
								        newWidth = $el.parent().width();
								        $magicLineTwo.stop().animate({
								            left: leftPos,
								            width: newWidth,
								            backgroundColor: $el.attr("rel")
								        })
								    }, function() {
								        $magicLineTwo.stop().animate({
								            left: $magicLineTwo.data("origLeft"),
								            width: $magicLineTwo.data("origWidth"),
								            backgroundColor: $magicLineTwo.data("origColor")
								        });    
								    });
								    
								    /* Kick IE into gear */
								    $(".current_page_item_two a").mouseenter();
								    
								
});
				
	
 
 




