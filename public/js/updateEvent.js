const updateEventHandler = async (event) => {
    const updateEventID = document.querySelector("#update-event-id").value.trim();
    const location = document.querySelector("#new-location").value.trim();
    if (updateEventID && location) {
      const response = await fetch(`/admin/${updateEventID}`, {
        method: "PUT",
        body: JSON.stringify({ location }),
        headers: { 'Content-Type': 'application/json' },
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
    .addEventListener("click", updateEventHandler);
  