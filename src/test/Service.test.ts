import { getCoolName } from "../app/Service"


describe('Service test suite', ()=>{
    test('Name should be cool', ()=>{
        const actual : string = getCoolName()
        const expected: string = 'CoolName';
        expect(actual).toBe(expected)
    })
})