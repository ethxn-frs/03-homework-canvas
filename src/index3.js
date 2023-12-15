import * as Drawlib from "./drawlib.js";
import * as Color from "./color.js";


/**
 * @throws {string}
 * @returns {CanvasRenderingContext2D}
 * @param {string} id
 */
function get2DContextById(id) {
  const canvas = document.getElementById(id);
  if (canvas === null) {
    throw "No html element with id `canvas` found";
  }
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw "The selected element is not a canvas";
  }
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      return ctx;
    } else {
      throw "Error when getting the context";
    }
  } else {
    throw "`getContext` is not a property of the element. Please use a modern browser.";
  }
}

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

  Drawlib.renderCentered(tree, get2DContextById("canvas"));
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

  Drawlib.renderCentered(sheep, get2DContextById("canvas"));
}


drawTree(100, 400, 40);
drawTree(300, 400, 60);
drawTree(500, 400, 50);

drawSheep(700, 500);
drawSheep(200, 500);
drawSheep(400, 500);
