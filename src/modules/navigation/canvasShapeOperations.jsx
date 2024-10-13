import { intersectionPointToLines } from "./canvasScripts";


export const drawIntersectionForSourceAndTargetElement = (ctx, shapeSource, shapeTarget, line)=>{
    const targetVectors = getRectangleVectorArray(shapeSource);
    const sourceVectors = getRectangleVectorArray(shapeTarget);

    targetVectors.map(vector=>{
        drawIntersectionPoint2Vector(ctx, 
            vector, 
            { 
                x1:line.points[0].x, 
                y1:line.points[0].y,
                x2:line.points[1].x,
                y2: line.points[1].y
            });
    })

    sourceVectors.map(vector=>{
        drawIntersectionPoint2Vector(ctx,
            vector,
              { 
              x1:line.points[line.points.length-2].x, 
              y1:line.points[line.points.length-2].y,
              x2:line.points[line.points.length-1].x,
              y2: line.points[line.points.length-1].y
          }); 
    })

}

/**
     * 
     * @param {*} ctx 
     * @param {*} shape 
     */
export const  drawShapeLineIntersection = (ctx, shape, shapes, flowLines)=>{
    if(shape.type == "rect"){
        //rectangle
        let vectors = getRectangleVectorArray(shape);

        shape.incoming.map((incomingId)=>{
            let line = flowLines.find(line=>line.id == incomingId);
            vectors.map(vector=>{
                drawIntersectionPoint2Vector(ctx,
                    vector,
                      { 
                      x1:line.points[line.points.length-2].x, 
                      y1:line.points[line.points.length-2].y,
                      x2:line.points[line.points.length-1].x,
                      y2: line.points[line.points.length-1].y
                  }); 
            })
            //console.log('work with sourceId ', line.sourceId)
            // console.log('all shapes',shapes)
            // console.log('line',line)
            // console.log('line sourceId',line.sourceId)
            // console.log('other vector',shapes.find(s=> s.id == line.sourceId), line.sourceId)
            let otherVectors = getRectangleVectorArray(shapes.find(s=> s.id == line.sourceId));
                otherVectors.map(vector=>{
                    drawIntersectionPoint2Vector(ctx, 
                        vector, 
                        { 
                            x1:line.points[0].x, 
                            y1:line.points[0].y,
                            x2:line.points[1].x,
                            y2: line.points[1].y
                        });
                })
        })
        shape.outgoing.map((outgoingId)=>{
            //console.log(outgoingId)
            let line = flowLines.find(line=>line.id == outgoingId);
            if(line){
                vectors.map(vector=>{ 
                    //console.log('outgingid',outgoingId, 'outgoing list', line, flowLines)
                    drawIntersectionPoint2Vector(ctx,
                        vector,
                        { 
                        x1:line.points[0].x, 
                        y1:line.points[0].y,
                        x2:line.points[1].x,
                        y2: line.points[1].y
                    }); 
                })
                //check iterception other shape
                //console.log('work with targetId ', line.targetId)
                let otherVectors = getRectangleVectorArray(shapes.find(s=> s.id == line.targetId));
                otherVectors.map(vector=>{
                    drawIntersectionPoint2Vector(ctx, 
                        vector, 
                        { 
                            x1:line.points[line.points.length-2].x, 
                            y1:line.points[line.points.length-2].y,
                            x2:line.points[line.points.length-1].x,
                            y2: line.points[line.points.length-1].y
                        });
                })
            }
        })
    }
}

    /**
     * right vertical
     * left vertical
     * up horizontal
     * bottom horizontal 
     * @param {*} shape 
     * @returns 
     */
    export const getRectangleVectorArray=(shape)=>{
        return [
            {x1:shape.x + shape.width, y1:shape.y, x2:shape.x + shape.width, y2:shape.y + shape.height}, //right vertical
            {x1:shape.x, y1:shape.y, x2:shape.x, y2:shape.y + shape.height}, //left vertical
            {x1:shape.x, y1:shape.y, x2:shape.x + shape.width, y2:shape.y}, //up horizontal
            {x1:shape.x, y1:shape.y + shape.height, x2:shape.x + shape.width, y2:shape.y + shape.height}, //bottom horizontal */
        ]
    }


    
 /**
  * 
  * @param {*} ctx 
  * @param {*} vector1 
  * @param {*} vector2 
  */
 export const drawIntersectionPoint2Vector = (ctx, vector1, vector2)=>{
    let point = intersectionPointToLines(
        vector1.x1, vector1.y1,
        vector1.x2, vector1.y2, 
        vector2.x1, vector2.y1,
        vector2.x2, vector2.y2);

    if(point != null){
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fill(); 
        ctx.stroke();
    }
    //console.log(point)
}