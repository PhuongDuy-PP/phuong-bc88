const validateEmail = () => {
    // B1: DOM tới thẻ input và thẻ p trong HTML
    const emailInput = document.getElementById("email").value;
    const message = document.getElementById("emailMsg");

    // simple: kiểm tra có chứa ký tự @ hay không
    if(emailInput.includes("@")) {
        message.innerText = "Email hợp lệ";
        message.className = "text-green-600";
    } else {
        message.innerText = "Email không hợp lệ";
        message.className = "text-red-600";
    }
}

const liveSearch = () => {
    const searchInput = document.getElementById("textBox").value;
    document.getElementById("searchResult").innerText = `Bạn đang nhập: ${searchInput}`;
}

const keyUpHandler = (event) => {
    if(event.key === "Enter") {
        // lưu ý: sau khi lấy value từ event.target.value
        // clear value trong ô input
        document.getElementById("enterResult").innerText =  `Bạn vừa gõ với nội dung: ${event.target.value}`;
        event.target.value = "";
    }
}