document.addEventListener("DOMContentLoaded", function () {
    const isServicesPage = window.location.href.includes("services.html");

    if (isServicesPage) {
        const dropdownLinks = document.querySelectorAll(".dropdown-content a");

        dropdownLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = this.getAttribute("href").split("#")[1]; // Extrahera ankaret från href
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                    });
                }
            });
        });

        toggleList('general-container', 'general-heading', 'general-list', 'caret-img');
        toggleList('general2-container', 'general2-heading', 'general-list2', 'caret-img');
        toggleList('general3-container', 'general3-heading', 'general-list3', 'caret-img');
        toggleList('general4-container', 'general4-heading', 'general-list4', 'caret-img');
        toggleList('general5-container', 'general5-heading', 'general-list5', 'caret-img');
        toggleList('general6-container', 'general6-heading', 'general-list6', 'caret-img');
        toggleList('general7-container', 'general7-heading', 'general-list7', 'caret-img');
        toggleList('general8-container', 'general8-heading', 'general-list8', 'caret-img');
        toggleList('general9-container', 'general9-heading', 'general-list9', 'caret-img');
        toggleList('general10-container', 'general10-heading', 'general-list10', 'caret-img');
        toggleList('general11-container', 'general11-heading', 'general-list11', 'caret-img');
        toggleList('general12-container', 'general12-heading', 'general-list12', 'caret-img');
    }
});
function toggleList(containerId, headingId, listId, caretId) {
    const container = document.getElementById(containerId);

    if (container) {
        const heading = document.getElementById(headingId);
        const list = document.getElementById(listId);
        const caret = document.getElementById(caretId);

        container.addEventListener("click", function () {
            list.style.display = list.style.display === "none" || list.style.display === ""
                ? "block"
                : "none";
        });

        heading.addEventListener("click", function (event) {
            event.stopPropagation();
            list.style.display = list.style.display === "none" || list.style.display === ""
                ? "block"
                : "none";
        });

        caret.addEventListener("click", function (event) {
            event.stopPropagation();
            list.style.display = list.style.display === "none" || list.style.display === ""
                ? "block"
                : "none";
        });
    } else {
        console.error(`Element with ID ${containerId} not found.`);
    }
}

function submitForm() {
    const firstname = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Visa popup när formuläret skickas
    openCustomPopup();
}

function openCustomPopup() {
    const customPopup = document.getElementById("customPopup");
    if (customPopup) {
        customPopup.style.display = "block";
        console.log("Popup öppnad");
    }
}

function closeCustomPopup() {
    const customPopup = document.getElementById("customPopup");
    if (customPopup) {
        customPopup.style.display = "none";
        console.log("Popup stängd");
    }
}