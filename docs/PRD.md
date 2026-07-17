# Project Relay

## Product Requirements Document (PRD)

Version: 1.0  

Status: Planning

---

# 1. **Product Overview**

## Product Name

Project Relay

## Description

Project Relay is a real-time package tracking application designed to improve the delivery experience for intercity deliveries.

The platform connects senders, drivers, and receivers by providing live location tracking, delivery status updates, and communication tools.

The goal is to eliminate the need for repeated phone calls between receivers and drivers by providing transparent real-time delivery visibility.

---

# 2. **Problem Statement**

## Current Situation

Currently, intercity package deliveries often depend on direct communication between the sender, driver, and receiver.

The traditional process works like this:

1. The sender gives the package to a driver.
2. The sender collects the driver's phone number and vehicle plate number.
3. The sender shares this information with the receiver.
4. The receiver contacts the driver to ask about the delivery location and estimated arrival time.

## Problems With The Current Process

### 1. Lack of Real-Time Visibility

The receiver cannot know where the package is until they contact the driver.

### 2. Excessive Phone Calls

Receivers often need to repeatedly call drivers with questions like:

- Where are you now?
- How far are you?
- When will you arrive?

This creates unnecessary communication pressure.

### 3. Driver Distraction

Drivers may be driving when receivers call, creating safety risks and inconvenience.

### 4. Poor Delivery Experience

Both drivers and receivers experience uncertainty because there is no transparent way to track the delivery progress.

## Proposed Solution

Project Relay solves this problem by creating a real-time delivery tracking system where authorized users can view the driver's location, delivery status, and estimated arrival information through a mobile application.

---

# 3. **Users & Roles**

Project Relay has three primary user roles:

---

## 3.1 Sender

### Description

The sender is the person who gives a package to a driver and creates the delivery request.

### Goals

- Create a delivery record.
- Provide package and receiver information.
- Share delivery details with the receiver.
- Monitor delivery progress.

### Main Actions

- Register/Login.
- Create a new delivery.
- Enter receiver information.
- Enter package details.
- Assign or provide driver information.
- View delivery status.
- Receive delivery notifications.

---

## 3.2 Driver

### Description

The driver is the person transporting the package from the sender to the receiver.

### Goals

- Accept delivery requests.
- Share live location during transportation.
- Update delivery status.
- Complete deliveries safely.

### Main Actions

- Register/Login.
- View assigned deliveries.
- Accept a delivery.
- Start delivery trip.
- Share real-time GPS location.
- Update delivery progress.
- Confirm delivery completion.

---

## 3.3 Receiver

### Description

The receiver is the person waiting to receive the package.

### Goals

- Track package location.
- Know estimated arrival time.
- Prepare for package arrival.
- Confirm package reception.

### Main Actions

- Access delivery tracking.
- View driver's live location.
- View driver and vehicle information.
- Receive arrival notifications.
- Confirm package received.

---

## User Relationship

The delivery process connects all three users:

Sender

↓

Creates delivery

↓

Driver transports package

↓

Receiver tracks and receives package

---

# 4. Core User Flow

The main delivery process in Project Relay follows these steps:

---

## Step 1: Create Delivery

The sender creates a new delivery request.

Information provided:

- Package details.
- Receiver information.
- Destination.
- Driver information (if already available).

The system creates a unique delivery record.

---

## Step 2: Driver Receives Delivery

The driver receives the delivery request.

The driver can:

- Accept the delivery.
- Reject the delivery.

After accepting, the delivery status changes to: 

Accepted

---

## Step 3: Start Delivery Trip

When the driver starts moving:

- The driver activates location sharing.
- GPS tracking begins.
- The system starts collecting location updates.

Delivery status changes to:

In Transit

---

## Step 4: Receiver Tracks Delivery

The receiver can view:

- Driver's current location.
- Vehicle information.
- Delivery status.
- Estimated arrival time.

The receiver no longer needs to call the driver repeatedly.

---

## Step 5: Delivery Completion

When the driver reaches the destination:

- Driver marks delivery as completed.
- Receiver confirms receiving the package.

Delivery status changes to:

Completed

---

# Delivery Status Flow

Created

↓

Accepted

↓

In Transit

↓

Arrived

↓

Completedss

---

# 5. MVP Features

The first version of Project Relay focuses on solving the main problem: allowing receivers to track deliveries without repeatedly contacting drivers.

---

# 5.1 User Authentication

Users can create accounts and access the system securely.

Features:

- Phone number registration/login.
- User profile creation.
- Role selection:
  - Sender.
  - Driver.
  - Receiver.

---

# 5.2 Delivery Creation

Senders can create delivery requests.

Information required:

- Package description.
- Receiver information.
- Destination.
- Driver information.

---

# 5.3 Driver Delivery Management

Drivers can manage assigned deliveries.

Features:

- View delivery requests.
- Accept or reject deliveries.
- Start delivery trip.
- End delivery trip.

---

# 5.4 Real-Time Location Tracking

The core feature of Project Relay.

Features:

- Driver GPS location sharing.
- Receiver live map view.
- Real-time location updates.
- Delivery route visibility.

---

# 5.5 Delivery Status Updates

Users can see the current delivery state.

Statuses:

- Created.
- Accepted.
- In Transit.
- Arrived.
- Completed.

---

# 5.6 Notifications

Users receive important delivery updates.

Examples:

- Driver accepted delivery.
- Driver started trip.
- Driver is approaching.
- Delivery completed.

---

# MVP Success Criteria

The MVP is successful if:

A receiver can open the application and know:

- Who has their package.
- Where the driver currently is.
- When the package will arrive.

Without needing to call the driver.

---

# 6. Non-Functional Requirements

Non-functional requirements define the quality standards that Project Relay should maintain.

---

## 6.1 Performance

The application should:

- Load screens quickly.
- Update driver location with minimal delay.
- Handle multiple users tracking deliveries simultaneously.

---

## 6.2 Reliability

The system should:

- Continue working during normal network interruptions.
- Avoid losing delivery information.
- Maintain accurate delivery status.

---

## 6.3 Security

The application should protect user information.

Requirements:

- Secure user authentication.
- Protect location data.
- Only authorized users can view delivery information.
- Prevent unauthorized access to user accounts.

---

## 6.4 Privacy

Location sharing should:

- Only happen during active deliveries.
- Require driver permission.
- Stop automatically when delivery is completed.

---

## 6.5 Usability

The application should be:

- Simple for non-technical users.
- Easy to navigate.
- Clear with delivery status and notifications.

---

## 6.6 Scalability

The system should be designed to support future growth, including:

- More users.
- More drivers.
- More deliveries.
- Additional delivery features.

---

# 7. Future Roadmap

The following features are outside the MVP but are planned for future releases.

---

## Version 2

- Delivery history.
- Driver ratings and reviews.
- Multiple package management.
- Delivery search.
- Improved notifications.

---

## Version 3

- Online payments.
- Digital delivery confirmation.
- QR code package pickup.
- Driver earnings dashboard.
- Business accounts.

---

## Version 4

- AI estimated arrival prediction.
- Route optimization.
- Fleet management.
- Company dashboards.
- Analytics and reports.

---

# Long-Term Vision

Project Relay aims to become a trusted delivery coordination platform that connects senders, drivers, and receivers through transparent, real-time package tracking.

The long-term goal is to reduce communication barriers, improve delivery efficiency, and create a better delivery experience for everyone involved.

---

# Document Information

Version: 1.0

Status: Draft

Prepared By:

Abenezer Girma

Project:

Project Relay