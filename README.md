A simple program which shows the basic Redux library works in a nutshell!

Expected Output:
{counter: 2}

Why, you ask?
- When the reducer initializes, it takes current counter state i.e. 0, adds +1 to it.
Then, at the end, we call the '.dispatch' method, which runs the reducer again with current state 
this time being 1, and adds +1 to it. Hence, the final output is 2.