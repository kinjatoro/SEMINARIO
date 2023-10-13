import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const bares = [...Array(23)].map((_, index) => ({
  id: index+1,
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: sample(["El Rincón Bohemio",
  "La Taberna del Marinero",
  "El Búho Nocturno",
  "El Jardín Secreto",
  "Bar La Luna Creciente",
  "El Escondite del Jazz",
  "El Refugio de los Amigos",
  "Taberna del Dragón Rojo",
  "El Rincón de las Risas",
  "El Bodegón Tradicional",
  "El Faro Encantado",
  "La Cervecería del Pirata",
  "Taberna de la Vieja Ciudad",
  "Bar de los Susurros",
  "El Refugio del Rock",
  "La Tapa Creativa",
  "Barra del Oeste",
  "El Rincón del Gourmet",
  "El Oasis Tropical",
  "Taberna del Viajero"]),
  createdAt: faker.date.past(),
  view: sample(["19/11", "12/11", "13/11", "20/11", "22/11", "23/11", "02/12","04/12","07/12"]),
  stars: sample(["4.1","4.2","4.3","4.4","4.5","4.6","4.7","4.8","4.9","4.0","3.9"]),
  price: sample(['$20','$50',]),
  share: sample(["20:00", "20:30","21:00", "21:30", "22:00","22:30", "23:00"]),
  favorite: faker.datatype.number(),
  author: {
    name: sample([  "Balvanera",
    "Barracas",
    "Belgrano",
    "Boedo",
    "Caballito",
    "Chacarita",
    "Coghlan",
    "Colegiales",
    "Constitución",
    "Flores",
    "Floresta",
    "La Boca",
    "Liniers",
    "Mataderos",
    "Monte Castro",
    "Nueva Pompeya",
    "Núñez",
    "Palermo",
    "Parque Avellaneda",
    "Parque Chacabuco",
    "Parque Chas",
    "Parque Patricios",
    "Puerto Madero",
    "Recoleta",
    "Retiro",
    "Saavedra",
    "San Cristóbal",
    "San Nicolás",
    "San Telmo",
    "Vélez Sársfield",
    "Versalles",
    "Villa Crespo",
    "Villa del Parque",
    "Villa Devoto",
    "Villa General Mitre",
    "Villa Lugano",
    "Villa Luro",
    "Villa Ortúzar",
    "Villa Pueyrredón",
    "Villa Real",
    "Villa Riachuelo",
    "Villa Santa Rita",
    "Villa Soldati",
    "Villa Urquiza"]),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
  
  export default bares;