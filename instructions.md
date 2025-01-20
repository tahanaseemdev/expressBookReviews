## Final Project - Book Review Application

### Set-up: Create Application

1. Open a terminal and navigate to the router directory that contains the following three files:

    - **booksdb.js**: This file contains the preloaded book information for the application.
    - **general.js**: This file contains the skeletal implementations for the routes accessible by general users.
    - **auth_users.js**: This file contains the skeletal implementations for the routes accessible by authorized users.

---

### Project Steps

1. **Set-up: Create Application**
   - Run `npm install` to install the required modules and start the server.
   - Test the server output.

2. **Understanding the Server Application**

3. **Understanding the User Routes**

4. **Updating the Code for the Authentication Mechanism**
   - Navigate to `index.js` and update the authentication code under:
     ```javascript
     app.use("/customer/auth/*", function auth(req, res, next) {
     ```
   - **Hint**: Use the session authorization feature (implemented in the Practice Project Lab) to authenticate a user based on the access token.

5. **Update and Test the General User Routes in `general.js`**

6. **Update and Test the Authenticated User Routes in `auth_users.js`**

7. **Improving the Scope of Tasks 1-4 Using Promises or Async-Await**

8. **GitHub Repo Updates for Peer Review Submission**
   - Commit and push changes to your forked repository after each task or before ending a session.
   - Refer to Task 14 for steps to push changes to GitHub.

---

### Task Instructions

#### Task 1: Get List of Books
- Complete the code in:
  ```javascript
  public_users.get('/', function (req, res) {
  ```
- **Hint**: Use `JSON.stringify` to display the output neatly.
- Test the output in Postman and save a screenshot as `1-getallbooks.png`.

#### Task 2: Get Book Details by ISBN
- Complete the code in:
  ```javascript
  public_users.get('/isbn/:isbn', function (req, res) {
  ```
- **Hint**: Retrieve the ISBN from the request parameters.
- Test the output in Postman and save a screenshot as `2-gedetailsISBN.png`.

#### Task 3: Get Book Details by Author
- Complete the code in:
  ```javascript
  public_users.get('/author/:author', function (req, res) {
  ```
- **Hints**:
  1. Obtain all the keys for the `books` object.
  2. Iterate through the `books` array and check if the author matches the request parameters.
- Test the output in Postman and save a screenshot as `3-getbooksbyauthor.png`.

#### Task 4: Get Book Details by Title
- Complete the code in:
  ```javascript
  public_users.get('/title/:title', function (req, res) {
  ```
- **Hint**: Similar to Task 3.
- Test the output in Postman and save a screenshot as `4-getbooksbytitle.png`.

#### Task 5: Get Book Reviews
- Complete the code in:
  ```javascript
  public_users.get('/review/:isbn', function (req, res) {
  ```
- **Hint**: Retrieve reviews based on the ISBN from the request parameters.
- Save a screenshot as `5-getbookreview.png`.

#### Task 6: Register a New User
- Complete the code for user registration.
  - Validate `username` and `password` in the request body.
  - Return an error if the username already exists or if the inputs are missing.
- Test the output in Postman and save a screenshot as `6-register.png`.

#### Task 7: Login as a Registered User
- Complete the login functionality.
  - Validate the `username` and `password` and save user credentials in the session using JWT.
  - Endpoint for testing: `customer/login`.
- Save a screenshot as `7-login.png`.

#### Task 8: Add or Modify a Book Review
- Add functionality to post or update reviews.
  - Use the session `username` to identify the reviewer.
  - Modify the review if the same user posts again for the same ISBN.
- Save a screenshot as `8-reviewadded.png`.

#### Task 9: Delete a Book Review
- Add functionality to delete reviews.
  - Ensure users can only delete their own reviews.
- Save a screenshot as `9-deletereview.png`.

---

### Improving Tasks Using Promises or Async-Await

#### Task 10: List of Books
- Refactor Task 1 using Promises or Async-Await.
- Save a screenshot as `task10.png`.

#### Task 11: Book Details by ISBN
- Refactor Task 2 using Promises or Async-Await.
- Save a screenshot as `task11.png`.

#### Task 12: Book Details by Author
- Refactor Task 3 using Promises or Async-Await.
- Save a screenshot as `task12.png`.

#### Task 13: Book Details by Title
- Refactor Task 4 using Promises or Async-Await.
- Save a screenshot as `task13.png`.

---

### Task 14: Push to GitHub
- Commit and push all changes to your forked GitHub repository.
  - Refer to the lab documentation if assistance is needed.
- Submit the GitHub repo link for peer review.

---

### Summary
In this lab, you:
- Built a server-side book review application.
- Implemented authentication with JWT and session-level security.
- Tested APIs using Promises and Async-Await.

**Author(s):**
- Lavanya T S
- Sapthashree K S
- K Sundararajan

**© IBM Corporation. All rights reserved.**
