const PE_PRODUCTS = [
  {
    slug: "retatrutide",
    name: "Retatrutide",
    category: "Metabólico",
    tags: ["Triple agonista", "Investigación metabólica"],
    visual: "metabolic",
    summary: "Péptido de investigación asociado al estudio de rutas metabólicas y señalización de incretinas.",
    details: "Retatrutide se estudia por su relación con rutas de señalización metabólica e incretinas. Se maneja en presentación liofilizada y la disponibilidad se confirma antes de la compra.",
    benefits: ["Investigación metabólica", "Señalización incretina", "Soporte para estudios de composición corporal"]
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    category: "Regeneración",
    tags: ["Cobre peptídico", "Piel y tejido"],
    visual: "skin",
    summary: "Complejo peptídico de cobre utilizado en investigación sobre matriz extracelular y apariencia cutánea.",
    details: "GHK-Cu es un complejo de cobre estudiado en líneas de investigación relacionadas con matriz extracelular, tejido y apariencia cutánea. La información de presentación y disponibilidad se confirma con asesoría directa.",
    benefits: ["Investigación dérmica", "Matriz extracelular", "Estudios de tejido y reparación"]
  },
  {
    slug: "glow-plus",
    name: "Glow+",
    category: "Regeneración",
    tags: ["Bienestar estético", "Fórmula especial"],
    visual: "glow",
    summary: "Mezcla orientada a investigación estética y soporte celular.",
    details: "Glow+ está orientado a investigación estética y soporte celular. Su composición, presentación y disponibilidad se comparten antes de cerrar la compra.",
    benefits: ["Investigación estética", "Soporte celular", "Enfoque en apariencia cutánea"]
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "Metabólico",
    tags: ["GIP/GLP-1", "Investigación metabólica"],
    visual: "metabolic",
    summary: "Molécula de investigación relacionada con señalización incretina y metabolismo energético.",
    details: "Tirzepatide se estudia por su relación con rutas GIP/GLP-1 y metabolismo energético. No se muestran dosis ni promesas terapéuticas en la web; todo se confirma por atención personalizada.",
    benefits: ["Señalización GIP/GLP-1", "Metabolismo energético", "Estudios de composición corporal"]
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    category: "Energía celular",
    tags: ["Mitocondrial", "Metabolismo"],
    visual: "mitochondria",
    summary: "Péptido mitocondrial estudiado por su papel en comunicación celular y rutas de energía.",
    details: "MOTS-c forma parte de investigaciones sobre comunicación mitocondrial, adaptación metabólica y energía celular. Se maneja en presentación liofilizada.",
    benefits: ["Investigación mitocondrial", "Energía celular", "Adaptación metabólica"]
  },
  {
    slug: "cjc-1295-ipamorelin",
    name: "CJC 1295 + Ipamorelin",
    category: "Hormona de crecimiento",
    tags: ["Combinación", "Eje GH"],
    visual: "hormonal",
    summary: "Combinación usada en investigación sobre señalización endocrina y eje GH.",
    details: "CJC 1295 + Ipamorelin se estudia en investigación sobre señalización endocrina y eje GH. El producto se maneja bajo cotización directa en presentación liofilizada.",
    benefits: ["Investigación endocrina", "Eje GH", "Señalización hormonal"]
  },
  {
    slug: "dsip",
    name: "DSIP",
    category: "Sueño y estrés",
    tags: ["Neuropéptido", "Descanso"],
    visual: "sleep",
    summary: "Péptido investigado en relación con patrones de descanso y comunicación neuroendocrina.",
    details: "DSIP se estudia en relación con descanso, estrés y comunicación neuroendocrina. La información comercial se confirma por WhatsApp.",
    benefits: ["Investigación del descanso", "Comunicación neuroendocrina", "Estudios de estrés"]
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "Hormona de crecimiento",
    tags: ["Secretagogo", "Eje GH"],
    visual: "hormonal",
    summary: "Péptido de investigación asociado a señalización hormonal dentro del eje GH.",
    details: "Ipamorelin es un péptido investigado por su relación con señalización hormonal y eje GH. Se maneja en presentación liofilizada.",
    benefits: ["Señalización hormonal", "Eje GH", "Investigación endocrina"]
  },
  {
    slug: "selank",
    name: "Selank",
    category: "Neurocognitivo",
    tags: ["Neuropéptido", "Estrés"],
    visual: "brain",
    summary: "Análogo peptídico investigado por su relación con estrés, enfoque y comunicación neuroquímica.",
    details: "Selank se estudia en investigación neurocognitiva relacionada con comunicación neuroquímica, estrés y enfoque. No se indican dosis ni protocolos en la web.",
    benefits: ["Neuroinvestigación", "Estrés", "Enfoque"]
  },
  {
    slug: "semax",
    name: "Semax",
    category: "Neurocognitivo",
    tags: ["Enfoque", "Neuroinvestigación"],
    visual: "brain",
    summary: "Péptido usado en investigación sobre atención, plasticidad y señalización cerebral.",
    details: "Semax forma parte de líneas de investigación neurocognitiva sobre atención, plasticidad y señalización cerebral. La compra se coordina por WhatsApp.",
    benefits: ["Atención", "Plasticidad", "Señalización cerebral"]
  },
  {
    slug: "5-amino-1mq",
    name: "5 Amino 1MQ",
    category: "Metabólico",
    tags: ["NNMT", "Composición corporal"],
    visual: "metabolic",
    summary: "Compuesto de investigación relacionado con rutas de NNMT y metabolismo celular.",
    details: "5 Amino 1MQ se investiga en relación con rutas NNMT, metabolismo celular y composición corporal. Se confirma presentación y disponibilidad por mensaje.",
    benefits: ["Rutas NNMT", "Metabolismo celular", "Composición corporal"]
  },
  {
    slug: "timosina-alfa-1",
    name: "Timosina Alfa 1",
    category: "Inmunomodulación",
    tags: ["Sistema inmune", "Señalización"],
    visual: "immune",
    summary: "Péptido estudiado por su participación en señalización inmunológica y respuesta celular.",
    details: "Timosina Alfa 1 se estudia por su participación en señalización inmunológica y respuesta celular. La información disponible es comercial e informativa.",
    benefits: ["Señalización inmune", "Respuesta celular", "Investigación inmunológica"]
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    category: "Hormona de crecimiento",
    tags: ["GHRH", "Investigación endocrina"],
    visual: "hormonal",
    summary: "Péptido de investigación relacionado con señalización GHRH, eje GH y composición corporal.",
    details: "Tesamorelin se estudia por su relación con la vía GHRH y la señalización del eje de hormona de crecimiento. En Peptide Evolution se cotiza por WhatsApp en presentación liofilizada.",
    benefits: ["Señalización GHRH", "Eje GH", "Estudios de composición corporal"]
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "Regeneración",
    tags: ["Tejido", "Recuperación"],
    visual: "skin",
    summary: "Péptido de investigación utilizado en líneas relacionadas con tejido, recuperación y respuesta local.",
    details: "BPC-157 se estudia en investigación de tejido, respuesta local, integridad de estructuras y procesos de recuperación. La presentación, disponibilidad y cotización se confirman por WhatsApp.",
    benefits: ["Investigación de tejido", "Respuesta local", "Recuperación estructural"]
  },
  {
    slug: "tb-500",
    name: "TB-500",
    category: "Regeneración",
    tags: ["Timosina beta", "Movilidad"],
    visual: "skin",
    summary: "Péptido de investigación asociado a movilidad celular, tejido conectivo y recuperación.",
    details: "TB-500 se estudia por su relación con rutas de movilidad celular, tejido conectivo y procesos de reparación. Se maneja bajo cotización directa en presentación liofilizada.",
    benefits: ["Movilidad celular", "Tejido conectivo", "Investigación de recuperación"]
  },
  {
    slug: "epithalon",
    name: "Epithalon",
    category: "Longevidad",
    tags: ["Envejecimiento saludable", "Investigación celular"],
    visual: "mitochondria",
    summary: "Péptido de investigación asociado a longevidad, señalización celular y estudios de envejecimiento saludable.",
    details: "Epithalon se estudia en líneas de investigación relacionadas con regulación celular, envejecimiento saludable y comunicación biológica. Su disponibilidad, presentación y cotización se confirman por WhatsApp.",
    benefits: ["Investigación de longevidad", "Señalización celular", "Envejecimiento saludable"]
  },
  {
    slug: "ahk-cu-derma-roller",
    name: "AHK-Cu en derma roller",
    category: "Regeneración",
    tags: ["Cobre peptídico", "Derma roller", "Hair system"],
    visual: "skin",
    presentationImage: "assets/folyvra-ahk-cu-transparent.png",
    presentationAlt: "Presentación Folyvra hair sistem con AHK-Cu 50mg",
    summary: "Producto estético de investigación dérmica con AHK-Cu en presentación orientada a derma roller.",
    details: "AHK-Cu en derma roller está orientado a investigación estética y dérmica relacionada con cobre peptídico, apariencia cutánea y soporte de tejido. La presentación final se confirma por WhatsApp.",
    benefits: ["Investigación dérmica", "Cobre peptídico", "Presentación derma roller"]
  },
  {
    slug: "matryxil-acido-hialuronico-niacinamida",
    name: "Matryxil + ácido hialurónico + niacinamida",
    category: "Regeneración",
    tags: ["Skin care", "Hidratación", "Niacinamida"],
    visual: "glow",
    presentationImage: "assets/matrivera-serum-transparent.png",
    presentationAlt: "Presentación Matrivera serum con Matryxil, ácido hialurónico y niacinamida",
    summary: "Fórmula estética con Matryxil adicionado con ácido hialurónico y niacinamida.",
    details: "Matryxil adicionado con ácido hialurónico y niacinamida está orientado a cuidado estético, hidratación visual, textura y apariencia cutánea. Su presentación y disponibilidad se confirman por WhatsApp.",
    benefits: ["Apariencia cutánea", "Hidratación visual", "Soporte estético"]
  },
  {
    slug: "kpv",
    name: "KPV",
    category: "Inmunomodulación",
    tags: ["Péptido KPV", "Respuesta celular"],
    visual: "immune",
    summary: "Péptido de investigación relacionado con señalización celular, respuesta inmune y balance de tejido.",
    details: "KPV se estudia por su relación con rutas de señalización celular, respuesta local y balance inmunológico. La información comercial y disponibilidad se coordinan por WhatsApp.",
    benefits: ["Señalización celular", "Respuesta local", "Investigación inmunológica"]
  },
  {
    slug: "nad-500mg",
    name: "NAD+ 500mg",
    category: "Energía celular",
    tags: ["500mg", "Coenzima", "Energía celular"],
    visual: "mitochondria",
    summary: "NAD+ de 500mg orientado a investigación sobre energía celular, metabolismo y función mitocondrial.",
    details: "NAD+ 500mg se estudia por su relación con rutas de energía celular, metabolismo redox y comunicación mitocondrial. La presentación, disponibilidad y cotización se confirman por WhatsApp.",
    benefits: ["Energía celular", "Metabolismo redox", "Investigación mitocondrial"]
  }
];

const DEFAULT_SIDE_EFFECTS = {
  "Metabólico": ["Náusea o malestar gastrointestinal", "Disminución del apetito", "Sensación de fatiga", "Reacción local en zona de aplicación"],
  "Regeneración": ["Sensibilidad local", "Enrojecimiento temporal", "Irritación cutánea", "Molestia en zona de aplicación"],
  "Energía celular": ["Cambios en energía percibida", "Dolor de cabeza", "Molestia gastrointestinal", "Reacción local"],
  "Hormona de crecimiento": ["Retención de líquidos", "Hormigueo o sensibilidad", "Dolor de cabeza", "Reacción local"],
  "Sueño y estrés": ["Somnolencia", "Sueños vívidos", "Dolor de cabeza", "Cambios temporales en descanso"],
  "Neurocognitivo": ["Dolor de cabeza", "Cambios en sueño", "Irritación nasal o local según presentación", "Sensibilidad individual variable"],
  "Inmunomodulación": ["Fatiga temporal", "Sensibilidad local", "Dolor de cabeza", "Malestar general leve"],
  "Longevidad": ["Sensibilidad individual", "Fatiga temporal", "Dolor de cabeza", "Cambios en descanso o energía percibida"]
};

const DEFAULT_CONCEPTS = {
  metabolic: { before: "Inicio de seguimiento metabólico", after: "Control y seguimiento visual del objetivo" },
  skin: { before: "Textura y luminosidad inicial", after: "Apariencia más uniforme como concepto visual" },
  glow: { before: "Aspecto apagado conceptual", after: "Luminosidad conceptual del enfoque estético" },
  mitochondria: { before: "Energía celular en observación", after: "Ruta energética mejor organizada" },
  hormonal: { before: "Señalización en línea base", after: "Monitoreo del eje de investigación" },
  sleep: { before: "Rutina de descanso desordenada", after: "Seguimiento de descanso más estructurado" },
  brain: { before: "Enfoque disperso conceptual", after: "Claridad y seguimiento del estudio" },
  immune: { before: "Respuesta celular en observación", after: "Señalización inmune organizada" }
};

const PRODUCT_EDUCATION = {
  "retatrutide": {
    mechanism: "Retatrutide se estudia por su interacción con tres rutas de señalización relacionadas con incretinas: GLP-1, GIP y glucagón. Estas señales participan en saciedad, respuesta metabólica, gasto energético y comunicación entre intestino, páncreas, hígado y cerebro.",
    does: "En investigación metabólica se analiza como una herramienta para entender cómo el cuerpo regula apetito, sensación de saciedad, uso de energía y composición corporal. Su interés principal está en el seguimiento de cambios metabólicos de forma estructurada.",
    changes: ["Mayor control de apetito como objetivo de investigación", "Seguimiento de composición corporal", "Observación de marcadores metabólicos", "Mejor adherencia a hábitos cuando se combina con seguimiento profesional"]
  },
  "ghk-cu": {
    mechanism: "GHK-Cu es un péptido unido a cobre que se investiga por su relación con la matriz extracelular, colágeno, elastina y procesos de reparación tisular. El cobre participa en enzimas asociadas a estructura, defensa antioxidante y remodelación de tejido.",
    does: "Se utiliza como referencia en líneas de investigación estética y dérmica para estudiar textura, elasticidad, apariencia de la piel y señales celulares relacionadas con renovación.",
    changes: ["Apariencia cutánea más uniforme como objetivo estético", "Soporte informativo para textura y luminosidad", "Investigación sobre reparación de tejido", "Seguimiento de piel, cabello o zonas de interés estético"]
  },
  "glow-plus": {
    mechanism: "Glow+ se presenta como una fórmula orientada a investigación estética. Su enfoque está en señales celulares relacionadas con luminosidad, hidratación visual, piel y soporte de tejido, dependiendo de la composición confirmada al momento de cotizar.",
    does: "Está pensado para quienes buscan una opción estética dentro del catálogo, con información clara sobre presentación en pluma y confirmación personalizada antes de la compra.",
    changes: ["Luminosidad de piel como objetivo visual", "Soporte estético integral", "Seguimiento de apariencia y textura", "Enfoque de bienestar estético sin prometer resultados médicos"]
  },
  "tirzepatide": {
    mechanism: "Tirzepatide se estudia por su acción sobre rutas GIP y GLP-1, dos señales incretinas relacionadas con saciedad, metabolismo de glucosa y comunicación digestiva-hormonal. Estas rutas ayudan a explicar cambios en apetito y respuesta energética.",
    does: "En investigación se analiza para comprender regulación del apetito, control metabólico y cambios de composición corporal bajo seguimiento. La información de esta página no sustituye indicación médica ni define dosis.",
    changes: ["Reducción de hambre como observación posible", "Seguimiento de peso y medidas", "Mejor control de antojos como objetivo de acompañamiento", "Observación de respuesta digestiva y tolerancia"]
  },
  "mots-c": {
    mechanism: "MOTS-c es un péptido mitocondrial estudiado por su participación en comunicación celular, adaptación al estrés metabólico y rutas de energía. La mitocondria funciona como centro de producción energética y señalización metabólica.",
    does: "Se investiga para entender cómo las células responden a demanda energética, actividad física, metabolismo y adaptación. Es una opción de interés para líneas de energía celular.",
    changes: ["Seguimiento de energía percibida", "Investigación de adaptación metabólica", "Soporte conceptual para rendimiento celular", "Observación de recuperación y vitalidad general"]
  },
  "cjc-1295-ipamorelin": {
    mechanism: "CJC 1295 + Ipamorelin se estudia por su relación con el eje de hormona de crecimiento. CJC 1295 se asocia a señalización tipo GHRH e Ipamorelin a rutas secretagogas, por lo que la combinación se investiga por pulsatilidad hormonal.",
    does: "Su interés está en investigación endocrina, recuperación, composición corporal, descanso y señales relacionadas con reparación. No se ofrecen protocolos ni dosis en la web.",
    changes: ["Observación del eje GH", "Seguimiento de recuperación física", "Interés en composición corporal", "Apoyo informativo para descanso y reparación"]
  },
  "dsip": {
    mechanism: "DSIP se estudia por su relación con comunicación neuroendocrina y ritmos de descanso. Su investigación explora cómo ciertas señales peptídicas pueden participar en sueño, estrés y balance del sistema nervioso.",
    does: "Se usa como referencia informativa para líneas de investigación sobre descanso, calidad de sueño, estrés y regulación neuroquímica.",
    changes: ["Seguimiento de calidad de descanso", "Observación de ritmos de sueño", "Interés en estrés y relajación", "Registro de recuperación nocturna"]
  },
  "ipamorelin": {
    mechanism: "Ipamorelin se investiga como secretagogo relacionado con el eje de hormona de crecimiento. Su interés está en señales que pueden estimular pulsos hormonales sin describir protocolos terapéuticos en esta página.",
    does: "Se analiza en investigación endocrina por su relación con recuperación, composición corporal, descanso y reparación de tejido bajo monitoreo profesional.",
    changes: ["Seguimiento de recuperación", "Observación de composición corporal", "Interés en reparación y descanso", "Evaluación de tolerancia individual"]
  },
  "selank": {
    mechanism: "Selank es un péptido estudiado en neuroinvestigación por su relación con sistemas de estrés, neurotransmisión y comunicación neuroquímica. Su enfoque suele relacionarse con calma, enfoque y respuesta emocional.",
    does: "Se investiga para comprender cómo ciertas señales peptídicas participan en concentración, manejo de estrés y balance cognitivo.",
    changes: ["Claridad mental como objetivo de seguimiento", "Observación de estrés percibido", "Interés en enfoque y estabilidad", "Registro de descanso o ánimo"]
  },
  "semax": {
    mechanism: "Semax se estudia por su relación con señalización cerebral, atención y plasticidad. En investigación neurocognitiva se analiza su interacción con rutas asociadas a enfoque y respuesta neuronal.",
    does: "Su uso informativo se orienta a líneas de atención, claridad mental, productividad y comunicación cerebral, siempre sin prometer efectos médicos.",
    changes: ["Seguimiento de enfoque", "Interés en claridad mental", "Observación de productividad", "Registro de respuesta cognitiva individual"]
  },
  "5-amino-1mq": {
    mechanism: "5 Amino 1MQ se investiga por su relación con la enzima NNMT, una ruta vinculada a metabolismo celular, manejo energético y tejido adiposo. Su interés está en cómo las células procesan energía y señales metabólicas.",
    does: "Se analiza en investigación metabólica y composición corporal para entender rutas celulares de energía. La respuesta depende de contexto, hábitos, seguimiento y tolerancia.",
    changes: ["Investigación de rutas NNMT", "Seguimiento de composición corporal", "Observación de metabolismo celular", "Apoyo informativo a estrategias metabólicas"]
  },
  "timosina-alfa-1": {
    mechanism: "Timosina Alfa 1 se estudia por su relación con señalización inmune, especialmente comunicación de células T y respuesta celular. Es una molécula de interés en investigación inmunológica.",
    does: "Su enfoque está en comprender regulación inmune, respuesta celular y balance defensivo. La información comercial no sustituye valoración médica.",
    changes: ["Seguimiento de respuesta celular", "Investigación de señalización inmune", "Interés en balance inmunológico", "Observación de tolerancia y bienestar general"]
  },
  "tesamorelin": {
    mechanism: "Tesamorelin es un análogo relacionado con GHRH que se estudia por su capacidad de activar señales del eje de hormona de crecimiento. Esta vía participa en comunicación endocrina, metabolismo, recuperación y composición corporal dentro de líneas de investigación controladas.",
    does: "En investigación endocrina se analiza para comprender cómo la señalización GHRH puede relacionarse con pulsos de GH, rutas metabólicas, tejido y seguimiento corporal. La información de esta página es educativa y no establece dosis ni protocolo.",
    changes: ["Observación del eje GH", "Seguimiento de composición corporal", "Interés en metabolismo y recuperación", "Evaluación de tolerancia y respuesta individual"]
  },
  "bpc-157": {
    mechanism: "BPC-157 se estudia por su relación con señales locales de tejido, integridad de estructuras y respuesta de reparación. En investigación se asocia a rutas que pueden participar en comunicación celular, angiogénesis experimental y soporte de tejido conectivo.",
    does: "Se utiliza como referencia en líneas de investigación sobre recuperación, tejido, movilidad y respuesta local. No se presenta como tratamiento ni sustituto de valoración médica.",
    changes: ["Seguimiento de molestias locales como variable de observación", "Investigación de tejido conectivo", "Interés en recuperación estructural", "Registro de movilidad y tolerancia"]
  },
  "tb-500": {
    mechanism: "TB-500 se estudia por su relación con timosina beta y rutas de actina, movilidad celular y organización de tejido. Estas líneas de investigación exploran cómo las células se desplazan, se comunican y participan en procesos de reparación.",
    does: "En investigación se analiza por su interés en tejido conectivo, movilidad, recuperación y respuesta celular. La disponibilidad y presentación final se confirman por WhatsApp.",
    changes: ["Investigación de movilidad celular", "Seguimiento de tejido conectivo", "Interés en recuperación y flexibilidad", "Registro de respuesta individual"]
  },
  "epithalon": {
    mechanism: "Epithalon se estudia por su relación con señalización celular, ritmos biológicos y líneas de investigación sobre envejecimiento saludable. Su interés se centra en cómo ciertas señales peptídicas pueden participar en comunicación celular y balance funcional.",
    does: "En investigación de longevidad se analiza como referencia para estudiar vitalidad celular, regulación biológica y seguimiento de marcadores asociados a envejecimiento saludable. No se establecen dosis ni protocolos en la web.",
    changes: ["Investigación de envejecimiento saludable", "Seguimiento de vitalidad celular", "Interés en ritmos biológicos", "Observación de bienestar general"]
  },
  "ahk-cu-derma-roller": {
    mechanism: "AHK-Cu combina el interés del cobre peptídico con un enfoque dérmico-estético. En investigación se asocia a señales relacionadas con tejido, apariencia cutánea, cuero cabelludo y soporte de matriz extracelular.",
    does: "En presentación orientada a derma roller se utiliza como referencia estética para estudiar textura, apariencia de piel y soporte visual de zonas específicas. La tolerancia puede variar por persona y zona de aplicación.",
    changes: ["Seguimiento de textura cutánea", "Interés en apariencia de piel o cuero cabelludo", "Soporte estético con cobre peptídico", "Observación de sensibilidad local"]
  },
  "matryxil-acido-hialuronico-niacinamida": {
    mechanism: "Matryxil se estudia en investigación cosmética por señales relacionadas con matriz cutánea. El ácido hialurónico se asocia a hidratación visual y la niacinamida a apariencia de tono, barrera cutánea y textura.",
    does: "La fórmula se orienta a cuidado estético de la piel, con enfoque en luminosidad, hidratación visual, textura y apariencia uniforme. Es información cosmética e informativa, no una indicación médica.",
    changes: ["Apariencia más hidratada", "Seguimiento de textura y luminosidad", "Interés en tono visual uniforme", "Soporte cosmético de barrera cutánea"]
  },
  "kpv": {
    mechanism: "KPV se estudia por su relación con señales celulares vinculadas a respuesta local, balance de tejido y comunicación inmunológica. Es un péptido de interés en investigación sobre regulación y tolerancia celular.",
    does: "Se analiza como referencia para estudiar respuesta local, equilibrio inmunológico y señales de tejido. La presentación y disponibilidad se confirman por WhatsApp antes de finalizar la compra.",
    changes: ["Seguimiento de respuesta local", "Investigación de balance inmunológico", "Interés en tolerancia celular", "Observación de sensibilidad individual"]
  },
  "nad-500mg": {
    mechanism: "NAD+ participa en rutas celulares relacionadas con energía, metabolismo redox y función mitocondrial. En investigación se estudia por su papel como coenzima en procesos de comunicación y producción energética.",
    does: "NAD+ 500mg se orienta a líneas de investigación sobre energía celular, metabolismo, vitalidad y función mitocondrial. La información de la página no sustituye evaluación profesional.",
    changes: ["Seguimiento de energía percibida", "Investigación de metabolismo redox", "Interés en función mitocondrial", "Observación de vitalidad general"]
  }
};

PE_PRODUCTS.forEach((product) => {
  product.sideEffects = product.sideEffects || DEFAULT_SIDE_EFFECTS[product.category] || ["Reacción local", "Sensibilidad individual", "Malestar temporal", "Consultar con profesional calificado"];
  product.concept = product.concept || DEFAULT_CONCEPTS[product.visual] || DEFAULT_CONCEPTS.metabolic;
  Object.assign(product, PRODUCT_EDUCATION[product.slug] || {});
});

const PE_AREAS = [
  {
    title: "Composición corporal",
    category: "Metabólico",
    note: "Investigación sobre rutas metabólicas, incretinas y señalización energética.",
    products: ["Retatrutide", "Tirzepatide", "5 Amino 1MQ", "MOTS-c"]
  },
  {
    title: "Regeneración y piel",
    category: "Regeneración",
    note: "Enfoque en matriz extracelular, apariencia cutánea y soporte de tejido.",
    products: ["GHK-Cu", "Glow+", "BPC-157", "TB-500", "AHK-Cu en derma roller", "Matryxil + ácido hialurónico + niacinamida"]
  },
  {
    title: "Energía celular",
    category: "Mitocondrial",
    note: "Péptidos estudiados en comunicación mitocondrial y adaptación metabólica.",
    products: ["MOTS-c", "NAD+ 500mg"]
  },
  {
    title: "Eje GH",
    category: "Hormonal",
    note: "Opciones relacionadas con señalización endocrina y pulsatilidad hormonal.",
    products: ["CJC 1295 + Ipamorelin", "Ipamorelin", "Tesamorelin"]
  },
  {
    title: "Neurocognición",
    category: "Neuro",
    note: "Investigación sobre enfoque, estrés, descanso y comunicación neuroquímica.",
    products: ["Selank", "Semax", "DSIP"]
  },
  {
    title: "Sistema inmune",
    category: "Inmunomodulación",
    note: "Péptidos estudiados por su participación en señalización inmunológica.",
    products: ["Timosina Alfa 1", "KPV"]
  },
  {
    title: "Longevidad",
    category: "Longevidad",
    note: "Investigación sobre envejecimiento saludable, ritmos biológicos y vitalidad celular.",
    products: ["Epithalon", "NAD+ 500mg"]
  }
];

// Catálogo y precios proporcionados por Peptide Evolution. Cada concentración
// es un artículo independiente para que el cliente vea el precio exacto.
const PE_PRICE_ROWS = [
  ["Metabólico", "RT10", "Retatrutida", "10 mg", 1270], ["Metabólico", "RT20", "Retatrutida", "20 mg", 1685], ["Metabólico", "RT30", "Retatrutida", "30 mg", 2475], ["Metabólico", "RT40", "Retatrutida", "40 mg", 2850], ["Metabólico", "RT50", "Retatrutida", "50 mg", 3600], ["Metabólico", "RT60", "Retatrutida", "60 mg", 3950], ["Metabólico", "RT80", "Retatrutida", "80 mg", 4800], ["Metabólico", "RT100", "Retatrutida", "100 mg", 5150], ["Metabólico", "RT120", "Retatrutida", "120 mg", 6600],
  ["Metabólico", "TR10", "Tirzepatida", "10 mg", 525], ["Metabólico", "TR20", "Tirzepatida", "20 mg", 890], ["Metabólico", "TR30", "Tirzepatida", "30 mg", 1275], ["Metabólico", "TR40", "Tirzepatida", "40 mg", 1550], ["Metabólico", "TR50", "Tirzepatida", "50 mg", 1850], ["Metabólico", "TR60", "Tirzepatida", "60 mg", 2100], ["Metabólico", "TR80", "Tirzepatida", "80 mg", 1975], ["Metabólico", "TR100", "Tirzepatida", "100 mg", 3090], ["Metabólico", "TR120", "Tirzepatida", "120 mg", 4450],
  ["Metabólico", "SM10", "Semaglutida", "10 mg", 575], ["Metabólico", "SM20", "Semaglutida", "20 mg", 750], ["Metabólico", "SM30", "Semaglutida", "30 mg", 925], ["Metabólico", "SM40", "Semaglutida", "40 mg", 1075], ["Metabólico", "SM50", "Semaglutida", "50 mg", 1550],
  ["Metabólico", "CGL5", "Cagrilintida", "5 mg", 885], ["Metabólico", "CGL10", "Cagrilintida", "10 mg", 1670], ["Metabólico", "2AD", "AOD9604", "2 mg", 450], ["Metabólico", "5AD", "AOD9604", "5 mg", 950], ["Metabólico", "10AD", "AOD9604", "10 mg", 1530], ["Metabólico", "LC216", "Lipo-C", "10 ml", 780], ["Metabólico", "5AM", "5-amino-1MQ", "5 mg", 575], ["Metabólico", "10AM", "5-amino-1MQ", "10 mg", 1120],
  ["Hormona de crecimiento", "CD5", "CJC 1295 con DAC", "5 mg", 2070], ["Hormona de crecimiento", "CD10", "CJC 1295 con DAC", "10 mg", 2825], ["Hormona de crecimiento", "CND5", "CJC 1295 sin DAC", "5 mg", 720], ["Hormona de crecimiento", "CND10", "CJC 1295 sin DAC", "10 mg", 1350], ["Hormona de crecimiento", "IP5", "Ipamorelina", "5 mg", 390], ["Hormona de crecimiento", "IP10", "Ipamorelina", "10 mg", 675], ["Hormona de crecimiento", "IP20", "Ipamorelina", "20 mg", 1200],
  ["Hormona de crecimiento", "TSM5", "Tesamorelina", "5 mg", 2714], ["Hormona de crecimiento", "TSM10", "Tesamorelina", "10 mg", 1085], ["Hormona de crecimiento", "TSM20", "Tesamorelina", "20 mg", 3375], ["Hormona de crecimiento", "SMO5", "Sermorelin", "5 mg", 750], ["Hormona de crecimiento", "SMO10", "Sermorelin", "10 mg", 1655], ["Hormona de crecimiento", "SMO20", "Sermorelin", "20 mg", 950], ["Hormona de crecimiento", "SMO30", "Sermorelin", "30 mg", 3085],
  ["Hormona de crecimiento", "H10", "HGH 191AA", "10 IU", 1230], ["Hormona de crecimiento", "H12", "HGH 191AA", "12 IU", 1550], ["Hormona de crecimiento", "H15", "HGH 191AA", "15 IU", 1825], ["Hormona de crecimiento", "H24", "HGH 191AA", "24 IU", 2150], ["Hormona de crecimiento", "H36", "HGH 191AA", "36 IU", 2560], ["Inmunomodulación", "TA5", "Timosina alfa-1", "5 mg", 1100], ["Inmunomodulación", "TA10", "Timosina alfa-1", "10 mg", 1780], ["Hormona de crecimiento", "TI", "Tesamorelina + Ipamorelina", "10 mg + 5 mg", 2450], ["Hormona de crecimiento", "KS5", "Kisspeptina-10", "5 mg", 515], ["Hormona de crecimiento", "KS10", "Kisspeptina-10", "10 mg", 975], ["Hormona de crecimiento", "P41", "PT-141", "10 mg", 640],
  ["Regeneración", "BC5", "BPC-157", "5 mg", 340], ["Regeneración", "BC10", "BPC-157", "10 mg", 475], ["Regeneración", "BC20", "BPC-157", "20 mg", 630], ["Regeneración", "BT5", "TB-500", "5 mg", 900], ["Regeneración", "BT10", "TB-500", "10 mg", 1580], ["Regeneración", "GHKCU50", "GHK-Cu", "50 mg", 340], ["Regeneración", "GHKCU100", "GHK-Cu", "100 mg", 580], ["Regeneración", "AHKCU50", "AHK-Cu", "50 mg", 500], ["Regeneración", "AHKCU100", "AHK-Cu", "100 mg", 700], ["Inmunomodulación", "KPV5", "KPV", "5 mg", 535], ["Inmunomodulación", "KPV10", "KPV", "10 mg", 675], ["Energía celular", "SS5", "SS-31", "5 mg", 300], ["Energía celular", "SS10", "SS-31", "10 mg", 480], ["Energía celular", "SS50", "SS-31", "50 mg", 1580], ["Regeneración", "RA10", "ARA 290", "10 mg", 400],
  ["Cosmética", "NP810", "SNAP-8", "10 mg", 380], ["Cosmética", "GTT600", "Glutatión", "600 mg", 275], ["Cosmética", "GTT1500", "Glutatión", "1000 mg", 500], ["Energía celular", "NAD100", "NAD+", "100 mg", 160], ["Energía celular", "NAD500", "NAD+", "500 mg", 320], ["Energía celular", "NAD1000", "NAD+", "1000 mg", 600], ["Longevidad", "ET10", "Epitalón", "10 mg", 180], ["Longevidad", "ET50", "Epitalón", "50 mg", 700],
  ["Neurocognitivo", "DS5", "DSIP", "5 mg", 800], ["Neurocognitivo", "DS10", "DSIP", "10 mg", 1280], ["Neurocognitivo", "SK5", "Selank", "5 mg", 450], ["Neurocognitivo", "SK10", "Selank", "10 mg", 600], ["Neurocognitivo", "XA5", "Semax", "5 mg", 450], ["Neurocognitivo", "XA10", "Semax", "10 mg", 600], ["Neurocognitivo", "B12", "B-12", "10 mg", 860],
  ["Energía celular", "MS10", "MOTS-C", "10 mg", 700], ["Energía celular", "MS15", "MOTS-C", "15 mg", 960], ["Energía celular", "MS20", "MOTS-C", "20 mg", 1280], ["Energía celular", "MS40", "MOTS-C", "40 mg", 2140], ["Energía celular", "IG01", "IGF-1 LR3", "0.1 mg", 660], ["Energía celular", "IG1", "IGF-1 LR3", "1 mg", 1840], ["Energía celular", "AR50", "AICAR", "50 mg", 520],
  ["Fórmulas combinadas", "BB10", "BPC-157 + TB-500", "5 mg + 5 mg", 1280], ["Fórmulas combinadas", "BB20", "BPC-157 + TB-500", "10 mg + 10 mg", 2000], ["Fórmulas combinadas", "BB30", "BPC-157 + TB-500", "15 mg + 15 mg", 2200], ["Fórmulas combinadas", "CP10", "CJC 1295 sin DAC + Ipamorelina", "5 mg + 5 mg", 1050], ["Fórmulas combinadas", "CS10", "Cagrilintida + Semaglutida", "5 mg + 5 mg", 1600], ["Fórmulas combinadas", "CS20", "Cagrilintida + Semaglutida", "10 mg + 10 mg", 2400], ["Fórmulas combinadas", "GLOW70", "GLOW", "BPC-157 10 mg + GHK-Cu 50 mg + TB-500 10 mg", 2000], ["Fórmulas combinadas", "KLOW80", "KLOW", "TB-500 10 mg + BPC-157 10 mg + GHK-Cu 50 mg + KPV 10 mg", 2240],
  ["Reactivos funcionales", "WA3", "Agua bacteriostática", "3 ml", 135], ["Reactivos funcionales", "WA10", "Agua bacteriostática", "10 ml", 175], ["Reactivos funcionales", "BA3", "Alcohol bencílico 0.9%", "3 ml", 135], ["Reactivos funcionales", "BA10", "Alcohol bencílico 0.9%", "10 ml", 180], ["Reactivos funcionales", "AA3", "Agua con ácido acético 0.6%", "3 ml", 125], ["Reactivos funcionales", "AA10", "Agua con ácido acético 0.6%", "10 ml", 185], ["Reactivos funcionales", "LB", "Lemon Bottle", "10 ml", 580]
];

const PE_VISUAL_BY_CATEGORY = { "Metabólico": "metabolic", "Hormona de crecimiento": "hormonal", "Regeneración": "skin", "Inmunomodulación": "immune", "Energía celular": "mitochondria", "Cosmética": "glow", "Longevidad": "mitochondria", "Neurocognitivo": "brain", "Fórmulas combinadas": "glow", "Reactivos funcionales": "immune" };
const PE_CATALOG_PRODUCTS = PE_PRICE_ROWS.map(([category, sku, baseName, concentration, priceMxn]) => ({
  slug: `${baseName}-${sku}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  sku,
  baseName,
  concentration,
  name: `${baseName} · ${concentration}`,
  category,
  tags: ["SKU " + sku, concentration, "Precio por unidad"],
  visual: PE_VISUAL_BY_CATEGORY[category] || "metabolic",
  priceMxn,
  summary: `Presentación ${concentration}. SKU ${sku}. Precio por unidad mostrado en MXN.`,
  details: `${baseName} en presentación de ${concentration}. Consulta disponibilidad antes de finalizar tu compra.`,
  benefits: ["Información de presentación", "Precio por unidad", "Disponibilidad por confirmar"],
  sideEffects: ["Consultar la información aplicable al producto", "Uso responsable según normativa local"],
  concept: DEFAULT_CONCEPTS[PE_VISUAL_BY_CATEGORY[category]] || DEFAULT_CONCEPTS.metabolic
}));

PE_PRODUCTS.splice(0, PE_PRODUCTS.length, ...PE_CATALOG_PRODUCTS);

if (typeof window !== "undefined") {
  window.PE_PRODUCTS = PE_PRODUCTS;
  window.PE_AREAS = PE_AREAS;
}

// También permite que la función segura de pago consulte el catálogo en el servidor.
if (typeof module !== "undefined") {
  module.exports = { PE_PRICE_ROWS };
}
