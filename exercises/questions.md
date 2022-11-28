# JavaScript

### 1. Name the three ways to declare a variable?
    The ways to declare a variable are using var, let or const.
### 2. Which of the three variable declarations should you avoid and why?
    You should avoid declaring variables with var because var is not bound by block scope.
### 3. What rules should you follow when naming variables?
    Naming convention is camelCase.
### 4. What should you look out for when using the + operator with numbers and strings?
### 5. How does the % operator work?
    Return the remainder of a division.
### 6. Explain the difference between == and ===.
    The diference is that === check also the type == doesn't.
### 7. When would you receive a NaN result?
    You get NaN when the value cannot be computed or as a result of attempted number coercion (type conversion) of non-numeric value (such that undefined) for which primitive numeric value is not available
### 8. How do you increment and decrement a number?
    You can increment by adding ++ and decrement with --.
### 9. Explain the difference between prefixing and post-fixing increment/decrement operators.
    The difference between the two lies in their return values. The prefix increment returns the value of a variable after it has been incremented. On the other hand, the more commonly used postfix increment returns the value of a variable before it has been incremented.
### 10. What is operator precedence and how is it handled in JS?
    Operator precedence describes the order in which operations are performed in an arithmetic expression. Multiplication ( * ) and division ( / ) have higher precedence than addition ( + ) and subtraction ( - ).
### 11. How do you log information to the console?
    Using console.log().
### 12. What does unary plus operator do to string representations of integers?
    Usually, the plus operator + sums numbers. Note that if any of the operands is a string, then the other one is converted to a string too.
### 13. What are the eight data types in JavaScript?
    Number, string, undefined, null, boolean, bigint, symbol, and object.
### 14. Which data type is NOT primitive?
    Object.
### 15. What is the relationship between null and undefined?
    Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.
    Undefined: It means the value does not exist in the compiler. It is the global object.
### 16. What is the difference between single, double, and backtick quotes for strings?
    Single or double do the same thing. Backticks are different in the sense that you can add variables inside using ${variableName}.
### 17. What is the term for embedding variables/expressions in a string?
    String interpolation is the process of embedding an expression into part of a string
### 18. Which type of quote lets you embed variables/expressions in a string?
    Backticks.
### 19. How do you embed variables/expressions in a string?
    Using ${}.
### 20. How do you escape characters in a string?
    Using \.
### 21. What is the difference between the slice/substring/substr string methods?
    slice() extracts parts of a string and returns the extracted parts in a new string.
    substr() extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
    substring() extracts parts of a string and returns the extracted parts in a new string.
### 22. What are the three logical operators and what do they stand for?
    && - AND
    || - OR
    ! - NOT
### 23. What are the comparison operators?
    less than ( < )
    less than or equal to ( <= )
    greater than ( > )
    greater than or equal to ( >= )
    equal to ( == )
    not equal to ( != )
    strict equal ( === )
    strict not equal ( !== )
### 24. What are truthy and falsy values?
    Truthy values are values that evaluate to True in a boolean context.
    Falsy values are values that evaluate to False in a boolean context.
### 25. What are the falsy values in JavaScript?
    undefined , null , NaN , 0 , "" and false.
### 26. What are conditionals?
    Conditionals are expressions that evaluate to either true or false.
### 27. What is the syntax for an if/else conditional?
    if ( condition ) {
      statment
    }
### 28.   ?
    switch () {
      case 1:
        break;
      case 2:
        break;
      default:
    }
### 29. What is the syntax for a ternary operator?
    condition ? exprIfTrue : exprIfFalse
### 30. What is nesting?
    Nesting is when you write something inside of something else.
### 31. What are functions useful for?
    Functions enable programmers to break down or decompose a problem into smaller chunks, each of which performs a particular task.
### 32. How do you invoke a function?
    functionName()
### 33. What are anonymous functions?
    Anonymous functions are functions without names.
### 34. What is function scope?
    Variable declared in a function can be used only inside that function.
### 35. What are return values?
    After you call a function you get a return value.
### 36. What are arrow functions?
    Arrow functions are function with a shorter syntax: let myFunction = (a, b) => a * b.