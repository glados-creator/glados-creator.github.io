<script setup lang="ts">
const links = [
  { name: 'Accueil', to: '/' },
  { name: 'Parcours', to: '/parcours' },
  { name: 'Contact', to: '/contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-md">
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="flex items-center gap-2.5 text-sm font-bold tracking-tight">
        <span
          class="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)]"
        ></span>
        Arthur Pavard
      </RouterLink>

      <ul class="flex items-center gap-1">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-400 transition hover:bg-zinc-900 hover:text-zinc-100"
            exact-active-class="!text-zinc-100"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
