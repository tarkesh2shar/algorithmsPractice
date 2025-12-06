/**
 * You’re given a list of words from some alien language.
	•	The language uses lowercase English letters ('a'–'z'),
but their alphabetical order is different.
	•	The list of words is already sorted according to that alien order.
	•	Your job: figure out one valid order of characters in that alien alphabet.

If no valid order exists (contradiction), return "".

⸻

🔍 How do we get ordering info?

You compare adjacent words in the list.

Example words:

["wrt", "wrf", "er", "ett", "rftt"]


Compare pair by pair:
	1.	"wrt" vs "wrf"
	•	w == w
	•	r == r
	•	t != f → first differing chars
⇒ So t must come before f.
→ Edge: t → f.
	2.	"wrf" vs "er"
	•	w != e at first char → w must come before e.
→ Edge: w → e.
	3.	"er" vs "ett"
	•	e == e
	•	r != t → r comes before t.
→ Edge: r → t.
	4.	"ett" vs "rftt"
	•	e != r → e comes before r.
→ Edge: e → r.

Now we have a directed graph of constraints:

w → e → r → t → f
This is exactly a topological sort problem on a directed graph.


⚠️ Invalid case (important edge case)

Words like:
["abc", "ab"]

If earlier word is longer and starts with the later word as a prefix,
this is impossible in any dictionary order → return "".

Because in any lexicographic order: "ab" must come before "abc".

🧠 High-level solution steps
	1.	Build graph:
	•	Nodes = all unique letters that appear in the words.
	•	Directed edges from comparing adjacent words.
	2.	Detect prefix invalidity:
	•	If word1 starts with word2 and word1 is longer → invalid → return "".
	3.	Topological sort (Kahn’s BFS or DFS):
	•	If you get a full ordering of all letters → return it as a string.
	•	If you detect a cycle or can’t include all letters → return "".

⸻

If you want next:
	•	I can walk you through Kahn’s Algorithm on this exact example step-by-step,
	•	Or give you a Java / JS template for alienOrder(words) and let you fill logic,
	•	Or just give hints first (like we did with Course Schedule).
 */



function alienDictionary(words){		// similar question to course schedule ok ! //


	    // Edge case
    if (!words || words.length === 0) return "";
	
			// create adjency matrix (which letters depends on which letters)
			// create indegree( number of letters depending on the indexed letters)

		    // 1) Create adjacency list and indegree map for all unique chars
				const adj = new Map();      // char -> [neighbors]
				const indegree = new Map(); // char -> number

			// Initialize with all characters (even those with no edges)
				for (const word of words) {
					for (const ch of word) {
						if (!adj.has(ch)) adj.set(ch, []);
						if (!indegree.has(ch)) indegree.set(ch, 0);
					}
				}

				    // adj shows who comes AFTER this letter
				console.log("**adj",adj);
				    // “How many letters come BEFORE this letter?”
				console.log("**indegree",indegree);
				
			
				// now fill adjency and indegrees maps based on the the words provided //

				    // 2) Build graph by comparing adjacent words
    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];

        // Invalid case: ["abc", "ab"] -> no valid ordering
        if (w1.length > w2.length && w1.startsWith(w2)) {
            return "";
        }

        // Find first differing character
        const minLen = Math.min(w1.length, w2.length);
        for (let j = 0; j < minLen; j++) {
            const c1 = w1[j];
            const c2 = w2[j];

            if (c1 !== c2) {
                // c1 must come BEFORE c2 => edge c1 -> c2
                const neighbors = adj.get(c1);
			
                // Avoid duplicate edges (so indegree not double-counted)
                if (!neighbors.includes(c2)) {
                    neighbors.push(c2);
                    // adj.set(c1, neighbors);
                    indegree.set(c2, indegree.get(c2) + 1);
                }

                // Important: only first different char matters
                break;
            }
        }
    }

	console.log("-----------------------");
	
	console.log("**after filling now !!");
	
				    // adj shows who comes AFTER this letter
				console.log("**adj",adj);
				    // “How many letters come BEFORE this letter?”
				console.log("**indegree",indegree);



	// we start with bfs with letters with no indegrees //

	    // 3) BFS (Kahn's algo): start with chars having indegree 0
    const queue = [];
    for (const [ch, deg] of indegree.entries()) {
        if (deg === 0) {
            queue.push(ch);
        }
    }

    let result = "";

    while (queue.length > 0) {
        const ch = queue.shift();
        result += ch;

        for (const nei of adj.get(ch)) {
            indegree.set(nei, indegree.get(nei) - 1);
            if (indegree.get(nei) === 0) {
                queue.push(nei);
            }
        }
    }

    // 4) If result doesn't contain all chars → there is a cycle → invalid
    if (result.length !== indegree.size) {
        return "";
    }

    return result;
     
	
}


console.log(alienDictionary(["wrt", "wrf", "er", "ett", "rftt"]));


