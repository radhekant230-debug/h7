const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/<div class="review-rating-stars">[^<]+<\/div>/g, '<div class="review-rating-stars">★★★★★</div>');
content = content.replace(/<div class="rating-stars-gold">[^<]+<\/div>/g, '<div class="rating-stars-gold">★★★★★</div>');
content = content.replace(/<div class="review-badge-pill">[^<]+5<\/div>/g, '<div class="review-badge-pill">★ 5</div>');
content = content.replace(/<div class="feature-bullet">[^<]+<\/div>/g, '<div class="feature-bullet">✦</div>');
content = content.replace(/jalape[^<]+o/g, 'jalapeño');
content = content.replace(/Monday[^S]+Sunday/g, 'Monday – Sunday');

fs.writeFileSync('index.html', content, 'utf8');
