# SPEC: Landing de Ecoa

**Version:** 0.2
**Last Updated:** 2026-10-01
**Status:** Review

---

## 1. PURPOSE

Presentar Ecoa en Colombia como un proyecto en etapa de concepto que diseña empaques a partir de residuos de fruta y propone un modelo de economía circular. La landing debe comunicar con claridad la visión y los productos en desarrollo, sin presentarlos como resultados comprobados ni atribuirles certificaciones o desempeño aún no validados. Debe permitir ampliar la marca y sus módulos en el futuro.

---

## 2. SCOPE

### IN SCOPE
- Landing page para presentar la marca Ecoa.
- Comunicar que Ecoa diseña bolsas reutilizables de fibras vegetales y bandejas proyectadas como compostables; ambos productos están en desarrollo y pendientes de validación.
- Mantener una estructura ampliable para agregar módulos más adelante.
- En el primer pantallazo, mostrar el logo y dejar claro que Ecoa es una empresa de productos sostenibles, biodegradables y compostables comprometida con el medio ambiente.
- Presentar Ecoa Recolecta como propuesta de recolección de residuos de fruta para usarlos como materia prima.
- Dirigirse principalmente a restaurantes, comercios, grandes empresas distribuidoras y cadenas de supermercados.
- Incluir secciones para explorar productos y servicios, conocer la empresa, presentar a sus gerentes, contactar a la marca y acceder a sus redes sociales.
- Publicarse inicialmente en español para el mercado colombiano y permitir incorporar inglés en una iteración futura.
- Respetar la identidad visual de ECOA: logotipo circular ilustrado y wordmark; marrón `#5C4033`, verde `#4B7A5D`, cobre `#C2916F` y fondo papel `#F2EFEC`; tipografía sans serif geométrica-humanista; patrón orgánico de línea fina con cacao, café y cítricos.
- Usar los recursos adjuntos `Gemini_Generated_Image_9jy8xz9jy8xz9jy8 (1).jpg`, `Gemini_Generated_Image_di6j1cdi6j1cdi6j.jpg` y `logo sin fondo.jpg` según convenga; no tratar como transparencia el tablero que está incrustado en el JPG.
- Usar recursos conceptuales de producto claramente identificados como ilustrativos, nunca presentarlos como fotografías de productos existentes.
- Incluir la nota: "Ecoa es un proyecto en desarrollo. Las características de nuestros productos corresponden a una formulación proyectada que será validada mediante pruebas de laboratorio y procesos de certificación."

### OUT OF SCOPE
- Venta directa y carrito de compras en esta primera versión.
- Captación comercial como objetivo principal.

### NEGATIVE CONSTRAINTS
- La landing no debe verse anticuada ni saturada.
- La experiencia no debe ser completamente estática; debe incluir animaciones con propósito.
- No presentar el proceso propuesto como una operación ya ejecutada ni los productos como disponibles comercialmente.
- No afirmar "certificado", "100 % compostable" ni "libre de químicos".
- No inventar tiempos de degradación, resistencia, capacidad, resultados de laboratorio ni aptitud para contacto con alimentos.
- No afirmar "cero residuos" ni "menor huella de carbono".
- No publicar nombres, cargos, datos de contacto o enlaces sociales inventados.

## 3. DEFINITIONS

| Term | Definition |
|------|------------|
| En desarrollo | Propuesta de producto o proceso aún no validada mediante las pruebas y certificaciones pertinentes. |
| Residuos de fruta | Materia orgánica que Ecoa propone recolectar y aprovechar como materia prima en su concepto de economía circular. |
| Proyectado | Diseño o característica deseada que no debe comunicarse como resultado demostrado. |

## 4. CONTENT REQUIREMENTS

### Hero
- Mostrar el logotipo ECOA y explicar en español, con una frase clara, que Ecoa diseña empaques a partir de residuos de fruta.
- Mantener explícito el estado de proyecto en desarrollo.
- CTA principal: explorar productos. Navegación secundaria: quiénes somos, proceso, equipo, contacto y redes.

### Nuestro proceso
- Título: "De la cáscara al empaque".
- Subtítulo: "Lo que para otros es desperdicio, para nosotros es el comienzo."
- Mostrar cinco etapas: recolectar residuos en plazas, fruterías y restaurantes; seleccionarlos, destinando los no aptos a compostaje; explorar lavado, secado y molienda para obtener pectina y fibra vegetal, así como tintes naturales; diseñar bandejas moldeadas y bolsas reutilizables con fibras de banano y fique de productores colombianos; y proyectar el retorno de sobrantes al compostaje.
- Presentar las cinco etapas como diseño/propuesta, no como operaciones o resultados ya validados. La pestaña con semillas de las bandejas también es una característica proyectada.
- Frase de cierre: "Nada se pierde. Todo vuelve a empezar."

### Productos
- Diferenciar las bandejas compostables en diseño de las bolsas reutilizables tejidas con fibra de banano y fique.
- La propiedad "biodegradable" de las bolsas queda pendiente de aclaración; no inferirla a partir de los materiales.

### Equipo, contacto y redes
- Mostrar cuatro perfiles de gerencia, cada uno con foto y correo electrónico real.
- Reservar los cuatro espacios en la composición; los perfiles sin información se mostrarán como espacios pendientes claramente identificados, nunca con datos ficticios.
- Perfiles confirmados:
	- Julián Zapata Álvarez — Gerente de Comercial/Mercadeo — `Julian.zapata914@pascualbravo.edu.co`.
	- Sidny Yuliana Zapata Hoyos — Gerente TIC — `Sidny.zapata515@pascualbravo.edu.co`.
	- Sergio Andrés Ángel Córdoba — Gerente de Producción/Creación — `Sergio.angel742@pascualbravo.edu.co`.
	- Angelly Lorena Bohórquez Rave — Gerente Administrativa — `angelly.bohorquez177@pascualbravo.edu.co`.
- Ofrecer correo y WhatsApp como canales de contacto de Ecoa.
- Mientras falten los destinos reales, mostrar correo y WhatsApp como "Próximamente", sin enlaces activos ni direcciones o números de ejemplo.
- Mostrar las redes sociales como "Próximamente" hasta tener perfiles oficiales; no crear enlaces ficticios.
- Los correos de gerencia deben ser enlaces `mailto:`. Hasta recibir correo general, WhatsApp y redes oficiales, mostrarlos como "Próximamente" sin destinos activos.

## EXT-A: PROJECT SETUP

- Implementación: React + Vite.
- Primera versión: landing en español; estructura extensible para traducción al inglés futura.

## 5. PRIORITIES AND ACCEPTANCE

### Priority order
1. Veracidad sobre la etapa conceptual y las afirmaciones ambientales.
2. Legibilidad, accesibilidad y uso correcto de marca.
3. Contenido completo y navegación funcional.
4. Estilo visual y movimiento.

### MUST
- Identificar como propuesta o en desarrollo las características aún no validadas.
- Usar el logo y los colores de marca con contraste legible.
- Hacer que los CTA y enlaces internos lleven a secciones existentes.
- Mantener legibilidad y flujo de contenido en móvil y escritorio.

### MUST NOT
- Afirmar "certificado", "100 % compostable" ni "libre de químicos".
- Inventar tiempos de degradación, resistencia, capacidad, resultados de laboratorio, aptitud para alimentos, "cero residuos" o menor huella de carbono.
- Narrar la recolección, transformación, reportes por kilos o siembra como operaciones ya activas.
- Inventar fotos, correos, teléfonos, nombres o enlaces sociales.
- Presentar imágenes conceptuales como fotografías de productos existentes.

### Given/When/Then
| ID | Given | When | Then |
|----|-------|------|------|
| V1 | La landing carga en español | Se revisa el hero | Se ve el logo, la propuesta y el estado "En desarrollo". |
| V2 | Se revisan productos y proceso | Se comprueban sus afirmaciones | Ningún diseño, característica u operación propuesta aparece como validada o activa. |
| V3 | Se ven los cuatro perfiles | Se activa cada correo | Abre un `mailto:` al correo indicado para esa persona. |
| V4 | No hay contacto general ni perfiles sociales | Se revisan sus controles | Indican "Próximamente" y no tienen destino activo. |
| V5 | Se recorre la página en móvil y escritorio | Se usan navegación y CTA | No hay solapamientos ni desbordamiento horizontal; los enlaces funcionan. |
| V6 | Está activo `prefers-reduced-motion: reduce` | Se carga la página | Se omiten animaciones no esenciales. |

### Manual verification
- `npm run build` termina sin errores.
- `npm run dev` permite recorrer los CTA y probar todos los `mailto:`.
- Revisar visualmente escritorio/móvil y probar movimiento reducido.
- Completion requiere build correcto y comprobación manual de V1-V6.

### Valid examples
- "Diseñamos bandejas con una formulación proyectada para ser compostable, pendiente de validación." Distingue intención de resultado.
- "Proponemos recolectar residuos de fruta para explorar su transformación en materia prima." Describe una propuesta, no una operación.

### Invalid examples
- "Nuestras bandejas son 100 % compostables y aptas para alimentos." Viola la restricción de afirmaciones no verificadas.
- "Recolectamos fruta cada semana y reducimos la huella de carbono." Presenta una operación e impacto no comprobados.

---

## 13. OPEN QUESTIONS

- [ ] Agregar al workspace las dos fotos disponibles de gerencia; faltan retratos para cuatro perfiles.
- [ ] Compartir correo general, WhatsApp con prefijo `+57` y URLs oficiales de redes cuando existan.
- [ ] Confirmar si las bolsas deben describirse como biodegradables además de reutilizables; hasta entonces afirmar solo reutilización y fibras previstas.
