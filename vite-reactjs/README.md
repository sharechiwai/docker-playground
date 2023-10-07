# React + Vite

### Docker Command
```bash
docker build -t vite-reactjs .

### start container for port 8081 with name vite-reactjs-container
docker run -p 8081:80 --name vite-reactjs-container vite-reactjs

### then we can stop the container by specificing the name
docker stop vite-reactjs-container 

### start the contaienr with the container name
docker start vite-reactjs-container 
```