# tekne

freestyle productivity application

## development setup

### Running everything all at once with auto-reload on GraphQL/SQL schema changes

Requires supervisord and entr to be installed.

In two separate terminals:

```
dev/start.sh
dev/watch.sh 
```

### Running things separately

#### database

To start the database:

```
docker-compose -f backend/docker-compose.yml up
```

To run SQL migrations:

```
cd backend && yarn knex migrate:latest
```

#### backend

```
cd backend && yarn start
```

#### frontend

```
cd frontend && yarn start
```
