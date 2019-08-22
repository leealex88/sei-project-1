Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@leealex88 
0
0 0 leealex88/sei-project-1
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Security  Insights  Settings
sei-project-1
/
README.md
 

▲
1
​
2
# SEI Project 1 - Mastermind
3
See the game online at: https://leealex88.github.io/sei-project-1/
4
​
5
![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
6
​
7
​
8
### Timeframe & Team
9
- 7 days, solo
10
​
11
### Technologies
12
 - HTML5
13
 - CSS3
14
 - JavaScript
15
 - Animate.css
16
 - SCSS
17
 - Flexbox
18
 - Git
19
 - GitHub
20
​
21
### Getting Started
22
​
23
Use the clone button to download the game source code. Open the index.html file in your browser and the game should start, if not check console for any issues.
24
​
25
## Logic
26
​
27
 At the beginning of each game the computer generates a secret code of four colors. The colors are always chosen from the same six colors, no duplicates allowed.
28
​
29
<img src="style/4colors.png" width="900">
30
​
31
 Your objective is to guess the secret code. You will have to guess the colors and put them in the same order as they are in the secret code.
32
​
33
 Choose four colors in the next available row. The computer will score your guess in the following way:
34
​
35
 For each guess that is right in both color and position you get a black point
36
​
37
 For each guess that is right in color but not in position you get a red point
38
​
39
After completing each row, user guess will be checked by function 'checkLine'
40
and will display the result message: 'Try again!', 'You won!'.
41
​
42
```js
43
let result = []
44
function checkLine() {
45
  for (let i = 0; i < 4; i++) {
46
    // console.log('loop start')
@leealex88
Commit changes
Commit summary 
Update README.md
Optional extended description
Add an optional extended description…
  Commit directly to the gh-pages branch.
  Create a new branch for this commit and start a pull request. Learn more about pull requests.
 
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About

