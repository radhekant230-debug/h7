const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Replace the video tag with the exact requested Google Drive iframe
const videoRegex = /<video.*?<\/video>/s;

const iframeStr = '<iframe src="https://drive.google.com/file/d/1pCFAfjjQjLIftYEUorUk8QMClawGbaJd/preview" title="VIP Lounge Alcove Video" allow="autoplay; fullscreen" allowfullscreen style="width: 100%; height: 100%; border: none; display: block; position: absolute; inset: 0; z-index: 1;"></iframe>';

// Make sure we only replace the video tag in the interior-banner section
content = content.replace(/<div class="interior-banner">\s*<video.*?<\/video>/s, '<div class="interior-banner">\n          ' + iframeStr);

// Add z-index: 2 to the overlay to ensure it stays on top of the z-index: 1 iframe
content = content.replace('<div class="interior-banner-overlay">', '<div class="interior-banner-overlay" style="z-index: 2; position: absolute; inset: 0;">');

fs.writeFileSync('index.html', content, 'utf8');
