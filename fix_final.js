const fs = require('fs');

// 1. UPDATE HTML
let html = fs.readFileSync('index.html', 'utf8');

const iframeRegex = /<iframe src="https:\/\/drive\.google\.com\/file\/d\/1pCFAfjjQjLIftYEUorUk8QMClawGbaJd\/preview".*?<\/iframe>/g;
const newVideoHTML = `<video id="vip-lounge-vid" class="vip-lounge-video" autoplay muted loop playsinline preload="metadata">
            <source id="vip-lounge-vid-src" src="DIRECT_MP4_URL" type="video/mp4">
          </video>`;

html = html.replace(iframeRegex, newVideoHTML);
fs.writeFileSync('index.html', html, 'utf8');

// 2. UPDATE CSS
let css = fs.readFileSync('css/heaven.css', 'utf8');
const newCSS = `\n.vip-lounge-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 0;
}\n`;

if (!css.includes('.vip-lounge-video')) {
    fs.writeFileSync('css/heaven.css', css + newCSS, 'utf8');
}

// 3. UPDATE JS
let js = fs.readFileSync('js/heaven.js', 'utf8');

const newJS = `const VIP_LOUNGE_VIDEO_URL = "PASTE_DIRECT_MP4_URL_HERE";

document.addEventListener("DOMContentLoaded", () => {
  const vipVideo = document.getElementById("vip-lounge-vid");
  const vipSource = document.getElementById("vip-lounge-vid-src");
  if (vipVideo && vipSource) {
    if (VIP_LOUNGE_VIDEO_URL && VIP_LOUNGE_VIDEO_URL !== "PASTE_DIRECT_MP4_URL_HERE") {
      vipSource.src = VIP_LOUNGE_VIDEO_URL;
      vipVideo.load();
    }
    vipVideo.addEventListener("error", () => {
      console.error("VIP Lounge video failed to load:", vipVideo.error);
    }, true);
  }
});\n\n`;

if (!js.includes('VIP_LOUNGE_VIDEO_URL')) {
    fs.writeFileSync('js/heaven.js', newJS + js, 'utf8');
}
