$(document).ready(function(){	
		
		$('.numbersOnly').keyup(function () { 															// It will only allow numbers to be entered in the text field//
    		this.value = this.value.replace(/[^0-9\.]/g,'');
			}); 	
			 $('#ResultBody').hide();																	// It hiddes the result window but its reveled after button is clicked//
					 
					 $("#calcu").click(function(){														// the click function starts here//
   							$('#ResultBody').fadeIn("10000");
   						
   						
   						var HorseType = $("input[name=horseType]:checked").val();						// calls out the horse type you have selected//
   							if (HorseType == undefined){
   								var HorseType2 = ('');
   							}else{
   								var HorseType2 = (HorseType);
   							}
   							
   							var PregnetHäst = $("input[name=Months]:checked").val();
   							if (PregnetHäst == 'EightMonths' ){
   								var MonthPreg = ('8/9'+'månad');
   							}	
   							else if (PregnetHäst == 'TenMonths'){
   								var MonthPreg = ('10'+'månad');
   							}	
   							else if (PregnetHäst == 'ElevenMonths'){
   								var MonthPreg = ('11'+'månad');
   							}
   							else if (PregnetHäst !== ''){
   								var MonthPreg = ('');
   							}	
   								
   						$("#ResultHead").html("<h2>Din häst är en : "+ HorseType2 +'&nbsp;'+ MonthPreg +"</h2>");
   								
   						
   					
   					
   						var Horse = $("input[name=horse]:checked").val();					// calls out the horse feeding you have selected latt, normal, hard,//
   						if (Horse == undefined){
   								var Horse2 = ('');
   							}else{
   								var Horse2 = (Horse);
   							}
   						
   						
   						var weight = parseInt($('#weight2').val()|| 0);
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
							
						
						
						
						var prot = (feed * 6).toFixed(1);				// It works out the SMRC math formulas//
						var kal = (feed * 0.4).toFixed(1);				// It works out the calciam math formulas//
						var fos = (feed * 0.25).toFixed(1);				// It works out the fosfers math formulas//
						var mag = (feed * 0.15).toFixed(1);				// It works out the magnizam math formulas//
						var SE = (0.2 * (weight/100)).toFixed(1) ;		// It works out the SE math formulas//
						var TS = (1.75 * (weight/100)).toFixed(1);		// It works out the TS math formulas//
						
						
					
					if((weight == 0)){
						$("#ResultText").hide();
						}
					else {	
						 $("#ResultText").show();
						 $("#ResultText").html(
   								"<h3>Din häst vikt är : " + weight +'Kg' + "</h3>"+
   								"<h3>Din häst energibehov är: </h3>" +
   							  	"Work feeding : "+ Horse2 +'<br/>' +
							  	"MJ : " + feed + "<br/>" +
							  	"Protein: " + prot +"g"+ '<br/>' +
							  	"Kalcium : " + kal +"g"+ '<br/>' +
							  	"Fosfers : " + fos +"g"+ '<br/>' +
							  	"Magnien : " + mag +"g"+ '<br/>' +
							  	"Seleniam : " + SE +"g"+ '<br/>' +
							  	"TS : " + TS +"g"+ '<br/>' 
							 	);
						}
					
					
					var DräktigMJ = $("input[name=Months]:checked").val();							// this works out how much to feed a Draktig (pregnant)horse //
   							
   							 if (DräktigMJ == "EightMonths"){																							 
								var PregnentHast = (feed / (100/15));
								var PregnentHastTotal = (parseInt(PregnentHast) + parseInt(feed)+1);		
								
								var SmbPregnent = (feed * 6);
								var SmbPregnentAdd = (PregnentHast * 12);
								var SmbPregnentResult = parseInt((SmbPregnentAdd)+(SmbPregnent)+3);
								
								var pregnantHastSum = ("<p>Din Dräktighäst MJ  " + PregnentHastTotal + "</p>");
								var pregnantHästSMB = ("<p>Din Dräktighäst SMB.RP  " + SmbPregnentResult + "</p>");
								
								$("#DraktigResult").html(pregnantHastSum + pregnantHästSMB);
								}						
							
							else if (DräktigMJ == "TenMonths"){																							 
								var PregnentHast = (feed / (100/25));
								var PregnentHastTotal = (parseInt(PregnentHast) + parseInt(feed)+1);	
								
								var SmbPregnent = (feed * 6);
								var SmbPregnentAdd = (PregnentHast * 12);
								var SmbPregnentResult = parseInt((SmbPregnentAdd)+(SmbPregnent)+3);
								
								var pregnantHastSum = ("<p>Din Dräktighäst MJ  "+ PregnentHastTotal + "</p>");
								var pregnantHästSMB = ("<p>Din Dräktighäst SMB.RP  " + SmbPregnentResult + "</p>");
								
								$("#DraktigResult").html(pregnantHastSum + pregnantHästSMB);
								}																															 
							
							else if (DräktigMJ == "ElevenMonths"){																								 
							 	var PregnentHast = (feed / (100/30));
								var PregnentHastTotal = (parseInt(PregnentHast) + parseInt(feed)+1);		
								
								var SmbPregnent = (feed * 6);
								var SmbPregnentAdd = (PregnentHast * 12);
								var SmbPregnentResult = parseInt((SmbPregnentAdd)+(SmbPregnent)+3);
								
								var pregnantHastSum = ("<p>Din Dräktighäst MJ  " + PregnentHastTotal + "</p>");
								var pregnantHästSMB = ("<p>Din Dräktighäst SMB.RP  " + SmbPregnentResult + "</p>");
								
								$("#DraktigResult").html(pregnantHastSum + pregnantHästSMB);
								}
							else if (DräktigMJ !== "" ){
   									$("#DraktigResult").hide();
								}
   							
					
					
					
					
					
					var Horsefiger = $("input[name=horsefiger]:checked").val();			// this is formula is for work the text field available for the user//
																							// this is formular to work out the text field available for the user//
							if (Horsefiger == "Smal"){																							 
								 var sizeType = ("<p id='redTxt'>Din häst är för smal,Se till att den äter mer</p>");
									$("#ResultText2").html( "<h3>Du valde: </h3>" + "Horse Body figure : " + Horsefiger + sizeType +'<br/>');
								}						
							else if (Horsefiger == "Normal"){																							 
								 var sizeType =("<p id ='greenTxt'>Din häst vikt är perfekt fortsätt så</p>");
								$("#ResultText2").html( "<h3>Du valde: </h3>" + "Horse Body figure : " + Horsefiger + sizeType +'<br/>');
								}																															 
							else if (Horsefiger == "Tjock"){																								 
							 	var sizeType = ("<p id='redTxt'>Din häst är för fet,Ge den mindre mat</p>");
								$("#ResultText2").html( "<h3>Du valde: </h3>" + "Horse Body figure : " + Horsefiger + sizeType +'<br/>');
								}
							else if (Horsefiger !== ""){
								$('#ResultText2').hide();
								}
							
					
						
				
						
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
						
						
						if((MJenergy == 0)){
								$("#Result11").hide();
						
								}
								else {	
						  			$("#Result11").show();
						  			$("#Result11").html(
  									"<h3>Here are your chemical input result 1:</h3> " +
									"Your hay type is : "+ HayType +'<br/>'+
							  		'MJ :' +  MJenergy + '<br/>'+ Energy +'Protein :' + SMBRPenergy +"g"+'<br/>'+ ProtineEnergy +
							 		'Kalcium :' +  Caenergy +"g"+'<br/>'+ Calintake +
									'Fosfers :' +  Penergy +"g"+'<br/>'+ Fosintake +	 
							 		'Magnien:' +  Mgenergy +"g"+'<br/>'+ MGintake +
							 		'Seleniam :' +  SEenergy +"g"+'<br/>'+ SEintake +
							 		'TS :' +  TSenergy +"g"+'<br/>'+ TSintake
							 		);
						
								}
						
						
						
						
						
						
						var MJenergy2 = ($('#MJ2').val());
							if (MJenergy2 == 0){
								 var Energy2 = ("<p id='greenTxt'></p>");
								}
							else if (MJenergy2 == feed){
								 var Energy2 = ("<p id='greenTxt'>Din häst får tillräckligt med MJ </p>");
								}
							else if (MJenergy2 > feed){
							     var Energy2 = ("<p id='redTxt'>Din häst får för mycket MJ </p>");
								}
							else if (MJenergy2 < feed){
								 var Energy2 = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}
							else if (MJenergy2 !== ""){																								 
							 	var Energy2 = ("<p id='redTxt'></p>");
								}
					
						var SMBRPenergy2 = ($('#SMBRP2').val());
							if (SMBRPenergy2 == 0 ){
								var ProtineEnergy2 = ("<p id='greenTxt'></p>");
								}
							else if (SMBRPenergy2 == prot){
								var ProtineEnergy2 =  ("<p id='greenTxt'>Din häst får tillräckligt med Protein </p>");
								}
							else if (SMBRPenergy2 > prot){
								var ProtineEnergy2 =  ("<p id='redTxt'>Din häst får för mycket Protein </p>");
								}
							else if (SMBRPenergy2 < prot){
								var ProtineEnergy2 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Protein </p>");
								}
					
						var Caenergy2 = ($('#Ca2').val());
							   if (Caenergy2 == 0){
								 var Calintake2 = ("<p id='redTxt'></p>");
								}
							 else if (Caenergy2 == kal){
								var Calintake2 =  ("<p id='greenTxt'>Din häst får tillräckligt med Calcium </p>");
								}
							else if (Caenergy2 > kal){
								var Calintake2 =  ("<p id='redTxt'>Din häst får för mycket Calcium </p>");
								}
							else if (Caenergy2 < kal){
								var Calintake2 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Calcium </p>");
								}
							
						
						
						
						
						
						var Penergy2 =($('#Phos2').val());
							if (Penergy2 == 0){
								 var Fosintake2 = ("<p id='redTxt'></p>");
								}
							else if (Penergy2 == fos){
								var Fosintake2 =  ("<p id='greenTxt'>Din häst får tillräckligt med Fosfor </p>");
								}
							else if (Penergy2 > fos){
								var Fosintake2 =  ("<p id='redTxt'>Din häst får för mycket Fosfor </p>");
								}
							else if (Penergy2 < fos){
								var Fosintake2 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Fosfor </p>");
								}
							
						var Mgenergy2 = ($('#MG2').val());
							if (Mgenergy2 == 0){
								var MGintake2 = ("<p id='redTxt'></p>");
								}
							else if (Mgenergy2 == mag){
								var MGintake2 =  ("<p id='greenTxt'>Din häst får tillräckligt med Magnesium </p>");
								}
							else if (Mgenergy2 > mag){
								var MGintake2 =  ("<p id='redTxt'>Din häst får för mycket Magniseum </p>");
								}
							else if (Mgenergy2 < mag){
								var MGintake2 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Magniseum </p>");
								}
							
						var SEenergy2 = ($('#SE2').val());
							if (SEenergy2 == 0){
								var SEintake2 = ("<p id='redTxt'></p>");
								}
							else if (SEenergy2 == SE){
								var SEintake2 =  ("<p id='greenTxt'>Din häst får tillräckligt med Selenium </p>");
								}
							else if (SEenergy2 > SE){
								var SEintake2 =  ("<p id='redTxt'>Din häst får för mycket Selenium </p>");
								}
							else if (SEenergy2 < SE){
								var SEintake2 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Selenium </p>");
								}
						
						var TSenergy2 = ($('#TS2').val());
							if (TSenergy2 == 0){
								var TSintake2 = ("<p id='redTxt'></p>");
								}
							else if (TSenergy2 == TS){
								var TSintake2 =  ("<p id='greenTxt'>Din häst får tillräckligt med TS </p>");
								}
							else if (TSenergy2 > TS){
								var TSintake2 =  ("<p id='redTxt'>Din häst får för mycket TS </p>");

								}
							else if (TSenergy2 < TS){
								var TSintake2 =  ("<p id='redTxt'>Din häst får inte tillräckligt med TS </p>");
								}
						
						
					if((MJenergy2 == 0)){
						$("#Result22").hide();
						}
					else{	
						$("#Result22").show();
						$("#Result22").html(
  									"<h3>Here are your chemical input result 2:</h3> " +
  									'MJ :' +  MJenergy2 + '<br/>'+ Energy2 +
  									'Protein :' + SMBRPenergy2 +"g"+'<br/>'+ ProtineEnergy2 +
							 		'Kalcium :' +  Caenergy2 +"g"+'<br/>'+ Calintake2 +
									'Fosfers :' +  Penergy2 +"g"+'<br/>'+ Fosintake2 +	 
							 		'Magnien:' +  Mgenergy2 +"g"+'<br/>'+ MGintake2 +
							 		'Seleniam :' +  SEenergy2 +"g"+'<br/>'+ SEintake2 +
							 		'TS :' +  TSenergy2 +"g"+'<br/>'+ TSintake2
							 		);
						
							}						
						
						
						var MJenergy3 = ($('#MJ3').val());
							if (MJenergy3 == 0){
								 var Energy3 = ("<p id='greenTxt'></p>");
								}
							else if (MJenergy3 == feed){
								 var Energy3 = ("<p id='greenTxt'>Din häst får tillräckligt med MJ </p>");
								}
							else if (MJenergy3 > feed){
							     var Energy3 = ("<p id='redTxt'>Din häst får för mycket MJ </p>");
								}
							else if (MJenergy3 < feed){
								 var Energy3 = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}
							else if (MJenergy3 !== ""){																								 
							 	var Energy3 = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}
					
						var SMBRPenergy3 = ($('#SMBRP3').val());
							if (SMBRPenergy3 == 0 ){
								 var ProtineEnergy3 = ("<p id='redTxt'> </p>");
								}
							else if (SMBRPenergy3 == prot){
								var ProtineEnergy3 =  ("<p id='greenTxt'>Din häst får tillräckligt med Protein </p>");
								}
							else if (SMBRPenergy3 > prot){
								var ProtineEnergy3 =  ("<p id='redTxt'>Din häst får för mycket Protein </p>");
								}
							else if (SMBRPenergy3 < prot){
								var ProtineEnergy3 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Protein </p>");
								}
					
						var Caenergy3 = ($('#Ca3').val());
							   if (Caenergy3 == 0){
							 	var Calintake3 = ("<p id='redTxt'> </p>");
							 	}
							 else if (Caenergy3 == kal){
								var Calintake3 =  ("<p id='greenTxt'>Din häst får tillräckligt med Calcium </p>");
								}
							else if (Caenergy3 > kal){
								var Calintake3 =  ("<p id='redTxt'>Din häst får för mycket Calcium </p>");
								}
							else if (Caenergy3 < kal){
								var Calintake3 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Calcium </p>");
								}
							
						var Penergy3 =($('#Phos3').val());
							if (Penergy3 == 0){
								 var Fosintake3 = ("<p id='redTxt'></p>");
								}
							else if (Penergy3 == fos){
								var Fosintake3 =  ("<p id='greenTxt'>Din häst får tillräckligt med Fosfor </p>");
								}
							else if (Penergy3 > fos){
								var Fosintake3 =  ("<p id='redTxt'>Din häst får för mycket Fosfor </p>");
								}
							else if (Penergy3 < fos){
								var Fosintake3 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Fosfor </p>");
								}
							
						var Mgenergy3 = ($('#MG3').val());
							if (Mgenergy3 == 0){
								var MGintake3 = ("<p id='redTxt'></p>");
								}
							else if (Mgenergy3 == mag){
								var MGintake3 =  ("<p id='greenTxt'>Din häst får tillräckligt med Magnesium </p>");
								}
							else if (Mgenergy3 > mag){
								var MGintake3 =  ("<p id='redTxt'>Din häst får för mycket Magniseum </p>");
								}
							else if (Mgenergy3 < mag){
								var MGintake3 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Magniseum </p>");
								}
							
						var SEenergy3 = ($('#SE3').val());
							if (SEenergy3 == 0){
								var SEintake3 = ("<p id='redTxt'></p>");
								}
							else if (SEenergy3 == SE){
								var SEintake3 =  ("<p id='greenTxt'>Din häst får tillräckligt med Selenium </p>");
								}
							else if (SEenergy3 > SE){
								var SEintake3 =  ("<p id='redTxt'>Din häst får för mycket Selenium </p>");
								}
							else if (SEenergy3 < SE){
								var SEintake3 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Selenium </p>");
								}
						
						var TSenergy3 = ($('#TS3').val());
							if (TSenergy3 == 0){
								var TSintake3 = ("<p id='redTxt'></p>");
								}
							else if (TSenergy3 == TS){
								var TSintake3 =  ("<p id='greenTxt'>Din häst får tillräckligt med TS </p>");
								}
							else if (TSenergy3 > TS){
								var TSintake3 =  ("<p id='redTxt'>Din häst får för mycket TS </p>");

								}
							else if (TSenergy3 < TS){
								var TSintake3 =  ("<p id='redTxt'>Din häst får inte tillräckligt med TS </p>");
								}
						
					if((MJenergy3 == 0)){
						$("#Result33").hide();
					}else{	
						$("#Result33").show();
						$("#Result33").html(
  									"<h3>Here are your chemical input result 3:</h3> " +
  									'MJ :' +  MJenergy3 + '<br/>'+ Energy3 +
  									'Protein :' + SMBRPenergy3 +"g"+'<br/>'+ ProtineEnergy3 +
							 		'Kalcium :' +  Caenergy3 +"g"+'<br/>'+ Calintake3 +
									'Fosfers :' +  Penergy3 +"g"+'<br/>'+ Fosintake3 +	 
							 		'Magnien:' +  Mgenergy3 +"g"+'<br/>'+ MGintake3 +
							 		'Seleniam :' +  SEenergy3 +"g"+'<br/>'+ SEintake3 +
							 		'TS :' +  TSenergy3 +"g"+'<br/>'+ TSintake3
							 		);
						}
						
						
						
						var MJenergy4 = ($('#MJ4').val());
							if (MJenergy4 == 0){
								 var Energy4 = ("<p id='greenTxt'></p>");
								}
							else if (MJenergy4 == feed){
								 var Energy4 = ("<p id='greenTxt'>Din häst får tillräckligt med MJ </p>");
								}
							else if (MJenergy4 > feed){
							     var Energy4 = ("<p id='redTxt'>Din häst får för mycket MJ </p>");
								}
							else if (MJenergy4 < feed){
								 var Energy4 = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}
							else if (MJenergy4 !== ""){																								 
							 	var Energy4 = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}
					
						var SMBRPenergy4 = ($('#SMBRP4').val());
							if (SMBRPenergy4 == 0 ){
								 var ProtineEnergy4 = ("<p id='redTxt'></p>");
								}
							else if (SMBRPenergy4 == prot){
								var ProtineEnergy4 =  ("<p id='greenTxt'>Din häst får tillräckligt med Protein </p>");
								}
							else if (SMBRPenergy4 > prot){
								var ProtineEnergy4 =  ("<p id='redTxt'>Din häst får för mycket Protein </p>");
								}
							else if (SMBRPenergy4 < prot){
								var ProtineEnergy4 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Protein </p>");
								}
					
						var Caenergy4 = ($('#Ca4').val());
							if (Caenergy4 == 0){
								var Calintake4 =  ("<p id='redTxt'></p>");
								}
							else if (Caenergy4 == kal){
								var Calintake4 =  ("<p id='greenTxt'>Din häst får tillräckligt med Calcium </p>");
								}
							else if (Caenergy4 > kal){
								var Calintake4 =  ("<p id='redTxt'>Din häst får för mycket Calcium </p>");
								}
							else if (Caenergy4 < kal){
								var Calintake4 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Calcium </p>");
								}
							
						var Penergy4 =($('#Phos4').val());
							if (Penergy4 == 0){
								 var Fosintake4 = ("<p id='redTxt'></p>");
								}
							else if (Penergy4 == fos){
								var Fosintake4 =  ("<p id='greenTxt'>Din häst får tillräckligt med Fosfor </p>");
								}
							else if (Penergy4> fos){
								var Fosintake4 =  ("<p id='redTxt'>Din häst får för mycket Fosfor </p>");
								}
							else if (Penergy4 < fos){
								var Fosintake4 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Fosfor </p>");
								}
							
						var Mgenergy4 = ($('#MG4').val());
							if (Mgenergy4 == 0){
								var MGintake4 = ("<p id='redTxt'></p>");
								}
							else if (Mgenergy4 == mag){
								var MGintake4 =  ("<p id='greenTxt'>Din häst får tillräckligt med Magnesium </p>");
								}
							else if (Mgenergy4 > mag){
								var MGintake4 =  ("<p id='redTxt'>Din häst får för mycket Magniseum </p>");
								}
							else if (Mgenergy4 < mag){
								var MGintake4 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Magniseum </p>");
								}
							
						var SEenergy4 = ($('#SE4').val());
							if (SEenergy4 == 0){
								var SEintake4 = ("<p id='redTxt'></p>");
								}
							else if (SEenergy4 == SE){
								var SEintake4 =  ("<p id='greenTxt'>Din häst får tillräckligt med Selenium </p>");
								}
							else if (SEenergy4 > SE){
								var SEintake4 =  ("<p id='redTxt'>Din häst får för mycket Selenium </p>");
								}
							else if (SEenergy4 < SE){
								var SEintake4 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Selenium </p>");
								}
						
						var TSenergy4 = ($('#TS4').val());
							if (TSenergy4 == 0){
								var TSintake4 = ("<p id='redTxt'></p>");
								}
							else if (TSenergy4 == TS){
								var TSintake4 =  ("<p id='greenTxt'>Din häst får tillräckligt med TS </p>");
								}
							else if (TSenergy4 > TS){
								var TSintake4 =  ("<p id='redTxt'>Din häst får för mycket TS </p>");
								}
							else if (TSenergy4 < TS){
								var TSintake4 =  ("<p id='redTxt'>Din häst får inte tillräckligt med TS </p>");
								}
						
						
						if((MJenergy4 == 0)){
							$("#Result44").hide();
						}else{	
							$("#Result44").show();
							$("#Result44").html(
  									"<h3>Here are your chemical input result 4:</h3> " +
  									"Your hay type is : "+ HayType +'<br/>'+
  									'MJ :' +  MJenergy4 + '<br/>'+ Energy4 +
  									'Protein :' + SMBRPenergy4 +"g"+'<br/>'+ ProtineEnergy4 +
							 		'Kalcium :' +  Caenergy4 +"g"+'<br/>'+ Calintake4 +
									'Fosfers :' +  Penergy4 +"g"+'<br/>'+ Fosintake4 +	 
							 		'Magnien:' +  Mgenergy4 +"g"+'<br/>'+ MGintake4 +
							 		'Seleniam :' +  SEenergy4 +"g"+'<br/>'+ SEintake4 +
							 		'TS :' +  TSenergy4 +"g"+'<br/>'+ TSintake4
							 		);
						}
					
					
					var MJenergy5 = ($('#MJ5').val());
							if (MJenergy5 == 0){
								 var Energy5 = ("<p id='greenTxt'></p>");
								}
							else if (MJenergy5 == feed){
								 var Energy5 = ("<p id='greenTxt'>Din häst får tillräckligt med MJ </p>");
								}
							else if (MJenergy5 > feed){
							     var Energy5 = ("<p id='redTxt'>Din häst får för mycket MJ </p>");
								}
							else if (MJenergy5 < feed){
								 var Energy5 = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}
							else if (MJenergy5 !== ""){																								 
							 	var Energy5 = ("<p id='redTxt'>Din häst får för lite MJ </p>");
								}
					
						var SMBRPenergy5 = ($('#SMBRP5').val());
							if (SMBRPenergy5 == 0 ){
								 var ProtineEnergy5 = ("<p id='redTxt'></p>");
								}
							else if (SMBRPenergy5 == prot){
								var ProtineEnergy5 =  ("<p id='greenTxt'>Din häst får tillräckligt med Protein </p>");
								}
							else if (SMBRPenergy5 > prot){
								var ProtineEnergy5 =  ("<p id='redTxt'>Din häst får för mycket Protein </p>");
								}
							else if (SMBRPenergy5 < prot){
								var ProtineEnergy5 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Protein </p>");
								}
					
						var Caenergy5 = ($('#Ca5').val());
							if (Caenergy5 == 0){
								var Calintake5 =  ("<p id='redTxt'></p>");
								}
							else if (Caenergy5 == kal){
								var Calintake5 =  ("<p id='greenTxt'>Din häst får tillräckligt med Calcium </p>");
								}
							else if (Caenergy5 > kal){
								var Calintake5 =  ("<p id='redTxt'>Din häst får för mycket Calcium </p>");
								}
							else if (Caenergy5 < kal){
								var Calintake5 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Calcium </p>");
								}
							
						var Penergy5 =($('#Phos5').val());
							if (Penergy5 == 0){
								 var Fosintake5 = ("<p id='redTxt'></p>");
								}
							else if (Penergy5 == fos){
								var Fosintake5 =  ("<p id='greenTxt'>Din häst får tillräckligt med Fosfor </p>");
								}
							else if (Penergy5 > fos){
								var Fosintake5 =  ("<p id='redTxt'>Din häst får för mycket Fosfor </p>");
								}
							else if (Penergy5 < fos){
								var Fosintake5 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Fosfor </p>");
								}
							
						var Mgenergy5 = ($('#MG5').val());
							if (Mgenergy5 == 0){
								var MGintake5 = ("<p id='redTxt'></p>");
								}
							else if (Mgenergy5 == mag){
								var MGintake5 =  ("<p id='greenTxt'>Din häst får tillräckligt med Magnesium </p>");
								}
							else if (Mgenergy5 > mag){
								var MGintake5 =  ("<p id='redTxt'>Din häst får för mycket Magniseum </p>");
								}
							else if (Mgenergy5 < mag){
								var MGintake5 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Magniseum </p>");
								}
							
						var SEenergy5 = ($('#SE5').val());
							if (SEenergy5 == 0){
								var SEintake5 = ("<p id='redTxt'></p>");
								}
							else if (SEenergy5 == SE){
								var SEintake5 =  ("<p id='greenTxt'>Din häst får tillräckligt med Selenium </p>");
								}
							else if (SEenergy5 > SE){
								var SEintake5 =  ("<p id='redTxt'>Din häst får för mycket Selenium </p>");
								}
							else if (SEenergy5 < SE){
								var SEintake5 =  ("<p id='redTxt'>Din häst får inte tillräckligt med Selenium </p>");
								}
						
						var TSenergy5 = ($('#TS5').val());
							if (TSenergy5 == 0){
								var TSintake5 = ("<p id='redTxt'></p>");
								}
							else if (TSenergy5 == TS){
								var TSintake5 =  ("<p id='greenTxt'>Din häst får tillräckligt med TS </p>");
								}
							else if (TSenergy5 > TS){
								var TSintake5 =  ("<p id='redTxt'>Din häst får för mycket TS </p>");
								}
							else if (TSenergy5 < TS){
								var TSintake5 =  ("<p id='redTxt'>Din häst får inte tillräckligt med TS </p>");
								}
						
						
						if((MJenergy5 == 0)){
							$("#Result55").hide();
						}else{	
							$("#Result55").show();
							$("#Result55").html(
  									"<h3>Here are your chemical input result 5:</h3> " +
  									"Your hay type is : "+ HayType +'<br/>'+
  									'MJ :' +  MJenergy4 + '<br/>'+ Energy4 +
  									'Protein :' + SMBRPenergy4 +"g"+'<br/>'+ ProtineEnergy4 +
							 		'Kalcium :' +  Caenergy4 +"g"+'<br/>'+ Calintake4 +
									'Fosfers :' +  Penergy4 +"g"+'<br/>'+ Fosintake4 +	 
							 		'Magnien:' +  Mgenergy4 +"g"+'<br/>'+ MGintake4 +
							 		'Seleniam :' +  SEenergy4 +"g"+'<br/>'+ SEintake4 +
							 		'TS :' +  TSenergy4 +"g"+'<br/>'+ TSintake4
							 		);
						}
							
						
						var days = parseInt($('#horseWorkout').val() || 0);						// It works out the days Per Week math formulas//
						var daysPerWeek = (days/10).toFixed(1);														
						
						var skrit1 = parseInt($('#horseWorkoutSkritt').val());				// It gets the value of the horse Workout Skritt//
						var skrittCalc = ((skrit1 * daysPerWeek) * 0.2);					
						var skrittCalc2 = (skrittCalc).toFixed(1);	
						
						var TravAmout = parseInt($('#horseWorkoutTrav').val());				// It gets the value of the horse Workout Trav//
						var travCalc = ((TravAmout * daysPerWeek) * 1.3);							
						var travCalc2 = (travCalc).toFixed(1);
						
						var workoutMJ = (parseInt(skrittCalc2) + parseInt(travCalc2) + parseInt(feed)).toFixed(1); // It works out how much MJ needs to be added after the horse works out//
						
    					var FoodCheckeBox = [];
							$(':checkbox:checked').each(function(){
      							FoodCheckeBox.push(this.getAttribute("value"));
							}); 
       						 
 			
 						if ((days == 0)){
							$("#ResultText4").hide();
						}else{
							$("#ResultText4").show();
							$("#ResultText4").html(
  									"<h3>Daily required energy after Trav and Skrit :</h3>" 
									+ daysPerWeek + ": days per week"+'<br/>'
									+ skrittCalc + ": Skrit hours per week" + '<br/>'
									+ travCalc +": Trav hours in week"+'<br/>'+'<br/>'
									+ workoutMJ +": MJ after working out "+'<br/>'
									+ 'Horse foods you have selected :'+ '<br/>'+ FoodCheckeBox
									);		
  								}							
														
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
				

 
 




