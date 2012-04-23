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
							else if (Horse == "Hard"){																								 
							 	var feed = parseInt(weight2 * 1.10).toFixed(1);
								}
							else if (Horse !== ""){																								 
							 	var feed = parseInt(weight2) || 0;
								}
						
						var prot = parseInt(feed * 6).toFixed(1);				// It works out the SMRC math formulas//
						var kal = parseInt(feed * 0.4).toFixed(1);				// It works out the calciam math formulas//
						var fos = parseInt(feed * 0.25).toFixed(1);				// It works out the fosfers math formulas//
						var mag = parseInt(feed * 0.15).toFixed(1);				// It works out the magnizam math formulas//
						var SE = parseInt(0.2 * (weight/100)).toFixed(1) ;		// It works out the SE math formulas//
						var TS = parseInt(1.75 * (weight/100)).toFixed(1);		// It works out the TS math formulas//
						
						
					
					if((weight2 == 0)){
						$("#ResultText").hide();
						}
					else {	
						 $("#ResultText").show();
						 $("#ResultText").html(
   								"<h3>Din häst vikt är : " + weight +' Kg' + "</h3>"+
   								"<h3>Din häst energibehov är: </h3>" +
   							  	"<h4>"+"Utfodring typ : "+ Horse2 +'<br/>'+"</h4>"+
							  	"MJ : " + feed + "<br/>" +
							  	"Protein: " + prot +"Kg"+ '<br/>' +
							  	"Kalcium : " + kal +"g"+ '<br/>' +
							  	"Fosfers : " + fos +"g"+ '<br/>' +
							  	"Magnien : " + mag +"g"+ '<br/>' +
							  	"Seleniam : " + SE +"g"+ '<br/>' +
							  	"TS : " + TS +"g"+ '<br/>' 
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
							
   				
							
					
					
					var HayType = $('#hayInput').val();												// calls out the horse HAY you have entered//
					var smallSize = ("<p id='redTxt'> Din häst är för smal,Se till att den äter mer. </p>");
					var normaSize =("<p id ='greenTxt'> Din häst vikt är perfekt fortsätt så. </p>");
					var fatSize = ("<p id='redTxt'> Din häst är för fet,Ge den mindre mat. </p>");
					
					var Horsefiger = $("input[name=horsefiger]:checked").val();				// this is formula is for work the text field available for the user//
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
					
					
					
					var MJenergy =  ($('#MJ1').val() || 0);
					var MJenergy2 = (parseInt(MJenergy));		
					var EnergyLeft = ((feed) - (MJenergy2));	
					var Leftenergy = (parseInt(EnergyLeft));	
							
							if (MJenergy2 == 0){
								 var EnergyIntake = ('');
								}
							else if (MJenergy2 == feed){
								 var EnergyIntake = MJenergy2+rightAmount;
								}
							else if (MJenergy2 > feed){
							    var EnergyIntake = MJenergy2+tooMuchAmount+''+Leftenergy+' MJ';
							     }
							else if (MJenergy2 < feed){
								 var EnergyIntake = MJenergy2+smallAmount+''+Leftenergy+' MJ';
								}
							else if (MJenergy2 !== ""){																								 
							 	var EnergyIntake = MJenergy2+smallAmount;
							 	}
									
					
					var SMBRPenergy = ($('#SMBRP1').val()|| 0);
					var SMBRPenergy2 = (parseInt(SMBRPenergy));
					var ProtineLeft = ((prot) - (SMBRPenergy2));
					var ProtineLeft2 = (parseInt(ProtineLeft));		
						if (SMBRPenergy2 == 0 ){
								var  ProtineIntake = ('');
								}
							else if (SMBRPenergy2 == prot){
								var  ProtineIntake = SMBRPenergy2+rightAmount;
								}
							else if (SMBRPenergy2 > prot){
								var   ProtineIntake = SMBRPenergy2+tooMuchAmount+''+ProtineLeft2+' Protein';
								}
							else if (SMBRPenergy2 < prot){
								var   ProtineIntake = SMBRPenergy2+smallAmount+''+ProtineLeft2+' Protein';
								}
						
					
					var Caenergy = ($('#Ca1').val()|| 0);
					var Caenergy2 = (parseInt(Caenergy));
					var CalciumLeft = ((kal) - (Caenergy2));
					var CalciumLeft2 = (parseInt(CalciumLeft));		
						if (Caenergy2 == 0){
								 var CalcmIntake = ('');
								}
							 else if (Caenergy2 == kal){
								var CalcmIntake = Caenergy2+rightAmount;
								}
							else if (Caenergy2 > kal){
								var CalcmIntake = Caenergy2+tooMuchAmount+''+CalciumLeft2+' Kalcium';
								}
							else if (Caenergy2 < kal){
								var CalcmIntake = Caenergy2+smallAmount+''+CalciumLeft2+' Kalcium';
								}
						
					
					var Penergy = ($('#Phos1').val()|| 0);
					var Penergy2 = (parseInt(Penergy));
					var FosferLeft = ((fos) - (Penergy2));
					var FosferLeft2 = (parseInt(FosferLeft));	
								
							if (Penergy2 == 0){
								 var FosIntake = ('');
								}
							else if (Penergy2 == fos){
								var FosIntake = Penergy2+rightAmount;
								}
							else if (Penergy2 > fos){
								var FosIntake =  Penergy2+tooMuchAmount+''+FosferLeft2+' Fosfers';
								}
							else if (Penergy2 < fos){
								var FosIntake =  Penergy2+smallAmount+''+FosferLeft2+' Fosfers';
								}
							
					
					
					var Mgenergy = ($('#MG1').val()|| 0);
					var Mgenergy2 =(parseInt(Mgenergy));
					var MagLeft = ((mag) - (Mgenergy2));
					var MagLeft2 = (parseInt(MagLeft));		
								
							if (Mgenergy2 == 0){
								var MagIntake = ('');
								}
							else if (Mgenergy2 == mag){
								var MagIntake = Mgenergy2+rightAmount;
								}
							else if (Mgenergy2 > mag){
								var MagIntake = Mgenergy2+tooMuchAmount+''+MagLeft2+' Magnesium';
								}
							else if (Mgenergy2 < mag){
								var MagIntake = Mgenergy2+smallAmount+''+MagLeft2+' Magnesium';
								}
							
					
					var SEenergy = ($('#SE1').val()|| 0);
					var SEenergy2 = parseInt(SEenergy);	
					var SELeft = ((SE) - (SEenergy2));
					var SELeft2 = (parseInt(SELeft));	
							
							if (SEenergy2 == 0){
								var SEIntake = ('');
								}
							else if (SEenergy2 == SE){
								var SEIntake =  SEenergy2+rightAmount;
								}
							else if (SEenergy2 > SE){
								var SEIntake = SEenergy2+tooMuchAmount+''+SELeft2+' Seleniam';
								}
							else if (SEenergy2 < SE){
								var SEIntake = SEenergy2+smallAmount+''+SELeft2+' Seleniam';
								}
						 
					
					var TSenergy =($('#TS1').val() || 0);
					var TSenergy2 = parseInt(TSenergy);	
					var TSLeft = ((TS) - (TSenergy2));
					var TSLeft2 = (parseInt(TSLeft));		
							
							if (TSenergy2 == 0){
								var TSIntake = ('');
								}
							else if (TSenergy2 == TS){
								var TSIntake = TSenergy2+rightAmount ;
								}
							else if (TSenergy2 > TS){
								var TSIntake = TSenergy2+tooMuchAmount+''+TSLeft2+' TS';
								}
							else if (TSenergy2 < TS){
								var TSIntake = TSenergy2+smallAmount+''+TSLeft2+' TS';	
								}
						
					var HayType = $('#hayInput').val();	
						
						
						if ((MJenergy == 0)){
							$("#Result11").hide();
						}else{
							$("#Result11").show();
						  	$("#Result11").html(
  									"<h3>Here are your chemical input result 1:</h3> " +
									"<h4>"+'Din hö du har:' + HayType +"</h4>"+
							  		'MJ :' + EnergyIntake +'<br/>'+'<br/>'+
							  		'Protein :'+  ProtineIntake +'<br/>'+'<br/>'+
							 		'Kalcium :'+ CalcmIntake +'<br/>'+'<br/>'+
									'Fosfers :' + FosIntake +'<br/>'+'<br/>'+	 
							 		'Magnien:' +  MagIntake +'<br/>'+'<br/>'+
							 		'Seleniam :' + SEIntake +'<br/>'+'<br/>'+
							 		'TS :' + TSIntake
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
				
				var FoodCheckbox = ($('.checkbox').val()|| 0);	
					if (FoodCheckbox == 0){
							$("#ResultFoodArry").hide();
						}else{
							$("#ResultFoodArry").show();
							$("#ResultFoodArry").html('Horse foods you have selected :'+ '<br/>' + foodCheckBox);
							
							
						}
		});
				
});
 
 




