## Mileage Tracker

**Live Application**:

A web app for tracking vehicle mileage and fuel efficiency with GitHub OAuth. Users can add, edit, and delete mileage records that persist between sessions.

### Project Goals
- Track fuel purchases
- Calculate cost per gallon automatically

### Challenges Faced
- **OAuth Implementation**: Setting up GitHub authentication with Passport.js with the callback URLs and session management
- **Session Management**: Took some time to get the login and logout to work and to keep users logged in.

### Authentication Strategy
**GitHub OAuth** - Chosen because:
- No need to handle password storage/hashing
- Leverages existing GitHub accounts

### CSS Framework
**Bootstrap** - No Additional css has been used.

### Technical Achievements (+15 Points)
- Implemented GitHub OAuth using Passport.js strategy for secure user authentication (10 points)
- Get 100% in all four lighthouse tests required for this assignment. (5 points)

### Design/Evaluation Achievements (+10 points)
- **W3C Accessibility Implementation (10 points)**: Followed 12 tips from W3C Web Accessibility Initiative:

**Writing Tips:**
1. **Provide informative page titles**: Added descriptive titles "Mileage Tracker - Login" and "Mileage Tracker"
2. **Use headings to convey meaning**: Used proper h1, h2 hierarchy
3. **Make link text meaningful**: Added descriptive aria-labels "Login with your GitHub account to access Mileage Tracker"
4. **Write meaningful text alternatives**: Added comprehensive aria-labels for all interactive elements

**Design Tips:**
1. **Provide sufficient contrast**: Used high contrast colors
2. **Don't use color alone**: Buttons have both color and text labels, table uses alternating rows beyond color coding
3. **Ensure interactive elements are identifiable**: All buttons and links have clear visual styling and hover states
4. **Provide clear and consistent navigation**: Navigation bar with consistent logout button

**Development Tips:**
1. **Associate labels with form controls**: Used proper label elements with for attributes and aria-describedby for help text
2. **Include alternative text for images**: No images used, but all interactive elements have text alternatives via aria-labels
3. **Identify page language**: Set lang="en" on html element for both pages
4. **Use markup to convey meaning**: Used semantic HTML (nav, main, table with proper scope attributes, form structure)

### How to Use
1. Visit the application URL
2. Click "Login with GitHub" 
3. Authorize the application via GitHub
4. Add mileage records using the form
5. View, edit, or delete existing records
6. Use logout button to end session

**Note: Claude was used to rewrite and organize this README.**