/**
 * 
 *  Triangle by Heron's Formula 
 */


const circumference = (sides) => {
    const u = sides[0]+sides[1]+sides[2]
    return u
}

const area = (sides) => {
    const u = circumference(sides)/2
    const area = Math.sqrt(u*(u-sides[0])*(u-sides[1])*(u-sides[2]))
    return area
}
    
const check = (sides) => {
    if (sides[0] <= 0 || sides[1] <= 0 || sides[2] <= 0) return "INVALID"
    if (sides[0] == sides[1] && sides[1] == sides[2]) return "EQUILATERAL"
    if (sides[0] >= sides[1]+sides[2] || sides[2] >= sides[1]+sides[0] || sides[1] >= sides[0]+sides[2]) return "INVALID"
    if (sides[1]==sides[2] || sides[0]==sides[1] || sides[2]==sides[0]) return "ISOSCELES"
    return "SCALENE"
}

const radiansTodegree = (radian) => {
    return radian * 180 / Math.PI;
}

const degreeToradians = (degree) => {
    return degree * Math.PI / 180
}

const getPoints = (sides) => {
    const Asqrt = Math.pow(sides[0],2);
    const Bsqrt = Math.pow(sides[1],2);
    const Csqrt = Math.pow(sides[2],2);
    const alfa = ((Asqrt-Bsqrt-Csqrt)) / (-2 * sides[1] * sides[2]);
    let angle = Math.acos(alfa);
    angle = radiansTodegree (angle)

    const By = sides[0]
    const Cx =  sides[1] * Math.sin(degreeToradians(angle))
    const Cy =  sides[1] * Math.cos(degreeToradians(angle))

    const result = {
        ax: 0,
        ay: 0,
        bx: 0,
        by: By,
        cx: Cx,
        cy: Cy
    }

    return result
}

export default {circumference, area, getPoints, check}