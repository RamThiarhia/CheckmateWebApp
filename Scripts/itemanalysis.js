// Function to load analysis for the specific subject
function loadAnalysis() {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectName = urlParams.get('subject'); // Get the subject name from the URL
    
    // Set the subject name in the header
    document.getElementById("subject-name").textContent = subjectName;

    // Fetch unique analysis content for the subject (you can replace this with actual dynamic content or API)
    const analysisDescription = getAnalysisForSubject(subjectName);

    // Display the analysis description
    document.getElementById("analysis-description").textContent = analysisDescription;
}

// Example function to return a unique analysis (you can replace this with a dynamic data source)
function getAnalysisForSubject(subject) {
    const analysisData = {
        "Mathematics": "This is the analysis for Mathematics. This section includes key results and insights.",
        "Science": "This is the analysis for Science. The data includes trends and key findings for the term.",
        "History": "This is the analysis for History. Here we analyze the major events and impacts during the term."
    };

    return analysisData[subject] || "No analysis available for this subject.";
}

// Go back to the previous page
function goBack() {
    window.history.back();
}

// Load the analysis when the page loads
window.addEventListener('load', loadAnalysis);
