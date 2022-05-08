import { learndbModel } from '../../db/db_model.js'

// Test for field types length
test('Cheking for model field length "technology"', () => {
    (async () => {
        expect(learndbModel.rawAttributes['technology'].type._length).toBe(255)
    })()
})

test('Cheking for model field length "subject"', () => {
    (async () => {
        expect(learndbModel.rawAttributes['subject'].type._length).toBe(255)
    })()
})

test('Cheking for model field length "tags"', () => {
    (async () => {
        expect(learndbModel.rawAttributes['tags'].type._length).toBe(255)
    })()
})

test('Cheking for model field length "description"', () => {
    (async () => {
        expect(learndbModel.rawAttributes['description'].type._length).toBe('')
    })()
})

