	$(document).ready(function(){	
		
		$('.numbersOnly').keyup(function () { 										// It will only allow numbers to be entered in the text field//
    		this.value = this.value.replace(/[^0-9\.]/g,'');
			}); 	
			
		
		$("#icon1").hover(function(){							// It allow info box to show everytime info icon is hoverd //
    						 $("#info1").fadeIn("fast");
								},
									function(){
    							$("#info1").fadeOut();
							});
		
		$("#icon2").hover(function(){
    						 $("#info2").fadeIn("fast");
								},
									function(){
    							$("#info2").fadeOut();
							});
							
		$("#icon3").hover(function(){
    						 $("#info3").fadeIn("fast");
								},
									function(){
    							$("#info3").fadeOut();
							});				
							
		$("#icon4").hover(function(){
    						 $("#info4").fadeIn("fast");
								},
									function(){
    							$("#info4").fadeOut();
							});					
		$("#icon5").hover(function(){
    						 $("#info5").fadeIn("fast");
								},
									function(){
    							$("#info5").fadeOut();
							});					
		$("#icon6").hover(function(){
    						 $("#info6").fadeIn("fast");
								},
									function(){
    							$("#info6").fadeOut();
							});					
		$("#icon7").hover(function(){
    						 $("#info7").fadeIn("fast");
								},
									function(){
    							$("#info7").fadeOut();
							});					
		$("#icon8").hover(function(){
    						 $("#info8").fadeIn("fast");
								},
									function(){
    							$("#info8").fadeOut();
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
   							
   							 
    						  
   							
   							
   							
   						var Horse = $("input[name=horse]:checked").val();					// calls out t	he horse feeding you have selected latt, normal, hard,//
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
   												
   							else if (DräktigMJ == "EightMonths"){						// formla feeding a Draktig IF Else 8/9, 10 and 11 months (pregnant)horse//					 
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
					
					var smallSize = ("<p id='redTxt'> Din häst är för smal,Se till att den äter mer. </p>");   //  text variable if the horse is too fat / too skinny //	
					var normaSize =("<p id ='greenTxt'> Din häst vikt är perfekt fortsätt så. </p>");
					var fatSize = ("<p id='redTxt'> Din häst är för fet,Ge den mindre mat. </p>");
					
					var Horsefiger = $("input[name=horsefiger]:checked").val();					// radio checkbox if the horse is fat or skinny //
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
							
							
					
					var smallAmount = ("<a id='redTxt'> : Din häst får för lite med så tillsätt: </a>");  //  text variable if the horse takes too much  / too little energy//	
					var rightAmount = ("<a id='greenTxt'>: Din häst får tillräckligt med: </a>");
					var tooMuchAmount = ("<a id='redTxt'> : Din häst får för mycket så minus: </a>");
					
					var HayFeedWeight = ($('#FoodWeight').val() || 0);		    						// user input area for food amount they want to feed in KG //	
					var HayFeedTotal = (parseInt(HayFeedWeight));		
					
					var MJenergy1 = ($('#MJ1').val());										//  1st ENERGY break down field and formula to work out too much / too little energy //
					var EnergyLeft = ((HayFeedTotal) * (MJenergy1));	
					var MJminus1 = (feed - EnergyLeft).toFixed(1);	
							if (EnergyLeft == undefined){					
								 var EnergyIntake1 = ('');
								}
							else if (EnergyLeft == feed){
								 var EnergyIntake1 = rightAmount;
								}
							else if (EnergyLeft > feed){
							    var EnergyIntake1 = tooMuchAmount+''+ MJminus1 +' MJ';
							     }
							else if (EnergyLeft < feed){
								 var EnergyIntake1 = smallAmount+''+MJminus1+' MJ';
								}
								
					var SMBRPenergy1 = ($('#SMBRP1').val());								//  1st SMBRP break down field and formula to work out too much / too little energy //
					var ProtineLeft1 = ((HayFeedTotal) * (SMBRPenergy1));
					var SMBRPminus1 =  (prot - ProtineLeft1).toFixed(1);
							if (ProtineLeft1 == undefined || 0){				
								var  ProtineIntake1 = ('');
								}
							else if (ProtineLeft1 == prot){
								var  ProtineIntake1 = rightAmount;
								}
							else if (ProtineLeft1 > prot){
								var   ProtineIntake1 = tooMuchAmount+''+SMBRPminus1+'g';
								}
							else if (ProtineLeft1 < prot){
								var   ProtineIntake1 = smallAmount+''+SMBRPminus1+'g';
								}
					
					
					var Caenergy1 = ($('#Ca1').val());										//  1st Kalcium break down field and formula to work out too much / too little energy //
					var CalciumLeft1 = ((HayFeedTotal) * (Caenergy1));
					var CALCminus1 =  (kal - CalciumLeft1).toFixed(1);		
							if (CalciumLeft1 == undefined){
								 var CalcmIntake1 = ('');
								}
							 else if (CalciumLeft1 == kal){
								var CalcmIntake1 = rightAmount;
								}
							else if (CalciumLeft1 > kal){
								var CalcmIntake1 = tooMuchAmount+''+CALCminus1+'g';
								}
							else if (CalciumLeft1 < kal){
								var CalcmIntake1 = smallAmount+''+CALCminus1+'g';
								}			
					
					var Penergy1 = ($('#Phos1').val());										//  1st FOSFERS break down field and formula to work out too much / too little energy //
					var FosferLeft1 = ((HayFeedTotal) * (Penergy1));
					var FOSFminus1 = (fos - FosferLeft1).toFixed(1);
							if (FosferLeft1 == undefined){
								 var FosIntake = ('');
								}
							else if (FosferLeft1 == fos){
								var FosIntake1 = rightAmount;
								}
							else if (FosferLeft1 > fos){
								var FosIntake1 =  tooMuchAmount+''+FOSFminus1+'g';
								}
							else if (FosferLeft1 < fos){
								var FosIntake1 =  smallAmount+''+FOSFminus1+'g';
								}
					
					var Mgenergy1 = ($('#MG1').val());									//  1st Magnesium break down field and formula to work out too much / too little energy //
					var MagLeft1 = ((HayFeedTotal) * (Mgenergy1));
					var MAGminus1 = (mag - MagLeft1).toFixed(1);
							if (MagLeft1 == undefined){
								var MagIntake1 = ('');
								}
							else if (MagLeft1 == mag){
								var MagIntake1 = rightAmount;
								}
							else if (MagLeft1 > mag){
								var MagIntake1 = tooMuchAmount+''+ MAGminus1+' g';
								}
							else if (MagLeft1 < mag){
								var MagIntake1 = smallAmount+''+ MAGminus1+' g';
								}
					
					var SEenergy1 =($('#SE1').val());								//  1st Seleniam break down field and formula to work out too much / too little energy //
					var SELeft1 =  ((HayFeedTotal) * (SEenergy1));
					var SEminus1 = (SE - SELeft1).toFixed(1);	
							if (SELeft1 == undefined){
								var SEIntake1 = ('');
								}
							else if (SELeft1 == SE){
								var SEIntake1 =  rightAmount;
								}
							else if (SELeft1 > SE){
								var SEIntake1 = tooMuchAmount+''+SEminus1+'g';
								}
							else if (SELeft1 < SE){
								var SEIntake1 = smallAmount+''+SEminus1+'g';
								}
					
					var TSenergy1 =($('#TS1').val());							//  1st TS break down field and formula to work out too much / too little energy //
					var TSLeft1 = ((HayFeedTotal) * (TSenergy1));	
					var TSminus1 = (TS - TSLeft1).toFixed(1);	
							if (TSLeft1 == undefined){
								var TSIntake1 = ('');
								}
							else if (TSLeft1 == TS){
								var TSIntake1 = rightAmount;
								}
							else if (TSLeft1 > TS){
								var TSIntake1 = tooMuchAmount+''+TSminus1+' g';
								}
							else if (TSLeft1 < TS){
								var TSIntake1 = smallAmount+''+TSminus1+' g';	
								}
					
					var MJandSMRP1 = (EnergyLeft / ProtineLeft1).toFixed(1);				//  1st MJ/SMBRP and CA/P compares them together //
					var CaAndP1 = (FosferLeft1 / CalciumLeft1).toFixed(1);
					
					if ((HayFeedWeight == 0)){												//  1st USER result output  //
							$("#Result11").hide();
								
						}else{
							$("#Result11").show();
						  	$("#Result11").html(
  									"<h3>Här är din kemiska in resultat 1:</h3> " +
									"<h3>"+'Din hö du har:' + HayType +"</h3>"+
							  		"<h4>"+"Din Hös vikt: "+ HayFeedTotal +" Kg</h4>"+
							  		"<h3>"+"Ditt hös egenskaper"+"</h3>"+
							  		'Energi (MJ) :' +  EnergyLeft + EnergyIntake1+'<br/>'+'<br/>'+
							  		'Smältbart protein :'+  ProtineLeft1+' g' + ProtineIntake1 +'<br/>'+'<br/>'+
							 		'Kalcium  :'+ CalciumLeft1+' g' + CalcmIntake1+'<br/>'+'<br/>'+
									'Fosfor  :' + FosferLeft1+' g' + FosIntake1 +'<br/>'+'<br/>'+	 
							 		'Magnesium :' +  MagLeft1+' g' + MagIntake1+'<br/>'+'<br/>'+
							 		'Seleniam  :' +  SELeft1 +' g'+ SEIntake1+'<br/>'+'<br/>'+
							 		'TS :' + TSLeft1 + TSIntake1+'<br/>'+'<br/>'+
							 		"<h4>Din MJ/SMBRP och CA/P :</h4>"+
							 		'MJ/SMBRP :' + MJandSMRP1+'<br/>'+
							 		'CA/P :' + CaAndP1+'<br/>'
							 	);
  							
  							}
						
					
					
					var MJ_Input2 = ($('#MJ2').val());							//  2nd ENERGY break down field and formula to work out too much / too little energy //
					var EnergyLeft2 = ((HayFeedTotal) * (MJ_Input2));	
					var MJminusTwo2 = (feed - EnergyLeft2).toFixed(1);	
							if (EnergyLeft2 == undefined){
								 var EnergyIntake2 = ('');
								}
							else if (EnergyLeft2 == feed){
								 var EnergyIntake2 = rightAmount;
								}
							else if (EnergyLeft2 > feed){
							    var EnergyIntake2 = tooMuchAmount+''+ MJminusTwo2+' MJ';
							     }
							else if (EnergyLeft2 < feed){
								 var EnergyIntake2 = smallAmount+''+MJminusTwo2+' MJ';
								}
								
					var SMBRPenergy2 = ($('#SMBRP2').val());					//  2nd SMBRP break down field and formula to work out too much / too little energy //
					var ProtineLeft2 = ((HayFeedTotal) * (SMBRPenergy2));
					var SMBRPminus2 =  (prot - ProtineLeft2).toFixed(1);
							if (ProtineLeft2 == undefined || 0){
								var  ProtineIntake2 = ('');
								}
							else if (ProtineLeft2 == prot){
								var  ProtineIntake2 = rightAmount;
								}
							else if (ProtineLeft2 > prot){
								var   ProtineIntake2 = tooMuchAmount+''+SMBRPminus2+'g';
								}
							else if (ProtineLeft2 < prot){
								var   ProtineIntake2 = smallAmount+''+SMBRPminus2+'g';
								}
					
					
					var Caenergy2 = ($('#Ca2').val());						//  2nd Kalcium break down field and formula to work out too much / too little energy //
					var CalciumLeft2 = ((HayFeedTotal) * (Caenergy2));
					var CALCminus2 =  (kal - CalciumLeft2).toFixed(1);		
							if (CalciumLeft2 == undefined){
								 var CalcmIntake2 = ('');
								}
							 else if (CalciumLeft2 == kal){
								var CalcmIntake2 = rightAmount;
								}
							else if (CalciumLeft2 > kal){
								var CalcmIntake2 = tooMuchAmount+''+CALCminus2+'g';
								}
							else if (CalciumLeft2 < kal){
								var CalcmIntake2 = smallAmount+''+CALCminus2+'g';
								}			
					
					var Penergy2 = ($('#Phos2').val());					//  2nd FOSFERS break down field and formula to work out too much / too little energy //
					var FosferLeft2 = ((HayFeedTotal) * (Penergy2));
					var FOSFminus2 = (fos - FosferLeft2).toFixed(1);
							if (FosferLeft2 == undefined){
								 var FosIntake2 = ('');
								}
							else if (FosferLeft2 == fos){
								var FosIntake2 = rightAmount;
								}
							else if (FosferLeft2 > fos){
								var FosIntake2 =  tooMuchAmount+''+FOSFminus2+'g';
								}
							else if (FosferLeft2 < fos){
								var FosIntake2 =  smallAmount+''+FOSFminus2+'g';
								}
					
					var Mgenergy2 = ($('#MG2').val());					//  2nd Magnesium break down field and formula to work out too much / too little energy //
					var MagLeft2 = ((HayFeedTotal) * (Mgenergy2));
					var MAGminus2 = (mag - MagLeft2).toFixed(1);
							if (MagLeft2 == undefined){
								var MagIntake2 = ('');
								}
							else if (MagLeft2 == mag){
								var MagIntake2 = rightAmount;
								}
							else if (MagLeft2 > mag){
								var MagIntake2 = tooMuchAmount+''+ MAGminus2+' g';
								}
							else if (MagLeft2 < mag){
								var MagIntake2 = smallAmount+''+ MAGminus2+' g';
								}
					
					var SEenergy2 =($('#SE2').val());					//  2nd Seleniam break down field and formula to work out too much / too little energy //
					var SELeft2 =  ((HayFeedTotal) * (SEenergy2));
					var SEminus2 = (SE - SELeft2).toFixed(1);	
						if (SELeft2 == undefined){
								var SEIntake2 = ('');
								}
							else if (SELeft2 == SE){
								var SEIntake2 =  rightAmount;
								}
							else if (SELeft2 > SE){
								var SEIntake2 = tooMuchAmount+''+SEminus2+'g';
								}
							else if (SELeft2 < SE){
								var SEIntake2 = smallAmount+''+SEminus2+'g';
								}
					
					var TSenergy2 =($('#TS2').val());				//  2nd TS break down field and formula to work out too much / too little energy //
					var TSLeft2 = ((HayFeedTotal) * (TSenergy2));
					var TSminus2 = (TS - TSLeft2).toFixed(1);	
							if (TSLeft2 == undefined){
								var TSIntake2 = ('');
								}
							else if (TSLeft2 == TS){
								var TSIntake2 = rightAmount;
								}
							else if (TSLeft2 > TS){
								var TSIntake2 = tooMuchAmount+''+TSminus2+' g';
								}
							else if (TSLeft2 < TS){
								var TSIntake2 = smallAmount+''+TSminus2+' g';	
								}
					
					var MJandSMRP2 = (EnergyLeft2 / ProtineLeft2).toFixed(1);		//  2nd MJ/SMBRP and CA/P compares them together //
					var CaAndP2 = (FosferLeft2 / CalciumLeft2).toFixed(1);
					
					
						if ((MJ_Input2 == 0)){									//  2nd USER result output  //
							$("#Result22").hide();
								
						}else{
							$("#Result22").show();
						  	$("#Result22").html(
  									"<h3>Här är din kemiska in resultat 2:</h3> " +
									"<h3>"+'Din hö du har:' + HayType +"</h3>"+
							  		"<h4>"+"Din Hös vikt: "+ HayFeedTotal +" Kg</h4>"+
							  		"<h3>"+"Ditt hös egenskaper"+"</h3>"+
							  		'Energi (MJ) :' +  EnergyLeft2 + EnergyIntake2+'<br/>'+'<br/>'+
							  		'Smältbart protein :'+  ProtineLeft2+' g' + ProtineIntake2 +'<br/>'+'<br/>'+
							 		'Kalcium  :'+ CalciumLeft2+' g' + CalcmIntake2+'<br/>'+'<br/>'+
									'Fosfor  :' + FosferLeft2+' g' + FosIntake2 +'<br/>'+'<br/>'+	 
							 		'Magnesium :' +  MagLeft2+' g' + MagIntake2+'<br/>'+'<br/>'+
							 		'Seleniam  :' +  SELeft2 +' g'+ SEIntake2+'<br/>'+'<br/>'+
							 		'TS :' + TSLeft2 + TSIntake2+'<br/>'+'<br/>'+
							 		"<h4>Din MJ/SMBRP och CA/P </h4>"+
							 		'MJ/SMBRP :' + MJandSMRP2+'<br/>'+
							 		'CA/P :' + CaAndP2 +'<br/>'
							 	);
  							
  							}						
						
						
					var MJ_Input3 = ($('#MJ3').val());
					var EnergyLeft3 = ((HayFeedTotal) * (MJ_Input3));	
					var MJminusTwo3 = (feed - EnergyLeft3).toFixed(1);	
							if (EnergyLeft3 == undefined){
								 var EnergyIntake3 = ('');
								}
							else if (EnergyLeft3 == feed){
								 var EnergyIntake3 = rightAmount;
								}
							else if (EnergyLeft3 > feed){
							    var EnergyIntake3 = tooMuchAmount+''+ MJminusTwo3+' MJ';
							     }
							else if (EnergyLeft3 < feed){
								 var EnergyIntake3 = smallAmount+''+MJminusTwo3+' MJ';
								}
								
					var SMBRPenergy3 = ($('#SMBRP3').val());
					var ProtineLeft3 = ((HayFeedTotal) * (SMBRPenergy3));
					var SMBRPminus3 =  (prot - ProtineLeft3).toFixed(1);
							if (ProtineLeft3 == undefined || 0){
								var  ProtineIntake3 = ('');
								}
							else if (ProtineLeft3 == prot){
								var  ProtineIntake3 = rightAmount;
								}
							else if (ProtineLeft3 > prot){
								var   ProtineIntake3 = tooMuchAmount+''+SMBRPminus3+'g';
								}
							else if (ProtineLeft3 < prot){
								var   ProtineIntake3 = smallAmount+''+SMBRPminus3+'g';
								}
					
					
					var Caenergy3 = ($('#Ca3').val());
					var CalciumLeft3 = ((HayFeedTotal) * (Caenergy3));
					var CALCminus3 =  (kal - CalciumLeft3).toFixed(1);		
							if (CalciumLeft3 == undefined){
								 var CalcmIntake3 = ('');
								}
							 else if (CalciumLeft3 == kal){
								var CalcmIntake3 = rightAmount;
								}
							else if (CalciumLeft3 > kal){
								var CalcmIntake3 = tooMuchAmount+''+CALCminus3+'g';
								}
							else if (CalciumLeft3 < kal){
								var CalcmIntake3 = smallAmount+''+CALCminus3+'g';
								}			
					
					var Penergy3 = ($('#Phos3').val());
					var FosferLeft3 = ((HayFeedTotal) * (Penergy3));
					var FOSFminus3 = (fos - FosferLeft3).toFixed(1);
							if (FosferLeft3 == undefined){
								 var FosIntake3 = ('');
								}
							else if (FosferLeft3 == fos){
								var FosIntake3 = rightAmount;
								}
							else if (FosferLeft3 > fos){
								var FosIntake3 =  tooMuchAmount+''+FOSFminus3+'g';
								}
							else if (FosferLeft3 < fos){
								var FosIntake3 =  smallAmount+''+FOSFminus3+'g';
								}
					
					var Mgenergy3 = ($('#MG3').val());
					var MagLeft3 = ((HayFeedTotal) * (Mgenergy3));
					var MAGminus3 = (mag - MagLeft3).toFixed(1);
							if (MagLeft3 == undefined){
								var MagIntake3 = ('');
								}
							else if (MagLeft3 == mag){
								var MagIntake3 = rightAmount;
								}
							else if (MagLeft3 > mag){
								var MagIntake3 = tooMuchAmount+''+ MAGminus3+' g';
								}
							else if (MagLeft3 < mag){
								var MagIntake3 = smallAmount+''+ MAGminus3+' g';
								}
					
					var SEenergy3 =($('#SE3').val());
					var SELeft3 =  ((HayFeedTotal) * (SEenergy3));
					var SEminus3 = (SE - SELeft3).toFixed(1);	
						if (SELeft3 == undefined){
								var SEIntake3 = ('');
								}
							else if (SELeft3 == SE){
								var SEIntake3 =  rightAmount;
								}
							else if (SELeft3 > SE){
								var SEIntake3 = tooMuchAmount+''+SEminus3+'g';
								}
							else if (SELeft3 < SE){
								var SEIntake3 = smallAmount+''+SEminus3+'g';
								}
					
					var TSenergy3 =($('#TS3').val());
					var TSLeft3 = ((HayFeedTotal) * (TSenergy3));
					var TSminus3 = (TS - TSLeft3).toFixed(1);	
							if (TSLeft3 == undefined){
								var TSIntake3 = ('');
								}
							else if (TSLeft3 == TS){
								var TSIntake3 = rightAmount;
								}
							else if (TSLeft3 > TS){
								var TSIntake3 = tooMuchAmount+''+TSminus3+' g';
								}
							else if (TSLeft3 < TS){
								var TSIntake3 = smallAmount+''+TSminus3+' g';	
								}
					
					var MJandSMRP3 = (EnergyLeft3 / ProtineLeft3).toFixed(1);		
					var CaAndP3 = (FosferLeft3 / CalciumLeft3).toFixed(1);
					
					
						if ((MJ_Input3 == 0)){
							$("#Result33").hide();
								
						}else{
							$("#Result33").show();
						  	$("#Result33").html(
  									"<h3>Här är din kemiska in resultat 3:</h3> " +
									"<h3>"+'Din hö du har:' + HayType +"</h3>"+
							  		"<h4>"+"Din Hös vikt: "+ HayFeedTotal +" Kg</h4>"+
							  		"<h3>"+"Ditt hös egenskaper"+"</h3>"+
							  		'Energi (MJ) :' +  EnergyLeft3 + EnergyIntake3+'<br/>'+'<br/>'+
							  		'Smältbart protein :'+  ProtineLeft3+' g' + ProtineIntake3 +'<br/>'+'<br/>'+
							 		'Kalcium  :'+ CalciumLeft3+' g' + CalcmIntake3+'<br/>'+'<br/>'+
									'Fosfor  :' + FosferLeft3+' g' + FosIntake3 +'<br/>'+'<br/>'+	 
							 		'Magnesium :' +  MagLeft3+' g' + MagIntake3+'<br/>'+'<br/>'+
							 		'Seleniam  :' +  SELeft3 +' g'+ SEIntake3+'<br/>'+'<br/>'+
							 		'TS :' + TSLeft3 + TSIntake3+'<br/>'+'<br/>'+
							 		"<h4>Din MJ/SMBRP and CA/P </h4>"+
							 		'MJ/SMBRP :' + MJandSMRP3+'<br/>'+
							 		'CA/P :' + CaAndP3 +'<br/>'
							 	);
  							
  							}
						
						
					var MJ_Input4 = ($('#MJ4').val());
					var EnergyLeft4 = ((HayFeedTotal) * (MJ_Input4));	
					var MJminusTwo4 = (feed - EnergyLeft4).toFixed(1);	
							if (EnergyLeft4 == undefined){
								 var EnergyIntake4 = ('');
								}
							else if (EnergyLeft4 == feed){
								 var EnergyIntake4 = rightAmount;
								}
							else if (EnergyLeft4 > feed){
							    var EnergyIntake4 = tooMuchAmount+''+ MJminusTwo4+' MJ';
							     }
							else if (EnergyLeft4 < feed){
								 var EnergyIntake4 = smallAmount+''+MJminusTwo4+' MJ';
								}
								
					var SMBRPenergy4 = ($('#SMBRP4').val());
					var ProtineLeft4 = ((HayFeedTotal) * (SMBRPenergy4));
					var SMBRPminus4 =  (prot - ProtineLeft4).toFixed(1);
							if (ProtineLeft4 == undefined){
								var  ProtineIntake4 = ('');
								}
							else if (ProtineLeft4 == prot){
								var  ProtineIntake4 = rightAmount;
								}
							else if (ProtineLeft4 > prot){
								var   ProtineIntake4 = tooMuchAmount+''+SMBRPminus4+'g';
								}
							else if (ProtineLeft4 < prot){
								var   ProtineIntake4 = smallAmount+''+SMBRPminus4+'g';
								}
					
					
					var Caenergy4 = ($('#Ca4').val());
					var CalciumLeft4 = ((HayFeedTotal) * (Caenergy4));
					var CALCminus4 =  (kal - CalciumLeft4).toFixed(1);		
							if (CalciumLeft4 == undefined){
								 var CalcmIntake4 = ('');
								}
							 else if (CalciumLeft4 == kal){
								var CalcmIntake4 = rightAmount;
								}
							else if (CalciumLeft4 > kal){
								var CalcmIntake4 = tooMuchAmount+''+CALCminus4+'g';
								}
							else if (CalciumLeft4 < kal){
								var CalcmIntake4 = smallAmount+''+CALCminus4+'g';
								}			
					
					var Penergy4 = ($('#Phos4').val());
					var FosferLeft4 = ((HayFeedTotal) * (Penergy4));
					var FOSFminus4 = (fos - FosferLeft4).toFixed(1);
							if (FosferLeft4 == undefined){
								 var FosIntake4 = ('');
								}
							else if (FosferLeft4 == fos){
								var FosIntake4 = rightAmount;
								}
							else if (FosferLeft4 > fos){
								var FosIntake4 =  tooMuchAmount+''+FOSFminus4+'g';
								}
							else if (FosferLeft4 < fos){
								var FosIntake4 =  smallAmount+''+FOSFminus4+'g';
								}
					
					var Mgenergy4 = ($('#MG4').val());
					var MagLeft4 = ((HayFeedTotal) * (Mgenergy4));
					var MAGminus4 = (mag - MagLeft4).toFixed(1);
							if (MagLeft4 == undefined){
								var MagIntake4 = ('');
								}
							else if (MagLeft4 == mag){
								var MagIntake4 = rightAmount;
								}
							else if (MagLeft4 > mag){
								var MagIntake4 = tooMuchAmount+''+ MAGminus4+' g';
								}
							else if (MagLeft4 < mag){
								var MagIntake4 = smallAmount+''+ MAGminus4+' g';
								}
					
					var SEenergy4 =($('#SE4').val());
					var SELeft4 =  ((HayFeedTotal) * (SEenergy4));
					var SEminus4 = (SE - SELeft4).toFixed(1);	
						if (SELeft4 == undefined){
								var SEIntake4 = ('');
								}
							else if (SELeft4 == SE){
								var SEIntake4 =  rightAmount;
								}
							else if (SELeft4 > SE){
								var SEIntake4 = tooMuchAmount+''+SEminus4+'g';
								}
							else if (SELeft4 < SE){
								var SEIntake4 = smallAmount+''+SEminus4+'g';
								}
					
					var TSenergy4 =($('#TS4').val());
					var TSLeft4 = ((HayFeedTotal) * (TSenergy4));
					var TSminus4 = (TS - TSLeft4).toFixed(1);	
							if (TSLeft4 == undefined){
								var TSIntake4 = ('');
								}
							else if (TSLeft4 == TS){
								var TSIntake4 = rightAmount;
								}
							else if (TSLeft4 > TS){
								var TSIntake4 = tooMuchAmount+''+TSminus4+' g';
								}
							else if (TSLeft4 < TS){
								var TSIntake4 = smallAmount+''+TSminus4+' g';	
								}
					
					var MJandSMRP4 = (EnergyLeft4 / ProtineLeft4).toFixed(1);		
					var CaAndP4 = (FosferLeft4 / CalciumLeft4).toFixed(1);
					
					if ((MJ_Input4 == 0)){
							$("#Result44").hide();
								
						}else{
							$("#Result44").show();
						  	$("#Result44").html(
  									"<h3>Här är din kemiska in resultat 4:</h3> " +
									"<h3>"+'Din hö du har:' + HayType +"</h3>"+
							  		"<h4>"+"Din Hös vikt: "+ HayFeedTotal +" Kg</h4>"+
							  		"<h3>"+"Ditt hös egenskaper"+"</h3>"+
							  		'Energi (MJ) :' +  EnergyLeft4 + EnergyIntake4+'<br/>'+'<br/>'+
							  		'Smältbart protein :'+  ProtineLeft4+' g' + ProtineIntake4 +'<br/>'+'<br/>'+
							 		'Kalcium  :'+ CalciumLeft4+' g' + CalcmIntake4+'<br/>'+'<br/>'+
									'Fosfor  :' + FosferLeft4+' g' + FosIntake4 +'<br/>'+'<br/>'+	 
							 		'Magnesium :' +  MagLeft4+' g' + MagIntake4+'<br/>'+'<br/>'+
							 		'Seleniam  :' +  SELeft4 +' g'+ SEIntake4+'<br/>'+'<br/>'+
							 		'TS :' + TSLeft4 + TSIntake4+'<br/>'+'<br/>'+
							 		"<h4>Din MJ/SMBRP och CA/P </h4>"+
							 		'MJ/SMBRP :' + MJandSMRP4+'<br/>'+
							 		'CA/P :' + CaAndP4 +'<br/>'
							 	);
  							
  							}
						
						
					
					var MJ_Input5 = ($('#MJ5').val());
					var EnergyLeft5 = ((HayFeedTotal) * (MJ_Input5));	
					var MJminusTwo5 = (feed - EnergyLeft5).toFixed(1);	
							if (EnergyLeft5 == undefined){
								 var EnergyIntake5 = ('');
								}
							else if (EnergyLeft5 == feed){
								 var EnergyIntake5 = rightAmount;
								}
							else if (EnergyLeft5 > feed){
							    var EnergyIntake5 = tooMuchAmount+''+ MJminusTwo5+' MJ';
							     }
							else if (EnergyLeft5 < feed){
								 var EnergyIntake5 = smallAmount+''+MJminusTwo5+' MJ';
								}
								
					var SMBRPenergy5 = ($('#SMBRP5').val());
					var ProtineLeft5 = ((HayFeedTotal) * (SMBRPenergy5));
					var SMBRPminus5 =  (prot - ProtineLeft5).toFixed(1);
							if (ProtineLeft5 == undefined){
								var  ProtineIntake5 = ('');
								}
							else if (ProtineLeft5 == prot){
								var  ProtineIntake5 = rightAmount;
								}
							else if (ProtineLeft5 > prot){
								var   ProtineIntake5 = tooMuchAmount+''+SMBRPminus5+'g';
								}
							else if (ProtineLeft5 < prot){
								var   ProtineIntake5 = smallAmount+''+SMBRPminus5+'g';
								}
					
					
					var Caenergy5 = ($('#Ca5').val());
					var CalciumLeft5 = ((HayFeedTotal) * (Caenergy5));
					var CALCminus5 =  (kal - CalciumLeft5).toFixed(1);		
							if (CalciumLeft5 == undefined){
								 var CalcmIntake5 = ('');
								}
							 else if (CalciumLeft5 == kal){
								var CalcmIntake5 = rightAmount;
								}
							else if (CalciumLeft5 > kal){
								var CalcmIntake5 = tooMuchAmount+''+CALCminus5+'g';
								}
							else if (CalciumLeft5 < kal){
								var CalcmIntake5 = smallAmount+''+CALCminus5+'g';
								}			
					
					var Penergy5 = ($('#Phos5').val());
					var FosferLeft5 = ((HayFeedTotal) * (Penergy5));
					var FOSFminus5 = (fos - FosferLeft5).toFixed(1);
							if (FosferLeft5 == undefined){
								 var FosIntake5 = ('');
								}
							else if (FosferLeft5 == fos){
								var FosIntake5 = rightAmount;
								}
							else if (FosferLeft5 > fos){
								var FosIntake5 =  tooMuchAmount+''+FOSFminus5+'g';
								}
							else if (FosferLeft5 < fos){
								var FosIntake5 =  smallAmount+''+FOSFminus5+'g';
								}
					
					var Mgenergy5 = ($('#MG5').val());
					var MagLeft5 = ((HayFeedTotal) * (Mgenergy5));
					var MAGminus5 = (mag - MagLeft5).toFixed(1);
							if (MagLeft5 == undefined){
								var MagIntake5 = ('');
								}
							else if (MagLeft5 == mag){
								var MagIntake5 = rightAmount;
								}
							else if (MagLeft5 > mag){
								var MagIntake5 = tooMuchAmount+''+ MAGminus5+' g';
								}
							else if (MagLeft5 < mag){
								var MagIntake5 = smallAmount+''+ MAGminus5+' g';
								}
					
					var SEenergy5 =($('#SE5').val());
					var SELeft5 =  ((HayFeedTotal) * (SEenergy4));
					var SEminus5 = (SE - SELeft5).toFixed(1);	
						if (SELeft5 == undefined){
								var SEIntake5 = ('');
								}
							else if (SELeft5 == SE){
								var SEIntake5 =  rightAmount;
								}
							else if (SELeft5 > SE){
								var SEIntake5 = tooMuchAmount+''+SEminus5+'g';
								}
							else if (SELeft5 < SE){
								var SEIntake5 = smallAmount+''+SEminus5+'g';
								}
					
					var TSenergy5 =($('#TS4').val());
					var TSLeft5 = ((HayFeedTotal) * (TSenergy5));
					var TSminus5 = (TS - TSLeft5).toFixed(1);	
							if (TSLeft5 == undefined){
								var TSIntake5 = ('');
								}
							else if (TSLeft5 == TS){
								var TSIntake5 = rightAmount;
								}
							else if (TSLeft5 > TS){
								var TSIntake5 = tooMuchAmount+''+TSminus5+' g';
								}
							else if (TSLeft5 < TS){
								var TSIntake5 = smallAmount+''+TSminus5+' g';	
								}
					
					var MJandSMRP5 = (EnergyLeft5 / ProtineLeft5).toFixed(1);		
					var CaAndP5 = (FosferLeft5 / CalciumLeft5).toFixed(1);
					
					if ((MJ_Input5 == 0)){
							$("#Result55").hide();
								
						}else{
							$("#Result55").show();
						  	$("#Result55").html(
  									"<h3>Här är din kemiska in resultat 5:</h3> " +
									"<h3>"+'Din hö du har:' + HayType +"</h3>"+
							  		"<h4>"+"Din Hös vikt: "+ HayFeedTotal +" Kg</h4>"+
							  		"<h3>"+"Ditt hös egenskaper"+"</h3>"+
							  		'Energi (MJ) :' +  EnergyLeft5 + EnergyIntake5+'<br/>'+'<br/>'+
							  		'Smältbart protein :'+  ProtineLeft5+' g' + ProtineIntake5 +'<br/>'+'<br/>'+
							 		'Kalcium  :'+ CalciumLeft5+' g' + CalcmIntake5+'<br/>'+'<br/>'+
									'Fosfor  :' + FosferLeft5+' g' + FosIntake5 +'<br/>'+'<br/>'+	 
							 		'Magnesium :' +  MagLeft5+' g' + MagIntake5+'<br/>'+'<br/>'+
							 		'Seleniam  :' +  SELeft5 +' g'+ SEIntake5+'<br/>'+'<br/>'+
							 		'TS :' + TSLeft5 + TSIntake5+'<br/>'+'<br/>'+
							 		"<h4>Din MJ/SMBRP och CA/P </h4>"+
							 		'MJ/SMBRP :' + MJandSMRP5+'<br/>'+
							 		'CA/P :' + CaAndP5 +'<br/>'
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
									
									
							});
									
					});
					 
					 




