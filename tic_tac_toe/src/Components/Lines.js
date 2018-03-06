import Rect from './Rect'

class Lines{
    arNormalizedRect = [new Rect(0,0,1,1) , new Rect(0,1,1,0) , //diagonal
                        new Rect(0.167,0,0.167,1) , new Rect(3*0.167,0,3*0.167,1) , new Rect(5*0.167,0,5*0.167,1) ,//col
                        new Rect(0,0.167,1,0.167) , new Rect(0,3*0.167,1,3*0.167) , new Rect(0,5*0.167,1,5*0.167)
                        ];

    DrawLine = (ctx,width,heigth,lineType) =>
    {
        ctx.beginPath();
        const rect = this.arNormalizedRect[lineType];
        ctx.moveTo(rect.left*width,rect.top*heigth);
        ctx.lineTo(rect.right*width,rect.bottom*heigth);
        ctx.stroke();
    }
}

export default Lines;