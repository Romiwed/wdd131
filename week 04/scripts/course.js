const aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,

    sections: [
        {
            section: "001",
            enrolled: 32,
            instructor: "Brother Smith"
        },

        {
            section: "002",
            enrolled: 28,
            instructor: "Sister Johnson"
        }
    ]
};

function setCourseInformation(course) {
    const courseName = document.querySelector("#courseName");

    courseName.textContent = `${course.code} - ${course.title}`;
}

function renderSections(course) {

    const tbody = document.querySelector("#sections tbody");

    course.sections.forEach(section => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
        `;

        tbody.appendChild(row);

    });

}

setCourseInformation(aCourse);
renderSections(aCourse);