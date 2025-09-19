# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Description: This is a responsive, interactive web interface built with React that allows users to compare products side-by-side. It fulfills the core requirements outlined in the take-home assignment.

Features:
- Display a grid of 6–8 static products.
- Each product shows:
  - Name
  - Brand
  - Image
  - Price
  - 2–3 key features
- "Add to Compare" functionality:
  - Select up to 3 products to compare.
  - A comparison view appears only when 2 or more products are selected.
- Side-by-side comparison table:
  - Highlights differences visually.
- Clear/Remove options:
  - Remove individual items from comparison list.
  - Clear all selected items.
- added input search bar functionlity to search for products
