var timezone1="America/Toronto"
var timezone2="Asia/Kolkata"


const deg=6;
const hr= document.querySelector("#hr");
const mn= document.querySelector("#mn");
const sc= document.querySelector("#sc");

setInterval ( () => {
    let day = new Date()
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

},1000)


function getTime(timezone){
    return new Date().toLocaleString("en-US",{timeZone:timezone, hourCycle:"h24", hour:"numeric", minute:"numeric", second:"numeric"});

}
function getDay(timezone){
    return new Date().toLocaleString("en-US",{timeZone:timezone, weekday:"long", month:"short", day:"numeric"});
}


setInterval(() =>{document.getElementById("zone1Time").innerHTML =getTime(timezone1)},1000)
setInterval(() =>{document.getElementById("zone1day").innerHTML =getDay(timezone1)},1000)
setInterval(() => {document.getElementById("zone2Time").innerHTML =getTime(timezone2)},1000)
setInterval(() => {document.getElementById("zone2day").innerHTML =getDay(timezone2)},1000)

function openSlideMenu(){
    document.getElementById('side-menu').style.width = '330px';
  }

function closeSlideMenu(){
document.getElementById('side-menu').style.width = '0';
}

function openSearchDropdown(mydropdownid) {
document.getElementById(mydropdownid).classList.toggle("show");
}

function closeSearchDropdown(mydropdownid) {
    document.getElementById(mydropdownid).classList.toggle("show");
}

function selectFilteredValue(mydropdownid,search_inputid) {
    document.getElementById(search_inputid).value = event.target.getAttribute("data-value");
    closeSearchDropdown(mydropdownid);
}

function filterSearchDropdown(mydropdownid,search_valueid) {
    var input, filter, ul, li, span, i;
    input = document.getElementById(search_valueid);
    filter = input.value.toUpperCase();
    div = document.getElementById(mydropdownid);
    span = div.getElementsByTagName("span");
    for (i = 0; i < span.length; i++) {
        txtValue = span[i].textContent || span[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            span[i].style.display = "";
        } else {
            span[i].style.display = "none";
        }
    }
}

function onchangedropdown1() {
    timezone1=document.getElementById("search_input1").value
}
function onchangedropdown2() {
    timezone2=document.getElementById("search_input2").value
    
}

function onkeypresstitletz1() {
    document.getElementById("tz1title").innerHTML=document.getElementById("timezone1title").value
}

function onkeypresstitletz2() {
    document.getElementById("tz2title").innerHTML=document.getElementById("timezone2title").value
}


