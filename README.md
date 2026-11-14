# Proyecto Web: Landing Page Oficial — Ingeniería en Informática UTEM

Sitio web estático para la promoción informada y verificable de la carrera de **Ingeniería en Informática** de la **Universidad Tecnológica Metropolitana (UTEM)**, desarrollado con el framework **Astro**.

Proyecto evaluativo para la asignatura **EFE685 - Electivo de Computación Móvil** (Departamento de Informática y Computación).

---

## Integrantes del Equipo
* **Franco Bavestrello**
* **Javier Urbina**

**Docente:** Sebastián Salazar Molina.

---

## 🌐 Enlace del Sitio Publicado
* **URL de Producción:** [https://ornate-douhua-c94b2a.netlify.app/](https://ornate-douhua-c94b2a.netlify.app/) *(Desplegado en Netlify)*.
* **Calidad Técnica Lighthouse:** 100/100 Rendimiento, 94/100 Accesibilidad, 100/100 Buenas Prácticas, 100/100 SEO.

---

## 📌 Guía para Personal No Técnico de la Escuela

Este sitio fue diseñado pensando en la transparencia y facilidad de mantenimiento. Cualquier funcionario o docente de la Escuela de Informática puede actualizar la información sin tener conocimientos avanzados de programación.

### ¿Cómo actualizar la información de la carrera?
Todos los datos dinámicos están centralizados en la carpeta `src/content/` en archivos con formato estándar y ordenado:

1. **Malla curricular y asignaturas:** Modificar `src/content/malla/semestres.json`. Si se agrega una nueva asignatura o cambian los créditos SCT, basta con editar ese archivo.
2. **Preguntas Frecuentes (FAQ):** Modificar `src/content/faq/preguntas.json` para agregar nuevas dudas o ajustar respuestas de admisión.
3. **Estadísticas de empleabilidad e ingresos:** Modificar `src/content/campo-laboral/datos.json` al publicarse una nueva versión anual de Mi Futuro (Mineduc).
4. **Fuentes y Citas APA 7:** Modificar `src/content/referencias/fuentes.json`.

> **Mecanismo de seguridad (Build Seguro):** El proyecto cuenta con un sistema de esquemas tipados estrictos (Zod). Si alguien comete un error al ingresar un dato (por ejemplo, escribir una palabra donde iba un porcentaje o dejar un campo obligatorio vacío), el sistema detecta el error automáticamente y no permite publicar la página hasta que sea corregido, garantizando que nunca se rompa el sitio en vivo.

---

## 💻 Instrucciones Técnicas de Ejecución Local

### Requisitos Previos
* **Node.js:** Versión 24 LTS instalada (o 20+).
* Terminal de comandos (PowerShell, CMD o bash).

### 1. Clonar el repositorio e instalar dependencias
```bash
git clone <URL_DEL_REPOSITORIO>
cd "Proyecto electivo"
npm install
```

### 2. Iniciar el servidor de desarrollo
Para trabajar en modo local y previsualizar cambios en tiempo real:
```bash
npm run dev
```
Abrir en el navegador web la dirección local indicada (usualmente `http://localhost:4321`).

### 3. Compilar para producción (Build)
```bash
npm run build
```
Generará los archivos HTML estáticos y optimizados en la carpeta `dist/`.

---

## 📂 Arquitectura del Proyecto

```text
src/
  ├── content/                 # Datos estructurados y editables
  │   ├── campo-laboral/       # Cifras de empleo e ingresos (Mi Futuro)
  │   ├── faq/                 # Preguntas de postulantes y familias
  │   ├── malla/               # Asignaturas, códigos, SCT y prerrequisitos
  │   └── referencias/         # Matriz de fuentes en formato APA 7
  ├── content.config.ts        # Esquemas de validación Zod (Strict TypeScript)
  ├── components/              # Componentes .astro modulares por sección
  │   ├── Hero.astro           # Portada principal y datos clave
  │   ├── SobreCarrera.astro   # Diferenciación con carreras afines
  │   ├── PerfilEgreso.astro   # Competencias en lenguaje accesible
  │   ├── Malla.astro          # Malla interactiva y filtro
  │   ├── CampoLaboral.astro   # Estadísticas cuantitativas
  │   ├── RespaldoInstitucional.astro # Acreditación CNA y laboratorios
  │   ├── Admision.astro       # Ponderaciones DEMRE y gratuidad
  │   ├── Faq.astro            # Preguntas y respuestas
  │   └── Referencias.astro    # Trazabilidad completa y enlaces
  ├── layouts/
  │   └── BaseLayout.astro     # Plantilla HTML semántica, SEO y Open Graph
  ├── pages/
  │   └── index.astro          # Vista principal única (Landing Page)
  └── styles/
      └── global.css           # Estilos base y Tailwind CSS
```

---

## 📄 Documentación del Proyecto
Para consultar el informe académico detallado con la Matriz de Fuentes, Análisis de Audiencia, Wireframes, Prueba con Usuarios y Declaración de IA, revise el archivo [`INFORME.md`](./INFORME.md).
