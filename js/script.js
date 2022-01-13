const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");

const result = document.querySelector(".result");
const loading = document.querySelector(".result_loading");
const modal = document.querySelector("#modal");

function calculator(){
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");
    const timeValue_int = Number(timeValue.value);
    
    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == ""){
        alert("분야가 입력되지 않았습니다.");
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ""){
        alert("시간이 입력되지 않았습니다.");
        timeValue.focus();
        return false;
    } else if(timeValue_int > 24){
        alert("24 이하의 값을 입력해주세요");
        timeValue.focus();
        return false;
    }
    result.style.display = "none";
    loading.style.display = "flex";
    setTimeout(function(){
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt(10000/timeValue_int);
        loading.style.display = "none";
        result.style.display = "flex";
    }, 1800);
}

function openModal(){
    modal.style.display = "flex";
}

function copyUrl(){
    let url = window.document.location.href;
	let textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}

function closeModal(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        closeModal();
    }
}

startButton.addEventListener('click', calculator)
openButton.addEventListener('click', openModal)
shareButton.addEventListener('click', copyUrl)
closeButton.addEventListener('click', closeModal)
