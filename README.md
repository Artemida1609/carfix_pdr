## AUTO PDR MASTER — Paintless Dent Repair Service

Modern single-page website for **AUTO PDR MASTER**, a service specializing in **paintless dent repair (PDR)**. The project is built with **React + TypeScript**, powered by **Vite** and **Tailwind CSS**, uses **motion** for animations, and is deployed to **GitHub Pages**.

---

### Core Features

- **Hero Section (`Hero`)**
  - Brand presentation for AUTO PDR MASTER.
  - Visually appealing background with responsive layout for mobile and desktop.
  - Main contact information with click-to-call phone numbers and Telegram link.
  - Clear call to action: **“Estimate Damage”**.

- **About Section (`About`)**
  - Brief overview of the service’s expertise, workflow, and advantages of PDR technology.

- **Services (`Services`)**
  - List of core services loaded from `public/data/services.json`.
  - For each service displays:
    - icon,
    - title,
    - description.
  - Clickable cards that smoothly scroll to relevant sections (gallery or hero).
  - Additional **“Order Service”** button that scrolls to the booking section.

- **Gallery (`Gallery`)**
  - Visual examples of work (before/after) showcasing repair quality.

- **Awards / Trust (`Awards`)**
  - Block with achievements, certificates, partner references, etc. in visual form.

- **Reviews (`Reviews`)**
  - Social proof with customer feedback.

- **Booking / Request Form (`BookForm`)**
  - Form for online booking or damage assessment request.
  - Integration with **EmailJS** (`@emailjs/browser`) for sending requests via email.

- **Header & Navigation (`Header`)**
  - Service logo/name.
  - Anchor navigation to page sections.

- **Telegram Icon (`TelegramIcon`)**
  - Quick link to Telegram for convenient communication with the technician.

- **Scroll To Top (`ScrollToTop`)**
  - Appears on scroll and returns user to the top of the page.

- **Footer (`Footer`)**
  - Contact information, short service description, and optionally social media links.

- **Analytics (`@vercel/analytics`)**
  - User behavior tracking for product improvement.

---

### Tech Stack

- **Core**
  - `React` (SPA with functional components)
  - `TypeScript`
  - `Vite` (fast dev server and build tool)

- **Styling & Animations**
  - `Tailwind CSS` — utility-first styling for fast UI development.
  - `motion` — smooth animations on load and on scroll.

- **Frontend Utilities**
  - `react-scroll` — smooth scrolling between sections.
  - Custom hook `useScreenSize` — responsive logic based on viewport size.

- **Other**
  - `@emailjs/browser` — send forms without a backend.
  - `@vercel/analytics` — analytics from Vercel.
  - `gh-pages` — deployment to GitHub Pages.

- **Code Quality**
  - `ESLint` + `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`.
  - `TypeScript` typing.

---

### Project Structure (short)

- `src/main.tsx` — application entry point.
- `src/App.tsx` — root component, analytics setup, and `HomePage` rendering.
- `src/pages/HomePage.tsx` — composition of the main page sections.
- `src/components/*` — UI components:
  - `Hero`, `Header`, `About`, `Services`, `Gallery`, `Awards`, `Reviews`, `BookForm`, `Footer`.
- `src/features/*` — small functional features:
  - `ScrollToTop`, `TelegramIcon`.
- `src/hooks/useScreenSize.tsx` — hook for detecting screen size.
- `public/data/services.json` — configurable service list rendered in the “Services” block.

---

### Running the Project Locally

**Requirements:**

- **Node.js** installed (recommended LTS 18+).
- `npm` or `pnpm` / `yarn`.

**Steps:**

1. Clone the repository:

   ```bash
   git clone https://github.com/Artemida1609/carfix_pdr.git
   cd carfix_pdr
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:

   - usually at `http://localhost:5173/` (Vite will print the exact URL in the console).

---

### Build & Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

### Deployment to GitHub Pages

The project is configured for deployment using the `gh-pages` package.

1. Make sure the `homepage` field in `package.json` is correctly set:
   - `https://<your-github-username>.github.io/<repo-name>`
   - in this project: `https://github.com/Artemida1609/carfix_pdr`

2. Run:

   ```bash
   npm run deploy
   ```

Scripts:

- `predeploy` — automatically runs `npm run build`.
- `deploy` — publishes the content of `dist` to the `gh-pages` branch.

After a successful deployment, the site will be available at the URL specified in the `homepage` field.

---

### EmailJS Setup

For the booking/request form to work correctly:

1. Create an account on EmailJS (`https://www.emailjs.com`).
2. Create a service and an email template, then obtain:
   - `service_id`
   - `template_id`
   - `public_key` (or `user_id`).
3. Pass these values into the configuration used in the form (see the `BookForm` component and related files).
4. Make sure the form fields (`name`, `phone`, `description`, etc.) match the fields defined in the EmailJS template.

---

### Adapting for Your Service

To quickly adapt this website for another PDR service or auto body shop:

- **Content:**
  - update texts in the relevant components (`Hero`, `About`, `Services`, `Footer`, `Reviews`),
  - update phone numbers and links to Telegram/social media,
  - replace background and gallery images.

- **Services:**
  - edit `public/data/services.json` (titles, descriptions, emoji icons).

- **Branding:**
  - change theme colors (see `index.css`, `--main-*` CSS variables),
  - replace logo in the header and/or footer.

---

### npm Scripts

- `npm run dev` — start Vite dev server.
- `npm run build` — production build (TypeScript + Vite).
- `npm run preview` — local preview of the production build.
- `npm run lint` — run ESLint checks.
- `npm run deploy` — deploy to GitHub Pages (via `gh-pages`).

---

### License

If no explicit license is provided in the repository, the content is by default intended for internal/private use only. For commercial use or a public fork, it is recommended to explicitly add a `LICENSE` file (for example, MIT) and align conditions with the project author.
