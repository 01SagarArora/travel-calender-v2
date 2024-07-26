FROM qaregistry.yatra.com/yatra-node-npm-v4:v20.12.0
MAINTAINER Linuxadmin@yatra.com
LABEL ProductName=travel-calendar-v2
#ADD --chown=yatra:yatra . /data/yatra/
#USER root
#RUN npm install
#USER yatra

ADD --chown=yatra:yatra . /data/yatra/travel-calendar-v2/
ADD --chown=yatra:yatra build.sh /usr/bin/build.sh

RUN chmod 755 /usr/bin/build.sh
RUN cd /data/yatra/travel-calendar-v2 && npm install && npm list -prod && npm run build
WORKDIR /data/yatra/travel-calendar-v2
EXPOSE 3000
ENTRYPOINT ["/usr/bin/build.sh"]
CMD ["PROD"]
