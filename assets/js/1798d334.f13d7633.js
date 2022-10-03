"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[5657],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(t),c=r,b=p["".concat(l,".").concat(c)]||p[c]||d[c]||i;return t?a.createElement(b,o(o({ref:n},u),{},{components:t})):a.createElement(b,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const i="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(7462),r=t(7294),i=t(6010),o=t(2389),s=t(7392),l=t(7094),m=t(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var n;const{lazy:t,block:o,defaultValue:p,values:c,groupId:b,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),y=(0,s.l)(f,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:k}=(0,l.U)(),[T,I]=(0,r.useState)(v),S=[],{blockElementScrollPositionUntilNextRender:w}=(0,m.o5)();if(null!=b){const e=x[b];null!=e&&e!==T&&f.some((n=>n.value===e))&&I(e)}const L=e=>{const n=e.currentTarget,t=S.indexOf(n),a=f[t].value;a!==T&&(w(n),I(a),null!=b&&k(b,String(a)))},M=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]??S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]??S[S.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>S.push(e),onKeyDown:M,onFocus:L,onClick:L},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function c(e){const n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},7042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),i=t(5488),o=t(5162);const s={sidebar_position:1,id:"a-binary-search",title:"Binary Search",tags:["binary-search","first-bad-version","maximum-profit-in-job-scheduling","median-of-two-sorted-arrays","search-in-rotated-sorted-array","time-based-key-value-store"]},l="Binary Search",m={unversionedId:"algorithms/a-binary-search",id:"algorithms/a-binary-search",title:"Binary Search",description:"- Understanding binary search",source:"@site/docs/algorithms/a-binary-search.mdx",sourceDirName:"algorithms",slug:"/algorithms/a-binary-search",permalink:"/dsa/docs/algorithms/a-binary-search",draft:!1,tags:[{label:"binary-search",permalink:"/dsa/docs/tags/binary-search"},{label:"first-bad-version",permalink:"/dsa/docs/tags/first-bad-version"},{label:"maximum-profit-in-job-scheduling",permalink:"/dsa/docs/tags/maximum-profit-in-job-scheduling"},{label:"median-of-two-sorted-arrays",permalink:"/dsa/docs/tags/median-of-two-sorted-arrays"},{label:"search-in-rotated-sorted-array",permalink:"/dsa/docs/tags/search-in-rotated-sorted-array"},{label:"time-based-key-value-store",permalink:"/dsa/docs/tags/time-based-key-value-store"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"a-binary-search",title:"Binary Search",tags:["binary-search","first-bad-version","maximum-profit-in-job-scheduling","median-of-two-sorted-arrays","search-in-rotated-sorted-array","time-based-key-value-store"]},sidebar:"docs",previous:{title:"Algorithms",permalink:"/dsa/docs/category/algorithms"},next:{title:"Cyclic sort",permalink:"/dsa/docs/algorithms/b-cyclic-sort"}},u={},d=[{value:"Problems related to binary search",id:"problems-related-to-binary-search",level:2},{value:"\u2197 See LeetCode Problem #704",id:"-see-leetcode-problem-704",level:3},{value:"\u2197 See LeetCode Problem #278",id:"-see-leetcode-problem-278",level:3},{value:"\u2197 See LeetCode Problem #1235",id:"-see-leetcode-problem-1235",level:3},{value:"\u2197 See LeetCode Problem #4",id:"-see-leetcode-problem-4",level:3},{value:"\u2197 See LeetCode Problem #33",id:"-see-leetcode-problem-33",level:3},{value:"\u2197 See LeetCode Problem #981",id:"-see-leetcode-problem-981",level:3}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"binary-search"},"Binary Search"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understanding binary search"),(0,r.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,r.kt)("h2",{id:"problems-related-to-binary-search"},"Problems related to binary search"),(0,r.kt)("details",null,(0,r.kt)("summary",null," Binary Search (Expand/Collapse) "),(0,r.kt)("h3",{id:"-see-leetcode-problem-704"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/binary-search/"},"\u2197 See LeetCode Problem #704")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    static int search(int[] nums, int target) {\n        int pivot;\n        int left = 0;\n        int right = nums.length - 1;\n\n        while (left <= right) {\n            pivot = left + (right - left) / 2;\n\n            if (nums[pivot] == target) {\n                return pivot;\n            }\n\n            if (target < nums[pivot]) {\n                right = pivot - 1;\n            } else {\n                left = pivot + 1;\n            }\n        }\n\n        return -1;\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        int[] nums1 = {-1,0,3,5,9,12};\n        int target1 = 9;\n        //  O/P: 4\n\n        // Example 2:\n        int[] nums2 = {-1,0,3,5,9,12};\n        int target2 = 2;\n        //  O/P: -1\n\n        System.out.println(search(nums1, target1));\n        System.out.println(search(nums2, target2));\n    }\n}\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," First Bad Version (Expand/Collapse) "),(0,r.kt)("h3",{id:"-see-leetcode-problem-278"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/first-bad-version/"},"\u2197 See LeetCode Problem #278")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"//  To make it work outside the LeetCode environment:\n//  Requires the CORRECT implementation of VersionControl class\n//      with boolean isBadVersion(int version) method/API\n\n//  INCORRECT Implementation\n//      so that my IDE doesn't yell at me!!!\nclass VersionControl {\n    static boolean isBadVersion (int n) {\n        return true;\n    }\n}\n\npublic class Solution extends VersionControl {\n    static int firstBadVersion(int n) {\n\n        int leftIndex = 1;\n        int rightIndex = n;\n\n        while (leftIndex <= rightIndex) {\n\n            int pivotIndex = leftIndex + (rightIndex - leftIndex) / 2;\n\n            //  Not bad version\n            if (!isBadVersion (pivotIndex)) {\n                //  First bad version should be\n                //      on the right side of the pivotIndex\n                leftIndex = pivotIndex + 1;\n            //  Bad version\n            } else {\n                //  First bad version should be\n                //      on the left side of the pivotIndex\n                //  Meaning, pivotIndex < current pivotIndex\n                rightIndex = pivotIndex - 1;\n            }\n        }\n        return leftIndex;\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        int n1 = 5;\n        int bad1 = 4;\n        //  O/P: 4\n\n        // Example 2:\n        int n2 = 1;\n        int bad2 = 1;\n        //  O/P: 1\n\n        System.out.println(firstBadVersion(n1));\n        System.out.println(firstBadVersion(n2));\n    }\n}\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Maximum Profit in Job Scheduling (Expand/Collapse) "),(0,r.kt)("h3",{id:"-see-leetcode-problem-1235"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/maximum-profit-in-job-scheduling/"},"\u2197 See LeetCode Problem #1235")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.PriorityQueue;\nimport java.util.Comparator;\n\npublic class Solution {\n    //We have n jobs, where every job is scheduled to be done from startTime[i] to\n    //endTime[i], obtaining a profit of profit[i].\n    //\n    // You're given the startTime, endTime and profit arrays, return the maximum\n    //profit you can take such that there are no two jobs in the subset with overlapping\n    //time range.\n    //\n    // If you choose a job that ends at time X you will be able to start another\n    //job that starts at time X.\n    //\n    //\n    // Example 1:\n    //\n    //\n    //\n    //\n    //Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]\n    //Output: 120\n    //Explanation: The subset chosen is the first and fourth job.\n    //Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.\n    //\n    //\n    // Example 2:\n    //\n    //\n    //\n    //\n    //Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70\n    //,60]\n    //Output: 150\n    //Explanation: The subset chosen is the first, fourth and fifth job.\n    //Profit obtained 150 = 20 + 70 + 60.\n    //\n    //\n    // Example 3:\n    //\n    //\n    //\n    //\n    //Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]\n    //Output: 6\n    //\n    //\n    //\n    // Constraints:\n    //\n    //\n    // 1 <= startTime.length == endTime.length == profit.length <= 5 * 10\u2074\n    // 1 <= startTime[i] < endTime[i] <= 10\u2079\n    // 1 <= profit[i] <= 10\u2074\n    //\n    //\n    // Related Topics Array Binary Search Dynamic Programming Sorting \ud83d\udc4d 3766 \ud83d\udc4e 39\n\n\n//leetcode submit region begin(Prohibit modification and deletion)\n//class Solution {\n\n    static class ArrayComparator implements Comparator <ArrayList<Integer>> {\n        public int compare (ArrayList<Integer> aList1,\n                            ArrayList<Integer> aList2) {\n            return aList1.get(0) - aList2.get(0);\n        }\n    }\n\n    private static int findMaxProfit (List<List<Integer>> jobsList) {\n        //  Initialize maximum profit\n        int maxProfit = 0;\n\n        //  Declare a minimum heap with PriorityQueue\n        //      using ArrayComparator to set priority\n        //  Each entry will have end time and profit only\n        Queue<ArrayList<Integer>> minHeap =\n                new PriorityQueue<>(new ArrayComparator());\n\n        for (int i = 0; i < jobsList.size(); i++) {\n            int startTime = jobsList.get(i).get(0);\n            int endTime = jobsList.get(i).get(1);\n            int profit = jobsList.get(i).get(2);\n\n            //  Check until minHeap is not empty\n            //      and update the maxProfit\n            while (!minHeap.isEmpty() &&\n                    startTime >= minHeap.peek().get(0)) {\n                maxProfit = Math.max(maxProfit, minHeap.peek().get(1));\n                minHeap.poll();\n            }\n\n            //  Declare an ArrayList for the updated combined job\n            ArrayList<Integer> updatedJob = new ArrayList<>();\n            //  Add the current end time\n            updatedJob.add(endTime);\n\n            //  Add the updated maximum profit\n            updatedJob.add(profit + maxProfit);\n\n            //  Update minHeap\n            minHeap.offer(updatedJob);\n        }\n\n        while (!minHeap.isEmpty()) {\n           maxProfit = Math.max(maxProfit, minHeap.peek().get(1));\n           minHeap.poll();\n        }\n\n        return maxProfit;\n    }\n\n    public static int jobScheduling(int[] startTime, int[] endTime, int[] profit) {\n\n        List<List<Integer>> jobsList = new ArrayList<>();\n\n        for (int i = 0; i < profit.length; i++) {\n            List<Integer> currentJob = new ArrayList<>();\n\n            currentJob.add(startTime[i]);\n            currentJob.add(endTime[i]);\n            currentJob.add(profit[i]);\n\n            jobsList.add(currentJob);\n        }\n\n        //  Sort JobsList by the start time of each job\n        jobsList.sort(Comparator.comparingInt(a -> a.get(0)));\n\n        return findMaxProfit(jobsList);\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        int[] startTime1 = {1,2,3,3};\n        int[] endTime1 = {3,4,5,6};\n        int[] profit1 = {50,10,40,70};\n        //  O/P: 120\n\n        // Example 2:\n        int[] startTime2 = {1,2,3,4,6};\n        int[] endTime2 = {3,5,10,6,9};\n        int[] profit2 = {20,20,100,70, 60};\n        //  O/P: 150\n\n        // Example 3:\n        int[] startTime3 = {1,1,1};\n        int[] endTime3 = {2,3,4};\n        int[] profit3 = {5,6,4};\n        //  O/P: 6\n\n        System.out.println(jobScheduling(startTime1, endTime1, profit1));\n        System.out.println(jobScheduling(startTime2, endTime2, profit2));\n        System.out.println(jobScheduling(startTime3, endTime3, profit3));\n\n    }\n}\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Median of Two Sorted Arrays (Expand/Collapse) "),(0,r.kt)("h3",{id:"-see-leetcode-problem-4"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/median-of-two-sorted-arrays/"},"\u2197 See LeetCode Problem #4")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    static double findMedianSortedArrays(int[] nums1, int[] nums2) {\n\n        if (nums1.length > nums2.length) {\n            return findMedianSortedArrays(nums2, nums1);\n        }\n\n        int[] a = nums1;\n        int[] b = nums2;\n\n        int aLength = a.length;\n        int bLength = b.length;\n\n        // range of a1 cut location: n1 means no right half for a1\n        int l = 0, r = aLength;\n        while (l <= r) {\n            int cut1 = (l + r) / 2; // cut location is counted to right half\n            int cut2 = (aLength + bLength + 1) / 2 - cut1;\n\n            int l1 = cut1 == 0 ? Integer.MIN_VALUE : a[cut1 - 1];\n            int l2 = cut2 == 0 ? Integer.MIN_VALUE : b[cut2 - 1];\n            int r1 = cut1 == aLength ? Integer.MAX_VALUE : a[cut1];\n            int r2 = cut2 == bLength ? Integer.MAX_VALUE : b[cut2];\n\n            if (l1 <= r2 && l2 <= r1) {\n                if ((aLength + bLength) % 2 == 0) {\n                    return ((double) Math.max(l1, l2) + Math.min(r1, r2)) / 2;\n                } else {\n                    return (double) Math.max(l1, l2);\n                }\n            } else if (l1 > r2) {\n                r = cut1 - 1;\n            } else {\n                l = cut1 + 1;\n            }\n        }\n\n        throw new IllegalArgumentException();\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        int[] numsA1 = {1,3};\n        int[] numsA2 = {2};\n        //  O/P: 2.00000\n\n        // Example 2:\n        int[] numsB1 = {1,2};\n        int[] numsB2 = {3,4};\n        //  O/P: 2.50000\n\n        System.out.println(findMedianSortedArrays(numsA1, numsA2));\n        System.out.println(findMedianSortedArrays(numsB1, numsB2));\n\n    }\n}\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Search in Rotated Sorted Array (Expand/Collapse) "),(0,r.kt)("h3",{id:"-see-leetcode-problem-33"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/search-in-rotated-sorted-array/"},"\u2197 See LeetCode Problem #33")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static int search(int[] nums, int target) {\n\n        int startIndex = 0;\n        int endIndex = nums.length - 1;\n\n        while (startIndex <= endIndex) {\n            int middleIndex = startIndex + (endIndex - startIndex) / 2;\n\n            if (target == nums[middleIndex]) {\n                return middleIndex;\n            }\n\n            if (nums[startIndex] <= nums[middleIndex]) {\n                if (target >= nums[startIndex] && target < nums[middleIndex]) {\n                    endIndex = middleIndex - 1;\n                } else {\n                    startIndex = middleIndex + 1;\n                }\n\n            } else {\n                if (target < nums[startIndex] && target >= nums[middleIndex]) {\n                    startIndex = middleIndex + 1;\n                } else {\n                    endIndex = middleIndex - 1;\n                }\n            }\n        }\n\n        return -1;\n    }\n\n    public static void main (String[] args) {\n\n        // Example 1:\n        int[] nums1 = {4,5,6,7,0,1,2};\n        int target1 = 0;\n        //  O/P: 4\n\n        // Example 2:\n        int[] nums2 = {4,5,6,7,0,1,2};\n        int target2 = 3;\n        //  O/P: -1\n\n        // Example 3:\n        int[] nums3 = {1};\n        int target3 = 0;\n        //  O/P: -1\n\n        System.out.println(search(nums1,target1));\n        System.out.println(search(nums2,target2));\n        System.out.println(search(nums3,target3));\n    }\n}\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Time Based Key Value Store (Expand/Collapse) "),(0,r.kt)("h3",{id:"-see-leetcode-problem-981"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/time-based-key-value-store/"},"\u2197 See LeetCode Problem #981")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.util.Map;\nimport java.util.HashMap;\nimport java.util.TreeMap;\n\npublic class TimeMap {\n    //  Declare timeMap for global use\n    private Map<String, TreeMap> timeMap;\n\n    public TimeMap() {\n        //  Initialize timeMap\n        timeMap = new HashMap<>();\n    }\n\n    public void set(String key, String value, int timestamp) {\n        //  If given key is not already in timeMap,\n        //      put key and a new tree map\n        if(!timeMap.containsKey(key)) {\n           timeMap.put(key, new TreeMap<>());\n        }\n\n        //  First get the value for the given key:\n        //      a TreeMap\n        //  Put timestamp as key and value as value in the TreeMap\n        timeMap.get(key).put(timestamp, value);\n\n    }\n\n    public String get(String key, int timestamp) {\n        //  Get the value (as TreeMap) for a given key\n        //      from the TimeMap, and\n        //      store it newly declared treeMap\n        TreeMap<Integer, String> treeMap = timeMap.get(key);\n\n        //  If treeMap is null, return an empty string\n        if (treeMap == null) {\n            return "";\n        }\n\n        //  Returns the greatest key less than or equal to\n        //      the given key, or null if there is no such key.\n        //  Declare an integer to store the greatest key (timestamp here)\n        //      less than or equal to the given key\n        Integer floorTimestamp = treeMap.floorKey(timestamp);\n\n        //  If floorTimestamp is null, return an empty string\n        if (floorTimestamp == null) {\n            return "";\n        }\n\n        //  Return the value from treeMap corresponding\n        //      to the greatest key (timestamp here)\n        //      less than or equal to the given key\n        return treeMap.get(floorTimestamp);\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        //Input\n        //["TimeMap", "set", "get", "get", "set", "get", "get"]\n        //[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4]\n        //, ["foo", 5]]\n\n        TimeMap timeMap = new TimeMap();\n        timeMap.set("foo", "bar", 1);\n//        timeMap.get("foo", 1);\n        System.out.println(timeMap.get("foo", 1));\n//        timeMap.get("foo", 3);\n        System.out.println(timeMap.get("foo", 3));\n        timeMap.set("foo", "bar2", 4);\n//        timeMap.get("foo", 4);\n        System.out.println(timeMap.get("foo", 4));\n//        timeMap.get("foo", 5);\n        System.out.println(timeMap.get("foo", 5));\n\n        //  O/P:\n        //[null, null, "bar", "bar", null, "bar2", "bar2"]\n\n    }\n}\n'))))))}c.isMDXComponent=!0}}]);