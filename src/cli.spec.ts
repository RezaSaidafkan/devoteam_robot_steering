import {it, describe, expect} from 'vitest';
import { Orientation, Command } from './models.js';
import {parseAndConvert} from './cli.js'


describe('parseAndConvert', () => {
    it('should block passing non declared Commands', () => {
        // Arrange
        const room = "5 5"
        const initialState = "1 1 UP"
        const commands = "ForwardRL"
        
        // Act & Assert
        expect(() => parseAndConvert(room, initialState, commands)).toThrowError("Command should be an string of: L | R | F")
        
    })
    
    it('should throw on non declared orientations arguements', () => {
        // Arrange
        const room = "5 5"
        const initialState = "1 1 Up"
        const commands = "FRW"
        
        // Act & Assert
        expect(() => parseAndConvert(room, initialState, commands)).toThrowError("Orientation should be an string of: UP | DOWN | LEFT | RIGHT")

    })

    it('should parse and convert arguments correctly', () => {
        // Arrange
        const room = "5 5"
        const initialState = "1 1 UP"
        const commands = "F"
        
        // Act & Assert
        const result = parseAndConvert(room, initialState, commands)
        expect(result).toEqual([5, 5, 1, 1, Orientation.UP, [Command.F]])
    })
})