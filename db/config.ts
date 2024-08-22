import { defineDb, defineTable, column  } from 'astro:db';

const Herbs_db = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name_herbs: column.text(),
        paragraph: column.text(),
        key_points: column.text(),
        available: column.boolean(),
    }
})

const Ceremonis_db = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name_ceremoni: column.text(),
        paragraph: column.text(),
        key_points: column.text(),
        available: column.boolean(),
    }
})

export default defineDb({
    tables:{ Herbs_db, Ceremonis_db },
})
