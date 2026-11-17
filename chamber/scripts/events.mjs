//Events informations//
export function loadEvents() {
    const container = document.querySelector('#events-container');
    const template = document.querySelector('#event-card-template');
    if (!container || !template) return;

    const events = [
        {title: 'Chamber Mixer', date: '2026-11-20', time: '5:30 PM', location: 'Palo Alto City Hall'},
        {title: 'Small Business Workshop', date: '2026-12-05', time: '9:00 AM', location: 'Virtual'},
        {title: 'Annual Gala', date: '2027-01-15', time: '6:00 PM', location: 'Stanford Shopping Center'}
    ];

    container.innerHTML = '';

    events.forEach(event => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.event-title').textContent = event.title;

        const dateStr = new Date(event.date).toLocaleDateString(undefined, {month: 'long', day: 'numeric'});
        const metaText = dateStr + '-' + event.time + '-' + event.location;

        clone.querySelector('.event-meta').textContent = metaText;

        container.appendChild(clone);
    });
}
