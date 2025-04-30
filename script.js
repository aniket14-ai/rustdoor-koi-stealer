// Simulate the download process
function simulateDownload() {
    alert('Downloading software update...');
    setTimeout(showWalletForm, 2000);  // After 2 seconds, show wallet form
}

// Show the fake wallet form after download
function showWalletForm() {
    document.getElementById('updatePopup').style.display = 'none';
    document.getElementById('walletForm').style.display = 'block';
}

// Simulate data collection and exfiltration
function collectData() {
    const walletAddress = document.getElementById('walletAddress').value;
    const privateKey = document.getElementById('privateKey').value;

    if (walletAddress && privateKey) {
        // Log the collected data for demonstration
        console.log(`Wallet Address: ${walletAddress}`);
        console.log(`Private Key: ${privateKey}`);

        // Simulate the data exfiltration process
        setTimeout(function() {
            document.getElementById('walletForm').style.display = 'none';
            document.getElementById('notification').style.display = 'block';
        }, 1000);  // Display the notification after 1 second
    } else {
        alert('Please fill out both fields.');
    }
}
