//Fetch API + Render Member Cards
const MEMBERS_URL = 'data/members.json';
const container = document.getElementById('members-container');
const viewButtons = document.querySelectorAll('.filter-buttons button');

let currentView = 'grid';
let membersData = [];

// Fetch member data
async function fetchMembers() {
    try {
        const response = await fetch(MEMBERS_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        membersData = await response.json();
        renderMembers(currentView);
    } catch(error) {
        console.error('Failed to load members:', error);
        container.innerHTML = '<p class="error">Unable to load directory. Please try again later.</p>';
    }
}

//Badge helpers
function getBadgeClass(level) {
    if (level === 3) return 'gold';
    if (level === 2) return 'silver';
    return 'np';
}
function getBadgeText(level) {
    if (level === 3) return 'Gold';
    if (level === 2) return 'Silver';
    return 'Member';
}

//Render member cards
function renderMembers(view) {
    currentView = view;
    container.className = 'members-grid' + (view === 'list' ? ' list-view' : '');
    container.innerHTML = membersData.map((m, i) => `
        <article class="member-card ${view === 'list' ? 'list-view' : ''}">
            <img src="${m.image}" alt="${m.name} logo" class="card-image" ${i === 0 ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"'} width="300" height="200">
            <div class="card-content">
                <div class="card-header">
                    <h2 class="card-name">${m.name}</h2>
                    <span class="membership-badge ${getBadgeClass(m.membershipLevel)} ${view === 'list' ? 'sm' : ''}">${getBadgeText(m.membershipLevel)}</span>
                </div>
                <p class="card-tagline">${m.other}</p>
                <div class="card-details">
                <div class="detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>${m.address}</span>
                </div>
                <div class="detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:${m.phone}">${m.phone}</a>
                </div>
                <div class="detail-item">

                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <a href="${m.website}" target="_blank" rel="noopener">${m.website.replace('https://','')}</a>
                </div>
                </div>
                <div class="card-footer">
                <a href="${m.website}" target="_blank" rel="noopener" class="card-website">Visit Website
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
            </div>
        </article>
    `).join('');
}

//View toggle buttons
viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        viewButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        renderMembers(btn.dataset.view);
    });
});

//Initialize
fetchMembers();