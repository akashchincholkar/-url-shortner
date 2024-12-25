# *Features*

1.**Database Integration**:

A MongoDB database is used to store:
The original (long) URLs.
The shortened URLs.
An array of timestamps (visit history) for each shortened URL, indicating when it was accessed.
API Routes:



2.**The project includes four main routes**:

POST Route: Accepts an original URL from the client, generates a shortened URL, and stores it in the database.
Dynamic GET Route for Redirection: Redirects users from the shortened URL to the original URL.
Dynamic GET Route for Analytics: Retrieves analytics such as the number of clicks and visit timestamps for a given shortened URL.
Additional GET Route: Fetches all data from the database (for debugging or administrative purposes).

# request body


{
   "ogLink": "https://www.example.com"
}


# response body

{
   "id": "2xv5e"
}


# 2. GET /url/:shortID

**Description**: Redirects to the original URL associated with the shortID.
**Example**: Accessing http://localhost:8561/url/shortID redirects to https://www.example.com.


# 3. GET /url/:shortID/analytics

**Description**: Provides analytics for a specific shortID, including the number of clicks and timestamps.

# 4. GET /url

**Description**: Retrieves all data from the database (for debugging or administrative purposes).

# Technologies Used

**Backend**: Node.js, Express.js
**Database**: MongoDB
**Libraries**: shortid


# author
**Developed by** Akash Chincholkar
