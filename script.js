var calculate = document.querySelector("#submit");

function sphereVol (e){
	e.preventDefault();
	var radius = document.querySelector("#radius").value;
	var vol = (4/3) * Math.PI * Math.pow(radius, 3);
	if (radius > 0){ 
		return document.querySelector("#volume").value = vol;
	};
}

calculate.addEventListener("click", sphereVol);