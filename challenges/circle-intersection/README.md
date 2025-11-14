# Circle Intersection Challenge

## 🚀 Challenge

Create a page where clicking anywhere generates a circle of random radius (10–100px) centered at the click location.  
Only two circles may exist at a time—on the third click, remove the previous two.

After two circles are drawn, check whether they intersect and optionally calculate the overlapping area.

## 💡 Idea

- Capture click coordinates using JavaScript.
- Create absolutely positioned circles using CSS.
- Store circle data (x, y, r) and keep only the latest two.
- Use distance formula to detect intersection.
- Use circle-circle overlap formula to compute the intersection area.

## ✅ Solution

The project uses minimal HTML, CSS, and JavaScript.

- Click -> generate a new circle with random radius.
- Auto-removal ensures only two circles stay on screen.
- Math functions determine intersection + overlap.
