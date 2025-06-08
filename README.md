# 🧪 Morty Data Verse

**Morty Data Verse** es un sitio web informativo, visualmente atractivo y totalmente dinámico, construido con **Next.js**, **TypeScript** y estilizado con **Tailwind CSS**. Este proyecto consume la API pública de [Rick and Morty](https://rickandmortyapi.com/) para mostrar datos organizados de personajes, episodios y ubicaciones del multiverso.

---

## 🚀 Tecnologías Usadas

- **Next.js 15** – Renderizado híbrido, rutas tipo app router y optimización moderna.
- **TypeScript** – Tipado estático y mayor control en desarrollo.
- **Tailwind CSS** – Estilización rápida y responsiva.
- **API Rick and Morty** – Fuente de datos REST pública.
- **Lucide React** – Íconos modernos y accesibles.

---

## 📁 Estructura del Proyecto

```bash
app/
│
├─ lib/                      # Lógica de negocio y llamadas a la API
│   ├─ types.ts              # Tipos y modelos TypeScript
│   └─ rickAndMortyAPI.ts    # Funciones getCharacters, getEpisodes, getLocations
│
├─ ux/                       # Sección de experiencias de usuario (features)
│   ├─ characters/           # Página y componentes de personajes
│   ├─ episodes/             # Página y componentes de episodios
│   ├─ location/             # Página y componentes de ubicaciones
│   ├─ principal/            # Componentes de la landing page
│   ├─ components/           # Componentes globales reutilizables (Header, Footer, etc)
│   ├─ hooks/               # Hooks personalizados globales
│   └─ globals.css           # Estilos globales
│
├─ layout.tsx               # Layout principal de la app
└─ page.tsx                 # Landing page (Home)
