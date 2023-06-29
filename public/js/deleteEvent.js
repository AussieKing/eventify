const deleteEventHandler = async (event) => {
  const deleteEventID = document.querySelector("#delete-event-id").value.trim();
  if (deleteEventID) {
    const response = await fetch(`/admin/${deleteEventID}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/admin");
    } else {
      alert("Failed to delete event");
    }
  }
};

document
  .querySelector("#delete-event-btn")
  .addEventListener("click", deleteEventHandler);
