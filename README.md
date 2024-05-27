# Tiny-Away Clone MERN
Testing TinyAway Clone

## General 
- Framework / Stack: MERN
- Node Version 20.13.1
- Packages Used: nodemon, dotenv, express, mongoose, 

## dotenv
- Backend Port: 4000 
- MongoDB URI: mongodb+srv://ta-mockdata:password123!@tinyaway-mockdata.txqwip5.mongodb.net/?retryWrites=true&w=majority&appName=TinyAway-MockData
    - MongoDB URI Username: ta-mockdata
    - MongoDB URI Password: password123!

## Database 
Just a simple listings collection for mock data, nothing fancy or complicated. 

## Site - Structure
### Basic User Stories To Cover (Generally Client Side Stuff)
- As a user, I can see all Tiny House locations and availability 
- As a user, I can see reviews of stays at various locations [aka Tiny Stories]
- As a user, I can read the About Us page
- As a user, I can contact TinyAway by submitting a form on the About Us page
- As a user, I can Become A Host by submitting a form on the Become A Host page
- As a user, I can read the FAQ Page (External Link to FreshDesk)
- As a user, I can contact TinyAway by submitting a form on the Contact Us page
- As a user, I can buy a gift card for booking a Tiny Away vacation (External link to TinyAway gift card sales page)

### General Site Layout & Architecture 
- Permanent: Navbar @ top of page || Footer @ bottom of page
- Home Page
    - Search Function
    - TinyHouse Display 
    - TinyStories Display
    - Newsletter Sign Up 
    - Social Media Links
    - Reviews Display
- Tiny House Destinations Page 
    - Listing Display
    - General Info
    - 