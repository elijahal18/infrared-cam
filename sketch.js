var colorArray = [];
var capture;
var cameraLive = true;
var processing = false;

function setup() {

  colorArray.push(color("#00000a"))
  colorArray.push(color("#00002e"))
  colorArray.push(color("#000042"))
  colorArray.push(color("#010055"))
  colorArray.push(color("#040061"))
  colorArray.push(color("#08006b"))
  colorArray.push(color("#0d0075"))
  colorArray.push(color("#13007b"))
  colorArray.push(color("#1b0080"))
  colorArray.push(color("#240086"))
  colorArray.push(color("#2e008b"))
  colorArray.push(color("#38008f"))
  colorArray.push(color("#3f0093"))
  colorArray.push(color("#470096"))
  colorArray.push(color("#4f0097"))
  colorArray.push(color("#580099"))
  colorArray.push(color("#61009b"))
  colorArray.push(color("#6a009b"))
  colorArray.push(color("#71009d"))
  colorArray.push(color("#7a009d"))
  colorArray.push(color("#83009d"))
  colorArray.push(color("#8a009d"))
  colorArray.push(color("#8b009d"))
  colorArray.push(color("#95009c"))
  colorArray.push(color("#9c009b"))
  colorArray.push(color("#a3009b"))
  colorArray.push(color("#a90099"))
  colorArray.push(color("#af0198"))
  colorArray.push(color("#b30196"))
  colorArray.push(color("#b80395"))
  colorArray.push(color("#bc0593"))
  colorArray.push(color("#c00791"))
  colorArray.push(color("#c30a8e"))
  colorArray.push(color("#c60e8a"))
  colorArray.push(color("#ca1385"))
  colorArray.push(color("#ce1780"))
  colorArray.push(color("#d11b78"))
  colorArray.push(color("#d32071"))
  colorArray.push(color("#d62567"))
  colorArray.push(color("#da2b5e"))
  colorArray.push(color("#dd314e"))
  colorArray.push(color("#df363d"))
  colorArray.push(color("#e23b2d"))
  colorArray.push(color("#e4411d"))
  colorArray.push(color("#e64616"))
  colorArray.push(color("#e84c10"))
  colorArray.push(color("#ea4f0c"))
  colorArray.push(color("#ec5409"))
  colorArray.push(color("#ed5a07"))
  colorArray.push(color("#ee5e05"))
  colorArray.push(color("#f06303"))
  colorArray.push(color("#f16703"))
  colorArray.push(color("#f16b02"))
  colorArray.push(color("#f37001"))
  colorArray.push(color("#f47500"))
  colorArray.push(color("#f57b00"))
  colorArray.push(color("#f68100"))
  colorArray.push(color("#f78600"))
  colorArray.push(color("#f88a00"))
  colorArray.push(color("#f98e00"))
  colorArray.push(color("#f99300"))
  colorArray.push(color("#fb9900"))
  colorArray.push(color("#fca000"))
  colorArray.push(color("#fda600"))
  colorArray.push(color("#fdac00"))
  colorArray.push(color("#feb100"))
  colorArray.push(color("#feb600"))
  colorArray.push(color("#febb00"))
  colorArray.push(color("#fec100"))
  colorArray.push(color("#fec600"))
  colorArray.push(color("#feca01"))
  colorArray.push(color("#fecf04"))
  colorArray.push(color("#fed409"))
  colorArray.push(color("#fed90d"))
  colorArray.push(color("#ffdc14"))
  colorArray.push(color("#ffe020"))
  colorArray.push(color("#ffe328"))
  colorArray.push(color("#ffe638"))
  colorArray.push(color("#ffeb49"))
  colorArray.push(color("#ffee5b"))
  colorArray.push(color("#fff06e"))
  colorArray.push(color("#fff285"))
  colorArray.push(color("#fff49a"))
  colorArray.push(color("#fff6af"))
  colorArray.push(color("#fff8c1"))
  colorArray.push(color("#fffad1"))
  colorArray.push(color("#fffde2"))
  colorArray.push(color("#fffef1"))
  createCanvas(325, 280);

  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  if (cameraLive) {
    image(capture, 0, 0, 325, 240);
  }
}


function mousePressed() {
  cameraLive = !cameraLive; //toggle camera state
  if (!cameraLive) {
    processImage();
  }
}

function processImage() {


  loadPixels();
  for (var p = 0; p < pixels.length; p += 4) {
    for (var c = 0; c < colorArray.length; c++) {
      var difference = dist((pixels[p]), red(colorArray[c]), pixels[p+ 1], green(colorArray[c]), pixels[p + 2], blue(colorArray[c]))

      if (difference < 150) {
        pixels[p] = red(colorArray[c]);
        pixels[p + 1] = green(colorArray[c]);
        pixels[p + 2] = blue(colorArray[c]);
        break;
      }
    }
  }
  updatePixels();
}
