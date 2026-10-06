<script setup lang="ts">
const links = [
  {
    label: 'Email',
    value: 'arthur.pavard@hotmail.com',
    href: 'mailto:arthur.pavard@hotmail.com',
  },
  {
    label: 'Téléphone',
    value: '07.88.97.22.31',
    href: 'tel:+33788972231',
  },
  {
    label: 'GitHub',
    value: '@glados-creator',
    href: 'https://github.com/glados-creator',
  },
  {
    label: 'LinkedIn',
    value: 'pavard-arthur',
    href: 'https://www.linkedin.com/in/pavard-arthur',
  },
]
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-24 md:py-32">
    <p class="font-mono text-xs font-medium tracking-[0.14em] text-indigo-400 uppercase">Contact</p>
    <h1 class="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">Travaillons ensemble.</h1>
    <p class="mt-6 max-w-lg text-zinc-400">
      Je recherche un <strong class="font-semibold text-zinc-200">stage de 16 semaines</strong>
      à partir d'octobre 2026. N'hésitez pas à me contacter pour discuter d'une opportunité.
    </p>

    <div class="mt-12 grid gap-3 sm:grid-cols-2">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noopener"
        class="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:-translate-y-0.5 hover:border-indigo-500/50"
      >
        <span class="text-xs font-bold tracking-wider text-zinc-500 uppercase">
          {{ link.label }}
        </span>
        <span class="mt-2 text-sm font-medium text-zinc-200 group-hover:text-indigo-400">
          {{ link.value }}
        </span>
      </a>
    </div>
  </section>
</template>
