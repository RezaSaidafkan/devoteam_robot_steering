import {describe, it, expect} from 'vitest';
import { run } from './index.ts';

describe("index", () => {
    describe('run', () => {
        it('start from lower left corner and take a few steps', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = "up"

            const commands = "FRF"

            // Act & Assert
            const result = run(roomLength, roomHeight, initLong, initLat, initOri, commands)
            expect(result).toMatchObject(
                {
                    longitude: 1,
                    latitude: 1,
                    orientation: 'right'
                })
            }
        )
        it('start from lower left corner and reach the upper limit', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = "up"

            const commands = "FFFF"

            // Act & Assert
            const result = run(roomLength, roomHeight, initLong, initLat, initOri, commands)
            expect(result).toMatchObject(
                {
                    longitude: 0,
                    latitude: 4,
                    orientation: 'up'
                })
            }
        )
        it('start from lower left corner and exceed the upper limit', () => {
            // Arrange
            const roomLength = 5
            const roomHeight = 5
            const initLong = 0
            const initLat = 0
            const initOri = "up"

            const commands = "FFFFF"
            // Act & Assert
            expect(() => run(roomLength, roomHeight, initLong, initLat, initOri, commands)).toThrowError()
            }
        )
    })
})
