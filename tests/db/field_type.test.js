import { learndbModel } from '../../db/db_model.js'

// Test for field types
test('Cheking for model field type "technology"', () => {
    (async () => {
        expect(learndbModel.rawAttributes['technology'].type.key).toBe('STRING')
    })()
})

test('Cheking for model field type "subject"', () => {
    (async () => {
        expect(learndbModel.rawAttributes['subject'].type.key).toBe('STRING')
    })()
})

test('Cheking for model field type "tags"', () => {
    (async () => {
        expect(learndbModel.rawAttributes['tags'].type.key).toBe('STRING')
    })()
})

test('Cheking for model field type "description"', () => {
    (async () => {
        expect(learndbModel.rawAttributes['description'].type.key).toBe('TEXT')
    })()
})

