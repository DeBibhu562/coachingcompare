# CoachingCompare — SAFETY (read before any deploy)

**Date:** 2026-09-25  
**Rule #1:** Do **not** rebuild or recreate the live `coachingcompare` container until source is verified complete and you have an explicit go-ahead.

## Live production (source of truth for visitors)

| Item | Value |
|------|--------|
| Container | `coachingcompare` (healthy) |
| Host port | `127.0.0.1:3020` → container `3000` |
| Public URL | https://coachingcompare.in |
| Frozen image tag | `coachingcompare:frozen-20260925-082023` |
| Alias | `coachingcompare:frozen-latest` |
| Image archive | `/opt/backups/coachingcompare-image-frozen-20260925-082023.tar.gz` |

The frozen image was created with `docker commit` from the **running** production container. It preserves the full site that visitors see.

## What happened

While scaffolding a **separate** site (`/opt/coachingrank`), the host directory `/opt/coachingcompare` was accidentally damaged. The live Docker container was **not** stopped and continued serving the correct site.

## Disk source status (honest)

- **Intact for visitors:** yes (container + frozen image).
- **Disk TypeScript:** partially restored / rebuilt since the incident; **not** a guaranteed 100% byte-for-byte copy of every pre-incident source file.
- **Do not assume** `npm run build` + recreate will match production until a full parity review is done.

## Safe operations (allowed)

- Edit files under `/opt/coachingcompare` for recovery work.
- Read/copy from `_recovery/` and `_frozen_production/`.
- `docker compose up -d` **only if** compose uses the **frozen image** (no `build:`).
- Verify live: `curl -I https://coachingcompare.in/`

## Forbidden until explicit approval

- `docker compose build`
- `docker compose up --build`
- `docker rm -f coachingcompare`
- Retagging/removing `coachingcompare:frozen-*`
- Changing Caddy’s `coachingcompare` upstream

## Restore frozen site if container is ever lost

```bash
docker load < /opt/backups/coachingcompare-image-frozen-20260925-082023.tar.gz
cd /opt/coachingcompare
docker compose up -d   # must reference coachingcompare:frozen-latest
```

## Related paths

| Path | Purpose |
|------|---------|
| `/opt/coachingcompare` | Working disk source (this tree) |
| `/opt/coachingcompare/_recovery/` | Salvaged modules / extracts (reference) |
| `/opt/coachingcompare/_frozen_production/` | Live route list + runtime metadata |
| `/opt/coachingcompare-recovered/` | Earlier salvage archive (keep) |
| `/opt/coachingrank/` | **Separate** site — unrelated to this restore |
| `/opt/backups/coachingcompare-*` | Tar + image backups |

## Sidecar note

`coachingcompare-ipmat-delhi` is a separate container. Do not stop or rebuild it as part of main-site recovery.
