import Stack from './krisstack';

export class Evaluator{


    run(toEvaluate: string, currentValue: number): number{

        let ops: Stack<string> = new Stack<string>();
        let vals: Stack<number> = new Stack<number>();

        let tokenArr = toEvaluate.split(" ");
        
        for (let token of tokenArr){

            if( token === '(' ){ }
            else if(token === '+') { ops.push(token);}
            else if(token === '-') { ops.push(token);}
            else if(token === '*') { ops.push(token);}
            else if(token === '/') { ops.push(token);}
            else if(token === 'sqrt') {ops.push(token)}
            else if(token === ")") {
                if( ops.count() > 0){
                    let op = ops.pop();
                    let v = vals.pop();
                    if(op === '+') {v = vals.pop() + v;}
                    else if(op === '-') { v = vals.pop() - v;}
                    else if(op === '*') { v = vals.pop() * v;}
                    else if(op === '/') { v = vals.pop() / v;}
                    else if(op === 'sqrt') { v = Math.sqrt(v);}
                    vals.push(v);
                }
            }
            else if(token === 'ans') { vals.push(currentValue);}
            else vals.push(Number(token));
        }
        return vals.pop();
    }
    
}