-[x] Add transitions between pages using framer motion
-[] set up reducer store and reducers to handle adding items and removing
-[] build add item component
-[] fine tune transitions between pages using framer motion
-[] Add transitions when hovering over links
-[] Build cart form
-[x] Add transition to show or hide cart form on modal, should be fixed on dsktop
-[] set up redux to manage global state
-[] set up db to store items there
-[] Built items page


## Notes
Understanding the structure and the flow of the application is challenging and is making me think of dropping it for a better designed one. I feel the design is part of the problem. But trying to understand it and building through it is still improving my skills at understanding design and turning them into code. So I am going to complete it. 

## Psedo code
You can add items from the item page, if no shopping list, one will be created, if there is a shopping list, item will get added to the active one, on the cart button that can increase or descrease the number of items will toggled on click.

### history
History will show all the lists created, the date created and their completion status. Clicking on a list will show the items on that list and check boxes will be added to the cart, clicking on the item will now mark the item as completed. Checking everything inside a list will set the list status as completed

### cancel and completed button
Two buttons will also be bellow the cart: cancel and completed, cancel will delete the list and completed will set the list status as completed.

### Top items
will pick the items with heighest values

### Top categories
will pick the categories with most items

### Monthly Summary
This will take a total of items bought in a month and chart it, to get data, just put in the information in the db so we can see charts for different months