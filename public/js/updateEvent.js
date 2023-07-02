// Update Location

const updateEventLocationHandler = async (event) => {
  const updateEventID = document.querySelector("#update-event-id").value.trim();
  const location = document.querySelector("#new-location").value.trim();
  if (updateEventID && location) {
    const response = await fetch(`/admin/${updateEventID}`, {
      method: "PUT",
      body: JSON.stringify({ location }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert(`Event location updated!`);
      document.location.replace("/admin");
    } else {
      alert("Failed to update event");
    }
  }
};

document
  .querySelector("#update-event-btn")
  .addEventListener("click", updateEventLocationHandler);

//Update time

const updateEventDateHandler = async (event) => {
  const updateEventID = document
    .querySelector("#update-event-date-id")
    .value.trim();
  const time = document.querySelector("#new-time").value.trim();
  if (updateEventID && time) {
    const response = await fetch(`/admin/${updateEventID}`, {
      method: "PUT",
      body: JSON.stringify({ time }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert(`Event location updated!`);
      document.location.replace("/admin");
    } else {
      alert("Failed to update event");
    }
  }
};

document
  .querySelector("#update-event-date-btn")
  .addEventListener("click", updateEventDateHandler);
