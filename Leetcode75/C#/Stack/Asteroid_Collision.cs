public class Solution {
    public int[] AsteroidCollision(int[] asteroids) {
        Stack<int> stack = new Stack<int>();

        foreach (int asteroid in asteroids) {
            bool addAsteroid = true; 

            while (stack.Count > 0 && asteroid < 0 && stack.Peek() > 0) {
                int stackTop = stack.Peek();


                if (Math.Abs(stackTop) < Math.Abs(asteroid)) {
                    stack.Pop();
                    continue; 
                }

                else if (Math.Abs(stackTop) == Math.Abs(asteroid)) {
                    stack.Pop();
                    addAsteroid = false; 
                    break; 
                }

                else {
                    addAsteroid = false; 
                    break;
                }
            }

            if (addAsteroid) {
                stack.Push(asteroid);
            }
        }
        int[] result = new int[stack.Count];
        for (int i = stack.Count - 1; i >= 0; i--) {
            result[i] = stack.Pop();
        }

        return result;
    }
}