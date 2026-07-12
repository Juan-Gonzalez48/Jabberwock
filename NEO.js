// CATÁLOGO NATURALEZA
const productosNaturaleza = [
    { id: 1, nombre: "Aceite de Coco Extra Virgen", categoria: "corporal", descripcion: "Perfecto para fortalecer y dar vitalidad a las fibras capilares, estimula el crecimiento del cabello, repara puntas abiertas, es un excelente hidratante para tu piel y cabello, estimula la regeneración de la piel, te ayuda a desmaquillar incluso el maquillaje a prueba de agua sin maltratar tu rostro, es un aceite natural prensado en frío que le puedes dar tanto uso cosmético como culinario, excelente para freídos no profundos.", descCorta: "Multiusos: hidrata piel y cabello, desmaquilla, repara puntas.", imagen: "Fotos/AceiteCoco.jpg.jpeg", presentaciones: [{ tamaño: "125 gr", precio: 16000, precioTexto: "$16.000" }, { tamaño: "250 gr", precio: 26000, precioTexto: "$26.000" }, { tamaño: "500 gr", precio: 42000, precioTexto: "$42.000" }] },
    { id: 2, nombre: "Aceite de Argán Puro", categoria: "corporal", descripcion: "30 ml. Este maravilloso aceite es increíble para fortalecer y reparar tu cabello, tus cejas y lo mejor tus pestañas, gracias a todos sus ácidos grasos es realmente un reparador natural.", descCorta: "Repara cabello, cejas y pestañas. Antioxidante.", imagen: "Fotos/AceiteArgan.jpg.jpeg", presentaciones: [{ tamaño: "30 ml", precio: 16000, precioTexto: "$16.000" }] },
    { id: 3, nombre: "Aceite de Almendras", categoria: "corporal", descripcion: "El aliado perfecto para la nutrición total de tu cuerpo. Enriquecido con vitaminas y ácidos grasos esenciales, este aceite de rápida absorción hidrata profundamente la piel, suaviza las zonas secas y previene la aparición de estrías.", descCorta: "Hidrata profundamente la piel. Prevención de estrías.", imagen: "Fotos/AceiteAlmendras.jpg.jpeg", presentaciones: [{ tamaño: "275 ml", precio: 19000, precioTexto: "$19.000" }] },
    { id: 4, nombre: "Agua de Rosas Tonificante", categoria: "facial", descripcion: "300 ml. Tónico facial que ayuda a prevenir el envejecimiento prematuro, devolviéndole suavidad a la piel. Perfecta para regular el pH de la piel, calma enrojecimientos e hinchazón después de la depilación.", descCorta: "Tonifica y calma la piel. Regula el pH.", imagen: "Fotos/AguaRosas.jpg.jpeg", presentaciones: [{ tamaño: "300 ml", precio: 12000, precioTexto: "$12.000" }] },
    { id: 5, nombre: "Tónico de Arroz", categoria: "facial", descripcion: "Ayuda a retrasar los signos del envejecimiento, ya que cuenta con propiedades exfoliantes y blanqueadoras muy bondadosas para el cutis. Reduce las manchas, estimula la circulación, favorece la producción de colágeno.", descCorta: "Exfoliante natural, reduce manchas y unifica el tono.", imagen: "Fotos/FacialArroz.jpg.jpeg", presentaciones: [{ tamaño: "250 ml", precio: 14000, precioTexto: "$14.000" }] },
    { id: 6, nombre: "Sérum Facial Vitamina C", categoria: "facial", descripcion: "35 ml. Previene y mejora signos de fotoenvejecimiento como manchas y líneas de expresión. Recupera el brillo natural y elasticidad de la piel. Esencial para la producción de Colágeno.", descCorta: "Antioxidante, unifica el tono, estimula colágeno.", imagen: "Fotos/VitaminaC.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 22500, precioTexto: "$22.500" }] },
    { id: 7, nombre: "Sérum Ácido Hialurónico", categoria: "facial", descripcion: "35 ml. Sus propiedades son espectaculares, tiene una impresionante capacidad para retener la humedad de la piel, su efecto en la piel es tensor al instante, rellena líneas de expresión y arrugas.", descCorta: "Hidratación intensa, efecto relleno y tensor.", imagen: "Fotos/AcidoHialuronico.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 28000, precioTexto: "$28.000" }] },
    { id: 8, nombre: "Sérum Facial Aloe Vera", categoria: "facial", descripcion: "35 ml. Es perfecto tanto para pieles secas como grasas. Estimula producción de colágeno y elastina. Aporta hidratación profunda, perfecto para antes del maquillaje.", descCorta: "Antioxidante, cierra poros, regenera, trata acné.", imagen: "Fotos/AloeVera.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 17000, precioTexto: "$17.000" }] },
    { id: 9, nombre: "Jabón Facial Carbón Activado", categoria: "facial", descripcion: "145 gr. Ideal para pieles con acné, pues gracias al carbón activado nos ayudará a secar los granitos, espinillas y puntos negros, sin resecar la piel.", descCorta: "Purifica, elimina impurezas, calma irritaciones.", imagen: "Fotos/JabonCarbon.jpg.jpeg", presentaciones: [{ tamaño: "145 gr", precio: 13000, precioTexto: "$13.000" }] },
    { id: 10, nombre: "Jabón Facial Caléndula, Manzanilla y Miel", categoria: "facial", descripcion: "145 gr. La caléndula y la manzanilla son plantas medicinales usadas por siglos por sus propiedades curativas. Producto 100% natural regenerador, cicatrizante, calmante y humectante.", descCorta: "Ideal para piel sensible, cicatriza, antiacné.", imagen: "Fotos/JabonFacial.jpg.jpeg", presentaciones: [{ tamaño: "145 gr", precio: 12000, precioTexto: "$12.000" }] },
    { id: 11, nombre: "Jabón Anticelulitis y Exfoliante", categoria: "corporal", descripcion: "A base de Café y centella asiática. Ideal para mejorar la apariencia de tu cuerpo, dejándola mucho más suave, joven, hidratada y sin impurezas.", descCorta: "Exfolia, detox, anticelulítico, tonifica.", imagen: "Fotos/JabonAnticelulitis.jpg.jpeg", presentaciones: [{ tamaño: "145 gr", precio: 13000, precioTexto: "$13.000" }] },
    { id: 12, nombre: "Jabón Facial de Avena y Colágeno", categoria: "facial", descripcion: "75 gr. Un jabón facial a base de avena y colágeno, que hidrata y nutre tu piel.", descCorta: "Nutrición extrema, colágeno + vitamina E, piel sedosa.", imagen: "Fotos/JabonAvena.jpg.jpeg", presentaciones: [{ tamaño: "75 gr", precio: 8000, precioTexto: "$8.000" }] },
    { id: 13, nombre: "Jabón Facial de Arroz y Colágeno", categoria: "facial", descripcion: "60 gr. Un jabón facial a base de arroz y colágeno, que hidrata y nutre tu piel.", descCorta: "Nutrición, suavidad, brillo natural.", imagen: "Fotos/JabonArroz.jpg.jpeg", presentaciones: [{ tamaño: "60 gr", precio: 7000, precioTexto: "$7.000" }] },
    { id: 14, nombre: "Exfoliante Labial", categoria: "labios-cejas", descripcion: "20 gr. Estimula la regeneración celular en la piel de nuestros labios, los mantiene suaves, humectados y aporta volumen natural.", descCorta: "Labios suaves, elimina cueritos, volumen natural.", imagen: "Fotos/ExfolianteLabial.jpg.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 8000, precioTexto: "$8.000" }] },
    { id: 15, nombre: "Bálsamo Labial", categoria: "labios-cejas", descripcion: "20 gr. Un bálsamo labial hidratante que suaviza y protege los labios secos y agrietados. Rico en ingredientes naturales que nutren profundamente.", descCorta: "Hidratación intensa, brillo natural, protección.", imagen: "Fotos/BalsamoLabial.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 7000, precioTexto: "$7.000" }] },
    { id: 16, nombre: "Bálsamo Labial Chapstick", categoria: "labios-cejas", descripcion: "Bálsamo labial en formato chapstick que proporciona hidratación intensa y protección duradera.", descCorta: "Hidratación intensa, protección duradera, formato práctico.", imagen: "Fotos/BalsamoLabial Chapstick.jpg.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 7000, precioTexto: "$7.000" }] },
    { id: 17, nombre: "Bálsamo de Cejas y Pestañas", categoria: "labios-cejas", descripcion: "Bálsamo para cejas y pestañas que nutre y protege, mejorando su apariencia y salud.", descCorta: "Nutrición intensa, fortalece, mejora apariencia.", imagen: "Fotos/BalsamoCejas-pestañas.jpg.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 8000, precioTexto: "$8.000" }] },
    { id: 18, nombre: "Sérum de Pestañas", categoria: "labios-cejas", descripcion: "10 ml. Un serum específico para pestañas que fortalece, estimula el crecimiento y mejora la apariencia.", descCorta: "Fortalece, estimula crecimiento, mejora apariencia.", imagen: "Fotos/Pestañas.jpg.jpeg", presentaciones: [{ tamaño: "10 ml", precio: 21000, precioTexto: "$21.000" }] },
    { id: 19, nombre: "Arcilla Detox con Té Verde", categoria: "facial", descripcion: "50 ml. Mascarilla purificante y de limpieza profunda que ayuda a eliminar y prevenir barritos, puntos negros e impurezas.", descCorta: "Purifica, elimina impurezas, equilibra el pH.", imagen: "Fotos/ArcillaTeVerde.jpg.jpeg", presentaciones: [{ tamaño: "50 ml", precio: 12000, precioTexto: "$12.000" }] },
    { id: 20, nombre: "Exfoliante de Baño", categoria: "corporal", descripcion: "200 gr. Un exfoliante suave que elimina las células muertas de la piel y promueve la renovación celular.", descCorta: "Elimina células muertas, hidrata, suaviza piel.", imagen: "Fotos/ExfolianteBaño.jpg.jpeg", presentaciones: [{ tamaño: "200 gr", precio: 14500, precioTexto: "$14.500" }] },
    { id: 21, nombre: "Leche de Coco Crema Corporal", categoria: "corporal", descripcion: "250 gr. Crema corporal a base de aceite de coco, vitamina E y colágeno, que hidrata y nutre tu piel.", descCorta: "Hidrata profundamente, suaviza piel.", imagen: "Fotos/LecheCocoCrema.jpg.jpeg", presentaciones: [{ tamaño: "250 gr", precio: 22000, precioTexto: "$22.000" }] },
    { id: 22, nombre: "Tónico Capilar Extracrecimiento", categoria: "capilar", descripcion: "350 ml. Estimula un crecimiento acelerado en las fibras capilares, fortaleciendo, previniendo y tratando la caída del cabello.", descCorta: "Acelera crecimiento, fortalece raíz, sin grasa.", imagen: "Fotos/TonicoCapilarCrecimiento.jpg.jpeg", presentaciones: [{ tamaño: "350 ml", precio: 31000, precioTexto: "$31.000" }] },
    { id: 23, nombre: "Extracto de Romero", categoria: "capilar", descripcion: "50 ml. Un extracto natural de romero que estimula el crecimiento del cabello y fortalece las raíces.", descCorta: "Estimula crecimiento, fortalece raíces.", imagen: "Fotos/ExtractoRomero.jpg.jpeg", presentaciones: [{ tamaño: "50 ml", precio: 24000, precioTexto: "$24.000" }] },
    { id: 24, nombre: "Extracto de Cebolla", categoria: "capilar", descripcion: "50 ml. Un extracto natural de cebolla que estimula el crecimiento del cabello y fortalece las raíces.", descCorta: "Estimula crecimiento, fortalece raíces.", imagen: "Fotos/ExtractoCebollaCapilar.jpg.jpeg", presentaciones: [{ tamaño: "50 ml", precio: 18000, precioTexto: "$18.000" }] },
    { id: 25, nombre: "Chocolaterapia Capilar", categoria: "capilar", descripcion: "250 gr. Mascarilla concentrada rica en vitaminas y minerales que reúne los beneficios del extracto de cacao y café colombiano.", descCorta: "Nutrición extrema, realza color, fortalece fibra.", imagen: "Fotos/Chocolaterapia.jpg.jpeg", presentaciones: [{ tamaño: "250 gr", precio: 30000, precioTexto: "$30.000" }] },
    { id: 26, nombre: "Tratamiento de Restauración", categoria: "capilar", descripcion: "125 gr. Tratamiento capilar a base de extracto natural de aguacate y aceite de argán, libre de sal y sin parabenos.", descCorta: "Reestructura cabello dañado, hidrata y da brillo.", imagen: "Fotos/TratamientoRestauracion.jpg.jpeg", presentaciones: [{ tamaño: "125 gr", precio: 15000, precioTexto: "$15.000" }] },
    { id: 27, nombre: "Tratamiento de Crecimiento", categoria: "capilar", descripcion: "125 gr. Tratamiento capilar a base de extractos naturales de cebolla, romero y aceite de coco, formulado sin sal y sin parabenos.", descCorta: "Revitaliza cabello estancado, reduce caída.", imagen: "Fotos/TratamientoCrecimiento.jpg.jpeg", presentaciones: [{ tamaño: "125 gr", precio: 15000, precioTexto: "$15.000" }] },
    { id: 28, nombre: "Mantequilla Capilar", categoria: "capilar", descripcion: "250 gr. Mantequilla capilar a base de aceite de argán y manteca de karité, ideal para hidratar y nutrir el cabello seco y dañado.", descCorta: "Hidratación profunda, suavidad, brillo.", imagen: "Fotos/MantequillaCapilar.jpg.jpeg", presentaciones: [{ tamaño: "250 gr", precio: 27000, precioTexto: "$27.000" }] },
    { id: 29, nombre: "Shampoo y Acondicionador", categoria: "capilar", descripcion: "265 ml. Con todos los beneficios de la cebolla, el romero y el aceite de coco, estimula el crecimiento de tu cabello y previene su caída.", descCorta: "Limpieza profunda, suavidad, brillo.", imagen: "Fotos/ShampooAcondicionador.jpg.jpeg", presentaciones: [{ tamaño: "265 ml", precio: 40000, precioTexto: "$40.000" }] },
    { id: 30, nombre: "Repolarizador Multivitamínico", categoria: "capilar", descripcion: "275 ml. Repolarizador a base de vitaminas y minerales, ideal para fortalecer el cabello y estimular su crecimiento.", descCorta: "Fortalece el cabello, estimula el crecimiento, previene la caída.", imagen: "Fotos/ReporalizadorMultivitaminico.jpg.jpeg", presentaciones: [{ tamaño: "275 ml", precio: 23000, precioTexto: "$23.000" }] },
    { id: 31, nombre: "Biotina Gotas Capilares", categoria: "capilar", descripcion: "35 ml. Biotina gotas capilares a base de ingredientes naturales, ideales para fortalecer el cabello y estimular su crecimiento.", descCorta: "Fortalece el cabello, estimula el crecimiento, previene la caída.", imagen: "Fotos/BiotinaGotasCapilar.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 23000, precioTexto: "$23.000" }] },
    { id: 32, nombre: "Bálsamo Hidratante para Mascotas", categoria: "mascotas", descripcion: "35 gr. Bálsamo hidratante formulado con ingredientes 100% naturales, seguros y comestibles, ideal para cuidar la piel y las patitas de tu peludo.", descCorta: "Hidrata la piel y el pelaje, previene la sequedad.", imagen: "Fotos/BalsamoMascotas.jpg.jpeg", presentaciones: [{ tamaño: "35 gr", precio: 17000, precioTexto: "$17.000" }] }
];

//  CATÁLOGO JABBERWOCK 
// 30 ml → $16.500 | 60 ml → $28.000 | 100 ml → $45.000

// ---------- CABALLERO ----------
const productosCaballero = [
    { id: 101, nombre: "212", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Fragancia fresca y juvenil de Carolina Herrera.", descCorta: "Fresco y juvenil.", imagen: "FotosCaballeros/212.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 102, nombre: "212 Heroes", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Versión más intensa y seductora.", descCorta: "Intensa y seductora.", imagen: "FotosCaballeros/212Heroes.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 103, nombre: "212 VIP", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Elegancia y sofisticación.", descCorta: "Elegante y sofisticado.", imagen: "FotosCaballeros/212VIP.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 104, nombre: "212 VIP Black", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Edición limitada con carácter misterioso.", descCorta: "Misterioso y exclusivo.", imagen: "FotosCaballeros/212Black.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 105, nombre: "212 VIP Black Smiley", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Fresco y divertido.", descCorta: "Divertido y fresco.", imagen: "FotosCaballeros/212BlackSmiley.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 106, nombre: "212 VIP Black Red", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Fuerza y pasión.", descCorta: "Fuerza y pasión.", imagen: "FotosCaballeros/212BlackRed.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 107, nombre: "212 VIP Wins", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Triunfo y éxito.", descCorta: "Triunfo y éxito.", imagen: "FotosCaballeros/212Wins.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 108, nombre: "360°", casa: "Perry Ellis", categoria: "caballero", descripcion: "Versátil y atemporal.", descCorta: "Versátil y atemporal.", imagen: "FotosCaballeros/360.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 109, nombre: "360° Red", casa: "Perry Ellis", categoria: "caballero", descripcion: "Cálido y especiado.", descCorta: "Cálido y especiado.", imagen: "FotosCaballeros/360Red.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 110, nombre: "Abercrombie", casa: "Abercrombie & Fitch", categoria: "caballero", descripcion: "Frescura juvenil americana.", descCorta: "Fresco y juvenil.", imagen: "FotosCaballeros/ABERCROMBIE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 111, nombre: "Acqua di Gio", casa: "Giorgio Armani", categoria: "caballero", descripcion: "Clásico marino.", descCorta: "Marino y clásico.", imagen: "FotosCaballeros/ACQUADIGIO.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 112, nombre: "Aqva Marine", casa: "Bvlgari", categoria: "caballero", descripcion: "Acuático y profundo.", descCorta: "Acuático y profundo.", imagen: "FotosCaballeros/AQVAMARINE.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 113, nombre: "Arom", casa: "Yanbal", categoria: "caballero", descripcion: "Aromático y distintivo.", descCorta: "Aromático y distintivo.", imagen: "FotosCaballeros/Arom.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 114, nombre: "Bad Boy", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Intenso y magnético.", descCorta: "Intenso y magnético.", imagen: "FotosCaballeros/BadBoy.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 115, nombre: "Bad Boy Cobalt", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Fresco y eléctrico.", descCorta: "Fresco y eléctrico.", imagen: "FotosCaballeros/BadBoyCobalt.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 116, nombre: "Black XS", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Aromático y especiado.", descCorta: "Aromático y especiado.", imagen: "FotosCaballeros/BlackXS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 117, nombre: "Black XS Afrodita", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Sensual y envolvente.", descCorta: "Sensual y envolvente.", imagen: "FotosCaballeros/BlackXSAfrodita.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 118, nombre: "Black XS L'Exces", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Intenso y adictivo.", descCorta: "Intenso y adictivo.", imagen: "FotosCaballeros/BLACKXS L´EXCES.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 119, nombre: "Black XS Pure", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Puro y energizante.", descCorta: "Puro y energizante.", imagen: "FotosCaballeros/BLACK XS PURE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 120, nombre: "Blue Label", casa: "Givenchy", categoria: "caballero", descripcion: "Elegante y sofisticado.", descCorta: "Elegante y sofisticado.", imagen: "FotosCaballeros/BLUE LABEL GIVENCHY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 121, nombre: "Blue Seduction", casa: "Antonio Banderas", categoria: "caballero", descripcion: "Seductor y fresco.", descCorta: "Seductor y fresco.", imagen: "FotosCaballeros/BLUE SEDUCTION.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 122, nombre: "Blue Jean", casa: "Versace", categoria: "caballero", descripcion: "Clásico y atemporal.", descCorta: "Clásico y atemporal.", imagen: "FotosCaballeros/BLUE JEAN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 123, nombre: "Boss Bottled Tonic", casa: "Hugo Boss", categoria: "caballero", descripcion: "Fresco y cítrico.", descCorta: "Fresco y cítrico.", imagen: "FotosCaballeros/BOSS BOTTLED TONIC.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 124, nombre: "Boss Bottled United", casa: "Hugo Boss", categoria: "caballero", descripcion: "Unión y fuerza.", descCorta: "Unión y fuerza.", imagen: "FotosCaballeros/BOSS BOTTLED UNITED.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 125, nombre: "Bvlgari", casa: "Bvlgari", categoria: "caballero", descripcion: "Clásico italiano.", descCorta: "Clásico italiano.", imagen: "FotosCaballeros/BVLGARI .jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 126, nombre: "Bvlgari Aqva", casa: "Bvlgari", categoria: "caballero", descripcion: "Acuático y profundo.", descCorta: "Acuático y profundo.", imagen: "FotosCaballeros/BVLGARIAQVA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 127, nombre: "Bvlgari Men In Black", casa: "Bvlgari", categoria: "caballero", descripcion: "Misterioso y envolvente.", descCorta: "Misterioso y envolvente.", imagen: "FotosCaballeros/BVLGARIBlack.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 128, nombre: "Carolina Herrera", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Elegancia y distinción.", descCorta: "Elegancia y distinción.", imagen: "FotosCaballeros/CarolinaHerrera.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 129, nombre: "CH", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Moderno y sofisticado.", descCorta: "Moderno y sofisticado.", imagen: "FotosCaballeros/CH.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 130, nombre: "CH Kings", casa: "Carolina Herrera", categoria: "caballero", descripcion: "Rey y seductor.", descCorta: "Rey y seductor.", imagen: "FotosCaballeros/CHKings.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 131, nombre: "CK Be", casa: "Calvin Klein", categoria: "caballero", descripcion: "Unisex y fresco.", descCorta: "Unisex y fresco.", imagen: "FotosCaballeros/CK BE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 132, nombre: "CK Everyone", casa: "Calvin Klein", categoria: "caballero", descripcion: "Inclusivo y fresco.", descCorta: "Inclusivo y fresco.", imagen: "FotosCaballeros/CK EVERYONE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 133, nombre: "CK One", casa: "Calvin Klein", categoria: "caballero", descripcion: "Icónico y unisex.", descCorta: "Icónico y unisex.", imagen: "FotosCaballeros/CK ONE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 134, nombre: "CR7 Origins", casa: "Cristiano Ronaldo", categoria: "caballero", descripcion: "Fuerza y determinación.", descCorta: "Fuerza y determinación.", imagen: "FotosCaballeros/CR7 ORIGINS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 135, nombre: "Declaracion", casa: "Cartier", categoria: "caballero", descripcion: "Declaración de estilo.", descCorta: "Declaración de estilo.", imagen: "FotosCaballeros/DECLARACION CARTIER.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 136, nombre: "Diesel Bad", casa: "Diesel", categoria: "caballero", descripcion: "Rebelde y audaz.", descCorta: "Rebelde y audaz.", imagen: "FotosCaballeros/DIESEL BAD DIESEL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 137, nombre: "Diesel Pluss", casa: "Diesel", categoria: "caballero", descripcion: "Plus de energía.", descCorta: "Plus de energía.", imagen: "FotosCaballeros/DIESEL PLUSS DIESEL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 138, nombre: "Dorsay", casa: "Esika", categoria: "caballero", descripcion: "Elegancia francesa.", descCorta: "Elegancia francesa.", imagen: "FotosCaballeros/DORSAY ESIKA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 139, nombre: "Eau Cartier", casa: "Cartier", categoria: "caballero", descripcion: "Frescura y lujo.", descCorta: "Frescura y lujo.", imagen: "FotosCaballeros/EAU CARTIER CARTIER.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 140, nombre: "Eros", casa: "Versace", categoria: "caballero", descripcion: "Fresco y vigorizante.", descCorta: "Fresco y vigorizante.", imagen: "FotosCaballeros/EROS VERSACE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 141, nombre: "Eros Flamme", casa: "Versace", categoria: "caballero", descripcion: "Intenso y fogoso.", descCorta: "Intenso y fogoso.", imagen: "FotosCaballeros/EROS FLAMME VERSACE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 142, nombre: "Eternity", casa: "Calvin Klein", categoria: "caballero", descripcion: "Clásico y perdurable.", descCorta: "Clásico y perdurable.", imagen: "FotosCaballeros/ETERNITY CALVIN KLEIN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 143, nombre: "Faconable", casa: "Faconable", categoria: "caballero", descripcion: "Estilo y distinción.", descCorta: "Estilo y distinción.", imagen: "FotosCaballeros/FACONABLE FACONABLE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 144, nombre: "Fahrenheit", casa: "Dior", categoria: "caballero", descripcion: "Cálido y amaderado.", descCorta: "Cálido y amaderado.", imagen: "FotosCaballeros/FAHRENHEIT DIOR.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 145, nombre: "Fuel For Life", casa: "Diesel", categoria: "caballero", descripcion: "Energía y vida.", descCorta: "Energía y vida.", imagen: "FotosCaballeros/FUEL FOR LIFE DIESEL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 146, nombre: "Hugo", casa: "Hugo Boss", categoria: "caballero", descripcion: "Fresco y moderno.", descCorta: "Fresco y moderno.", imagen: "FotosCaballeros/HugoBoss.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 147, nombre: "Hugo Boss Energy", casa: "Hugo Boss", categoria: "caballero", descripcion: "Energía positiva.", descCorta: "Energía positiva.", imagen: "FotosCaballeros/HugoBossEnergy.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 148, nombre: "Hugo Boss Gris", casa: "Hugo Boss", categoria: "caballero", descripcion: "Elegancia en gris.", descCorta: "Elegancia en gris.", imagen: "FotosCaballeros/HUGO BOSS GRIS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 149, nombre: "Hugo Boss Orange", casa: "Hugo Boss", categoria: "caballero", descripcion: "Vibrante y fresco.", descCorta: "Vibrante y fresco.", imagen: "FotosCaballeros/HUGO BOSS ORANGE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 150, nombre: "Hugo Boss Red", casa: "Hugo Boss", categoria: "caballero", descripcion: "Pasión y fuerza.", descCorta: "Pasión y fuerza.", imagen: "FotosCaballeros/HUGO BOSS RED.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 151, nombre: "Hugo Boss Reversed", casa: "Hugo Boss", categoria: "caballero", descripcion: "Revolucionario.", descCorta: "Revolucionario.", imagen: "FotosCaballeros/HUGO BOSS REVERSED.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 152, nombre: "Individuel", casa: "Montblanc", categoria: "caballero", descripcion: "Único e individual.", descCorta: "Único e individual.", imagen: "FotosCaballeros/INDIVIDUEL MONTBLANC.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 153, nombre: "Invictus", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Deportivo y energizante.", descCorta: "Deportivo y energizante.", imagen: "FotosCaballeros/INVICTUS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 154, nombre: "Invictus Onix", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Fuerza y carácter.", descCorta: "Fuerza y carácter.", imagen: "FotosCaballeros/INVICTUS ONIX.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 155, nombre: "Invictus Platinum", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Éxito y lujo.", descCorta: "Éxito y lujo.", imagen: "FotosCaballeros/INVICTUS PLATINUM.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 156, nombre: "Invictus Victory Elixir", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Victoria y triunfo.", descCorta: "Victoria y triunfo.", imagen: "FotosCaballeros/INVICTUS VICTORY ELIXIR.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 157, nombre: "Invictus Intense", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Intensidad pura.", descCorta: "Intensidad pura.", imagen: "FotosCaballeros/INVICTUS INTENSE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 158, nombre: "Invictus Legend", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Leyenda viva.", descCorta: "Leyenda viva.", imagen: "FotosCaballeros/INVICTUS LEGEND.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 159, nombre: "Issey Miyake", casa: "Issey Miyake", categoria: "caballero", descripcion: "Acuático y zen.", descCorta: "Acuático y zen.", imagen: "FotosCaballeros/ISSEY MIYAKE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 160, nombre: "Jean Paul", casa: "Jean Paul Gaultier", categoria: "caballero", descripcion: "Audaz y provocador.", descCorta: "Audaz y provocador.", imagen: "FotosCaballeros/JEAN PAUL JEAN PAUL GAULTIER.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 161, nombre: "Lacoste Blanca", casa: "Lacoste", categoria: "caballero", descripcion: "Blancura y frescura.", descCorta: "Blancura y frescura.", imagen: "FotosCaballeros/LACOSTE BLANCA LACOSTE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 162, nombre: "Lacoste Essential", casa: "Lacoste", categoria: "caballero", descripcion: "Esencial y puro.", descCorta: "Esencial y puro.", imagen: "FotosCaballeros/LACOSTE ESSENTIAL LACOSTE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 163, nombre: "Lacoste Negra", casa: "Lacoste", categoria: "caballero", descripcion: "Misterio y elegancia.", descCorta: "Misterio y elegancia.", imagen: "FotosCaballeros/LACOSTE NEGRA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 164, nombre: "Lacoste Red", casa: "Lacoste", categoria: "caballero", descripcion: "Pasión y deporte.", descCorta: "Pasión y deporte.", imagen: "FotosCaballeros/LACOSTE RED.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 165, nombre: "Lacoste Blue", casa: "Lacoste", categoria: "caballero", descripcion: "Marino y fresco.", descCorta: "Marino y fresco.", imagen: "FotosCaballeros/LACOSTE BLUE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 166, nombre: "Lapidus", casa: "Ted Lapidus", categoria: "caballero", descripcion: "Clásico y atemporal.", descCorta: "Clásico y atemporal.", imagen: "FotosCaballeros/LAPIDUS TED LAPIDUS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 167, nombre: "Le Male Elixir", casa: "Jean Paul Gaultier", categoria: "caballero", descripcion: "Elixir de seducción.", descCorta: "Elixir de seducción.", imagen: "FotosCaballeros/LE MALE ELIXIR.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 168, nombre: "Legacy", casa: "Cristiano Ronaldo", categoria: "caballero", descripcion: "Legado de grandeza.", descCorta: "Legado de grandeza.", imagen: "FotosCaballeros/LEGACY CRISTIANO RONALDO.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 169, nombre: "Legend", casa: "Montblanc", categoria: "caballero", descripcion: "Leyenda y prestigio.", descCorta: "Leyenda y prestigio.", imagen: "FotosCaballeros/LEGEND MONTBLANC.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 170, nombre: "Legend Night", casa: "Montblanc", categoria: "caballero", descripcion: "Noche de misterio.", descCorta: "Noche de misterio.", imagen: "FotosCaballeros/LEGEND NIGHT.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 171, nombre: "Light Blue", casa: "Dolce&Gabbana", categoria: "caballero", descripcion: "Azul claro y fresco.", descCorta: "Azul claro y fresco.", imagen: "FotosCaballeros/LIGHT BLUE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 172, nombre: "Nautica Voyage", casa: "Nautica", categoria: "caballero", descripcion: "Viaje marino.", descCorta: "Viaje marino.", imagen: "FotosCaballeros/NAUTICA VOYAGE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 173, nombre: "One Million", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Millonario y audaz.", descCorta: "Millonario y audaz.", imagen: "FotosCaballeros/ONE MILLION.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 174, nombre: "One Million Elixir", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Elixir de éxito.", descCorta: "Elixir de éxito.", imagen: "FotosCaballeros/ONE MILLION ELIXIR.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 175, nombre: "One Million Lucky", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Suerte y éxito.", descCorta: "Suerte y éxito.", imagen: "FotosCaballeros/ONE MILLION LUCKY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 176, nombre: "One Millon Royal", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Real y majestuoso.", descCorta: "Real y majestuoso.", imagen: "FotosCaballeros/ONE MILLION ROYAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 177, nombre: "Only The Brave", casa: "Diesel", categoria: "caballero", descripcion: "Solo los valientes.", descCorta: "Solo los valientes.", imagen: "FotosCaballeros/ONLY THE BRAVE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 178, nombre: "Paris Hilton", casa: "Paris Hilton", categoria: "caballero", descripcion: "Famoso y glamuroso.", descCorta: "Famoso y glamuroso.", imagen: "FotosCaballeros/PARIS HILTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 179, nombre: "Phantom", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Futurista y audaz.", descCorta: "Futurista y audaz.", imagen: "FotosCaballeros/PHANTOM.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 180, nombre: "Prada Luna Rossa Ocean", casa: "Prada", categoria: "caballero", descripcion: "Océano de frescura.", descCorta: "Océano de frescura.", imagen: "FotosCaballeros/PRADA LUNA ROSSA OCEAN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 181, nombre: "Prada Luna Rossa Carbon", casa: "Prada", categoria: "caballero", descripcion: "Carbon y fuerza.", descCorta: "Carbon y fuerza.", imagen: "FotosCaballeros/PRADA LUNA ROSSA CARBON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 182, nombre: "Santos de Cartier", casa: "Cartier", categoria: "caballero", descripcion: "Santos y leyenda.", descCorta: "Santos y leyenda.", imagen: "FotosCaballeros/SANTOS DE CARTIER.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 183, nombre: "Sauvage", casa: "Dior", categoria: "caballero", descripcion: "Salvaje y auténtico.", descCorta: "Salvaje y auténtico.", imagen: "FotosCaballeros/SAUVAGE DIOR.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 184, nombre: "Sauvage Elixir", casa: "Dior", categoria: "caballero", descripcion: "Elixir salvaje.", descCorta: "Elixir salvaje.", imagen: "FotosCaballeros/SAUVAGE ELIXIR DIOR.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 185, nombre: "Scandal", casa: "Jean Paul Gaultier", categoria: "caballero", descripcion: "Escándalo y provocación.", descCorta: "Escándalo y provocación.", imagen: "FotosCaballeros/SCANDAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 186, nombre: "Solo Loewe", casa: "Loewe", categoria: "caballero", descripcion: "Solo y auténtico.", descCorta: "Solo y auténtico.", imagen: "FotosCaballeros/SOLO LOEWE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 187, nombre: "Starwalker", casa: "Montblanc", categoria: "caballero", descripcion: "Caminante de estrellas.", descCorta: "Caminante de estrellas.", imagen: "FotosCaballeros/STARWALKER.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 188, nombre: "Stradivarius", casa: "Stradivarius", categoria: "caballero", descripcion: "Música y estilo.", descCorta: "Música y estilo.", imagen: "FotosCaballeros/STRADIVARIUS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 189, nombre: "Swiss Army", casa: "Victorinox", categoria: "caballero", descripcion: "Suizo y robusto.", descCorta: "Suizo y robusto.", imagen: "FotosCaballeros/SWISS ARMY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 190, nombre: "Tommy", casa: "Tommy Hilfiger", categoria: "caballero", descripcion: "Americano y fresco.", descCorta: "Americano y fresco.", imagen: "FotosCaballeros/TOMMY TOMMY HILFIGER.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 191, nombre: "Toy Boy", casa: "Moschino", categoria: "caballero", descripcion: "Juguete y diversión.", descCorta: "Juguete y diversión.", imagen: "FotosCaballeros/TOY BOY MOSCHINO.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 192, nombre: "Unlimited", casa: "Hugo Boss", categoria: "caballero", descripcion: "Sin límites.", descCorta: "Sin límites.", imagen: "FotosCaballeros/UNLIMITED HUGO BOSS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 193, nombre: "Ultramale", casa: "Jean Paul Gaultier", categoria: "caballero", descripcion: "Ultra masculino.", descCorta: "Ultra masculino.", imagen: "FotosCaballeros/ULTRAMALE JEAN PAUL GAULTIER.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 194, nombre: "Versace", casa: "Versace", categoria: "caballero", descripcion: "Lujo italiano.", descCorta: "Lujo italiano.", imagen: "FotosCaballeros/VERSACE VERSACE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 195, nombre: "Victory", casa: "Paco Rabanne", categoria: "caballero", descripcion: "Victoria y éxito.", descCorta: "Victoria y éxito.", imagen: "FotosCaballeros/VICTORY PACO RABANNE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 196, nombre: "Zlatan", casa: "Zlatan Ibrahimovic", categoria: "caballero", descripcion: "Fuerza y talento.", descCorta: "Fuerza y talento.", imagen: "FotosCaballeros/ZLATAN ZLATAN IBRAHIMOVIC.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 197, nombre: "Solo Yanbal", casa: "Yanbal", categoria: "caballero", descripcion: "Solo y exclusivo.", descCorta: "Solo y exclusivo.", imagen: "FotosCaballeros/SOLO YANBAL YANBAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 198, nombre: "Winner Sport", casa: "Esika", categoria: "caballero", descripcion: "Deporte y triunfo.", descCorta: "Deporte y triunfo.", imagen: "FotosCaballeros/WINNER SPORT ESIKA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 199, nombre: "Ohm", casa: "Yanbal", categoria: "caballero", descripcion: "Energía y vibración.", descCorta: "Energía y vibración.", imagen: "FotosCaballeros/OHM YANBAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 200, nombre: "Adrenalina", casa: "Yanbal", categoria: "caballero", descripcion: "Adrenalina pura.", descCorta: "Adrenalina pura.", imagen: "FotosCaballeros/ADRENALINA YANBAL.jpg.png", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 201, nombre: "Osadia", casa: "Yanbal", categoria: "caballero", descripcion: "Osadía y atrevimiento.", descCorta: "Osadía y atrevimiento.", imagen: "FotosCaballeros/OSADIA YANBAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] }
];

// ---------- DAMA ----------
const productosDama = [
    { id: 301, nombre: "212", casa: "Carolina Herrera", categoria: "dama", descripcion: "Femenino y floral, para la mujer que brilla.", descCorta: "Femenino y floral.", imagen: "FotosDamas/212.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 302, nombre: "212 Heroes", casa: "Carolina Herrera", categoria: "dama", descripcion: "Heroína en cada gota.", descCorta: "Heroína.", imagen: "FotosDamas/212Heroes.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 303, nombre: "212 VIP", casa: "Carolina Herrera", categoria: "dama", descripcion: "Elegancia y sofisticación femenina.", descCorta: "Elegante y sofisticada.", imagen: "FotosDamas/212VIP.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 304, nombre: "212 VIP Rosé", casa: "Carolina Herrera", categoria: "dama", descripcion: "Rosado y vibrante.", descCorta: "Rosado y vibrante.", imagen: "FotosDamas/212VIPROSE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 305, nombre: "212 VIP Rosé Red", casa: "Carolina Herrera", categoria: "dama", descripcion: "Rojo pasión.", descCorta: "Rojo pasión.", imagen: "FotosDamas/212VIPROSERED.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 306, nombre: "212 VIP Rosé Smile", casa: "Carolina Herrera", categoria: "dama", descripcion: "Sonrisa y alegría.", descCorta: "Sonrisa y alegría.", imagen: "FotosDamas/212VIPROSESMILEY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 307, nombre: "212 VIP Wins", casa: "Carolina Herrera", categoria: "dama", descripcion: "Triunfo femenino.", descCorta: "Triunfo femenino.", imagen: "FotosDamas/212 VIP WINS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 308, nombre: "360°", casa: "Perry Ellis", categoria: "dama", descripcion: "Versátil y atemporal.", descCorta: "Versátil y atemporal.", imagen: "FotosDamas/360°.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 309, nombre: "Agua de Sol", casa: "Escada", categoria: "dama", descripcion: "Agua de sol, una fragancia luminosa.", descCorta: "Agua de sol.", imagen: "FotosDamas/AGUA DE SOL ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 310, nombre: "Amor Amor", casa: "Cacharel", categoria: "dama", descripcion: "Romántico y frutal.", descCorta: "Romántico y frutal.", imagen: "FotosDamas/AMOR AMOR CACHAREL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 311, nombre: "BFF", casa: "KKW", categoria: "dama", descripcion: "Mejores amigas.", descCorta: "Mejores amigas.", imagen: "FotosDamas/BFF KKW.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 312, nombre: "Black XS", casa: "Paco Rabanne", categoria: "dama", descripcion: "Femenino especiado.", descCorta: "Femenino especiado.", imagen: "FotosDamas/BLACK XS PACO RABANNE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 313, nombre: "Bombón (Juiced Berry)", casa: "Victoria's Secret", categoria: "dama", descripcion: "Dulce y frutal.", descCorta: "Dulce y frutal.", imagen: "FotosDamas/BOMBÓN (Juiced Berry).jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 314, nombre: "Bombshell", casa: "Victoria's Secret", categoria: "dama", descripcion: "Fascinante y vibrante.", descCorta: "Fascinante y vibrante.", imagen: "FotosDamas/BOMBSHELL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 315, nombre: "Bombshell Magic", casa: "Victoria's Secret", categoria: "dama", descripcion: "Mágico y seductor.", descCorta: "Mágico y seductor.", imagen: "FotosDamas/BOMBSHELL MAGIC.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 316, nombre: "Boss Alive", casa: "Hugo Boss", categoria: "dama", descripcion: "Viva y audaz.", descCorta: "Viva y audaz.", imagen: "FotosDamas/BOSS ALIVEjpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 317, nombre: "Boss Alive Intense", casa: "Hugo Boss", categoria: "dama", descripcion: "Viva e intensa.", descCorta: "Viva e intensa.", imagen: "FotosDamas/BOSS ALIVE INTENSE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 318, nombre: "Bright Crystal", casa: "Versace", categoria: "dama", descripcion: "Luminoso y floral.", descCorta: "Luminoso y floral.", imagen: "FotosDamas/BRIGHT CRYSTAL VERSACE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 319, nombre: "Burberry", casa: "Burberry", categoria: "dama", descripcion: "Clásico británico.", descCorta: "Clásico británico.", imagen: "FotosDamas/BURBERRY BURBERRY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 320, nombre: "Burberry Her Elixir", casa: "Burberry", categoria: "dama", descripcion: "Elixir de feminidad.", descCorta: "Elixir de feminidad.", imagen: "FotosDamas/BURBERRY HER ELIXIR.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 321, nombre: "Can Can", casa: "Paris Hilton", categoria: "dama", descripcion: "Dulce y juvenil.", descCorta: "Dulce y juvenil.", imagen: "FotosDamas/CAN CAN PARIS HILTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 322, nombre: "Can Can Burlesque", casa: "Paris Hilton", categoria: "dama", descripcion: "Burlesque y audaz.", descCorta: "Burlesque y audaz.", imagen: "FotosDamas/CAN CAN BURLESQUE PARIS HILTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 323, nombre: "Candy Love", casa: "Escada", categoria: "dama", descripcion: "Amor dulce.", descCorta: "Amor dulce.", imagen: "FotosDamas/CANDY LOVE ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 324, nombre: "Candy Rose", casa: "Montale", categoria: "dama", descripcion: "Rosa y dulzura.", descCorta: "Rosa y dulzura.", imagen: "FotosDamas/CANDY ROSE MONTALE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 325, nombre: "Carolina Herrera", casa: "Carolina Herrera", categoria: "dama", descripcion: "Elegancia femenina.", descCorta: "Elegancia femenina.", imagen: "FotosDamas/CAROLINA HERRERA CAROLINA HERRERA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 326, nombre: "Celos", casa: "Yanbal", categoria: "dama", descripcion: "Celos y pasión.", descCorta: "Celos y pasión.", imagen: "FotosDamas/CELO YANBAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 327, nombre: "Cielo", casa: "Yanbal", categoria: "dama", descripcion: "Cielo y frescura.", descCorta: "Cielo y frescura.", imagen: "FotosDamas/CiELOYANBAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 328, nombre: "CH", casa: "Carolina Herrera", categoria: "dama", descripcion: "CH femenino.", descCorta: "CH femenino.", imagen: "FotosDamas/CH CAROLINA HERRERA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 329, nombre: "Chance", casa: "Chanel", categoria: "dama", descripcion: "Oportunidad y elegancia.", descCorta: "Oportunidad y elegancia.", imagen: "FotosDamas/CHANCE CHANEL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 330, nombre: "Chanel #5", casa: "Chanel", categoria: "dama", descripcion: "Ícono de la perfumería.", descCorta: "Ícono de la perfumería.", imagen: "FotosDamas/CHANEL5.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 331, nombre: "Cherry", casa: "Escada", categoria: "dama", descripcion: "Cereza y frescura.", descCorta: "Cereza y frescura.", imagen: "FotosDamas/CHERRY ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 332, nombre: "CK IN 2U", casa: "Calvin Klein", categoria: "dama", descripcion: "Fresco y juvenil.", descCorta: "Fresco y juvenil.", imagen: "FotosDamas/CK IN 2U CALVIN KLEIN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 333, nombre: "CK Shock", casa: "Calvin Klein", categoria: "dama", descripcion: "Impacto y energía.", descCorta: "Impacto y energía.", imagen: "FotosDamas/CK SHOCK.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 334, nombre: "Cloud", casa: "Ariana Grande", categoria: "dama", descripcion: "Nube y suavidad.", descCorta: "Nube y suavidad.", imagen: "FotosDamas/CLOUD ARIANA GRANDE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 335, nombre: "Coconut", casa: "Victoria's Secret", categoria: "dama", descripcion: "Coco y frescura tropical.", descCorta: "Coco y frescura.", imagen: "FotosDamas/COCONUT VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 336, nombre: "Ccori Rose", casa: "Yanbal", categoria: "dama", descripcion: "Rosa y pasión.", descCorta: "Rosa y pasión.", imagen: "FotosDamas/CCORI ROSE YANBAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 337, nombre: "Ccori Passion", casa: "Yanbal", categoria: "dama", descripcion: "Pasión intensa.", descCorta: "Pasión intensa.", imagen: "FotosDamas/CCORI PASSION YANBAL.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 338, nombre: "Dame Amor", casa: "Victoria's Secret", categoria: "dama", descripcion: "Amor y dulzura.", descCorta: "Amor y dulzura.", imagen: "FotosDamas/DAME AMOR VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 339, nombre: "Dazzle", casa: "Paris Hilton", categoria: "dama", descripcion: "Deslumbrante y brillante.", descCorta: "Deslumbrante.", imagen: "FotosDamas/DAZZLE PARIS HILTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 340, nombre: "Dream Angel", casa: "Victoria's Secret", categoria: "dama", descripcion: "Ángel de ensueño.", descCorta: "Ángel de ensueño.", imagen: "FotosDamas/DREAM ANGEL VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 341, nombre: "Fantasy", casa: "Britney Spears", categoria: "dama", descripcion: "Fantasía y diversión.", descCorta: "Fantasía.", imagen: "FotosDamas/FANTASY BRITNEY SPEARS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 342, nombre: "Flor del Sol", casa: "Escada", categoria: "dama", descripcion: "Flor de sol.", descCorta: "Flor de sol.", imagen: "FotosDamas/FLOR DEL SOL ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 343, nombre: "Funny", casa: "Moschino", categoria: "dama", descripcion: "Divertida y fresca.", descCorta: "Divertida y fresca.", imagen: "FotosDamas/FUNNY MOSCHINO.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 344, nombre: "Gaia", casa: "Gaia", categoria: "dama", descripcion: "Tierra y naturaleza.", descCorta: "Tierra y naturaleza.", imagen: "FotosDamas/GAIA GAIA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 345, nombre: "Gold Struck", casa: "Victoria's Secret", categoria: "dama", descripcion: "Oro y brillo.", descCorta: "Oro y brillo.", imagen: "FotosDamas/GOLD STRUCK VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 346, nombre: "Golden Rush", casa: "Paris Hilton", categoria: "dama", descripcion: "Rush dorado.", descCorta: "Rush dorado.", imagen: "FotosDamas/GOLDEN RUSH PARIS HILTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 347, nombre: "Good Girl", casa: "Carolina Herrera", categoria: "dama", descripcion: "Buena chica, mala esencia.", descCorta: "Buena chica.", imagen: "FotosDamas/GOOD GIRL CAROLINA HERRERA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 348, nombre: "Good Girl Legere", casa: "Carolina Herrera", categoria: "dama", descripcion: "Buena chica, ligera.", descCorta: "Buena chica ligera.", imagen: "FotosDamas/GOOD GIRL LEGERE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 349, nombre: "Heiress", casa: "Paris Hilton", categoria: "dama", descripcion: "Heredera y glamour.", descCorta: "Heredera.", imagen: "FotosDamas/HEIRESS PARIS HILTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 350, nombre: "J'adore", casa: "Dior", categoria: "dama", descripcion: "Adoro, la esencia de Dior.", descCorta: "Adoro.", imagen: "FotosDamas/J´ADORE DIOR.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 351, nombre: "La Vida es Bella", casa: "Lancome", categoria: "dama", descripcion: "La vida es bella.", descCorta: "La vida es bella.", imagen: "FotosDamas/LA VIDA ES BELLA LANCOME.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 352, nombre: "Lady Million", casa: "Paco Rabanne", categoria: "dama", descripcion: "Millonaria y audaz.", descCorta: "Millonaria.", imagen: "FotosDamas/LADY MILLION.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 353, nombre: "Light Blue", casa: "Dolce&Gabbana", categoria: "dama", descripcion: "Azul claro, frescura mediterránea.", descCorta: "Azul claro.", imagen: "FotosDamas/LIGHT BLUE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 354, nombre: "Loco por Ti (Mad about you)", casa: "Bath & Body Works", categoria: "dama", descripcion: "Loco por ti.", descCorta: "Loco por ti.", imagen: "FotosDamas/LOCO POR TI (Mad about you).jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 355, nombre: "Lolita Lempicka", casa: "Lolita Lempicka", categoria: "dama", descripcion: "Dulce y misteriosa.", descCorta: "Dulce y misteriosa.", imagen: "FotosDamas/LOLITA LEMPICKA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 356, nombre: "Luminous Nectar", casa: "Zara", categoria: "dama", descripcion: "Néctar luminoso.", descCorta: "Néctar luminoso.", imagen: "FotosDamas/LUMINOUS NECTAR ZARA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 357, nombre: "Mademoiselle", casa: "Coco Chanel", categoria: "dama", descripcion: "Señorita, elegancia.", descCorta: "Señorita.", imagen: "FotosDamas/MADEMOISELLE  COCO CHANEL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 358, nombre: "Mango", casa: "Victoria's Secret", categoria: "dama", descripcion: "Mango tropical.", descCorta: "Mango.", imagen: "FotosDamas/MANGO VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 359, nombre: "Meow", casa: "Katy Perry", categoria: "dama", descripcion: "Miau, divertida y felina.", descCorta: "Divertida y felina.", imagen: "FotosDamas/MEOW KATY PERRY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 360, nombre: "Miami Blossom", casa: "Escada", categoria: "dama", descripcion: "Flor de Miami.", descCorta: "Flor de Miami.", imagen: "FotosDamas/MIAMI BLOSSOM ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 361, nombre: "Midnight Dare", casa: "Victoria's Secret", categoria: "dama", descripcion: "Desafío a medianoche.", descCorta: "Medianoche.", imagen: "FotosDamas/MIDNIGHT DARE VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 362, nombre: "Midnight Fantasy", casa: "Britney Spears", categoria: "dama", descripcion: "Fantasía de medianoche.", descCorta: "Fantasía de medianoche.", imagen: "FotosDamas/MIDNIGHT FANTASSY BRITNEY SPEARS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 363, nombre: "Midnight Shimmer", casa: "Michael Kors", categoria: "dama", descripcion: "Brillo de medianoche.", descCorta: "Brillo de medianoche.", imagen: "FotosDamas/MIDNIGHT SHIMMER MICHAEL KORS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 364, nombre: "Moon Sparkle", casa: "Escada", categoria: "dama", descripcion: "Destello lunar.", descCorta: "Destello lunar.", imagen: "FotosDamas/MOON SPARKLE ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 365, nombre: "Olympea", casa: "Paco Rabanne", categoria: "dama", descripcion: "Olimpo divino.", descCorta: "Olimpo.", imagen: "FotosDamas/OLYMPEA PACO RABANNE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 366, nombre: "Omnia Amatista", casa: "Bvlgari", categoria: "dama", descripcion: "Amatista y misterio.", descCorta: "Amatista.", imagen: "FotosDamas/OMNIA AMATISTA BVLGARI.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 367, nombre: "Omnia Coral", casa: "Bvlgari", categoria: "dama", descripcion: "Coral vibrante.", descCorta: "Coral.", imagen: "FotosDamas/OMNIA CORAL BVLGARI.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 368, nombre: "Omnia Crystal", casa: "Bvlgari", categoria: "dama", descripcion: "Cristal puro.", descCorta: "Cristal.", imagen: "FotosDamas/OMNIA CRYSTAL BVLGARI.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 369, nombre: "Osadia", casa: "Yanbal", categoria: "dama", descripcion: "Osadía y atrevimiento.", descCorta: "Osadía.", imagen: "FotosDamas/OSADIA YANBAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 370, nombre: "Paris Hilton", casa: "Paris Hilton", categoria: "dama", descripcion: "Glamour de celebridad.", descCorta: "Glamour.", imagen: "FotosDamas/PARIS HILTON PARIS HILTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 371, nombre: "Party", casa: "Victoria's Secret", categoria: "dama", descripcion: "Fiesta y diversión.", descCorta: "Fiesta.", imagen: "FotosDamas/PARTY VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 372, nombre: "Passport", casa: "Paris Hilton", categoria: "dama", descripcion: "Pasaporte al lujo.", descCorta: "Pasaporte.", imagen: "FotosDamas/PASSPORT PARIS HILTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 373, nombre: "Pink Chiffon", casa: "Bath & Body Works", categoria: "dama", descripcion: "Chiffon rosa.", descCorta: "Chiffon rosa.", imagen: "FotosDamas/PINK CHIFFON BATH & BODY WORKS.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 374, nombre: "Prada Paradoxe", casa: "Prada", categoria: "dama", descripcion: "Paradoja de Prada.", descCorta: "Paradoja.", imagen: "FotosDamas/PRADA PARADOXE PRADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 375, nombre: "Pure", casa: "Victoria's Secret", categoria: "dama", descripcion: "Pure dulce.", descCorta: "Pure.", imagen: "FotosDamas/Pruna Victoria's Secret.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 376, nombre: "Pure Daydream", casa: "Victoria's Secret", categoria: "dama", descripcion: "Sueño puro.", descCorta: "Sueño puro.", imagen: "FotosDamas/PURE DAYDREAM VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 377, nombre: "Ralph Lauren", casa: "Ralph Lauren", categoria: "dama", descripcion: "Estilo americano.", descCorta: "Estilo americano.", imagen: "FotosDamas/RALPH LAUREN RALPH LAUREN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 378, nombre: "Rhapsody", casa: "Louis Vuitton", categoria: "dama", descripcion: "Rapsodia de lujo.", descCorta: "Rapsodia.", imagen: "FotosDamas/RHAPSODY LOUIS VUITTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 379, nombre: "Rock by Shakira", casa: "Shakira", categoria: "dama", descripcion: "Rock y ritmo.", descCorta: "Rock.", imagen: "FotosDamas/ROCK BY SHAKIRA SHAKIRA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 380, nombre: "Ruby Rush", casa: "Paris Hilton", categoria: "dama", descripcion: "Rush de rubí.", descCorta: "Rush de rubí.", imagen: "FotosDamas/RUBY RUSH PARIS HILTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 381, nombre: "Selena Gomez", casa: "Selena Gomez", categoria: "dama", descripcion: "Fresca y juvenil.", descCorta: "Juvenil.", imagen: "FotosDamas/SELENA GOMEZ.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 382, nombre: "Sexy Graffiti", casa: "Escada", categoria: "dama", descripcion: "Graffiti sexy.", descCorta: "Graffiti sexy.", imagen: "FotosDamas/SEXY GRAFFITI ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 383, nombre: "Sheer Love", casa: "Victoria's Secret", categoria: "dama", descripcion: "Amor puro.", descCorta: "Amor puro.", imagen: "FotosDamas/SHEER LOVE VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 384, nombre: "Show Me Love", casa: "Escada", categoria: "dama", descripcion: "Muéstrame amor.", descCorta: "Muéstrame amor.", imagen: "FotosDamas/SHOW ME LOVE ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 385, nombre: "Sofia", casa: "Sofia Vergara", categoria: "dama", descripcion: "Sofía, elegancia latina.", descCorta: "Elegancia latina.", imagen: "FotosDamas/SOFIA SOFIA VERGARA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 386, nombre: "Sorbetto Rosso", casa: "Escada", categoria: "dama", descripcion: "Sorbete rojo.", descCorta: "Sorbete rojo.", imagen: "FotosDamas/SORBETTO ROSSO ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 387, nombre: "Summer Festival", casa: "Escada", categoria: "dama", descripcion: "Festival de verano.", descCorta: "Festival de verano.", imagen: "FotosDamas/SUMMER FESTIVAL ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 388, nombre: "So Sexy", casa: "Victoria's Secret", categoria: "dama", descripcion: "Tan sexy.", descCorta: "Tan sexy.", imagen: "FotosDamas/SO SEXY VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 389, nombre: "Taj Sunset", casa: "Escada", categoria: "dama", descripcion: "Atardecer en Taj.", descCorta: "Atardecer en Taj.", imagen: "FotosDamas/TAJ SUNSET ESCADA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 390, nombre: "Tease", casa: "Victoria's Secret", categoria: "dama", descripcion: "Provocación.", descCorta: "Provocación.", imagen: "FotosDamas/TEASE VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 391, nombre: "Temptation", casa: "Yanbal", categoria: "dama", descripcion: "Tentación.", descCorta: "Tentación.", imagen: "FotosDamas/TEMPTATION YANBAL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 392, nombre: "Thank U, Next", casa: "Ariana Grande", categoria: "dama", descripcion: "Gracias, siguiente.", descCorta: "Gracias, siguiente.", imagen: "FotosDamas/THANK U,NEXT ARIANA GRANDE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 393, nombre: "Tommy", casa: "Tommy Hilfiger", categoria: "dama", descripcion: "Americana y fresca.", descCorta: "Americana y fresca.", imagen: "FotosDamas/TOMMY TOMMY HILFIGER.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 394, nombre: "Touch of Pink", casa: "Lacoste", categoria: "dama", descripcion: "Toque de rosa.", descCorta: "Toque de rosa.", imagen: "FotosDamas/TOUCH OF PINK LACOSTE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 395, nombre: "Vanilla Lace", casa: "Victoria's Secret", categoria: "dama", descripcion: "Encaje de vainilla.", descCorta: "Encaje de vainilla.", imagen: "FotosDamas/VANILLA LACE VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 396, nombre: "Very Sexy", casa: "Victoria's Secret", categoria: "dama", descripcion: "Muy sexy.", descCorta: "Muy sexy.", imagen: "FotosDamas/VERY SEXY VICTORIA´S SECRET.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 397, nombre: "Very Good Girl", casa: "Carolina Herrera", categoria: "dama", descripcion: "Muy buena chica.", descCorta: "Muy buena chica.", imagen: "FotosDamas/VERY GOOD GIRL CAROLINA HERRERA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 398, nombre: "Vivamore", casa: "Selena Gomez", categoria: "dama", descripcion: "Vivamore, vive más.", descCorta: "Vive más.", imagen: "FotosDamas/VIVAMORE SELENA GOMEZ.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 399, nombre: "Yara", casa: "Lattafa", categoria: "dama", descripcion: "Yara, fragancia oriental.", descCorta: "Oriental.", imagen: "FotosDamas/YARA LATTAFA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 400, nombre: "Yes I Am", casa: "Cacharel", categoria: "dama", descripcion: "Sí, yo soy.", descCorta: "Sí, yo soy.", imagen: "FotosDamas/YES I AM CACHAREL.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] }
];

// ---------- NICHO ----------
const productosNicho = [
    { id: 501, nombre: "Althair", casa: "Parfums de Marly", categoria: "nicho", descripcion: "Cálido y especiado.", descCorta: "Cálido y especiado.", imagen: "FotosNicho/ALTHAIR PARFUMS DE MARLY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 502, nombre: "Amber Oud (tradicional)", casa: "Al Haramain", categoria: "nicho", descripcion: "Oud tradicional.", descCorta: "Oud tradicional.", imagen: "FotosNicho/AMBER OUD (tradicional) AL HARAMAIN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 503, nombre: "Amber Oud Gold", casa: "Al Haramain", categoria: "nicho", descripcion: "Oud dorado.", descCorta: "Oud dorado.", imagen: "FotosNicho/AMBER OUD GOLD AL HARAMAIN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 504, nombre: "Amber Oud Rouge", casa: "Al Haramain", categoria: "nicho", descripcion: "Oud rojo.", descCorta: "Oud rojo.", imagen: "FotosNicho/AMBER OUD ROUGE AL HARAMAIN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 505, nombre: "Arabians Tonka", casa: "Montale", categoria: "nicho", descripcion: "Tonka y especias.", descCorta: "Tonka y especias.", imagen: "FotosNicho/ARABIANS TONKA MONTALE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 506, nombre: "Asad", casa: "Lattafa", categoria: "nicho", descripcion: "Fuerte y penetrante.", descCorta: "Fuerte y penetrante.", imagen: "FotosNicho/ASAD LATTAFA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 507, nombre: "Aventus", casa: "Creed", categoria: "nicho", descripcion: "Fresco y afrutado.", descCorta: "Fresco y afrutado.", imagen: "FotosNicho/AVENTUS CREED.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 508, nombre: "Bharara Bleu", casa: "Bharara", categoria: "nicho", descripcion: "Azul profundo.", descCorta: "Azul profundo.", imagen: "FotosNicho/BHARARA BLEU BHARARA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 509, nombre: "Bharara King", casa: "Bharara", categoria: "nicho", descripcion: "Rey de nicho.", descCorta: "Rey de nicho.", imagen: "FotosNicho/BHARARA KING BHARARA.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 510, nombre: "Bharara Niche", casa: "Bharara", categoria: "nicho", descripcion: "Niche puro.", descCorta: "Niche puro.", imagen: "FotosNicho/BHARARA NICHE BHARARA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 511, nombre: "Black Phantom", casa: "By Kilian", categoria: "nicho", descripcion: "Fantasma negro.", descCorta: "Fantasma negro.", imagen: "FotosNicho/BLACK PHANTOM BY KILIAN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 512, nombre: "Club De Nuit Intense", casa: "Armaf", categoria: "nicho", descripcion: "Intenso y nocturno.", descCorta: "Intenso y nocturno.", imagen: "FotosNicho/CLUB DE NUIT INTENSE ARMAF.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 513, nombre: "Silver Mountain Water", casa: "Creed", categoria: "nicho", descripcion: "Agua de montaña.", descCorta: "Agua de montaña.", imagen: "FotosNicho/SILVER MOUNTAIN WATER CREED.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 514, nombre: "Erba Pura", casa: "Xerjoff", categoria: "nicho", descripcion: "Frutal y almizclado.", descCorta: "Frutal y almizclado.", imagen: "FotosNicho/ERBA PURA XERJOFF.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 515, nombre: "Fakhir Black", casa: "Lattafa", categoria: "nicho", descripcion: "Negro y audaz.", descCorta: "Negro y audaz.", imagen: "FotosNicho/FAKHAR BLACK LATTAFA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 516, nombre: "Herod", casa: "Parfums de Marly", categoria: "nicho", descripcion: "Tabaco y vainilla.", descCorta: "Tabaco y vainilla.", imagen: "FotosNicho/HEROD PARFUMS DE MARLY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 517, nombre: "Il Ego", casa: "Ilmin", categoria: "nicho", descripcion: "Ego y personalidad.", descCorta: "Ego y personalidad.", imagen: "FotosNicho/IL EGO ILMIN.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 518, nombre: "Il Femme", casa: "Ilmin", categoria: "nicho", descripcion: "Femenino y sensual.", descCorta: "Femenino y sensual.", imagen: "FotosNicho/IL FEMME ILMIN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 519, nombre: "Il Kakuno", casa: "Ilmin", categoria: "nicho", descripcion: "Único y especial.", descCorta: "Único y especial.", imagen: "FotosNicho/IL KAKUNO ILMIN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 520, nombre: "Instant Crush", casa: "Mancera", categoria: "nicho", descripcion: "Amor instantáneo.", descCorta: "Amor instantáneo.", imagen: "FotosNicho/INSTANT CRUSH MANCERA .jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 521, nombre: "L'Aventure", casa: "Al Haramain", categoria: "nicho", descripcion: "Aventura olfativa.", descCorta: "Aventura.", imagen: "FotosNicho/L'AVENTURE Al Haramain AL HARAMAIN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 522, nombre: "Love By Kilian", casa: "By Kilian", categoria: "nicho", descripcion: "Amor by Kilian.", descCorta: "Amor.", imagen: "FotosNicho/LOVE BY KILIAN BY KILIAN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 523, nombre: "Ombre Nomade", casa: "Louis Vuitton", categoria: "nicho", descripcion: "Oud y frambuesa.", descCorta: "Oud y frambuesa.", imagen: "FotosNicho/OMBRE NOMADE LOUIS VUITTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 524, nombre: "Orientica Royal Amber", casa: "Orientica", categoria: "nicho", descripcion: "Ámbar real.", descCorta: "Ámbar real.", imagen: "FotosNicho/ORIENTICA ROYAL AMBER.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 525, nombre: "Orza", casa: "Tiziana Terenzi", categoria: "nicho", descripcion: "Orza, lujo italiano.", descCorta: "Lujo italiano.", imagen: "FotosNicho/ORZA TIZIANA TERENZI.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 526, nombre: "Oud for Greatness", casa: "Initio", categoria: "nicho", descripcion: "Oud y especias.", descCorta: "Oud y especias.", imagen: "FotosNicho/OUD FOR GREATNESS INITIO.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 527, nombre: "Oud Saffron", casa: "Orientica", categoria: "nicho", descripcion: "Oud y azafrán.", descCorta: "Oud y azafrán.", imagen: "FotosNicho/OUD SAFFRON ORIENTICA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 528, nombre: "Sedley", casa: "Parfums de Marly", categoria: "nicho", descripcion: "Fresco y vibrante.", descCorta: "Fresco y vibrante.", imagen: "FotosNicho/SEDLEY PARFUMS DE MARLY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 529, nombre: "Santal 33", casa: "Le Labo", categoria: "nicho", descripcion: "Amaderado y cuero.", descCorta: "Amaderado y cuero.", imagen: "FotosNicho/SANTAL 33 LE LABO.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 530, nombre: "Starry Night", casa: "Montale", categoria: "nicho", descripcion: "Noche estrellada.", descCorta: "Noche estrellada.", imagen: "FotosNicho/STARRY NIGHT MONTALE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 531, nombre: "Tabac Royal", casa: "Royal Crown", categoria: "nicho", descripcion: "Tabaco real.", descCorta: "Tabaco real.", imagen: "FotosNicho/TABAC ROYAL ROYAL CROWN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 532, nombre: "Vega", casa: "Ahli", categoria: "nicho", descripcion: "Vega, lujo oriental.", descCorta: "Lujo oriental.", imagen: "FotosNicho/VEGA AHLI.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 533, nombre: "Baccarat Rouge", casa: "Maison Francis Kurkdjian", categoria: "nicho", descripcion: "Amaderado y especiado.", descCorta: "Amaderado y especiado.", imagen: "FotosNicho/BACCARAT ROUGE MAISON FRANCIS KURKDJIAN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 534, nombre: "Bade'e Al Oud Amethyst", casa: "Lattafa", categoria: "nicho", descripcion: "Oud amatista.", descCorta: "Oud amatista.", imagen: "FotosNicho/BADE'E AL OUD AMATHYST LATTAFA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 535, nombre: "Bade'e Al Oud Honor & Glory", casa: "Lattafa", categoria: "nicho", descripcion: "Honor y gloria.", descCorta: "Honor y gloria.", imagen: "FotosNicho/BADE'E AL OUD HONOR &GLORY LATTAFA.jpg.jpg", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 536, nombre: "Bade'e Al Oud Sublime", casa: "Lattafa", categoria: "nicho", descripcion: "Sublime oud.", descCorta: "Sublime oud.", imagen: "FotosNicho/BADE'E AL OUD SUBLIME LATTAFA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 537, nombre: "Delina Exclusif", casa: "Parfums de Marly", categoria: "nicho", descripcion: "Delina exclusiva.", descCorta: "Delina exclusiva.", imagen: "FotosNicho/DELINA EXCLUSIF PARFUMS DE MARLY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 538, nombre: "Devotion", casa: "Dolce&Gabbana", categoria: "nicho", descripcion: "Devoción.", descCorta: "Devoción.", imagen: "FotosNicho/DEVOTION DOLCE&GABBANA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 539, nombre: "Delina", casa: "Parfums de Marly", categoria: "nicho", descripcion: "Delina floral.", descCorta: "Delina floral.", imagen: "FotosNicho/DELINA PARFUMS DE MARLY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 540, nombre: "Dylan Purple", casa: "Versace", categoria: "nicho", descripcion: "Púrpura de Versace.", descCorta: "Púrpura.", imagen: "FotosNicho/DYLAN PURPLE VERSACE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 541, nombre: "Electric Cherry", casa: "Tom Ford", categoria: "nicho", descripcion: "Cereza eléctrica.", descCorta: "Cereza eléctrica.", imagen: "FotosNicho/ELECTRIC CHERRY TOM FORD.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 542, nombre: "Fame", casa: "Paco Rabanne", categoria: "nicho", descripcion: "Fama y éxito.", descCorta: "Fama.", imagen: "FotosNicho/FAME PACO RABANNE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 543, nombre: "Il Roso", casa: "Ilmin", categoria: "nicho", descripcion: "Roso, intenso.", descCorta: "Roso.", imagen: "FotosNicho/IL ROSO ILMIN.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 544, nombre: "Intense Cafe", casa: "Montale", categoria: "nicho", descripcion: "Café intenso.", descCorta: "Café intenso.", imagen: "FotosNicho/INTENSE CAFE MONTALE.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 545, nombre: "Kalan", casa: "Parfums de Marly", categoria: "nicho", descripcion: "Kalan, sofisticado.", descCorta: "Sofisticado.", imagen: "FotosNicho/KALAN PARFUMS DE MARLY.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 546, nombre: "Attrape Reves", casa: "Louis Vuitton", categoria: "nicho", descripcion: "Atrapa sueños.", descCorta: "Atrapa sueños.", imagen: "FotosNicho/ATTRAPE REVES LOUIS VUITTON.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 547, nombre: "Corvus", casa: "Ahli", categoria: "nicho", descripcion: "Corvus, misterioso.", descCorta: "Misterioso.", imagen: "FotosNicho/CORVUS AHLI.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 548, nombre: "Lira", casa: "Xerjoff", categoria: "nicho", descripcion: "Lira, armonía.", descCorta: "Armonía.", imagen: "FotosNicho/LIRA XERJOFF.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 549, nombre: "Toy 2", casa: "Moschino", categoria: "nicho", descripcion: "Toy 2, diversión.", descCorta: "Diversión.", imagen: "FotosNicho/TOY 2 MOSCHINO.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 550, nombre: "Toy 2 Bubble Gum", casa: "Moschino", categoria: "nicho", descripcion: "Chicle y diversión.", descCorta: "Chicle.", imagen: "FotosNicho/TOY 2 BUBBLE GUM MOSCHINO.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 551, nombre: "Velvet Gold", casa: "Orientica", categoria: "nicho", descripcion: "Oro aterciopelado.", descCorta: "Oro aterciopelado.", imagen: "FotosNicho/VELVET GOLD ORIENTICA.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 552, nombre: "Musk Kashmir", casa: "Attar Collection", categoria: "nicho", descripcion: "Almizcle de Cachemira.", descCorta: "Almizcle de Cachemira.", imagen: "FotosNicho/MUSK KASHMIR ATTAR COLLECTION.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] },
    { id: 553, nombre: "Tom Ford Noir Extreme", casa: "Tom Ford", categoria: "nicho", descripcion: "Noir Extreme, lujo oscuro.", descCorta: "Lujo oscuro.", imagen: "FotosNicho/TOM FORD NOIR XTREME TOM FORD.jpg.webp", presentaciones: [{ tamaño: "30 ml", precio: 16500, precioTexto: "$16.500" }, { tamaño: "60 ml", precio: 28000, precioTexto: "$28.000" }, { tamaño: "100 ml", precio: 45000, precioTexto: "$45.000" }] }
];

// ===================== CONCATENAR JABBERWOCK =====================
const productosJabberwock = productosCaballero.concat(productosDama, productosNicho);

// ===================== CONFIGURACIÓN DE MODOS =====================
const modeConfig = {
    naturaleza: {
        bodyClass: 'mode-naturaleza',
        brandName: 'Naturaleza Salvaje',
        brandSub: 'by jabberwock',
        heroTag: 'COSMÉTICA ARTESANAL',
        heroTitle: 'Naturaleza Salvaje',
        heroDesc: 'Del corazón de la naturaleza a tu piel.<br>Ingredientes puros, fórmulas honestas.',
        aboutTitle: 'Nuestra esencia',
        aboutDesc: 'Creemos en la belleza desde lo natural y el poder que la naturaleza tiene sobre nuestras vidas. Por esta razón, aquí solo encontrarás productos para tu cuidado personal <strong>100% naturales</strong> y libres de preservantes, elaborados de manera artesanal con ingredientes puros. Libres de crueldad animal y químicos agresivos.',
        aboutSignature: 'Naturaleza Salvaje',
        logoImg: 'foto1.jpg.png',
        favicon: 'foto2.jpg.jpeg',
        heroBg: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format')",
        productos: productosNaturaleza,
        filtros: [
            { categoria: 'all', label: 'Todos', icono: 'fa-seedling' },
            { categoria: 'facial', label: 'Facial', icono: 'fa-smile' },
            { categoria: 'capilar', label: 'Capilar', icono: 'fa-hand-holding-heart' },
            { categoria: 'corporal', label: 'Corporal', icono: 'fa-pump-soap' },
            { categoria: 'labios-cejas', label: 'Labios & Cejas', icono: 'fa-lipstick' },
            { categoria: 'mascotas', label: 'Mascotas', icono: 'fa-dog' }
        ]
    },
    jabberwock: {
        bodyClass: 'mode-jabberwock',
        brandName: 'Jabberwock',
        brandSub: 'lociones & perfumes',
        heroTag: 'FRAGANCIAS ARTESANALES',
        heroTitle: 'Jabberwock',
        heroDesc: 'Esencia pura, aromas inolvidables.<br>Fragancias que cuentan historias.',
        aboutTitle: 'Nuestra esencia',
        aboutDesc: 'En Jabberwock creamos lociones y perfumes artesanales con ingredientes de la más alta calidad. Cada fragancia está diseñada para evocar emociones y acompañarte en tu día a día..',
        aboutSignature: 'Jabberwock',
        logoImg: 'foto2.jpg.jpeg',
        favicon: 'foto2.jpg.jpeg',
        heroBg: "url('https://plus.unsplash.com/premium_photo-1670445045282-36648e89af6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        productos: productosJabberwock,
        filtros: [
            { categoria: 'all', label: 'Todos', icono: 'fa-perfume' },
            { categoria: 'caballero', label: 'Caballero', icono: 'fa-male' },
            { categoria: 'dama', label: 'Dama', icono: 'fa-female' },
            { categoria: 'nicho', label: 'Nicho', icono: 'fa-crown' }
        ]
    }
};

// ===================== VARIABLES GLOBALES =====================
let currentMode = 'naturaleza';
let currentCategory = 'all';
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let pendingProduct = null;

// ===================== FUNCIONES DEL CARRITO =====================
function updateCartUI() {
    const totalQty = cartItems.reduce((sum, i) => sum + i.cantidad, 0);
    const cartCountSpan = document.getElementById("cartCount");
    if (cartCountSpan) cartCountSpan.innerText = totalQty;
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function addToCartWithOptions(product, size, price, priceText) {
    const existingIndex = cartItems.findIndex(i => i.id === product.id && i.size === size && i.mode === currentMode);
    if (existingIndex !== -1) {
        cartItems[existingIndex].cantidad++;
    } else {
        cartItems.push({ 
            id: product.id, 
            nombre: product.nombre + (product.casa ? ' (' + product.casa + ')' : ''),
            size: size, 
            precio: priceText, 
            precioNum: price, 
            cantidad: 1,
            mode: currentMode 
        });
    }
    updateCartUI();
    showToast(`✨ ${product.nombre} (${size}) añadido`);
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

// ===================== CAMBIO DE MODO =====================
function switchMode(mode) {
    if (mode === currentMode) return;
    currentMode = mode;
    const config = modeConfig[mode];
    const body = document.body;
    
    body.className = config.bodyClass;
    
    document.getElementById('brandMain').textContent = config.brandName;
    document.getElementById('brandSub').textContent = config.brandSub;
    document.getElementById('logoImg').src = config.logoImg;
    document.getElementById('favicon').href = config.favicon;
    document.getElementById('heroBg').style.backgroundImage = config.heroBg || '';
    document.getElementById('heroTag').textContent = config.heroTag;
    document.getElementById('heroTitle').textContent = config.heroTitle;
    document.getElementById('heroDesc').innerHTML = config.heroDesc;
    document.getElementById('aboutTitle').textContent = config.aboutTitle;
    document.getElementById('aboutDesc').innerHTML = config.aboutDesc;
    document.getElementById('aboutSignature').textContent = config.aboutSignature;
    document.getElementById('aboutImg').src = config.logoImg;
    
    renderFilters(mode);
    renderProducts(currentCategory);
    
    localStorage.setItem('mode', mode);
    showToast(`🌿 Cambiado a ${config.brandName}`);
}

// ===================== FILTROS DINÁMICOS =====================
function renderFilters(mode) {
    const container = document.getElementById('filterContainer');
    if (!container) return;
    const config = modeConfig[mode];
    const filtros = config.filtros;
    let html = '';
    filtros.forEach((f, index) => {
        const activeClass = index === 0 ? 'active' : '';
        html += `<button class="filter-btn ${activeClass}" data-category="${f.categoria}">
                    <i class="fas ${f.icono}"></i> ${f.label}
                </button>`;
    });
    container.innerHTML = html;
    initFilters();
}

function initFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProducts(currentCategory);
        });
    });
}

// ===================== MODALES =====================
function showOptionsModal(product) {
    pendingProduct = product;
    const modal = document.getElementById("optionsModal");
    const title = document.getElementById("optionsModalTitle");
    const optionsList = document.getElementById("optionsList");
    
    title.innerText = `Selecciona presentación - ${product.nombre}`;
    let optionsHtml = "";
    product.presentaciones.forEach(pres => {
        optionsHtml += `<div class="option-btn" data-size="${pres.tamaño}" data-price="${pres.precio}" data-price-text="${pres.precioTexto}">
                            <span class="option-size">${pres.tamaño}</span>
                            <span class="option-price">${pres.precioTexto}</span>
                        </div>`;
    });
    optionsList.innerHTML = optionsHtml;
    
    document.querySelectorAll("#optionsList .option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            addToCartWithOptions(pendingProduct, btn.dataset.size, parseInt(btn.dataset.price), btn.dataset.priceText);
            closeOptionsModal();
        });
    });
    modal.style.display = "flex";
}

function closeOptionsModal() {
    document.getElementById("optionsModal").style.display = "none";
    pendingProduct = null;
}

function showModal(product) {
    const modal = document.getElementById("productModal");
    document.getElementById("modalTitle").innerText = product.nombre;
    document.getElementById("modalDesc").innerHTML = `<strong>${product.descripcion}</strong><br><br><i class="fas fa-leaf"></i> 100% natural · Sin crueldad`;
    if (product.presentaciones.length > 1) {
        const minPrice = Math.min(...product.presentaciones.map(p => p.precio));
        const maxPrice = Math.max(...product.presentaciones.map(p => p.precio));
        document.getElementById("modalPrice").innerHTML = `Desde $${minPrice.toLocaleString()} hasta $${maxPrice.toLocaleString()} COP`;
    } else {
        document.getElementById("modalPrice").innerHTML = `${product.presentaciones[0].precioTexto} COP`;
    }
    document.getElementById("modalImage").src = product.imagen;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// ===================== RENDERIZADO DE PRODUCTOS =====================
function getPriceRange(product) {
    if (product.presentaciones.length === 1) return product.presentaciones[0].precioTexto;
    const precios = product.presentaciones.map(p => p.precio);
    return `$${Math.min(...precios).toLocaleString()} - $${Math.max(...precios).toLocaleString()}`;
}

function getCurrentProducts() {
    return modeConfig[currentMode].productos;
}

function renderProducts(category) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    
    const productos = getCurrentProducts();
    const filtered = category === "all" ? productos : productos.filter(p => p.categoria === category);
    
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-message" style="text-align:center; padding:2rem;">No hay productos en esta categoría 🌿</div>`;
        return;
    }
    
    grid.innerHTML = filtered.map(p => {
        let catLabel = "";
        switch(p.categoria) {
            case "facial": catLabel = "Cuidado Facial"; break;
            case "capilar": catLabel = "Cuidado Capilar"; break;
            case "corporal": catLabel = "Corporal"; break;
            case "labios-cejas": catLabel = "Labios & Cejas"; break;
            case "mascotas": catLabel = "Mascotas"; break;
            case "caballero": catLabel = "Caballero"; break;
            case "dama": catLabel = "Dama"; break;
            case "nicho": catLabel = "Nicho"; break;
            default: catLabel = "Natural";
        }
        const casaDisplay = p.casa ? `<div style="font-size:0.6rem; color:var(--secondary);">${p.casa}</div>` : '';
        return `
            <div class="product-card">
                <img class="product-card__img" src="${p.imagen}" alt="${p.nombre}" loading="lazy" onerror="this.src='https://placehold.co/600x400/e7d9c5/2b5e3b?text=Producto'">
                <div class="product-card__content">
                    <div class="product-card__category">${catLabel}</div>
                    ${casaDisplay}
                    <div class="product-card__title">${p.nombre}</div>
                    <div class="product-card__desc">${p.descCorta}</div>
                    <div class="product-card__price">${getPriceRange(p)} COP</div>
                    <div class="product-card__buttons">
                        <button class="btn-detail" data-id="${p.id}"><i class="far fa-eye"></i> Detalles</button>
                        <button class="btn-cart" data-id="${p.id}"><i class="fas fa-shopping-cart"></i> Agregar</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
    
    document.querySelectorAll(".btn-detail").forEach(btn => {
        btn.addEventListener("click", () => {
            const prod = getCurrentProducts().find(p => p.id === parseInt(btn.dataset.id));
            if (prod) showModal(prod);
        });
    });
    document.querySelectorAll(".btn-cart").forEach(btn => {
        btn.addEventListener("click", () => {
            const prod = getCurrentProducts().find(p => p.id === parseInt(btn.dataset.id));
            if (prod) {
                if (prod.presentaciones.length === 1) {
                    const pres = prod.presentaciones[0];
                    addToCartWithOptions(prod, pres.tamaño, pres.precio, pres.precioTexto);
                } else {
                    showOptionsModal(prod);
                }
            }
        });
    });
}

// ===================== CARRITO MODAL =====================
function showCartModal() {
    if (cartItems.length === 0) {
        alert("🌿 Tu carrito está vacío. ¡Agrega productos!");
        return;
    }
    let modal = document.getElementById("cartModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "cartModal";
        modal.className = "cart-modal";
        document.body.appendChild(modal);
    }
    let itemsHtml = "";
    let total = 0;
    cartItems.forEach(item => {
        let subtotal = item.precioNum * item.cantidad;
        total += subtotal;
        itemsHtml += `<div style="display:flex; justify-content:space-between; margin-bottom:0.8rem;">
                        <span>${item.nombre} (${item.size}) x${item.cantidad}</span>
                        <span>$${subtotal.toLocaleString()}</span>
                      </div>`;
    });
    modal.innerHTML = `
        <h3>🛍️ Tu pedido</h3>
        <div class="cart-items-list">${itemsHtml}</div>
        <div class="cart-total">Total: $${total.toLocaleString()}</div>
        <button class="btn btn--secondary" id="clearCartBtn">Vaciar carrito</button>
        <button class="whatsapp-checkout" id="whatsappOrderBtn"><i class="fab fa-whatsapp"></i> Enviar pedido por WhatsApp</button>
        <button class="btn-close-cart" style="margin-top:0.5rem; background:none; border:none; cursor:pointer;">Cerrar</button>
    `;
    modal.classList.add("active");
    document.getElementById("clearCartBtn")?.addEventListener("click", () => {
        cartItems = [];
        updateCartUI();
        modal.classList.remove("active");
        showToast("Carrito vaciado");
    });
    document.getElementById("whatsappOrderBtn")?.addEventListener("click", () => sendOrderByWhatsApp(total));
    modal.querySelector(".btn-close-cart")?.addEventListener("click", () => modal.classList.remove("active"));
}

function sendOrderByWhatsApp(total) {
    let message = `*🛒 NUEVO PEDIDO - ${modeConfig[currentMode].brandName}*%0A%0A`;
    cartItems.forEach(item => {
        message += `• ${item.nombre} (${item.size}) x${item.cantidad} → ${item.precio} c/u%0A`;
    });
    message += `%0A💰 *Total:* $${total.toLocaleString()}%0A%0A📦 ¡Gracias por tu compra!`;
    window.open(`https://wa.me/573214058442?text=${message}`, "_blank");
}

// ===================== INICIALIZACIONES =====================
function initAOS() {
    if (typeof AOS !== "undefined") AOS.init({ duration: 1000, once: true });
}

function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("header__nav--open");
            const icon = toggle.querySelector("i");
            if (nav.classList.contains("header__nav--open")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }
}

function initSmoothScroll() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
                if (nav && nav.classList.contains("header__nav--open")) {
                    nav.classList.remove("header__nav--open");
                    if (toggle) {
                        const icon = toggle.querySelector("i");
                        icon.classList.remove("fa-times");
                        icon.classList.add("fa-bars");
                    }
                }
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            // FormSubmit maneja el envío
        });
    }
}

function initGlobalEvents() {
    document.getElementById("cartIcon")?.addEventListener("click", showCartModal);
    document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);
    document.getElementById("closeOptionsModal")?.addEventListener("click", closeOptionsModal);
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("productModal")) closeModal();
        if (e.target === document.getElementById("optionsModal")) closeOptionsModal();
    });
    
    document.getElementById("logoContainer")?.addEventListener("click", () => {
        const newMode = currentMode === 'naturaleza' ? 'jabberwock' : 'naturaleza';
        switchMode(newMode);
    });
}

// ===================== INICIALIZACIÓN PRINCIPAL =====================
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem('mode') || 'naturaleza';
    switchMode(savedMode);
    
    renderProducts("all");
    initAOS();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initGlobalEvents();
    updateCartUI();
});