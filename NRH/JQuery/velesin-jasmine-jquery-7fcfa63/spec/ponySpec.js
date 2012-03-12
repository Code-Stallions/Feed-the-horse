describe("FeedingForm", function(FoodCalculator) {
  
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