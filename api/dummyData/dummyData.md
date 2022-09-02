## 🕵️‍♂️​ API

**Rutas**:

**`/dummy/patients`** Obtener informacion de los pacientes.
 🟡 - La entidad paciente tiene este formato.
```javascript
  {
    "id": "630fff54fc13ae7e72000477",
    "name": "Addi Giorio",
    "email": "agiorio3@cocolog-nifty.com",
    "password": "mpy1Xb6s6K",
    "phoneNumber": "(993) 4587063",
    "image": "https://www.futuroprossimo.it/wp-content/uploads/2021/12/Synthesia-Avatar-960x500.jpg",
    "active": true
  }
```

**`/dummy/doctors`** Obtener informacion de los doctores.

 🟡 - La entidad doctor tiene este formato.
```javascript
  {
    "id": "63100a27fc13ae23230000be",
    "name": "Randell Boshere",
    "specialities": ["Endocrinología", "Hematología"],
    "license": "9372239038",
    "country": "Argentina",
    "city": "Mar del Plata",
    "address": "4 Badeau Center",
    "email": "rboshere0@nasa.gov",
    "password": "F5b6fOHgL7",
    "phoneNumber": "(248) 8177666",
    "schedule": [
      { "hour": "09:00 - 19:00", "space": 20, "checkUpPrice": "$239.89" }
    ],
    "active": true,
    "image": "https://www.futuroprossimo.it/wp-content/uploads/2021/12/Synthesia-Avatar-960x500.jpg",
    "rating": 1
  }
```

**`/dummy/admins`** Obtener informacion de los admins.
 🟡 - La entidad admin tiene este formato.
```javascript
   {
    "id": "630fe45ffc13ae232300001d",
    "name": "Johna",
    "email": "jfellij@trellian.com",
    "password": "yTfnqm8",
    "image": "https://www.futuroprossimo.it/wp-content/uploads/2021/12/Synthesia-Avatar-960x500.jpg",
    "active": true
  }
```

**`/dummy/appointments`** Obtener informacion de las citas o reservas.
 🟡 - La entidad cita/reserva tiene este formato en consulta.
```javascript
   {
            "id": "6310362ffc13ae3157000032",
            "patientName": "Kenn Blatcher",
            "patientEmail": "kblatcher1@bandcamp.com",
            "doctorName": "Eadie Scruby",
            "doctorEmail": "escruby19@joomla.org",
            "doctorSpecialities": [
                "Ecografía",
                "Hematología",
                "Ginecología"
            ],
            "hourAppointment": "14:30",
            "timeAppointment": "30 min",
            "priceAppointment": "$538.21",
            "adressAppointment": "86 Springs Drive",
            "cityAppointment": "Argentina",
            "countryAppointment": "Buenos Aires",
            "address": "46417 Loftsgordon Center",
            "date": "9/14/2021",
            "additionalComment": "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam"
        },
```

## **Endpoints**:

🟢 **Funcionando**

## **`/dummy/patients`**

**`GET`** `/` 🟢 - Obtiene la informacion de todos los pacientes.
**`GET`** `/:idPatient` 🟢 - Obtener informacion de un paciente mediante **id**.
**`POST`** `/` 🟢 - Crear un paciente enviando un **objeto** con informacion.
**`PATCH`** `/:idPatient` 🟢 - Actualizar informacion de un paciente mediante **id**.
**`DELETE`** `/:idPatient` 🟢 - Eliminar | Cambiar estado a false del paciente mediante **id**.

## **`/dummy/doctors`**

**`GET`** `/` 🟢 - Obtiene la informacion de todos los doctores.
**`GET`** `/:idDoctor` 🟢 - Obtener informacion de un doctor mediante **id**.
**`POST`** `/` 🟢 - Crear un doctor enviando un **objeto** con informacion.
**`PATCH`** `/:idDoctor` 🟢 - Actualizar informacion de un doctor mediante **id**.
**`DELETE`** `/:idDoctor` 🟢 - Eliminar | Cambiar estado a false del doctor mediante **id**.

## **`/dummy/admins`**

**`GET`** `/` 🟢 - Obtiene la informacion de todos los admins.
**`GET`** `/:idAdmin` 🟢 - Obtener informacion de un admin mediante **id**.
**`POST`** `/` 🟢 - Crear un admin enviando un **objeto** con informacion.
**`PATCH`** `/:idAdmin` 🟢 - Actualizar informacion de un admin mediante **id**.
**`DELETE`** `/:idAdmin` 🟢 - Eliminar | Cambiar estado a false del admin mediante **id**.

## **`/dummy/appointments`**

**`GET`** `/` 🟢 - Obtiene la informacion de todos las reservas/citas.
**`GET`** `/:idAppoinment` 🟢 - Obtener informacion de una reserva/cita mediante **id**.
**`POST`** `/` 🟢 - Crear un reserva/cita enviando un **objeto** con informacion.
**`DELETE`** `/:idAppoinment` 🟢 - Eliminar | Cambiar estado a false de la reserva/cita mediante **id**.
