
function calc1() {
			for (i=0;i<document.forms[0].horse.length;i++) {	
				if (document.forms[0].horse[i].checked) {
					var user_input = document.forms[0].horse[i].value;
					var brk = "<br />";
				}
			}
			var MJ = 0.5 * Math.pow(horseForm.weight.value,0.75);
			if(user_input == "Lite"){
				var feed = Math.ceil(MJ);
			}
			else if (user_input == "Normal"){
				var feed = Math.ceil(MJ * 1.05);
			}
			else if (user_input == "Hard"){
				var feed = Math.ceil(MJ *1.10);
			} 
			
			var prot = Math.ceil(feed * 6);
			var kal = Math.ceil(feed * 0.4);
			var fos = Math.ceil(feed * 0.25);
			var mag = Math.ceil(feed * 0.15);
			var input = (horseForm.weight.value); 
			var SE = Math.ceil(0.2*(input/100));
			var TS = Math.ceil(1.5*(input/100));

			var food_input="";
			for (j=0;j<document.form1.food.length;j++) {
				if (document.form1.food[j].checked) {
					food_input += document.form1.food[j].value + brk + "\n";
				}
			}
			
			var daysPerWeek = (horseForm.horseWorkout.value)/10;
			var skritt = (horseForm.horseWorkoutSkritt.value);
			var trav = (horseForm.horseWorkoutTrav.value);
			
			var skrittCalc =  Math.ceil(skritt * daysPerWeek * 0.2);
			var travCalc =  Math.ceil(trav * daysPerWeek * 1.3);
			var workoutMJ =  Math.ceil(skrittCalc + travCalc + feed);
				
				
				
				
				document.write("<link rel='stylesheet' href='../NRH/CSS/style1.css' type='text/css'/>");
				document.write("<div class='display'>");
				document.write("<h1><u>Horse's Requirement</u></h1>");
				document.write("Your horse's current weight is : " + input +"Kg");
				document.write(brk);
				document.write(brk);
				document.write("You have checked  :  " + user_input);
				document.write("<h4><u> Your horse's daily requirement</u></h4>");
				document.write("Total MJ : " + feed);
				document.write(brk);
				document.write(brk);
				document.write("Total Protine : "+ prot +"g");
				document.write(brk);
				document.write(brk);
				document.write("Total Kalcium : " + kal +"g");
				document.write(brk);
				document.write(brk);
				document.write("Total Fosfor : " + fos +"g");
				document.write(brk);
				document.write(brk);
				document.write("Total Magnism : " + mag +"g");
				document.write(brk);
				document.write(brk);
				document.write("Total SE : " + SE + "g");
				document.write(brk);
				document.write(brk);
				document.write("Total TS : " + TS + "Kg");
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
				document.write("Total för Skritt : " + skrittCalc);
				document.write(brk);
				document.write(brk);
				document.write("Total för Trav : " + travCalc);
				document.write(brk);
				document.write(brk);
				document.write("Total MJ för Work out  : " + workoutMJ);
				document.write(brk);
				document.write(brk);
				document.write("<h4><u>You are currently feeding your horse</u> </h4>" + food_input);
				document.write("</div>");
		  
		  window.onload = calc1();
		
		}
			//function HorseMARK(){
						    
			//			    var measureHorse1 = Math.ceil((4.3 * (horseMark.horseLansmarkeomgang.value)) + (3.0*(horseMark.horseMankhojd.value))-785);
						   
						    				//document.write("<link rel='stylesheet' href='../NRH/CSS/style.css' type='text/css'/>");	
						    				//document.write('<div class="displayWeight">');	
						    				//document.write('<h3>Your horse current weight is:<br /></h3>');
						    				//document.write('<h2>'+ measureHorse1 + ' Kg </h2>');
						    				//document.write('</div>');
						    				//window.onLoad;
						    			//		}
		
						//function HorseBROSTOM(){
						    
						    //var measureHorse2 = Math.ceil(((horseMark.horseBrostomfang.value) * (horseMark.horseBrostomfang.value) * (horseMark.horseLenght.value))/8900);
						    			
						    			//document.write("<link rel='stylesheet' href='../NRH/CSS/style.css' type='text/css'/>");
						    				//document.write('<div class="displayWeight">');	
						    				//document.write('<h3>Your horse current weight is: <br /></h3>');
						    				//document.write('<h2>'+ measureHorse2 + ' Kg </h2>');
						    				//document.write('</div>');
						    				//window.onLoad;
						    				//}