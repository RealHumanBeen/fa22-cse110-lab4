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
12. A.  student.name
    B.  student['Grad Year']
    C.  student.greeting()
    D.  student['Favorite Teacher'].name
    E.  student.courseLoad[0]
13. A.  Result is '32'. 2 becomes a string type during operation.
    B.  Result is 1. '3' becomes a number type during operation.
    C.  Result is 3. null becomes a number type 0 during operation.
    D.  Result is '3null'. null becomes a string type during operation.
    E.  Result is 4. true becomes a number type 1 during operation.
    F.  Result is 0. false is number type 0 and null becomes number type 0 during operation.
    G.  Result is '3undefined'. undefined becomes string type during operation.
    H.  Result is NaN. The values attempt to undergo a numeric conversion and operation causes NaN because of undefined.
14. A.  Result is true. '2' becomes a number type during comparison.
    B.  Result is false. Both values are compared lexigraphically as strings, where '12' comes before '2' and result is false.
    C.  Result is true. '2' becomes a number type during comparison.
    D.  Result is false. Number and String comparison are not the same type.
    E.  Result is false. true becomes number type 1 during comparison.
    F.  Result is true. Boolean(2) becomes boolean type true during comparison.
15. == allows conversion of types before comparison, whereas === is a strict comparison that checks equality without type conversion.
17. The result is the array [2, 4, 6]. When modifyArray is called, the array [1,2,3] and function doSomething is passed in. In the for-loop, a call is made to doSomething used as a callback function, and iteratively doubles each value and pushes it into a new array. After the for-loop ends, the new array containing the doubled values of the original array is returned.

19. 11:10:07 PM
    11:10:07 PM
    11:10:07 PM
    11:10:07 PM
    11:10:07 PM
    ...