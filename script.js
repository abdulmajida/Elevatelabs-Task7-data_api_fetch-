const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
    userContainer.innerHTML = "⏳ Loading users...";

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const users = await response.json();
    displayUsers(users);

} catch (error) {
    userContainer.innerHTML = `
        <div class="error">
        ❌ Failed to load user data.<br>
        Error: ${error.message}<br>
        Please check your internet connection.
        </div>
    `;
}
}

function displayUsers(users) {
userContainer.innerHTML = ""; 

users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;

    userContainer.appendChild(card);
});
}

reloadBtn.addEventListener("click", fetchUsers);

fetchUsers();