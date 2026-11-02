function cleanWish(value) { return Array.from(value.trim()).slice(0, 40).join(''); }
if (typeof module !== 'undefined') module.exports = { cleanWish };

