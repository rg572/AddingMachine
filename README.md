# Adding Machine - Happy Independence Day 2019.

For your long weekend project, 
create a client-side adding machine that runs in a browser, in [Typescript](https://www.typescriptlang.org/), using Dijkstra’s two-stack evaluator. Your app needs have only one page, so carefully read the notes in the diagram below.

But first, you should `learn you some Typescript`. Read why it was created and why people use it. Find out how to implement a single page web using Typescript. 

It should look something like this when you load the app's URL into a Chrome browser:
![Mockup](AddingMachine.png)

And you should use this evaluator (but first translate it into Typescript) for a start:
```java

public class Calculate {
    private Stack<String> ops  = new Stack<String>();
    private Stack<Double> vals = new Stack<Double>();

    public Calculate() { }
    
    public double run(String toEvaluate) {

        String[] tokens = toEvaluate.split(" ");
        for (String token : tokens) {
            if      (token.equals("("))               ;
            else if (token.equals("+"))    ops.push(token);
            else if (token.equals("-"))    ops.push(token);
            else if (token.equals("*"))    ops.push(token);
            else if (token.equals("/"))    ops.push(token);
            else if (token.equals("sqrt")) ops.push(token);
            else if (token.equals(")")) {
                String op = ops.pop();
                double v = vals.pop();
                if      (op.equals("+"))    v = vals.pop() + v;
                else if (op.equals("-"))    v = vals.pop() - v;
                else if (op.equals("*"))    v = vals.pop() * v;
                else if (op.equals("/"))    v = vals.pop() / v;
                else if (op.equals("sqrt")) v = Math.sqrt(v);
                vals.push(v);
            }
            else vals.push(Double.parseDouble(token));
        }
        return vals.pop();
    }
}
```
You will also need to translate the `Stack.java` class to typescript as well.

## Visual Studio Code

I heartily recommend you download and use [Visual Studio Code](https://code.visualstudio.com/) as your IDE for this project. VSC has all kinds of cool Typescript tools (and it is in fact written in Typescript itself). VSC has many of the same features that IntelliJ has, so it should feel quite familiar. 

-K