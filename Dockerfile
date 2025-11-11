# -------------------------------
# Stage 1: Build the app
# -------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# -------------------------------
# Stage 2: Serve with NGINX
# -------------------------------
FROM nginx:alpine

# Copy build output from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Copy a custom nginx.conf if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
