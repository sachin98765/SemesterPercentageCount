// Function to calculate obtained marks
function calculateMarks() {
    const oddSubjects = parseInt(document.getElementById("oddSubjects").value);
    const evenSubjects = parseInt(document.getElementById("evenSubjects").value);
    const percentage = parseFloat(document.getElementById("percentage").value);

    if (isNaN(oddSubjects) || isNaN(evenSubjects) || isNaN(percentage)) {
        document.getElementById("marksResult").textContent = "Please enter valid inputs.";
        return;
    }

    const total1 = oddSubjects * 100;
    const total2 = evenSubjects * 100;
    const finalTotalMarks = total1 + total2;
    const obtainedMarks = (finalTotalMarks / 100) * percentage;

    document.getElementById("marksResult").textContent = `Final Total Marks: ${finalTotalMarks}, Obtained Marks: ${obtainedMarks.toFixed(2)}`;
}

// Function to calculate final YGPA
function calculateYGPA() {
    const sgpa1 = parseFloat(document.getElementById("sgpa1").value);
    const sgpa2 = parseFloat(document.getElementById("sgpa2").value);

    if (isNaN(sgpa1) || isNaN(sgpa2)) {
        document.getElementById("ygpaResult").textContent = "Please enter valid SGPA values.";
        return;
    }

    const ygpa = (sgpa1 + sgpa2) / 2;
    const finalYGPA = (ygpa - 0.75) * 10;

    document.getElementById("ygpaResult").textContent = `YGPA: ${ygpa.toFixed(2)}, Final YGPA: ${finalYGPA.toFixed(2)}`;
}
