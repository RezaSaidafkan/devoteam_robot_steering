import {describe, it, expect} from 'vitest';
import { run } from './index.ts';
import { Orientation, Command } from './models.js';

describe("index", () => {
    describe('run', () => {
        it('should block passing non declared arguements orientations', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = "U" // some undeclared orientation
            const commands = "F"

            // Act & Assert
            // run(roomLength, roomHeight, initLong, initLat, initOri, commands)
            expect(() => run(roomLength, roomHeight, initLong, initLat, initOri, commands)).toThrowError()

        })

        it('should block passing non declared "commands"', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = "UP"
            const commands = "Forward" // some undeclared command

            // Act & Assert
            //run(roomLength, roomHeight, initLong, initLat, initOri, commands)
            expect(() => run(roomLength, roomHeight, initLong, initLat, initOri, commands)).toThrowError()

        })

        it('start from lower left corner and take a few steps', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = "UP"

            const commands = "FRF"

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
            const initOri = "UP"

            const commands = "FFFF"

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
            const initOri = "UP"

            const commands = "FFFFF"
            // Act & Assert
            expect(() => run(roomLength, roomHeight, initLong, initLat, initOri, commands)).toThrowError()
            }
        )
    })
})
