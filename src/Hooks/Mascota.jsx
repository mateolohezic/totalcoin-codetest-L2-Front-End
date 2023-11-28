class Mascota {
    constructor(especie, edad, peso, esterilizado) {
        this.especie = especie;
        this.edad = edad;
        this.peso = peso;
        this.esterilizado = esterilizado;
    }

    calcularPaquete() {
          
        let cantidadAlimento = 0;
        let cantidadComplementosDietarios = 0;
        const edadAños = this.edad / 12

        if (this.especie === 'gato') {

            cantidadAlimento = 0.5 * this.peso;
            if (edadAños > 5) {
                cantidadComplementosDietarios++;
            }
            if (this.esterilizado === 'si') {
                cantidadComplementosDietarios++;
            }

        } else if (this.especie === 'perro') {

            cantidadAlimento = 0.8 * this.peso;
            cantidadComplementosDietarios = Math.floor(edadAños / 3);
            if (edadAños > 5 && this.esterilizado === 'si') {
                cantidadComplementosDietarios++;
            }

        }
      
          return {
            cantidadAlimento,
            cantidadComplementosDietarios,
          };
    }
}
  
export default Mascota;