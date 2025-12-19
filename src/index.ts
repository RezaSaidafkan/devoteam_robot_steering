import {Command, Orientation} from "./models.js"
import type {Room, State} from "./models.js"
import {RobotDynamic} from "./dynamics.js"


function initalizeEnvironment(room_length: number, room_height: number, init_long: number, init_lat: number, init_orientation: Orientation): RobotDynamic {
    const room = {
        height: room_height,
        length: room_length
    } as Room;

    const initState = {
        longitude: init_long,
        latitude: init_lat,
        orientation: init_orientation
    } as State

    return new RobotDynamic(initState, room)
}

function *steer(robot: RobotDynamic, commands: Array<Command>): Generator<undefined, State, undefined> {
    for (const command of commands) {
        if (command == Command.F) {
            robot.walkForward()
            yield
        } else
        if (command == Command.L) {
            robot.turnLeft()
            yield
        }
        else {
            robot.turnRight()
            yield
        }
    }
    return robot.getState()
}

export function run(room_length: number, room_height: number, init_long: number, init_lat: number, init_orientation: Orientation, inputCommands: Array<Command>): State {
    const robotDynamic = initalizeEnvironment(room_length, room_height, init_long, init_lat, init_orientation);
    let iterator = steer(robotDynamic, inputCommands)
    let result = iterator.next()

    while (!result.done) {
        result = iterator.next()
    }
    return result.value
}

