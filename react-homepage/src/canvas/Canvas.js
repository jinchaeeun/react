import React, { useEffect, useRef } from 'react';

function Canvas() {
    const canvasRef = useRef(null); // < HTMLCanvasElement >

    //useEffect는 componentDidMount, componentDidUpdate, componentWillUnmount 역할
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (context != null) {
            context.fillStyle = 'green';
        }
        let isDrawing = false;
        function draw(x, y) {
            if (isDrawing && context != null) {
                context.beginPath();
                context.arc(x, y, 10, 0, Math.PI * 2);
                context.closePath();
                context.fill();
            }
        }

        canvas?.addEventListener('mousemove', (event) => draw(event.offsetX, event.offsetY));
        canvas?.addEventListener('mousedown', () => (isDrawing = true));
        canvas?.addEventListener('mouseup', () => (isDrawing = false));

        const a = document.querySelector('a');
        if (a) {
            a.addEventListener('click', (event) => (event.target.href = canvas.toDataURL()));
        }
    });

    // /**
    //  * 우리가 눈으로 볼 땐 canvas 변수에 dom이 들어가지만,
    //  * ts 입장에선 없을 수도 있다고 인식해서 예외처리하지않으면 오류를 출력한다.
    //  *
    //  * 해결 방법 (아래 중 하나)
    //  * 1) 옵셔널체이닝(?) 사용 canvas?.getContext('2d') (같은 의미 ccanvasontext? canvas.getContext('2d'): null)
    //  * 2) dom 변수 타입 단언 (type assertion)
    //  * -  const canvas = document.querySelector('canvas') as HTMLDivElement;
    //  *    또는
    //  *    canvas!.getContext('2d');
    //  * 3) return 처리 if(canvas == null) return;
    //  */

    console.log('before return');
    return (
        <div className="App">
            <header className="App-header">
                <div color="#111111">
                    <p color="#aaaaaa">그림판으로 아이콘 만들기</p>
                    <a href="()=>false" download="icon.png">
                        다운로드
                    </a>
                </div>
                <canvas ref={canvasRef} width="500px" height="500px" />
            </header>
        </div>
    );
}

export default Canvas;
