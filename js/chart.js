// script.js

// Revenue by Plan Chart
new Chart(document.getElementById("revenuePlanChart"), {
    type: "pie",
    data: {
        labels: ["Premium", "Basic", "Enterprise"],
        datasets: [
            {
                data: [800000, 300000, 150000], // Example data
                backgroundColor: ["#5bcfde", "#96c460", "#ffc107"],
            },
        ],
    },
    options: {
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    },
});

// Tenant Onboarding Trends
new Chart(document.getElementById("onboardingChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Tenants Onboarded",
                data: [10, 20, 30, 25, 50],
                borderColor: "#5bcfde",
                backgroundColor: "rgba(91, 207, 222, 0.2)",
                borderWidth: 2,
                fill: true,
            },
        ],
    },
    options: {
        plugins: {
            legend: {
                display: true,
            },
        },
    },
});

// Geographical Heatmap Chart (Example)
new Chart(document.getElementById("geoHeatmap"), {
    type: "bar",
    data: {
        labels: ["Egypt", "Saudi Arabia", "UAE"],
        datasets: [
            {
                label: "Users",
                data: [2000, 1500, 1000],
                backgroundColor: ["#5bcfde", "#96c460", "#ffc107"],
            },
        ],
    },
    options: {
        plugins: {
            legend: {
                position: "top",
            },
        },
    },
});

// Export Buttons
document.getElementById("export-csv").addEventListener("click", () => {
    const data = [
        ["Metric", "Value"],
        ["Total Tenants", 150],
        ["Active Tenants", 120],
        ["Inactive Tenants", 30],
        ["Total Revenue", "$1,250,000"],
        ["Active Users Today", 3200],
    ];

    let csvContent = "data:text/csv;charset=utf-8,";

    // Convert the data array into CSV rows
    data.forEach((row) => {
        csvContent += row.join(",") + "\n";
    });

    // Create a download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "metrics_report.csv");
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
});
document.getElementById("export-pdf").addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;

    // Initialize jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Metrics Report", 105, 20, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Date: " + new Date().toLocaleDateString(), 10, 30);

    const metrics = [
        { metric: "Total Tenants", value: "150" },
        { metric: "Active Tenants", value: "120" },
        { metric: "Inactive Tenants", value: "30" },
        { metric: "Total Revenue", value: "$1,250,000" },
        { metric: "Active Users Today", value: "3,200" },
    ];

    // Add table headers
    doc.setFont("helvetica", "bold");
    doc.text("Metric", 10, 50);
    doc.text("Value", 100, 50);

    // Add metrics data
    let yOffset = 60; // Start position for the table rows
    doc.setFont("helvetica", "normal");
    metrics.forEach((metric) => {
        doc.text(metric.metric, 10, yOffset);
        doc.text(metric.value, 100, yOffset);
        yOffset += 10;
    });

    // Save the PDF
    doc.save("metrics_report.pdf");
});

// Highlight the active link
const navLinks = document.querySelectorAll(".navbar a");
const currentUrl = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.style.color = "#FFC107"; // Highlight color
        link.style.textDecoration = "underline";
    }
});
