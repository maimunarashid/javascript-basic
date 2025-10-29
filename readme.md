<!-- parseInt() -->
1. When adding a number (int) and a string, a problem occurs.
2. For example, it does not add 20 and '40' as numbers.
3. Instead, it outputs '2040' a string concatenation.
4. To perform actual addition, convert the string to a number using parseInt().
5. See practical implementation in the 'parseInt.js' file.
6. if the string does not consist of numeric characters, parseInt() will return NaN.
7. Adding a number and a non-numeric string result: string concatenation. Example: 20 + 'amla' = '20amla' .
8. Concate is happend only for addition operation (between integer and string or float or string).
9. For subtraction, multiplication, division, modulus(%) operation string (consist of numbers) also count as number.
