function validateFormApp(theForm){
	 if (theForm.name1.value == "")
	{
		alert("Please enter a value for the \"Full name of Applicant\" field.");
		theForm.name1.focus();
		return (false);
	}
	else if (theForm.mobile1.value == "")
	{
		alert("Please enter a value for the \"Mobile No\" field.");
		theForm.mobile.focus();
		return (false);
	}
	else if (theForm.mobile1.value.length < 10)
	{
		alert("Please enter at least 10 characters in the \"Mobile No\" field.");
		theForm.mobile1.focus();
		return (false);
	}
	else if (theForm.mobile1.value.length > 10)
	{
		alert("Please enter at most 10 characters in the \"Mobile No\" field.");
		theForm.mobile1.focus();
		return (false);
	}
	else {
		$.ajax({
			url: 'submit-2.php',
			data:{
					key:"saveData1",
					name1:theForm.name1.value,
					mobile1:theForm.mobile1.value,					
				},
			dataType: 'json',
			type: 'POST',
			success: function(data){
				if(data.status == 'true'){
					$('.form1').css('display','none');
					$('.outer1 .success-message').css('display','table');
				}
			}
		});
	}
}
