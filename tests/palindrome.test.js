
const { palindrome } = require('../utils.js/for_testing')

test('palindrome of alex', () => {
    const result = palindrome('alex')

    expect(result).toBe('xela')
})

test('palindrome of empty string', () => {
    const result = palindrome('')

    expect(result).toBe('')
})

test('palindrome of undefined', () => {
    const result = palindrome()

    expect(result).toBeUndefined()
})