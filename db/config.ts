import { defineDb, defineTable, column  } from 'astro:db';

const Herbs_db = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name_herbs: column.text(),
        paragraph: column.text(),
        key_points: column.text(),
        available: column.boolean(),
        // imagePath: column.text()
    }
})

export default defineDb ({
    tables:{ Herbs_db },
})
