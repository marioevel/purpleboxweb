# Quick Start Guide - Purple Box Website

## Local Development

### 1. Prerequisites Check
```bash
node --version  # Should be 18+ 
yarn --version  # Should be installed
```

### 2. Install & Run
```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Open browser at http://localhost:3000
```

### 3. Build for Production
```bash
# Create optimized build
yarn build

# Output will be in the 'build' folder
```

---

## Quick Deployment to Ubuntu Server

### One-Line Install Script

Run this on your Ubuntu 22.04 server:

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && \
sudo apt install -y nodejs nginx && \
sudo npm install -g yarn pm2 && \
echo "✅ Server ready for deployment!"
```

### Deploy Steps

1. **Upload your built files:**
   ```bash
   # On your local machine (from /app/frontend)
   yarn build
   scp -r build user@your-server:/tmp/sebhawkins-build
   ```

2. **Setup on server:**
   ```bash
   sudo mkdir -p /var/www/sebhawkins
   sudo mv /tmp/sebhawkins-build/* /var/www/sebhawkins/
   sudo chown -R www-data:www-data /var/www/sebhawkins
   ```

3. **Configure Nginx:**
   ```bash
   sudo nano /etc/nginx/sites-available/sebhawkins
   ```
   
   Paste this config (replace `your-domain.com`):
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;
       root /var/www/sebhawkins;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Enable site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/sebhawkins /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. **Add SSL (optional):**
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

---

## Customization

### Change Email Address
Edit `src/pages/Home.jsx` line with:
```jsx
href="mailto:seb@sebhawkins.com"
```

### Update Content
All text content is in `src/pages/Home.jsx`:
- Services array (line ~20)
- Testimonials array (line ~35)
- About section text (line ~160)

### Modify Colors
Edit `src/App.css` under `:root` variables:
```css
--brand-primary: #d9fb06;  /* Lime green accent */
--bg-page: #1a1c1b;        /* Black background */
```

---

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000
yarn start
```

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Nginx not serving site
```bash
# Check Nginx status
sudo systemctl status nginx

# Check error logs
sudo tail -f /var/log/nginx/error.log
```

---

## Support

Contact: seb@sebhawkins.com

---

## Tech Stack Summary

- React 19 + Tailwind CSS
- Shadcn/UI components
- Responsive design
- Production-ready build
- Nginx deployment

**Setup time: ~5 minutes locally, ~15 minutes for production deployment**
