const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// The exact iframe string to replace
const iframeStr = '<iframe src="https://drive.google.com/file/d/1pCFAfjjQjLIftYEUorUk8QMClawGbaJd/preview" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; overflow: hidden; pointer-events: none;" allow="autoplay" allowfullscreen></iframe>';

// The new video tag
const videoStr = '<video autoplay muted loop playsinline preload="metadata" style="width: 100%; height: 100%; object-fit: cover;">\n            <source src="videos/vip-lounge.mp4" type="video/mp4">\n          </video>';

content = content.replace(iframeStr, videoStr);

fs.writeFileSync('index.html', content, 'utf8');
