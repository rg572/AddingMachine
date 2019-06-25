# AddingMachine
create a client side adding machine, in typescript, using the  Dijkstra’s two-stack evaluator.

It should look something like this:


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
