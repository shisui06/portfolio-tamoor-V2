# TODO: Make "Bienvenue dans mon univers" Component Responsive

## Steps to Complete
- [x] Update Preview function's outer div: Adjust text sizes to start smaller on mobile (e.g., text-xl on mobile, scaling up) and reduce padding on small screens.
- [x] Modify TextRotate's mainClassName in Preview: Make text sizes responsive (start from text-lg on mobile), and change width to w-full on small screens, narrowing on larger ones.
- [x] Update icon sizes in texts array: Make icons responsive (w-6 h-6 on mobile, up to w-12 h-12 on lg+).
- [x] Test the changes: Run development server and check responsiveness on different screen sizes.
- [x] Fix build issues: Removed MiniCssExtractPlugin from next.config.js to resolve build failure.

# TODO: Add Glow Effect to Navbar Items on Hover and Selection

## Steps to Complete
- [x] Update desktop navbar buttons: Add text glow on hover and ensure glow persists on active state.
- [x] Update mobile navbar buttons: Add text glow on hover and ensure glow persists on active state.
- [x] Test the hover and active glow effects on both desktop and mobile.

# TODO: Use Same Font for "Mon Parcours" and "À propos de moi"

## Steps to Complete
- [x] Update AboutSection.tsx: Add font-cinzel to headings.
- [x] Update about/page.tsx: Add font-cinzel to headings.
