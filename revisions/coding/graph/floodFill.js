/**
 *  You are given an image represented by an m x n grid of integers.

    You are also given three integers sr, sc, and newColor.

    Perform a flood fill starting from the pixel (sr, sc):
    - Replace the starting pixel’s color
    - And all 4-directionally connected pixels with the same color
    with newColor.

    Return the modified image.


         Input:
        image = [
        [1,1,1],
        [1,1,0],
        [1,0,1]
        ]
        sr = 1, sc = 1, newColor = 2

        Output:
        [
        [2,2,2],
        [2,2,0],
        [2,0,1]
        ]

 */



function floodFill(image, sr, sc, newColor) {
    
        const originalColor = image[sr][sc];
        if (originalColor === newColor) return image;

        const rows = image.length;
        const cols = image[0].length;

        function dfs(r, c) {
            // bounds
            if (r < 0 || r >= rows || c < 0 || c >= cols) return;

            // ✅ only fill matching originalColor
            if (image[r][c] !== originalColor) return;

            // fill
            image[r][c] = newColor;

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        dfs(sr, sc);
        return image;
    }







    console.log(floodFill([
    [1,1,1],
    [1,1,0],
    [1,0,1]
    ], 1, 1, 2));
    

