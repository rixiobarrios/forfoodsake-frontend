# Project 4 ForFoodSake

## Install

To install you can download this repo, install it on your machine and install dependencies(code here)(e.g nmp install).

## Overview

The idea for the project came about through a mixture of activism and sustainability.
Our main focus was to create a project that promotes waste reduction through food management.
We consider this project our contribution to creating a more sustainable future for all.

## About

Food waste is a major problem among developed nations. In the United States, 40% of all food goes to waste.
ForFoodSake is an app that would help alleviate some of that waste from farms, markets, restaurants and homes.

### Who will use it?

-   Proactive people who are conscious about the impact that human footprint has on the environment.
-   Vendors who want to reduce food waste and dedicate a portion of their business to sustainability.
-   Anybone who enjoys eating and is looking for a good deal on delicious food.

##### Reasons to use:

-   Saves Money
-   Reduces food waste
-   Promotes community activism and sustainability
-   Handles food waste in an ethical manner
-   Provides quality foods for low income families

## Wireframes

![Wireframes](wireframe-mvp.png)

## User Story

**Vendor**

The vendor (farm, grocery store or restaurant) will signup; enter their information, and post information about the items they have available (price and units available).

**Customer**

MVP- The customer would be able to see listings from vendors nearby and be able to get in touch with the vendor to arrange order and pickup.

SILVER- The customer would be able to see listings from vendors nearby. Choose the items they would like to purchase. Make a payment and then proceed to pickup time and contact information for vendor.

## User Flow Data

![User Flow Data](userdataflow.png)

## Workflow and Responsabilities

The ForFoodSake team will use this workflows(workflow here)
The responsabilities will be divided in the following ways;

Sage Kerney: SCRUM Mistress?
Mindy Marmol: SCRUM Mistress?
Qusai Fares: ???
Rixio Barrios: GIT Master?

What are this responsabilities based on? How did we arrive at this decisions? who decided what?

## Request Response Cycle

![Request Response Cycle](mvc.jpg)

## Component Hiearchy Diagram

![Hierarchy Diagram](component-hierarchy.jpg)

## Database Diagram

![Relationship Diagram](relationship-diagram-mvp.png)

### Functionality

**Minimum Viable Product**

-   [ ] CRUD functionality for Vendors
-   [ ] User can view vendors located in New York
-   [ ] User can view all listings displayed on Vendor page
-   [ ] Vendor can create, update, & delete listing
-   [ ] Basic styling using flexbox/grid
-   [ ] Mobile responsive

**Bronze version**

-   [ ] Vendor authentication
-   [ ] Users can search for vendors located in Nashville, Denver, or New York
-   [ ] Incorporate Material.UI for styling

**Silver version**

-   [ ] Transition from React to React Native framework
-   [ ] Add component for educational resources about waste free lifestyle
-   [ ] Continue to elevate styling through branding(colors, fonts, icons, graphic elements)
-   [ ] Image upload for vendors

**Gold version**

-   [ ] CRUD functionality for Users
-   [ ] Use Google geolocation for 'view vendors by location' style search functionality
-   [ ] Add Twitter thread linking to releated hashtags.
-   [ ] Add animation & interactive design through transitions
-   [ ] Carousel/Slideshow of available listings on home page

**Platinum version**

-   [ ] Add ability for user to write a review for vendor
-   [ ] Incorporate social sharing abilities.
-   [ ] Use Nodemailer or other technology to send order receipts to user

### Technologies used

**Front-end**

-   React
    -   React Router
    -   React Hooks
-   JavaScript
-   Cascading Style Sheets(CSS)
-   Material-UI (maybe)
-   Testing
    -   Jest
    -   Enzyme

**Back-end**

-   Python
    -   Django
        -   Django REST Framework
-   PostgreSQL
-   JSON Web Tokens (JWT)
-   Google Maps API
-   Amazon Web Services (AWS)
-   Testing
    -   Unit Test

### Why we chose this app???

`I feel the app is a call to action.`
\- Rixio Barrios

`Creating a tool for everyone to benefit.`
\- Qusai Fares

`The more resources people have to make a difference, the easier it is to make a difference. DIFFERENCE.`
\- Sage Kearney

`To create an app that is a driving force for change, where people who are conscious about their impact can come together.`
\- Mindy Marmol

```PY
def food_listing(request):
    listings = Listing.objects.all()
    return # Response generate by our API
```

**This code helps us do (reasons here)**

## How to Contribute

To contribute to this project submit an issue for review on this repository:
![ForFoodSake Repository](picture here)

## Credits
