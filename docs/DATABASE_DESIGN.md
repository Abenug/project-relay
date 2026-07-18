# Project Relay

# Database Design

Version: 1.0

---

# 1. Database Overview

Project Relay uses a relational database to manage:

- Users
- Driver profiles
- Trips
- Packages
- Live location tracking
- Notifications
- Feedback

The database is designed around the real-world process:

A driver creates a trip because they are already traveling.

Senders attach packages to matching trips.

Receivers track their own packages.

---

# 2. Database Technology

Recommended:

PostgreSQL

Reasons:

- Strong relational structure
- Reliable data integrity
- Supports complex relationships
- Good support for location-based applications
- Open source

---

# 3. Entity Relationship Overview

```
                 USER

                  |

        ---------------------

        |                   |

 DRIVER_PROFILE        PACKAGE


        |

        |

      TRIP

        |

        |

     PACKAGE


        |

        |

 LOCATION_HISTORY

```

---

# 4. Database Tables

---

# Users Table

Stores all application users.

A single account can have multiple roles.

Example:

A person can be:

- Sender today
- Receiver tomorrow
- Driver in the future


## users

| Column | Type | Description |
|-|-|-|
| id | UUID | Primary key |
| full_name | VARCHAR | User name |
| phone_number | VARCHAR | Phone number |
| email | VARCHAR | Optional email |
| password_hash | VARCHAR | Encrypted password |
| profile_image | TEXT | Profile photo |
| created_at | TIMESTAMP | Account creation date |


---

# User Roles Table

Stores user capabilities.

One user can have multiple roles.


## user_roles

| Column | Type | Description |
|-|-|-|
| id | UUID | Primary key |
| user_id | UUID | User reference |
| role | ENUM | sender, receiver, driver |


Relationship:

```
User

1 ---- many

User_Roles
```

---

# Driver Profile Table

Stores additional information when a user becomes a driver.


## driver_profiles

| Column | Type | Description |
|-|-|-|
| id | UUID | Primary key |
| user_id | UUID | Driver account |
| vehicle_type | VARCHAR | Bus, taxi, minibus |
| plate_number | VARCHAR | Vehicle plate |
| verified | BOOLEAN | Driver verification |
| created_at | TIMESTAMP | Registration date |


Relationship:

```
User

1 ---- 1

Driver Profile
```

---

# Trips Table

A trip represents an existing journey by a driver.


Example:

```
Driver:

Ahmed

Route:

Addis Ababa → Adama

Departure:

8:00 AM
```


## trips

| Column | Type | Description |
|-|-|-|
| id | UUID | Primary key |
| driver_id | UUID | Driver |
| starting_location | VARCHAR | Starting point |
| destination | VARCHAR | End point |
| departure_time | TIMESTAMP | Planned departure |
| status | ENUM | planned, active, completed |
| created_at | TIMESTAMP | Creation date |


Relationship:

```
Driver

1 ---- many

Trips
```

---

# Packages Table

Represents the actual item being transported.


## packages

| Column | Type | Description |
|-|-|-|
| id | UUID | Primary key |
| trip_id | UUID | Assigned trip |
| sender_id | UUID | Person sending |
| receiver_name | VARCHAR | Receiver name |
| receiver_phone | VARCHAR | Receiver phone |
| description | TEXT | Package description |
| status | ENUM | waiting, accepted, traveling, completed |
| created_at | TIMESTAMP | Creation date |


Relationship:

```
Trip

1 ---- many

Packages
```

---

# Package Acceptance Table

Stores driver decisions.

Because drivers can accept or reject packages.


## package_requests

| Column | Type | Description |
|-|-|-|
| id | UUID | Primary key |
| package_id | UUID | Package |
| driver_id | UUID | Driver |
| status | ENUM | pending, accepted, rejected |
| created_at | TIMESTAMP | Request date |


---

# Location History Table

Stores driver's movement.


## location_history

| Column | Type | Description |
|-|-|-|
| id | UUID | Primary key |
| trip_id | UUID | Active trip |
| latitude | DECIMAL | GPS latitude |
| longitude | DECIMAL | GPS longitude |
| timestamp | TIMESTAMP | Location time |


Used for:

- Live tracking
- Route progress
- ETA calculation

---

# Notifications Table

Stores messages between system and users.


## notifications

| Column | Type | Description |
|-|-|-|
| id | UUID | Primary key |
| user_id | UUID | Receiver |
| title | VARCHAR | Notification title |
| message | TEXT | Content |
| read_status | BOOLEAN | Seen or not |
| created_at | TIMESTAMP | Date |

---

# Feedback Table

Stores experience after package completion.


## feedback

| Column | Type | Description |
|-|-|-|
| id | UUID | Primary key |
| package_id | UUID | Package |
| user_id | UUID | Reviewer |
| rating | INTEGER | 1-5 |
| comment | TEXT | Feedback |
| created_at | TIMESTAMP | Date |

---

# 5. Important Relationships


```
USER
 |
 |
 |---- DRIVER_PROFILE
 |
 |
 |---- PACKAGES


DRIVER_PROFILE
 |
 |
 |---- TRIPS


TRIP
 |
 |
 |---- PACKAGES


TRIP
 |
 |
 |---- LOCATION_HISTORY


PACKAGE
 |
 |
 |---- FEEDBACK

```

---

# 6. Database Rules

## Rule 1

A package must belong to one trip.

---

## Rule 2

A trip can contain multiple packages.

---

## Rule 3

A driver can only create trips using their registered driver profile.

---

## Rule 4

A receiver does not create deliveries.

They only track packages assigned to them.

---

## Rule 5

A user account can have multiple roles.

---

# 7. Future Database Improvements

Possible additions:

- Payment records
- Driver ratings
- Saved routes
- Favorite drivers
- Business accounts
- Package images
- Delivery history analytics


---

# Final Database Principle

Project Relay manages transportation trips and package relationships.

It does not manage delivery workers or delivery routes.

Drivers provide transportation.

The system provides trust and visibility.