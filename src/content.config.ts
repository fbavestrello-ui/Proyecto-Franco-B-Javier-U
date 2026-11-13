import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const malla = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/malla' }),
  schema: z.object({
    semestres: z.array(
      z.object({
        semestre: z.number().min(1).max(8),
        asignaturas: z.array(
          z.object({
            codigo: z.string(),
            nombre: z.string(),
            sct: z.number().min(1).max(16),
            area: z.string(),
            prerrequisitos: z.array(z.string())
          })
        )
      })
    )
  })
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    items: z.array(
      z.object({
        id_pregunta: z.string(),
        orden: z.number(),
        pregunta: z.string(),
        respuesta: z.string(),
        fuente_id: z.string()
      })
    )
  })
});

const campoLaboral = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/campo-laboral' }),
  schema: z.object({
    empleabilidad_1er_ano: z.string(),
    empleabilidad_2do_ano: z.string(),
    ingreso_promedio_4to_ano: z.string(),
    ano_dato: z.number(),
    areas_desempeno: z.array(z.string()),
    fuente_id: z.string()
  })
});

const referencias = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/referencias' }),
  schema: z.object({
    fuentes: z.array(
      z.object({
        id_fuente: z.string(),
        tipo: z.enum(['Primaria', 'Secundaria', 'Testimonio']),
        cita_apa: z.string(),
        autor: z.string(),
        ano: z.union([z.number(), z.string()]),
        titulo: z.string(),
        url: z.string().url(),
        fecha_consulta: z.string(),
        evaluacion: z.object({
          autoridad: z.string(),
          vigencia: z.string(),
          trazabilidad: z.string(),
          objetividad: z.string(),
          pertinencia: z.string()
        })
      })
    )
  })
});

export const collections = {
  malla,
  faq,
  'campo-laboral': campoLaboral,
  referencias
};
