docker run \
 -p 3000:5000 \
 --env-file ./.env \
 --name express-container \
 --network express-app \
 --rm \
 -d \
 -v .:/app \
  express


docker run \
    -v express-volume:/data/db \
    -p 4000:27017 \
    --name mongo-container \
    --rm \
    --network express-app \
    -d \
    mongodb/mongodb-community-server