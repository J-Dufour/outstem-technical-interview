<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AES-Outreach/Summer-2024-Coop-Interviews">
    <img src="outstem_logo_icon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">OutStem Summer 2024 Coding Challenge</h3>

  <p align="center">
    Welcome to the OutStem coding interview.
  </p>
</p>

# OutStem Front-end Challenge

Welcome to the OutStem front-end challenge. Submission instructions are listed below. The deadline to submit this challenge is **Monday January 22nd, 9:00 AM**. We would like to emphasize that we are looking for effort, and that the challenge is just part of our discussion with you during the interview, so don’t worry if your solution is *hacky* or even if it doesn’t work, we want to see it!

## The Challenge

The challenge for this interview is to build a dashboard for the new pizza place "A Slice of Pi", who just finished their first year of business and want to see how they did. 

For this challenge you have been provided 2 data sets, `order_data.json` and `review_data.json`. You will use the data in these files to generate various graphs as described in the Goals section

The design and layout of the website is totally up to you (feel free to use any UI libraries), though you will be judged on the look, feel, and usability of your application, so do your best to respect best practices in web design.

In addition, you're also welcome to use any existing libraries to generate your graphs or implement other form elements.

## Data Sets
The first data set `order_data.json` has the following format:

```
[
    {
        "order_id": integer,
        "store": string, one of (Kanata, Orleans,  Downtown, Sandy Hill, and The Glebe),
        "items": [
            {
                "type": string, one of (Cheese, Pepperoni, Deluxe, Hawaiian, Meatlovers),
                "size": string, one of (S, M, L)
            }
        ],
        "date": string in the format YYYY-MM-DD
    },
    ...
]
```

The second data set `review_data.json` has the following format:

```
[
    {
        "review_id": integer,
        "sentiment": string, one of (delighted, happy, sad, angry),
        "store": string, one of (Kanata, Orleans,  Downtown, Sandy Hill, and The Glebe),
        "date": string in the format YYYY-MM-DD
    },
    ...
]
```


## Goals
This challenge has multiple goals that increase in level of difficulty, implement as many of these goals as you are able to.


### Goal 1
Fetch an easy, **true/false**, general knowledge question from the API, and print the response to the console


### Goal 2

Instead of printing to the console, display the question to the user, and allow them to select between the true and false options using whichever UI elements you think are best suited.


### Goal 3
If the user choses the correct answer, give them a success message, and the option to move on to the next stage of the game.

If they chose the incorrect answer, give them a failure message including what the correct answer was, and have them restart the game.

### Goal 4

Now fetch an easy **multiple choice** question from the general knowledge category. 

Display the question on the screen for the user, and allow them to select their answer with whichever UI elements you think are best suited 

### Goal 5

If the user choses the correct answer, give them a success message, and the option to move on to the next stage of the game.

If they chose the incorrect answer, give them a failure message including what the correct answer was, and have them restart the game.

### Goal 6

Repeat with goals 1-5 with medium, and then hard questions

### Goal 7

Build a nice congratulations page for users who won your quiz game!

## Bonus Challenges
If you're done and looking for more challenges, here are some extra ideas!:

- Give the user 2 extra lives instead of ending the game on the first failure
- Add a points system for different question difficulties
- Allow the user to select different categories for the game
- Add animations!


## Your solution

Here are the requirements for your solution.

1. You can complete this challenge using any front end framework of your choice, however, we prefer to see you do this challenge in JavaScript/TypeScript and either Angular or React.
2. Your solution submission should indicate which goals you've achieved
4. You must submit your solution in a GitHub repository or a Repl.it. **Please make sure your project/repository is public and accessible by us.**

## Evaluation 

You will be evaluated on:
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Best Practices: does your solution use Javascript/TypeScript's and your chosen framework's best practices
- User Friendly UI: does your solution anticipate what users might need to do and have elements that are easy to access?

## Submission

Please submit your solution in the 2023 Fall interview GitHub repository via GitHub Issue.

1. Navigate to the following link (https://github.com/AES-Outreach/Winter-2024-Coop-Interviews/issues/new/choose) or:
   1. Navigate to the challenge repository
   2. Click **Issues**
   3. Click **New Issue**
2. Click **Get Started** for Solution Submission
3. Change `YOUR_NAME` to your full name in the title field
4. Fill out the form
5. Click **Submit New Issue**
6. Done! Thank you for completing the challenge, we look forward to discussing your solution with you during the interview. 🎉

If you have any questions, you can email Ivana Erlich at ierlich@uottawa.ca



