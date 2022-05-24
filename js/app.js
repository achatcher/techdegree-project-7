

// ------------------ ALERT BANNER -------------------//
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = 
`<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>4</strong> unread messages</p>
    <button class="alert-banner-close">x</button>
</div>`;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});



// ------------------ Traffic Line Graph -------------------//

const trafficCanvas = document.getElementById('traffic-chart');
let monthlyTrafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
let hourlyTrafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [250, 1050, 800, 1800, 1300, 1550, 1050, 1650, 2050, 1300,
    2300],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
let dailyTrafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [950, 1450, 1200, 2200, 1700, 1950, 1450, 2050, 2450, 1700,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
let weeklyTrafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [475, 550, 1000, 800, 1400, 1760, 1250, 850, 450, 700,
    1200],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};
let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: monthlyTrafficData,
    options: trafficOptions
});
// ------------------ Daily Traffic Bar Graph -------------------//
const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});
// ------------------ Mobile Users Donut Graph -------------------//
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};
const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// ------------------ Messaging Section -------------------//
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});

  
//_______________________________________EXCEEDS EXPECTATION _______________________________________//

// ------------------------------------------- NOTIFICATIONS -------------------//
const notifications = document.getElementById("notifications");
notifications.innerHTML = 
`<div id="myDropdown" class="dropdown-content">
    <div class="message">
        <a href="#">You have 4 unread messages</a>
        <button class="message-close">x</button>
    </div>
    <div class="message">
        <a href="#">You have 3 new followers</a>
        <button class="message-close">x</button>
    </div>
</div>`;

// Get the button, and when the user clicks on it, execute getNotifications
document.querySelector(".bell-icon").onclick = function() {getNotifications()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function getNotifications() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// ------------------------------------- SEARCH AUTOCOMPLETE -------------------//

var members = ["Dan Oliver","Dawn Wood","Victoria Chambers","Dale Byrd"];

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

// ------------------------------------- LOCAL STORAGE -------------------//





  
// ------------------------------------- CHART UPDATE-------------------//
 
// let monthlyTrafficData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];

// let hourlyTrafficData = [250, 1050, 800, 1800, 1300, 1550, 1050, 1650, 2050, 1300,2300];

// let dailyTrafficData = [950, 1450, 1200, 2200, 1700, 1950, 1450, 2050, 2450, 1700, 2500];

// let weeklyTrafficData = [475, 550, 1000, 800, 1400, 1760, 1250, 850, 450, 700, 1200];

// function updateChart(chart, newData) {
//     chart.data.datasets[0].data = newData;
//     chart.update();
// };  

// const btnContainer = document.querySelector(".switch-toggle");
// const navBtns = document.getElementsByClassName("traffic-nav");

// btnContainer.addEventListener("click", (e) => {
//     const element = e.target;

//     if (element.classList.contains('hourly')) {
//         updateChart(trafficChart, hourlyTrafficData);
//     } else if (element.classList.contains('daily')) {
//         updateChart(trafficChart, dailyTrafficData);
//     } else if (element.classList.contains('weekly')) {
//         updateChart(trafficChart, weeklyTrafficData);
//     } else if (element.classList.contains('monthly')) {
//         updateChart(trafficChart, monthlyTrafficData);
//     }
// });

