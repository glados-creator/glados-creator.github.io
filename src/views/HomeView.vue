<template>
  <section class="mx-auto max-w-5xl px-6 py-24 md:py-32">
    <span
      class="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-400"
    >
      <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></span>
      Disponible dès octobre 2026
    </span>

    <h1 class="mt-8 text-4xl leading-[1.05] font-extrabold tracking-tight md:text-6xl">
      Welcome to my<br />
      <span
        class="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 bg-clip-text text-transparent"
      >
        little portfolio.
      </span>
    </h1>

    <p class="mt-8 max-w-xl text-zinc-400 md:text-lg">
      Étudiant en <strong class="font-semibold text-zinc-200">BUT 3 Informatique</strong> à l'IUT
      d'Orléans. Je recherche un
      <strong class="font-semibold text-zinc-200">stage de 16 semaines</strong> en développement
      d'applications.
    </p>

    <div class="mt-12 flex flex-wrap gap-3">
      <RouterLink
        to="/parcours"
        class="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_theme(colors.indigo.500)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_26px_-6px_theme(colors.indigo.500)]"
      >
        Voir mon parcours →
      </RouterLink>
      <RouterLink
        to="/contact"
        class="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:-translate-y-0.5 hover:border-indigo-500/60"
      >
        Me contacter
      </RouterLink>
    </div>
  </section>
</template>
