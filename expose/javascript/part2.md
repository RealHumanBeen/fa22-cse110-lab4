1. The value 3 will be printed. An 'i' variable was declared during the inner for loop, and incremented until the end of the for loop to 3. This is possible because the scope of 'i' as a var does not exist only in the for loop.
2. The value 150 will be printed. On the last iteration of the for loop, the variable 'discountedPrice' is instantiated again to be the result of 300 * (1 - .50) = 150.
3. The value 150 will be printed. On the last iteration of the for loop, the variable 'finalPrice' is instantiated again to be the result of (150 * 100)/100 = 150.
4. The function returns an array of discounted prices, [50, 100, 150], where each price given in the original array was discounted by 50%.
5. The code will return an error. Because the variable 'i' is only instantiated in the for loop, the value of 'i' outside the loop is undefined.
6. The code will return an error. Because the variable 'discountedPrice' is only instantiated in the for loop, the value of 'discountedPrice' outside the loop is undefined.
7. The value 150 will be printed. The variable 'finalPrice' is declared before the inner for loop. At the end of the loop, finalPrice is last updated to be 150.
8. The function returns an array of discounted prices, [50, 100, 150], where each price given in the original array was discounted by 50%.
9. The code returns an error. Because the variable 'i' is only declared and instantiated inside the for loop, outside the for loop it is undefined and results in a reference error. 
10. The value 3 will be printed. The value is 3 because it is the length of the input array instantiated to the variable 'length'.
11. The function returns an array of discounted prices, [50, 100, 150], where each price given in the original array was discounted by 50%.