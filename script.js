document.addEventListener('DOMContentLoaded', function() {
    // Sample data (in a real application, this would come from a backend)
    const courses = [
        { id: 1, name: 'HTML5 Advanced Techniques', progress: 60 },
        { id: 2, name: 'CSS3 Flexbox & Grid Mastery', progress: 40 },
        { id: 3, name: 'JavaScript ES6+ Deep Dive', progress: 75 },
        { id: 4, name: 'React.js Fundamentals', progress: 20 },
    ];

    const assignments = [
        { id: 1, name: 'Create a Responsive Layout', course: 'HTML5 Advanced Techniques', dueDate: '2024-09-15' },
        { id: 2, name: 'Build a Flex Container', course: 'CSS3 Flexbox & Grid Mastery', dueDate: '2024-09-20' },
        { id: 3, name: 'Implement Async/Await', course: 'JavaScript ES6+ Deep Dive', dueDate: '2024-09-25' },
    ];

    // Populate course list
    const courseList = document.querySelector('#course-list');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course-item';
        courseElement.innerHTML = `
            <h3>${course.name}</h3>
            <div class="progress-bar">
                <div class="progress" style="width: ${course.progress}%"></div>
            </div>
            <p>${course.progress}% Complete</p>
        `;
        courseList.appendChild(courseElement);
    });

    // Populate assignment list
    const assignmentList = document.querySelector('#assignment-list');
    assignments.forEach(assignment => {
        const assignmentElement = document.createElement('div');
        assignmentElement.className = 'assignment-item';
        assignmentElement.innerHTML = `
            <h3>${assignment.name}</h3>
            <p>Course: ${assignment.course}</p>
            <p>Due: ${assignment.dueDate}</p>
        `;
        assignmentList.appendChild(assignmentElement);
    });

    // Populate upcoming deadlines
    const deadlinesList = document.querySelector('#deadlines-list');
    assignments.slice(0, 3).forEach(assignment => {
        const li = document.createElement('li');
        li.textContent = `${assignment.name} - Due: ${assignment.dueDate}`;
        deadlinesList.appendChild(li);
    });

    // Navigation
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.style.display = section.id === targetId ? 'block' : 'none';
            });
            // Update active nav item
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Show dashboard by default
    document.querySelector('#dashboard').style.display = 'block';
    document.querySelector('nav a[href="#dashboard"]').classList.add('active');
});