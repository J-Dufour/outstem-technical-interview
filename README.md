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

# OutStem Coding Challenge

Welcome to the OutStem Coding challenge. Submission instructions are listed below. The deadline to submit this challenge is **Monday January 22nd, 9:00 AM**. We would like to emphasize that we are looking for effort, and that the challenge is just part of our discussion with you during the interview, so don’t worry if your solution is *hacky* or even if it doesn’t work, we want to see it!

## The Challenge

The challenge for this interview is to build a dashboard for the new pizza place "A Slice of Pi". They have just finished their first year of business (2023), and want to see how their pizza sales have performed.

For this challenge you have been provided 3 data sets, [order_data.json](data-sets/order_data.json), [review_data.json](data-sets/review_data.json), and [pricing_data.json](data-sets/pricing_data.json). You will use the data in these files to generate various graphs as described in the Goals section

The design and layout of the website is totally up to you (feel free to use any UI libraries), though you will be judged on the look, feel, and usability of your application, so do your best to respect best practices in web design.

In addition, you're welcome to use any existing libraries to generate your graphs or implement other form elements.

## Data Sets
The first data set [order_data.json](data-sets/order_data.json) is a list of orders that were placed, has the following format:

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

The second data set [review_data.json](data-sets/review_data.json) is a list of customer reviews, and has the following format:

```
[
    {
        "review_id": integer,
        "sentiment": string, one of (delighted, happy, sad, angry),
        "store": string, one of (Kanata, Orleans,  Downtown, Sandy Hill, and The Glebe),
        "date": string in the format YYYY-MM-DD,
        "message": string
    },
    ...
]
```

The third data set [pricing_data.json](data-sets/pricing_data.json) describes the price for each pizza, first based on the type, and then based on the size

**Sample:**
```
{
  "Cheese": {
    "S": 8,
    "M": 12,
    "L": 16
  },
  ...
}
```


## Goals
This challenge has multiple goals that increase in level of difficulty, implement as many of these goals as you are able to.



### Goal 1
Show a simple pie chart based on the review_data.json, showing how many reviews of each sentiment (happy, sad, etc) A Slice of Pi received in 2023


### Goal 2
Add a simple bar chart showing how many orders were placed in each store (Kanata, Orleans... etc)


### Goal 3
Add a display of the total money made in 2023 by computing the price of each pizza sold and adding them all.


### Goal 4
Create a line chart showing how much money was made by month in 2023

### Goal 5
To your chart from Goal 2, add the ability to filter the data by
- pizza type
- pizza size


### Goal 6
Add a start and end date filter at the top of the page, and filter the charts from goals 1, 2, and 5 by these start and end dates



## Bonus Challenges
If you're done and looking for more challenges, here are some extra ideas!:

- Explore further chart types to show the data in a more complex manner
- Show off your design skills with a snazzy layout and header
- Add animations to your page elements


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

Please submit your solution in the 2024 Summer interview GitHub repository via GitHub Issue.

1. Navigate to the following link (https://github.com/AES-Outreach/Summer-2024-Coop-Interviews/issues/new/choose) or:
   1. Navigate to the challenge repository
   2. Click **Issues**
   3. Click **New Issue**
2. Click **Get Started** for Solution Submission
3. Change `YOUR_NAME` to your full name in the title field
4. Fill out the form
5. Click **Submit New Issue**
6. Done! Thank you for completing the challenge, we look forward to discussing your solution with you during the interview. 🎉

If you have any questions, you can email Ivana Erlich at ierlich@uottawa.ca



