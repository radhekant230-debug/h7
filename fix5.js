const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const iframeRegex = /<iframe src="https:\/\/drive\.google\.com\/file\/d\/1pCFAfjjQjLIftYEUorUk8QMClawGbaJd\/preview".*?<\/iframe>/g;

const newVideo = '<video autoplay muted loop playsinline preload="metadata" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; z-index: 0;">\n            <source src="DIRECT_MP4_URL" type="video/mp4">\n          </video>';

content = content.replace(iframeRegex, newVideo);

fs.writeFileSync('index.html', content, 'utf8');
