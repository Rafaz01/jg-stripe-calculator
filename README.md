# JG Graphic — Stripe Fee Calculator

Internal billing tool for JG Graphic LLC. Calculates Stripe fee pass-through amounts so clients cover processing costs.

## Features

- Live calculation as you type
- Three fee modes: Stripe standard (2.9% + $0.30), +4% agency fee, +5% agency fee
- Copy-to-clipboard for final amount
- Clean breakdown showing what client pays vs. what you receive

## How it works

The calculator uses the pass-through formula so you always receive your full service price:

```
Client price = (your price + $0.30) / (1 - 0.029)
```

## Project Structure

```
stripe-fee-calculator/
├── index.html        # Main HTML
├── css/
│   └── style.css     # All styles
├── js/
│   └── calculator.js # Calculation logic & UI
└── README.md
```

## Usage

Open `index.html` in a browser — no build step needed.

## Tech

Vanilla HTML · CSS · JavaScript — no dependencies.

---

Built for [JG Graphic LLC](https://jg-graphic.com)
