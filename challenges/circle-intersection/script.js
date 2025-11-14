const stage = document.getElementById("stage");
const logOutput = document.getElementById("logOutput");

let circles = [];
const min = 20;
const max = 100;
const randomRadius = () => Math.floor(Math.random() * (max - min + 1)) + min;

const calculateDistance = (c1, c2) => Math.hypot(c1.x - c2.x, c1.y - c2.y);

const calculateOverlapArea = (r1, r2, d) => {
  if (d >= r1 + r2) return 0; // no overlap
  if (d <= Math.abs(r1 - r2))
    // one contains other
    return Math.PI * Math.min(r1, r2) ** 2;

  const a = Math.acos((d * d + r1 * r1 - r2 * r2) / (2 * d * r1));
  const b = Math.acos((d * d + r2 * r2 - r1 * r1) / (2 * d * r2));
  const term =
    0.5 *
    Math.sqrt((-d + r1 + r2) * (d + r1 - r2) * (d - r1 + r2) * (d + r1 + r2));

  return r1 * r1 * a + r2 * r2 * b - term;
};

const createCircleElement = (circle, index) => {
  const el = document.createElement("div");
  el.className = "circle";

  el.style.left = `${circle.x}px`;
  el.style.top = `${circle.y}px`;
  el.style.width = `${circle.r * 2}px`;
  el.style.height = `${circle.r * 2}px`;
  el.textContent = `${circle.r}px`;

  el.style.background =
    index === 0 ? "rgba(0,120,255,0.18)" : "rgba(255,90,40,0.18)";
  el.style.border =
    index === 0
      ? "2px solid rgba(0,120,255,0.35)"
      : "2px solid rgba(255,90,40,0.35)";

  stage.appendChild(el);
  circle.el = el;
};

const clearAllCircles = () => {
  circles.forEach(c => c.el.remove());
  circles = [];
};

const updateLog = msg => {
  logOutput.textContent = msg;
};

const handleTwoCircleLogic = () => {
  const [c1, c2] = circles;
  const d = calculateDistance(c1, c2);
  const combinedR = c1.r + c2.r;

  if (d < combinedR) {
    const area = Math.round(calculateOverlapArea(c1.r, c2.r, d));
    updateLog(`Circles intersect · Overlap area ≈ ${area}px²`);
    console.log("Circles intersect. Overlap area:", area);
  } else {
    updateLog("No intersection.");
    console.log("No intersection.");
  }
};

stage.addEventListener("click", e => {
  if (circles.length === 2) clearAllCircles();

  const newCircle = {
    x: e.clientX,
    y: e.clientY,
    r: randomRadius()
  };

  circles.push(newCircle);
  createCircleElement(newCircle, circles.length - 1);

  if (circles.length === 1) {
    updateLog("1 circle created.");
    console.log("Circle created:", newCircle);
  } else if (circles.length === 2) {
    handleTwoCircleLogic();
  }
});
