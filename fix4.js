const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const oldVideo = /<video autoplay muted loop playsinline preload="metadata" style="width: 100%; height: 100%; object-fit: cover;">\s*<source src="videos\/vip-lounge\.mp4" type="video\/mp4">\s*<\/video>/g;

const newIframe = '<iframe src="https://drive.google.com/file/d/1pCFAfjjQjLIftYEUorUk8QMClawGbaJd/preview" title="VIP Lounge Alcove" allow="autoplay; fullscreen" allowfullscreen style="width: 100%; height: 100%; border: 0; display: block; object-fit: cover; position: absolute; inset: 0; z-index: 0;"></iframe>';

content = content.replace(oldVideo, newIframe);

fs.writeFileSync('index.html', content, 'utf8');
