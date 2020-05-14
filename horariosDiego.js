let misHorarios="viernes";
function finDeSemana(misHorarios){
	switch(misHorarios){
		case 'lunesMartesJueves': 
    		console.log('4a8 stud 9a18 work 19a22 family 22a4 ZZZ');
			break;
		case 'miercolesViernes':
    		console.log('4a8 stud 9a18 work 1830a22 ZOOM 22a23 family 23a4 ZZZ');
			break;
    case 'sabadoDomingo':
    		console.log('4a8 stud 8a23 family-and-stud 23a4 ZZZ');
			break;
      default:
		    console.log('vacaciones!!!');
			break;
	};
}
finDeSemana(misHorarios);