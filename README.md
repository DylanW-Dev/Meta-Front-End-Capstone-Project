````markdown
# Little Lemon Restaurant — Meta Front-End Developer Capstone

![Little Lemon](./little-lemon/src/assets/images/logo.png)

A responsive restaurant web application built as the **capstone project** for the [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer) on Coursera.

---

## Live Demo

> _Coming soon / Deploy link here_

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

Little Lemon is a fictional Chicago-based Mediterranean restaurant. This project demonstrates core Front-End development skills including:

- Component-based UI with **React**
- Client-side routing with **React Router**
- Controlled form components with **validation**
- State management with `useReducer` and `localStorage` persistence
- Unit testing with **Jest** and **React Testing Library**
- Responsive design with **CSS**

---

## Features

- Responsive Navbar with mobile hamburger menu
- Hero section with call-to-action
- Specials section (food cards)
- Testimonials section
- About section
- Table Reservation system with:
  - Date, time, guests and occasion fields
  - Real-time JavaScript field validation
  - HTML5 validation attributes
  - Dynamic available times via `fetchAPI`
  - `localStorage` persistence
  - Submit button enabled/disabled based on form validity
  - Confirmation page on successful booking
- Coming Soon pages for Menu, Order Online and Login
- Footer with navigation, contact and social links

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| CSS3 | Styling and responsive layout |
| Jest | Test runner |
| React Testing Library | Component testing |
| localStorage | Time slots persistence |
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
│   │   │       ├── angelo.jpg
│   │   │       ├── bruschetta.jpg
│   │   │       ├── chef-prepping.jpg
│   │   │       ├── grace.jpg
│   │   │       ├── greek-salad.jpg
│   │   │       ├── hero-food.jpg
│   │   │       ├── lemon-dessert.jpg
│   │   │       ├── logo-white.png
│   │   │       ├── logo.png
│   │   │       ├── maria.jpg
│   │   │       ├── mish.jpg
│   │   │       ├── owner.jpg
│   │   │       └── restaurant.jpg
│   │   ├── components/
│   │   │   ├── About/
│   │   │   ├── Booking/
│   │   │   │   ├── bookingUtils.js       # initializeTimes + updateTimes
│   │   │   │   ├── BookingForm.jsx       # Controlled form + validation
│   │   │   │   ├── BookingForm.test.js   # All unit tests
│   │   │   │   ├── BookingPage.jsx       # Page wrapper + useReducer
│   │   │   │   └── ConfirmationPage.jsx  # Post-submission confirmation
│   │   │   ├── ComingSoon/
│   │   │   │   ├── ComingSoon.jsx
│   │   │   │   └── ComingSoon.css
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
└── UI : UX Research/
```

---

## Getting Started

### Prerequisites

- Node.js `v16+`
- npm `v8+`

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Meta-Front-End-Capstone-Project.git

# Navigate into the project
cd Meta-Front-End-Capstone-Project/little-lemon

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at **http://localhost:3000**

---

## Running Tests

```bash
npm test
```

To run with coverage:

```bash
npm test -- --coverage
```

---

## Test Coverage

All tests are located in `src/components/Booking/BookingForm.test.js`

| Category | Tests |
|---|---|
| localStorage persistence | `initializeTimes` reads from storage, falls back to default, `updateTimes` writes to storage |
| Static rendering | Submit button text, all form labels present |
| bookingUtils | Returns non-empty array, updates times for selected date |
| HTML5 attributes | `required`, `min`, `max` on all inputs |
| Date validation | Empty, past date, valid date |
| Time validation | Not selected, valid selection |
| Guests validation | Below 1, above 10, valid value |
| Form submission | Button disabled when empty, enabled when valid, `submitForm` called with correct data |

**Total: 22 unit tests**

---

## Screenshots

| Page | Preview |
|---|---|
| Home | ![hero](image.png) |
![specials](image.png)
| Reservation | ![reservation](image-1.png) |
| Confirmation | ![success](image-2.png) |

---

## License

This project is licensed under the terms of the [LICENSE](./LICENSE) file included in this repository.

---

## Certificate

Built as the final capstone for the  
**[Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer)**  
on Coursera.

---

> Designed and developed by DylanW (https://github.com/DylanW-Dev)
````