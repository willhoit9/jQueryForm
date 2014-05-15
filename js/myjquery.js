// Forms Project Final Version .. Andrew Willhoit .. 11/5/13

console.log("javscript works");
	$(document).ready(function() {
		console.log("jQuery working");
	
	// IF VALIDATOR IS WORKING...	
	if ($.validator) {
    	console.log("validator loaded");
	}

	// CREATES A BUTTON SET  (JQUERY UI)
	$(function() {
    	$( ".radButt" ).buttonset();
  	});


	// CREATES A BUTTON STYLE  (JQUERY UI)
	$( ".button" ).button();

	$( "#lastName" ).focus();
	
	// DATE PICKER FUNCTION FOR SINGLE DATES (JQUERY UI)
	$(function() {
		$( ".singleDate" ).datepicker({
			changeMonth: true,
			changeYear: true,
			maxDate: null,
			onClose: function( selectedDate ) {
				$( this ).focus();
			}
		});
	});
	

	// DATE PICKER FUNCTION FOR RANGE DATES (JQUERY UI)
	$(function() {
		$( "#fromWork" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#toWork" ).datepicker( "option", "minDate", selectedDate );
				$( this ).focus();
			}
		});
		$( "#toWork" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#fromWork" ).datepicker( "option", "maxDate", selectedDate );
				$( this ).focus();
			}
		}); 
	}); // end function


	// ARE YOU A CITIZEN?
	$('#authorized').hide();

	$('#yesCitizen').click(function() {
		 $('#authorized').slideUp('fast');
		 $( "#yesAuthorized" ).removeClass( "required" );	
	}); // end click()

	$('#noCitizen').click(function() {
		 $('#authorized').slideDown('fast');
		 $( "#yesAuthorized" ).addClass( "required" );
	}); // end click()






	// WORKED FOR COMPANY BEFORE?
	$('#rangeWork').hide();

	$('#yesWorked').click(function() {
		 $('#rangeWork').slideDown('fast');	
		 $( "#fromWork, #toWork" ).addClass( "required" );
	}); // end click()

	$('#noWorked').click(function() {
		 $('#rangeWork').slideUp('fast');
		 $( "#fromWork, #toWork" ).removeClass( "required" );	
	}); // end click()


	// FELONY
	$('#felony').hide();

	$('#yesFelony').click(function() {
		 $('#felony').slideDown('fast');	
		 $( "#explainFelony" ).addClass( "required" );
	}); // end click()

	$('#noFelony').click(function() {
		 $('#felony').slideUp('fast');
		 $( "#explainFelony" ).removeClass( "required" );

	}); // end click()



	//EDUCATION
	$('.degree').hide();

	
	// HIGHSCHOOL
	
	$('#yesGradHS').click(function() {
		 $('#highSchoolDiv .degree').slideDown('fast');	
		 $( "#highSchoolDiv input" ).addClass( "required" );
		 $( "#highSchoolDiv select" ).addClass( "required" );
		 $( '#yesGradCollege').addClass("required");
	}); // end click()

	$('#noGradHS').click(function() {
		 $('#highSchoolDiv .degree').slideUp('fast');
		 $( "#highSchoolDiv input" ).removeClass( "required error" );
		 $( "#highSchoolDiv select" ).removeClass( "required error" );
		 $( "#highSchoolDiv label" ).remove( "label.error" );
		 $( '#yesGradCollege').removeClass("required error");
		 $( '#gradCollegRadio label').remove( "label.error" );
	}); // end click()
	

	$(function() {
		$( "#fromHS" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#toHS" ).datepicker( "option", "minDate", selectedDate );
				$( this ).focus();
			}
		});
		$( "#toHS" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#fromHS" ).datepicker( "option", "maxDate", selectedDate );
				$( this ).focus();
			}
		}); 
	}); // end function

	
	// COLLEGE
	
	$('#yesGradCollege').click(function() {
		 $('#collegeDiv .degree').slideDown('fast');	
		 $( "#collegeDiv input" ).addClass( "required" );
		 $( "#collegeDiv select" ).addClass( "required" );
	}); // end click()

	$('#noGradCollege').click(function() {
		 $('#collegeDiv .degree').slideUp('fast');
		 $( "#collegeDiv input" ).removeClass( "required error" );
		 $( "#collegeDiv select" ).removeClass( "required error" );
		 $( "#collegeDiv label" ).remove( "label.error" );
	}); // end click()


	$(function() {
		$( "#fromCollege" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#toCollege" ).datepicker( "option", "minDate", selectedDate );
				$( this ).focus();
			}
		});
		$( "#toCollege" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#fromCollege" ).datepicker( "option", "maxDate", selectedDate );
				$( this ).focus();
			}
		}); 
	}); // end function

	
	// GRAD SCHOOL

	$('#yesGradGrad').click(function() {
		 $('#gradDiv .degree').slideDown('fast');	
		 $( "#gradDiv input" ).addClass( "required" );
		 $( "#gradDiv select" ).addClass( "required" );
	}); // end click()

	$('#noGradGrad').click(function() {
		 $('#collegeDiv .degree').slideUp('fast');
		 $( "#gradDiv input" ).removeClass( "required error" );
		 $( "#gradDiv select" ).removeClass( "required error" );
		 $( "#gradDiv label" ).remove( "label.error" );
	}); // end click()

	$(function() {
		$( "#fromGrad" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#toGrad" ).datepicker( "option", "minDate", selectedDate );
				$( this ).focus();
			}
		});
		$( "#toGrad" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#fromGrad" ).datepicker( "option", "maxDate", selectedDate );
				$( this ).focus();
			}
		}); 
	}); // end function


	// PREVIOUS COMPANY 1

	$(function() {
		$( "#fromComp1" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#toComp1" ).datepicker( "option", "minDate", selectedDate );
				$( this ).focus();
			}
		});
		$( "#toComp1" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#fromComp1" ).datepicker( "option", "maxDate", selectedDate );
				$( this ).focus();
			}
		}); 
	}); // end function


	// PREVIOUS COMPANY 2

	$(function() {
		$( "#fromComp2" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#toComp2" ).datepicker( "option", "minDate", selectedDate );
				$( this ).focus();
			}
		});
		$( "#toComp2" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#fromComp2" ).datepicker( "option", "maxDate", selectedDate );
				$( this ).focus();
			}
		}); 
	}); // end function


	// MILITARY

	$('#milContent').hide();

	$('#yesMil').click(function() {
		 $('#milContent').slideDown('fast');	
		 $( "#milContent input" ).addClass( "required" );
		 $( "#milContent select" ).addClass( "required" );
		
	}); // end click()

	$('#noMil').click(function() {
		 $('#milContent').slideUp('fast');
		 $( "#milContent input" ).removeClass( "required error" );
		 $( "#milContent select" ).removeClass( "required error" );
		 $( "#milContent label" ).remove( "label.error" );
		 $( "#explainDC" ).removeClass( "required error" );
		 $( "explainDC" ).remove( "label.error" );

	}); // end click()


		$(function() {
		$( "#fromMil" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#toMil" ).datepicker( "option", "minDate", selectedDate );
				$( this ).focus();
			}
		});
		$( "#toMil" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			changeYear: true,
			numberOfMonths: 1,
			onClose: function( selectedDate ) {
				$( "#fromMil" ).datepicker( "option", "maxDate", selectedDate );
				$( this ).focus();
			}
		}); 
	}); // end function




	// OTHER THAN HONORABLE
	
	$('#explainMilitaryDC').hide();

	var discharge =  $('#discharge :selected').val()
	
	$('#discharge').change(function() {
		if ($('#discharge :selected').val() == 'other') {
			$('#explainMilitaryDC').show();
			$( "#explainDC" ).addClass( "required" );

		} else {
			$('#explainMilitaryDC').hide();
			$( "#explainDC" ).removeClass( "required error" );
		 	$( "explainDC" ).remove( "label.error" );

		}
	});

	// console.log($("#jobForm"));


	// VALIDATOR BRAINS!!!

	$('#jobForm').validate({
		rules: {
			lastName: {
				required: true
			},
			
			firstName: {
				required: true
			},
			phone: {				
				required: true,
				phoneUS: true
			},
			email: {
				required: true,
				email: true
			},
			dateAvailable: {
				required: true,
				date: true
			},
	   		socSec: {
		   		required:true,
		   		number: true,
		   		rangelength: [9,9]
	   		},
			userZip: {
		   		required:true,
		   		number: true,
		   		rangelength: [5,5]
	   		},
	   		salary: {
	   			number: true
	   		},
			hsZip: {
		   		
		   		number: true,
		   		rangelength: [5,5]
	   		},
			collegeZip: {
		   		
		   		number: true,
		   		rangelength: [5,5]
	   		},
			gradZip: {
		   		
		   		number: true,
		   		rangelength: [5,5]
	   		},
	   		ref1Phone: {
	   			required: true,
				phoneUS: true 
	   		},
	   		ref2Phone: {
	   			required: true,
				phoneUS: true 
	   		},
	   		ref3Phone: {
	   			required: true,
				phoneUS: true 
	   		},
	   		comp1Phone: {
	   			required: true,
				phoneUS: true 
	   		},
	   		comp2Phone: {
	   			required: false,
				phoneUS: true 
	   		},
	   		comp1SSalary: {
	   			number: true
	   		},
	   		comp2SSalary: {
	   			number: true
	   		},
	   		comp1ESalary: {
	   			number: true
	   		},
	   		comp2ESalary: {
	   			number: true
	   		}


	   }, //end rules
		   messages: {
		   	lastName: {
		   		required: "Please enter your last name."
		   	},
		   	firstName: {
		   		required: "Please enter your first name."
		   	},
		   	phone: {
		   		required: "Please enter your phone number.",
		   		phoneUS: "Please enter a valid phone number."
		   	},
		   	email: {
		   		required: "Please supply an e-mail address.",
		   		email: "This is not a valid email address."
		   	},
		   	dateAvailable: {
		   		required: "Please enter the date closest to when you'll be availabe.",
		   		date:"Please enter a valid date."
		   	},
		   	socSec: {
		   		required: "Please enter your Social Security Number",
		   		number: "Please enter a valid number.",
		   		rangelength: "Please enter a SSN in this format '123456789'. No hyphens."
		   	},
		   	userZip: {
		   		required: "Please enter your zip code.",
		   		number: "Please enter a valid number as a zip code.",
		   		rangelength: "Please enter a number in this format '12345'."
		   	},
		   	salary: {
	   			number: "Please enter a number value for Desired Salary."
	   		},
			hsZip: {
		   		
		   		number: "Please enter a valid number as a zip code.",
		   		rangelength: "Please enter a number in this format '12345'."
	   		},
			collegeZip: {
		   		
		   		number: "Please enter a valid number as a zip code.",
		   		rangelength: "Please enter a number in this format '12345'."
	   		},
			gradZip: {
		   		
		   		number: "Please enter a valid number as a zip code.",
		   		rangelength: "Please enter a number in this format '12345'."
	   		},
	   		ref1Phone: {
	   			required: "Please enter your first reference's phone number.",
				phoneUS: "Please enter a valid phone number." 
	   		},
	   		ref2Phone: {
	   			required: "Please enter your second reference's phone number.",
				phoneUS: "Please enter a valid phone number." 
	   		},
	   		ref3Phone: {
	   			required: "Please enter your third reference's phone number.",
				phoneUS: "Please enter a valid phone number." 
	   		},
	   		comp1Phone: {
	   			required: "Please enter the company's phone number.",
				phoneUS: "Please enter a valid phone number." 
	   		},
	   		comp2Phone: {
	   			required: "Please enter the company's phone number.",
				phoneUS: "Please enter a valid phone number." 
	   		},
	   		comp1SSalary: {
	   			number: "Please enter a number value for starting salary."
	   		},
	   		comp2SSalary: {
	   			number: "Please enter a number value for starting salary."
	   		},
	   		comp1ESalary: {
	   			number: "Please enter a number value for ending salary."
	   		},
	   		comp2ESalary: {
	   			number: "Please enter a number value for ending salary."
	   		}
	   	},	 // end messages
   	

  		
  		errorPlacement: function(error, element) {
  			if (element.attr("name") == "userState2" ) {
  				error.insertAfter("#cityStateZip");
  			} else {
  				error.appendTo(element.parent());
  			}
  		},	// end errorPlacement
  		
  		showErrors: function(errorMap, errorList) {
    		$("#errorTotal").html("Your form contains "
      		+ this.numberOfInvalids()
      		+ " errors, see details above.");
   			 this.defaultShowErrors();
  		}  // end showErrors

}); // end validate()


	
	// TABBY BRAINS!!!

	$("#tabs").tabs({
		beforeActivate: function(e,ui) {
			if( ! $('#jobForm').valid() ){
				console.log("this tab has errors");
				return false; // could also use: e.preventDefault();
			}

			if( ui.newTab[0].id === 'tab3') {
				$('#jobForm').validate().settings.ignore = '';
			} else {
				$('#jobForm').validate().settings.ignore = ':hidden';
			}

			console.log("its valid, moving on..");
		}
	});



}); //end ready


// FIN