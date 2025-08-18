/*1. create result list to hold the 2 ans lists
2. initialize the first ans list to elements in list1 but not in 2
3. initialize 2nd ans list for elements in nums2 but not in nums1
4. create hashsets to sore distinct elements from each array
5.find distinct elements in nums1 not in nums2
6. find distinct elements in nums2 but not in nums1
7. add both ans lists to result
8. return final result*/

public class Solution {
    public IList<IList<int>> FindDifference(int[] nums1, int[] nums2) {
        IList<IList<int>> answer = new List<IList<int>>();

        IList<int> answer0 = new List<int>();
        IList<int> answer1 = new List<int>();

        HashSet<int> set1 = new HashSet<int>(nums1);
        HashSet<int> set2 = new HashSet<int>(nums2);

        foreach(int num in set1) {
            if(!set2.Contains(num)) {
                answer0.Add(num);
            }
        }

        foreach(int num in set2) {
            if(!set1.Contains(num)) {
                answer1.Add(num);
            }
        }

        answer.Add(answer0);
        answer.Add(answer1);

        return answer;
    }
}