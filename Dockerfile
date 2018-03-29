FROM openjdk:8-jdk

COPY . /app
WORKDIR /app

RUN ./gradlew clean bootJar

FROM openjdk:8-jre

COPY --from=0 /app/build/libs/app-0.0.1-SNAPSHOT.jar /app.jar
EXPOSE 8080

CMD ["java", "-Xmx40m", "-jar", "/app.jar"]

