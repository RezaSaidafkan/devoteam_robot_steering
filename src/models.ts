
class LimitExceededError extends Error {
    constructor(message: string) {
        super(message); // Call the constructor of the base class `Error`
        this.name = "LimitExceededError"; // Set the error name to the custom error class name
        // Set the prototype explicitly to maintain the correct prototype chain
        Object.setPrototypeOf(this, LimitExceededError.prototype);
    }
}

export interface Room {
    length: number,
    height: number
    }


enum Orientation {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"

}

export interface State {
    longitude: number
    latitude: number
    orientation: Orientation
}


enum Command{
    L = "L",
    R = "R",
    F = "F"
}

export {Orientation, Command, LimitExceededError}