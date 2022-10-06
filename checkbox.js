function checkInvestdetails()
{

	var total=""
	for(var i=0; i < document.investform.tinvest.length; i++)
	{
		if(document.investform.tinvest[i].checked)
			{
				total +=investform.tinvest[i].value + "\n"
				//alert (total);

			}
	}
	var error = document.getElementById("error");
	if(total=="")
		{
			//alert("Inside the loop");
			error.textContent = "Please enter a type of investment";
			//alert("Please Select Atleast One Type of Investment Option");
			return false;
		}



return true
}

function myFunction() {
	var total=""
	for(var i=0; i < document.investform.tinvest.length; i++)
	{
		if(document.investform.tinvest[i].checked)
			{
				total +=investform.tinvest[i].value + "\n"
				//alert (total);

			}
	}
	var error = document.getElementById("error");
	if(total=="")
		{
			//alert("Inside the loop");
			error.textContent = "Please enter a type of investment";
			//alert("Please Select Atleast One Type of Investment Option");
			return false;
		}
		else
		{
			//alert("Inside the loop2");
			error.textContent = "";			
		}


return true		

}
