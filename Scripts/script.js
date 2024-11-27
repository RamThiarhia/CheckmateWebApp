let currentCourse = ''; // To store the current course name from URL
let currentTerm = ''; // To store the current term (Prelim, Midterm, etc.)

// Function to load subjects from localStorage when the page is loaded
function loadSubjects() {
    // Get the course name and term from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    currentCourse = urlParams.get('course');
    currentTerm = urlParams.get('term');
    
    // Set the course name and term in the header
    document.getElementById("course-name").textContent = `${currentCourse} - ${currentTerm}`;

    // Retrieve stored subjects for this specific course and term (if they exist)
    const storedSubjects = JSON.parse(localStorage.getItem(`${currentCourse}_${currentTerm}`)) || [];

    // Only display subjects if there are any
    if (storedSubjects.length > 0) {
        storedSubjects.forEach(subject => {
            displaySubject(subject.name);
        });
    } else {
        console.log("No subjects found for this course and term.");
    }
}

// Add Subject from the Modal
function addSubject() {
    const subjectName = document.getElementById("subjectName").value;
    if (subjectName) {
        const subject = { name: subjectName };
        
        // Store the subject in localStorage for this course and term
        storeSubject(subject);

        // Display the newly added subject
        displaySubject(subjectName);
        
        // Close the modal after adding the subject
        closeModal();
    } else {
        alert("Please enter a subject name.");
    }
}

// Store subject in localStorage for the current course and term
function storeSubject(subject) {
    const storedSubjects = JSON.parse(localStorage.getItem(`${currentCourse}_${currentTerm}`)) || [];
    storedSubjects.push(subject);
    localStorage.setItem(`${currentCourse}_${currentTerm}`, JSON.stringify(storedSubjects));
}

// Display a subject card with its name (clickable and leads to a unique analysis page)
function displaySubject(subjectName) {
    const subjectCards = document.querySelector(".subject-cards");

    // Create a new subject card
    const newSubjectCard = document.createElement("a");
    newSubjectCard.href = `itemanalysis.html?subject=${encodeURIComponent(subjectName)}`; // Link to the analysis page
    newSubjectCard.classList.add("card");

    // Add Subject Name to the Card
    newSubjectCard.innerHTML = `<h3>${subjectName}</h3>`;

    subjectCards.appendChild(newSubjectCard);
}

// Attach the loadSubjects function to the window's load event
window.addEventListener('load', loadSubjects);
