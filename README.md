# AniMathIO website

Marketing site for [AniMathIO](https://github.com/AniMathIO/AniMathIO) 2 (Vite, React, Tailwind CSS 4).
The look follows the AniMathIO 2.3 editor: tokens in `src/index.css` mirror `docs/design.md` and
`apps/animathio/src/style/tokens.rs` in the main repository (neutral dark surfaces, the logo cyan as the only accent,
radii 8/6/4, sentence case, no violet or gradient accent). Components use the tokens, never colour literals. Icons are
[Lucide](https://lucide.dev), type is Inter, with JetBrains Mono for code only.

```bash
npm ci
npm run dev      # http://localhost:5173
npm run lint
npm run build
```

## Content that changes at a release

Release metadata and the original showcase live in `src/data/site.ts`:

- `VERSION` and `downloads`: installer names are exactly what `.github/workflows/package.yml` produces
  (`animathio_<version>_x64-setup.exe`, `AniMathIO_<version>_aarch64.dmg`, `animathio_<version>_x86_64.AppImage`,
  `animathio_<version>_amd64.deb`), linked from the `v<version>` GitHub release.
- `showcaseVideos`: run `scripts/showcase-export.sh` in the main repository, copy the six
  `<name>-16x9.mp4` / `<name>-9x16.mp4` files to `public/videos/showcase/` and set `published: true`.
  Media is not committed until then.
- `benchmarks`: `TODO(benchmarks)`. Fill from `docs/benchmarks.md` in the main repository. The Benchmarks
  section is hidden in production while the list is empty and shows a marked placeholder in `npm run dev`.


## Feature gallery

[All features](https://animathio.com/examples#all-features) uses editable source
projects from [the main repository](https://github.com/AniMathIO/AniMathIO/tree/main/examples/feature-gallery).
Render the complete gallery with its release CLI and enabled Code Snippets
bundle, then copy the outputs into this checkout:

```bash
cp /path/to/feature-gallery/manifest.json src/data/feature-gallery.json
cp /path/to/feature-gallery/videos/*.{mp4,webm} public/videos/gallery/
cp /path/to/feature-gallery/img/*.webp public/img/gallery/
```

Each card loads its video on play. Keep the gallery media under 40 MB.
Upcoming community plugins are listed in `src/components/FeatureGallery.tsx`.
