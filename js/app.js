// Datos de materiales
const materiales = {
    "carton": {
        nombre: "Cartón",
        info: `El cartón es reciclable y se puede reutilizar para empaques, manualidades o compostaje.
        Incluso hay empresas como Sabritas y Barcel donde sus cajas las reutilizan para transportar mercancía.`,

        tips: "Si quieres reciclarlas solo es cuestion aplanar las cajas antes y apilarlas y amararlas con una cuerda y mantenerlas en un lugar seco. A continucion se te mostrara un mapa donde las puedes llevar a reciclar.",
        Lugares: `<iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57491.02551764744!2d-100.44334947832031!3d25.764316999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662970054d131e1%3A0xdfac66c25dbe2967!2sCentro%20Reciclaje%20San%20Bernab%C3%A9!5e0!3m2!1ses-419!2smx!4v1763933406663!5m2!1ses-419!2smx" 
            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    },
    "plastico": {
        nombre: "Plástico",
        info: `El plástico puede reciclarse en la mayoría de los centros de acopio y algunas empresas lo compran para reprocesarlo.`,
        tips: `Para reciclarlo primero se lava los envases(si es que esta muy sucio ya que perjudica a la hora de triturarlo)
		antes de reciclar y separa por tipo (PET( tereftalato de polietileno), HDPE(polietileno de alta densidad ), etc.).`,
        Lugares: `<iframe 
		src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57515.99634395504!2d-100.4498971!3d25.7127077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866297007bb87daf%3A0xca5c06be1979af3d!2sCentro%20de%20acopio%20Reciclaje%20Cart%C3%B3n%2C%20Metales%2C%20Pet%20y%20Pead!5e0!3m2!1ses-419!2smx!4v1763945697458!5m2!1ses-419!2smx" 
		width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    
    "vidrio": {
        nombre: "Vidrio",
        info: `El vidrio es 100% reciclable y puede reutilizarse infinitamente sin perder calidad.Tambien puedes reutilizarlo para guardar dependiendo del envase.`,
        tips: `Para reciclarlo primero se separa botellas por color(esto es opcional dependiendo del centro de reciclaje) y quita tapas o etiquetas antes de reciclar. OJO, EVITA LLEVAR ENVASES,BOTELLAS,ETC ROTOS!,
	    ya que puede ser peligroso transportarlos.`,
        Lugares: `<iframe 
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57497.06346626106!2d-100.4788908783203!3d25.75184670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866297003ad69e83%3A0xfdd2cdb96f0675db!2sReciclaje%20de%20vidrio!5e0!3m2!1ses-419!2smx!4v1763946263825!5m2!1ses-419!2smx"
		width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    "papel": {
        nombre: "Papel",
        info: `El papel reciclable incluye periódicos, revistas y hojas limpias de oficina.
		Tambien se puede reutilizar para relleno de protección en envíos,relleno para cajas de regalos o base para artesanías(como piñatas),figuras origami o manualidades
		o composta (solo para papel sin tinta y sin grasa).`,
        tips: `Para reciclarlo es importamte quitarle las grapas al papel(si es papel de oficina),es importante aplanar y comodar el papel,
        esto permite manejarlo mejor. OJO!,evita reciclar papel sucio o con residuos de comida.`,
        Lugares: `<iframe 
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57491.02551764736!2d-100.44334947832031!3d25.764316999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662970054d131e1%3A0xdfac66c25dbe2967!2sCentro%20Reciclaje%20San%20Bernab%C3%A9!5e0!3m2!1ses-419!2smx!4v1763949683772!5m2!1ses-419!2smx" 
		width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    "aluminio": {
        nombre: "Aluminio",
        info: `Las latas de aluminio se reciclan fácilmente y ayudan a ahorrar energía.Tambien se puede reutilizar para hacer masetas
		portaplumas, manualidades,etc.`,
        tips: `Para reciclarlo es neceario retirar comida o liquidos sobreantes y limpiarlos,
		aplasta las latas para ahorrar espacio y deposítalas en contenedores de aluminio. OJO!, evita mezclarlo con otro metales`,
        Lugares: `<iframe 
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57479.85329788158!2d-100.4787072783203!3d25.7873764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629dc716cdfefb%3A0x5d81db18889d7e4c!2sRecicladora%20ZAGA!5e0!3m2!1ses-419!2smx!4v1763951919096!5m2!1ses-419!2smx" 
		width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
    "electronicos": {
        nombre: "Electrónicos",
        info: `Los residuos electrónicos requieren centros de acopio especializados para su reciclaje. Pero tambien se pueden
        reutilizar las piezas que contienen, como tornillos, cables, motores, imanes, etc. o de plano pueden servir como refacciones.		`,
        tips: `Nunca tires electrónicos a la basura común; busca puntos de recolección autorizados.`,
        Lugares: `<iframe 
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57528.4187898589!2d-100.40418197832028!3d25.686997200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf011c0b0459%3A0x321cee6556adbc15!2sE.W.%20basura%20electr%C3%B3nica!5e0!3m2!1ses-419!2smx!4v1763953073880!5m2!1ses-419!2smx" 
		width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    }
};

// Función para mostrar ficha del material
function mostrarMaterial(nombre) {
    const material = materiales[nombre];
    const pantalla = document.getElementById("pantalla-material");

    let contenido = `
        <h2>${material.nombre}</h2>
        <p>${material.info}</p>
        <p><strong>Tips:</strong> ${material.tips}</p>
    `;

    // Agregar mapa solo si existe
    if(material.Lugares) {
        contenido += `<h3>Centro de Reciclaje:</h3>${material.Lugares}`;
    }

    contenido += `<br><button onclick="volverPrincipal()">Volver</button>`;

    pantalla.innerHTML = contenido;
    pantalla.style.display = "block";
    document.getElementById("pantalla-principal").style.display = "none";
}

// Función para volver a la pantalla principal
function volverPrincipal() {
    document.getElementById("pantalla-material").style.display = "none";
    document.getElementById("pantalla-principal").style.display = "block";
}
