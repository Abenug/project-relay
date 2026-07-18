# Project Relay

# System Architecture

Version: 1.0

---

# 1. System Overview

Project Relay is a package relay platform built on top of existing public transportation routes.

The system does not operate as a delivery company.

Instead:

- Drivers create trips based on journeys they already plan to make.
- Senders register packages that need transportation.
- Drivers accept packages matching their route.
- Receivers track their packages in real time.

The system provides visibility, communication, and trust between users.

---

# 2. High-Level Architecture


```
                Flutter Mobile App

                       |

                       |

                Backend Server

                       |

        --------------------------------

        |                              |

    Database                 Real-Time Service

        |                              |

        |                              |

     User Data                  Live Location


                       |

              External Services

        --------------------------------

        |                              |

    Maps Service                 SMS Service

```

---

# 3. Technology Stack

## Mobile Application

Technology:

Flutter + Dart

---

Responsibilities:

- User authentication
- Profile management
- Package management
- Trip management
- Driver dashboard
- GPS location sharing
- Package tracking
- Notifications

---

# Backend Server

Technology:

Node.js + Express

---

Responsibilities:

- Authentication
- User management
- Trip management
- Package management
- Permission handling
- Real-time communication
- Notification management

---

# Database

Technology:

PostgreSQL

---

The database stores:

- Users
- Driver profiles
- Trips
- Packages
- Location history
- Feedback
- Notifications

---

# Real-Time Communication

Technology:

Socket.IO

---

Purpose:

Provide live communication between driver and receivers.

Example:

```
Driver Location Changes

↓

Mobile App sends GPS update

↓

Backend receives location

↓

Socket.IO broadcasts update

↓

Receiver sees new location
```

---

# 4. Core System Entities

---

# User

A person using the application.

A user can have multiple capabilities:

- Sender
- Receiver
- Driver

A single account supports all roles.

---

# Driver Profile

Additional information for users who operate public transport vehicles.

Contains:

- Driver information
- Vehicle information
- Plate number

---

# Trip

Represents a driver's existing journey.

Example:

```
Trip:

Driver:
Ahmed

Route:

Addis Ababa → Adama

Departure:

10:30 AM

Status:

On The Way
```

A trip can contain multiple packages.

---

# Package

Represents one item being transported.

Example:

```
Package:

Description:
Black backpack

Sender:
Abebe

Receiver:
Hana

Destination:
Adama

Trip:
Trip-001

Status:
On The Way
```

A package belongs to one trip.

---

# Location Record

Stores driver movement information.

Contains:

- Driver location
- Time
- Trip reference

Used for:

- Live tracking
- Route progress
- ETA calculation

---

# 5. Entity Relationship Overview

```
                 User

                  |

        ---------------------

        |                   |

 Driver Profile          Packages


        |

        |

      Trips

        |

        |

   ----------------

   |       |        |

Package Package Package

```

---

# 6. Package Journey Flow


Sender creates package

↓

Package waits for matching trip

↓

Driver accepts package

↓

Receiver receives SMS

↓

Trip starts

↓

Driver location updates

↓

Receiver tracks package

↓

Package arrives

↓

Receiver confirms receiving

---

# 7. Trip Journey Flow


Driver creates trip

↓

Defines:

- Starting location
- Destination
- Departure time

↓

Matching packages appear

↓

Driver accepts packages

↓

Trip becomes active

↓

Location sharing begins

↓

Trip reaches destination

↓

Packages completed

---

# 8. Automatic Tracking Logic

The system should minimize driver interaction.

Flow:

```
Driver accepts packages

↓

Receiver notification sent

↓

System prepares tracking

↓

GPS detects movement

↓

Trip status changes:

On The Way

↓

Live location sharing begins
```

The driver should not need to remember unnecessary actions.

---

# 9. External Services

## Maps Service

Used for:

- Displaying driver location
- Showing route
- Calculating estimated arrival time


---

## SMS Service

Used for:

- Receiver notifications
- Sending tracking links

Example:

"Hello, I am driver Ahmed.
I received your package.

Track your package here:
(link)"

---

## Push Notification Service

Used for:

- Package updates
- Trip updates
- Status changes

---

# 10. MVP Platform Strategy

Initial platform:

Android first

---

Reason:

- Android has wider adoption among target users.
- Public transport drivers are more likely to use Android devices.
- Reduces initial development complexity.

Flutter architecture allows future iOS expansion.

---

# 11. Future Improvements

Possible future features:

- Driver reputation system
- Digital payments
- Route recommendations
- Multiple transport types
- Business accounts
- Package history analytics

---

# Final Architecture Principle

Project Relay does not create a new delivery network.

It creates a digital layer that makes existing public transportation package exchange safer, clearer, and more reliable.