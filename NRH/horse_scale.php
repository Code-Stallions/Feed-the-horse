<?php include'Head.php'; ?>

							    
				<form action="" id="horseMark" name="form2" method="post">		
				
				<h1>Hästens vikt</h1>
				
				<h3>Formel:1</h3>
					<p>Lansmärkeomfång mäts från gropen framför manken och runt bålen.Mankhöjden mäts vinkelrätt 
						från marken till mankens högsta höjd.(4,3 * Lansmärkeomfång) + (3,0 * Mankhöjd) - 785 = Vikt i kg</p>
							<div class="horseMesurement"></div>
								<div id="LansMark">		
									<h4>Resultatet av mätningen av Lansmärkeomgång i cm.</h4>
    							   		<input type="text" name="horseLansmarkeomgang" value="" id="horseLansmarkeomgang" class="numbersOnly"/><span id="error1"></span>	  							<h4>Resultatet av mätningen av Mankhöjd i cm.</h4>
    							   		<input type="text" name="horseMankhojd" value="" id="horseMankhojd" class="numbersOnly"/><span id="error2"></span>
 									<br/><br/>
 										<input type="button" value="Calculate" class="submit1" name="submit" style="margin-left:35px;"/> 
 									<div id="theanswer"></div>
 								</div>
    							 		
 					<h3>Det går också bra att ange lansmärkeomfång och mankhöjd i cm i beställningen. Skriv då vilka mått det gäller.</h3>
 				
 				
 					<h3>Formel:2</h3>						
 						<p>Bröstomfång är måttet runt bålen bakom manke och armbåge.
						   Längden mäts från armbågen till bärbensknölen.(Bröstomfång * Bröstomfång * Längd) / 8 900 = Vikt i kg</p>
								
								<div class="horseMesurement2"></div>
    							   	<div id="Brostom">	
 										<h4>Resultatet av mätningen av Bröstomfång i cm.</h4>
    							    	 <input type="text" name="horseBrostomfang" id="horseBrostomfang" value="" class="numbersOnly"/><span id="error3"></span> 
 										
 										<h4>Resultatet av mätningen av Längd i cm.</h4>
    							    	 <input type="text" name="horseLenght" id="horseLenght" value=""  class="numbersOnly"/><span id="error4"></span>
										<br/><br/>
										 <input type="button" value="Calculate" class="submit2" name="submit" style="margin-left:35px;"/>
										 <div id="theanswer2"> </div>
									</div>			
						</form>
						<h3>Det går också bra att ange bröstomfång och längd i cm i beställningen. Skriv då vilka mått det gäller.</h3>
						
						<script type="text/javascript" id="display" src="JavaScript/scale.js"></script>	
										
<?php include 'footer.php'; ?>