
function calc1() {
			
			for (i=0;i<document.forms[0].horseType.length;i++) {			// It loops to find horse type//
				if (document.forms[0].horseType[i].checked) {
					var user_type = document.forms[0].horseType[i].value;
					
				}
			}
			
			for (i=0;i<document.forms[0].horse.length;i++) {					// It loops to find horse feeding type//
				if (document.forms[0].horse[i].checked) {
					var user_input = document.forms[0].horse[i].value;
					var brk = "<br />";
				}
			}						
			
			var MJ = 0.5 * Math.pow(horseForm.weight.value,0.75);				// It works out the MJ math formulas//
			
			if(user_input == "Lite"){ 					///////////// If statment that control which checkbox you pick for feeding type ///
				var feed = MJ;	
				var feed2 = MJ.toFixed(1);																							 //
			}																															 //
			else if (user_input == "Normal"){																							 //
				var feed = (MJ * 1.05);																						 			 //
				var feed2 = (MJ * 1.05).toFixed(1);
			}																															 //
			else if (user_input == "Hard"){																								 //
				var feed = (MJ *1.10);																							 		 //
				var feed2 = (MJ *1.10).toFixed(1);
			}																															 //
														///////////////////////////////////////////////////////////////////////////////////
			
			
			var prot = (feed2 * 6).toFixed(1);				// It works out the SMRC math formulas//
			
			var kal = (feed2 * 0.4).toFixed(1);				// It works out the calciam math formulas//
			
			var fos = (feed2 * 0.25).toFixed(1);			// It works out the fosfers math formulas//
			
			var mag = (feed2 * 0.15).toFixed(1);			// It works out the magnizam math formulas//
			
			var input = (horseForm.weight.value); 			// It get the value of the horses weight from the form//
			
			
			var SE = (0.2* (input/100)).toFixed(1) ;		// It works out the SE math formulas//
			
			var TS = (1.5* (input/100)).toFixed(1);			// It works out the TS math formulas//
			
			var food_input="";
			for (j=0;j<document.form1.food.length;j++) {
				if (document.form1.food[j].checked) {
					food_input += document.form1.food[j].value + brk + "\n"; 
				}																// It loops the checked-boxs from the Proteinfodermedel and Diverse Fodermedel typ//
			}
			
			
			var daysPerWeek = (horseForm.horseWorkout.value /10).toFixed(1);	// It works out the days Per Week math formulas//
			
			var skritt = (horseForm.horseWorkoutSkritt.value);					// It gets the value of the horse Workout Skritt//
			
			var trav = (horseForm.horseWorkoutTrav.value);						// It gets the value of the horse Workout Trav//
			
			
			var skrittCalc = ((skritt * daysPerWeek) * 0.2);					// It works out the skrit math formulas//
			var skrittCalc2 = skrittCalc.toFixed(1);			
			
			var travCalc = ((trav * daysPerWeek) * 1.3);						// It works out the trav math formulas//
			var travCalc2 = travCalc.toFixed(1);																
			
			var workoutMJ = (skrittCalc + travCalc + feed).toFixed(1);			// It works out how much MJ needs to be added after the horse works out//
				
		function ponyMJ() {
		
		
		
		}		
				
				document.write("<link rel='stylesheet' href='../NRH/CSS/style1.css' type='text/css'/>");
				document.write("<div class='display'>");
				document.write("<h1><u>Horse's Requirement</u></h1>");
				document.write("Your horse is : " + user_type);
				document.write(brk);
				document.write(brk);
				document.write("Your horse's current weight is : " + input +" Kg");
				document.write(brk);
				document.write(brk);
				document.write("You have checked  :  " + user_input);
				document.write("<h4><u> Your horse's daily requirement</u></h4>");
				document.write("Total MJ : " + feed2 +" Kg");
				document.write(brk);
				document.write(brk);
				document.write("Total Protine : "+ prot +" g");
				document.write(brk);
				document.write(brk);
				document.write("Total Kalcium : " + kal +" g");
				document.write(brk);
				document.write(brk);
				document.write("Total Fosfor : " + fos +" g");
				document.write(brk);
				document.write(brk);
				document.write("Total Magnism : " + mag +" g");
				document.write(brk);
				document.write(brk);
				document.write("Total SE : " + SE + " g");
				document.write(brk);
				document.write(brk);
				document.write("Total TS : " + TS + " Kg");
				document.write(brk);
				document.write(brk);
				document.write("<h4><u> Your horse's daily requirement after work-out</u></h4>");
				document.write("Your horse works out : " + daysPerWeek * 10 +"</b> days a week");
				document.write(brk);
				document.write(brk);
				document.write("Your horse Skritts for : " + skritt +"</b> minutes per workout");
				document.write(brk);
				document.write(brk);
				document.write("Your horse Trav for : " + trav +"</b> minutes per workout");
				document.write(brk);
				document.write(brk);
				document.write("Total för Skritt : " + skrittCalc2 + " g");
				document.write(brk);
				document.write(brk);
				document.write("Total för Trav : " + travCalc2 + " g");
				document.write(brk);
				document.write(brk);
				document.write("Total MJ för Work out  : " + workoutMJ +" Kg");
				document.write(brk);
				document.write(brk);
				document.write("<h4><u>You are currently feeding your horse</u> </h4>" + food_input);
				document.write("</div>");
		  
		  window.onload = calc1();
		
		}
		