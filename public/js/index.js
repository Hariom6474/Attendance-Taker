async function getStud(e) {
  e.preventDefault();
  const selectedDate = document.getElementById("dateInput").value;
  let datePresent;
  try {
    if (selectedDate === datePresent) {
      showMarkedAttendance();
    } else {
      markAttendance();
    }
  } catch (err) {
    console.error(err);
  }
}

function showMarkedAttendance(myObj) {
  let ulist = document.querySelector(".list-group");
  let li = document.createElement("li");
  console.log(myObj.name);
}

function markAttendance() {}

function fetchReport() {}
