const inRange = (value, min, max) => value >= min && value <= max;

const $ = (a, b) => (a + b) / 2;

class CoordinateAC {
    constructor(direction = "N", degrees = 0, minutes = 0, seconds = 0) {
        this.direction = direction;
        this.degrees = degrees;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    static createWithValues(direction, degrees, minutes, seconds) {
        switch (direction) {
            case "N": case "S":
                if (inRange(degrees, -90, 90) == false)
                    throw new RangeError('Degrees value is out of range');
                break;
            case "E": case "W":
                if (inRange(degrees, -180, 180) == false)
                    throw new RangeError('Degrees value is out of range');
                break;
            default:
                throw new TypeError('Direction is not of type');
        }

        if (inRange(minutes, 0, 59) == false)
            throw new RangeError('Minutes value is out of range');

        if (inRange(seconds, 0, 59) == false)
            throw new RangeError('Seconds value is out of range');

        return new CoordinateAC(direction, degrees, minutes, seconds)
    }

    toString = () => `${this.degrees}°${this.minutes}′${this.seconds}″ ${this.direction}`;

    toDecimal = () => `${this.degrees + this.minutes / 60 + this.seconds / 3600}° ${this.direction}`;

    middleCoordinate = ({ direction, degrees, minutes, seconds }) =>
        this.direction === direction ?
            CoordinateAC.createWithValues(
                direction,
                $(this.degrees, degrees),
                $(this.minutes, minutes),
                $(this.seconds, seconds),
            ) :
            null

    static middleTwoCoordinate = (coord1, coord2) => coord1.middleCoordinate(coord2)
}

const coordinate1 = new CoordinateAC();
const coordinate2 = CoordinateAC.createWithValues("N", 50, 20, 10);
const coordinate3 = coordinate1.middleCoordinate(coordinate2);

console.log("coordinate 1 : \n", coordinate1, "\n");
console.log("coordinate 2 : \n", coordinate2, "\n");
console.log("coordinate 1 toString : \n", coordinate1.toString(), "\n");
console.log("coordinate 2 toString : \n", coordinate2.toString(), "\n");
console.log("coordinate 1 toDecimal : \n", coordinate1.toDecimal(), "\n");
console.log("coordinate 2 toDecimal : \n", coordinate2.toDecimal(), "\n");
console.log("1 and 2 middleCoordinate is coordinate 3: \n", coordinate3, "\n");
console.log("2 and 3 middleTwoCoordinate : \n", CoordinateAC.middleTwoCoordinate(coordinate2, coordinate3), "\n");

export default CoordinateAC //comment this string to run file via nodeJS
