## Bugs to fix:

### General Logic Fixes

- **Verify Code**: If an error is shown during verification, stop the loading button.✅
- **Join by Course ID (API)**: On the server side, wait until all course IDs are checked before proceeding for a specific user.
- **Go to Course**: Ensure course is initialized before reaching the payment stage.
- **If Navigated Course View Is Undefined**: Handle gracefully with a return fallback.

---

### Homepage

- **After Login**: Fix the "What to learn next" carousel display.
- **Homepage Carousel**: Reduce auto-scroll interval to **3 seconds**.
- **"Learners Are Viewing" Carousel**: Fix button interaction.

---

### Navbar

- **"Udemy Business" Button**: Link it to the correct Udemy Business page.
- **"My Learning" Button**: Redirect to **Wishlist** (if that's intended).
- **Cart Hover**: Fix design.
- **Search Input Bug**: After direct search > course click > search again = input should reset.
- **Search Dropdown**: Ensure clicking a dropdown suggestion triggers a proper search.
- **Fix Button Hover**: Make navbar buttons (e.g., notifications) respect absolute positioning.

---

### Search Page

- **Pagination**: After clicking a page number, scroll to top.
- **Hot & Fresh Carousel**: Fix loading issue when clicking the right arrow.
- **Navigation Handling**: If navigating away from search, reset `filterData`.
- **Total Pages**: Update when filters are applied.
- **Language Filter**: Add filter functionality.

---

### Course View Page

- **Button Spacing**: Add space between the 3 main action buttons.

---

### Shopping Cart

- **Save for Later**: Implement logic and integrate with **Wishlist**.

---

### My Learning Page

- **Design Overhaul**: Fix layout and implement full logic.

---

### Public Profile Page

- **Navigation**: Ensure user is routed based on `userId`.

---

Let me know if you want this broken into Jira-style tickets or Trello card templates.
