/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
 */




/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


var canFinishBFS = function(numCourses, prerequisites) { 
    //bascially cyclic detection in directed graph

   // 1) Build adjacency list for graph: pre -> list of courses dependent on pre
    const adj = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);

    for (const [course, pre] of prerequisites) {
        adj[pre].push(course);   // edge: pre -> course
        indegree[course]++;      // course has one more prerequisite
    }

    // adj shows who comes AFTER this letter
    console.log("Adj List:", adj);
    // “How many letters come BEFORE this letter?”
    console.log("Indegree:", indegree);
    
    

    // 2) Initialize queue with all courses having indegree 0 (no prerequisites)
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

        // 3) BFS: take courses with no remaining prerequisites
    let taken = 0;

    while (queue.length > 0) {
        const curr = queue.shift();
        taken++;

        // Reduce indegree of neighbors (courses depending on curr)
        for (const nei of adj[curr]) {
            indegree[nei]--;
            if (indegree[nei] === 0) {
                queue.push(nei);
            }
        }
    }

    // 4) If we managed to "take" all courses → no cycle
    return taken === numCourses;

    
};


function canFinishDfs(numCourses,prerequisites){

    //so what are we saying we start with course number 0 , 
    // and for that corresponding couse we see , if it has any prequisite ?
    //  , and if it has , se do this dfs check , and mark it with 1 ,
    //  that means we are trying combination with other course ,
    //  and when it returns we mark it with 2 , 
    // if we found a already visited marked cell , we return false , as it is a cycle yes ? 

    // step one create an adjancey list //
    const adjencyList = Array.from({length:numCourses},()=>[]);

     for (const [course, pre] of prerequisites) {
        // adj[b] = all courses that depend on b
        adjencyList[pre].push(course);   
    }

    const state = new Array(numCourses).fill(0);

          function dfs(course) {

            // If currently visiting → cycle
            if (state[course] === 1) return false;

            // If already fully processed → safe
            if (state[course] === 2) return true;

            // Mark as visiting
            state[course] = 1;

            // Visit all neighbors (courses that depend on this one)
            for (const nextCourse of adjencyList[course]) {
                if (!dfs(nextCourse)) {
                    return false; // cycle detected below
                }
            }

            // Mark as fully visited (safe)
            state[course] = 2;
            return true;
    }

        // Need to run DFS from every course (graph may be disconnected)
        for (let c = 0; c < numCourses; c++) {
            if (state[c] === 0) {
                if (!dfs(c)) return false;
            }
        }

}



console.log(canFinishBFS(2, [[1,0]])); // true
// console.log(canFinishDfs(2,[[1,0]])); //true

// console.log(canFinish(2, [[1,0],[0,1]])); // false
