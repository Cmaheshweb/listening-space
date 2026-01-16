function showSection(sectionId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        showSection(link.getAttribute('data-section'));
    });
});

document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const contact = document.getElementById("contact").value;
    const sessionType = document.getElementById("session-type").value;

    const whatsappNumber = "917028420075";
    const message = encodeURIComponent(
        "Hi, I have booked a SafeTalk session. My contact: " + contact
    );

    document.getElementById("whatsapp-link").href =
        `https://wa.me/${whatsappNumber}?text=${message}`;

    document.getElementById("success-box").style.display = "block";

    if (sessionType === "paid") {
        const upiId = "mhaske.mahesh2015-1@okaxis";
        const upiLink = `upi://pay?pa=${upiId}&pn=SafeTalk&am=99&cu=INR`;
        document.getElementById("upi-pay-link").href = upiLink;
        document.getElementById("payment-box").style.display = "block";
    } else {
        document.getElementById("payment-box").style.display = "none";
    }

    document.getElementById("success-box").scrollIntoView({ behavior: "smooth" });
});