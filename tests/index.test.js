const app = require('../src/app')
const request = require('supertest')
 
describe('GET /tasks', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.statusCode).toBe(200)
    })

    test('should respond with an array', async () => {
        const response = await request(app).get('/tasks').send()
        expect(response.body).toEqual(expect.arrayContaining([])) // expe 
    })

})

describe('POST /tasks', () => {

    describe('given a title and description', () => { 
        test('should respond with a 200 status code', async() => {
            const response = await request(app).post('/tasks').send()  
            expect(response.statusCode).toBe(200)
        })
    
        test('should respond with a content-type of application/json', async() => {
            const response = await request(app).post('/tasks').send()  
            expect(response.header['content-type']).toEqual(expect.stringContaining("json"))
        })
        
        test('JSON object must contain an id', async() => {
            const response = await request(app).post('/tasks').send({
                title: "test tasks",
                description: "tesk description"
            })
            expect(response.body.id).toBeDefined()
        })
    })

    describe('when title and description are missing', () => {
        test('should respond with a 400 status code', async() => {
            const response = await request(app).post('/tasks').send({})
            expect(response.statusCode).toBe(400)
        })
    })
})