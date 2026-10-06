<script setup lang="ts">
type Experience = {
  title: string
  org: string
  type: string
  period: string
  bullets: string[]
  tech: string[]
}

type Project = {
  title: string
  period: string
  context: string
  bullets: string[]
  tech: string[]
}

const experiences: Experience[] = [
  {
    title: 'Conception d’une application de gestion',
    org: 'ESI de Nemours',
    type: 'Stage',
    period: 'Juil. → Août 2025 · 2 mois',
    bullets: [
      'Mise en place d’un nouveau site web pour le traçage et la gestion de courrier.',
      'Migration des données existantes.',
    ],
    tech: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'SQLAlchemy'],
  },
  {
    title: 'Mise en place d’une plateforme de ticketing',
    org: 'Agrophiviers',
    type: 'Alternance',
    period: 'Nov. → Fév. 2024 · 4 mois',
    bullets: [
      'Déploiement de la plateforme web GLPI sous Docker.',
      'Refonte et paramétrage de la plateforme pour l’image de l’entreprise.',
    ],
    tech: ['PHP', 'Composer', 'SCSS', 'HTML', 'JS', 'Docker', 'GLPI'],
  },
]

const projects: Project[] = [
  {
    title: 'Plateforme vidéo pour un journaliste',
    period: 'Sept. → Fév. 2026 · 6 mois',
    context: 'Projet académique · Équipe de 4',
    bullets: [
      'Développement d’un site web vidéo pour le journaliste Patrice Mancino.',
      'Réalisation de la présentation sous forme de graphe interactif.',
    ],
    tech: ['Vue.js', 'Django', 'JavaScript'],
  },
  {
    title: 'API Back-End NestJS',
    period: 'Jan. → Fév. 2026 · 1 mois',
    context: 'Projet académique',
    bullets: [
      'Développement d’une API backend connectée à un front-end existant.',
      'Implémentation BD, contrôleurs, modules et services.',
      'Event Emitters pour Server-Side Events & WebSockets.',
    ],
    tech: ['NestJS', 'JavaScript', 'Jest', 'SQLite'],
  },
  {
    title: 'Application mobile Flutter',
    period: 'Jan. → Fév. 2025 · 1 mois',
    context: 'Projet académique · Équipe de 4',
    bullets: [
      'Développement d’une API backend et d’un front-end mobile & web Flutter.',
      'Implémentation d’une carte interactive.',
    ],
    tech: ['Flutter', 'Firebase'],
  },
  {
    title: 'La Nuit de l’Info',
    period: 'Décembre 2023',
    context: 'Projet personnel · Concours national',
    bullets: ['Concevoir un site web de A à Z en équipe en une nuit.'],
    tech: ['Web', 'Travail d’équipe'],
  },
]

const skillGroups = [
  { label: 'Langages', items: ['Python', 'Java', 'JavaScript', 'Rust', 'C/C++', 'Dart', 'PHP'] },
  { label: 'Frameworks', items: ['Django', 'Flask', 'Vue.js', 'NestJS', 'Next.js'] },
  { label: 'Bases de données', items: ['MySQL', 'SQLite', 'Oracle', 'MongoDB', 'Neo4j'] },
  { label: 'Soft skills', items: ['Curiosité', 'Polyvalent', 'Autonome', 'Rigoureux'] },
]

const education = [
  {
    degree: 'BUT 3 Informatique',
    school: 'IUT d’Orléans',
    period: '2023 → 2026',
    detail: 'Parcours réalisation d’applications',
  },
  {
    degree: 'Baccalauréat Général',
    school: 'Lycée Duhamel du Monceau — Pithiviers',
    period: '2020 → 2023',
    detail: 'Spécialités Maths & NSI · Section Européenne',
  },
]
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16 md:py-24">
    <!-- Header -->
    <p class="font-mono text-xs font-medium tracking-[0.14em] text-indigo-400 uppercase">
      Parcours
    </p>
    <h1 class="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
      Expériences &amp; projets.
    </h1>
    <p class="mt-4 max-w-xl text-zinc-400">
      Un aperçu de mon parcours professionnel, de mes projets et de ma stack technique.
    </p>

    <!-- Expériences -->
    <section class="mt-20">
      <h2 class="text-xs font-bold tracking-[0.14em] text-zinc-500 uppercase">
        Expériences professionnelles
      </h2>
      <div class="mt-8 space-y-8">
        <article
          v-for="exp in experiences"
          :key="exp.title"
          class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-indigo-500/40"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="text-lg font-bold tracking-tight">{{ exp.title }}</h3>
            <span
              class="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-[11px] text-zinc-400"
            >
              {{ exp.period }}
            </span>
          </div>
          <p class="mt-1 text-sm font-semibold text-indigo-400">
            {{ exp.org }} · {{ exp.type }}
          </p>
          <ul class="mt-4 space-y-2">
            <li
              v-for="b in exp.bullets"
              :key="b"
              class="relative pl-4 text-sm text-zinc-400 before:absolute before:top-2 before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-indigo-500/70"
            >
              {{ b }}
            </li>
          </ul>
          <div class="mt-5 flex flex-wrap gap-1.5">
            <span
              v-for="t in exp.tech"
              :key="t"
              class="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
            >
              {{ t }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <!-- Projets -->
    <section class="mt-20">
      <h2 class="text-xs font-bold tracking-[0.14em] text-zinc-500 uppercase">Projets</h2>
      <div class="mt-8 grid gap-4 md:grid-cols-2">
        <article
          v-for="p in projects"
          :key="p.title"
          class="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-indigo-500/40"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="font-bold tracking-tight">{{ p.title }}</h3>
            <span
              class="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-0.5 font-mono text-[10px] text-zinc-400"
            >
              {{ p.period }}
            </span>
          </div>
          <p class="mt-1 text-xs font-semibold text-indigo-400">{{ p.context }}</p>
          <ul class="mt-4 space-y-2">
            <li
              v-for="b in p.bullets"
              :key="b"
              class="relative pl-4 text-sm text-zinc-400 before:absolute before:top-2 before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-indigo-500/70"
            >
              {{ b }}
            </li>
          </ul>
          <div class="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-800/70 pt-4">
            <span
              v-for="t in p.tech"
              :key="t"
              class="rounded-md border border-indigo-500/25 bg-indigo-500/10 px-2.5 py-1 font-mono text-[11px] text-indigo-400"
            >
              {{ t }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <!-- Compétences -->
    <section class="mt-20">
      <h2 class="text-xs font-bold tracking-[0.14em] text-zinc-500 uppercase">Compétences</h2>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="group in skillGroups"
          :key="group.label"
          class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5"
        >
          <h3 class="text-xs font-bold tracking-wider text-zinc-500 uppercase">
            {{ group.label }}
          </h3>
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="item in group.items"
              :key="item"
              class="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-1 font-mono text-[11px] text-zinc-400"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Formation -->
    <section class="mt-20">
      <h2 class="text-xs font-bold tracking-[0.14em] text-zinc-500 uppercase">Formation</h2>
      <div class="mt-8 space-y-4">
        <article
          v-for="edu in education"
          :key="edu.degree"
          class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="font-bold tracking-tight">{{ edu.degree }}</h3>
            <span
              class="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-[11px] text-zinc-400"
            >
              {{ edu.period }}
            </span>
          </div>
          <p class="mt-1 text-sm font-semibold text-indigo-400">{{ edu.school }}</p>
          <p class="mt-2 text-sm text-zinc-400">{{ edu.detail }}</p>
        </article>
      </div>
    </section>
  </div>
</template>