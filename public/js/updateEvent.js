const updateEventHandler = async (event) => {
  event.preventDefault();
  const updateEventID = document.querySelector("#update-event-id").value.trim();
  const newLocation = document.querySelector("#new-location").value.trim();

  if (updateEventID && newLocation) {
    const response = await fetch(`/admin/${updateEventID}`, {
      method: "PUT",
      body: JSON.stringify({
        newLocation,
        updateEventID,
      }),
    });

    if (response.ok) {
      document.location.replace("/admin");
    } else {
      alert("Failed to update event");
    }
  }
};

document
  .querySelector("#update-event-btn")
  .addEventListener("submit", updateEventHandler);
