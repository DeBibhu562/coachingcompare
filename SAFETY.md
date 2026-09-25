# CoachingCompare — SAFETY (read before any deploy)

**Updated:** 2026-09-25 (parity restore complete)  
**Rule #1:** Do **not** rebuild or recreate the live `coachingcompare` container until you explicitly approve cutover.

## Live production (what visitors see)

| Item | Value |
|------|--------|
| Container | `coachingcompare` (unchanged; frozen image lineage) |
| Host port | `127.0.0.1:3020` → `3000` |
| Public URL | https://coachingcompare.in |
| Frozen rollback | `coachingcompare:frozen-latest` |
| Image archive | `/opt/backups/coachingcompare-image-frozen-20260925-082023.tar.gz` |

## Restored candidate (ready, not deployed)

| Item | Value |
|------|--------|
| Image | `coachingcompare:candidate-20260925` / `candidate-latest` |
| Route parity | **99.86%** of live HTML routes covered (2071 / 2074; remaining are junk `null` / `llms.txt`) |
| Local build | `npm run build` → ~2170 SSG pages |
| Compose default | still pins **`frozen-latest`** (safe) |

### What was restored into disk source
- 737 `best-*` ranking pages from production ItemList/FAQ archive
- 102 `/institutes/*` brand hubs
- 1013 `/institute/*` profile routes (rich listings where available; archive meta fallback otherwise)
- Legal + vs comparison archive pages
- Expanded exam×city static params

## Safe operations
- Edit `/opt/coachingcompare` source
- `npm run build` locally
- `docker build -t coachingcompare:candidate-YYYYMMDD .` (candidate only)
- Verify live: `curl -I https://coachingcompare.in/`

## Forbidden without explicit approval
- `docker compose up --build`
- Recreating/removing container `coachingcompare`
- Retagging live to candidate without a staged cutover plan
- Deleting `frozen-*` tags/backups

## Recommended cutover (only when you say go)

```bash
# 1) Confirm live healthy
curl -I https://coachingcompare.in/

# 2) Point compose at candidate (edit image line) OR:
docker tag coachingcompare:candidate-latest coachingcompare:frozen-latest

# 3) Recreate from image only (no Dockerfile build):
cd /opt/coachingcompare
docker compose up -d

# 4) Smoke test key URLs; if bad, roll back:
docker tag coachingcompare:frozen-20260925-082023 coachingcompare:frozen-latest
docker compose up -d
```

## Related paths
| Path | Purpose |
|------|---------|
| `/opt/coachingcompare` | Restored editable source |
| `/opt/coachingcompare/_recovery/` | Salvage + parity report |
| `/opt/coachingcompare/_frozen_production/` | Live route inventory |
| `/opt/coachingrank/` | Separate site (do not mix) |
| `/opt/backups/coachingcompare-*` | Tar + frozen image backups |
