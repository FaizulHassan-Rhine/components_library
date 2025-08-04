import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const objectsData = [
  { id: 1, label: 'Circle', color: '#e74c3c', shape: 'circle' },
  { id: 2, label: 'Rectangle', color: '#8e44ad', shape: 'rectangle' },
  { id: 3, label: 'Triangle', color: '#f39c12', shape: 'triangle' },
  { id: 4, label: 'Pentagon', color: '#16a085', shape: 'polygon', sides: 5 },
  { id: 5, label: 'Hexagon', color: '#3498db', shape: 'polygon', sides: 6 },
];

const MultiShapeGravity = () => {
  const canvasRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const runnerRef = useRef(null);
  const bodiesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const engine = engineRef.current;
    const world = engine.world;

    engine.gravity.y = 1;
    const width = canvas.width;
    const height = canvas.height;

    // Create walls
    const wallThickness = 50;
    const walls = [
      Matter.Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }),
      Matter.Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true }),
      Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }),
      Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }),
    ];
    Matter.World.add(world, walls);

    // Create shapes
    bodiesRef.current = objectsData.map((obj, i) => {
      const x = 100 + i * 130;
      const y = 0;
      let body;

      switch (obj.shape) {
        case 'circle':
          body = Matter.Bodies.circle(x, y, 40, {
            restitution: 0.8,
          });
          break;
        case 'rectangle':
          body = Matter.Bodies.rectangle(x, y, 80, 50, {
            restitution: 0.8,
          });
          break;
        case 'triangle':
          body = Matter.Bodies.polygon(x, y, 3, 45, {
            restitution: 0.8,
          });
          break;
        case 'polygon':
          body = Matter.Bodies.polygon(x, y, obj.sides || 6, 45, {
            restitution: 0.8,
          });
          break;
        default:
          body = Matter.Bodies.circle(x, y, 40, {
            restitution: 0.8,
          });
      }

      body.label = obj.label;
      body.render = { fillStyle: obj.color };
      body.customColor = obj.color;
      return body;
    });

    Matter.World.add(world, bodiesRef.current);

    // Add mouse control
    const mouse = Matter.Mouse.create(canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Matter.World.add(world, mouseConstraint);

    // Run engine
    runnerRef.current = Matter.Runner.create();
    Matter.Runner.run(runnerRef.current, engine);

    // Render loop
   const renderLoop = () => {
  ctx.clearRect(0, 0, width, height);

  bodiesRef.current.forEach((body, i) => {
    const { vertices, position, angle } = body;

    // Draw shape
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y);
    for (let j = 1; j < vertices.length; j++) {
      ctx.lineTo(vertices[j].x, vertices[j].y);
    }
    ctx.closePath();
    ctx.fillStyle = objectsData[i].color;
    ctx.fill();

    // Draw rotated label
    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(angle);
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(objectsData[i].label, 0, 5);
    ctx.restore();
  });

  requestAnimationFrame(renderLoop);
};


    renderLoop();

    return () => {
      Matter.Runner.stop(runnerRef.current);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Gravity with Mixed Shapes</h2>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ background: '#fff', border: '2px solid #ccc', touchAction: 'none' }}
      />
    </div>
  );
};

export default MultiShapeGravity;
