# AniMathIO website

Marketing site for [AniMathIO](https://github.com/AniMathIO/AniMathIO) 2 (Vite, React, Tailwind CSS 4).
The look follows the AniMathIO 2 editor: tokens in `src/index.css` mirror `docs/design.md` in the main repository,
icons are [Lucide](https://lucide.dev), type is Inter and JetBrains Mono.

```bash
npm ci
npm run dev      # http://localhost:5173
npm run lint
npm run build
```

## Content that changes at a release

All of it lives in `src/data/site.ts`:

- `VERSION` and `downloads`: installer names are exactly what `.github/workflows/package.yml` produces
  (`animathio_<version>_x64-setup.exe`, `AniMathIO_<version>_aarch64.dmg`, `animathio_<version>_x86_64.AppImage`,
  `animathio_<version>_amd64.deb`), linked from the `v<version>` GitHub release.
- `showcaseVideos`: run `scripts/showcase-export.sh` in the main repository, copy the six
  `<name>-16x9.mp4` / `<name>-9x16.mp4` files to `public/videos/showcase/` and set `published: true`.
  Media is not committed until then.
- `benchmarks`: `TODO(benchmarks)`. Fill from `docs/benchmarks.md` in the main repository. The Benchmarks
  section is hidden in production while the list is empty and shows a marked placeholder in `npm run dev`.
