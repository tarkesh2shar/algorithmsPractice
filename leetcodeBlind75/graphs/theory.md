# Universal Graph Templates (Node + Neighbors)

## 1. Visited Map
```js
const visited = new Map();
```

## 2. DFS Template
```js
function dfs(node) {
    if (!node || visited.has(node)) return;
    visited.set(node, true);
    for (const nei of node.neighbors) dfs(nei);
}
```

## 3. BFS Template
```js
function bfs(start) {
    const queue = [start];
    visited.set(start, true);
    while (queue.length) {
        const node = queue.shift();
        for (const nei of node.neighbors) {
            if (!visited.has(nei)) {
                visited.set(nei, true);
                queue.push(nei);
            }
        }
    }
}
```

## 4. Clone Graph Template
```js
function clone(node, map) {
    if (!node) return null;
    if (map.has(node)) return map.get(node);
    const copy = new _Node(node.val);
    map.set(node, copy);
    for (const nei of node.neighbors) copy.neighbors.push(clone(nei, map));
    return copy;
}
```

## 5. Cycle Detection (Undirected)
```js
function dfs(node, parent) {
    visited.add(node);
    for (const nei of node.neighbors) {
        if (nei === parent) continue;
        if (visited.has(nei)) return true;
        if (dfs(nei, node)) return true;
    }
    return false;
}
```

## 6. Cycle Detection (Directed)
```js
function dfs(node) {
    if (color.get(node) === 1) return true;
    if (color.get(node) === 2) return false;
    color.set(node, 1);
    for (const nei of node.neighbors) if (dfs(nei)) return true;
    color.set(node, 2);
    return false;
}
```

## 7. General Steps for Node-Based Graphs
1. Create visited map.
2. Use DFS/BFS template.
3. Handle cycles.
4. Use node.neighbors.
