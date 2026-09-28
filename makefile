# Justfile — Commandes du projet SolidStart

# Installer les dépendances
install:
    bun install

# Lancer le serveur de développement
dev:
    bun run dev

# Build de production (SSG)
build:
    bun run build

# Prévisualiser le build statique
preview:
    bun run start

# Linter le code
lint:
    bun run lint

# Formater le code
format:
    bun run format

# Lancer les tests
test:
    bun test

# Nettoyer les artefacts
clean:
    rm -rf .output .vinxi node_modules

# Build Docker multistage
docker-build:
    docker build -t mon-projet:latest .

# Lancer via Docker Compose (devcontainer)
docker-dev:
    docker compose -f .devcontainer/docker-compose.yml up -d