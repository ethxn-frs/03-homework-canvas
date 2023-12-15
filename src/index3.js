import * as Drawlib from "./drawlib.js";
import * as Color from "./color.js";

// arbre
/**
 * @param {number} x
 * @param {number} y
 * @param {number} size
 */
function drawTree(x, y, size) {
  const treeColor = Color.rgb(139, 69, 19); // Marron
  const leafColor = Color.rgb(34, 139, 34); // Vert

  const trunk = Drawlib.rectangle(treeColor, 20, size * 2);
  const leaves = Drawlib.circle(leafColor, size);

  const tree = Drawlib.group([
    Drawlib.move(x, y - size, trunk),
    Drawlib.move(x, y - size * 3, leaves)
  ]);

  Drawlib.renderCentered(tree, context);
}

//  mouton
/**
 * @param {number} x
 * @param {number} y
 */
function drawSheep(x, y) {
  const bodyColor = Color.rgb(255, 255, 255); // Blanc
  const headColor = Color.rgb(255, 220, 185); // Marron clair
  const legColor = Color.rgb(139, 69, 19); // Marron

  const body = Drawlib.circle(bodyColor, 30);
  const head = Drawlib.circle(headColor, 20);
  const leg1 = Drawlib.rectangle(legColor, 10, 40);
  const leg2 = Drawlib.rectangle(legColor, 10, 40);

  const sheep = Drawlib.group([
    Drawlib.move(x, y, body),
    Drawlib.move(x - 30, y - 30, head),
    Drawlib.move(x - 15, y + 20, leg1),
    Drawlib.move(x + 15, y + 20, leg2)
  ]);

  Drawlib.renderCentered(sheep, context);
}


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


drawTree(100, 400, 40);
drawTree(300, 400, 60);
drawTree(500, 400, 50);

drawSheep(700, 500);
drawSheep(200, 500);
drawSheep(400, 500);
