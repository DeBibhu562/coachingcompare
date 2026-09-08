# CoachingCompare - VPS Deployment Guide (Docker & Nginx)

This guide provides end-to-end instructions for deploying **CoachingCompare.in** on any Ubuntu/Debian Linux VPS (DigitalOcean, Hetzner, AWS EC2, Linode, Hostinger, etc.) using Docker and Nginx.

---

## 🏗️ Architecture Overview

```
[ Visitor / Browser ]
        │  (HTTPS :443 / HTTP :80)
        ▼
[ Nginx Reverse Proxy (Host VPS) ]
  ├── SSL Termination (Let's Encrypt / Certbot)
  ├── Gzip Compression
  ├── Static Asset Caching (/_next/static/)
  └── Proxy pass to -> http://127.0.0.1:3000
                            │
                            ▼
      [ Docker Container: coachingcompare ]
        (Next.js 16 Standalone Server on Alpine Linux)
```

---

## 📋 Prerequisites

1. **A Linux VPS** running Ubuntu 22.04 LTS or 24.04 LTS (recommended: 1GB+ RAM).
2. **Domain DNS Configured**:
   - Point an **A record** for `coachingcompare.in` to your VPS IP address.
   - Point an **A record** for `www.coachingcompare.in` to your VPS IP address.

---

## 🚀 Step 1: Initial VPS Setup

Connect to your VPS via SSH:
```bash
ssh root@your_vps_ip
```

Update system packages:
```bash
sudo apt update && sudo apt upgrade -y
```

Install Git, Nginx, and Certbot:
```bash
sudo apt install -y git curl ufw nginx certbot python3-certbot-nginx
```

Configure basic firewall:
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 🐳 Step 2: Install Docker & Docker Compose

Run the official Docker automated installation script:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Verify Docker installation
docker --version
docker compose version
```

---

## 📥 Step 3: Clone the Repository on the VPS

Navigate to `/var/www` (or your preferred directory):
```bash
cd /var/www
git clone https://github.com/DeBibhu562/coachingcompare.git
cd coachingcompare
```

> **Note for Private Repositories**:
> Create a GitHub Personal Access Token (PAT) with `repo` read permissions or add your VPS SSH public key (`~/.ssh/id_rsa.pub`) to your GitHub account under **Settings > SSH and GPG keys**.

---

## ⚡ Step 4: Launch the Docker Container

Build and start the CoachingCompare container in background detached mode:
```bash
docker compose up -d --build
```

Verify that the container is healthy and running:
```bash
docker compose ps
docker compose logs --tail=20
```

Test that the local container responds to HTTP requests:
```bash
curl http://127.0.0.1:3000
```
*(You should see HTML output from the Next.js app)*

---

## 🌐 Step 5: Configure Nginx Reverse Proxy & SSL

### 1. Copy the Nginx Configuration
```bash
sudo cp /var/www/coachingcompare/nginx/coachingcompare.conf /etc/nginx/sites-available/coachingcompare.conf
sudo ln -s /etc/nginx/sites-available/coachingcompare.conf /etc/nginx/sites-enabled/
```

### 2. Obtain Free SSL Certificate with Let's Encrypt / Certbot
Run Certbot:
```bash
sudo certbot --nginx -d coachingcompare.in -d www.coachingcompare.in
```
Follow the prompts (enter your email, accept terms). Certbot will automatically verify your domain and configure the SSL certificates.

### 3. Test and Reload Nginx
```bash
sudo nginx -t
sudo systemctl reload nginx
```

✅ **Your website is now live and secured at https://coachingcompare.in!**

---

## 🔄 Step 6: Deploying Updates in 1-Click

When you make changes and push them to GitHub, update your live VPS with a single command:

```bash
cd /var/www/coachingcompare
./deploy.sh
```

Or manually:
```bash
git pull origin main
docker compose up -d --build
docker image prune -f
```

---

## 🛠️ Alternative Method: Direct Node.js + PM2 (Without Docker)

If you prefer running directly on the VPS without Docker:

1. **Install Node.js 20 & PM2**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   sudo npm install -g pm2
   ```

2. **Build and Start with PM2**:
   ```bash
   cd /var/www/coachingcompare
   npm install
   npm run build
   pm2 start npm --name "coachingcompare" -- start
   pm2 save
   pm2 startup
   ```

3. **Nginx Setup**: Use the same Nginx configuration from Step 5.

---

## 🔍 Helpful Maintenance Commands

| Task | Command |
|---|---|
| View Container Logs | `docker compose logs -f` |
| Restart App Container | `docker compose restart` |
| Stop App Container | `docker compose down` |
| Check Nginx Status | `sudo systemctl status nginx` |
| Test Nginx Configuration | `sudo nginx -t` |
| Check Certbot Renewal | `sudo certbot renew --dry-run` |
| Check VPS Memory & CPU | `htop` or `docker stats` |
