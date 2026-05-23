/**
 * Google Form connection for the site newsletter signup.
 *
 * Setup (one time):
 * 1. Create a Google Form with one "Short answer" question: "Email address".
 * 2. Open the form → Send → link icon → copy the form URL.
 * 3. From the URL, copy the form ID (between /d/e/ and /viewform), e.g.
 *    https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform  →  1FAIpQLSc...
 * 4. Set formAction below to:
 *    https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
 * 5. Find the email field entry id:
 *    - Open the live form in Chrome → right-click the email field → Inspect
 *    - Look for name="entry.123456789" on the input → use that as emailEntry
 *    Or: Responses → ⋮ → Get prefill link → add a test email → the URL contains entry.XXXX=
 * 6. Link the form to a Google Sheet (Responses tab) to export subscribers.
 */
window.JANNOVA_NEWSLETTER = {
  formAction: "https://docs.google.com/forms/d/e/1FAIpQLScZNc6OSTKpDzhTaok7u3Fx7ywgHlWohiqcQg2v2jfaYkri8g/formResponse",
  emailEntry: "entry.1691793274",
};
