const socT=document.querySelector(".twitter");
const socD=document.querySelector(".dribble");
const socL=document.querySelector(".linkedin");
const socG=document.querySelector(".github");

const socNameT=document.getElementById("twittern");
const socNameD=document.getElementById("dribblen");
const socNameL=document.getElementById("linkedinn");
const socNameG=document.getElementById("githubn");

console.warn("this is a warning");
console.info("this is a  info");

socT.addEventListener("mouseover", ()=>{socNameT.classList.add("soc-active");
});

socT.addEventListener("mouseout", ()=>{socNameT.classList.remove("soc-active");
});


socD.addEventListener("mouseover", ()=>{socNameD.classList.add("soc-active");
});

socD.addEventListener("mouseout", ()=>{socNameD.classList.remove("soc-active");
});


socL.addEventListener("mouseover", ()=>{socNameL.classList.add("soc-active");
});

socL.addEventListener("mouseout", ()=>{socNameL.classList.remove("soc-active");
});


socG.addEventListener("mouseover", ()=>{socNameG.classList.add("soc-active");
});

socG.addEventListener("mouseout", ()=>{socNameG.classList.remove("soc-active");
});



console.log("hello");

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

