/**
 Program for finding even number in given array using forEach
 **/

 function fnFindEvenNumber(array_element) {
var even_number = [];
array_element.forEach(function(items){
	
	if(items%2 == 0) {
       even_number.push(items)

	}

})
return even_number;

 }

 var array_element=[12,14,3,5]
 alert(fnFindEvenNumber(array_element));