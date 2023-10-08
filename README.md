# docker-playground
Repository for docker sample code

### Basic docker command

#### Containers
```bash
## list container which currently in use
docker container ls

## list all containers
docker contaienr ls -a
```

#### List Images
```bash
docker container ls
```

### Clean up
Very often there are some docker image which has been pull / not in use  
left over in the system
![docker image ls show unused image](/img/docker-image-ls.png "docker image ls show unused image")  

```bash
### use docker image prune to remove unused image (dangling images)
docker image prune
```
![docker image prune - remove dangling image](/img/docker-remove-all-dangling-images.png "docker image prune - remove dangling image")  


### Security
```
### can run the following command to check if there any vulnerabilities and recommendations regarding the Dockerfile 
docker scout quickview
```

[![Known Vulnerabilities](https://snyk.io/test/github/sharechiwai/docker-playground/badge.svg)]