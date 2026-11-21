const params = new URLSearchParams(window.location.search);

const fields = [
    'first-name', 'last-name', 'org-title', 'email', 'phone', 'business-name', 'membership-level', 'description', 'timestamp'
];

fields.forEach(field => {
    const el = document.getElementById('display-' + field);
    if (el) el.textContent = params.get(field) || 'Not provided';
});

const levelNames = {
    np: 'NP Membership (Non-Profit, No Fee)',
    bronze: 'Bronze Membership',
    silver: 'Silver Membership',
    gold: 'Gold Membership'
};
const level = params.get('membership-level');
const levelEl = document.getElementById('display-membership-level');
if (levelEl && level) levelEl.textContent = levelNames[level] || level;