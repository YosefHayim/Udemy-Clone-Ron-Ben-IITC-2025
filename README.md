**Bugs / Missing Designs / Logic to Add**

---

## General:

1. Clicking on the Udemy Business text should navigate to the form of "Get your demo".

---

## SearchInput Component:

1. Longer input field.
2. When focused, change color to purple.
3. When hovering on course results, they should have a gray background.
4. Add a little extra spacing below the input field compared to the original.

---

## CourseHoverCardInfo Component:

1. Fade-in effect when hovering.
2. Gray border.
3. A rectangle at the bottom or top (based on index if higher than 0).
4. Heart icon positioned to the right.
5. Hovering activates a 0.95 opacity on the div course that is being hovered.

---

## Search Page:

### Pagination Buttons:

1. Hover color should be the same.
2. Horizontal line should be bolder and more spaced.

### Main Search Results:

1. Course results should be aligned with their respective prices.
2. Prices should have a loading effect (0.3 sec).
3. Clicking the filter closes the sidebar with a fade-in effect to the left.

### Related Searches Section:

1. When hovering, it should appear on the right side and display immediately.

### Filter Bar:

1. Checkboxes should have a slightly more defined border.
2. Ratings stars should be orange.
3. Radio buttons should be black.
4. Stars should support half-star ratings.
5. Change "Topics" filter name to "Topic".
6. When opening a specific filter tab, it should display "Show more" with a low-opacity effect at the bottom.

### Hot & Fresh Courses Algorithm Rendering:

1. Courses should be relevant to the topic.
2. Add navigation buttons when at max left or right of the carousel.

---

## Show More Button:

1. Hover background should be purple.
2. Adjust padding, px, and py with bold text.
3. Include an arrow (up/down) based on click action.

---

## Navbar:

1. Reduce spacing between components when not logged in.
2. Modify "Explore" to include padding and a purple hover effect.
3. Ensure components maintain a single-line text layout.
4. Make the hover effect on the heart icon consistent.
5. When logged in, hovering over "My Learning" should show the progress of each course.
6. User profile name should show both first and last initials (e.g., "YS" instead of "Y").
7. Enable hover effects on the notification component.

---

## Login Page:

1. If a Google token exists in localStorage, render the login component differently.

---

## Welcome Page:

1. Increase the size of the profile picture.
2. Modify the search input styling to differentiate it from the main search.
3. Change "Explore" text to "Categories".

---

## Adding to Cart:

1. Offer "Frequently Bought Together" (FBT) suggestions for two more courses from the same instructor.
2. Add a "Related Topics" component.

---

## Cart Page:

1. Add a "You might also like" section displaying courses from the same instructor.
2. Fix the design of the "Promotions" component to match the intended style.
3. If a coupon code does not exist, display an error message below the input field.

---

## My Learning Page:

1. Courses in "My Learning" should have a play button or additional options.
2. If a course has not been started, initialize course progress below with text.
3. Add a certifications component with a new route: `home/my-courses/certifications/`.
4. Change the main route to `home/my-courses/learning/`.
5. Update the URL when selecting different categories.
6. Add a loading effect to each section.

---

## Checkout Page:

1. Store the last selected radio payment option in localStorage and load it via Redux.
2. Integrate PayPal API with a button.
3. Allow users to add cards to their personal info.
4. Provide an option to purchase via Google Pay.
5. Reduce the size of the lock icon in regular credit card payments.
6. Show encryption text when hovering over the lock icon.
7. Cancel button should have a purple hover effect.
8. "Terms of Use" text should have a pointer cursor and navigate to the terms page.
9. Add more payment method icons (Visa, MasterCard, AMEX, JCB, Diners Club).

---

## View Notifications Page:

1. Create a new route: `/user/view-notifications/`.
2. Design and implement WebSocket integration.

---

## My Learning Page - Schedule Learning Time Component:

1. Add a "Schedule Learning Time" component.
2. Clicking "Dismiss" should remove the component.
3. Clicking "Get Started" should open a dialog.
4. In step 2 of 3, if no frequency is selected, display an error message.
5. In step 2 of 3, selecting a frequency should allow choosing one or all days.
6. Provide an optional "Add to Calendar" feature for Google, Apple, and Outlook calendars.
