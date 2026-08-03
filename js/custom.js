//form
//==================== FORM INPUT ANIMATION ====================

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


//==================== GOOGLE SHEET URL ====================

const scriptURL = "https://script.google.com/macros/s/AKfycbwDKylzY30_fbCxo-v_jwq1sIK6ff4Vv_R-6ZfebeYSEXjZCtenbv2vwCjm5RAFq0vh/exec";


//==================== FORM SUBMIT ====================
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
         e.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const submitBtn = form.querySelector(".btn");
    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
    .then(response => response.text())
    .then(data => {

        alert("✅ Thank You! Your form has been submitted successfully.");

        form.reset();

        document.querySelectorAll(".input-container").forEach(function(item){
            item.classList.remove("focus");
        });

    })
    .catch(error => {

        console.error(error);
        alert("❌ Error! Data could not be saved.");

    })
    .finally(() => {

        submitBtn.disabled = false;
        submitBtn.value = "Send";

    });
    });
}


const demoScriptURL = "https://script.google.com/macros/s/AKfycbzEPQC2h7es3xqG7aMKZlQF_gneo-9bBrbBL3uugdfl37Prql3rbiiGr0nvUqhJfad9/exec";

const demoForm = document.getElementById("demoForm");

if (demoForm) {
    demoForm.addEventListener("submit", function (e) {
        e.preventDefault();

    if (!demoForm.checkValidity()) {
        demoForm.reportValidity();
        return;
    }

    const btn = demoForm.querySelector("button");
    btn.disabled = true;
    btn.innerHTML = "Submitting...";

    fetch(demoScriptURL, {
        method: "POST",
        body: new FormData(demoForm)
    })
    .then(res => res.text())
    .then(() => {
        alert("✅ Demo request submitted successfully.");
        demoForm.reset();
        closePopup();
    })
    .catch(err => {
        console.error(err);
        alert("❌ Submission Failed");
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerHTML = "Book Free Demo";
    });
    });
}


// Training Form

const trainingScriptURL = "https://script.google.com/macros/s/AKfycbw19naZobzq4eNm_D-By2uBQ3Gq98dNFBtpBRKwkbiFQx5F1SRCaCZVoO1Ln9_L-4IM/exec";

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
          e.preventDefault();

    if (!enquiryForm.checkValidity()) {
        enquiryForm.reportValidity();
        return;
    }

    const btn = enquiryForm.querySelector("button");
    btn.disabled = true;
    btn.innerHTML = "Submitting...";

    fetch(trainingScriptURL, {
        method: "POST",
        body: new FormData(enquiryForm)
    })
    .then(res => res.text())
    .then(() => {
        alert("✅ Training enquiry submitted successfully.");
        enquiryForm.reset();
        closeDemoPopup();   // Training popup close
    })
    .catch(err => {
        console.error(err);
        alert("❌ Submission Failed");
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerHTML = "Submit Enquiry";
    });
    });
}


// Chat form






