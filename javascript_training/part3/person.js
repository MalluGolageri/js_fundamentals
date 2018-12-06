(function(person){ 
	person = person || 
	function(){ 
		var age=24;
		var name="Oye"; 		 
		var display = function(){ 
			if(name && age){
				console.log(" Name is", name, "and age :", age); 
			}
		}; 
		var getAge = function(){ 
			return age; 
		}; 		
		var getName = function(){ 
			return name; 
		}; 		
		return { 
			display: display, 
			getAge: getAge, 			
			getName: getName			
		}; 
	}(); 		
	person.display(); 
})();