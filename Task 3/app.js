// Function to update the date display
function updateDateDisplay() {
    const dayElement = document.getElementById('day');
    const monthDate = document.getElementById('month-date');
    const now = new Date();
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const date = now.getDate();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    dayElement.innerHTML = `${day},&nbsp;`;
    monthDate.innerHTML = `${month} ${date}`;
}
updateDateDisplay();

// Function to perform adding list and storing 
const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const videoContainer = document.getElementById('video-container');
const backgroundVideo = document.getElementById('background-video');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    checkTasks();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
        checkTasks();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    checkTasks();
}

function checkTasks() {
    if (listContainer.children.length === 0) {
        videoContainer.classList.remove('hidden');
        backgroundVideo.play();
    } else {
        videoContainer.classList.add('hidden');
        backgroundVideo.pause();
    }
}

showTask();
