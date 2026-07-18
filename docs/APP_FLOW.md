# Project Relay

# Application Flow

Version: 1.0

---

# 1. Overview

Project Relay uses a single account system where users can have multiple capabilities.

A user can be:

- Sender
- Receiver
- Driver

The application adapts based on the user's activities.

A person can send a package today and become a driver tomorrow using the same account.

---

# 2. First Time User Flow

```
Open App

↓

Splash Screen

↓

Check if user is logged in

↓

NO

↓

Onboarding

↓

Register / Login

↓

Create Profile

↓

Home Dashboard
```

---

# 3. Returning User Flow

```
Open App

↓

Splash Screen

↓

Check Authentication

↓

YES

↓

Home Dashboard
```

Returning users do not need to login repeatedly.

---

# 4. Main Navigation

Bottom Navigation:

```
🏠 Home

📦 My Packages

🚗 Driver

👤 Profile
```

---

# 5. Home Flow

The Home screen is the user's main dashboard.

The main section is:

## Right Now

It displays the latest important activities.

Activities are ordered by the latest update.

Examples:

- Package arriving soon
- Package sent and being transported
- Active driver trip

---

# 6. Sender Flow

A sender wants to send a package.

Flow:

```
Home

↓

Send Package

↓

Enter Package Information

↓

Enter Receiver Information

↓

Submit Package Request

↓

Package waits for driver/trip assignment

↓

Driver accepts package

↓

Receiver receives SMS notification

↓

Package tracking begins
```

---

# 7. Driver Flow

The driver is the main creator of trips.

The driver already has a journey and creates a trip based on that route.

Example:

Addis Ababa → Adama

Flow:

```
Driver opens app

↓

Driver Dashboard

↓

Create Trip

↓

Enter:

- Starting location
- Destination
- Departure time
- Vehicle information

↓

Trip created

↓

Available package requests matching the route appear

↓

Driver accepts packages

↓

Receiver receives SMS

↓

Driver starts journey

↓

Location tracking begins automatically
```

---

# 8. Automatic Journey Start

The system should avoid depending on the driver remembering to press buttons.

After the driver accepts packages:

```
Package accepted

↓

Receiver SMS sent

↓

System prepares tracking

↓

Driver leaves starting location

↓

GPS movement detected

↓

Trip status becomes:

On The Way
```

---

# 9. Receiver Flow

The receiver normally does not need to create anything.

The receiver receives an SMS:

Example:

"Hello, I am driver Ahmed.
I received your package.
Track your package here:
[Link]"

Flow:

```
Open SMS Link

↓

If app installed:

Open package tracking screen

↓

If app not installed:

Redirect to app installation

↓

Open receiver tracking experience

↓

View:

- Package information
- Driver information
- Vehicle plate
- Current location
- Estimated arrival time
```

---

# 10. Package Tracking Flow

```
Package accepted

↓

Trip starts

↓

Driver location updates

↓

Backend processes location

↓

Receiver sees:

- Current driver location
- Route progress
- Estimated arrival time

↓

Driver reaches destination

↓

Receiver identifies package using:

- Receiver name
- Package description

↓

Package handed over

↓

Package status becomes:

Completed
```

---

# 11. Driver Registration Flow

Every user can become a driver.

The Driver tab is available for everyone.

First time:

```
Tap Driver

↓

Not a driver yet

↓

Message:

"You are not registered as a driver."

↓

Register as Driver

↓

Enter:

- Driver information
- Vehicle information

↓

Driver access enabled
```

---

# 12. Profile Flow

Users can manage:

- Profile picture
- Name
- Phone number
- Driver status
- Account settings

---

# 13. Multiple Role Behavior

One account can have multiple capabilities.

Example:

Monday:

User sends a package.

Tuesday:

Same user receives a package.

Friday:

Same user drives a public transport vehicle and creates a trip.

No separate accounts are required.

---

# 14. Core User Experience Principle

Project Relay should reduce communication effort.

The system should replace repeated phone calls with:

- Automatic notifications
- Real-time location
- Clear package status
- Estimated arrival time