const events = [
  { name: "AI Workshop", type: "tech", duration: 3 },
  { name: "Web Dev Bootcamp", type: "tech", duration: 2 },
  { name: "Live Concert", type: "music", duration: 3 },
  { name: "DJ Night", type: "music", duration: 2 },
  { name: "Cricket Tournament", type: "sports", duration: 3 },
  { name: "Fun Games", type: "sports", duration: 1 }
];

function suggestEvent() {
  let name = document.getElementById("username").value || "User";
  let interest = document.getElementById("interest").value;
  let time = parseInt(document.getElementById("time").value);
  let result = document.getElementById("result");

  if (!time || time <= 0) {
    result.innerText = "⚠️ Please enter valid time!";
    return;
  }

  let filtered = events.filter(e => e.type === interest && e.duration <= time);

  if (filtered.length === 0) {
    result.innerText = `😅 Sorry ${name}, no matching events found!`;
    return;
  }

  // Sort by best duration (priority logic)
  let best = filtered.sort((a, b) => b.duration - a.duration);

  result.innerHTML = `
    👋 Hello ${name}!<br><br>
    🔥 Best Choice:<br>
    👉 ${best[0].name} (${best[0].duration} hrs)<br><br>
    🎯 Other Options:<br>
    ${best.slice(1).map(e => `👉 ${e.name} (${e.duration} hrs)`).join("<br>")}
  `;
}

// Reminder feature
function setReminder() {
  let time = document.getElementById("reminderTime").value;

  if (!time || time <= 0) {
    alert("⚠️ Enter valid reminder time!");
    return;
  }

  alert("⏳ Reminder set!");

  setTimeout(() => {
    alert("⏰ Event Reminder: Your event is starting!");
  }, time * 1000);
}