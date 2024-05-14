import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Phenomenon from './Phenomenon';

const Split = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Ensure the canvas dimensions are set correctly
    const canvas = canvasRef.current;
    if (!canvas) return;

    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('Unable to initialize WebGL. Your browser may not support it.');
      return;
    }

    // Set the WebGL viewport to cover the entire canvas
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    // Set the clear color
    gl.clearColor(0.0, 0.0, 0.0, 0.0); // Set your desired color here, e.g., black
    gl.clear(gl.COLOR_BUFFER_BIT); // Use the clear color to fill the canvas
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);


    const getRandom = (value) => -value + Math.random() * value * 2;

    const rgbToHsl = (rgb) => rgb.map(c => c / 255);

    const colors = [
      [25, 25, 112],
      [75, 0, 130],  // Dark Purple
      [139, 0, 0],   // Dark Red
      [0, 145, 234],   // Dark Green
    ].map(color => rgbToHsl(color));
    


    const uniforms = {
      uProgress: { type: 'float', value: 0.0 },
    };

    let forward = true;
    let count = 0;

    // Assuming Phenomenon or an equivalent WebGL utility is correctly set up to use here
    const phenomenon = new Phenomenon({
      canvas,
      settings: {
        devicePixelRatio,
        position: { x: 0, y: 0, z: 2.3 },
        uniforms,
        onRender: ({ uniforms }) => {
          const { uProgress, uModelMatrix } = uniforms;
          uProgress.value += forward ? 0.01 : -0.01;

          if (uProgress.value >= 1) forward = false;
          else if (uProgress.value <= 0) forward = true;

          // Assuming rotateY is a function that modifies uModelMatrix based on an angle
          rotateY(uModelMatrix.value, 0.01);
        },
      },
    });

    function addInstance() {
      count += 1;

      // The amount of particles that will be created
      const multiplier = 4000;

      // Percentage of how long every particle will move
      const duration = .6;

      // Base start position (center of the cube)
      const start = {
        x: getRandom(1),
        y: getRandom(1),
        z: getRandom(1),
      };

      // Base end position (center of the cube)
      const end = {
        x: getRandom(1),
        y: getRandom(1),
        z: getRandom(1),
      };

      // Every attribute must have:
      // - Name (used in the shader)
      // - Data (returns data for every particle)
      // - Size (amount of variables in the data)
      const attributes = [
        {
          name: 'aPositionStart',
          data: () => [start.x + getRandom(0.1), start.y + getRandom(0.1), start.z + getRandom(0.1)],
          size: 3,
        },
        {
          name: 'aPositionEnd',
          data: () => [end.x + getRandom(0.1), end.y + getRandom(0.1), end.z + getRandom(0.1)],
          size: 3,
        },
        {
          name: 'aColor',
          data: () => colors[count % 4],
          size: 3,
        },
        {
          name: 'aOffset',
          data: i => [i * ((1 - duration) / (multiplier - 1))],
          size: 1,
        },
      ];

      // Vertex shader used to calculate the position
      const vertex = `
        attribute vec3 aPositionStart;
        attribute vec3 aControlPointOne;
        attribute vec3 aControlPointTwo;
        attribute vec3 aPositionEnd;
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute float aOffset;
    
        uniform float uProgress;
        uniform mat4 uProjectionMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uViewMatrix;
    
        varying vec3 vColor;
    
        float easeInOutQuint(float t){
          return t < 0.5 ? 16.0 * t * t * t * t * t : 1.0 + 16.0 * (--t) * t * t * t * t;
        }
    
        void main(){
          float tProgress = easeInOutQuint(min(1.0, max(0.0, (uProgress - aOffset)) / ${duration}));
          vec3 newPosition = mix(aPositionStart, aPositionEnd, tProgress);
          gl_Position = uProjectionMatrix * uModelMatrix * uViewMatrix * vec4(newPosition + aPosition, 1.0);
          gl_PointSize = ${devicePixelRatio.toFixed(1)};
          vColor = aColor;
        }
      `;

      // Fragment shader to draw the colored pixels to the canvas
      const fragment = `
        precision lowp float;
    
        varying vec3 vColor;
    
        void main(){
          gl_FragColor = vec4(vColor, 1.0);
        }
      `;

      // Add an instance to the renderer
      phenomenon.add(count, {
        attributes,
        multiplier,
        vertex,
        fragment,
      });
    }

    function rotateY(matrix, angle) {
      const m = matrix;
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const mv0 = m[0];
      const mv4 = m[4];
      const mv8 = m[8];

      m[0] = c * m[0] + s * m[2];
      m[4] = c * m[4] + s * m[6];
      m[8] = c * m[8] + s * m[10];

      m[2] = c * m[2] - s * mv0;
      m[6] = c * m[6] - s * mv4;
      m[10] = c * m[10] - s * mv8;
    }

    function removeInstance() {
      if (count === 0) return;
      phenomenon.remove(count);
      count -= 1;
    }


    // Automatically add instances on initialization
    for (let i = 0; i < 20; i++) {
      addInstance();
    }

    // Cleanup function
    return () => {
      // Perform any necessary cleanup
    };
  }, []);

  return (
    <>
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="container">
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div className="row g-0 radius-10 align-items-center">
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="thumbnail">
                    <canvas ref={canvasRef} className="radius" style={{ width: '100%', height: '544px' }} />
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 col-12">
                  <div className="split-inner">
                    <h4
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="200"
                    >
                      Inter-Link Data with AI
                    </h4>
                    <p
                      className="description"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="300"
                    >
                      Discover connections between your documents, 
                      confirm their accuracy, and seamlessly feed AI insights
                      back into your existing systems with Inter-Link AI.
                    </p>
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="350"
                    >
                      <li>- Uncover Links Across All Your Documents.</li>
                      <li>- Ensure Accuracy with Smart Verification.</li>
                      <li>- Integrate Insights into Your Everyday Tools.</li>
                    </ul>
                    <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link className="btn-default" href="https://ai-square.io/contact/">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Split;
