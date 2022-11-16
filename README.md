# TaskGuide
This is a ToDoList app I created using Django, DjangoRESTFramework, React and create-react-app.  
The backend is just a REST API, without users, so not production-ready.
This was the stepping stone for [CustomTaskGuide](https://github.com/senabIsShort/CustomTaskGuide)

# Setup

## backend 
To setup the backend, create a virtual environment using Pipenv  
`$ pipenv shell`  

If you don't have Pipenv installed :  
`$ pip install pipenv`  

Then, install `django`, `djangorestframework` and `django-cors-headers` :  
`$ pipenv install django djangorestframework django-cors-headers`   

Then, in the `backend` folder, just start the dev server :  
`$ python manage.py runserver`  

## frontend
To setup the frontend, use `npm`  
In the frontend folder, use :  
`$ npm install`  

Then, run the dev server using :  
`$ npm start`  
