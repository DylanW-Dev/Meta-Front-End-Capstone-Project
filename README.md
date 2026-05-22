# Little Lemon Restaurant — Meta Front-End Developer Capstone

![Little Lemon](./little-lemon/src/assets/images/logo.png)

A responsive restaurant web application built as the capstone project for the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

---

## Live Demo

> Coming soon

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
- [Screenshots](#screenshots)
- [License](#license)

---

## About the Project

Little Lemon is a fictional Chicago-based Mediterranean restaurant. This capstone project demonstrates practical front-end development skills acquired throughout the Meta certification program, including component-based architecture, client-side routing, controlled form handling, state management, and unit testing.

Key concepts covered:

- Component-based UI with React
- Client-side routing with React Router
- Controlled form components with validation
- State management with `useReducer` and `localStorage` persistence
- Unit testing with Jest and React Testing Library
- Responsive design with CSS

---

## Features

- Responsive navigation bar with a mobile hamburger menu
- Hero section with a call-to-action
- Specials section displaying food cards
- Testimonials section
- About section
- Table reservation system including:
  - Date, time, guests, and occasion fields
  - Real-time JavaScript field validation
  - HTML5 validation attributes
  - Dynamic available time slots via `fetchAPI`
  - `localStorage` persistence for available times
  - Submit button state tied to overall form validity
  - Confirmation page on successful booking
- Placeholder pages for Menu, Order Online, and Login
- Footer with navigation links, contact information, and social links

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| CSS3 | Styling and responsive layout |
| Jest | Test runner |
| React Testing Library | Component testing |
| localStorage | Time slot persistence |
| fetchAPI (mocked) | Dynamic available times |

---

## Project Structure

```
Meta-Front-End-Capstone-Project/
├── little-lemon/
│   ├── public/
│   │   ├── LogoLittle.svg
│   │   └── robots.txt
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── components/
│   │   │   ├── About/
│   │   │   ├── Booking/
│   │   │   │   ├── bookingUtils.js       # initializeTimes and updateTimes logic
│   │   │   │   ├── BookingForm.jsx       # Controlled form with validation
│   │   │   │   ├── BookingForm.test.js   # Unit tests
│   │   │   │   ├── BookingPage.jsx       # Page wrapper with useReducer
│   │   │   │   └── ConfirmationPage.jsx  # Post-submission confirmation view
│   │   │   ├── ComingSoon/
│   │   │   ├── Footer/
│   │   │   ├── Hero/
│   │   │   ├── Navbar/
│   │   │   ├── Specials/
│   │   │   └── Testimonials/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── index.js
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
├── Screenshots/
└── UI-UX Research/
```

---

## Getting Started

### Prerequisites

- Node.js `v16` or higher
- npm `v8` or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/DylanW-Dev/Meta-Front-End-Capstone-Project.git

# Navigate into the project directory
cd Meta-Front-End-Capstone-Project/little-lemon

# Install dependencies
npm install

# Start the development server
npm start
```

The application will be available at `http://localhost:3000`.

---

## Running Tests

```bash
npm test
```

To run tests with a coverage report:

```bash
npm test -- --coverage
```

All tests are located in `src/components/Booking/BookingForm.test.js`.

---

## Test Coverage

| Category | What is tested |
|---|---|
| localStorage persistence | `initializeTimes` reads from storage and falls back to a default; `updateTimes` writes to storage |
| Static rendering | Submit button label, presence of all form field labels |
| bookingUtils | Returns a non-empty array; updates available times for a selected date |
| HTML5 attributes | `required`, `min`, and `max` attributes on all relevant inputs |
| Date validation | Empty value, past date, valid date |
| Time validation | No selection, valid selection |
| Guests validation | Value below minimum, value above maximum, valid value |
| Form submission | Button disabled when form is incomplete; button enabled when form is valid; `submitForm` called with the correct data |

**Total: 24 unit tests**

---

## License

This project is licensed under the terms of the [LICENSE](./LICENSE) file included in this repository.

---

## Certificate

Built as the final capstone project for the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

---

Developed by [DylanW](https://github.com/DylanW-Dev)