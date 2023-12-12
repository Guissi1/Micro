# Use the OpenJDK 17 as base image
FROM openjdk:17

EXPOSE 8099

ADD target/Claims-0.0.1-SNAPSHOT.jar Claims.jar

ENTRYPOINT ["java", "-jar", "/Claims.jar"]
