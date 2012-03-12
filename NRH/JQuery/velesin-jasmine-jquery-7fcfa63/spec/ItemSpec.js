describe("Item", function() {
  
    it("should get a value from array", function() {
  	var hej = Boots("Striders");
  
  	
  	expect(hej).toEqual("Striders");
  	
  	expect(jobb).toBe("hej");
  	
  	
  });
  
    
  });
  
  
  describe("+", function() {
  
 it("should get a value from array", function() {
 	var a = 500
  	var de = add(a , 100); 
  	var Hejhej = multi(de ,2)
  
  	
  	expect(Hejhej).toEqual(10);
  
  	

 });

 });
 
 describe("TextBox", function(){
 	
 	it("should get a text from textbox", function(){
 		
 		
 		   expect($('<input type="text" value="500"/>')).toHaveValue('500');
 		
 	});
 	
 	
 	
 });
 
 
 describe("truth", function(){
 	it("should give me truth or false", function(){
 		var sanning = true;
 		
 		
 		expect(sanning).toBeTruthy();
 		
 		
 		
 		
 	});
 	
 	
 	
 	
 	
 	
 });
  

 
 

