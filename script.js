// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    if (email && password) {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Please fill in all fields');
    }
});

// Generate Share Link
function generateShareLink(filename) {
    const fakeUrl = `https://secureshare.com/share/${encodeURIComponent(filename)}-${Date.now()}`;
    alert(`Share this link: ${fakeUrl}`);
}