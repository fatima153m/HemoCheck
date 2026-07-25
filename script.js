let currentResult = "";



document.getElementById("analyzeBtn").addEventListener("click", function(){


let hb = parseFloat(document.getElementById("hb").value);

let mcv = parseFloat(document.getElementById("mcv").value);


let gender = document.querySelector(
'input[name="gender"]:checked'
);



if(!gender){

document.getElementById("result").innerHTML =
"Please select gender.";

return;

}



if(isNaN(hb) || isNaN(mcv)){

document.getElementById("result").innerHTML =
"Please enter Hb and MCV.";

return;

}



let anemia = false;

let severity = "";



// Male

if(gender.value === "male"){


if(hb < 13){

anemia = true;


if(hb >= 11){

severity = "Mild anemia";

}

else if(hb >= 8){

severity = "Moderate anemia";

}

else{

severity = "Severe anemia";

}


}


}



// Female

else{


if(hb < 12){

anemia = true;


if(hb >= 11){

severity = "Mild anemia";

}

else if(hb >= 8){

severity = "Moderate anemia";

}

else{

severity = "Severe anemia";

}


}


}



let pattern="";


if(mcv < 80){

pattern="Microcytic pattern";

}

else if(mcv <=100){

pattern="Normocytic pattern";

}

else{

pattern="Macrocytic pattern";

}





if(anemia){


currentResult =
"Anemia: YES<br>"+
"Severity: "+severity+"<br>"+
"Pattern: "+pattern;


}

else{


currentResult =
"Anemia: NO<br>"+
"Pattern: "+pattern;


}



document.getElementById("result").innerHTML =
currentResult;



});





document.getElementById("saveBtn").addEventListener("click", function(){


if(currentResult===""){

alert("Analyze patient first.");

return;

}



let patients =
JSON.parse(localStorage.getItem("patients")) || [];



let patient = {


id: patients.length + 1,

hb: document.getElementById("hb").value,

mcv: document.getElementById("mcv").value,

result: currentResult.replaceAll("<br>"," "),

date: new Date().toLocaleDateString()


};



patients.push(patient);


localStorage.setItem(
"patients",
JSON.stringify(patients)
);



alert("Patient saved successfully!");



});
