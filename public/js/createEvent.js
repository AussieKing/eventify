const addEventFormHandler = async (event) => {
  event.preventDefault();

  const eventTitleEl = document.querySelector("#event-name").value.trim();
  const eventDescriptionEl = document
    .querySelector("#event-description")
    .value.trim();
  const hostIDEl = document.querySelector("#host-id").value.trim();
  const eventTimeEl = document.querySelector("#event-time").value.trim();
  const eventPriceEl = document.querySelector("#event-price").value.trim();
  const eventLocationEl = document
    .querySelector("#event-location")
    .value.trim();
  const eventStatusEl = document.querySelector("#event-status").value.trim();
  const eventPhotoEl = document.querySelector("#event-photo").value.trim();

  console.log(eventTitleEl);
  console.log(eventDescriptionEl);
  console.log(hostIDEl);
  console.log(eventTimeEl);
  console.log(eventLocationEl);
  console.log(eventPriceEl);
  console.log(eventPhotoEl);
  console.log(eventStatusEl);

  if (
    hostIDEl &&
    eventTimeEl &&
    eventPriceEl &&
    eventLocationEl &&
    eventStatusEl &&
    eventTitleEl &&
    eventDescriptionEl &&
    eventPhotoEl
  ) {
    const response = await fetch(`/admin`, {
      method: "POST",
      body: JSON.stringify({
        hostIDEl,
        eventTimeEl,
        eventPriceEl,
        eventLocationEl,
        eventStatusEl,
        eventDescriptionEl,
        eventTitleEl,
        eventPhotoEl,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/admin");
    } else {
      alert("Failed to create event!");
    }
  }
};

// Submit event on the form

document
  .querySelector(".new-event-form")
  .addEventListener("submit", addEventFormHandler);
