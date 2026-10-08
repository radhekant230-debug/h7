const fs = require('fs');

// 1. UPDATE HTML
let html = fs.readFileSync('index.html', 'utf8');
const videoRegex = /<video.*?<\/video>/s;
const newImg = '<img src="images/vip_lounge_new.jpg" alt="VIP Lounge Alcove">';
html = html.replace(videoRegex, newImg);
fs.writeFileSync('index.html', html, 'utf8');

// 2. CLEANUP CSS
let css = fs.readFileSync('css/heaven.css', 'utf8');
const cssRegex = /\.vip-lounge-video\s*\{[^}]+\}/s;
css = css.replace(cssRegex, '');
fs.writeFileSync('css/heaven.css', css, 'utf8');

// 3. CLEANUP JS
let js = fs.readFileSync('js/heaven.js', 'utf8');
const jsRegex = /const VIP_LOUNGE_VIDEO_URL = "PASTE_DIRECT_MP4_URL_HERE";[\s\S]*?\}\);/s;
js = js.replace(jsRegex, '').replace(/^\s+/, '');
fs.writeFileSync('js/heaven.js', js, 'utf8');
