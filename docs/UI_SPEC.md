# Project Relay

# User Interface Specification

Version: 1.0

---

# Design Goals

The interface should make package transportation simple, trustworthy, and easy to understand.

The design should:

- Show important information first.
- Reduce unnecessary actions.
- Focus on packages, not drivers.
- Support existing public transport habits.
- Require minimum effort from drivers.

---

# Global Navigation

Bottom Navigation:

```
🏠 Home

📦 My Packages

🚗 Driver

👤 Profile
```

---

# Screen 1: Home Dashboard

## Purpose

The Home screen is the user's main control center.

Its main purpose is answering:

"What is happening right now?"

---

## Main Section

# Right Now

Activities are displayed based on the latest important update.

The order is not based on role.

A user may see:

- Packages they are receiving.
- Packages they sent.
- Trips they created.

---

## Activity Card

Example:

```
📦 Laptop Charger

Driver is on the way

Addis Ababa → Adama

ETA:
25 minutes

[Track Package]
```

---

## Empty State

If there are no active activities:

```
Nothing happening right now.

Your package activities will appear here automatically.
```

---

# Screen 2: My Packages

## Purpose

The user views packages connected to them.

Users care about their package status, not the driver's list.

---

## Structure

```
📦 My Packages


🟢 Active Packages

-----------------

Laptop Charger

From:
Addis Ababa

To:
Adama

Status:
On the way

[Track]


-----------------

📜 Recently Completed

Backpack

Delivered Yesterday

[View All]
```

---

# Active Package Card

Display:

- Package description
- Sender/Receiver information depending on user role
- Current status
- Route
- Driver information
- Vehicle information
- Estimated arrival time

Primary action:

Track Package

---

# Screen 3: Package Tracking

## Purpose

Allow receivers and senders to see package progress.

---

## Components

Map:

Shows:

- Driver current location
- Travel route
- Destination

---

Information Card:

```
Package:

Black Backpack


Driver:

Ahmed


Vehicle:

AA-12345


Route:

Addis Ababa → Adama


ETA:

35 minutes
```

---

## Status Messages

Use human language.

Examples:

Good:

"Your package is on the way."

"Driver is approaching the destination."

"Your package has arrived."

Avoid:

"Status: In Transit"

---

# Screen 4: Driver Dashboard

## Purpose

The Driver screen helps drivers manage their trips and carried packages.

The driver is not a delivery worker.

The driver is already traveling to a destination.

---

## Dashboard

Example:

```
🚗 Today's Trip


Addis Ababa → Adama


Departure:

10:30 AM


Packages:

📦 3 packages


[View Packages]

[Create New Trip]
```

---

# Screen 5: Create Trip

## Purpose

Allow drivers to register their existing journey.

---

## Information Required

Driver enters:

- Starting location
- Destination
- Departure time
- Vehicle information

Example:

```
From:

Addis Ababa


To:

Adama


Departure:

10:30 AM


Vehicle Plate:

AA-12345
```

---

# Screen 6: Trip Package Management

## Purpose

Allow drivers to manage packages carried during their trip.

---

## Package List

Example:

```
Trip:

Addis Ababa → Adama


Packages:


📦 Hana

Black backpack


📦 Dawit

Documents


📦 Selam

Small box
```

---

# Screen 7: Send Package

## Purpose

Allow users to register a package they want transported.

---

## Form Fields

Sender enters:

Package description

Receiver name

Receiver phone number

Destination

Additional notes

---

## After Submission

The package waits for a matching driver trip.

---

# Screen 8: Driver Registration

## Purpose

Allow normal users to become drivers.

---

Flow:

User taps:

🚗 Driver

↓

Message:

"You are not registered as a driver yet."

↓

Register Driver Profile

↓

Enter:

- Driver information
- Vehicle information

↓

Driver features unlocked

---

# Screen 9: Profile

## Components

User can manage:

- Profile picture
- Name
- Phone number
- Account settings
- Driver profile

---

# Screen 10: Receiver Experience From SMS

## Purpose

Allow receivers to track packages without complicated setup.

---

Flow:

SMS received:

"Hello, I am driver Ahmed.
I received your package.

Track here:
(link)"

↓

User opens link

↓

If app installed:

Open tracking screen

↓

If app not installed:

Redirect to app installation

---

# UI Philosophy

The application should always answer:

"What is happening with my package?"

The user should never need to repeatedly call a driver to understand the situation.
