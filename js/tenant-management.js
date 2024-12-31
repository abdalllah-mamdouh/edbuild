const tenants = [
    {
        fullName: "Ahmed Khaled",
        businessName: "EduHub",
        location: "Egypt",
        details: "Provides e-learning platforms for K-12 schools with interactive features and progress tracking.",
    },
    {
        fullName: "Fatima Al-Saud",
        businessName: "EduSolutions",
        location: "Saudi Arabia",
        details: "Develops virtual classrooms and online course content for universities and professional training.",
    },
    {
        fullName: "Omar Al-Maktoum",
        businessName: "TechEd",
        location: "UAE",
        details: "Specializes in AI-driven personalized learning systems and adaptive educational tools.",
    },
    {
        fullName: "Layla Hassan",
        businessName: "Alexandria EdTech",
        location: "Egypt",
        details: "Focuses on logistics software solutions for EdTech distribution and digital learning libraries.",
    },
    {
        fullName: "Salem Al-Faisal",
        businessName: "Jeddah EduMarketing",
        location: "Saudi Arabia",
        details: "Marketing agency specializing in promoting online education platforms and EdTech products.",
    },
    {
        fullName: "Aisha Al-Nahyan",
        businessName: "Abu Dhabi EdTech",
        location: "UAE",
        details: "Startup focused on AI and IoT innovations in education, including smart classrooms.",
    },
];

// Render tenants in the table
function renderTenants(tenantList = tenants) {
    const tbody = document.querySelector("#tenantTable tbody");
    tbody.innerHTML = tenantList
        .map(
            (tenant, index) => `
            <tr>
                <td><a href="#" onclick="showTenantDetails(${index})">${tenant.fullName}</a></td>
                <td>${tenant.businessName}</td>
                <td>${tenant.location}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editTenant(${index})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteTenant(${index})">Delete</button>
                    <button class="action-btn message-btn" onclick="openMessageModal(${index})">Message</button>
                </td>
            </tr>`
        )
        .join("");
}

// Show tenant details in a modal
function showTenantDetails(index) {
    const tenant = tenants[index];
    document.getElementById("modalFullName").textContent = tenant.fullName;
    document.getElementById("modalBusinessName").textContent = tenant.businessName;
    document.getElementById("modalLocation").textContent = tenant.location;
    document.getElementById("modalDetails").textContent = tenant.details;

    document.getElementById("tenantModal").style.display = "block";
}

// Close tenant modal
function closeModal() {
    document.getElementById("tenantModal").style.display = "none";
}

// Filter tenants by name or location
function filterTenants() {
    const searchName = document.getElementById("searchTenant").value.toLowerCase();
    const filterLocation = document.getElementById("locationFilter").value;

    const filteredTenants = tenants.filter(
        (tenant) =>
            tenant.fullName.toLowerCase().includes(searchName) &&
            (filterLocation === "" || tenant.location === filterLocation)
    );

    renderTenants(filteredTenants);
}

// Edit tenant
function editTenant(index) {
    const tenant = tenants[index];
    document.getElementById("tenantFullName").value = tenant.fullName;
    document.getElementById("tenantBusinessName").value = tenant.businessName;
    document.getElementById("tenantLocation").value = tenant.location;
    document.getElementById("tenantDetails").value = tenant.details;
}

// Delete tenant
function deleteTenant(index) {
    tenants.splice(index, 1);
    renderTenants();
    showNotification("Tenant successfully deleted.");
}

// Open message modal
function openMessageModal(index) {
    const tenant = tenants[index];
    document.getElementById("messageTenantName").textContent = tenant.fullName;
    document.getElementById("messageContent").value = "";
    document.getElementById("messageModal").style.display = "block";
}

// Close message modal
function closeMessageModal() {
    document.getElementById("messageModal").style.display = "none";
}

// Show notification
function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification success";
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Export tenant data to CSV
function exportTenantsToCSV() {
    const csvRows = [
        ["Full Name", "Business Name", "Location", "Details"],
        ...tenants.map((tenant) => [
            tenant.fullName,
            tenant.businessName,
            tenant.location,
            tenant.details,
        ]),
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map((row) => row.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.setAttribute("download", "tenants.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Event listeners
document.getElementById("searchTenant").addEventListener("input", filterTenants);
document.getElementById("locationFilter").addEventListener("change", filterTenants);
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const tenantName = document.getElementById("messageTenantName").textContent;
    showNotification(`Message sent to ${tenantName}!`);
    closeMessageModal();
});

// Initial render
renderTenants();
// Highlight the active link
const navLinks = document.querySelectorAll(".navbar a");
const currentUrl = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.style.color = "#FFC107"; // Highlight color
        link.style.textDecoration = "underline";
    }
});
