

export function intersectionPointToLines(x1, y1, x2, y2, x3, y3, x4, y4){
    var a_dx = x2 - x1;
    var a_dy = y2 - y1;
    var b_dx = x4 - x3;
    var b_dy = y4 - y3;
    var s = (-a_dy * (x1 - x3) + a_dx * (y1 - y3)) / (-b_dx * a_dy + a_dx * b_dy);
    var t = (+b_dx * (y1 - y3) - b_dy * (x1 - x3)) / (-b_dx * a_dy + a_dx * b_dy);
    return (s >= 0 && s <= 1 && t >= 0 && t <= 1) ? {x:x1 + t * a_dx, y:y1 + t * a_dy} : null;
}


export function makeid(prefix) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 255) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return prefix + result;
}

export const generateKey = (pre) => {
    return pre + Math.random()
}
