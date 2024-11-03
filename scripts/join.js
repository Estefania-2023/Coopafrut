// For button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animate');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
    var timestampField = document.getElementById('timestamp');
    var now = new Date();
    timestampField.value = now.toISOString();

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.membership-option').forEach(option => {
        observer.observe(option);
    });
});