function ElectricityBill(){
	let units= Number(document.getElementById('unit').value);
	let amount;
	
	if(units<60)
	{
	      if(units<30)
		  {
			amount=units*2.50+30;
			document.getElementById("calculate").innerHTML=amount;
		  }
		  else{
			amount=30*2.50+(units-30)*4.85+60;
			document.getElementById("calculate").innerHTML=amount;
		  }
	}
	else
	{
		if(units<90)
		{
			amount=60*7.85+(units-60)*10+90;
			document.getElementById("calculate").innerHTML=amount;
		}
		else if(units<120)
		{
			amount=60*7.85+(units-60)*10+(units-90)*27.75+480;
			document.getElementById("calculate").innerHTML=amount;
		}
		else{
			amount=60*7.85+(units-60)*10+(units-90)*27.75+(units-120)*32+480;
			document.getElementById("calculate").innerHTML=amount;
		}
	}
	
}







