# Add Digits
# https://leetcode.com/problems/add-digits/

"""Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it."""

"""Note:
the digital root of a positive integer as the position it holds with respect to the largest multiple of 9 less than it.
 the digital root of 11 is 2, which means that 11 is the second number after 9.
"""
#80ms
class Solution:
    # @param {integer} num
    # @return {integer}
    def addDigits(self, num):
        #return num and 9 if num % 9 == 0 else num % 9
        return num % 9 or num and 9
        
        
class Solution2:
    # @param {integer} num
    # @return {integer}
    def addDigits(self, num):        
        return (num - 1) % 9 + 1
                
        
S = Solution()
print S.addDigits(9)