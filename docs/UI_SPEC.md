# Project Relay

# User Interface Specification

Version: 1.0

---

# Design Principles

Project Relay follows these design principles:

- Show important information first.
- Reduce unnecessary user actions.
- Minimize typing.
- Keep the interface simple.
- Prioritize active deliveries.
- Never distract drivers while driving.
- Use clear language that anyone can understand.
- Every screen should have one primary action.

---

# Global Navigation

Bottom Navigation

🏠 Home

📦 My Deliveries

🚗 Driver

👤 Profile

---

# Screen: Home Dashboard

## Purpose

The Home Dashboard is the user's control center.

Its primary goal is to immediately inform the user about any active deliveries and provide quick access to common actions.

---



## Components



### 1. Greeting

Display:

Good Morning, {User Name} 👋

---



### 2. Active Delivery Card

If an active delivery exists, display:

- Package description
- Current status
- ETA
- Remaining distance
- Driver name
- Vehicle plate number

Primary Button:

Track Live

Selecting this button opens the Live Tracking screen.

---



### 3. Empty State

If no active delivery exists:

Display:

"No active deliveries.

When someone sends you a package, it will appear here automatically."

---



### 4. Quick Actions

Display:

- Send Package

If the user is a registered driver:

- Create Delivery

---



### 5. Activity Feed

The Home screen displays ongoing delivery activities.

Activities are ordered by the most recent update, regardless of whether the user is:

- Receiving a package
- Sending a package
- Transporting a package

Each activity card may display:

- Activity type
- Package description
- Current status
- Time since last update

Selecting an activity opens the appropriate details screen.