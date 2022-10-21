1. values added: 20
2. final result: 20
3. values added: 20
4. The code returns an error. Because the variable 'result' is only instantiated in the inner if block, the value of result outside the if block is not instantiated  because of scope and is therefore, undefined.
5. The code returns an error. Because the variable 'result' is declared as a const, it cannot be changed. Line 7 attempts to change the variable and results in a Type Error.
6. The line is never printed due to the Type Error encountered in 'result'.