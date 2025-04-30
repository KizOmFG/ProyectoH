import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null); // Estado para la noticia seleccionada

  // Efecto para aplicar ScrollReveal a los elementos con la clase 'reveal'
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 1200, // Aumentamos la duración de la animación
      distance: '60px', // Aumentamos la distancia para el efecto de deslizamiento
      origin: 'bottom',
      easing: 'ease-out',
      reset: true, // Resetea el efecto cada vez que el elemento vuelve a entrar en vista
    });

    sr.reveal('.reveal'); // Aplica ScrollReveal a los elementos con la clase 'reveal'
  }, []);

  // Array de noticias
  const noticias = [
    {
      categoria: 'Innovación', 
      titulo: 'Nuevas baterías para autos eléctricos', 
      fecha: '29 de noviembre', 
      texto: 'Científicos desarrollan baterías más duraderas y de carga rápida que prometen revolucionar el mercado de los vehículos eléctricos.', 
      color: 'primary', 
      imagen: 'src/assets/images/noticia1.jpg',
      enlaceExterno: 'https://www.xataka.com/automovil/esto-sera-lo-proximo-en-baterias-para-coches-electricos-mas-de-650-km-de-autonomia-real'
    },
    {
      categoria: 'Diseño', 
      titulo: 'El impacto del metaverso en la arquitectura', 
      fecha: '28 de noviembre', 
      texto: 'Empresas de diseño están utilizando el metaverso para crear experiencias arquitectónicas inmersivas y colaborativas.', 
      color: 'success', 
      imagen: 'src/assets/images/noticia2.jpg',
      enlaceExterno: 'https://bim2vr.es/blog-construccion-digital-blog-claves-impacto-metaverso-arquitectura/'
    },
    {
      categoria: 'Tecnología', 
      titulo: 'Lanzamiento del nuevo procesador Quantum X', 
      fecha: '27 de noviembre', 
      texto: 'La tecnología cuántica da un salto con el nuevo procesador Quantum X, que promete un rendimiento sin precedentes.', 
      color: 'info', 
      imagen: 'src/assets/images/noticia3.webp',
      enlaceExterno: 'https://www.silicon.es/ibm-presenta-ibm-quantum-heron-su-nuevo-procesador-cuantico-2491496'
    },
    {
      categoria: 'Ciberseguridad', 
      titulo: 'Aumentan los ataques a infraestructura crítica', 
      fecha: '26 de noviembre', 
      texto: 'Expertos advierten sobre el incremento de ciberataques dirigidos a sectores críticos como la energía y la salud.', 
      color: 'danger', 
      imagen: 'src/assets/images/noticia4.jpg',
      enlaceExterno: 'https://www.welivesecurity.com/la-es/2022/12/21/ciberataques-infraestructuras-criticas-tendencias-ciberseguridad/'
    },
    {
      categoria: 'Robótica', 
      titulo: 'Robots humanoides en la industria', 
      fecha: '25 de noviembre', 
      texto: 'Nuevos robots humanoides están comenzando a reemplazar tareas repetitivas en fábricas y almacenes.', 
      color: 'warning', 
      imagen: 'src/assets/images/noticia5.jpg',
      enlaceExterno: 'https://www.businessinsider.es/conoce-robots-humanoides-ia-potentes-existen-1342242'
    },
    {
      categoria: 'Medicina', 
      titulo: 'Cirugías asistidas por IA', 
      fecha: '24 de noviembre', 
      texto: 'La inteligencia artificial está ayudando a los médicos a realizar cirugías más precisas y menos invasivas.', 
      color: 'secondary', 
      imagen: 'src/assets/images/noticia6.jpg',
      enlaceExterno: 'https://arepatecnologica.com/aplicaciones-de-la-inteligencia-artificial-en-cirugia-avances-y-beneficios/'
    },
    {
      categoria: 'Astronomía', 
      titulo: 'Descubrimiento de un exoplaneta habitable', 
      fecha: '23 de noviembre', 
      texto: 'Astrónomos han identificado un exoplaneta en la zona habitable de su estrella, lo que aumenta la posibilidad de encontrar vida.', 
      color: 'primary', 
      imagen: 'src/assets/images/noticia7.jpg',
      enlaceExterno: 'https://elpais.com/ciencia/2024-05-23/descubierto-gliese-12-b-un-exoplaneta-del-tamano-de-la-tierra-que-puede-albergar-vida.html'
    },
    {
      categoria: 'Blockchain', 
      titulo: 'El futuro de las finanzas descentralizadas', 
      fecha: '22 de noviembre', 
      texto: 'Las aplicaciones DeFi están redefiniendo cómo las personas interactúan con el dinero y las finanzas.', 
      color: 'success', 
      imagen: 'src/assets/images/noticia8.webp',
      enlaceExterno: 'https://bitperfect.pe/es/el-futuro-de-las-finanzas-descentralizadas-un-fenomeno-de-mercado-en-crecimiento/'
    },
    {
      categoria: 'Movilidad', 
      titulo: 'Autos voladores: ¿la próxima revolución?', 
      fecha: '21 de noviembre', 
      texto: 'Empresas tecnológicas están avanzando rápidamente en el desarrollo de vehículos voladores accesibles para las masas.', 
      color: 'info', 
      imagen: 'src/assets/images/noticia9.jpg',
      enlaceExterno: 'https://detuinteress.com/coches-voladores/#:~:text=En%20este%20art%C3%ADculo%20hablaremos%20sobre%20la%20pr%C3%B3xima%20revoluci%C3%B3n,y%20el%20impacto%20que%20tendr%C3%A1%20en%20nuestras%20vidas.'
    },
    {
      categoria: 'Software', 
      titulo: 'Nueva actualización de Linux Kernel', 
      fecha: '20 de noviembre', 
      texto: 'La versión más reciente del Kernel de Linux introduce mejoras significativas en seguridad y rendimiento.', 
      color: 'danger', 
      imagen: 'src/assets/images/noticia10.jpg',
      enlaceExterno: 'https://www.muylinux.com/2024/03/11/linux-6-8/'
    },
  ];

  // Función para abrir el modal con la noticia seleccionada
  const openModal = (noticia) => {
    setSelectedNews(noticia);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="container my-5">
      {/* Publicación Destacada */}
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark reveal">
        <div className="col-md-8 px-0">
          <h1 className="display-4 fst-italic">La revolución de la inteligencia artificial en 2024</h1>
          <p className="lead my-3">
            Descubre cómo las últimas innovaciones en inteligencia artificial están transformando sectores como la salud, la educación y la industria.
          </p>
          <p className="lead mb-0">
            <a href="#" className="text-white fw-bold">
              Seguir leyendo...
            </a>
          </p>
        </div>
      </div>

      {/* Noticias en tarjetas */}
      <div className="row mb-2">
        {noticias.map((noticia, index) => (
          <div className="col-md-6 reveal" key={noticia.titulo}>
            <div 
              className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
              onClick={() => openModal(noticia)}  
            >
              <div className="col p-4 d-flex flex-column position-static">
                <strong className={`d-inline-block mb-2 text-${noticia.color}`}>{noticia.categoria}</strong>
                <h3 className="mb-0">{noticia.titulo}</h3>
                <div className="mb-1 text-muted">{noticia.fecha}</div>
                <p className="card-text mb-auto">{noticia.texto}</p>
                <a href="#" className="stretched-link">
                  Seguir leyendo
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src={noticia.imagen} 
                  alt={`Imagen de noticia: ${noticia.titulo}`} 
                  width="200" 
                  height="250" 
                  className="bd-placeholder-img"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar más detalles de la noticia */}
      {selectedNews && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content shadow-lg border-0 rounded-3">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title fs-4">{selectedNews.titulo}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body p-4">
                {/* Imagen de la noticia */}
                <img
                  src={selectedNews.imagen}
                  alt={`Imagen de noticia: ${selectedNews.titulo}`}
                  className="img-fluid rounded mb-3 shadow-sm"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}  
                />
                <p><strong>Categoría:</strong> {selectedNews.categoria}</p>
                <p><strong>Fecha:</strong> {selectedNews.fecha}</p>
                <p>{selectedNews.texto}</p>
                <a href={selectedNews.enlaceExterno} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4 py-2 mt-2">Leer más</a>
              </div>
              <div className="modal-footer border-top-0">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
