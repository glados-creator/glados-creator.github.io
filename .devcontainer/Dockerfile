FROM oven/bun:1-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        curl \
        build-essential \
        pkg-config \
        rustup \
    && rm -rf /var/lib/apt/lists/*

RUN rustup default stable

WORKDIR /portfolio-ct