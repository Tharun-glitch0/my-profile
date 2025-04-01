var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919360375957'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>9360375957</label></div> </a> <a href='mailto:tharunprakash916@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Tharun-glitch0'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/919360375957'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/EdwardKenway_pirate'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/tharunprakash1510?igsh=MW13YmxuaHF5czc5cw=='> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/tharun-prakash-218145283' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Tharun Prakash Resume.pdf</label></div><a href='./assets/tharunprakash_resume.pdf' download='Tharun_Prakash_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.861078040139!2d80.13541907507661!3d12.980735987335498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzUwLjciTiA4MMKwMDgnMTYuOCJF!5e0!3m2!1sen!2sin!4v1742362126075!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>13/315, PILLAIYAR KOVIL ST<br>NEHRU NAGAR, POLICHALUR<br>CHENNAI, TAMILNADU, INDIA 600074</address>";
var editorString = "You want to check my Edited Videos? Then just click the videos below : <br><br><div><label>1.My Vote My Rights</label> <br><video src='./assets/FINAL EXENTED CUT.mp4' class='resumeThumbnail' controls></div> <br><br><div><label>2.Memories</label> <br><video src='./assets/MEMORIES .mp4' class='resumeThumbnail' controls></div> ";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>I am <span class='bold'><a class='alink'>Tharun Prakash</a>.</span><br><br>I am a Computer Application student at <span class='bold'>Madras University 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'editor'</span> - to see my edited videos<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing <span class='bold'><a class='alink'>MCA degree in Madras University</a></span><br><br>I can comfortably write code in following languages :<br><span class='bold'>HTML<br>CSS<br>JAVASCRIPT<br>SQL<br>Python</span><br><br>I've experiance with following frameworks :<span class='bold'><br>BOOTSTRAP<br>WEB2PY<br>FLASk</span><br><br>I use <span class='bold'>WINDOWS</span> as daily driver on my LENOVO IDEAPAD<br>OS:windows 10<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing <span class='bold'><a class='alink'>MCA at Madras University</a></span><br>Passing Year : 2026<br><br>I have completed My <span class='bold'><a class='alink'>BCA degree at A.M.Jain college<a></span><br>Passing Year:2024<br>Result:<span class='bold'><a class='alink'>74.48%</a></span><br><br>I have completed my <span class='bold'><a class='alink'>Secondary  Higher school at Marya Nivas Higher Sec school</a></span><br>Passing Year:2021<br>Result:<span class='bold'><a class='alink'>72.80%</a></span><br><br>I have completed my  <span class='bold'><a class='alink'>High school at Aringar Anna Cantonment High school</a></span><br>Passing Year:2019<br>Result:<span class='bold'><a class='alink'>56.20%</a></span>");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/Tharunprakash1510/'><span class='bold'>THARUN PRAKASH</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Tharun-glich0'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "editor":
            sendTextMessage(editorString);
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        case "hi":
            sendTextMessage("HELLO 👋🏻 Im Tharun Prakash <br> How can i help you? <br> Just type 'help' to get more information about me .");
            break;
        case "hello":
            sendTextMessage("HELLO 👋🏻 Im Tharun Prakash <br> How can i help you? <br> Just type 'help' to get more information about me .");
            break;
        case "do you know priyanka":
            sendTextMessage("YES....! <br>She is my girl ❤️, She always support me 🤗 , She always loves me 🥰<br>So we waiting for each other to live long together 😇 <br> I LOVE YOU 3000 😘");
            break;
        case "priyanka":
            sendTextMessage("YES....! <br>She is my girl ❤️, She always support me 🤗 , She always loves me 🥰<br>So we waiting for each other to live long together 😇 <br> I LOVE YOU 3000 😘");
            break;
        case "love you":
            sendTextMessage("LOVE U TOO 😘");
            break;    
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
