
import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Fix 5 stars
content = re.sub(r'<div class="review-rating-stars">[^<]+</div>', '<div class="review-rating-stars">★★★★★</div>', content)
content = re.sub(r'<div class="rating-stars-gold">[^<]+</div>', '<div class="rating-stars-gold">★★★★★</div>', content)

# Fix star pill
content = re.sub(r'<div class="review-badge-pill">[^<]+5</div>', '<div class="review-badge-pill">★ 5</div>', content)

# Fix feature bullet
content = re.sub(r'<div class="feature-bullet">[^<]+</div>', '<div class="feature-bullet">✦</div>', content)

# Fix jalapeno
content = re.sub(r'jalape[^<]+o', 'jalapeño', content)

# Fix Monday - Sunday
content = re.sub(r'Monday[^S]+Sunday', 'Monday – Sunday', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

