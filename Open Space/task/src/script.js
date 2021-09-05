let okBut = document.getElementById("okBut");
let launchBut = document.getElementById("launch");
let rocket = document.getElementById("rocket");

okBut.addEventListener("click", ev => {
    let password = document.getElementById("password").value;

    if (password === "TrustNo1"){
        let inputs = document.getElementsByTagName("input")
        for(let inputTag of inputs){
            inputTag.disabled = false;
        }
        launchBut.setAttribute("disabled", "")
    }
})

let lever = document.querySelectorAll("[type='range']");
let controlPanelInner = document.getElementsByClassName('control-panel__inner')[0];

function rocketStart() {
    launchBut.removeAttribute("disabled");
    launchBut.addEventListener("click", ev => {
        rocket.animate([
            { // current position of your rocket
                left: '140px',
                bottom: '135px'
            },
            { //  final position of your rocket
                left: '450px',
                bottom: '95vh'
            }
        ], {
            // timing options
            duration: 4000,
            iterations: 1
        })
    })
}


controlPanelInner.onchange = function () {
    check();
}

function getCheckedBoxes(checkB) {
    let checkboxes = document.getElementsByName(checkB);
    let checkboxesChecked = [];
    // loop over them all
    for (let i=0; i<checkboxes.length; i++) {
        // And stick the checked ones onto an array...
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i]);
        }
    }
    // Return the array if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked.length : null;
}
function check() {
    if (getCheckedBoxes("checkB") === 6 &&
        lever[0].value === '100' &&
        lever[1].value === '100' &&
        lever[2].value === '100' &&
        lever[3].value === '100' &&
        lever[4].value === '100'){
        rocketStart();
    }else{
        launchBut.setAttribute("disabled", "");
    }
}