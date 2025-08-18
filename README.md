# Thuth Gate Learning Center

A responsive multi-page website frontend for a high school learning center in Egypt, featuring an Ancient Egyptian/Pharaonic inspired design with modern educational UI.

##  Features

### Design & Theme
- **Ancient Egyptian/Pharaonic inspired design** with modern educational interface
- **Color palette**: Deep gold (#d4af37), sandstone beige (#f5deb3), blue (#243a6b), and black
- **Decorative hieroglyph-style borders** and accents
- **Google Fonts**: Cinzel Decorative for headings, Cinzel for body text
- **Responsive design** for mobile, tablet, and desktop

### Pages

1. **Login Page** (`index.html`)
   - Centered login form with email and password fields
   - Ancient papyrus texture background
   - Gold-accented login button
   - Simulated authentication (ready for backend integration)

2. **Home Page** (`home.html`)
   - Header with "Thuth Gate" logo styled like ancient inscriptions
   - Navigation bar with smooth scrolling
   - Hero section with call-to-action buttons
   - Course cards (Math, Science, Languages, History)
   - Teacher profiles with experience details
   - Footer with social media icons

3. **Profile Page** (`profile.html`)
   - Student profile information display
   - Enrolled courses with progress tracking
   - Academic statistics (GPA, courses taken, certificates, attendance)
   - Profile editing functionality (name, email, profile picture)
   - Logout functionality

4. **Courses Page** (`courses.html`)
   - List of all available courses with descriptions
   - Filter and search functionality
   - Enrollment options

5. **Teachers Page** (`teachers.html`)
   - Detailed teacher profiles
   - Subjects taught and experience
   - Contact and feedback options

6. **About Page** (`about.html`)
   - Information about Thuth Gate Learning Center
   - Mission, vision, and history
   - Location and contact details

7. **Contact Page** (`contact.html`)
   - Contact form for inquiries
   - Map and address
   - Social media links

### Functionality
- **Authentication system** with localStorage (simulated, ready for backend)
- **Profile management** with image upload capability
- **Smooth scrolling** navigation
- **Hover animations** and scroll-triggered animations
- **Responsive navigation** that adapts to screen size
- **Form validation** and error handling
- **Message system** for user feedback

##  Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server to avoid CORS issues

### Demo Credentials
- **Email**: `student@thuthgate.edu.eg`
- **Password**: `password123`

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript**: ES6+ features, async/await, localStorage
- **Google Fonts**: Cinzel and Cinzel Decorative

### File Structure
```
Thoth Gate/
├── index.html          # Login page
├── home.html           # Home page
├── profile.html        # Profile page
├── courses.html        # Courses page
├── teachers.html       # Teachers page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── imgs/               # Image assets
```

### CSS Architecture
- **Mobile-first responsive design**
- **CSS Grid and Flexbox** for layouts
- **CSS Custom Properties** for consistent theming
- **Smooth transitions** and hover effects
- **Ancient Egyptian patterns** using SVG backgrounds

### JavaScript Features

- **Module pattern** for organized code structure
- **Event-driven architecture** with proper event delegation
- **Local storage management** for user sessions
- **Form handling** with validation
- **Image upload** with preview functionality
- **Smooth scrolling** and scroll animations


### Profile Updates
```javascript
// Replace simulateUpdateProfile with actual API call
const response = await fetch('/api/profile/update', {
    method: 'PUT',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ name, email })
});
```

### Data Fetching
```javascript
// Example for fetching courses
const courses = await fetch('/api/courses', {
    headers: { 'Authorization': `Bearer ${token}` }
}).then(res => res.json());
```

##  Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

##  Customization

### Colors
```css
:root {
    --gold: #d4af37;
    --beige: #f5deb3;
    --blue: #243a6b;
    --black: #000000;
}
```

### Fonts
- **Headings**: Cinzel Decorative (Google Fonts)
- **Body**: Cinzel (Google Fonts)

### Adding New Pages
1. Create new HTML file following the existing structure
2. Add navigation link in header
3. Include `styles.css` and `script.js`
4. Add page-specific initialization in `initializePageFunctionality()`


##  Deployment
### Static Hosting
- Upload all files to your web hosting service
- Ensure `index.html` is set as the default page
- Test all functionality after deployment

### Backend Integration
1. Replace simulated API calls with real endpoints
2. Implement proper authentication middleware
3. Set up CORS if frontend and backend are on different domains
4. Add proper error handling and loading states

### Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Functionality Testing

- Login/logout flow
- Profile editing
- Image upload
- Responsive design
- Navigation between pages
- Form validation

##  Future Enhancements

- **Real-time notifications** for course updates
- **Advanced course filtering** and search
- **Student-teacher messaging** system
- **Mobile app** using PWA features


---

**Thuth Gate Learning Center** - Gateway to Ancient Wisdom, Modern Learning 
