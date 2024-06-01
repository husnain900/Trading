import React, { useEffect, useRef } from 'react';

const CanvasComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Example drawing
        context.fillStyle = 'red';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Add any additional canvas drawing logic here
    }, []);

    return (
        <canvas
            id="canvas"
            ref={canvasRef}
            width="1366"
            height="935"
            style={{
                position: 'absolute',
                display: 'block',
                backgroundColor: 'rgb(255, 255, 255)',
                width: '1366px',
                height: '935.06px'
            }}
        />
    );
};

export default CanvasComponent;
