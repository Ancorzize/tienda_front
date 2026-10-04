/**
 * Datos simulados de productos de lencería ATHALIA.
 * Utiliza exclusivamente las imágenes de /assets/marca/productos/
 */

export const categoriasLista = [
  'Todos',
  'Conjuntos',
  'Brasieres',
  'Pantys',
  'Babydoll',
  'Bodies',
  'Lencería'
];

export const productos = [
  {
    id: 1,
    nombre: 'Conjunto Encaje Royale',
    categoria: 'Conjuntos',
    descripcion: 'Exquisito conjunto de encaje delicado con finos acabados dorados y copas prehormadas.',
    precio: 129000,
    imagen: '/assets/marca/productos/imagen1.jpg',
    disponible: true,
    destacado: true
  },
  {
    id: 2,
    nombre: 'Body Seducción Seda',
    categoria: 'Bodies',
    descripcion: 'Body de tul y seda satinada con detalles transparentes y corte estilizado.',
    precio: 145000,
    imagen: '/assets/marca/productos/imagen2.jpg',
    disponible: true,
    destacado: true
  },
  {
    id: 3,
    nombre: 'Babydoll Nuit Elegance',
    categoria: 'Babydoll',
    descripcion: 'Babydoll fluido en satén suave con fino galón de encaje francés.',
    precio: 119000,
    imagen: '/assets/marca/productos/imagen3.jpg',
    disponible: true,
    destacado: false
  },
  {
    id: 4,
    nombre: 'Brasier Couture Balconette',
    categoria: 'Brasieres',
    descripcion: 'Brasier estilo balconette de gran realce con varilla de soporte y tirantes bordados.',
    precio: 89000,
    imagen: '/assets/marca/productos/imagen4.jpg',
    disponible: true,
    destacado: false
  },
  {
    id: 5,
    nombre: 'Set Pantys Encaje Chic (Pack x3)',
    categoria: 'Pantys',
    descripcion: 'Set de tres pantys estilo brasilera en suave blonda elástica de ajuste perfecto.',
    precio: 75000,
    imagen: '/assets/marca/productos/imagen5.jpg',
    disponible: true,
    destacado: false
  },
  {
    id: 6,
    nombre: 'Conjunto Corset Velvet Rose',
    categoria: 'Conjuntos',
    descripcion: 'Corset estructurado con varillas flexibles y panty a juego en tono rosa borgoña.',
    precio: 159000,
    imagen: '/assets/marca/productos/imagen6.jpg',
    disponible: true,
    destacado: true
  },
  {
    id: 7,
    nombre: 'Lencería Kimono Satén',
    categoria: 'Lencería',
    descripcion: 'Bata tipo kimono corta en tejido satinado ultraligero con cinta ajustadora a la cintura.',
    precio: 135000,
    imagen: '/assets/marca/productos/imagen7.jpg',
    disponible: true,
    destacado: false
  },
  {
    id: 8,
    nombre: 'Body Encaje Sensual Gold',
    categoria: 'Bodies',
    descripcion: 'Body entero en encaje floral negro con destellos dorados y escote profundo en espalda.',
    precio: 139000,
    imagen: '/assets/marca/productos/imagen1.jpg',
    disponible: true,
    destacado: false
  },
  {
    id: 9,
    nombre: 'Brasier Triangulación Bralette',
    categoria: 'Brasieres',
    descripcion: 'Bralette sin varilla en encaje elástico transpirable de comodidad excepcional.',
    precio: 79000,
    imagen: '/assets/marca/productos/imagen2.jpg',
    disponible: true,
    destacado: false
  },
  {
    id: 10,
    nombre: 'Babydoll Silk Romance',
    categoria: 'Babydoll',
    descripcion: 'Prenda íntima romántica en vaporosa gasa de seda con escote en V bordado.',
    precio: 125000,
    imagen: '/assets/marca/productos/imagen3.jpg',
    disponible: true,
    destacado: false
  },
  {
    id: 11,
    nombre: 'Panty Hilo Encaje Premium',
    categoria: 'Pantys',
    descripcion: 'Panty tipo hilo elaborado en suave blonda floral sin costuras visibles.',
    precio: 49000,
    imagen: '/assets/marca/productos/imagen4.jpg',
    disponible: true,
    destacado: false
  },
  {
    id: 12,
    nombre: 'Conjunto Lencería Luxe Atelier',
    categoria: 'Conjuntos',
    descripcion: 'Conjunto de alta costura boutique con liguero integrado y finas aplicaciones.',
    precio: 169000,
    imagen: '/assets/marca/productos/imagen5.jpg',
    disponible: true,
    destacado: true
  }
];

/**
 * Utilidad para formatear precios en pesos colombianos ($89.000)
 */
export const formatearPrecio = (valor) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(valor);
};

export default productos;
