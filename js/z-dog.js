// Made with Zdog

const TAU = Zdog.TAU;
const offWhite = '#FED';
const gold = '#EA0';
const garnet = '#C25';
const eggplant = '#636';

const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 10,
  dragRotate: true,
});

// ----- model ----- //

var head = new Zdog.Shape({
  addTo: illo,
  stroke: 12,
  color: '#ff6f61',
});

var eye = new Zdog.Ellipse({
  addTo: head,
  diameter: 2,
  quarters: 2,
  translate: { x: -2, y: 1, z: 4.5 },
  rotate: { z: -TAU/4 },
  color: '#0f4c81',
  stroke: 0.5,
  backface: false,
});
eye.copy({
  translate: { x: 2, y: 1, z: 4.5 },
});
// smile
new Zdog.Ellipse({
  addTo: head,
  diameter: 3,
  quarters: 2,
  translate: { y: 2.5, z: 4.5 },
  rotate: { z: TAU/4 },
  closed: true,
  color: '#FED',
  stroke: 0.5,
  fill: true,
  backface: false,
});

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();

