# Project Relay

# API Design

Version: 1.0

---

# 1. API Overview

The Project Relay API is the communication layer between:

- Flutter mobile application
- Backend server
- Database

The API allows users to:

- Create accounts
- Manage profiles
- Become drivers
- Create trips
- Send packages
- Track packages
- Receive notifications

---

# 2. API Architecture

```
Flutter Mobile App

        |

        |

      REST API

        |

        |

 Backend Server

        |

        |

 PostgreSQL Database

```

---

# 3. API Base URL

Example:

```
https://api.projectrelay.com
```

All API requests start with:

```
/api/v1
```

Example:

```
https://api.projectrelay.com/api/v1/users
```

---

# 4. Authentication

Project Relay uses token-based authentication.

After login:

```
User Login

↓

Backend verifies account

↓

Server creates authentication token

↓

Mobile app stores token

↓

Token used for future requests

```

---

# 5. User APIs

---

## Register User

Creates a new account.

### Request

```
POST /api/v1/users/register
```

Body:

```json
{
 "full_name":"Abebe Kebede",
 "phone_number":"0912345678",
 "password":"password123"
}
```

Response:

```json
{
 "message":"Account created successfully",
 "user_id":"123"
}
```

---

## Login User

### Request

```
POST /api/v1/users/login
```

Body:

```json
{
 "phone_number":"0912345678",
 "password":"password123"
}
```

Response:

```json
{
 "token":"xxxxx",
 "user":{
    "name":"Abebe"
 }
}
```

---

## Get Profile

### Request

```
GET /api/v1/users/profile
```

Response:

```json
{
"name":"Abebe",
"profile_image":"image_url",
"roles":[
"sender",
"receiver"
]
}
```

---

# 6. Driver APIs

---

## Become a Driver

A normal user can register as a driver.

### Request

```
POST /api/v1/drivers/register
```

Body:

```json
{
"vehicle_type":"Minibus",
"plate_number":"AA-12345"
}
```

Response:

```json
{
"message":"Driver profile created"
}
```

---

## Create Trip

A driver creates a trip based on their existing journey.

Example:

```
Addis Ababa → Adama
```

### Request

```
POST /api/v1/trips
```

Body:

```json
{
"starting_location":"Addis Ababa",
"destination":"Adama",
"departure_time":"2026-08-01 08:00"
}
```

Response:

```json
{
"trip_id":"001",
"status":"planned"
}
```

---

## View Driver Trips

### Request

```
GET /api/v1/drivers/trips
```

Response:

```json
[
{
"route":"Addis Ababa → Adama",
"packages":3,
"status":"active"
}
]
```

---

# 7. Package APIs

---

## Create Package Request

A sender creates a package request.

### Request

```
POST /api/v1/packages
```

Body:

```json
{
"description":"Black backpack",
"receiver_name":"Hana",
"receiver_phone":"0912345678",
"destination":"Adama"
}
```

Response:

```json
{
"package_id":"456",
"status":"waiting"
}
```

---

## View My Packages

### Request

```
GET /api/v1/packages
```

Response:

```json
[
{
"description":"Black backpack",
"destination":"Adama",
"status":"Traveling"
}
]
```

---

## Accept Package

Driver accepts a package that matches their trip.

### Request

```
PUT /api/v1/packages/{id}/accept
```

Response:

```json
{
"message":"Package accepted"
}
```

---

## Reject Package

### Request

```
PUT /api/v1/packages/{id}/reject
```

Response:

```json
{
"message":"Package rejected"
}
```

---

# 8. Tracking APIs

---

## Send Driver Location

The driver's phone sends GPS updates.

### Request

```
POST /api/v1/location
```

Body:

```json
{
"trip_id":"001",
"latitude":9.0300,
"longitude":38.7400
}
```

---

## Get Package Location

Receiver tracks their package.

### Request

```
GET /api/v1/packages/{id}/location
```

Response:

```json
{
"current_location":"Debre Zeit",
"estimated_time":"40 minutes"
}
```

---

# 9. Notification APIs

---

## Send Receiver SMS

Triggered when driver accepts package.

Example message:

```
Hello Hana,

Driver Ahmed received your package.

Track your package here:

(link)

```

---

## App Notifications

### Request

```
GET /api/v1/notifications
```

Response:

```json
[
{
"title":"Package accepted",
"message":"Your package is traveling"
}
]
```

---

# 10. Feedback APIs

---

## Submit Feedback

After package completion.

### Request

```
POST /api/v1/feedback
```

Body:

```json
{
"package_id":"123",
"rating":5,
"comment":"Fast and reliable"
}
```

---

# 11. API Security Rules

The API must:

- Authenticate users
- Protect private information
- Validate requests
- Prevent unauthorized access
- Encrypt passwords
- Restrict driver actions

---

# 12. Future API Improvements

Possible additions:

- Payment API
- Route recommendation API
- Driver rating API
- Business accounts API
- Package image upload API

---

# Final API Principle

The Project Relay API connects people who already participate in transportation.

It does not create a delivery workforce.

It creates trust, visibility, and communication around existing public transport trips.