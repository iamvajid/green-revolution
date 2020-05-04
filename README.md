# Green-Revolution
Helping you grow "green" online, but only on Github #MakeYourGitHubGreenAgain. An initiative to make people codictive, started during covid-19

A hobby/learning project as part of the #MakeYourGitHubGreenAgain commit challenge. Yes, committing the code to monitor the code commit (yes yes, isn't it ?)

App
===
The web-app to be built in react & redux


Services
==========
The micro-services required for the app. Currently identified services:
1. git-service : to provide the git related operation required 
2. payment-service : to process the payment (tendatively stripe and chargee/instamojo/razorpay for UPI)
3. penalty : services for calculating the penalty for each user for a day, if any
4. leaderboard : services related to creating leader-board of activity, on a point based system (criterias to be defined)
5. mail-services : for sending email reminder for penalties, and any other emails for user enrolling the services
6. user-services : managing enrollment of users into the program and git access grant/revoke
