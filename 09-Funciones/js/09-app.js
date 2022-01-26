const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo la canción id ${id}.....`);
  },
  pausar: function () {
    console.log(`Pausando...`);
  },
  borrar: function (id) {
    console.log(`Borrando cancion id ${id}`);
  },
  crearPlayList: function (nombre) {
    console.log(`Creando playlist de:  ${nombre}`);
  },
  reproducirPlayList: function (nombre) {
    console.log(`Reproducir la play list:  ${nombre}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(25);
reproductor.pausar();
reproductor.borrar(30);

reproductor.crearPlayList("Rock 90s");
reproductor.reproducirPlayList("Hip Hop");
