document.querySelector("button").addEventListener("click", function () {

    let hb = parseFloat(document.getElementById("hb").value);
    let mcv = parseFloat(document.getElementById("mcv").value);

    let gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        document.getElementById("result").innerHTML = "Please select gender.";
        return;
    }

    if (isNaN(hb) || isNaN(mcv)) {
        document.getElementById("result").innerHTML = "Please enter Hb and MCV.";
        return;
    }

    let anemia = false;
    let severity = "";

    // Male
    if (gender.value === "male") {

        if (hb < 13) {
            anemia = true;

            if (hb >= 11) {
                severity = "Mild anemia";
            } else if (hb >= 8) {
                severity = "Moderate anemia";
            } else {
                severity = "Severe anemia";
            }
        }

    }

    // Female
    else {

        if (hb < 12) {
            anemia = true;

            if (hb >= 11) {
                severity = "Mild anemia";
            } else if (hb >= 8) {
                severity = "Moderate anemia";
            } else {
                severity = "Severe anemia";
            }
        }

    }


    let type = "";

    if (mcv < 80) {
        type = "Microcytic pattern";
    } 
    else if (mcv <= 100) {
        type = "Normocytic pattern";
    } 
    else {
        type = "Macrocytic pattern";
    }


    let finalResult = "";

    if (anemia) {

        finalResult =
        "Anemia: YES<br>" +
        "Severity: " + severity + "<br>" +
        "Pattern: " + type;

    } else {

        finalResult =
        "Anemia: NO";

    }


    document.getElementById("result").innerHTML = finalResult;


    // Save result temporarily
    window.currentResult = {
        gender: gender.value,
        hb: hb,
        mcv: mcv,
        result: finalResult.replace(/<br>/g, " ")
    };

});


// Save Patient button
document.getElementById("saveBtn").addEventListener("click", function () {

    if (!window.currentResult) {
        alert("Please analyze the patient first.");
        return;
    }

    let patients = JSON.parse(localStorage.getItem("patients")) || [];

    let patient = {
        id: patients.length + 1,
        gender: window.currentResult.gender,
        hb: window.currentResult.hb,
        mcv: window.currentResult.mcv,
        result: window.currentResult.result,
        date: new Date().toLocaleDateString()
    };

    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));

    alert("Patient saved successfully!");

});
