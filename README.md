# Slim's Progressive Web App Budget Tracker

## Table Of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation Method](#installation-method)
- [Screenshot](#screenshot)
- [Contributions](#contributions)

## Description

A budget tracking application that has been modified to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.

<a href='https://slims-pwa-tracker.herokuapp.com/'>Project URL</a>

## User Story

```
AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling
```

## Acceptance Criteria

```
GIVEN a budget tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```

## Installation Method

Run through the following instructions prior to using the application:

- Please clone this repository or copy the code to your development environment.
- You must have Node.js, Express, MongoDB, to run this app on your machine.

- From the root directory, run commands:

```
npm i
```

Then

```
npm start
```

## Screenshot

<img width="908" alt="Screen Shot 2022-07-20 at 10 27 43 PM" src="https://user-images.githubusercontent.com/79289373/180136442-c7f78dae-88f2-4671-90d8-70f7a65d031e.png">

## Contributions

<a href='https://github.com/ShuanLim'>Shuan Lim</a>

Contact me via <a href='mailto:shuanmlim@gmail.com'>email</a>
