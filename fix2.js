const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Fix Stars
content = content.replace(/<div class="review-rating-stars">.*?<\/div>/g, '<div class="review-rating-stars">★★★★★</div>');
content = content.replace(/<div class="rating-stars-gold">.*?<\/div>/g, '<div class="rating-stars-gold">★★★★★</div>');
content = content.replace(/<div class="review-badge-pill">.*?<\/div>/g, '<div class="review-badge-pill">★ 5</div>');
content = content.replace(/<div class="feature-bullet">.*?<\/div>/g, '<div class="feature-bullet">✦</div>');

// Fix jalapeño line
content = content.replace(/<div class="drink-notes">Tequila reposado, fresh jalape.*?<\/div>/g, '<div class="drink-notes">Tequila reposado, fresh jalapeño essence, agave nectar, smoked tajin</div>');

// Fix Monday - Sunday line
content = content.replace(/<strong>Monday.*?Sunday:<\/strong>/g, '<strong>Monday – Sunday:</strong>');
content = content.replace(/Monday.*?Sunday:\s*12:00 PM.*?12:00 AM/g, 'Monday – Sunday: 12:00 PM – 12:00 AM');

// Ensure iframe
content = content.replace(/<video src="videos\/vip-lounge\.mp4".*?<\/video>/g, '<iframe src="https://drive.google.com/file/d/1pCFAfjjQjLIftYEUorUk8QMClawGbaJd/preview" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; overflow: hidden; pointer-events: none;" allow="autoplay" allowfullscreen></iframe>');

fs.writeFileSync('index.html', content, 'utf8');
