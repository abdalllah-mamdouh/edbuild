// Branding Management Script
document.getElementById('brandingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const typography = document.getElementById('typography').value;
    const logoFile = document.getElementById('logo').files[0];

    // Update root CSS variables for branding colors
    document.documentElement.style.setProperty('--brand-primary', primaryColor);
    document.documentElement.style.setProperty('--brand-secondary', secondaryColor);

    // Update font-family
    document.body.style.fontFamily = typography;

    // Update logo preview if file is selected
    if (logoFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('brandingLogoPreview').style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(logoFile);
    }
});
// Branding Management Script
document.getElementById('brandingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    const typography = document.getElementById('typography').value;
    const logoFile = document.getElementById('logo').files[0];

    // Update root CSS variables for branding colors
    document.documentElement.style.setProperty('--brand-primary', primaryColor);
    document.documentElement.style.setProperty('--brand-secondary', secondaryColor);

    // Update font-family in the preview
    document.querySelector('#brandingPreview').style.fontFamily = typography;



    // Update logo in preview
    if (logoFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('brandingLogoPreview').style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(logoFile);
    }
});

// Instant updates for primary and secondary colors
document.getElementById('primaryColor').addEventListener('input', function () {
    const primaryColor = this.value;
    document.documentElement.style.setProperty('--brand-primary', primaryColor);
    document.querySelector('#brandingPreview h1').style.color = primaryColor;
});

document.getElementById('secondaryColor').addEventListener('input', function () {
    const secondaryColor = this.value;
    document.documentElement.style.setProperty('--brand-secondary', secondaryColor);
    document.querySelector('#brandingPreview p').style.color = secondaryColor;
});

// Typography live update
document.getElementById('typography').addEventListener('change', function () {
    const typography = this.value;
    document.querySelector('#brandingPreview').style.fontFamily = typography;
});
document.getElementById('brandingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate branding update
    const toast = document.getElementById('toast');
    toast.textContent = 'Branding has been updated!';

    // Show toast notification
    toast.classList.add('show');

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
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
