import { Herbs_db, db } from 'astro:db';

export default async function seed() {
    await db.insert(Herbs_db).values([
        {
            name_herbs: "Melena de León",
            parrafo: "Hongo melena de León benefició natural para cerebro y estomago ",
            puntos_clave: "Trata enfermedades neurodegenerativas, Reforzar el sistema inmunológico, Fortalece salud gastrointestinal, Se compone de beta-glucanos polisacáridos,erincinas,hericenonas,ergosterol (Provitamina D2) y Gaba natural",
        },
        {
            name_herbs: "Cordyceps",
            parrafo: "Su consumo mejora la oxigenación celular,apoya al hígado en su actividad de detoxification,apoya el sistema cardiovascular equilibra el sistema neuroendocrino.También se conoce como el viagra del himalaya",
            puntos_clave: "Destruye las células tumorales, Crea colágeno (rejuvenece), Mejora el oxígeno cuando haces ejercicio, Estabiliza los latidos de corazón",
        },
        {
            name_herbs: "Chaga",
            parrafo: "Beneficios de Chaga",
            puntos_clave: "Apoya los sistemas inmunológicos y digestivos, Mejor la apariencia de la piel y el cabello, Apoya en desintoxicación corpora, Ayuda a aliviar tensión,Soporta niveles saludables de Azúcar en la sangre,Corta circulación a tumores",
        },
        {
            name_herbs: "Sananga",
            parrafo: "Trata y previene enfermedades oculares: glaucoma, cataratas, hipermetropía, miopía y astigmatismo, Mejora la vista, descalifica la glándula pineal, Elimina la energía negativa PANEMA: Muchos lo conocen como mala suerte. Restablece el campo energético, Estimula el sistema inmunológico",
            puntos_clave: "Antiinflamatorio, Antimicrobiano, Antifúngico, Antibacteriano, Antioxidante",
        },
    ])
}
