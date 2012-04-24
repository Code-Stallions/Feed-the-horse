	$(document).ready(function(){	
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
					},function() {
						$magicLineTwo.stop().animate({
						left: $magicLineTwo.data("origLeft"),
						width: $magicLineTwo.data("origWidth"),
						backgroundColor: $magicLineTwo.data("origColor")
					});    
				});
				/* Kick IE into gear */
				$(".current_page_item_two a").mouseenter();
		
			
			$('.numbersOnly').keyup(function () { 										// It will only allow numbers to be entered in the text field//
    		this.value = this.value.replace(/[^0-9\.]/g,'');
			}); 	
			
			$('#ResultBody').hide();												// It hiddes the result window but its reveled after button is clicked//
			$("#calcu").click(function(){									// the click function starts here//
   			$('#ResultBody').fadeIn("10000");
   					
   					
   						var HorseTypeInput =("<a>Din häst är en : </a>");
   						var HorseType = ($("input[name=horseType]:checked").val()|| 0);	// calls out the horse type you have selected//
   							if (HorseType == "" || 0){
   								var HorseType2 = alert("Vänligen fil i Vikt eller Häst typen");
   								$('#ResultBody').hide();	
   							}else{
   								$("#ResultHead").show();
   								var HorseType2 = ("<h3>"+HorseTypeInput+HorseType+"</h3>");
   								}
   						
   							$("#ResultHead").html(HorseType2);		
   						
   								
   						
   						var Horse = $("input[name=horse]:checked").val();					// calls out the horse feeding you have selected latt, normal, hard,//
   							if (Horse == undefined){
   								var Horse2 = ('');
   								}
   							else
   								{
   								var Horse2 = (Horse);
   								}
   						
   						
   						var weight = parseInt($('#weight2').val()|| 0);					// It works out the MJ : Energy math formulas//
      					var weight2 = Math.pow(weight,0.75)*(0.5).toFixed(1);
						
							if (Horse == "Lite"){																							 
								var feed = parseInt(weight2).toFixed(1);
								}						
							else if (Horse == "Normal"){																							 
								var feed = parseInt(weight2 * 1.05).toFixed(1);
								}																															 
							else if (Horse == "Svart"){																								 
							 	var feed = parseInt(weight2 * 1.10).toFixed(1);
								}
							else if (Horse !== ""){																								 
							 	var feed = parseInt(weight2) || 0;
								}
						
						var prot = (feed * 6).toFixed(1);				// It works out the SMRC math formulas//
						var prot2 = parseInt(prot);
						
						var kal = (feed * 0.38).toFixed(1);				// It works out the calciam math formulas//
						var kal2 = parseInt(kal);
						
						var fos = (feed * 0.25).toFixed(1);				// It works out the fosfers math formulas//
						var fos2 = parseInt(fos);
						
						var mag = (feed * 0.15).toFixed(1);				// It works out the magnizam math formulas//
						var mag2 = parseInt(mag);
						
						var SE =(0.2 * (weight/100)).toFixed(1) ;		// It works out the SE math formulas//
						var SE2 =parseInt(SE);
						
						var TS = (1.75 * (weight/100)).toFixed(1);		// It works out the TS math formulas//
						var TS2 = parseInt(TS);
						
					
					if((weight2 == 0)){
						$("#ResultText").hide();
						}
					else {	
						 $("#ResultText").show();
						 $("#ResultText").html(
   								"<h3>Din häst vikt är : " + weight +' Kg' + "</h3>"+
   								"<h3>Din häst dagsbehov är: </h3>" +
   							  	"<h4>"+"Utfodring typ : "+ Horse2 +'<br/>'+"</h4>"+
							  	"Energi (MJ) : " + feed + "<br/>" +
							  	"Smältbart protein : " + prot +"g"+ '<br/>' +
							  	"Kalcium : " + kal +"g"+ '<br/>' +
							  	"Fosfers : " + fos +"g"+ '<br/>' +
							  	"Magnien : " + mag +"g"+ '<br/>' +
							  	"Seleniam : " + SE +"g"+ '<br/>' +
							  	"TS : " + TS +"Kg"+ '<br/>' 
							 	);
						}
					
					var DraktigCheckbox = ($("input[id=Draktig]:checked").val()|| 0);
					var DräktigMJ = ($("input[name=Months]:checked").val()||0);							// this works out how much to feed a Draktig (pregnant)horse //
   							if (DräktigMJ,DraktigCheckbox == 0 ){
   									$("#DraktigResult").hide();
								}
   							
   							else if (DräktigMJ == "EightMonths"){																							 
								var PregnentHast = (feed / (100/15));
								var PregnentHastTotal = (parseInt(PregnentHast) + parseInt(feed)+1);		
								var SmbPregnent = (feed * 6);
								var SmbPregnentAdd = (PregnentHast * 12);
								var SmbPregnentResult = parseInt((SmbPregnentAdd)+(SmbPregnent)+3);
								
								var MonthPreg = ("<h3>"+HorseType+' 8/9 månad'+"</h3>");
								var pregnantHastSum = ("<p>Din Dräktighäst MJ:  " + PregnentHastTotal + "</p>");
								var pregnantHästSMB = ("<p>Din Dräktighäst Protein:  " + SmbPregnentResult + "</p>");
								$("#DraktigResult").show();
								$("#DraktigResult").html(MonthPreg+pregnantHastSum + pregnantHästSMB);
								}						
							else if (DräktigMJ == "TenMonths"){																							 
								var PregnentHast = (feed / (100/25));
								var PregnentHastTotal = (parseInt(PregnentHast) + parseInt(feed)+1);	
								var SmbPregnent = (feed * 6);
								var SmbPregnentAdd = (PregnentHast * 12);
								
								var MonthPreg = ("<h3>"+HorseType+' 10  månad'+"</h3>");
								var SmbPregnentResult = parseInt((SmbPregnentAdd)+(SmbPregnent)+3);
								var pregnantHastSum = ("<p>Din Dräktighäst MJ:  "+ PregnentHastTotal + "</p>");
								var pregnantHästSMB = ("<p>Din Dräktighäst Protein:  " + SmbPregnentResult + "</p>");
								$("#DraktigResult").show();
								$("#DraktigResult").html(MonthPreg+pregnantHastSum + pregnantHästSMB);
								}																															 
							else if (DräktigMJ == "ElevenMonths"){																								 
							 	var PregnentHast = (feed / (100/30));
								var PregnentHastTotal = (parseInt(PregnentHast) + parseInt(feed)+1);		
								var SmbPregnent = (feed * 6);
								var SmbPregnentAdd = (PregnentHast * 12);
								var SmbPregnentResult = parseInt((SmbPregnentAdd)+(SmbPregnent)+3);
								
								var MonthPreg = ("<h3>"+HorseType+' 11  månad'+"</h3>");
								var pregnantHastSum = ("<p>Din Dräktighäst MJ:  " + PregnentHastTotal + "</p>");
								var pregnantHästSMB = ("<p>Din Dräktighäst Protein:  " + SmbPregnentResult + "</p>");
								$("#DraktigResult").show();
								$("#DraktigResult").html(MonthPreg+pregnantHastSum + pregnantHästSMB);
								}
							
   				
							
					
					
					var HayType = $('#hayInput').val();															// calls out the horse HAY you have entered//
					var smallSize = ("<p id='redTxt'> Din häst är för smal,Se till att den äter mer. </p>");
					var normaSize =("<p id ='greenTxt'> Din häst vikt är perfekt fortsätt så. </p>");
					var fatSize = ("<p id='redTxt'> Din häst är för fet,Ge den mindre mat. </p>");
					
					var Horsefiger = $("input[name=horsefiger]:checked").val();					// this is formula is for work the text field available for the user//
							if (Horsefiger == undefined){
								$('#ResultText2').hide();
								}
							else if (Horsefiger == "Smal"){																							 
								$("#ResultText2").show();
								$("#ResultText2").html( "<h3>Du valde smal eller tjock : "+ Horsefiger +" </h3> " + smallSize +'<br/>');
								}						
							else if (Horsefiger == "Normal"){																							 
								$("#ResultText2").show();
								$("#ResultText2").html( "<h3>Du valde smal eller tjock : "+ Horsefiger + " </h3> " + normaSize + '<br/>');
								}																															 
							else if (Horsefiger == "Tjock"){																								 
							 	$("#ResultText2").show();
							 	$("#ResultText2").html( "<h3>Du valde smal eller tjock : "+ Horsefiger + " </h3> " + fatSize + '<br/>');
								}
							
							
					
					var smallAmount = ("<a id='redTxt'> : Din häst får för lite med så tillsätt: </a>");
					var rightAmount = ("<a id='greenTxt'>: Din häst får tillräckligt med: </a>");
					var tooMuchAmount = ("<a id='redTxt'> : Din häst får för mycket så minus: </a>");
					
					
					
					
						
					var HayFeedWeight = ($('#FoodWeight').val() || 0);
					var HayFeedTotal = (parseInt(HayFeedWeight));		
					
					
					var MJenergy2 = ($('#MJ1').val());
					var EnergyLeft = ((HayFeedTotal) * (MJenergy2));	
					var MJminus = (feed - EnergyLeft).toFixed(1);	
					var MJminus2 =(MJminus); 	
						if (EnergyLeft == undefined){
								 var EnergyIntake = ('');
								}
							else if (EnergyLeft == feed){
								 var EnergyIntake = rightAmount;
								}
							else if (EnergyLeft > feed){
							    var EnergyIntake = tooMuchAmount+''+ MJminus2 +' MJ';
							     }
							else if (EnergyLeft < feed){
								 var EnergyIntake = smallAmount+''+MJminus2+' MJ';
								}
								
					var SMBRPenergy2 = ($('#SMBRP1').val());
					var ProtineLeft2 = ((HayFeedTotal) * (SMBRPenergy2));
					var SMBRPminus =  (prot - ProtineLeft2).toFixed(1);
					var SMBRPminus2 = (SMBRPminus);	
						if (ProtineLeft2 == undefined || 0){
								var  ProtineIntake = ('');
								}
							else if (ProtineLeft2 == prot){
								var  ProtineIntake = rightAmount;
								}
							else if (ProtineLeft2 > prot){
								var   ProtineIntake = tooMuchAmount+''+SMBRPminus2+'g';
								}
							else if (ProtineLeft2 < prot){
								var   ProtineIntake = smallAmount+''+SMBRPminus2+'g';
								}
					
					
					var Caenergy2 = ($('#Ca1').val());
					var CalciumLeft2 = ((HayFeedTotal) * (Caenergy2));
					var CALCminus =  (kal - CalciumLeft2).toFixed(1);		
					var CALCminus2 = (CALCminus);		
						if (CalciumLeft2 == undefined){
								 var CalcmIntake = ('');
								}
							 else if (CalciumLeft2 == kal){
								var CalcmIntake = rightAmount;
								}
							else if (CalciumLeft2 > kal){
								var CalcmIntake = tooMuchAmount+''+CALCminus2+'g';
								}
							else if (CalciumLeft2 < kal){
								var CalcmIntake = smallAmount+''+CALCminus2+'g';
								}			
					
					var Penergy2 = ($('#Phos1').val());
					var FosferLeft2 = ((HayFeedTotal) * (Penergy2));
					var FOSFminus = (fos - FosferLeft2).toFixed(1);
					var FOSFminus2 = (FOSFminus);		
							if (FosferLeft2 == undefined){
								 var FosIntake = ('');
								}
							else if (FosferLeft2 == fos){
								var FosIntake = rightAmount;
								}
							else if (FosferLeft2 > fos){
								var FosIntake =  tooMuchAmount+''+FOSFminus2+'g';
								}
							else if (FosferLeft2 < fos){
								var FosIntake =  smallAmount+''+FOSFminus2+'g';
								}
					
					var Mgenergy2 = ($('#MG1').val());
					var MagLeft2 = ((HayFeedTotal) * (Mgenergy2));
					var MAGminus = (mag - MagLeft2).toFixed(1);
					var MAGminus2 = (MAGminus);		
							if (MagLeft2 == undefined){
								var MagIntake = ('');
								}
							else if (MagLeft2 == mag){
								var MagIntake = rightAmount;
								}
							else if (MagLeft2 > mag){
								var MagIntake = tooMuchAmount+''+ MAGminus2+' g';
								}
							else if (MagLeft2 < mag){
								var MagIntake = smallAmount+''+ MAGminus2+' g';
								}
					
					var SEenergy2 =($('#SE1').val());
					var SELeft2 =  ((HayFeedTotal) * (SEenergy2));
					var SEminus = (SE - SELeft2).toFixed(1);	
					var SEminus2 = (SEminus);
						 if (SELeft2 == undefined){
								var SEIntake = ('');
								}
							else if (SELeft2 == SE){
								var SEIntake =  rightAmount;
								}
							else if (SELeft2 > SE){
								var SEIntake = tooMuchAmount+''+SEminus2+'g';
								}
							else if (SELeft2 < SE){
								var SEIntake = smallAmount+''+SEminus2+'g';
								}
					
					var TSenergy2 =($('#TS1').val());
					var TSLeft2 = ((HayFeedTotal) * (TSenergy2));
					var TSminus = (TS - TSLeft2).toFixed(1);	
					var TSminus2 = (TSminus);	
							if (TSLeft2 == undefined){
								var TSIntake = ('');
								}
							else if (TSLeft2 == TS){
								var TSIntake = rightAmount;
								}
							else if (TSLeft2 > TS){
								var TSIntake = tooMuchAmount+''+TSminus2+' g';
								}
							else if (TSLeft2 < TS){
								var TSIntake = smallAmount+''+TSminus2+' g';	
								}
					
					
					
					
					
					var MJandSMRP = (EnergyLeft / ProtineLeft2).toFixed(1);		
					
					var CaAndP = (FosferLeft2 / CalciumLeft2).toFixed(1);
					
					
					if ((HayFeedWeight == 0)){
							$("#Result11").html("<h3 id='redTxt'> Snäll och skriv i ditt hös vikt'</h3>");
								
						}else{
							$("#Result11").show();
						  	$("#Result11").html(
  									"<h3>Here are your chemical input result 1:</h3> " +
									"<h3>"+'Din hö du har:' + HayType +"</h3>"+
							  		"<h4>"+"Din Hös vikt: "+ HayFeedTotal +" Kg</h4>"+
							  		"<h3>"+"Ditt hös egenskaper"+"</h3>"+
							  		'Energi (MJ) :' +  EnergyLeft + EnergyIntake+'<br/>'+'<br/>'+
							  		'Smältbart protein :'+  ProtineLeft2+' g' + ProtineIntake +'<br/>'+'<br/>'+
							 		'Kalcium (g) :'+ CalciumLeft2+' g' + CalcmIntake+'<br/>'+'<br/>'+
									'Fosfor (g) :' + FosferLeft2+' g' + FosIntake +'<br/>'+'<br/>'+	 
							 		'Magnesium (g):' +  MagLeft2+' g' + MagIntake+'<br/>'+'<br/>'+
							 		'Seleniam (g) :' +  SELeft2 +' g'+ SEIntake+'<br/>'+'<br/>'+
							 		'TS :' + TSLeft2 + TSIntake+'<br/>'+'<br/>'+
							 		"<h3>Din MJ/SMBRP and CA/P du har</h3>"+
							 		'MJ/SMBRP :' + MJandSMRP+'<br/>'+
							 		'CA/P :' + CaAndP +'<br/>'
							 	);
  							
  							}
						var days = parseInt($('#horseWorkout').val() || 0);						// It works out the days Per Week math formulas//
						var daysPerWeek = (days/10).toFixed(1);														
						
						var skrit1 = parseInt($('#horseWorkoutSkritt').val());				// It gets the value of the horse Workout Skritt//
						var skrittCalc = parseInt((skrit1 * daysPerWeek) * 0.2);					
						var skrittCalc2 = parseInt(skrittCalc).toFixed(1);	
						
						var TravAmout = parseInt($('#horseWorkoutTrav').val());				// It gets the value of the horse Workout Trav//
						var travCalc = parseInt((TravAmout * daysPerWeek) * 1.3);							
						var travCalc2 = parseInt(travCalc).toFixed(1);
						
						
						var workoutMJ = (parseInt(skrittCalc2) + parseInt(travCalc2) + parseInt(feed)).toFixed(1); // It works out how much MJ needs to be added after the horse works out//
						if ((days == 0)){
							$("#ResultTravGalopp").hide();
						}else{
							$("#ResultTravGalopp").show();
							$("#ResultTravGalopp").html(
  									"<h3>Din häst Trav/Galopp är</h3>"
									+ skrittCalc + ": Skrit hours per week" + '<br/>'
									+ travCalc +": Trav hours in week"+'<br/>'+'<br/>'
									+"<h4>Din häst energibehov är: </h4>" +
									+ workoutMJ +": MJ efter Trav/Galopp "+'<br/>'
									);		
  								}
		
											
					// An array with the different kinds of food for the horses \\
						// Name, TS(%), MJ, smb.rp(g), Ca(g), P(g), Mg(g) \\
							// Above is the order I stored them in \\
					// Ex. proteteinFoder[0][1] will bring out the MJ of Bryggerijäst \\			 
					var proteinFoder = new Array ();
						
						proteinFoder[0] = new Array ( "Bryggerijäst", 90 , 12.2 , 394 , 2 , 14 , 2.3 );
						proteinFoder[1] = new Array ( "Linfrö", 93 , 15.6 , 180 , 2.6 , 5.3 , 3.6 );
						proteinFoder[2] = new Array ( "Potatisprotein", 90 , 13.1 , 685 , 1 , 4 ,1 );
						proteinFoder[3] = new Array ( "Raps (frö)", 93 , 16.5 , 154 , 4 , 8 , 2.2 );
						proteinFoder[4] = new Array ( "Sojamjöl", 87 , 11.7 , 390 , 2.8 , 6.3 , 2.3 );
						proteinFoder[5] = new Array ( "Sojaböna", 87 , 12.1 , 299 , 2.3 , 5.5 , 2.5 );
						proteinFoder[6] = new Array ( "Solros", 92 , 8.6 , 247 , 3.2 , 9.8 , 5.2 );
						proteinFoder[7] = new Array ( "Ärter", 87 , 11.1 , 176 , 0.8 , 3.7 , 1.1 );
					
					var foodCheckBox = '';
					
					var horseFoodChecked = $('input[name=food]:checked'); 	// check checkboxes with name="food" if checked
						
					if (horseFoodChecked.val() == undefined){ 				// if nothing is checked, then return nothing.
						foodCheckBox = ('');
					}
					else{
						$.each(horseFoodChecked, function(){ 
						foodCheckBox = (
							proteinFoder[horseFoodChecked.val()][0] + " har " + 
							proteinFoder[horseFoodChecked.val()][1] + "% TS, " + 
							proteinFoder[horseFoodChecked.val()][2] + " MJ, " + 
							proteinFoder[horseFoodChecked.val()][3] + " smb.rp, " + 
							proteinFoder[horseFoodChecked.val()][4] + " Ca, " + 
							proteinFoder[horseFoodChecked.val()][5] + " P, " + 
							proteinFoder[horseFoodChecked.val()][6] + " Mg <br>" 
							)
						});
					}
									
									var FoodCheckbox = $('input[name=food]:checked' || 0);	
										if (FoodCheckbox == 0){
												$("#ResultFoodArry").hide();
											}else{
												$("ResultFoodArry").show();
												$("ResultFoodArry").html('Horse foods you have selected :'+ '<br/>' + foodCheckBox);
												
												
											}
							});
									
					});
					 
					 




