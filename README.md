Al inicio del proyecto solo tenia estas carpetas

![Captura de pantalla 2024-12-14 212132](https://github.com/user-attachments/assets/8948d9bc-61f2-4cc7-83c6-abea1b27d022)



Para el primer punto Conectar el front-end previamente creado con la API de Node.js para mostrar y manejar datos, instale node con esa funcion de mas que pone en la imagen 
![Captura de pantalla 2024-12-14 212647](https://github.com/user-attachments/assets/be6a9596-98f3-4529-8895-3cb963f9ed30)


luego el proyecto me quedo asi
![Captura de pantalla 2024-12-14 212826](https://github.com/user-attachments/assets/84344129-d3b7-4fd6-9cf5-2a89faafa9ad)



ya con el node implemente las api para la pagina 
![Captura de pantalla 2024-12-14 213830](https://github.com/user-attachments/assets/4d99470f-0883-4ff0-afac-4ba94114bf54)
![Captura de pantalla 2024-12-14 213841](https://github.com/user-attachments/assets/2018a6c5-4a36-440a-be2f-04b71d9f62bf)










despues pase la pagina por el light house de google chrome para ver su optimo rendimiento 
![Captura de pantalla 2024-12-14 213953](https://github.com/user-attachments/assets/ff326c9b-3a1f-4791-93aa-fd222e07d42b)






este fue el resultado






![Captura de pantalla 2024-12-14 214101](https://github.com/user-attachments/assets/7530f682-6788-486c-b105-82689f9c8a3b)






aqui ponia unos fallos minimos que no afectaban al funcinamiento de la pagina
![Captura de pantalla 2024-12-14 214125](https://github.com/user-attachments/assets/31e92598-4af9-49f6-bef0-bb2370480944)






cuando intente subir el proyecto a git me salia esto
![Captura de pantalla 2024-12-14 221720](https://github.com/user-attachments/assets/7447f299-4be0-4fdc-b879-d7c1aaa4321b)








tambien tuve varios problemas porque sin querer habia puesto la ruta de descarga hacia la carpeta imagenes del proyecto, por lo que cuando lo intente subir de nuevo me salia que el archivo
era muy pesado para subirlo, luego de estar intentando casi el todo el dia haciendo prueba y error con extensiones e investigando (borre el repositorio como 2 veces pensando que el problema era de git)
con un archivo llamado bfg.Jar elimine todo el historial y ahora en la noche pude subir el proyecto a git
![Captura de pantalla 2024-12-14 223825](https://github.com/user-attachments/assets/a03c6380-09e6-4fd2-ba52-8b5a590621d8)
![Captura de pantalla 2024-12-14 225254](https://github.com/user-attachments/assets/ee1b49e5-a31d-4267-a3b8-5dee4b2f0cc3)






tambien le puse el lfs pero no me sirvio tanto asi que luego lo borre
![Captura de pantalla 2024-12-15 090100](https://github.com/user-attachments/assets/7ff10734-6a53-4366-91fc-662d908efb76)





luego cuando abria la pagina en git no me cargaban las imagenes
![Captura de pantalla 2024-12-15 091341](https://github.com/user-attachments/assets/2147896a-b6da-4a29-9a30-4ae6e09e9836)





revise las direcciones de las imagenes que estuvieran bien 
![Captura de pantalla 2024-12-15 093415](https://github.com/user-attachments/assets/1c59e3a8-870e-430b-9fee-d64e951a8390)





elimine la carpeta public del proyecto y la puse normal con los demas archivos y me funciono
![Captura de pantalla 2024-12-15 220425](https://github.com/user-attachments/assets/45df4f6e-a85e-48a5-b8eb-5c89dca4abd4)







luego configure el vercel vinvulandolo con git y me quedo la pagina el las 2 plataformas 
![Captura de pantalla 2024-12-15 220451](https://github.com/user-attachments/assets/18745f7a-e136-4d82-a5ae-e27e38c00a03)
![Captura de pantalla 2024-12-15 220553](https://github.com/user-attachments/assets/3e91a80d-7e9a-486d-86be-6cc2a5fe4764)


