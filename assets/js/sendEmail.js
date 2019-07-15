function sendMail(modalContactForm) {
    emailjs.send("gmail", "yinsound", {
        "from_name": modalContactForm.from_name.value,
        "from_email": modalContactForm.from_email.value,
        "message_html": modalContactForm.message_html.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}