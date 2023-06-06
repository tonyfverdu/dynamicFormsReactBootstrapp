#  Docker files script erzustellen das Docker und Image von Aplication -React
FROM node:18-alpine AS dependencies

WORKDIR /app

#  Install dependencies.  Kopieren und installieren Sie jetzt alle Abhängigkeiten
COPY package.json .
COPY package-lock.json .

RUN npm install


#  Kopieren alle Daten jetzt 
COPY . . 

#  Bauen the "build" Application  (optional)

#  Öffnen und Freigeben von Docker-Kommunikationsports
EXPOSE 5173
ENV PORT 5173

#  Starten Sie die Anwendung auf "vite", dem Anwendungsserver
CMD ["npm", "run", "dev"]