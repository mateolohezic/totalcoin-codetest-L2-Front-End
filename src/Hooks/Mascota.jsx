class Mascota {
    constructor(especie, edad, peso, esterilizado) {
        this.especie = especie;
        this.edad = edad;
        this.peso = peso;
        this.esterilizado = esterilizado;
    }

    calcularPaquete() {
          
        let cantidadAlimento = 0;
        let precioAlimento = 0;
        let cantidadComplementosDietarios = 0;
        let precioComplementoDietario = 0;
        const edadAños = this.edad / 12

        if (this.especie === 'gato') {

            cantidadAlimento = 0.5 * this.peso;
            precioAlimento = cantidadAlimento * 2200;
            if (edadAños > 5) {
                cantidadComplementosDietarios++;
            }
            if (this.esterilizado === 'si') {
                cantidadComplementosDietarios++;
            }
            precioComplementoDietario = cantidadComplementosDietarios * 2600;
        } else if (this.especie === 'perro') {

            cantidadAlimento = 0.8 * this.peso;
            precioAlimento = cantidadAlimento * 1420;
            cantidadComplementosDietarios = Math.floor(edadAños / 3);
            if (edadAños > 5 && this.esterilizado === 'si') {
                cantidadComplementosDietarios++;
            }
            precioComplementoDietario = cantidadComplementosDietarios * 4000;
        }
      
          return {
            alimento: Math.round(cantidadAlimento),
            precioAlimento: Math.round(precioAlimento),
            complementoDietario: Math.round(cantidadComplementosDietarios),
            precioComplementoDietario: Math.round(precioComplementoDietario),
          };
    }
}
  
export default Mascota;