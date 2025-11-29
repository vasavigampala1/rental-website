# Rental Website 🏠

A full-stack rental web application / booking platform — built with Node.js, Express, MongoDB, Passport.js authentication, and RESTful API endpoints — inspired by Airbnb.  

This project demonstrates user login/signup, listing creation, bookings, server-side validation, route protection, and MVC architecture.

---

## 📌 Table of Contents

 User authentication & authorization (signup, login, logout) via Passport.js  
- ✅ Session & cookie-based login persistence  
- ✅ CRUD operations for property listings (create, view, edit, delete)  
- ✅ Booking functionality (book a property)  
- ✅ RESTful APIs for listings, users, bookings  
- ✅ Server-side data validation (using validation middleware)  
- ✅ MVC architecture (Models, Views, Controllers, Routes)  
- ✅ Modular routing (separate route files) & middleware (auth check, validation, error handling)  
- ✅ Views rendered via EJS templates (or frontend + backend separation)  
- ✅ Error handling and custom error responses


## 🛠️ Tech Stack

| Layer / Tool | Purpose |
|--------------|---------|
| Node.js & Express | Backend server & routing |
| MongoDB & Mongoose | Database & schema modelling |
| Passport.js + express-session | Authentication (login/signup), session management |
| EJS (or preferred templating) / Frontend | Rendering views / frontend UI |
| RESTful API design | Handling HTTP requests (GET, POST, PUT, DELETE) |
| Joi / Custom Middleware (validateListing, validateReview) | Server-side data validation |
| MVC architecture | Clean separation of concerns (models, controllers, routes, views) |


## 📁 Project Structure


/controllers → request handling & business logic
/init → initialization (e.g. DB connection, configs)
/models → Mongoose schemas for Users, Listings, Bookings, etc.
/routes → Express routers for auth, listings, bookings, reviews, etc.
/views → EJS (or frontend) templates / UI files
/public → Static assets (CSS, JS, images)
/utils → Utility functions, error classes, middleware (validation, auth)
app.js → Main Express app configuration & middleware setup
middleware.js → Custom middleware (validation, auth check, error handling)
schema.js → Joi (or validation) schemas for request data validation
.gitignore, package.json, ...
