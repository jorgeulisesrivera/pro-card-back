# Pro-Card BackEnd

## Dependencias

### Instalación de depenediencias

> Instale las dependencias del proyecto con npm

```
npm install
```


## Iniciar aplicación localmente

```
npm run dev
```

## Base de datos y variables de entorno

1) La base de datos se encuentra publicada en internet

2) Dentro del archivo .env se puede configurar el puerto de escucha (por defecto 5000)

3) Solo para este caso de prueba el archivo .env se quitó de .gitignore


## Funcionamiento

La API tiene tres métodos:

```
Query getUsers
Mutation createUser(user)
Mutation updateUser(user,id)
```