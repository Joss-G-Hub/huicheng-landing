// Guarda el nombre de quien envió el formulario para saludarlo en la página de Gracias.
// Vive solo en memoria: si alguien abre #/gracias directamente, se muestra un saludo general.
let lastName = '';
export const setThanksName = (name) => { lastName = (name || '').trim().split(/\s+/)[0] || ''; };
export const getThanksName = () => lastName;
