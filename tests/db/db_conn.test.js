import { dbAddress, dbDialect, dbDatabaseName } from '../../db/db_conn.js'

test('Full db address', () => {
    expect(dbAddress).toBe('postgres://postgres:admin@localhost:5432/learndb')
})

test('Database dialect', () => {
    expect(dbDialect).toBe('postgres')
})

test('Database name', () => {
    expect(dbDatabaseName).toBe('learndb')
})

