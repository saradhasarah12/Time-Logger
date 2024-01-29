const startStopButton = document.getElementById('startStop');
const inputDiv = document.getElementById('input-div');
const table = document.getElementById('table');
const task = document.getElementById('task');
const desc = document.getElementById('desc');
const num = document.getElementById('num');

let sec = 0;
let interval;
let isTimerRunning = false;

function startStopTimer() {
    if (!isTimerRunning) {
        interval = setInterval(function () {
            sec++;
            updateTimer();
        }, 1000);
        isTimerRunning = true;

        startStopButton.textContent = 'Stop Timer';
        startStopButton.style.backgroundColor = 'tomato';
    } 
    
    else {
        clearInterval(interval);
        isTimerRunning = false;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${task.value}</td>
            <td>${desc.value}</td>
            <td>${num.textContent}</td>
        `;
    
        newRow.classList.add('apply-style');
    
        table.appendChild(newRow);
        task.value = '';
        desc.value = '';
        sec = 0;
        updateTimer();
        
        startStopButton.textContent = 'Start Timer';
        startStopButton.style.backgroundColor = '#55a630';
    }
}

function updateTimer() {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    num.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startStopButton.addEventListener("click", startStopTimer);
