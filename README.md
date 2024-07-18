# Tiny-Away Clone MERN
Testing Tiny Away Clone with MERN

## General
- Framework / Stack: MERN
- Node Version 20.13.1
- Packages Used: nodejs, npm, dotenv, mongodb, mongoose, font awesome, helmet, styled components

## How To Work With Github
- Install Git on your machine with the following link: 
    https://git-scm.com/download/win

- Set up your Username 

```
    git config --global user.name "Your GitHub Username"
    git config --global user.email "Your GitHub Email"
```

- Authenticate your Github 

```
    gh auth login
```

- Clone the Repo onto your machine (For now, you can use the URL but in future we will change to SSH)

    - Click on the green "Code" button near the top-right corner of the page.
    - Copy the URL shown under either "HTTPS" or "SSH". If you're prompted to select a protocol, choose the one you prefer or have set up previously.
    - Then use the following command with the URL/SSH: 


    ```
    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
    ```

- Create A New Branch To Work On Your Code 


```
    git checkout -b new-branch-name
```

- When you are done with your code for the day: Stage, Commit, Push to keep everyone updated: 

    - Stage your code changes: 

    ```
    git add .
    ```

    - Commit Your Code: 
    ```
    git commit -m "Leave a meaningful message about the code you have written/changed"
    ```

    - Push Your Code to Github: 
    ```
    git push origin your-branch-name
    ```

- Create A Pull Request on Github but *DO NOT MERGE* the request 


## Launch local development server 
- After cloning the repo, open the source code in your IDE 
- Ensure that you have installed node and npm  
- Run the following commands in your terminal 

```
    npm install 
    npm update
```

- Start the backend server on localhost:4000

```
    cd backend
    npm run dev
```

- Then, run the following command to launch development server (Frontend)

```    
    cd frontend/tinyaway-mern
    npm run dev 
```

If it does not work, try running

```
    npm audit fix --force
```

## dotenv
- Backend Port: 4000
- MongoDB URI: mongodb+srv://ta-mockdata:password123!@tinyaway-mockdata.txqwip5.mongodb.net/?retryWrites=true&w=majority&appName=TinyAway-MockData
- MongoDB URI Username: ta-mockdata
- MongoDB URI Password: password123!
- Take note: We are using sample dataset from MongoDB 
<!-- # test API key for MongoDB [DO NOT DELETE] -->
<!-- # hV9T48NpQC3aWTnnpu7nUAcmbFXQ7ROr0tKHvWdeL0eFUrrzyFFpKVz7o8VsO4wj -->

<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->

## MongoDB Demo API Endpoints
### Listings APIs 
GET all Tiny Away Listings
```
    http://localhost:4000/api/tinyawayall
```

GET 12 Tiny Away Listings (For Homepage Popular Listings Section)
    - This needs to be updated once marketing team has decided how they want to filter this, and once the confirmed data models have been decided (11 July 2024)
```
    http://localhost:4000/api/tinyawaya12
```

GET one specific Tiny Away Listing Summary
```
    http://localhost:4000/api/houseSummary
```

GET one specific Tiny Away Listing Details 
```
    http://localhost:4000/api/houseDetails
```

GET all images of a single Tiny Away Listing
```
    http://locahost:4000/api/housePictures
```

GET Tiny House Amenity Name List 
```
    http://localhost:4000/api/findamenities
```

### Stories APIs
GET all Tiny Away Stories 
```
    http://localhost:4000/api/allstories
```

GET 8 Tiny Stories for Homepage Section
    - This needs to be updated once marketing team has decided how they want to filter this, and once the confirmed data models have been decided (11 July 2024)
```
    http://localhost:4000/api/storiessection
```

<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->

# Frontend with ReactJS + Helmet 

## Contexts 
### Search Function Contexts
GuestNumberContext
- For setting Number of Guests specified in Search Function
- Path: src/contexts/GuestNumberContext.tsx

LocationContext
- For setting Selected Location in Search Function
- Path: src/contexts/LocationContext.tsx

RoomNumberContext
- For setting Number of Rooms specified in Search Function
- Path: src/contexts/RoomNumberContext.tsx

SearchFilterContext
- For setting further Filter Selections in Search Function
- Path: src/contexts/SearchFilterContext.tsx

### Listings Contexts 
SingleImagesListingContext
- For setting URL array on Single Listing Page, to enable the scrolling gallery
- Path: src/contexts/SingleListingImagesContext.tsx

-------------------------------------------------------------------------------

<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->
<!--   ----------------------------------------------------------------------------------------------------------- -->

## Shared Utilities
Search Query Constructor
- Used initially for testing search functionality with sample airbnb data, to be updated once Atlas Search is implemented
- Path: src/sharedutilities/constructQuery.tsx

Generic State Toggle (Boolean only)
- Used for simple boolean state toggling, where there are no other dependencies or props needed/affected
- Path: src/shareutilities/toggleState.tsx

## Custom Hooks
useGetImages
- Used to get all images for a single Tiny Away listing page
- Path: src/hooks/useGetImages.tsx

usePagination
- Used for pagination of cards displayed
- Path: src/hooks/usePagination.tsx
