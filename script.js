document.getElementById("analyzeBtn").onclick = function () {

    let hb = Number(document.getElementById("hb").value);
    let mcv = Number(document.getElementById("mcv").value);

    let gender = document.querySelector('input[name="gender"]:checked');

    let result = document.getElementById("result");


    if (!gender) {
        result.innerHTML = "Please select gender";
        return;
    }


    if (!hb || !mcv) {
        result.innerHTML = "Please enter Hb and MCV";
        return;
    }


    let anemia = false;
    let severity = "";


    if (gender.value === "male") {

        if (hb < 13) {
            anemia = true;

            if (hb >= 11) {
                severity = "Mild anemia";
            } 
            else if (hb >= 8) {
                severity = "Moderate anemia";
            } 
            else {
                severity = "Severe anemia";
            }
        }

    } else {

        if (hb < 12) {
            anemia = true;

            if (hb >= 11) {
                severity = "Mild anemia";
            } 
            else if (hb >= 8) {
                severity = "Moderate anemia";
            } 
            else {
                severity = "Severe anemia";
            }
        }

    }


    let pattern = "";

    if (mcv < 80) {
        pattern = "Microcytic";
    } 
    else if (mcv <= 100) {
        pattern = "Normocytic";
    } 
    else {
        pattern = "Macrocytic";
    }



    if (anemia) {

        result.innerHTML =
        "⚠️ Anemia: YES<br>" +
        "Severity: " + severity + "<br>" +
        "Pattern: " + pattern;

    } 

    else {

        result.innerHTML =
        "✅ Anemia: NO<br>" +
        "Pattern: " + pattern;

    }

};
