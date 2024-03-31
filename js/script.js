let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        footer.classList.add('show-animate');
    }
    else {
        footer.classList.remove('show-animate');
    }
}
//placeholder
var myInputs = document.querySelectorAll(".main-input");

myInputs.forEach(function(input) {
    input.addEventListener('focus', function() {
    this.setAttribute("data-place", this.getAttribute("placeholder"));
    this.setAttribute("placeholder", "");
    });

    input.addEventListener('blur', function() {
    this.setAttribute("placeholder", this.getAttribute("data-place"));
    this.setAttribute("data-place", "");
    });
});
//

//

//Contact Me//



function validateAndSend() {
    var fullName = document.getElementById("fullName").value;
    var eAddress = document.getElementById("eAddress").value;
    var mNumber = document.getElementById("mNumber").value;
    var eSubject = document.getElementById("eSubject").value;
    var yMessages = document.getElementById("yMessages").value;

    if (fullName.trim() === "" || eAddress.trim() === "" || mNumber.trim() === "" || eSubject.trim() === "" || yMessages.trim() === "") {
        alert("Please fill out all fields.");
    } else {
        sendMail();
    }
}

function sendMail() {
    var fullName = document.getElementById("fullName").value;
    var eAddress = document.getElementById("eAddress").value;
    var mNumber = document.getElementById("mNumber").value;
    var eSubject = document.getElementById("eSubject").value;
    var yMessages = document.getElementById("yMessages").value;

    if (fullName.trim() === "" || eAddress.trim() === "" || mNumber.trim() === "" || eSubject.trim() === "" || yMessages.trim() === "") {
        alert("Please fill out all fields.");
        return; 
    }

    var params = {
        name: fullName,
        email: eAddress,
        mNumber: mNumber,
        eSubject: eSubject,
        message: yMessages,
    };

    const serviceID = "service_2mw0ckt";
    const templateID = "template_91vfzcv";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("fullName").value = "";
            document.getElementById("eAddress").value = "";
            document.getElementById("mNumber").value = "";
            document.getElementById("eSubject").value = "";
            document.getElementById("yMessages").value = "";
            console.log(res);
            alert("Your message sent successfully!");
        })
        .catch(err => {
            console.error("An error occurred:", err);
            alert("There was an error sending your message. Please try again later.");
        });
}



// function sendMail() {
// var params = {
//     name: document.getElementById("fullName").value,
//     email: document.getElementById("eAddress").value,
//     mNumber: document.getElementById("mNumber").value,
//     eSubject: document.getElementById("eSubject").value,
//     message: document.getElementById("yMessages").value,
// };

// const serviceID = "service_2mw0ckt";
// const templateID = "template_91vfzcv";

// emailjs.send(serviceID, templateID, params)
//     .then(res => {
//     document.getElementById("fullName").value = "";
//     document.getElementById("eAddress").value = "";
//     document.getElementById("mNumber").value = "";
//     document.getElementById("eSubject").value = "";
//     document.getElementById("yMessages").value = "";
//     console.log(res);
//     alert("Your message sent successfully!");
//     })
//     .catch(err => {
//     console.error("An error occurred:", err);
//     alert("There was an error sending your message. Please try again later.");
//     });
// }