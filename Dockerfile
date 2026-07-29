FROM node:22-alpine AS builder

WORKDIR /build

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY astro.config.mjs tsconfig.json ./
COPY public/ ./public/
COPY src/ ./src/
RUN npm run astro -- build

FROM registry.corp.kuaishou.com/base/knode-v14:1.0.20-v14.19.3-knode-0.4.x-580affea

WORKDIR /app

COPY --from=builder /build/dist/ ./dist/
COPY cloud/ ./cloud/
COPY start.sh /app/start.sh

RUN chmod +x /app/start.sh && sed -i 's/\r$//' /app/start.sh \
  && mkdir -p /app/logs /app/temp \
    /home/web_server/kuaishou-runner/log \
    /home/web_server/kuaishou-runner/logs \
    /home/web_server/supervisord/conf/conf.d \
    /home/web_server/supervisord/log \
  && printf '[supervisord]\nnodaemon=true\nlogfile=/home/web_server/supervisord/log/supervisord.log\npidfile=/home/web_server/supervisord/supervisord.pid\nchildlogdir=/app/logs\n\n[supervisorctl]\nserverurl=unix:///home/web_server/supervisord/supervisor.sock\n\n[unix_http_server]\nfile=/home/web_server/supervisord/supervisor.sock\n\n[rpcinterface:supervisor]\nsupervisor.rpcinterface_factory=supervisor.rpcinterface:make_main_rpcinterface\n\n[include]\nfiles = /home/web_server/supervisord/conf/conf.d/app.conf\n' > /home/web_server/supervisord/conf/supervisord.conf \
  && printf '[program:app]\ncommand=/app/start.sh\ndirectory=/app\nautostart=true\nautorestart=true\nstartsecs=3\nstdout_logfile=/app/logs/node-stdout.log\nstderr_logfile=/app/logs/node-stderr.log\nstdout_logfile_maxbytes=10MB\nstderr_logfile_maxbytes=10MB\n' > /home/web_server/supervisord/conf/conf.d/app.conf

EXPOSE 3000
