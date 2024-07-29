
// track.js
// Function to simulate tracking complaints (you should replace this with your actual tracking logic)
function trackComplaint(complaintID, emailOrMobile) {
    // Simulate fetching complaint details (replace with your API or database call)
    const complaintDetails = {
        status: "In Progress",
        category: "Public Services",
        description: "This is a sample complaint description. Lorem ipsum dolor sit amet...",
        assignedOfficer: "John Doe",
        estimatedResolutionDate: "2023-10-10",
    };

    // Display complaint details in the tracking-results div
    const trackingResultsDiv = document.querySelector('.tracking-results');
    trackingResultsDiv.innerHTML = `
        <h2 class="complaint-header">Complaint Details</h2>
        <div class="complaint-info">
            <span class="complaint-label">Status:</span>
            <span class="complaint-value">${complaintDetails.status}</span>
        </div>
        <div class="complaint-info">
            <span class="complaint-label">Category:</span>
            <span class="complaint-value">${complaintDetails.category}</span>
        </div>
        <div class="complaint-info">
            <span class="complaint-label">Description:</span>
            <span class="complaint-value">${complaintDetails.description}</span>
        </div>
        <div class="complaint-info">
            <span class="complaint-label">Assigned Officer:</span>
            <span class="complaint-value">${complaintDetails.assignedOfficer}</span>
        </div>
        <div class="complaint-info">
            <span class="complaint-label">Estimated Resolution Date:</span>
            <span class="complaint-value">${complaintDetails.estimatedResolutionDate}</span>
        </div>
    `;

    // Apply animation to complaint details
    trackingResultsDiv.classList.add('tracking-results-animate');
}

// Get references to the tracking input fields and the track button
const trackingNumberInput = document.getElementById('trackingNumber');
const emailOrMobileInput = document.getElementById('emailOrMobile');
const trackButton = document.querySelector('.track-button');

// Attach an event listener to the track button
trackButton.addEventListener('click', () => {
    const complaintID = trackingNumberInput.value;
    const emailOrMobile = emailOrMobileInput.value;

    // Call the trackComplaint function with the provided complaint ID and email/mobile
    trackComplaint(complaintID, emailOrMobile);
});
