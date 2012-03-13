describe("FeedingForm", function(FoodCalculator) {zz
  
    describe("FoodCalculator", function() {    
   			
   			it("should get a calculate the weight for food intake", function() {
  	  			
  	  			var a = 100;
				var b = 0.0020;
				var c = a*b;
  	  			expect(a).toEqual(100);
  				expect(b).toEqual(0.0020);
  				expect(a*b).toEqual(c);
  	});
  });



  describe("foulCalculator", function() {    
   			
   		it("should get a calculate the foul food intake", function() {
  	  			var foul_a = 100;
	var foul_b = 0.015;
	var foul_c = foul_a*foul_b;
  	  			
  	  			expect(foul_a).toEqual(100);
  				expect(foul_b).toEqual(0.015);
  				expect(foul_a*foul_b).toEqual(foul_c);
  	
  	});
  	
  });
  	

  describe("yearCalculator", function() {    
   			
   		it("should get a calculate the yearling food intake", function() {
  	  			var year_a = 100;
	var year_b = 0.015;
	var year_c = year_a*year_b;
  	  			
  	  			expect(year_a).toEqual(100);
  				expect(year_b).toEqual(0.015);
  				expect(year_a*year_b).toEqual(year_c);
  	
  	});
  	
  });	
  
  
});


 describe("Food calc", function(){
 	it("It should give me the correct MJ", function(){
 	
 
  	var MJ = 0.50 * Math.pow(600,0.75)	
  	var CorrMJ = Math.ceil(MJ)
 		expect(CorrMJ).toEqual(61);
 		
 	});

 
 
 	
 	it("It should give me the correct Protein", function(){
 	
 
  	var MJ = 0.50 * Math.pow(600,0.75)	
  	var CorrMJ = Math.ceil(MJ)
  	var Protein = CorrMJ * 6;
 		expect(Protein).toEqual(366);
 		
 	});

 
 
 
 	
 	it("It should give me the correct Kalcium", function(){
 	
 
  	var MJ = 0.50 * Math.pow(600,0.75)	
  	var CorrMJ = Math.ceil(MJ)
  	var Kalcium = CorrMJ * 0.40;
  	var KalciumCeil = Math.ceil(Kalcium)
 		expect(KalciumCeil).toEqual(25);
 		
 	});

 
 
 
  	
 	it("It should give me the correct Fosfor", function(){
 	
 
  	var MJ = 0.50 * Math.pow(600,0.75)	
  	var CorrMJ = Math.ceil(MJ)
  	var Fosfor = CorrMJ * 0.25;
 		expect(Fosfor).toEqual(15.25);
 		
 	});

 
 
 
 	it("It should give me the correct MG", function(){

  	var MJ = 0.50 * Math.pow(600,0.75)	
  	var CorrMJ = Math.ceil(MJ)
  	var MG = CorrMJ * 0.15;
  	
	 		expect(MG).toEqual(9.15);
 		
 	});

 
  
 			it("It should give me the correct SE", function(){
 	
  			var Vikt = 600;	
  			var SE = (Vikt / 100)*0.2;
  			var SECeil = Math.ceil(SE)
 		expect(SECeil).toEqual(2);
 		
 	});

 
  
 	it("It should give me the correct MG", function(){
 	
 
  	var Vikt = 600;	
  	
  	var TS = (Vikt / 100)*1.75;
 		expect(TS).toEqual(10.5);
 		
 	});
 });
 
 
 
 
 
  describe("Springande", function(){
 		it("It should give me the correct skritt", function(){
 	
 
  		
  	var MJ = 0.50 * Math.pow(600,0.75)
  	var Dagar = 5;	
  	var Min = 30/10;
  	
  	var Skritt = 0.2*Dagar*Min;
 		expect(Skritt).toEqual(3);
 		
 	});
 	
 	
 	 	it("It should give me the correct MJ for sprint", function(){
 	
 
  		
  	var MJ = 0.50 * Math.pow(600,0.75)
  	var Dagar = 5;	
  	var Min = 60/10;
  	
  	var Sprint = 1.3*Dagar*Min;
 		expect(Sprint).toEqual(39);
 		
 	});
 	
 	
 		it("It should add the correct MJ for sprint and skritt", function(){
 	
 
  		
  	var MJ = 0.50 * Math.pow(600,0.75)
  	var Dagar = 5;	
  	var MinSprint = 60/10;
  	var MinSkritt = 30/10;
  	
  	var Sprint = 1.3*Dagar*MinSprint;
  	var Skritt = 0.2*Dagar*MinSkritt;
  	
  	var Running = Sprint + Skritt;
 		expect(Running).toEqual(42);
 		
 	});	
 });
 

