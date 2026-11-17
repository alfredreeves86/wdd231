//Members spotlights//
export async function loadSpotlights() {

    const container = document.querySelector('#spotlights-container');
    const template = document.querySelector('#spotlight-card-template');

    if (!container || !template) return;

    try {
        const response = await fetch('data/members.json');
        const members = await response.json();

        const goldSilver = members.filter(member => member.membershipLevel >= 2);

        //Shuffle randomly//
        const shuffled = goldSilver.sort(() => 0.5 - Math.random());
        const spotlights = shuffled.slice(0, 3);

        container.innerHTML = '';

        //loop spotlight//
        spotlights.forEach(member => {
            const clone = template.content.cloneNode(true);

            //image//
            const img = clone.querySelector('.spotlight-image');
            img.src = member.image;
            img.alt = member.name + ' logo';

            //name//
            clone.querySelector('.spotlight-name').textContent = member.name;

            //taglines//
            clone.querySelector('.spotlight-tagline').textContent = member.other;

            //badge//
            const badge = clone.querySelector('.spotlight-badge');
            if (member.membershipLevel === 3) {
                badge.textContent = 'Gold Member';
                badge.classList.add('gold');
            } else {
                badge.textContent = 'Silver Member';
                badge.classList.add('silver');
            }

            //append to page//
            container.appendChild(clone);
        });

    } catch (error) {
        console.error('Spotlights error:', error);
    }
}