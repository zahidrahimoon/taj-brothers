/**
 * Taj & Brothers Enterprises - Projects Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize project filtering
    initProjectFilter();

    // Initialize counter animation for stats
    initCounterAnimation();
});

/**
 * Initialize project filtering functionality
 */
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterButtons.length === 0 || projectItems.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value
            const filterValue = this.getAttribute('data-filter');

            // Filter projects
            projectItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                } else if (!item.classList.contains(filterValue)) {
                    item.classList.add('hidden');
                } else {
                    item.classList.remove('hidden');
                }
            });
        });
    });
}

/**
 * Initialize counter animation for stats
 */
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length === 0) return;

    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                let current = 0;
                const duration = 2000; // 2 seconds
                const increment = Math.ceil(count / (duration / 16)); // 60fps

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= count) {
                        target.textContent = count;
                        clearInterval(timer);
                    } else {
                        target.textContent = current;
                    }
                }, 16);

                observer.unobserve(target);
            }
        });
    }, options);

    statNumbers.forEach(number => {
        observer.observe(number);
    });
}

/**
 * Add alternating row colors to the table
 */
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('.projects-table tbody tr');

    tableRows.forEach((row, index) => {
        if (index % 2 === 1) {
            row.style.backgroundColor = 'rgba(0, 86, 179, 0.05)';
        }
    });
});

/**
 * Highlight ongoing projects with a different color
 */
document.addEventListener('DOMContentLoaded', function() {
    const ongoingProjects = document.querySelectorAll('.project-item.ongoing');

    ongoingProjects.forEach(project => {
        const statusCell = project.querySelector('td:last-child');
        if (statusCell) {
            statusCell.style.color = '#0056b3';
            statusCell.style.fontWeight = '600';
        }
    });
});