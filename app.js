// -----------------------------
// Registration Form Validation
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("regName").value.trim();
            let email = document.getElementById("regEmail").value.trim();
            let pass = document.getElementById("regPassword").value.trim();
            let confirmPass = document.getElementById("regConfirmPassword").value.trim();

            if (name === "" || email === "" || pass === "" || confirmPass === "") {
                alert("All fields are required!");
                return;
            }

            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email!");
                return;
            }

            if (pass.length < 6) {
                alert("Password must be at least 6 characters!");
                return;
            }

            if (pass !== confirmPass) {
                alert("Passwords do not match!");
                return;
            }

            alert("Registration Successful!");
            registerForm.reset();
        });
    }

    // -----------------------------
    // Login Form Validation
    // -----------------------------
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let email = document.getElementById("loginEmail").value.trim();
            let pass = document.getElementById("loginPassword").value.trim();

            if (email === "" || pass === "") {
                alert("Both fields are required!");
                return;
            }

            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("Invalid email format!");
                return;
            }

            alert("Login Successful!");
            loginForm.reset();
        });
    }

    // -----------------------------
    // Display Order List
    // -----------------------------
    const orderList = document.getElementById("orderList");
    if (orderList) {
        let orders = [
            "Order #1021 - iPhone 14",
            "Order #1022 - Samsung Earbuds",
            "Order #1023 - Sony Headphones"
        ];

        orders.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            orderList.appendChild(li);
        });
    }

    // -----------------------------
    // Wishlist Items
    // -----------------------------
    const wishlist = document.getElementById("wishlist");
    if (wishlist) {
        let items = ["MacBook Air", "Smart LED TV", "PS5 Controller"];

        items.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            wishlist.appendChild(li);
        });
    }

    // -----------------------------
    // Comments & Reviews
    // -----------------------------
    const reviewSection = document.getElementById("reviews");
    if (reviewSection) {
        let reviews = [
            { name: "Rahul", comment: "Amazing product and fast delivery!" },
            { name: "Sanjana", comment: "Quality is superb, worth buying!" },
            { name: "Vignesh", comment: "Good customer support!" }
        ];

        reviews.forEach(r => {
            let div = document.createElement("div");
            div.classList.add("reviewBox");
            div.innerHTML = `<strong>${r.name}</strong><p>${r.comment}</p>`;
            reviewSection.appendChild(div);
        });
    }

    // -----------------------------
    // Customer Care Information
    // -----------------------------
    const careInfo = document.getElementById("customerCare");
    if (careInfo) {
        careInfo.innerHTML = `
            <h3>Customer Care</h3>
            <p>Email: support@shoponline.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Available: 9 AM - 6 PM (Mon–Sat)</p>
        `;
    }

    // -----------------------------
    // Report Issue Form
    // -----------------------------
    const reportForm = document.getElementById("reportForm");
    if (reportForm) {
        reportForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let issue = document.getElementById("issueText").value.trim();

            if (issue === "") {
                alert("Please describe your issue!");
                return;
            }

            alert("Your report has been submitted. Thank you!");
            reportForm.reset();
        });
    }

});
