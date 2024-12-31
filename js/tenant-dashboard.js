// JavaScript Code for Tenant Dashboard Functionality

// Example Data for Dynamic Updates
const tenantData = {
    name: "EduCorp",
    contact: "contact@educorp.com",
    domain: "educorp.com",
    plan: "Premium",
    lastPayment: "Dec 15, 2024",
    nextPaymentDue: "Jan 15, 2025"
};

const activityLogs = [
    { date: "Dec 10, 2024", action: "Admin updated tenant logo." },
    { date: "Dec 9, 2024", action: "User John Doe added to tenant." },
    { date: "Nov 1, 2024", action: "Subscription upgraded to Premium." }
];

// Populate Tenant Details
function populateTenantDetails() {
    const detailsTable = document.querySelector(".details-table tbody");
    detailsTable.innerHTML = `
        <tr><th>Name</th><td>${tenantData.name}</td></tr>
        <tr><th>Contact</th><td>${tenantData.contact}</td></tr>
        <tr><th>Domain</th><td>${tenantData.domain}</td></tr>
        <tr><th>Plan</th><td>${tenantData.plan}</td></tr>
        <tr><th>Last Payment</th><td>${tenantData.lastPayment}</td></tr>
        <tr><th>Next Payment Due</th><td>${tenantData.nextPaymentDue}</td></tr>
    `;
}

// Populate Activity Logs
function populateActivityLogs() {
    const timeline = document.querySelector(".timeline");
    timeline.innerHTML = activityLogs.map(log => `
        <div class="timeline-item slide-in-left">
            <div class="timeline-content">
                <h4>${log.date}</h4>
                <p>${log.action}</p>
            </div>
        </div>
    `).join("");
}

// Example: Assign Plan Action
function assignPlan() {
    alert("Assigning a subscription plan to the tenant...");
}

// Example: Manage Plans Action
function managePlans() {
    alert("Opening the subscription plan management interface...");
}

// Example: Monitor Payments Action
function monitorPayments() {
    alert("Monitoring overdue payments for the tenant...");
}

// Example: Upgrade Plan Action
function upgradePlan() {
    alert("Upgrading the tenant's subscription plan...");
}

// Example: Downgrade Plan Action
function downgradePlan() {
    alert("Downgrading the tenant's subscription plan...");
}

// Example: Cancel Subscription Action
function cancelSubscription() {
    const confirmCancel = confirm("Are you sure you want to cancel the tenant's subscription?");
    if (confirmCancel) {
        alert("Subscription canceled.");
    }
}

// Initialize Dashboard
function initializeDashboard() {
    populateTenantDetails();
    populateActivityLogs();

    // Additional initialization logic can go here
}

// Run Initialization on Page Load
document.addEventListener("DOMContentLoaded", initializeDashboard);
// Highlight the active link
const navLinks = document.querySelectorAll(".navbar a");
const currentUrl = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.style.color = "#FFC107"; // Highlight color
        link.style.textDecoration = "underline";
    }
});
