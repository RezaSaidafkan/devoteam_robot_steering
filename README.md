# Robot Programming Challenge

## Problem Statement

Your task is to program the controller for a robot. It’s a simple robot that can walk around in a room where the floor is represented as a grid.

### Type Definitions

The problem domain is defined by the following TypeScript interfaces:

```typescript
type Orientation = 'N' | 'E' | 'S' | 'W';
type Command = 'L' | 'R' | 'F';

interface Room {
  width: number;  // Input line 1, e.g., "5 7"
  depth: number;
}

interface RobotState {
  x: number;      // Input line 2, e.g., "3 3 N"
  y: number;
  facing: Orientation;
}
```

### Execution Contract

```typescript
/**
 * Processes the input commands for the robot.
 * 
 * @throws {Error} If the robot walks outside of the room bounds.
 * @returns {string} The final position formatted as "x y F" (e.g., "1 3 N").
 */
function execute(room: Room, start: RobotState, commands: Command[]): string {
  // Implementation required
}
```

### Examples

**Example 1:**
```text
5 5
1 2 N
RFRFFRFRF
Report: 1 3 N
```

**Example 2:**
```text
5 5
0 0 E
RFLFFLRF
Report: 3 1 E
```

## Setup

We use `pnpm` for package management and `ts-node` for the development stage.

### Installation

```bash
pnpm install
```
