FROM node:14.4.0-alpine3.10 AS build

WORKDIR /frontend
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG FRONTEND_PRODUCTION_URL
ENV REACT_APP_PRODUCTION_URL=${FRONTEND_PRODUCTION_URL}
RUN npm run build

FROM steebchen/nginx-spa:stable
COPY --from=build /frontend/build /app
EXPOSE 80
CMD nginx