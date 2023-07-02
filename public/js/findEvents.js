const findEventHandler = async (event) => {
  const event_title = document.querySelector("#eventSearch").value.trim();
  if (searchEventTerm) {
    const response = await fetch("/", {
      method: "GET",
      body: JSON.parse({ searchEventTerm }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/event");
    } else if (searchEventTerm == 0) {
      document.location.replace("/event");
    } else {
      alert("Failed to find event with that title");
    }
  }
};

document
  .querySelector("#eventSearchButton")
  .addEventListener("click", findEventHandler);
