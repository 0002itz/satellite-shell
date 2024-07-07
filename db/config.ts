import { defineDb, defineTable, column  } from 'astro:db';

const Herbs_db = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name_herbs: column.text(),
        parrafo: column.text(),
        puntos_clave: column.text(),
    }
})

export default defineDb ({
    tables:{ Herbs_db },
})
