Do build using dockerfile 
and use the below command to deploy

It will run on 3015 port by default, 

```
docker-compose -p planmytax_frontend --env-file planmytax-compose.env -f docker-compose.yml up --build -d --force-recreate
```