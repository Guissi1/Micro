FROM openjdk:17
EXPOSE 8061
ADD target/EurekaServer-0.0.1-SNAPSHOT.jar eureka-server.jar
ENTRYPOINT ["java","-jar","/eureka-server.jar"]
