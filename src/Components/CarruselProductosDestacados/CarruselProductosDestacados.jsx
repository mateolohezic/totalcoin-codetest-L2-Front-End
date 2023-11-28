import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CarruselProductosDestacados.css'

function CarruselProductosDestacados() {

    const responsiveCarousel = {
        superLargeDesktop: {
          breakpoint: { max: 10000, min: 1200 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 1200, min: 992 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 992, min: 576 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1,
        }
    };

    return (
    <>
        <section className='contenedorCarruselProductosDestacados'>
            <h1>Productos destacados</h1>
            <Carousel infinite autoPlay pauseOnHover arrows={true} containerClass='carruselProductosDestacados' responsive={responsiveCarousel}>
                <article className='cardProducto'>
                    <div>
                        <img src="https://masonlineprod.vtexassets.com/arquivos/ids/289918/front-view-6557.jpg?v=638242762691730000" alt="Foto Producto" />
                    </div>
                    <div>
                        <h2>Pedigree Adulto 15kg</h2>
                        <h3>$2.000</h3>
                        <div>
                            <a href="/carrito">
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M11.2 11.2C10.423 11.2 9.8 11.823 9.8 12.6C9.8 12.9713 9.9475 13.3274 10.2101 13.5899C10.4726 13.8525 10.8287 14 11.2 14C11.5713 14 11.9274 13.8525 12.1899 13.5899C12.4525 13.3274 12.6 12.9713 12.6 12.6C12.6 11.823 11.97 11.2 11.2 11.2ZM0 0V0.542406C0 1.01604 0.383958 1.4 0.857594 1.4C1.18885 1.4 1.49049 1.59078 1.63245 1.89007L3.0794 4.94074C3.60699 6.05307 3.56551 7.35161 2.968 8.428C2.863 8.624 2.8 8.855 2.8 9.1C2.8 9.4713 2.9475 9.8274 3.21005 10.0899C3.4726 10.3525 3.8287 10.5 4.2 10.5H11.9C12.2866 10.5 12.6 10.1866 12.6 9.8C12.6 9.4134 12.2866 9.1 11.9 9.1H4.494C4.44759 9.1 4.40308 9.08156 4.37026 9.04874C4.33744 9.01592 4.319 8.97141 4.319 8.925C4.319 8.89 4.326 8.862 4.34 8.841C4.72868 8.13706 5.46925 7.7 6.27337 7.7H10.185C10.71 7.7 11.172 7.406 11.41 6.979L13.916 2.45C13.965 2.338 14 2.219 14 2.1C14 1.91435 13.9263 1.7363 13.795 1.60503C13.6637 1.47375 13.4857 1.4 13.3 1.4H4.49392C3.54976 1.4 2.69061 0.854486 2.289 0M4.2 11.2C3.423 11.2 2.8 11.823 2.8 12.6C2.8 12.9713 2.9475 13.3274 3.21005 13.5899C3.4726 13.8525 3.8287 14 4.2 14C4.5713 14 4.9274 13.8525 5.18995 13.5899C5.4525 13.3274 5.6 12.9713 5.6 12.6C5.6 11.823 4.97 11.2 4.2 11.2Z" fill="white"/>
                                    </svg>
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
                <article className='cardProducto'>
                    <div>
                        <img src="https://images.ecestaticos.com/XKJFrabFEJ1xTt_2Ox8dFkVyV0c=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd67%2Fa8d%2F860%2Fd67a8d8604edeac49386e96e2890fe7a.jpg" alt="Foto Producto" />
                    </div>
                    <div>
                        <h2>Pedigree Adulto 15kg</h2>
                        <h3>$2.500</h3>
                        <div>
                            <a href="/carrito">
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M11.2 11.2C10.423 11.2 9.8 11.823 9.8 12.6C9.8 12.9713 9.9475 13.3274 10.2101 13.5899C10.4726 13.8525 10.8287 14 11.2 14C11.5713 14 11.9274 13.8525 12.1899 13.5899C12.4525 13.3274 12.6 12.9713 12.6 12.6C12.6 11.823 11.97 11.2 11.2 11.2ZM0 0V0.542406C0 1.01604 0.383958 1.4 0.857594 1.4C1.18885 1.4 1.49049 1.59078 1.63245 1.89007L3.0794 4.94074C3.60699 6.05307 3.56551 7.35161 2.968 8.428C2.863 8.624 2.8 8.855 2.8 9.1C2.8 9.4713 2.9475 9.8274 3.21005 10.0899C3.4726 10.3525 3.8287 10.5 4.2 10.5H11.9C12.2866 10.5 12.6 10.1866 12.6 9.8C12.6 9.4134 12.2866 9.1 11.9 9.1H4.494C4.44759 9.1 4.40308 9.08156 4.37026 9.04874C4.33744 9.01592 4.319 8.97141 4.319 8.925C4.319 8.89 4.326 8.862 4.34 8.841C4.72868 8.13706 5.46925 7.7 6.27337 7.7H10.185C10.71 7.7 11.172 7.406 11.41 6.979L13.916 2.45C13.965 2.338 14 2.219 14 2.1C14 1.91435 13.9263 1.7363 13.795 1.60503C13.6637 1.47375 13.4857 1.4 13.3 1.4H4.49392C3.54976 1.4 2.69061 0.854486 2.289 0M4.2 11.2C3.423 11.2 2.8 11.823 2.8 12.6C2.8 12.9713 2.9475 13.3274 3.21005 13.5899C3.4726 13.8525 3.8287 14 4.2 14C4.5713 14 4.9274 13.8525 5.18995 13.5899C5.4525 13.3274 5.6 12.9713 5.6 12.6C5.6 11.823 4.97 11.2 4.2 11.2Z" fill="white"/>
                                    </svg>
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
                <article className='cardProducto'>
                    <div>
                        <img src="https://masonlineprod.vtexassets.com/arquivos/ids/289918/front-view-6557.jpg?v=638242762691730000" alt="Foto Producto" />
                    </div>
                    <div>
                        <h2>Pedigree Adulto 15kg</h2>
                        <h3>$2.500</h3>
                        <div>
                            <a href="/carrito">
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M11.2 11.2C10.423 11.2 9.8 11.823 9.8 12.6C9.8 12.9713 9.9475 13.3274 10.2101 13.5899C10.4726 13.8525 10.8287 14 11.2 14C11.5713 14 11.9274 13.8525 12.1899 13.5899C12.4525 13.3274 12.6 12.9713 12.6 12.6C12.6 11.823 11.97 11.2 11.2 11.2ZM0 0V0.542406C0 1.01604 0.383958 1.4 0.857594 1.4C1.18885 1.4 1.49049 1.59078 1.63245 1.89007L3.0794 4.94074C3.60699 6.05307 3.56551 7.35161 2.968 8.428C2.863 8.624 2.8 8.855 2.8 9.1C2.8 9.4713 2.9475 9.8274 3.21005 10.0899C3.4726 10.3525 3.8287 10.5 4.2 10.5H11.9C12.2866 10.5 12.6 10.1866 12.6 9.8C12.6 9.4134 12.2866 9.1 11.9 9.1H4.494C4.44759 9.1 4.40308 9.08156 4.37026 9.04874C4.33744 9.01592 4.319 8.97141 4.319 8.925C4.319 8.89 4.326 8.862 4.34 8.841C4.72868 8.13706 5.46925 7.7 6.27337 7.7H10.185C10.71 7.7 11.172 7.406 11.41 6.979L13.916 2.45C13.965 2.338 14 2.219 14 2.1C14 1.91435 13.9263 1.7363 13.795 1.60503C13.6637 1.47375 13.4857 1.4 13.3 1.4H4.49392C3.54976 1.4 2.69061 0.854486 2.289 0M4.2 11.2C3.423 11.2 2.8 11.823 2.8 12.6C2.8 12.9713 2.9475 13.3274 3.21005 13.5899C3.4726 13.8525 3.8287 14 4.2 14C4.5713 14 4.9274 13.8525 5.18995 13.5899C5.4525 13.3274 5.6 12.9713 5.6 12.6C5.6 11.823 4.97 11.2 4.2 11.2Z" fill="white"/>
                                    </svg>
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
                <article className='cardProducto'>
                    <div>
                        <img src="https://masonlineprod.vtexassets.com/arquivos/ids/289918/front-view-6557.jpg?v=638242762691730000" alt="Foto Producto" />
                    </div>
                    <div>
                        <h2>Pedigree Adulto 15kg</h2>
                        <h3>$2.000</h3>
                        <div>
                            <a href="/carrito">
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M11.2 11.2C10.423 11.2 9.8 11.823 9.8 12.6C9.8 12.9713 9.9475 13.3274 10.2101 13.5899C10.4726 13.8525 10.8287 14 11.2 14C11.5713 14 11.9274 13.8525 12.1899 13.5899C12.4525 13.3274 12.6 12.9713 12.6 12.6C12.6 11.823 11.97 11.2 11.2 11.2ZM0 0V0.542406C0 1.01604 0.383958 1.4 0.857594 1.4C1.18885 1.4 1.49049 1.59078 1.63245 1.89007L3.0794 4.94074C3.60699 6.05307 3.56551 7.35161 2.968 8.428C2.863 8.624 2.8 8.855 2.8 9.1C2.8 9.4713 2.9475 9.8274 3.21005 10.0899C3.4726 10.3525 3.8287 10.5 4.2 10.5H11.9C12.2866 10.5 12.6 10.1866 12.6 9.8C12.6 9.4134 12.2866 9.1 11.9 9.1H4.494C4.44759 9.1 4.40308 9.08156 4.37026 9.04874C4.33744 9.01592 4.319 8.97141 4.319 8.925C4.319 8.89 4.326 8.862 4.34 8.841C4.72868 8.13706 5.46925 7.7 6.27337 7.7H10.185C10.71 7.7 11.172 7.406 11.41 6.979L13.916 2.45C13.965 2.338 14 2.219 14 2.1C14 1.91435 13.9263 1.7363 13.795 1.60503C13.6637 1.47375 13.4857 1.4 13.3 1.4H4.49392C3.54976 1.4 2.69061 0.854486 2.289 0M4.2 11.2C3.423 11.2 2.8 11.823 2.8 12.6C2.8 12.9713 2.9475 13.3274 3.21005 13.5899C3.4726 13.8525 3.8287 14 4.2 14C4.5713 14 4.9274 13.8525 5.18995 13.5899C5.4525 13.3274 5.6 12.9713 5.6 12.6C5.6 11.823 4.97 11.2 4.2 11.2Z" fill="white"/>
                                    </svg>
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
                <article className='cardProducto'>
                    <div>
                        <img src="https://masonlineprod.vtexassets.com/arquivos/ids/289918/front-view-6557.jpg?v=638242762691730000" alt="Foto Producto" />
                    </div>
                    <div>
                        <h2>Pedigree Adulto 15kg</h2>
                        <h3>$2.000</h3>
                        <div>
                            <a href="/carrito">
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M11.2 11.2C10.423 11.2 9.8 11.823 9.8 12.6C9.8 12.9713 9.9475 13.3274 10.2101 13.5899C10.4726 13.8525 10.8287 14 11.2 14C11.5713 14 11.9274 13.8525 12.1899 13.5899C12.4525 13.3274 12.6 12.9713 12.6 12.6C12.6 11.823 11.97 11.2 11.2 11.2ZM0 0V0.542406C0 1.01604 0.383958 1.4 0.857594 1.4C1.18885 1.4 1.49049 1.59078 1.63245 1.89007L3.0794 4.94074C3.60699 6.05307 3.56551 7.35161 2.968 8.428C2.863 8.624 2.8 8.855 2.8 9.1C2.8 9.4713 2.9475 9.8274 3.21005 10.0899C3.4726 10.3525 3.8287 10.5 4.2 10.5H11.9C12.2866 10.5 12.6 10.1866 12.6 9.8C12.6 9.4134 12.2866 9.1 11.9 9.1H4.494C4.44759 9.1 4.40308 9.08156 4.37026 9.04874C4.33744 9.01592 4.319 8.97141 4.319 8.925C4.319 8.89 4.326 8.862 4.34 8.841C4.72868 8.13706 5.46925 7.7 6.27337 7.7H10.185C10.71 7.7 11.172 7.406 11.41 6.979L13.916 2.45C13.965 2.338 14 2.219 14 2.1C14 1.91435 13.9263 1.7363 13.795 1.60503C13.6637 1.47375 13.4857 1.4 13.3 1.4H4.49392C3.54976 1.4 2.69061 0.854486 2.289 0M4.2 11.2C3.423 11.2 2.8 11.823 2.8 12.6C2.8 12.9713 2.9475 13.3274 3.21005 13.5899C3.4726 13.8525 3.8287 14 4.2 14C4.5713 14 4.9274 13.8525 5.18995 13.5899C5.4525 13.3274 5.6 12.9713 5.6 12.6C5.6 11.823 4.97 11.2 4.2 11.2Z" fill="white"/>
                                    </svg>
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
                <article className='cardProducto'>
                    <div>
                        <img src="https://masonlineprod.vtexassets.com/arquivos/ids/289918/front-view-6557.jpg?v=638242762691730000" alt="Foto Producto" />
                    </div>
                    <div>
                        <h2>Pedigree Adulto 15kg</h2>
                        <h3>$2.000</h3>
                        <div>
                            <a href="/carrito">
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M11.2 11.2C10.423 11.2 9.8 11.823 9.8 12.6C9.8 12.9713 9.9475 13.3274 10.2101 13.5899C10.4726 13.8525 10.8287 14 11.2 14C11.5713 14 11.9274 13.8525 12.1899 13.5899C12.4525 13.3274 12.6 12.9713 12.6 12.6C12.6 11.823 11.97 11.2 11.2 11.2ZM0 0V0.542406C0 1.01604 0.383958 1.4 0.857594 1.4C1.18885 1.4 1.49049 1.59078 1.63245 1.89007L3.0794 4.94074C3.60699 6.05307 3.56551 7.35161 2.968 8.428C2.863 8.624 2.8 8.855 2.8 9.1C2.8 9.4713 2.9475 9.8274 3.21005 10.0899C3.4726 10.3525 3.8287 10.5 4.2 10.5H11.9C12.2866 10.5 12.6 10.1866 12.6 9.8C12.6 9.4134 12.2866 9.1 11.9 9.1H4.494C4.44759 9.1 4.40308 9.08156 4.37026 9.04874C4.33744 9.01592 4.319 8.97141 4.319 8.925C4.319 8.89 4.326 8.862 4.34 8.841C4.72868 8.13706 5.46925 7.7 6.27337 7.7H10.185C10.71 7.7 11.172 7.406 11.41 6.979L13.916 2.45C13.965 2.338 14 2.219 14 2.1C14 1.91435 13.9263 1.7363 13.795 1.60503C13.6637 1.47375 13.4857 1.4 13.3 1.4H4.49392C3.54976 1.4 2.69061 0.854486 2.289 0M4.2 11.2C3.423 11.2 2.8 11.823 2.8 12.6C2.8 12.9713 2.9475 13.3274 3.21005 13.5899C3.4726 13.8525 3.8287 14 4.2 14C4.5713 14 4.9274 13.8525 5.18995 13.5899C5.4525 13.3274 5.6 12.9713 5.6 12.6C5.6 11.823 4.97 11.2 4.2 11.2Z" fill="white"/>
                                    </svg>
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
                <article className='cardProducto'>
                    <div>
                        <img src="https://masonlineprod.vtexassets.com/arquivos/ids/289918/front-view-6557.jpg?v=638242762691730000" alt="Foto Producto" />
                    </div>
                    <div>
                        <h2>Pedigree Adulto 15kg</h2>
                        <h3>$2.000</h3>
                        <div>
                            <a href="/carrito">
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M11.2 11.2C10.423 11.2 9.8 11.823 9.8 12.6C9.8 12.9713 9.9475 13.3274 10.2101 13.5899C10.4726 13.8525 10.8287 14 11.2 14C11.5713 14 11.9274 13.8525 12.1899 13.5899C12.4525 13.3274 12.6 12.9713 12.6 12.6C12.6 11.823 11.97 11.2 11.2 11.2ZM0 0V0.542406C0 1.01604 0.383958 1.4 0.857594 1.4C1.18885 1.4 1.49049 1.59078 1.63245 1.89007L3.0794 4.94074C3.60699 6.05307 3.56551 7.35161 2.968 8.428C2.863 8.624 2.8 8.855 2.8 9.1C2.8 9.4713 2.9475 9.8274 3.21005 10.0899C3.4726 10.3525 3.8287 10.5 4.2 10.5H11.9C12.2866 10.5 12.6 10.1866 12.6 9.8C12.6 9.4134 12.2866 9.1 11.9 9.1H4.494C4.44759 9.1 4.40308 9.08156 4.37026 9.04874C4.33744 9.01592 4.319 8.97141 4.319 8.925C4.319 8.89 4.326 8.862 4.34 8.841C4.72868 8.13706 5.46925 7.7 6.27337 7.7H10.185C10.71 7.7 11.172 7.406 11.41 6.979L13.916 2.45C13.965 2.338 14 2.219 14 2.1C14 1.91435 13.9263 1.7363 13.795 1.60503C13.6637 1.47375 13.4857 1.4 13.3 1.4H4.49392C3.54976 1.4 2.69061 0.854486 2.289 0M4.2 11.2C3.423 11.2 2.8 11.823 2.8 12.6C2.8 12.9713 2.9475 13.3274 3.21005 13.5899C3.4726 13.8525 3.8287 14 4.2 14C4.5713 14 4.9274 13.8525 5.18995 13.5899C5.4525 13.3274 5.6 12.9713 5.6 12.6C5.6 11.823 4.97 11.2 4.2 11.2Z" fill="white"/>
                                    </svg>
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
                <article className='cardProducto'>
                    <div>
                        <img src="https://masonlineprod.vtexassets.com/arquivos/ids/289918/front-view-6557.jpg?v=638242762691730000" alt="Foto Producto" />
                    </div>
                    <div>
                        <h2>Pedigree Adulto 15kg</h2>
                        <h3>$2.000</h3>
                        <div>
                            <a href="/carrito">
                                <button type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M11.2 11.2C10.423 11.2 9.8 11.823 9.8 12.6C9.8 12.9713 9.9475 13.3274 10.2101 13.5899C10.4726 13.8525 10.8287 14 11.2 14C11.5713 14 11.9274 13.8525 12.1899 13.5899C12.4525 13.3274 12.6 12.9713 12.6 12.6C12.6 11.823 11.97 11.2 11.2 11.2ZM0 0V0.542406C0 1.01604 0.383958 1.4 0.857594 1.4C1.18885 1.4 1.49049 1.59078 1.63245 1.89007L3.0794 4.94074C3.60699 6.05307 3.56551 7.35161 2.968 8.428C2.863 8.624 2.8 8.855 2.8 9.1C2.8 9.4713 2.9475 9.8274 3.21005 10.0899C3.4726 10.3525 3.8287 10.5 4.2 10.5H11.9C12.2866 10.5 12.6 10.1866 12.6 9.8C12.6 9.4134 12.2866 9.1 11.9 9.1H4.494C4.44759 9.1 4.40308 9.08156 4.37026 9.04874C4.33744 9.01592 4.319 8.97141 4.319 8.925C4.319 8.89 4.326 8.862 4.34 8.841C4.72868 8.13706 5.46925 7.7 6.27337 7.7H10.185C10.71 7.7 11.172 7.406 11.41 6.979L13.916 2.45C13.965 2.338 14 2.219 14 2.1C14 1.91435 13.9263 1.7363 13.795 1.60503C13.6637 1.47375 13.4857 1.4 13.3 1.4H4.49392C3.54976 1.4 2.69061 0.854486 2.289 0M4.2 11.2C3.423 11.2 2.8 11.823 2.8 12.6C2.8 12.9713 2.9475 13.3274 3.21005 13.5899C3.4726 13.8525 3.8287 14 4.2 14C4.5713 14 4.9274 13.8525 5.18995 13.5899C5.4525 13.3274 5.6 12.9713 5.6 12.6C5.6 11.823 4.97 11.2 4.2 11.2Z" fill="white"/>
                                    </svg>
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                </article>
            </Carousel>
        </section>
    </>
    )
}

export default CarruselProductosDestacados
