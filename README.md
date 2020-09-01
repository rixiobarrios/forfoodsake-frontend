<img width=100% src=https://user-images.githubusercontent.com/56275819/76553977-6ced7100-646b-11ea-81ff-f7c28c670242.jpg>

# PROJECT 4:  GA-SEIR-129 FRONTEND

## For Food Sake: Eat Delicious Food, Save the Planet

[Documentation for Project# 4 Assignment by General Assembly](https://www.notlinkedyet.com)

## Concept

Food waste in the US continues to be a crippling issue which effects everyone in our community. Here are a few stats to illustrate the issue.

##### 40% of all food in the US goes to waste

##### 20% of landfill weight is food waste

##### 49 million Americans struggle to put food on their table

##### 1 in 5 children are at risk of hunger

This app is a humble contribution to a solution that may bring about a much needed change in the dominant culture of waste. We can’t build electric cars or a rocket to mars, but we can build this app in the mean time.

## Overview

The idea for the project came about through a mixture of activism and sustainability. Our main focus was to create an app that promotes waste reduction through food management by bringing businesses and the community together to tackle a common issue and provide a tool to effectively fight hunger.

---

## Table of Contents

-   [Who is ForFoodSake for?](https://github.com/rixiobarrios/forfoodsake-frontend#who-is-ForFoodSake-for)
-   [Wireframes](https://github.com/rixiobarrios/forfoodsake-frontend#wireframes)
-   [Mockups](https://github.com/rixiobarrios/forfoodsake-frontend#mockups)
-   [Browser and Mobile Views](https://github.com/rixiobarrios/forfoodsake-frontend#browser-and-mobile-views)
-   [User Stories](https://github.com/rixiobarrios/forfoodsake-frontend#user-stories)
-   [User Data Flow Chart](https://github.com/mmarmol88/forfoodsake-frontend#user-data-flow-chart)
-   [Component Hierarchy](https://github.com/mmarmol88/forfoodsake-frontend#component-hierarchy)
-   [App Features](https://github.com/mmarmol88/forfoodsake-frontend#app-features)
-   [Technologies Used](https://github.com/mmarmol88/forfoodsake-frontend#technologies-used)
-   [Code Sample](https://github.com/mmarmol88/forfoodsake-frontend#code-sample)
-   [Contribution & Installation Instructions](https://github.com/mmarmol88/forfoodsake-frontend#contribution-&-installation-instructions)
-   [Building Team](https://github.com/mmarmol88/forfoodsake-frontend#building-team)
-   [Link to the App](https://github.com/mmarmol88/forfoodsake-frontend#link-to-the-app)
-   [Link to the Article on Linkedin](https://github.com/mmarmol88/forfoodsake-frontend#link-to-the-article-on-linkedin)
-   [Attributions](https://github.com/mmarmol88/forfoodsake-frontend#attributions)
-   [Special Thanks](https://github.com/mmarmol88/forfoodsake-frontend#special-thanks)

---

### Who is ForFoodSake for?

-   Proactive people who are conscious about the impact that human footprint has on the environment.
-   Vendors who want to reduce food waste and dedicate a portion of their business to sustainability.
-   Anybone who enjoys eating and is looking for a good deal on delicious food.

## Wireframes

![wireframes](https://user-images.githubusercontent.com/56275819/76550136-00bd3e00-6468-11ea-945a-1a412b2c567b.jpg)

## Mock Ups

![Asset 6](https://user-images.githubusercontent.com/56275819/76559911-6ca6a300-6476-11ea-828d-e177aec711bd.png)

## Browser and Mobile Views

![Browser View](https://user-images.githubusercontent.com/55994508/76643158-88678300-6522-11ea-8be0-4f91c0d03dd5.png)
![Mobile View](https://user-images.githubusercontent.com/55994508/76643171-8d2c3700-6522-11ea-917c-24505e93b490.png)
![Mobile View](https://user-images.githubusercontent.com/55994508/76643176-90272780-6522-11ea-9ac0-ac2970f0fafe.png)

## User Stories

**As a Vendor**
The vendor (farm, grocery store or restaurant) will signup; enter their information, and post information about the menu of choice for that day (price and units available) including a pickup by time.

**As a User**
The customer will be able to look at the vendor, units available,purchase the product through the app and get pickup information.

## User Flow Data

![userdataflow](https://user-images.githubusercontent.com/56275819/76550216-23e7ed80-6468-11ea-8158-35108dedd006.jpg)

## Component Hiearchy Diagram

![Project 4_ Component Hierarchy (1)](https://user-images.githubusercontent.com/56275819/76598071-634e2280-64d8-11ea-8a1f-4446dd0167d1.jpg)

## App Features

**Minimum Viable Product**

-   [x] CRUD functionality for Vendors
-   [x] User can view vendors located in New York City
-   [x] User can view all listings displayed on Vendor page
-   [x] Vendor can create, update, & delete listing
-   [x] Incorporate Material.UI for styling
-   [x] Mobile responsive

**Bronze Features**

-   [x] Vendor authentication
-   [ ] Users can search for vendors located in Nashville, Denver, or New York
-   [ ] Add component for educational resources about waste free lifestyle

**Silver Features**

-   [ ] Transition from React to React Native framework
-   [x] Elevate styling through branding(colors, fonts, icons, graphic elements)
-   [ ] Image upload for vendors

**Gold Features**

-   [ ] CRUD functionality for Users
-   [ ] Use Google geolocation to filter search results
-   [ ] Add Twitter thread linking to releated hashtags
-   [ ] Add animation & interactive design through transitions
-   [ ] Carousel/Slideshow of available listings on home page

**Platinum Features**

-   [ ] Add ability for user to write a vendor review
-   [ ] Incorporate social media sharing capabilities
-   [ ] Send order confirmation to users via email and/or text message

### Technologies Used

-   React
    -   React Router
    -   React Hooks
-   JavaScript
-   Cascading Style Sheets (CSS)
-   Material-UI
-   Testing
    -   Jest
    -   React Testing Library

## Code Sample

```PY
    if (props.signupStep === 1) {
        return (
            <>
                <Box className={classes.formContent}>
                    <FormControl
                        error={!props.validEmail}
                        className={classes.inputField}
                    >
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            value={props.emailString}
                            onChange={e => props.setEmailString(e.target.value)}
                            id="email"
                            type="email"
                            aria-describedby="my-helper-text"
                        />
                        {props.validEmail ? null : (
                            <FormHelperText>Please enter email</FormHelperText>
                        )}
                    </FormControl>
                    <FormControl
                        error={!props.validPassword}
                        className={classes.inputField}
                    >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            value={props.passwordString}
                            onChange={e =>
                                props.setPasswordString(e.target.value)
                            }
                            type="password"
                            id="password"
                        />
                        {props.validPassword ? null : (
                            <FormHelperText>
                                Please enter password
                            </FormHelperText>
                        )}
                    </FormControl>
                    <FormControl
                        error={!props.passwordMatch}
                        className={classes.inputField}
                    >
                        <InputLabel htmlFor="confirmPassword">
                            Confirm password
                        </InputLabel>
                        <Input
                            value={props.confirmPasswordString}
                            onChange={e =>
                                props.setConfirmPasswordString(e.target.value)
                            }
                            type="password"
                            id="confirmPassword"
                        />
                        {props.passwordMatch ? null : (
                            <FormHelperText>
                                Passwords must match
                            </FormHelperText>
                        )}
                    </FormControl>
                </Box>
                <FormControl>
                    <Button
                        className={classes.submitLogin}
                        variant="outlined"
                        color="secondary"
                        onClick={props.incrementSignup}
                    >
                        Continue
                    </Button>
                </FormControl>
            </>
        );
    } else if (props.signupStep === 2) {
        return (
```

This code’s purpose is to reuse the same form component to allow the user to fill all sign up fields without having too many fields to fill out on screen

## Installation & Contributing Instructions

[Click here](https://github.com/firstcontributions/first-contributions)

## Building Team

**Mindy Marmol**
[Github Profile](https://github.com/mmarmol88)

**Qusai Fares**
[Github Profile](https://github.com/qusaifares)

**Rixio Barrios**
[Github Profile](https://github.com/rixiobarrios)

**Sage Kearney**
[Github Profile](https://github.com/sage-kearney)

## Attributions

**Instructors at General Assembly:**

-   Esin Saribudak
-   Hou Chia

**Resources & Tools**

-   [Miro](https://miro.com/)
-   [Trello](https://trello.com/)
-   [Google Docs](https://docs.google.com/)
-   [Heroku](www.heroku.com)
-   [DB Diagram](https://dbdriagram.io)
-   [Pixlr](https://pixlr.com/)
-   [Adobe Illustrator](hhttps://www.adobe.com/products/illustrator.html)
-   [Adobe Indesign](https://www.adobe.com/products/indesign.html)
-   [Adobe XD](https://www.adobe.com/products/xd.html)
-   [Material-UI Docs](https://material-ui.com/)
-   [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro)
-   [Jest Docs](https://jestjs.io/docs/en/expect)

## Link to the App

[For Food Sake App](https://forfoodsake.herokuapp.com/)

## Link to the Article on Linkedin

[For Food Sake: The Last Project](https://www.linkedin.com/pulse/for-food-sake-the-last-project-rixio-barrios/)

## Special Thanks

**Sage Kearney:**
Mom & Dad, for keeping me fed during this program :heart:

**Qusai Fares:**
Thanks to my family for being there. Also thanks to my colleagues and instructors

**Mindy Marmol:**
To all the bugs and errors that made us google masters, thank you.

**Rixio Barrios:**
I thank my family for supporting me and my efforts to improve myself.
To my good friend **Chris Mendoza** who helped me and my cohort mates through this project.

<hr>

**Additional documentation can be found in the backend repository**
[Click here](https://github.com/rixiobarrios/forfoodsake-backend)
