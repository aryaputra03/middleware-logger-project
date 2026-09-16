const usersList = document.querySelector("#users-list");
const userCount = document.querySelector("#user-count");
const apiStatus = document.querySelector("#api-status");
const output = document.querySelector("#console-output code");
const toast = document.querySelector("#toast");

function showResponse(data, status) {
  output.textContent = `HTTP ${status}\n\n${JSON.stringify(data, null, 2)}`;
}

function notify(message, type = "success") {
  toast.textContent = message;
  toast.className = `toast visible ${type}`;
  window.setTimeout(() => (toast.className = "toast"), 3000);
}

async function loadUsers() {
  usersList.innerHTML = '<p class="empty">Memuat data pengguna…</p>';
  try {
    const response = await fetch("/users");
    const users = await response.json();
    if (!response.ok) throw new Error("Gagal mengambil data pengguna.");
    usersList.innerHTML = users.map((user) => `<div class="user"><span class="avatar">${user.name.slice(0, 1)}</span><div><strong>${user.name}</strong><small>ID · ${String(user.id).padStart(3, "0")}</small></div><span class="active-dot"></span></div>`).join("");
    userCount.textContent = users.length;
    apiStatus.textContent = "Terhubung";
    showResponse(users, response.status);
  } catch (error) {
    usersList.innerHTML = `<p class="empty error">${error.message}</p>`;
    apiStatus.textContent = "Offline";
  }
}

document.querySelector("#refresh-users").addEventListener("click", loadUsers);

document.querySelector("#create-user").addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const name = new FormData(event.currentTarget).get("name");
  button.disabled = true;
  button.textContent = "Mengirim…";
  try {
    const response = await fetch("/users", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name }) });
    const data = await response.json();
    showResponse(data, response.status);
    notify(`${name} berhasil dikirim ke API.`);
    event.currentTarget.reset();
  } catch (error) {
    notify("Request gagal. Periksa server Anda.", "error");
  } finally {
    button.disabled = false;
    button.innerHTML = "Kirim request <b>→</b>";
  }
});

document.querySelector("#test-error").addEventListener("click", async () => {
  try {
    const response = await fetch("/error-test");
    const data = await response.json();
    showResponse(data, response.status);
    notify("Error handler berhasil diuji.", "error");
  } catch (error) {
    showResponse({ error: error.message }, "NETWORK ERROR");
  }
});

loadUsers();
