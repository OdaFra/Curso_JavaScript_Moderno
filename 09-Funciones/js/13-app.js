const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciendo la canción id ${id}.....`),
  pausar: () => console.log(`Pausando...`),
  borrar: (id) => console.log(`Borrando cancion id ${id}`),
  crearPlayList: (nombre) => console.log(`Creando playlist de:  ${nombre}`),
  reproducirPlayList: (nombre) =>
    console.log(`Reproducir la play list:  ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo una ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(25);
reproductor.pausar();
reproductor.borrar(30);

reproductor.crearPlayList("Rock 90s");
reproductor.reproducirPlayList("Hip Hop");
