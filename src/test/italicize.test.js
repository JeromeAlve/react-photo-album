import conv from '../utils/italicize'

describe('helper function test',  () => {
    it('should return italicized version of letters', () =>{
        let input = 'abcdefg'
        const italicized = conv.italic(input)
        expect(italicized).toEqual("𝘢𝘣𝘤𝘥𝘦𝘧𝘨")
    })

    it('should not change non-alphabetical and non-numerical characters', () =>{
        let input = "<>?,.';[]{}!@#$%^&*()_+-="
        const italicized = conv.italic(input)
        expect(italicized).toEqual(input)
    })
})

