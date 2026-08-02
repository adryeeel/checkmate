# Setup environment
FROM ghcr.io/pnpm/pnpm:11 AS base

ENV CI=true
ENV NEXT_TELEMETRY_DISABLED=1
ENV TURBO_TELEMETRY_DISABLED=1

RUN pnpm runtime set node 26 -g
RUN pnpm i -g turbo@2.10.7

WORKDIR /app

# Pruner stage
FROM base AS pruner

COPY . .
RUN turbo prune web --docker

# Dependency stage
FROM base AS deps

COPY --from=pruner /app/out/json .
RUN pnpm i --frozen-lockfile

# Build stage
FROM base AS builder

COPY --from=deps /app .
COPY --from=pruner /app/out/full .

RUN turbo run web#build

# Runtime stage
FROM node:26-alpine AS runner
WORKDIR /app

RUN adduser --system --uid 1001 nextjs
RUN addgroup --system --gid 1001 nodejs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "apps/web/server.js"]
