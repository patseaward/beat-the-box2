# Beat the Box (Web Prototype)

A cozy, Ghibli-inspired card game prototype. Tap a pile, guess **Higher/Lower/Same**, survive the 52-card deck, and **Beat the Box**.

## Play locally
Open `index.html` in your browser. No build step needed.

## Deploy to Vercel
1. Create a new GitHub repo (e.g., `beat-the-box`), and add these files.
2. In Vercel, **New Project → Import** that repo.
3. Framework: **Other** (static). No build command needed.
4. Deploy. You'll get a URL like `https://beat-the-box.vercel.app`.

## Notes
- Mobile-friendly layout (deck below grid on small screens).
- Sounds, animations, streaks, celebrations.
- LocalStorage for Best Win / Best Loss / Last Game / Longest Streak.
- Deck is always face-down; drawn card animates to selected pile.

## Next
- Add a PWA manifest and icons (installable).
- Toggle sounds/haptics.
- Optional: custom card backs (localStorage).
- Analytics (e.g., plausible).

— 2025-08-09
