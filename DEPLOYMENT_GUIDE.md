# Purple Box - Sebastian Hawkins Sim Racing Website - Deployment Guide

## Ubuntu 22.04 (LTS) x64 Server Installation

This guide will help you deploy the Purple Box sim racing website for Sebastian Hawkins on an Ubuntu 22.04 server.

---

## Prerequisites

- Ubuntu 22.04 (LTS) x64 server with root or sudo access
- Domain name (optional, but recommended)
- SSH access to your server

---

## Step 1: Update System

```bash
sudo apt update && sudo apt upgrade -y
```

---

## Step 2: Install Node.js and Yarn

```bash
# Install Node.js 18.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Yarn
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install -y yarn

# Verify installation
node --version  # Should show v18.x.x
yarn --version  # Should show 1.x.x
```

---

## Step 3: Install Nginx

```bash
sudo apt install -y nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

---

## Step 4: Install PM2 (Process Manager)

```bash
sudo npm install -g pm2

# Verify installation
pm2 --version
```

---

## Step 5: Clone/Upload Your Application

Option A: Using Git (if your code is in a repository)
```bash
cd /var/www
sudo git clone <your-repo-url> sebhawkins
cd sebhawkins
```

Option B: Upload via SCP
```bash
# On your local machine
scp -r /path/to/app/frontend user@your-server-ip:/tmp/sebhawkins-frontend

# On the server
sudo mkdir -p /var/www/sebhawkins
sudo mv /tmp/sebhawkins-frontend /var/www/sebhawkins/frontend
```

---

## Step 6: Build the Application

```bash
cd /var/www/sebhawkins/frontend

# Install dependencies
yarn install

# Build for production
yarn build

# Set proper permissions
sudo chown -R www-data:www-data /var/www/sebhawkins
```

---

## Step 7: Configure Nginx

Create Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/sebhawkins
```

Add the following configuration (replace `your-domain.com` with your actual domain or server IP):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain or server IP

    root /var/www/sebhawkins/frontend/build;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Save and exit (Ctrl+X, then Y, then Enter).

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/sebhawkins /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

## Step 8: Configure Firewall

```bash
# Allow Nginx through firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable

# Check status
sudo ufw status
```

---

## Step 9: SSL Certificate (Optional but Recommended)

Install Let's Encrypt SSL certificate for HTTPS:

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate (replace with your domain)
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Follow the prompts to complete setup

# Test automatic renewal
sudo certbot renew --dry-run
```

After SSL installation, Certbot will automatically update your Nginx configuration to use HTTPS.

---

## Step 10: Verify Deployment

Visit your website:
- Without SSL: `http://your-domain.com` or `http://your-server-ip`
- With SSL: `https://your-domain.com`

You should see the Sebastian Hawkins sim racing website!

---

## Maintenance Commands

### Update the Website

```bash
cd /var/www/sebhawkins/frontend

# Pull latest changes (if using Git)
sudo git pull

# Or upload new files via SCP

# Rebuild
yarn install
yarn build

# Reload Nginx
sudo systemctl reload nginx
```

### Check Nginx Logs

```bash
# Access logs
sudo tail -f /var/log/nginx/access.log

# Error logs
sudo tail -f /var/log/nginx/error.log
```

### Restart Services

```bash
# Restart Nginx
sudo systemctl restart nginx

# Check Nginx status
sudo systemctl status nginx
```

---

## Troubleshooting

### Issue: Website not loading
**Solution:**
```bash
# Check if Nginx is running
sudo systemctl status nginx

# Check Nginx configuration
sudo nginx -t

# Check firewall
sudo ufw status
```

### Issue: 404 errors on page refresh
**Solution:** Make sure the `try_files` directive in Nginx config includes `/index.html` fallback.

### Issue: Images not loading
**Solution:**
```bash
# Check permissions
sudo chown -R www-data:www-data /var/www/sebhawkins
sudo chmod -R 755 /var/www/sebhawkins
```

---

## Performance Optimization Tips

1. **Enable Nginx caching** - Already configured in the Nginx setup above
2. **Use a CDN** - Consider Cloudflare for better global performance
3. **Optimize images** - Images are already optimized in the build
4. **Enable HTTP/2** - Automatically enabled with Let's Encrypt SSL

---

## Security Best Practices

1. **Keep system updated:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Configure fail2ban:**
   ```bash
   sudo apt install -y fail2ban
   sudo systemctl enable fail2ban
   ```

3. **Regular backups:**
   ```bash
   # Backup website files
   sudo tar -czf sebhawkins-backup-$(date +%Y%m%d).tar.gz /var/www/sebhawkins
   ```

4. **Monitor SSL certificate expiration:**
   ```bash
   sudo certbot certificates
   ```

---

## Support

For issues or questions about the website deployment, contact your development team.

---

## Technical Stack

- **Frontend:** React 19
- **Styling:** Tailwind CSS + Custom CSS (Black & Purple theme)
- **UI Components:** Shadcn/UI
- **Branding:** Purple Box
- **Server:** Nginx
- **OS:** Ubuntu 22.04 LTS

---

**Deployment completed! Your Purple Box sim racing website is now live.**
