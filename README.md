Proof of Concept for Property Plus
==================================

This application is a Proof of Concept for the Property Plus website contest.

## What does it do?

It contains the following pages:

- Home
- About
- Terms of Use
- Login/Sign up
- My Properties

The following functionalities are implemented:

- Logging in with existing account (long running request should use loading bar like in the demo, but I ran out of time)
- Logging in with external accounts (all functionality implemented, but without any external id's)
- Viewing your properties (see below)
- Logging out

## My Properties

The main functionality of the site is contained in the My Properties page. There is a lot of functionality, some of which are combined in one page for reasons of this being a POC.
This was really the main focus for me, the rest of the front-end is mainly content pages and login.

- <b>Adding properties</b>. There should be a place to add a property. Clicking the button should show the 'add property' form inside the card body, and the button will change to 'save property'.
The actual form is not implemented yet in the POC.
- <b>The property card</b>. The property card shows all information about a property and a contract. The current selection only shows properties that have a contract, but that's just based on the limited information about the API. Ideally, all properties will be shown here.
    -   <b>Property information</b>. The first tab shows the property information (address). If there is a current contract, it will show the rental amount. If there is no contract, there could be a button 'add contract' in place of the rental amount.
    -   <b>Payments</b>. This tab shows a grid of payment history. Also, registering a payment should be done from here. Clicking the button should show the form to register a payment over the grid. Not implemented in the POC. I think the idea is clear.
    -   <b>Invite</b>. Invite either the landlord, or other tenants, to the website. Functionality should depend on whether you're logged in as landlord or tenant, but that information was not in the API yet.
    -   <b>Send message</b>. Send message to either landlord or tenant, depending on login role. Again, login role was not available.
    -   <b>Request maintenance</b>. Should be tenant only functionality
    -   <b>Map</b>. Fictional location, because there was no working address or coordinates in the API.
    -   <b>Ribbons</b>. Ribbons are shown as a feature demonstration. It makes it easy to highlight for example overdue payments, available properties (e.g. no current contract), whether it's multi-tenancy, if there is a new message waiting or anything like that. They come in all colors and two sizes, for both corners.
    
## How does it work?

I am a strong believer in not re-inventing the same things over and over again, so I try to stick to proven methods and components.

- All code is written using ES6
- All features are implemented as components and directives, making the code very readable and modular
- All stylesheets use either plain CSS or LESS
- All code is packaged and compiled using Webpack
- Satellizer is used for login funtionality
- Bootstrap is used for UI components
- ...