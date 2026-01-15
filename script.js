function showSection(sectionId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = this.getAttribute('data-section');
        showSection(section);
    });
});
document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // simple validation already done by HTML
    const contact = document.getElementById("contact").value;

    // WhatsApp link (+917028420075)
    const whatsappNumber = "9999999999"; // 👉 7028420075
    const message = encodeURIComponent(
        "Hi, I have booked a SafeTalk session. My contact: " + contact
    );

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    document.getElementById("whatsapp-link").href = whatsappURL;

    // show success box
    document.getElementById("success-box").style.display = "block";

    // optional: scroll to success box
    document.getElementById("success-box").scrollIntoView({ behavior: "smooth" });
});