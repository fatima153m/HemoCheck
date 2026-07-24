document.querySelector("button").addEventListener("click", function () {

    let hb = parseFloat(document.getElementById("hb").value);
    let mcv = parseFloat(document.getElementById("mcv").value);

    let gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        document.getElementById("result").innerHTML = "Please select gender.";
        return;
    }

    let anemia = false;

    if (gender.value === "male") {
        anemia = hb < 13;
    } else {
        anemia = hb < 12;
    }

    let type = "";

    if (mcv < 80) {
        type = "Microcytic";
    } else if (mcv <= 100) {
        type = "Normocytic";
    } else {
        type = "Macrocytic";
    }

    if (anemia) {
        document.getElementById("result").innerHTML =
            "Anemia: YES<br>Type: " + type;
    } else {
        document.getElementById("result").innerHTML =
            "Anemia: NO";
    }

});
