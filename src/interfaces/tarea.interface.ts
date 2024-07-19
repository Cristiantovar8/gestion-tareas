export interface Tarea {
    titulo: string;
    descripcion: string;
    fechaVencimiento: Date;
    estado: 'PENDIENTE' | 'EN-PROGRESO' | 'COMPLETADO';
  }