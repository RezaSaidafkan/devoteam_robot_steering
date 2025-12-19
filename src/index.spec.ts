import {describe, it, expect} from 'vitest';
import { run } from './index.js';
import { Orientation, Command } from './models.js';

describe("index", () => {
    describe('run', () => {

        it('start from lower left corner and take a few steps', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = Orientation.UP

            const commands = [Command.F, Command.R, Command.F]

            // Act & Assert
            const result = run(roomLength, roomHeight, initLong, initLat, initOri, commands)
            expect(result).toMatchObject(
                {
                    longitude: 1,
                    latitude: 1,
                    orientation: Orientation.RIGHT
                })
            }
        )
        it('start from lower left corner and reach the upper limit', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = Orientation.UP

            const commands = [Command.F, Command.F, Command.F, Command.F]

            // Act & Assert
            const result = run(roomLength, roomHeight, initLong, initLat, initOri, commands)
            expect(result).toMatchObject(
                {
                    longitude: 0,
                    latitude: 4,
                    orientation: Orientation.UP
                })
            }
        )
        it('start from lower left corner and exceed the upper limit', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = Orientation.UP

            const commands = [Command.F, Command.F, Command.F, Command.F, Command.F]
            // Act & Assert
            expect(() => run(roomLength, roomHeight, initLong, initLat, initOri, commands)).toThrowError()
            }
        )
        it('rectangular room vertical bound uses height (not length)', () => {
            // Arrange
            const roomLength = 6
            const roomHeight = 3
            const initLong = 0
            const initLat = 0
            const initOri = Orientation.UP

            const commands = [Command.F, Command.F, Command.F] // 3rd forward should exceed height=3

            // Act & Assert
            expect(() => run(roomLength, roomHeight, initLong, initLat, initOri, commands)).toThrowError()
            }
        )
        it('start from lower left corner and reach the upper right corner', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = Orientation.UP

            const commands = [Command.F, Command.R, Command.F, Command.L, Command.F, Command.R, Command.F, Command.L, Command.F, Command.R, Command.F, Command.L, Command.F, Command.R, Command.F, Command.L]

            // Act & Assert
            const result = run(roomLength, roomHeight, initLong, initLat, initOri, commands)
            expect(result).toMatchObject(
                {
                    longitude: 4,
                    latitude: 4,
                    orientation: Orientation.UP
                })
            }
        )
        it('start from top right corner and reach the lower left corner', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 4
            const initLat = 4
            const initOri = Orientation.DOWN

            const commands = [Command.F, Command.R, Command.F, Command.L, Command.F, Command.R, Command.F, Command.L, Command.F, Command.R, Command.F, Command.L, Command.F, Command.R, Command.F, Command.L]

            // Act & Assert
            const result = run(roomLength, roomHeight, initLong, initLat, initOri, commands)
            expect(result).toMatchObject(
                {
                    longitude: 0,
                    latitude: 0,
                    orientation: Orientation.DOWN
                })
            }
        )
    })
})
