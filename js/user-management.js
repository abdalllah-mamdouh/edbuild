let users = [];
let editingUserId = null;

// Handle Form Submission
document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    if (editingUserId === null) {
        // Add new user
        const newUser = {
            id: users.length + 1,
            username,
            email,
            role,
        };
        users.push(newUser);
    } else {
        // Update existing user
        const user = users.find((u) => u.id === editingUserId);
        user.username = username;
        user.email = email;
        user.role = role;
        editingUserId = null;
    }

    renderUsers();
    document.getElementById('userForm').reset();
});

// Cancel Edit
document.getElementById('cancelEdit').addEventListener('click', function () {
    document.getElementById('userForm').reset();
    editingUserId = null;
});

// Render Users in Table
function renderUsers() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';
    users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editUser(${user.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Edit User
function editUser(userId) {
    const user = users.find((u) => u.id === userId);
    document.getElementById('username').value = user.username;
    document.getElementById('email').value = user.email;
    document.getElementById('role').value = user.role;
    editingUserId = userId;
}

// Delete User
function deleteUser(userId) {
    users = users.filter((u) => u.id !== userId);
    renderUsers();
}

// Initial Render
renderUsers();
document.getElementById('selectAll').addEventListener('change', function () {
    const checkboxes = document.querySelectorAll('#userTable tbody input[type="checkbox"]');
    checkboxes.forEach((checkbox) => (checkbox.checked = this.checked));
});
function exportCSV() {
    const rows = [['ID', 'Name', 'Email', 'Role']];
    document.querySelectorAll('#userTable tbody tr').forEach((row) => {
        const cols = Array.from(row.cells).slice(0, 4).map((cell) => cell.textContent);
        rows.push(cols);
    });

    const csvContent =
        'data:text/csv;charset=utf-8,' +
        rows.map((row) => row.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'users.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.getElementById('searchInput').addEventListener('input', filterUsers);
document.getElementById('roleFilter').addEventListener('change', filterUsers);

function filterUsers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedRole = document.getElementById('roleFilter').value;

    const rows = document.querySelectorAll('#userTable tbody tr');
    rows.forEach((row) => {
        const name = row.cells[1].textContent.toLowerCase();
        const role = row.cells[3].textContent;

        if (
            (name.includes(searchTerm) || searchTerm === '') &&
            (role === selectedRole || selectedRole === '')
        ) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
// Search and filter users
document.getElementById('searchInput').addEventListener('input', filterUsers);
document.getElementById('roleFilter').addEventListener('change', filterUsers);

function filterUsers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedRole = document.getElementById('roleFilter').value;

    const rows = document.querySelectorAll('#userTable tbody tr');
    rows.forEach((row) => {
        const name = row.cells[1].textContent.toLowerCase();
        const role = row.cells[3].textContent;

        if (
            (name.includes(searchTerm) || searchTerm === '') &&
            (role === selectedRole || selectedRole === '')
        ) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
// Highlight the active link
const navLinks = document.querySelectorAll(".navbar a");
const currentUrl = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.style.color = "#FFC107"; // Highlight color
        link.style.textDecoration = "underline";
    }
});
