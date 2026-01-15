// Kiểm tra JS hoạt động
console.log("✅ JS đã được liên kết thành công!");

// Hiệu ứng khi gửi form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("infoForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            result.textContent = "❌ Vui lòng điền đầy đủ thông tin!";
            result.style.color = "red";
            return;
        }

        result.textContent = `✅ Cảm ơn ${name}! Chúng tôi sẽ liên hệ với bạn qua ${email}.`;
        result.style.color = "green";

        console.log("Thông tin người dùng:", { name, email, message });

        // Reset form sau khi gửi
        form.reset();
    });
});
console.log("JavaScript đã hoạt động!");

function showMessage(num) {
    alert("Bạn đã bấm Nút " + num + "!");
}
