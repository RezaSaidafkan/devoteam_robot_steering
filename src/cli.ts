import * as readline from "readline/promises";
import { Command, Orientation } from "./models.js";
import { run } from "./index.js";


let InputArgs: [number, number, number, number, Orientation, Array<Command>]

type Keys = keyof typeof Command

function isCommand(commands: Array<string>): commands is Array<Keys> {
    return commands.filter(current => Object.values(Command).includes(current as Command)).length === commands.length
}

function isOrientation(orientation: string): orientation is Orientation {
    return Object.values(Orientation).includes(orientation as Orientation)
}

export function parseAndConvert(room: string, positionInput: string, inputCommands: string): typeof InputArgs {
    // parsing room size
    const [roomLength, roomHeight] = room.split(" ").map(Number);

    // parsing initial state
    const [initLongString, initLatString, initOrientation] = positionInput.split(" ");
    const initLong = Number(initLongString)
    const initLat = Number(initLatString)

    if (!isOrientation(initOrientation)) {
        throw TypeError("Orientation should be an string of: " + Object.keys(Orientation).join(" | "))
    }
    
    // parsing input commands
    let commandsArray: Array<Command>
    let inputCommandsArray = inputCommands.split("")
    if (!isCommand(inputCommandsArray)) {
        throw TypeError("Command should be an string of: " + Object.keys(Command).join(" | "))
    } else {
        commandsArray = inputCommandsArray.map(current => Command[current])
    }

    InputArgs = [roomLength, roomHeight, initLong, initLat, initOrientation, commandsArray]
    return InputArgs
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    console.log("Robot Controller CLI");

    // Get room dimensions
    const roomInput = await rl.question(
      "Enter room dimensions (length height): "
    );

    // Get initial position and orientation
    const positionInput = await rl.question(
      "Enter initial position and orientation (longitude latitude orientation): "
    );

    // Get commands
    const commandsInput = await rl.question("Enter commands (L/R/F): ");

    // parse and convert arguments
    InputArgs = parseAndConvert(roomInput, positionInput, commandsInput)
    
    // Run the robot
    const result = run(...InputArgs);

    console.log("\n✅ Success!");
    console.log(
      `Report: ${result.longitude} ${result.latitude} ${result.orientation}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Error: ${error.message}`);
    } else {
      console.error("❌ An unknown error occurred");
    }
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
