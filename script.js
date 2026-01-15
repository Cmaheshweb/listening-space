function showSection(sectionId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Navigation click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = this.getAttribute('data-section');
        showSection(section);
    });
});

// Booking form submit → WhatsApp redirect
document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const reason = document.getElementById("reason").value;
    const sessionType = document.getElementById("session-type").value;
    const contact = document.getElementById("contact").value;

    // ✅ WhatsApp number WITH country code
    const whatsappNumber = "917028420075"; // +91 7028420075

    let sessionText =
        sessionType === "free"
            ? "Free 5-minute intro session"
            : "Paid ₹99 / 2-hour session";

    const message = encodeURIComponent(
        `Hello SafeTalk,

Name: ${name}
Reason: ${reason}
Session: ${sessionText}
My contact: ${contact}

I agree to the rules.`
    );

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // ✅ Direct open WhatsApp
    window.open(whatsappURL, "_blank");
});