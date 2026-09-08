#!/bin/bash
# =============================================================================
# CoachingCompare - VPS Zero-Downtime Deployment & Update Script
# =============================================================================

set -e

echo "🚀 Starting deployment for CoachingCompare..."

# 1. Pull latest code from GitHub
echo "📦 Pulling latest changes from Git..."
git pull origin main

# 2. Rebuild and restart containers
echo "🔨 Building Docker image and restarting container..."
docker compose down || true
docker compose up -d --build

# 3. Wait for service to initialize
echo "⏳ Waiting for service to start up..."
sleep 5

# 4. Verify container status
if docker ps | grep -q "coachingcompare"; then
    echo "✅ CoachingCompare container is UP and RUNNING on port 3000!"
else
    echo "❌ Error: Container failed to start. Showing logs:"
    docker compose logs --tail=50
    exit 1
fi

# 5. Clean up dangling images to save VPS disk space
echo "🧹 Pruning unused Docker images..."
docker image prune -f

echo "🎉 Deployment complete! Visit https://coachingcompare.in"
