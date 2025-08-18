public class Solution {
    public string DecodeString(string s) {
        Stack<int> countStack = new Stack<int>();

        Stack<string>  resultStack = new Stack<string>();

        string currentResult = "";
        int currentCount = 0;

        for (int i = 0; i < s.Length; i++) {
            char c = s[i];

            if (char.IsDigit(c)) {
                currentCount = currentCount * 10 + (c - '0');
            }

            else if (c == '[') {
                countStack.Push(currentCount);
                resultStack.Push(currentResult);

                currentCount = 0; 
                currentResult = "";
            }

            else if (c == ']') {
                int count = countStack.Pop();
                string temp = currentResult; 
                currentResult = resultStack.Pop();

                for (int j = 0; j < count; j++) {
                    currentResult += temp;
                }
            }

            else {
                currentResult += c;
            }


        }
        return currentResult;
    }
}