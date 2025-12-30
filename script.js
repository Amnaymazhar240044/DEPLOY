function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

function showMessage() {
    document.getElementById("success-msg").innerText =
        "Thank you for contacting me! I will get back to you soon.";
    return false;
}
