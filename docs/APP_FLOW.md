# Project Relay

# Application Flow

Version: 1.0

---

# Overview

Project Relay is a single mobile application that supports package coordination between public transport drivers, senders, and receivers.

The application improves the existing package transportation process by replacing repeated phone calls with real-time tracking and delivery updates.

---

# User Philosophy

Project Relay does not assign permanent user roles.

Every user has one account.

A user performs different actions depending on the situation.

Examples:

- A user may send a package today.
- The same user may receive a package tomorrow.
- The same user may later become a driver.

The application automatically unlocks features based on the user's actions and profile.

---

# User Account

Every account contains:

- Phone Number
- Full Name
- Profile Picture (Optional)

The phone number is the unique identifier for every user.

Users stay logged in after registration unless they manually log out or reinstall the application.

---

# Driver Profile

Any registered user can become a driver.

Creating a driver profile unlocks driver features.

Driver information includes:

- Vehicle Plate Number
- Vehicle Type
- Optional Usual Route

Once approved, driver features become available automatically.

---

# Application Startup Flow

Splash Screen

↓

Is user logged in?

↓

YES

↓

Open Home Screen

↓

NO

↓

Register/Login

↓

Phone Number

↓

OTP Verification

↓

Enter Name

↓

Add Profile Picture (Optional)

↓

Open Home Screen

---

# Home Screen Philosophy

The Home Screen changes based on the user's available features.

Examples:

Receiver:

- My Deliveries

Sender:

- Send Package

Driver:

- Driver Dashboard
- New Delivery

A user may access multiple features without switching accounts.

---

# Main Navigation

Project Relay uses a four-tab navigation system:

## Home

Personal dashboard showing user's current activity and quick actions.

Examples:

- Active received packages.
- Sent packages.
- Driver activity.
- Quick actions.

The dashboard adapts based on available user capabilities.

---

## My Deliveries

Shows packages associated with the user.

Includes:

- Incoming deliveries.
- Delivery tracking.
- Delivery history.

When opened from an SMS tracking link, the app opens the specific delivery directly.

---

## Driver

Provides driver-related features.

For users without a driver profile:

- Show driver registration option.

For registered drivers:

- Driver dashboard.
- Create delivery.
- Manage active deliveries.

---

## Profile

Contains:

- Personal information.
- Profile picture.
- Driver profile.
- Settings.
- Account management.

---

# Deep Link Flow

When a receiver opens a tracking link from SMS:

SMS Link

↓

Open Application

↓

Open Specific Delivery Tracking Screen

↓

Return to My Deliveries