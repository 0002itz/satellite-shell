import { Ceremonis_db, Herbs_db, db } from 'astro:db';

export default async function seed() {
    await db.insert(Herbs_db).values([
        {
            product_name: "Melena de León",
            available: true,
            paragraph: "La Melena de León (Hericium erinaceus) es un hongo comestible y medicinal que crece en bosques y regiones montañosas de Europa, Norteamérica y Asia. Su nombre científico se debe a su apariencia, que recuerda a la piel de un león.",
            key_points: "Aumentar las defensas.\nMejorar la función cognitiva.\nAliviar problemas digestivos.\nReducir la inflamación.\nRegulación del sistema inmunitario.\nPromoción del bienestar mental.\nCompuestos bioactivos: Contiene polisacáridos y compuestos bioactivos, como beta-glucanos, erinacinas, ergosterol y GABA natural, que convierten a la Melena de León en un hongo beneficioso para el bienestar general.\nUso en medicina tradicional: En la medicina ayurveda, se utilizaban las raíces y hojas de la Melena de León como apoyo durante situaciones de estrés.\nPopularidad como nootrópico: En los últimos años, la Melena de León ha ganado popularidad como nootrópico o droga inteligente, ya que se cree que puede mejorar la concentración, la memoria y la creatividad.",
        },
        {
            product_name: "Cordyceps",
            available: true,
            paragraph: "El Cordyceps es un género de hongos ascomicetos que abarca más de 400 especies descritas. Estos hongos son parásitos, mayormente de insectos y otros artrópodos, y se encuentran en todo el mundo, especialmente en Asia.",
            key_points: "Revitalizantes y afrodisíacos naturales.\n Mejora la resistencia y la vitalidad.\n Antioxidantes y antiinflamatorios.\n Modulación de la respuesta inmunitaria.\n Afecta la conducta de los insectos hospedadores, alterando su comportamiento habitual.\n",
        },
        {
            product_name: "Chaga",
            available: false,
            paragraph:"El hongo Chaga (Inonotus obliquus) es una especie de fungi que crece principalmente en la corteza de árboles de birch en climas fríos, como Europa del Norte, Siberia, Rusia, Corea, Canadá del Norte y Alaska.",
            key_points:"Antioxidantes: El Chaga es rico en antioxidantes, lo que lo hace útil para combatir el estrés oxidativo y proteger contra daños celulares.\n Inflamación: Estudios sugieren que el Chaga puede ayudar a reducir la inflamación en el cuerpo, lo que puede ser beneficioso para personas con enfermedades crónicas como la artritis o la diabetes.\nCancer: El Chaga ha demostrado actividad antitumoral en estudios en animales y células, lo que sugiere que puede ser útil en el tratamiento del cáncer.\n Gastrointestinal: El Chaga puede ayudar a aliviar síntomas gastrointestinales como la diarrea y el dolor abdominal.\n Inmunidad: El Chaga puede fortalecer el sistema inmunológico, lo que puede ser beneficioso para personas con inmunodeficiencias o que están expuestas a enfermedades infecciosas.\n Cardiovascular: El Chaga puede ayudar a reducir los niveles de colesterol y triglicéridos en la sangre, lo que puede reducir el riesgo de enfermedades cardiovasculares.\n",
        },
        {
            product_name: "Sananga",
            available: false,
            paragraph: "La sananga es un colirio amazónico extraído de la corteza de la raíz del arbusto Tabernaemontana undulata, originario de la región amazónica.",
            key_points: "Propiedades medicinales: La sananga se utiliza para tratar afecciones oculares como miopía, astigmatismo y cataratas. También se ha demostrado que puede ayudar a mejorar la visión nocturna y reducir la sensibilidad a la luz.\n Uso espiritual: En algunas tradiciones, la sananga se considera un líquido sagrado que puede limpiar y purificar el cuerpo y la mente. Se cree que puede ayudar a conectar con la intuición y la conciencia espiritual.\n Preparación y uso: Se aplica una gota en cada ojo antes de dormir, agitando suavemente el frasco antes de usar. También se puede utilizar como tratamiento, aplicando una gota en cada ojo una vez al día durante 7 días y descansando.",
        },
    ]);
    await db.insert(Ceremonis_db).values([
        {
            product_name: "Xanga",
            paragraph: "En esta ceremonia consiste en consumo de una mescla de 5 plantas (Se consume fumándola) en la que contiene DMT (dimetiltriptamina), Los preparamos para entrar a un estdo sen, esta ceremonia no es mas larga de 15 min.",
            key_points: "Desbloqueos espirituales.",
            available: true ,
        },
        {
            product_name: "Bufo alvarius",
            paragraph: "la ceremonia de bufo conciste en la peparacion de la mente para entrar a un estado superior de consciensa atrabes de la inhalación de la meddicina ancestral (la sustancias se extrae de  un ritual en el que se busca que el ser este en un estado cen para poder extraer el megor producto posible), una vez en el paciente experimntara un estado cen podra entender sus bloques mentales, espirutales o emocionales.",
            key_points: "Desbloqueo emocional, espirutal o mental",
            available: true ,
        },
        {
            product_name: "kambô",
            paragraph: "Es una ceremonia en la se consume kambô de forma topica en las primeras capas de piel, El kambô es una sutancia que segrega una rana que se encuntra en el amazonas, su consumo se remonata a practicas medicinales ancestrales en la zona mas desnas del bosque.",
            key_points: "Quema todas las sustancias beningnas que el cuerpo gurada en la grasa corporal.",
            available: true ,
        },
    ]);
}
