Calculator = function(){

	this.sum = function(a,b){
		var aIsNumber = !isNaN(a);
		var bIsNumber = !isNaN(b);
		if (aIsNumber && bIsNumber) {
			return a+b; 
		}
		return null;
		
	}

}
