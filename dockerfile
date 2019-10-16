FROM node:10.16-alpine

ENV PATH_APP /home/app/

WORKDIR $PATH_APP

#RUN if [ ! -e $PATH_APP$NAME_APP/package.json ]; then npx create-react-app $NAME_APP ; fi
#RUN apk add git
#RUN apk add openssh

ENV NAME_APP test_chart
RUN npx create-react-app $NAME_APP
#RUN npm install --save react-chartjs-2 chart.js

COPY . .
WORKDIR $PATH_APP$NAME_APP/

EXPOSE 3000


