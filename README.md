A simple program which shows the basic Redux library works in a nutshell!

Expected Output:
{counter: 1}
{counter: 0}

How, you ask?
- When the reducer initializes, it takes current counter state i.e. 0.
- When it executes the first dispatch action(increment), reducer runs the corresponding if condition, increments the counter,sets it to 1, then prints the object.
- Similar happens when it reaches to the second dispatch method (decrement), and it substracts 1 from the current state value and prints the object. 