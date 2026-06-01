//form
/*const inputs = document.querySelectorAll(".input");

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
        });*/

// Chat form

 

const flow = [

{
question:"Explore Solutions by Specialty",
answer:"Please select your specialty to continue."
},

{
question:"Request Product Demo",
answer:"Absolutely.<br><br>Please share:<br>• Doctor/Hospital Name<br>• Specialty<br>• City<br>• Preferred Date<br><br>Our clinical team will coordinate a demo or discussion."
},

{
question:"Book Scientific Discussion",
answer:"Please share your specialty, hospital name, city and preferred discussion topic. Our medical team will connect shortly."
},

{
question:"Compare Technologies",
answer:"We provide advanced minimally invasive energy-based solutions including laser-assisted and other modern surgical technologies depending on specialty and clinical requirements."
},

{
question:"Training & Workshops",
answer:"Lasermart regularly conducts workshops, clinical discussions and hands-on training programs across multiple specialties."
},

{
question:"Pricing & Commercials",
answer:"Please share your specialty, hospital/clinic name and requirement. Our commercial team will connect with detailed information."
},

{
question:"Service & Support",
answer:"Our technical and clinical support teams are available for installations, training, service assistance and OT support across India."
},

{
question:"Connect With Team",
answer:"Please share your Name, Hospital/Clinic, Specialty, City and Contact Number. Our team will connect shortly."
},

{
question:"What is Lasermart?",
answer:"Lasermart provides advanced energy-based medical technologies across multiple specialties including General Surgery, Vascular Surgery, Urology, Gynecology, Plastic Surgery, ENT, Dental, Neuro & Spine, Pain Management and Interventional Radiology."
},

{
question:"Are you only a laser company?",
answer:"No. Lasermart has evolved beyond lasers into a complete advanced energy-based surgical solutions platform offering multiple minimally invasive technologies across specialties."
},

{
question:"Which cities do you operate in?",
answer:"We operate across India with active clinical discussions, demos, installations, workshops and surgeon support programs."
},

{
question:"Which specialties do you cater to?",
answer:"We provide solutions for:<br><br>• General Surgery<br>• Vascular Surgery<br>• Urology<br>• Gynecology<br>• Plastic Surgery<br>• ENT<br>• Dental<br>• Neuro & Spine<br>• Pain Management<br>• Interventional Radiology<br><br>Please select your specialty to continue."
},

{
question:"Which technologies do you provide?",
answer:"We provide advanced minimally invasive energy-based solutions including laser-assisted and other modern surgical technologies depending on specialty and clinical requirements."
},

{
question:"Can I get complete product details?",
answer:"Yes. Since many technologies are specialty-specific, detailed product discussions are conducted directly with surgeons or hospital teams.<br><br>Please share:<br>• Specialty<br>• Hospital/Clinic Name<br>• City<br>• Requirement<br><br>Our team will connect shortly."
},

{
question:"Are your solutions approved and clinically used?",
answer:"Yes. Our technologies are clinically used by surgeons and hospitals and comply with applicable regulatory standards depending on product category."
},

{
question:"Can I book a demo?",
answer:"Absolutely.<br><br>Please share:<br>• Doctor/Hospital Name<br>• Specialty<br>• City<br>• Preferred Date<br><br>Our clinical team will coordinate a demo or discussion."
},

{
question:"Do you provide OT demonstrations?",
answer:"Yes. OT support and live clinical assistance may be arranged subject to scheduling and case planning."
}

];

const chatbox = document.getElementById("chatbox");

/* OPEN CHAT */

function openChat(){

  document.getElementById("chatbot").style.display = "flex";

  document.getElementById("welcomePopup").style.display = "none";

  if(chatbox.innerHTML.trim() === ""){

    showBotMessage(`
      Welcome to Lasermart 👋
      <br><br>
      India’s advanced energy-based surgical solutions partner.
      <br><br>
      How may we assist you today?
    `);

    showOptions(flow);

  }

}

/* CLOSE CHAT */

function closeChat(){

  document.getElementById("chatbot").style.display = "none";

}

/* CLOSE POPUP */

function closePopup(){

  document.getElementById("welcomePopup").style.display = "none";

}

/* BOT MESSAGE */

function showBotMessage(message){

  const row = document.createElement("div");

  row.className = "bot-row";

  row.innerHTML = `

    <div class="bot-avatar">👩</div>

    <div class="bot-message">
      ${message}
    </div>

  `;

  chatbox.appendChild(row);

}

/* USER MESSAGE */

function showUserMessage(text){

  const div = document.createElement("div");

  div.className = "user-message";

  div.innerText = text;

  chatbox.appendChild(div);

}

/* SHOW OPTIONS */

function showOptions(optionsArray){

  const optionsDiv = document.createElement("div");

  optionsDiv.className = "options";

  optionsArray.forEach(item=>{

    const btn = document.createElement("button");

    btn.className = "option-btn";

    btn.innerText = item.question;

    btn.onclick = (event)=>{

      // IMPORTANT FIX
      // STOP WINDOW CLICK EVENT

      event.stopPropagation();

      // USER QUESTION

      showUserMessage(item.question);

      // REMOVE OLD QUESTIONS

      optionsDiv.remove();

      // BOT ANSWER

      setTimeout(()=>{

        showBotMessage(item.answer);

        // AGAIN SHOW ALL QUESTIONS

        setTimeout(()=>{

          showOptions(flow);

        },400);

      },500);

    };

    optionsDiv.appendChild(btn);

  });

  chatbox.appendChild(optionsDiv);

}

/* AUTO SCROLL DISABLED */

function scrollBottom(){

}

/* AUTO HIDE POPUP */

setTimeout(()=>{

  const popup = document.getElementById("welcomePopup");

  if(popup){

    popup.style.display = "none";

  }

},10000);

/* OUTSIDE CLICK CLOSE FIX */

document.addEventListener("click", function(event){

  const chatbot = document.getElementById("chatbot");

  const chatIcon = document.querySelector(".chat-icon");

  // IF CHATBOT CLOSED
  if(chatbot.style.display === "none") return;

  // CLICK INSIDE CHATBOT
  if(chatbot.contains(event.target)) return;

  // CLICK CHAT ICON
  if(chatIcon.contains(event.target)) return;

  // OTHERWISE CLOSE CHAT
  chatbot.style.display = "none";

});



