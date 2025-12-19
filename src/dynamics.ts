import {State, Room, Orientation, LimitExceededError} from "./models.js"


class RobotDynamic {
    constructor(private state: State, private room: Room) {}

    // change the orientaton 1 turn to left
    turnLeft() {
        if (this.state.orientation == Orientation.UP) {
            this.state.orientation = Orientation.LEFT
        } else
        if (this.state.orientation == Orientation.LEFT) {
            this.state.orientation = Orientation.DOWN
        } else
        if (this.state.orientation == Orientation.DOWN) {
            this.state.orientation = Orientation.RIGHT
        } else {
            this.state.orientation = Orientation.UP
        }
    }

    // change the orientation 1 turn to right
    turnRight() {
        if (this.state.orientation == Orientation.UP) {
            this.state.orientation = Orientation.RIGHT
        } else
        if (this.state.orientation == Orientation.LEFT) {
            this.state.orientation = Orientation.UP
        } else
        if (this.state.orientation == Orientation.DOWN) {
            this.state.orientation = Orientation.LEFT
        } else {
            this.state.orientation = Orientation.DOWN
        }
    }

    // Advance the position 1 step forward
    walkForward(): void {
        if (this.state.orientation == Orientation.UP) {
            if (this.state.latitude + 1 >= this.room.height) {
                throw new LimitExceededError("Failed to move 1 step up")
            }
            this.state.latitude += 1
            return
        } else
        if (this.state.orientation == Orientation.DOWN) {
            if (this.state.latitude == 0) {
                throw new LimitExceededError("Failed to move 1 step down")
            }
            this.state.latitude -= 1
            return
        } else
        if (this.state.orientation == Orientation.RIGHT) {
            if (this.state.longitude + 1 >= this.room.length) {
                throw new LimitExceededError("Failed to move 1 step right")
            }
            this.state.longitude += 1
            return
        } else
            if (this.state.longitude == 0) {
                throw new LimitExceededError("Failed to move 1 step left")
            }
            this.state.longitude -= 1
            return
    }

    getState(): State {
        return this.state
    }
}


export {RobotDynamic}