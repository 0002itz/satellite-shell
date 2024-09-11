import { defineDb, defineTable, column  } from 'astro:db';

const Herbs_db = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        product_name: column.text(),
        imagePath: column.text(),
        paragraph: column.text(),
        key_points: column.text(),
        available: column.boolean(),
    }
})

const Ceremonis_db = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        product_name: column.text(),
        imagePath: column.text(),
        paragraph: column.text(),
        key_points: column.text(),
        available: column.boolean(),
    }
})

export default defineDb({
    tables:{ Herbs_db, Ceremonis_db },
})
