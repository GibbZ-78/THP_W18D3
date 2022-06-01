======================================

### Gilded Rose Requirements Specification

======================================

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We
have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items. First an introduction to our system:

    - All items have a SellIn value which denotes the number of days we have to sell the item
    - All items have a Quality value which denotes how valuable the item is
    - At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

    - Once the sell by date has passed, Quality degrades twice as fast
    - The Quality of an item is never negative
    - "Aged Brie" actually increases in Quality the older it gets
    - The Quality of an item is never more than 50
    - "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
    - "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
    Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
    Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

    - "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything
still works correctly. However, do not alter the Item class or Items property as those belong to the
goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code
ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover
for you).

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
legendary item and as such its Quality is 80 and it never alters.

### :bulb: Usage

1. Clone the current repository on your local :computer: using `git clone`
2. Install all needed Node.js package by typing `npm install` within the newly brought-in local directory
3. Type `npm test` to see the different Jasmine-based unit-test roll out (using cases described within the 'gilded_rose_specs.js' file)
4. Type `npm run run <number_of_days>` to run the javascript code located in the 'testtext_fixture.js' file, displaying an example of the Gilded Rose shop offering

### :computer: Development Environment

- Ubuntu 20.04 hosted by WSL 2 running on Windows 10 Famille (version 21H1 build 19043.1645)
- Node v16.15.0
- Npm v8.8.0
- Create-React-App v5.0.1
- CSS v3
- HTML v5
- Javascript ES6+ & JSX
- And a lot of other guests...

### :lock_with_ink_pen: Credits

&copy; 2022 - Jean-Baptiste VIDAL - [:octocat:](https://github.com/GibbZ-78) [<img src="https://www.linkedin.com/favicon.ico">](https://www.linkedin.com/in/jeanbaptistevidal/)

Enjoy, _wanderer_ :wink: !
