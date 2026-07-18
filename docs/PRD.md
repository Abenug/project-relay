# Project Relay

# Product Requirement Document (PRD)

Version: 1.0

---

# 1. Product Overview

## Product Name

Project Relay

---

## Product Description

Project Relay is a package relay platform that helps people send packages through existing public transport drivers who are already traveling between cities.

Project Relay is NOT a delivery company.

The platform does not hire drivers to deliver packages. Instead, it improves the existing informal package transportation process by providing:

- Package visibility
- Real-time location tracking
- Better communication
- Increased trust between sender, driver, and receiver

The driver is already traveling from one location to another. Project Relay simply helps them carry packages belonging to that route.

---

# 2. Problem Statement

Currently, sending packages through public transport depends on phone calls and manual communication.

The existing process:

1. Sender finds a driver traveling to the destination.
2. Sender gives the package to the driver.
3. Sender receives the driver's phone number and vehicle plate number.
4. Sender informs the receiver.
5. Receiver repeatedly calls the driver asking:
   - Where are you?
   - Have you arrived?
   - When will you reach?

This creates problems:

- Receiver has uncertainty about package status.
- Drivers receive repeated phone calls while traveling.
- Sender and receiver have limited visibility.
- Trust depends only on phone communication.

---

# 3. Proposed Solution

Project Relay provides a digital layer on top of the existing process.

The system allows:

- Drivers to create trips and manage packages they carry.
- Senders to register packages.
- Receivers to automatically track their packages.
- Users to see real-time travel progress.

The goal is to remove unnecessary communication while keeping the existing transportation system unchanged.

---

# 4. Core Concepts

## Trip

A trip represents a driver's existing journey from one location to another.

Example:

Addis Ababa → Adama

A trip contains:

- Driver information
- Vehicle information
- Route
- Departure information
- Packages being carried

---

## Package

A package represents one item being transported.

A package belongs to one trip.

Example:

Package:

- Sender: Abebe
- Receiver: Hana
- Destination: Adama
- Description: Black backpack

---

# 5. Users

## Normal User

A user can:

- Send packages
- Receive packages

A single account can perform multiple roles.

---

## Driver

A driver is a public transport driver who is already traveling to a destination and agrees to carry packages along that route.

The driver can:

- Create trips
- Accept package requests
- Manage carried packages
- Share location during travel

---

# 6. User Goals

## Receiver

The receiver wants:

- To know where the package is.
- To know estimated arrival time.
- To avoid repeatedly calling the driver.
- To trust the transportation process.

---

## Sender

The sender wants:

- To send packages easily.
- To know the package progress.
- To receive confirmation and updates.

---

## Driver

The driver wants:

- To avoid repeated calls.
- To easily manage packages.
- To inform receivers automatically.
- To focus on driving.

---

# 7. MVP Features

## Authentication

- User registration
- Login
- Profile creation
- Profile picture

---

## Package Management

- Create package record
- Add receiver information
- Add package description
- Track package status

---

## Trip Management

Drivers can:

- Create trips
- Define route
- Manage packages carried during the trip

---

## Real-Time Tracking

Receivers can view:

- Driver location
- Route progress
- Estimated arrival time

---

## SMS Integration

When a package is accepted:

Receiver receives SMS:

"Hello, I am driver X. I received your package Y."

The SMS contains a tracking link.

---

# 8. Non Functional Requirements

## Performance

- Location updates should happen quickly.
- App should remain responsive.

---

## Security

- Protect user information.
- Protect phone numbers.
- Control access to package information.

---

## Usability

The application should be simple enough for users with different technical abilities.

---

## Reliability

Tracking and notifications should work consistently.

---

# 9. Product Vision

Project Relay makes package transportation through public transport safer, clearer, and more trustworthy without replacing the existing system.