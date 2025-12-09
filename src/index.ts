import {Room, State, Command, Orientation} from "./models.js"
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

type Keys = keyof typeof Command

function isCommand(commands: Array<string>): commands is Array<Keys> {
    return commands.filter(current => Object.values(Command).includes(current)).length === commands.length
}

function isOrientation(orientation: string): orientation is Orientation {
    return Object.values(Orientation).includes(orientation as Orientation)
}



export function run(room_length: number, room_height: number, init_long: number, init_lat: number, init_orientation: string, inputCommands: string): State {
    
    let commandsArray = inputCommands.split("")
    if (isCommand(commandsArray) && isOrientation(init_orientation)) {
        const robotDynamic = initalizeEnvironment(room_length, room_height, init_long, init_lat, Orientation[init_orientation as keyof typeof Orientation]);

        let commands = commandsArray as Array<Keys>
        let iterator = steer(robotDynamic, commands.map(current => Command[current]))
        let result = iterator.next()
    
        while (!result.done) {
            result = iterator.next()
        }
        return result.value
    }
    else {
        throw TypeError
    }
}
