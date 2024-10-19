document.addEventListener('DOMContentLoaded', () => {
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    const switchTab = (id) => {
        tabContents.forEach((content) => {
            content.classList.remove('active');
        });
        tabTriggers.forEach((trigger) => {
            trigger.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
        document.querySelector(`.tab-trigger[data-tab="${id}"]`).classList.add('active');
    };

    // Initialize the first tab as active
    switchTab('text-formatting');

    // Add event listeners for each tab trigger
    tabTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            switchTab(e.target.dataset.tab);
        });
    });
});