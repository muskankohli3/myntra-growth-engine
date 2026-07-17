# API Contract
Version: 1.0
Status: Frozen

This document defines the shared API contract between the Customer and Seller modules.

Unless there is a compelling technical reason, these contracts must not change.

---

# Base URL

/api

---

# Standard Response

Success

{
  "success": true,
  "data": ...
}

Error

{
  "success": false,
  "message": "Error message"
}

---

# Product APIs

GET /products

Description

Returns all products.

Response

Product[]

---

GET /products/:id

Description

Returns a single product.

Response

Product

---

GET /products/seller/:sellerId

Description

Returns products belonging to one seller.

Response

Product[]

---

# Live Session APIs

GET /live-sessions

Description

Returns all live sessions.

Supports filtering by status.

Query

status=LIVE

Example

GET /live-sessions?status=LIVE

Response

LiveSession[]

---

GET /live-sessions/:id

Response

LiveSession

---

POST /live-sessions

Creates a live session.

Request

{
  sellerId,
  title,
  category,
  language,
  videoUrl,
  products
}

Response

LiveSession

---

PATCH /live-sessions/:id/status

Body

{
    status
}

Status

SCHEDULED
LIVE
ENDED

---

PATCH /live-sessions/:id/pin-product

Body

{
    productId
}

Response

Updated LiveSession

---

# Comment APIs

GET /comments/:liveSessionId

Returns comments for a live session.

Response

Comment[]

---

POST /comments

Body

{
    liveSessionId,
    userId,
    username,
    avatar,
    message
}

Response

Comment

---

# Order APIs

POST /orders

Creates a new order.

Request

{
    customerId,
    productId,
    sellerId,
    quantity,
    purchasedDuringLive,
    liveSessionId
}

Response

Order

---

GET /orders/:customerId

Returns customer orders.

Response

Order[]

---

GET /orders/order/:id

Returns one order.

Response

Order

---

# Opportunity APIs

GET /opportunities/:sellerId

Returns AI opportunities.

Response

Opportunity[]

---

POST /opportunities/generate

Generates opportunities.

Body

{
    sellerId
}

Response

Opportunity[]

---

# Analytics APIs

GET /analytics/:sellerId

Response

{
    totalRevenue,
    totalOrders,
    totalLiveSessions,
    totalViewers,
    conversionRate,
    topProducts,
    liveHistory
}

---

# AI APIs

POST /ai/prep

Body

{
    productId
}

Returns

{
    talkingPoints,
    hooks,
    faqs,
    cta
}

---

POST /ai/translate

Body

{
    text,
    targetLanguage
}

Returns

{
    translatedText
}

---

POST /ai/recommendations

Body

{
    customerId,
    liveSessionId
}

Returns

Product[]

---

# Shared Models

Product
Seller
LiveSession
Comment
Order
Opportunity

These interfaces are frozen and shared between both developers.

No field should be renamed or removed without agreement from both developers.

---

# Ownership

Customer APIs

- Orders
- Live Sessions
- Customer Flow
- Customer AI

Owner

Himmat

---

Seller APIs

- Opportunities
- Analytics
- Seller Flow
- Seller AI

Owner

Muskan

---

Shared

- Product model
- Seller model
- Comment model
- Authentication
- API contracts
- Integration testing
- Final polish