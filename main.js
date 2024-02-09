function checkBloodSugar() {
    try {
        var bloodSugarInput = document.getElementById("bloodSugarInput").value;
        if (!bloodSugarInput.trim()) {
            throw "Please enter a valid value for blood sugar.";
        }

        var bloodSugar = parseFloat(bloodSugarInput);

        if (isNaN(bloodSugar)) {
            throw "Please enter a valid number for blood sugar.";
        }

        if (bloodSugar < 70) {
            document.getElementById("result").innerText = "Your blood sugar level is too low. Please consult a doctor.";
            // alert("Your blood sugar level is too low. Please consult a doctor.");
        } else if (bloodSugar >= 70 && bloodSugar <= 100) {
            document.getElementById("result").innerText = "Your blood sugar level is normal.";
            // alert("Your blood sugar level is normal.");
        } else {
            document.getElementById("result").innerText = "Your blood sugar level is above normal. You should seek medical attention for stability.";
            // alert("Your blood sugar level is above normal. Please ensure stability.");
        }
    } catch (error) {
        alert(error);
    }
}
function checkPressure() {
    var pressure = document.getElementById("pressure").value;
    var resultElement = document.getElementById("result_pressure");

    if (pressure < 90) {
        document.getElementById("result_pressure").innerText = "Your blood pressure is too low. Please consult a doctor.";
    } else if (pressure >= 90 && pressure <= 120) {
        document.getElementById("result_pressure").innerText = "Your blood pressure is normal.";
    } else {
        document.getElementById("result_pressure").innerText= "Your blood pressure is high. You should seek medical attention for stability.";
    }
  }
