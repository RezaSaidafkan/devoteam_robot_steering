
class LimitExceededError extends Error {
    constructor(message: string) {
        super(message); // Call the constructor of the base class `Error`
        this.name = "CustomError"; // Set the error name to your custom error class name
        // Set the prototype explicitly to maintain the correct prototype chain
        Object.setPrototypeOf(this, LimitExceededError.prototype);
    }
}

interface Room {
    length: number,
    height: number
    }


enum Orientation {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"

}

interface State {
    longitude: number
    latitude: number
    orientation: Orientation
}


enum Command{
    L,
    R,
    F
}

enum Command2{
    L = "L",
    R = "R",
    F = "F"
}


export {Room, State, Orientation, Command, LimitExceededError}