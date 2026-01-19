# 🔐 Express Password Middleware

![Badge License](https://img.shields.io/badge/license-MIT-green)
![Badge JS](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Badge Node](https://img.shields.io/badge/Node.js-v20+-green)
![Badge Express](https://img.shields.io/badge/Express.js-4.x-blue)
![Badge Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white)

> **Study Project** 📚

## 👨‍💻 About the Project

This project was developed as part of my **Backend Development** study journey with Node.js.

The main goal here was not just to create a form, but to master the concept of **Express Middlewares**. The application acts as a "Gatekeeper", intercepting HTTP requests before they reach the final route, validating credentials, and controlling the data flow.

## 🎯 Learning Outcomes

With this project, I consolidated my knowledge in:

* **Middleware Pattern:** Deep understanding of how the `req` (request), `res` (response), and `next` (next step) cycle works in Express.
* **Request Body Parsing:** How to handle data sent via HTML forms (`x-www-form-urlencoded`) and transform it into usable JavaScript Objects on the Backend.
* **HTTP Status Codes:** The importance of returning correct codes (like `401 Unauthorized` vs `200 OK`) to maintain web semantics.
* **API Testing:** Used **Postman** to manually test routes, ensuring the middleware logic handles correct and incorrect passwords properly.

---

## ⚙️ How It Works (Code Logic)

The application features a protected route that can only be accessed if the `correctPassword` middleware allows it.

### The Validation Middleware
This is the core function that controls access. It checks the request body before deciding the user's destination:

```javascript
function correctPassword(req, res, next){
    console.log(req.body);
    thePassword = req.body.password; // Captures password from form

    if (thePassword === "ILoveProgramming"){
        console.log("Correct password")
        return next(); // ✅ Authorized: Passes to the next function
    } else {
        console.log("Incorrect Password");
        return res.status(401).send("<h1>Incorrect Password</h1>"); // ⛔ Denied
    }
}
```
## 🛠️ Technologies Used

* **JavaScript** (ES6 Modules)
* **Node.js**
* **Express.js**
* **HTML5**
* **Postman** (API Testing)
---
<div align="center"> 💻  Developed by <b><a href="https://github.com/daviandany" target="_blank">@daviandany</a> </b>. </div>