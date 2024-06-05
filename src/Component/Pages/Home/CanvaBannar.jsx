import  { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const animContainerRef = useRef(null);
  const domOverlayContainerRef = useRef(null);

  useEffect(() => {
    const init = () => {
      const canvas = canvasRef.current;
      const animContainer = animContainerRef.current;
      const domOverlayContainer = domOverlayContainerRef.current;
      const comp = AdobeAn.getComposition('D46332A7DA7D48099E976E2CB0D74D0F');
      const lib = comp.getLibrary();
      handleComplete({}, comp);
    };

    const handleComplete = (evt, comp) => {
      const lib = comp.getLibrary();
      const ss = comp.getSpriteSheet();
      const exportRoot = new lib.Athena_Fintech_Hero_07();
      const stage = new lib.Stage(canvasRef.current);
      const fnStartAnimation = () => {
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener('tick', stage);
      };

      AdobeAn.makeResponsive(true, 'both', true, 2, [canvasRef.current, animContainerRef.current, domOverlayContainerRef.current]);
      AdobeAn.compositionLoaded(lib.properties.id);
      fnStartAnimation();
    };

    window.addEventListener('load', init);

    return () => {
      window.removeEventListener('load', init);
    };
  }, []);

  return (
    <div id="animation_container" style={{ backgroundColor: 'rgba(255, 255, 255, 1.00)', width: '1680px', height: '1150px' }}>
      <canvas
        id="canvas"
        ref={canvasRef}
        width="1680"
        height="1150"
        style={{ position: 'absolute', display: 'block', backgroundColor: 'rgba(255, 255, 255, 1.00)' }}
      ></canvas>
      <div
        id="dom_overlay_container"
        ref={domOverlayContainerRef}
        style={{ pointerEvents: 'none', overflow: 'hidden', width: '1680px', height: '1150px', position: 'absolute', left: 0, top: 0, display: 'block' }}
      ></div>
    </div>
  );
};

export default CanvasComponent;
