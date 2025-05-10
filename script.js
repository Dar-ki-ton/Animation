/* FUNCTIONS MODULE ASSIGNMENT
Demonstrating knowledge of functions with parameters and return values using the myCanvas
*/

// *** Don't forget to add your graphics and random libraries! ***

// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Do not add/remove code from this section:
// ***************************************************
// Global Vars
let mouseX;
let mouseY;
var upKey = true;
var downKey = false;
var leftKey;
var rightKey;
var degree = 0;

var sceneNum = 0;

var greenHalo = [
  // Halo Lighting
  {
    width: 9,
    x: 185,
    y: 230,
    dy: 0.2,
    radiusX: 50,
    drx: -0.5,
    radiusY: 10,
    rotation: Math.PI / 12,
    degree: 0,
    color: `#00B00F`,
  },
  // Halo
  {
    width: 5,
    x: 185,
    y: 230,
    dy: 0.2,
    radiusX: 50,
    drx: -0.5,
    radiusY: 10,
    rotation: -Math.PI / 12,
    degree: 0,
    color: `#006A09`,
  },
];
var blueHalo = [
  // Halo Lighting
  {
    width: 9,
    x: 485,
    y: 215,
    dy: 0.5,
    radiusX: 50,
    radiusY: 10,
    rotation: 0,
    color: `#C1CDFF`,
  },
  {
    width: 8,
    x: 485,
    y: 225,
    dy: 0.49,
    radiusX: 40,
    radiusY: 10,
    rotation: 0,
    color: `#C1CDFF`,
  },
  {
    width: 7,
    x: 485,
    y: 235,
    dy: 0.48,
    radiusX: 30,
    radiusY: 9,
    rotation: 0,
    color: `#C1CDFF`,
  },
  {
    width: 6,
    x: 485,
    y: 245,
    dy: 0.47,
    radiusX: 20,
    radiusY: 7,
    rotation: 0,
    color: `#C1CDFF`,
  },
  {
    width: 5,
    x: 485,
    y: 255,
    dy: 0.46,
    radiusX: 10,
    radiusY: 5,
    rotation: 0,
    color: `#C1CDFF`,
  },
  // Halo
  {
    width: 5,
    x: 485,
    y: 215,
    dy: 0.5,
    radiusX: 50,
    radiusY: 10,
    rotation: 0,
    color: `#001983`,
  },
  {
    width: 4,
    x: 485,
    y: 225,
    dy: 0.49,
    radiusX: 40,
    radiusY: 10,
    rotation: 0,
    color: `#0024B9`,
  },
  {
    width: 3,
    x: 485,
    y: 235,
    dy: 0.48,
    radiusX: 30,
    radiusY: 9,
    rotation: 0,
    color: `#0034FF`,
  },
  {
    width: 2,
    x: 485,
    y: 245,
    dy: 0.47,
    radiusX: 20,
    radiusY: 7,
    rotation: 0,
    color: `#345DFF`,
  },
  {
    width: 1,
    x: 485,
    y: 255,
    dy: 0.46,
    radiusX: 10,
    radiusY: 5,
    rotation: 0,
    color: `#7893FF`,
  },
];
var yellowHalo = [
  // Halo Lighting
  {
    width: 9,
    dw: 0.15,
    x: 240,
    y: 150,
    dy: 0.2,
    radiusX: 50,
    radiusY: 10,
    rotation: 0,
    color: `#FF9300`,
  },
  // Halo
  {
    width: 5,
    dw: 0.05,
    x: 240,
    y: 150,
    dy: 0.2,
    radiusX: 50,
    radiusY: 10,
    rotation: 0,
    color: `#FFE400`,
  },
];
var purpleHalo = [
  // Halo Lighting
  {
    width: 9,
    x: 50,
    y: 170,
    dy: 0.25,
    yHome: 170,
    radiusX: 45,
    radiusY: 10,
    rotation: -Math.PI / 20,
    degree: 1,
    dr: 1 / 9,
    color: `#FF00F3`,
  },
  {
    width: 9,
    x: 65,
    y: 160,
    dy: 0.25,
    yHome: 155,
    radiusX: 35,
    radiusY: 10,
    rotation: Math.PI / 3,
    degree: 1,
    dr: 1 / 60,
    color: `#FF00F3`,
  },
  // Halo
  {
    width: 5,
    x: 50,
    y: 170,
    dy: 0.25,
    yHome: 170,
    radiusX: 45,
    radiusY: 10,
    rotation: -Math.PI / 20,
    degree: 1,
    dr: 1 / 9,
    color: `#9E00FF`,
  },
  {
    width: 5,
    x: 65,
    y: 160,
    dy: 0.25,
    yHome: 155,
    radiusX: 35,
    radiusY: 10,
    rotation: Math.PI / 3,
    degree: 1,
    dr: 1 / 60,
    color: `#9E00FF`,
  },
];
var redHalo = [
  // Halo Lighting
  {
    width: 9,
    x: 370,
    y: 160,
    dy: 0.4,
    radiusX: 30,
    radiusY: 10,
    rotation: (-Math.PI / 180) * 60,
    color: `#D62C29`,
  },
  {
    width: 9,
    x: 330,
    y: 160,
    dy: 0.4,
    radiusX: 30,
    radiusY: 10,
    rotation: (Math.PI / 180) * 60,
    color: `#D62C29`,
  },
  {
    width: 9,
    x: 350,
    y: 150,
    dy: 0.5,
    radiusX: 25,
    radiusY: 10,
    rotation: 0,
    color: `#D62C29`,
  },
  // Halo
  {
    width: 5,
    x: 370,
    y: 160,
    dy: 0.4,
    radiusX: 30,
    radiusY: 10,
    rotation: (-Math.PI / 180) * 60,
    color: `#552827`,
  },
  {
    width: 5,
    x: 330,
    y: 160,
    dy: 0.4,
    radiusX: 30,
    radiusY: 10,
    rotation: (Math.PI / 180) * 60,
    color: `#552827`,
  },
  {
    width: 5,
    x: 350,
    y: 150,
    dy: 0.5,
    radiusX: 25,
    radiusY: 10,
    rotation: 0,
    color: `#552827`,
  },
];

var frontRuinClouds = [];
for (var i = 0; i < 10; i++) {
  frontRuinClouds.push(getCloud(0));
}
var backRuinClouds = [];
for (var i = 0; i < 20; i++) {
  backRuinClouds.push(getCloud(0));
}

var dayClouds = [];
for (var i = 0; i < 10; i++) {
  dayClouds.push(getCloud(1));
}
var sun = { x: 300, y: 200, dy: Math.random() * 3 };

var nightClouds = [];
for (var i = 0; i < 10; i++) {
  nightClouds.push(getCloud(2));
}
var moon = {
  x: 300,
  y: 300,
  radius: 40,
  dy: Math.random() * 3,
  dr: Math.random(),
};
var allStars = [];
for (var i = 0; i < 500; i++) {
  allStars.push(getStar());
}

var rainClouds = [];
for (var i = 0; i < 20; i++) {
  rainClouds.push(getCloud(3));
}
var allRainDrops = [];
for (var i = 0; i < 500; i++) {
  allRainDrops.push(getRainDrop());
}

// mouse movement listener
cnv.addEventListener("mousemove", mousemoveHandler);

// Math Helper Functions
function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  // console.log(`x: ` + mouseX + ` y: ` + mouseY);
}
// ***************************************************

document.addEventListener(`keydown`, keydownHandler);

function keydownHandler(event) {
  console.log(event.code);
  if (event.code == `KeyW`) {
    upKey = true;
    downKey = false;
  } else if (event.code == `KeyS`) {
    downKey = true;
    upKey = false;
  } else if (event.code == `KeyA`) {
    sceneNum--;
    if (sceneNum < 0) {
      sceneNum = 3;
    }
    console.log(sceneNum);
  } else if (event.code == `KeyD`) {
    sceneNum++;
    if (sceneNum > 3) {
      sceneNum = 0;
    }
    console.log(sceneNum);
  }
}

requestAnimationFrame(drawScene);

function drawScene() {
  switch (sceneNum) {
    case 0:
      drawRuinScene();

      // Animation
      frontRuinClouds.forEach((cloud) => {
        // Change direction of the clouds
        if (upKey) {
          // Make the clouds go left
          cloud[`x`] -= cloud[`dx`];
          if (cloud[`x`] < -120) {
            cloud[`x`] = cnv.width + 120;
            cloud[`y`] = Math.random() * 120 - 20;
          }
        } else if (downKey) {
          // Make the cloud go right
          cloud[`x`] += cloud[`dx`];
          if (cloud[`x`] > 780) {
            cloud[`x`] = 0 - 120;
            cloud[`y`] = Math.random() * 120 - 20;
          }
        }
      });

      backRuinClouds.forEach((cloud) => {
        // Change direction of the clouds
        if (upKey) {
          // Make the cloud go up
          cloud[`y`] -= cloud[`dy`];
          if (cloud[`y`] < 0 - 180) {
            cloud[`x`] = Math.random() * cnv.width;
            cloud[`y`] = 780;
          }
        } else if (downKey) {
          // Makes the cloud go down
          cloud[`y`] += cloud[`dy`];
          if (cloud[`y`] > 780) {
            cloud[`x`] = Math.random() * cnv.width;
            cloud[`y`] = -180;
          }
        }
      });
      break;
    case 1:
      drawDayScene();

      // Animation
      dayClouds.forEach((cloud) => {
        // change the direction of the clouds
        if (upKey) {
          // The clouds go right
          cloud[`x`] += cloud[`dx`];
          if (cloud[`x`] > cnv.width + 120) {
            cloud[`x`] = -120;
            cloud[`y`] = Math.random() * 300;
          }
        } else if (downKey) {
          // The clouds go left
          cloud[`x`] -= cloud[`dx`];
          if (cloud[`x`] < -120) {
            cloud[`x`] = cnv.width + 120;
            cloud[`y`] = Math.random() * 300;
          }
        } else {
          // Default direction
          cloud[`x`] += cloud[`dx`];
          if (cloud[`x`] > cnv.width + 120) {
            cloud[`x`] = -120;
            cloud[`y`] = Math.random() * 300;
          }
        }
      });

      // Sun rises or falls
      if (upKey) {
        // The sun rises
        sun[`y`] -= sun[`dy`];
        if (sun[`y`] < -100) {
          sun[`y`] = cnv.height + 100;
          sun[`dy`] = Math.random() * 3 + 1;
        }
      } else if (downKey) {
        // The sun falls
        sun[`y`] += sun[`dy`];
        if (sun[`y`] > cnv.height + 100) {
          sun[`y`] = -100;
          sun[`dy`] = Math.random() * 3 + 1;
        }
      }

      break;
    case 2:
      // Sky
      const grad = ctx.createRadialGradient(300, 200, 100, 300, 200, 250);
      grad.addColorStop(0.3, `#3e6da3`);
      grad.addColorStop(0.5, `#2c5589`);
      grad.addColorStop(1, `#214377`);
      rect(0, 0, 600, 600, grad);

      // Animation
      if (upKey) {
        // Clouds shift right
        nightClouds.forEach((cloud) => {
          cloud[`x`] += cloud[`dx`];
          if (cloud[`x`] > cnv.width + 72) {
            cloud[`x`] = -72;
            cloud[`y`] = Math.random() * 200;
            cloud[`dx`] = Math.random() * 2;
          }
        });

        // Moon and stars rises
        moon[`y`] -= moon[`dy`];
        allStars.forEach((star) => {
          star[`y`] -= moon[`dy`];
        });
        if (moon[`y`] < -600) {
          moon[`y`] = cnv.height;
          moon[`dy`] = Math.random() * 3;
          allStars.forEach((star) => {
            star[`y`] = Math.random() * moon[`y`] + 300;
            star[`y`] -= moon[`dy`];
          });
        }

        // Stars rotate clockwise
        degree++;
        if (degree > 360) {
          degree = 0;
        }
      } else if (downKey) {
        // Clouds shift left
        nightClouds.forEach((cloud) => {
          cloud[`x`] -= cloud[`dx`];
          if (cloud[`x`] < -72) {
            cloud[`x`] = cnv.width + 72;
            cloud[`y`] = Math.random() * 200;
            cloud[`dx`] = Math.random() * 2;
          }
        });

        // Moon ands star fall
        moon[`y`] += moon[`dy`];
        allStars.forEach((star) => {
          star[`y`] += moon[`dy`];
        });
        if (moon[`y`] > 1200) {
          moon[`y`] = -350;
          moon[`dy`] = Math.random() * 3;
          allStars.forEach((star) => {
            star[`y`] = Math.random() * 600 - 650;
            star[`y`] += moon[`dy`];
          });
        }

        // Stars rotate counterclockwise
        degree--;
        if (degree < 0) {
          degree = 360;
        }
      }

      drawNightScene();
      break;
    case 3:
      drawRainScene();

      // Animation
      allRainDrops.forEach((raindrop) => {
        raindrop[`y`] += 10;
        raindrop[`y1`] += 10;
      });

      if (upKey) {
        // Sun rises up
        sun[`y`] -= sun[`dy`];
        if (sun[`y`] < -80) {
          sun[`y`] = 520;
          sun[`dy`] = Math.random() * 3;
        }

        // Clouds shift right
        rainClouds.forEach((cloud) => {
          cloud[`x`] += cloud[`dx`];
          if (cloud[`x`] > cnv.width + 130) {
            cloud[`x`] = -130;
            cloud[`dx`] = Math.random() * 2;
            cloud[`y`] = Math.random() * 100 + 50;
          }
        });

        // Raindrops fall right
        allRainDrops.forEach((raindrop) => {
          raindrop[`x`] += 5;
          raindrop[`x1`] += 5;
          if (raindrop[`x`] > cnv.width || raindrop[`y`] > cnv.height) {
            raindrop[`x`] = Math.random() * 900 - 300;
            raindrop[`x1`] = raindrop[`x`] + 5;
            raindrop[`y`] = -10;
            raindrop[`y1`] = 0;
          }
        });
      } else if (downKey) {
        // Sun falls down
        sun[`y`] += sun[`dy`];
        if (sun[`y`] > 520) {
          sun[`y`] = -80;
          sun[`dy`] = Math.random() * 3;
        }

        // Clouds shift left
        rainClouds.forEach((cloud) => {
          cloud[`x`] -= cloud[`dx`];
          if (cloud[`x`] < -130) {
            cloud[`x`] = cnv.width + 130;
            cloud[`dx`] = Math.random() * 2;
            cloud[`y`] = Math.random() * 100 + 50;
          }
        });

        // Raindrops fall left
        allRainDrops.forEach((raindrop) => {
          raindrop[`x1`] = raindrop[`x`] - 5;

          raindrop[`x`] -= 5;
          raindrop[`x1`] -= 5;
          if (raindrop[`x`] < 0 || raindrop[`y`] > cnv.height) {
            raindrop[`x`] = Math.random() * 900;
            raindrop[`x1`] = raindrop[`x`] - 5;
            raindrop[`y`] = -10;
            raindrop[`y1`] = 0;
          }
        });
      }
      break;
  }

  // Clones
  ctx.scale(9 / 10, 9 / 10);

  // Halo Animation
  greenHalo.forEach((halo) => {
    halo[`y`] -= halo[`dy`];
    if (halo[`y`] < 230) {
      halo[`dy`] = -0.2;
    } else if (halo[`y`] > 260) {
      halo[`dy`] = 0.2;
    }

    halo[`radiusX`] += halo[`drx`];
    if (halo[`radiusX`] == 0) {
      halo[`drx`] = 0.5;
    } else if (halo[`radiusX`] > 50) {
      halo[`drx`] = -0.5;
    }

    halo[`degree`]++;
    if (halo[`degree`] > 360) {
      halo[`degree`] = 0;
    }
  });

  // Halo Lighting
  ctx.save();
  ctx.translate(greenHalo[0][`x`], greenHalo[0][`y`]);
  ctx.rotate((Math.PI / 180) * greenHalo[0][`degree`]);
  ctx.translate(-greenHalo[0][`x`], -greenHalo[0][`y`]);
  drawHalo(
    greenHalo[0][`width`],
    greenHalo[0][`x`],
    greenHalo[0][`y`],
    greenHalo[0][`radiusX`],
    greenHalo[0][`radiusY`],
    greenHalo[0][`rotation`],
    greenHalo[0][`color`]
  );
  ctx.restore();

  // Top-Left Clone Halo
  ctx.save();
  ctx.translate(greenHalo[1][`x`], greenHalo[1][`y`]);
  ctx.rotate((Math.PI / 180) * -greenHalo[1][`degree`]);
  ctx.translate(-greenHalo[1][`x`], -greenHalo[1][`y`]);
  drawHalo(
    greenHalo[1][`width`],
    greenHalo[1][`x`],
    greenHalo[1][`y`],
    greenHalo[1][`radiusX`],
    greenHalo[1][`radiusY`],
    greenHalo[1][`rotation`],
    greenHalo[1][`color`]
  );
  ctx.restore();
  drawClone(180, 420); // Top-Left Clone

  // Top-Right Clone Halo
  blueHalo.forEach((halo) => {
    drawHalo(
      halo[`width`],
      halo[`x`],
      halo[`y`],
      halo[`radiusX`],
      halo[`radiusY`],
      halo[`rotation`],
      halo[`color`]
    );

    // Halo Animation
    halo[`y`] -= halo[`dy`];
    if (halo[`y`] < 200) {
      halo[`dy`] = -halo[`dy`];
    } else if (halo[`y`] > 260) {
      halo[`dy`] = -halo[`dy`];
    }
  });
  drawClone(480, 420); // Top-Right Clone

  ctx.scale(10 / 9, 10 / 9);
  ctx.scale(5 / 4, 5 / 4);

  // Center Clone Halo
  yellowHalo.forEach((halo) => {
    drawHalo(
      halo[`width`],
      halo[`x`],
      halo[`y`],
      halo[`radiusX`],
      halo[`radiusY`],
      halo[`rotation`],
      halo[`color`]
    );

    // Halo Animation
    halo[`y`] += halo[`dy`];
    if (halo[`y`] < 140) {
      halo[`dy`] = -halo[`dy`];
    } else if (halo[`y`] > 160) {
      halo[`dy`] = -halo[`dy`];
    }
  });

  // Halo Animation
  yellowHalo[0][`width`] += yellowHalo[0][`dw`];
  if (yellowHalo[0][`width`] > 15) {
    yellowHalo[0][`dw`] = -yellowHalo[0][`dw`];
  } else if (yellowHalo[0][`width`] < 9) {
    yellowHalo[0][`dw`] = -yellowHalo[0][`dw`];
  }
  yellowHalo[1][`width`] += yellowHalo[1][`dw`];
  if (yellowHalo[1][`width`] > 10) {
    yellowHalo[1][`dw`] = -yellowHalo[1][`dw`];
  } else if (yellowHalo[1][`width`] < 5) {
    yellowHalo[1][`dw`] = -yellowHalo[1][`dw`];
  }
  drawClone(235, 320); // Center Clone

  ctx.scale(4 / 5, 4 / 5);
  ctx.scale(3 / 2, 3 / 2);

  // Bottom-Left Clone Halo
  purpleHalo.forEach((halo) => {
    drawHalo(
      halo[`width`],
      halo[`x`],
      halo[`y`],
      halo[`radiusX`],
      halo[`radiusY`],
      halo[`rotation`] * halo[`degree`],
      halo[`color`]
    );

    // Halo Animation
    halo[`y`] -= halo[`dy`];
    if (halo[`y`] < halo[`yHome`] - 15) {
      halo[`dy`] = -0.25;
    } else if (halo[`y`] > halo[`yHome`] + 5) {
      halo[`dy`] = 0.25;
    }
  });

  // Halo Animation
  purpleHalo[0][`degree`] += purpleHalo[0][`dr`];
  if (purpleHalo[0][`degree`] > 9) {
    purpleHalo[0][`dr`] = -purpleHalo[0][`dr`];
  } else if (purpleHalo[0][`degree`] < 0) {
    purpleHalo[0][`dr`] = -purpleHalo[0][`dr`];
  }
  purpleHalo[2][`degree`] += purpleHalo[2][`dr`];
  if (purpleHalo[2][`degree`] > 9) {
    purpleHalo[2][`dr`] = -purpleHalo[2][`dr`];
  } else if (purpleHalo[2][`degree`] < 0) {
    purpleHalo[2][`dr`] = -purpleHalo[2][`dr`];
  }

  purpleHalo[1][`degree`] += purpleHalo[1][`dr`];
  if (purpleHalo[1][`degree`] > 5 / 3) {
    purpleHalo[1][`dr`] = -purpleHalo[1][`dr`];
  } else if (purpleHalo[1][`degree`] < 2 / 3) {
    purpleHalo[1][`dr`] = -purpleHalo[1][`dr`];
  }
  purpleHalo[3][`degree`] += purpleHalo[3][`dr`];
  if (purpleHalo[3][`degree`] > 5 / 3) {
    purpleHalo[3][`dr`] = -purpleHalo[3][`dr`];
  } else if (purpleHalo[3][`degree`] < 2 / 3) {
    purpleHalo[3][`dr`] = -purpleHalo[3][`dr`];
  }

  drawClone(45, 350); // Bottom-Left Clone

  // Bottom-Right Clone Halo
  redHalo.forEach((halo) => {
    drawHalo(
      halo[`width`],
      halo[`x`],
      halo[`y`],
      halo[`radiusX`],
      halo[`radiusY`],
      halo[`rotation`],
      halo[`color`]
    );

    // Halo Animation
    halo[`y`] += halo[`dy`];
    if (halo[`y`] > 190) {
      halo[`dy`] = -halo[`dy`];
    } else if (halo[`y`] < 150) {
      halo[`dy`] = -halo[`dy`];
    }
  });

  // Halo Animation
  redHalo[0][`rotation`] += 1 / 60;
  redHalo[1][`rotation`] -= 1 / 60;
  redHalo[3][`rotation`] += 1 / 60;
  redHalo[4][`rotation`] -= 1 / 60;

  drawClone(345, 350); // Bottom-Right Clone

  ctx.scale(2 / 3, 2 / 3);

  // Raindrops
  if (sceneNum == 3) {
    allRainDrops.forEach((drop) => {
      ctx.strokeStyle = drop[`color`];
      line(drop[`x`], drop[`y`], drop[`x1`], drop[`y1`]);
    });
  }

  requestAnimationFrame(drawScene);
}

// Background Functions
function drawRuinScene() {
  // Background
  rect(0, 0, 600, 600, `#980A00`);

  // Back Smoke Clouds
  backRuinClouds.forEach((cloud) => {
    drawCloud(
      cloud[`x`],
      cloud[`y`] + 100,
      2,
      cloud[`color`],
      cloud[`outline`]
    );
  });

  // Buildings
  ctx.scale(9 / 8, 9 / 8);

  ctx.scale(13 / 12, 13 / 12);
  drawBuilding(80, 250, `destroyed`);
  ctx.scale(4 / 5, 4 / 5);
  drawBuilding(350, 270, `skyscraper`);
  ctx.scale(5 / 4, 5 / 4);
  drawBuilding(420, 170, `skyscraper`);
  ctx.scale(12 / 13, 12 / 13);

  rect(0, 165, 125, 265, `#980A00`);
  rect(135, 165, 130, 265, `#980A00`);

  drawBuilding(60, 300, `normal`);
  drawBuilding(200, 300, `normal`);
  ctx.rotate(Math.PI / 10);
  drawBuilding(400, 200, `destroyed`);
  ctx.rotate(-Math.PI / 10);
  drawBuilding(480, 280, `destroyed`);

  ctx.scale(8 / 9, 8 / 9);

  // Front Smoke Clouds
  frontRuinClouds.forEach((cloud) => {
    drawCloud(cloud[`x`], cloud[`y`], 1, cloud[`color`], cloud[`outline`]);
  });

  // Smoke Rising
  drawSmokeSpiral(150, 70, 1);
  drawSmokeSpiral(400, 100, 1);
  drawSmokeSpiral(250, 390, 1);
  drawSmokeSpiral(600, 280, 1);

  ctx.scale(3 / 5, 3 / 5);
  drawSmokeSpiral(640, 400, 2);
  drawSmokeSpiral(910, 150, 2);
  drawSmokeSpiral(100, 220, 2);
  drawSmokeSpiral(600, 720, 2);
  drawSmokeSpiral(450, 220, 2);
  drawSmokeSpiral(320, 330, 3);
  drawSmokeSpiral(440, 400, 3);
  drawSmokeSpiral(150, 480, 3);
  drawSmokeSpiral(860, 410, 3);
  drawSmokeSpiral(770, 120, 3);
  ctx.scale(5 / 3, 5 / 3);

  // // Ground
  rect(0, 480, 600, 120, `#BD0F00`);
}

function drawDayScene() {
  // Sky
  const grad = ctx.createLinearGradient(0, 0, 0, 600);
  grad.addColorStop(0, `#063970`);
  grad.addColorStop(0.2, `#154c79`);
  grad.addColorStop(0.3, `#1e81b0`);
  grad.addColorStop(0.4, `#76b5c5`);
  grad.addColorStop(1, `#abdbe3`);
  rect(0, 0, 600, 600, grad);

  // Sun
  ellipse(sun[`x`], sun[`y`], 100, 100, 0, 0, 2 * Math.PI, `fill`, `#FF8A00`);
  ellipse(sun[`x`], sun[`y`], 95, 95, 0, 0, 2 * Math.PI, `fill`, `#FFAF00`);
  ellipse(sun[`x`], sun[`y`], 90, 90, 0, 0, 2 * Math.PI, `fill`, `#FFC500`);

  // Clouds
  dayClouds.forEach((cloud) => {
    drawCloud(cloud[`x`], cloud[`y`], 1, cloud[`color`], cloud[`outline`]);
  });

  // Hill Layer 3
  ctx.fillStyle = `#044C00`;
  ctx.beginPath();
  ctx.moveTo(0, 600);
  ctx.quadraticCurveTo(250, 350, 350, 350);
  ctx.bezierCurveTo(400, 350, 400, 300, 475, 300);
  ctx.quadraticCurveTo(550, 300, 600, 350);
  ctx.lineTo(600, 600);
  ctx.closePath();
  ctx.fill();

  // Hill Lighting
  ctx.fillStyle = `#466501`;
  ctx.beginPath();
  ctx.moveTo(0, 600);
  ctx.quadraticCurveTo(250, 350, 350, 350);
  ctx.bezierCurveTo(400, 350, 400, 300, 475, 300);
  ctx.quadraticCurveTo(550, 300, 600, 350);
  ctx.lineTo(600, 370);
  ctx.quadraticCurveTo(550, 320, 475, 320);
  ctx.bezierCurveTo(400, 320, 400, 370, 350, 370);
  ctx.quadraticCurveTo(250, 370, 20, 600);
  ctx.closePath();
  ctx.fill();

  // Hill Layer 2
  ctx.fillStyle = `#0AAD00`;
  ctx.beginPath();
  ctx.moveTo(0, 350);
  ctx.bezierCurveTo(150, 300, 200, 450, 300, 400);
  ctx.quadraticCurveTo(350, 380, 600, 600);
  ctx.lineTo(0, 600);
  ctx.closePath();
  ctx.fill();

  // Hill Lighting
  ctx.fillStyle = `#77AB02`;
  ctx.beginPath();
  ctx.moveTo(0, 350);
  ctx.bezierCurveTo(150, 300, 200, 450, 300, 400);
  ctx.quadraticCurveTo(350, 380, 600, 600);
  ctx.lineTo(580, 600);
  ctx.quadraticCurveTo(350, 400, 300, 420);
  ctx.bezierCurveTo(200, 470, 150, 320, 0, 370);
  ctx.closePath();
  ctx.fill();

  // Hill Layer 1
  rect(0, 480, 600, 120, `#0EFF00`);

  ctx.beginPath();
  ctx.moveTo(0, 480);
  ctx.quadraticCurveTo(180, 400, 250, 450);
  ctx.bezierCurveTo(350, 500, 500, 400, 600, 480);
  ctx.closePath();
  ctx.fill();

  // Hill Lighting
  ctx.fillStyle = `#AFFC03`;
  ctx.beginPath();
  ctx.moveTo(0, 480);
  ctx.quadraticCurveTo(180, 400, 250, 450);
  ctx.bezierCurveTo(350, 500, 500, 400, 600, 480);
  ctx.lineTo(600, 500);
  ctx.bezierCurveTo(450, 430, 400, 520, 250, 470);
  ctx.bezierCurveTo(250, 470, 180, 420, 0, 500);
  ctx.closePath();
  ctx.fill();
}

function drawNightScene() {
  // Stars
  allStars.forEach((star) => {
    ctx.save();
    ctx.translate(moon[`x`], moon[`y`]);
    ctx.rotate((Math.PI / 180) * degree);
    ctx.translate(-moon[`x`], -moon[`y`]);
    ellipse(
      star[`x`],
      star[`y`],
      star[`radius`],
      star[`radius`],
      0,
      0,
      2 * Math.PI,
      `fill`,
      star[`color`]
    );
    ctx.restore();
  });

  // Moon
  ellipse(
    moon[`x`],
    moon[`y`],
    moon[`radius`] + 25,
    moon[`radius`] + 25,
    0,
    0,
    2 * Math.PI,
    `fill`,
    `#6590bb`
  );
  ellipse(
    moon[`x`],
    moon[`y`],
    moon[`radius`] + 10,
    moon[`radius`] + 10,
    0,
    0,
    2 * Math.PI,
    `fill`,
    `#a5beda`
  );
  ellipse(
    moon[`x`],
    moon[`y`],
    moon[`radius`],
    moon[`radius`],
    0,
    0,
    2 * Math.PI,
    `fill`,
    `#fffffd`
  );

  // Mountain
  ctx.fillStyle = `#1c3b67`;
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.quadraticCurveTo(30, 290, 50, 270);
  ctx.bezierCurveTo(100, 310, 150, 220, 200, 250);
  ctx.lineTo(270, 240);
  ctx.lineTo(290, 270);
  ctx.bezierCurveTo(350, 310, 340, 270, 400, 250);
  ctx.quadraticCurveTo(420, 280, 450, 280);
  ctx.lineTo(480, 290);
  ctx.quadraticCurveTo(520, 280, 550, 280);
  ctx.quadraticCurveTo(570, 250, 600, 240);
  ctx.lineTo(600, 350);
  ctx.lineTo(0, 350);
  ctx.closePath();
  ctx.fill();

  // Clouds
  ctx.scale(3 / 5, 3 / 5);
  nightClouds.forEach((cloud) => {
    drawCloud(
      cloud[`x`] * (5 / 3),
      cloud[`y`] * (5 / 3),
      1,
      cloud[`color`],
      cloud[`outline`]
    );
  });
  ctx.scale(5 / 3, 5 / 3);

  // Lake
  rect(0, 350, 600, 250, `#5e90c1`);

  // Land
  ctx.fillStyle = `#132c4b`;
  ctx.beginPath();
  ctx.moveTo(0, 340);
  ctx.quadraticCurveTo(100, 330, 200, 360);
  ctx.bezierCurveTo(220, 370, 50, 360, 150, 420);
  ctx.quadraticCurveTo(240, 430, 270, 450);
  ctx.quadraticCurveTo(200, 470, 120, 470);
  ctx.bezierCurveTo(210, 490, 230, 460, 240, 500);
  ctx.lineTo(0, 500);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(600, 320);
  ctx.quadraticCurveTo(500, 320, 400, 350);
  ctx.bezierCurveTo(360, 350, 450, 380, 500, 380);
  ctx.quadraticCurveTo(420, 390, 350, 410);
  ctx.bezierCurveTo(330, 420, 440, 440, 400, 450);
  ctx.bezierCurveTo(380, 460, 440, 480, 400, 500);
  ctx.lineTo(600, 500);
  ctx.closePath();
  ctx.fill();

  // Shore
  rect(0, 500, 600, 120, `#051628`);

  ctx.fillStyle = `#051628`;
  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.lineTo(10, 485);
  ctx.lineTo(25, 485);
  ctx.lineTo(45, 500);
  ctx.lineTo(60, 480);
  ctx.lineTo(120, 485);
  ctx.lineTo(150, 500);
  ctx.lineTo(190, 490);
  ctx.lineTo(210, 495);
  ctx.lineTo(240, 495);
  ctx.lineTo(290, 480);
  ctx.lineTo(320, 485);
  ctx.lineTo(330, 480);
  ctx.lineTo(360, 480);
  ctx.lineTo(400, 485);
  ctx.lineTo(420, 490);
  ctx.lineTo(430, 485);
  ctx.lineTo(480, 480);
  ctx.lineTo(540, 490);
  ctx.lineTo(560, 480);
  ctx.lineTo(590, 485);
  ctx.lineTo(600, 490);
  ctx.lineTo(600, 500);
  ctx.closePath();
  ctx.fill();
}

function drawRainScene() {
  // Sky
  rect(0, 0, 600, 600, `#35606C`);

  // Sun
  ellipse(sun[`x`], sun[`y`], 80, 80, 0, 0, 2 * Math.PI, `fill`, `#8C6747`);
  ellipse(sun[`x`], sun[`y`], 65, 65, 0, 0, 2 * Math.PI, `fill`, `#BB9151`);
  ellipse(sun[`x`], sun[`y`], 55, 55, 0, 0, 2 * Math.PI, `fill`, `#CCB150`);
  ellipse(sun[`x`], sun[`y`], 50, 50, 0, 0, 2 * Math.PI, `fill`, `#F5F6F7`);

  // Buildings
  drawBuilding(80, 320, `destroyed`);
  ctx.rotate(-Math.PI / 6);
  drawBuilding(30, 440, `normal`);
  ctx.rotate(Math.PI / 6);

  ctx.scale(3 / 5, 3 / 5);
  drawBuilding(700, 550, `skyscraper`);
  ctx.scale(5 / 3, 5 / 3);

  ctx.scale(3 / 4, 3 / 4);
  drawBuilding(700, 390, `skyscraper`);
  ctx.scale(4 / 3, 4 / 3);

  // Clouds
  rainClouds.forEach((cloud) => {
    drawCloud(cloud[`x`], cloud[`y`], 2, cloud[`color`], cloud[`outline`]);
  });

  // Ground
  rect(0, 470, 600, 130, `#46555C`);

  ctx.fillStyle = `#46555C`;
  ctx.beginPath();
  ctx.moveTo(0, 470);
  ctx.lineTo(10, 455);
  ctx.lineTo(25, 455);
  ctx.lineTo(45, 470);
  ctx.lineTo(60, 450);
  ctx.lineTo(120, 455);
  ctx.lineTo(150, 470);
  ctx.lineTo(190, 460);
  ctx.lineTo(210, 465);
  ctx.lineTo(240, 465);
  ctx.lineTo(290, 450);
  ctx.lineTo(320, 465);
  ctx.lineTo(330, 450);
  ctx.lineTo(360, 450);
  ctx.lineTo(400, 455);
  ctx.lineTo(420, 460);
  ctx.lineTo(430, 455);
  ctx.lineTo(480, 450);
  ctx.lineTo(540, 460);
  ctx.lineTo(560, 450);
  ctx.lineTo(590, 455);
  ctx.lineTo(600, 460);
  ctx.lineTo(600, 470);
  ctx.closePath();
  ctx.fill();
}

// Draw Functions
function drawClone(cloneX, cloneY) {
  // Left Arm
  rect(cloneX - 65, cloneY - 55, 40, 105, `black`);

  // Left Hand
  ellipse(cloneX - 45, cloneY + 65, 20, 20, 0, 0, 2 * Math.PI, `fill`, `black`);

  // Body
  triangle(
    cloneX + 5,
    cloneY - 95,
    cloneX - 45,
    cloneY - 55,
    cloneX + 45,
    cloneY - 55,
    `fill`,
    `#1200FF`
  );
  rect(cloneX - 45, cloneY - 55, 90, 100);

  // Body Shadow
  polygon(
    cloneX - 20,
    cloneY - 75,
    cloneX,
    cloneY - 75,
    cloneX - 25,
    cloneY - 55,
    cloneX - 45,
    cloneY - 55,
    true,
    `fill`,
    `#040040`
  );
  rect(cloneX - 45, cloneY - 55, 20, 100, `#040040`);

  // Head
  rect(cloneX - 35, cloneY - 155, 80, 80, `#D48A29`);

  // Face Shadow
  rect(cloneX - 35, cloneY - 155, 80, 30, `black`);
  triangle(
    cloneX - 35,
    cloneY - 125,
    cloneX + 5,
    cloneY - 125,
    cloneX - 35,
    cloneY - 115,
    `fill`,
    `black`
  );
  triangle(
    cloneX + 45,
    cloneY - 125,
    cloneX + 5,
    cloneY - 125,
    cloneX + 45,
    cloneY - 115,
    `fill`,
    `black`
  );

  // Jaw Lines
  ctx.lineWidth = 1;
  ctx.strokeStyle = `black`;
  line(cloneX - 30, cloneY - 80, cloneX, cloneY - 90);
  line(cloneX + 40, cloneY - 80, cloneX + 10, cloneY - 90);

  // Eyes
  ellipse(cloneX - 15, cloneY - 135, 5, 10, 0, 0, 2 * Math.PI, `fill`, `red`);
  ellipse(cloneX + 25, cloneY - 135, 5, 10, 0, 0, 2 * Math.PI, `fill`, `red`);

  // Left Leg
  polygon(
    cloneX - 45,
    cloneY + 45,
    cloneX - 60,
    cloneY + 130,
    cloneX - 15,
    cloneY + 125,
    cloneX + 5,
    cloneY + 45,
    true,
    `fill`,
    `#0011FF`
  );

  // Left Leg Shadow
  polygon(
    cloneX - 54,
    cloneY + 95,
    cloneX - 60,
    cloneY + 130,
    cloneX - 15,
    cloneY + 125,
    cloneX - 8,
    cloneY + 95,
    true,
    `fill`,
    `black`
  );

  // Right Leg
  polygon(
    cloneX + 45,
    cloneY + 45,
    cloneX + 60,
    cloneY + 155,
    cloneX + 10,
    cloneY + 145,
    cloneX - 5,
    cloneY + 45,
    true,
    `fill`,
    `#080074`
  );

  // Right Leg Shadow
  polygon(
    cloneX - 5,
    cloneY + 45,
    cloneX + 15,
    cloneY + 45,
    cloneX + 30,
    cloneY + 149,
    cloneX + 10,
    cloneY + 145,
    true,
    `fill`,
    `#040040`
  );

  // Right Hand
  ellipse(
    cloneX + 45,
    cloneY + 65,
    20,
    20,
    0,
    0,
    2 * Math.PI,
    `fill`,
    `#D48A29`
  );

  // Right Arm
  rect(cloneX + 25, cloneY - 55, 40, 105, `#1542A3`);
}

function drawBuilding(towerX, towerY, towerType) {
  switch (towerType) {
    case (towerType = `normal`):
      rect(towerX - 50, towerY - 110, 100, 240, `#252525`);
      rect(towerX - 50, towerY - 130, 100, 15, `#252525`);

      // Floor 5
      rect(towerX - 60, towerY - 80, 120, 10, `#252525`);
      rect(towerX - 50, towerY - 80, 100, 10, `#980A00`);
      // Floor 4
      rect(towerX - 60, towerY - 40, 120, 10, `#252525`);
      rect(towerX - 50, towerY - 40, 100, 10, `#980A00`);
      // Floor 3
      rect(towerX - 60, towerY, 120, 10, `#252525`);
      rect(towerX - 50, towerY, 100, 10, `#980A00`);
      // Floor 2
      rect(towerX - 60, towerY + 40, 120, 10, `#252525`);
      rect(towerX - 50, towerY + 40, 100, 10, `#980A00`);
      // Floor 1
      rect(towerX - 60, towerY + 80, 120, 10, `#252525`);
      rect(towerX - 50, towerY + 80, 100, 10, `#980A00`);
      // Main Floor
      rect(towerX - 60, towerY + 120, 120, 10, `#252525`);
      break;
    case (towerType = `skyscraper`):
      rect(towerX - 60, towerY - 50, 120, 280, `#252525`);
      rect(towerX - 50, towerY - 50, 5, 280, `#980A00`);
      rect(towerX - 30, towerY - 50, 5, 280, `#980A00`);
      rect(towerX - 5, towerY - 50, 10, 280, `#980A00`);
      rect(towerX + 25, towerY - 50, 5, 280, `#980A00`);
      rect(towerX + 45, towerY - 50, 5, 280, `#980A00`);

      rect(towerX - 50, towerY - 115, 100, 60, `#252525`);
      rect(towerX - 30, towerY - 115, 5, 60, `#980A00`);
      rect(towerX - 5, towerY - 115, 10, 280, `#980A00`);
      rect(towerX + 25, towerY - 115, 5, 60, `#980A00`);

      rect(towerX - 25, towerY - 160, 50, 40, `#252525`);
      rect(towerX - 5, towerY - 160, 10, 280, `#980A00`);

      rect(towerX - 5, towerY - 230, 10, 70, `#252525`);
      break;
    case (towerType = `destroyed`):
      rect(towerX - 60, towerY - 150, 10, 300, `#3B3B3B`);
      rect(towerX - 20, towerY - 150, 10, 300, `#3B3B3B`);
      rect(towerX + 10, towerY - 150, 10, 300, `#3B3B3B`);
      rect(towerX + 50, towerY - 150, 10, 300, `#3B3B3B`);
      rect(towerX - 60, towerY - 140, 120, 10, `#3B3B3B`);
      rect(towerX - 60, towerY - 110, 120, 10, `#3B3B3B`);
      rect(towerX - 60, towerY - 50, 120, 10, `#3B3B3B`);
      rect(towerX - 60, towerY - 10, 120, 10, `#3B3B3B`);

      ctx.fillStyle = `#252525`;
      // Bottom
      ctx.beginPath();
      ctx.moveTo(towerX - 60, towerY + 150);
      ctx.lineTo(towerX - 60, towerY - 10);
      ctx.lineTo(towerX - 30, towerY);
      ctx.lineTo(towerX - 20, towerY - 30);
      ctx.lineTo(towerX - 10, towerY - 10);
      ctx.lineTo(towerX + 20, towerY - 20);
      ctx.lineTo(towerX + 50, towerY + 20);
      ctx.lineTo(towerX + 60, towerY - 30);
      ctx.lineTo(towerX + 60, towerY + 150);
      ctx.closePath();
      ctx.fill();

      // Top
      ctx.beginPath();
      ctx.moveTo(towerX - 60, towerY - 50);
      ctx.lineTo(towerX - 60, towerY - 130);
      ctx.lineTo(towerX - 50, towerY - 110);
      ctx.lineTo(towerX - 30, towerY - 130);
      ctx.lineTo(towerX - 10, towerY - 90);
      ctx.lineTo(towerX + 30, towerY - 150);
      ctx.lineTo(towerX + 60, towerY - 150);
      ctx.lineTo(towerX + 60, towerY - 30);
      ctx.lineTo(towerX + 40, towerY - 40);
      ctx.lineTo(towerX + 20, towerY - 60);
      ctx.lineTo(towerX - 20, towerY - 50);
      ctx.lineTo(towerX - 40, towerY - 20);
      ctx.closePath();
      ctx.fill();
      break;
  }
}

function drawCloud(cloudX, cloudY, cloudType, cloudColor, outlineColor) {
  switch (cloudType) {
    case (cloudType = 1):
      ctx.fillStyle = cloudColor;
      ctx.beginPath();
      ctx.moveTo(cloudX - 30, cloudY + 10);
      ctx.bezierCurveTo(
        cloudX - 5,
        cloudY + 30,
        cloudX + 45,
        cloudY + 30,
        cloudX + 70,
        cloudY + 10
      );
      ctx.bezierCurveTo(
        cloudX + 100,
        cloudY + 30,
        cloudX + 120,
        cloudY - 10,
        cloudX + 90,
        cloudY - 20
      );
      ctx.bezierCurveTo(
        cloudX + 90,
        cloudY - 40,
        cloudX + 80,
        cloudY - 70,
        cloudX + 50,
        cloudY - 50
      );
      ctx.quadraticCurveTo(cloudX + 50, cloudY - 70, cloudX + 30, cloudY - 70);
      ctx.bezierCurveTo(
        cloudX - 10,
        cloudY - 100,
        cloudX - 60,
        cloudY - 70,
        cloudX - 80,
        cloudY - 40
      );
      ctx.bezierCurveTo(
        cloudX - 120,
        cloudY - 40,
        cloudX - 110,
        cloudY + 40,
        cloudX - 60,
        cloudY + 20
      );
      ctx.quadraticCurveTo(cloudX - 40, cloudY + 40, cloudX - 30, cloudY + 10);
      ctx.closePath();
      ctx.fill();

      // Cloud Outline
      ctx.strokeStyle = outlineColor;
      ctx.beginPath();
      ctx.moveTo(cloudX - 30, cloudY + 10);
      ctx.bezierCurveTo(
        cloudX - 5,
        cloudY + 30,
        cloudX + 45,
        cloudY + 30,
        cloudX + 70,
        cloudY + 10
      );
      ctx.bezierCurveTo(
        cloudX + 100,
        cloudY + 30,
        cloudX + 120,
        cloudY - 10,
        cloudX + 90,
        cloudY - 20
      );
      ctx.bezierCurveTo(
        cloudX + 90,
        cloudY - 40,
        cloudX + 80,
        cloudY - 70,
        cloudX + 50,
        cloudY - 50
      );
      ctx.quadraticCurveTo(cloudX + 50, cloudY - 70, cloudX + 30, cloudY - 70);
      ctx.bezierCurveTo(
        cloudX - 10,
        cloudY - 100,
        cloudX - 60,
        cloudY - 70,
        cloudX - 80,
        cloudY - 40
      );
      ctx.bezierCurveTo(
        cloudX - 120,
        cloudY - 40,
        cloudX - 110,
        cloudY + 40,
        cloudX - 60,
        cloudY + 20
      );
      ctx.quadraticCurveTo(cloudX - 40, cloudY + 40, cloudX - 30, cloudY + 10);
      ctx.closePath();
      ctx.stroke();
      break;
    case (cloudType = 2):
      ctx.fillStyle = cloudColor;
      ctx.beginPath();
      ctx.moveTo(cloudX - 15, cloudY - 105);
      ctx.quadraticCurveTo(
        cloudX + 35,
        cloudY - 145,
        cloudX + 85,
        cloudY - 105
      );
      ctx.bezierCurveTo(
        cloudX + 105,
        cloudY - 115,
        cloudX + 135,
        cloudY - 95,
        cloudX + 125,
        cloudY - 75
      );
      ctx.bezierCurveTo(
        cloudX + 135,
        cloudY - 55,
        cloudX + 105,
        cloudY - 35,
        cloudX + 85,
        cloudY - 55
      );
      ctx.quadraticCurveTo(cloudX + 105, cloudY - 35, cloudX + 75, cloudY - 25);
      ctx.bezierCurveTo(
        cloudX + 85,
        cloudY - 5,
        cloudX + 65,
        cloudY + 75,
        cloudX + 45,
        cloudY + 45
      );
      ctx.quadraticCurveTo(cloudX + 35, cloudY + 145, cloudX + 5, cloudY - 5);
      ctx.quadraticCurveTo(cloudX - 15, cloudY - 5, cloudX - 15, cloudY - 35);
      ctx.quadraticCurveTo(cloudX - 35, cloudY + 75, cloudX - 45, cloudY - 5);
      ctx.quadraticCurveTo(cloudX - 55, cloudY + 145, cloudX - 65, cloudY - 55);
      ctx.bezierCurveTo(
        cloudX - 95,
        cloudY - 25,
        cloudX - 135,
        cloudY - 85,
        cloudX - 105,
        cloudY - 95
      );
      ctx.quadraticCurveTo(
        cloudX - 115,
        cloudY - 125,
        cloudX - 15,
        cloudY - 105
      );
      ctx.closePath();
      ctx.fill();

      // Cloud Outline
      ctx.strokeStyle = outlineColor;
      ctx.beginPath();
      ctx.moveTo(cloudX - 15, cloudY - 105);
      ctx.quadraticCurveTo(
        cloudX + 35,
        cloudY - 145,
        cloudX + 85,
        cloudY - 105
      );
      ctx.bezierCurveTo(
        cloudX + 105,
        cloudY - 115,
        cloudX + 135,
        cloudY - 95,
        cloudX + 125,
        cloudY - 75
      );
      ctx.bezierCurveTo(
        cloudX + 135,
        cloudY - 55,
        cloudX + 105,
        cloudY - 35,
        cloudX + 85,
        cloudY - 55
      );
      ctx.quadraticCurveTo(cloudX + 105, cloudY - 35, cloudX + 75, cloudY - 25);
      ctx.bezierCurveTo(
        cloudX + 85,
        cloudY - 5,
        cloudX + 65,
        cloudY + 75,
        cloudX + 45,
        cloudY + 45
      );
      ctx.quadraticCurveTo(cloudX + 35, cloudY + 145, cloudX + 5, cloudY - 5);
      ctx.quadraticCurveTo(cloudX - 15, cloudY - 5, cloudX - 15, cloudY - 35);
      ctx.quadraticCurveTo(cloudX - 35, cloudY + 75, cloudX - 45, cloudY - 5);
      ctx.quadraticCurveTo(cloudX - 55, cloudY + 145, cloudX - 65, cloudY - 55);
      ctx.bezierCurveTo(
        cloudX - 95,
        cloudY - 25,
        cloudX - 135,
        cloudY - 85,
        cloudX - 105,
        cloudY - 95
      );
      ctx.quadraticCurveTo(
        cloudX - 115,
        cloudY - 125,
        cloudX - 15,
        cloudY - 105
      );
      ctx.closePath();
      ctx.stroke();
      break;
  }
}

function drawSmokeSpiral(spiralX, spiralY, spiralType) {
  switch (spiralType) {
    case (spiralType = 1):
      ctx.fillStyle = `black`;
      ctx.beginPath();
      ctx.moveTo(spiralX - 15, spiralY + 50);
      ctx.bezierCurveTo(
        spiralX + 25,
        spiralY,
        spiralX - 35,
        spiralY,
        spiralX - 15,
        spiralY - 50
      );
      ctx.bezierCurveTo(
        spiralX - 55,
        spiralY,
        spiralX + 5,
        spiralY,
        spiralX - 15,
        spiralY + 50
      );
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(spiralX - 20, spiralY + 50);
      ctx.quadraticCurveTo(spiralX - 5, spiralY + 20, spiralX - 40, spiralY);
      ctx.quadraticCurveTo(
        spiralX - 15,
        spiralY + 20,
        spiralX - 20,
        spiralY + 50
      );
      ctx.closePath();
      ctx.fill();
      break;
    case (spiralType = 2):
      ctx.fillStyle = `black`;
      ctx.beginPath();
      ctx.moveTo(spiralX + 5, spiralY + 50);
      ctx.bezierCurveTo(
        spiralX + 35,
        spiralY,
        spiralX - 5,
        spiralY - 10,
        spiralX + 5,
        spiralY - 50
      );
      ctx.bezierCurveTo(
        spiralX - 5,
        spiralY - 30,
        spiralX - 25,
        spiralY - 50,
        spiralX + 5,
        spiralY - 100
      );
      ctx.bezierCurveTo(
        spiralX - 75,
        spiralY - 50,
        spiralX + 5,
        spiralY,
        spiralX - 45,
        spiralY
      );
      ctx.quadraticCurveTo(spiralX + 5, spiralY, spiralX + 5, spiralY + 50);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(spiralX - 5, spiralY + 100);
      ctx.quadraticCurveTo(
        spiralX + 15,
        spiralY + 30,
        spiralX + 45,
        spiralY + 30
      );
      ctx.bezierCurveTo(
        spiralX + 5,
        spiralY,
        spiralX + 35,
        spiralY + 10,
        spiralX + 5,
        spiralY + 60
      );
      ctx.quadraticCurveTo(
        spiralX - 5,
        spiralY - 10,
        spiralX - 45,
        spiralY + 10
      );
      ctx.quadraticCurveTo(
        spiralX - 5,
        spiralY + 30,
        spiralX - 5,
        spiralY + 100
      );
      ctx.closePath();
      ctx.fill();
      break;
    case (spiralType = 3):
      ctx.fillStyle = `black`;
      ctx.beginPath();
      ctx.moveTo(spiralX + 25, spiralY + 95);
      ctx.bezierCurveTo(
        spiralX + 5,
        spiralY + 25,
        spiralX + 45,
        spiralY + 15,
        spiralX + 25,
        spiralY - 5
      );
      ctx.bezierCurveTo(
        spiralX + 15,
        spiralY - 15,
        spiralX + 55,
        spiralY - 25,
        spiralX + 25,
        spiralY - 55
      );
      ctx.bezierCurveTo(
        spiralX + 25,
        spiralY - 15,
        spiralX - 15,
        spiralY - 35,
        spiralX - 5,
        spiralY - 5
      );
      ctx.bezierCurveTo(
        spiralX + 5,
        spiralY + 45,
        spiralX - 55,
        spiralY + 45,
        spiralX + 25,
        spiralY + 95
      );
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(spiralX + 25, spiralY - 60);
      ctx.quadraticCurveTo(
        spiralX + 15,
        spiralY - 75,
        spiralX + 45,
        spiralY - 95
      );
      ctx.quadraticCurveTo(
        spiralX - 5,
        spiralY - 75,
        spiralX + 25,
        spiralY - 60
      );
      ctx.closePath();
      ctx.fill();
      break;
  }
}

function drawHalo(
  haloWidth,
  haloX,
  haloY,
  haloRadiusX,
  haloRadiusY,
  HaloRotation,
  haloColor
) {
  ctx.lineWidth = haloWidth;
  ellipse(
    haloX,
    haloY,
    haloRadiusX,
    haloRadiusY,
    HaloRotation,
    0,
    2 * Math.PI,
    `stroke`,
    haloColor
  );
}

// Helper Functions
function getRainDrop() {
  var rainDrop = {
    x: Math.random() * 900 - 300,
    y: Math.random() * cnv.height,
    color: `#8EB7C5`,
  };
  rainDrop.x1 = rainDrop[`x`] + 5;
  rainDrop.y1 = rainDrop[`y`] + 10;
  return rainDrop;
}

function getStar() {
  var star = {
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    radius: Math.random() * 3 + 2,
    dr: Math.random(),
    color: `#c4ddeb`,
  };
  if (
    star[`x`] > moon[`x`] - 65 &&
    star[`x`] < moon[`x`] + 65 &&
    star[`y`] > moon[`y`] - 65 &&
    star[`y`] < moon[`y`] + 65
  ) {
    star[`x`] = Math.random() * cnv.width;
    star[`y`] = Math.random() * cnv.height;
  }
  return star;
}

function getCloud(scene) {
  var cloud;
  if (scene == 0) {
    cloud = {
      x: Math.random() * cnv.width,
      y: Math.random() * 200 - 20,
      dx: Math.random() * 3,
      dy: Math.random() * 3,
      color: `#0E0E0E`,
      outline: `#980A00`,
    };
  } else if (scene == 1) {
    cloud = {
      x: Math.random() * cnv.width,
      y: Math.random() * 300,
      dx: Math.random() * 3 + 1,
      color: `#FFFFFF`,
      outline: `#0089FF`,
    };
  } else if (scene == 2) {
    cloud = {
      x: Math.random() * cnv.width,
      y: Math.random() * 200,
      dx: Math.random() * 2,
      color: `#1f4278`,
      outline: `#81accf`,
    };
  } else if (scene == 3) {
    cloud = {
      x: Math.random() * cnv.width,
      y: Math.random() * 100 + 50,
      dx: Math.random() * 2,
      color: `#0F1F27`,
      outline: `#35606C`,
    };
  }
  return cloud;
}

function rect(rectX, rectY, rectW, rectH, color) {
  ctx.fillStyle = color;
  ctx.fillRect(rectX, rectY, rectW, rectH);
}

function triangle(triX1, triY1, triX2, triY2, triX3, triY3, triType, color) {
  if (triType == `fill`) {
    ctx.fillStyle = color;
  } else if (triType == `stroke`) {
    ctx.strokeStyle = color;
  }
  ctx.beginPath();
  ctx.moveTo(triX1, triY1);
  ctx.lineTo(triX2, triY2);
  ctx.lineTo(triX3, triY3);
  ctx.closePath();
  if (triType == `fill`) {
    ctx.fill();
  } else if (triType == `stroke`) {
    ctx.stroke();
  }
}

function line(lineX1, lineY1, lineX2, lineY2) {
  ctx.beginPath();
  ctx.moveTo(lineX1, lineY1);
  ctx.lineTo(lineX2, lineY2);
  ctx.stroke();
}

function polygon(
  polyX1,
  polyY1,
  polyX2,
  polyY2,
  polyX3,
  polyY3,
  polyX4,
  polyY4,
  polyPath,
  polyType,
  color
) {
  if (polyType == `fill`) {
    ctx.fillStyle = color;
  } else if (polyType == `stroke`) {
    ctx.strokeStyle = color;
  }
  ctx.beginPath();
  ctx.moveTo(polyX1, polyY1);
  ctx.lineTo(polyX2, polyY2);
  ctx.lineTo(polyX3, polyY3);
  ctx.lineTo(polyX4, polyY4);
  if (polyPath) {
    ctx.closePath();
  }
  if (polyType == `fill`) {
    ctx.fill();
  } else if (polyType == `stroke`) {
    ctx.stroke();
  }
}

function ellipse(
  ellX,
  ellY,
  radiusX,
  radiusY,
  rotation,
  startAngle,
  endAngle,
  ellType,
  ellColor
) {
  if (ellType == `fill`) {
    ctx.fillStyle = ellColor;
  } else if (ellType == `stroke`) {
    ctx.strokeStyle = ellColor;
  }
  ctx.beginPath();
  ctx.ellipse(ellX, ellY, radiusX, radiusY, rotation, startAngle, endAngle);
  if (ellType == `fill`) {
    ctx.fill();
  } else if (ellType == `stroke`) {
    ctx.stroke();
  }
}
