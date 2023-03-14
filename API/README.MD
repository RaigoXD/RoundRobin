## API README

[![python](https://badgen.net/badge/python/3.10)](https://www.python.org/) [![python](https://badgen.net/badge/icon/docker?icon=docker&label)](https://www.docker.com/) 

This is the API section of the project, since we have thought it to be a very nice Webservice, here we will show you how you should deploy it using Python and virtual environments or simply using Dockers

In this API folder you will find the following important files:

| FILE | INFO |
| ------ | ------ |
| requirements.txt | the dependencies used in the project |
| dockerfile | The dockerfile to build the project image |
| .gitignore | our gitignore file to ignore everything we don't want in git |
| README.MD | This readme file you are reading |

In addition, you will also find a folder called **app** that contains all the python files that make up this application as such.

## INSTALLATION

Let's first run the project using the system python.

To start, I recommend using the Python virtual environments to encapsulate the project and not mix the libraries [venv](https://docs.python.org/es/3.8/library/venv.html), creating an environment virtual is done as follows

> Note: i'm using linux - Ubuntu20.04

```sh
How use it -> python3 -m venv <name>
Python3 -m venv env    
```
To active it:
```sh
source env/bin/activate    
```
Having created the virtual environment and activating it, we must install all the dependencies of the project in the following way, we are located inside the API folder and execute the following command:
```sh
pip install -r requirements.txt   
```
And finally we only need to run the service with [Uvicorn](https://www.uvicorn.org/) on host 0.0.0.0 through port 8000
```sh
uvicorn app.main_api:app --host 0.0.0.0 --port 8000 --reload   
```

Done, our project has been deployed to localhost by port 8000 and you should be able to open it by typing _http://localhost:8000/docs_ in your browser.

# _with Dockers_

To run it with this tool, we must first have installed Dockers on our computer.

To create the project image we will execute the `build` instruction, we will execute the following line in the API folder

```sh
How use it -> docker build -t <name> .   
docker build -t api_image .
```
To see the images created you can run:
```sh
docker images
```
This will create an image called `api_image`, Now to create our container we will use `docker run` as follows:
```sh
docker run -dp 8000:8000 --name api_container api_image
```
To see all the containers created you can execute:
```sh
docker ps -a
```

And ready our project has been deployed on the localhost by port `8000` through dockers and you should be able to open it by typing _http://localhost:8000/docs_ in your browser.


<p align="center" width="200" height="200">
  <img src="https://user-images.githubusercontent.com/66691963/225132683-1f3671ce-5797-45ae-ad9f-47fd0fc387e6.png"> 
</p>



## API Developer
<p>
  <img align="left" width="200" height="200" src="https://avatars.githubusercontent.com/u/66691963?v=4">
  <p>  
  
    @RaigoXD

    Jhoan Esteban Raigoza Agudelo

    Linkedin: https://www.linkedin.com/in/jhoan-raigoza-07290823b/

    Backend Developer  
  </p>
</p>
