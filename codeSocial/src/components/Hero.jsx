import React from "react";
import poster from "../assets/images/hero1.png";
import img from "../assets/images/hero3.png"; // Importamos el logo
import "./../styles/Hero.css";
import FAQSection from './FAQSection';

const Hero = () => {
  const categories = [
    {
      id: 1,
      name: "Frappés",
      icon: "🥤",
      products: [
      
        {
          name: "Frappé caramel",
          price: "S/ 13.50",
          description: "Frappé de café con sabor a caramelo",
        },
        {
          name: "Frappé de café",
          price: "S/ 12.50",
          description: "Frappé de café, coronado con crema",
        },
        {
          name: "Frappé de cookies",
          price: "S/ 13.50",
          description: "Frappé con galleta oreo",
        },
        {
          name: "Frappé de algarrobina",
          price: "S/ 13.50",
          description: "Frappé de café con sabor a algarrobina",
        },
        {
          name: "Frappé de vainilla",
          price: "S/ 13.50",
          description: "Frappé con sabor a vainilla",
        },
      ],
    },
    {
      id: 2,
      name: "Cafés Calientes",
      icon: "☕",
      products: [
        {
          name: "Espresso",
          price: "S/ 7.50",
          description: "Café espresso tradicional",
        },
        {
          name: "Cappuccino",
          price: "S/ 9.50",
          description: "Espresso con espuma de leche",
        },
        {
          name: "Latte",
          price: "S/ 8.50",
          description: "Café con leche cremosa",
        },
      ],
    },
    {
      id: 3,
      name: "Bebidas Frías",
      icon: "❄",
      products: [
        {
          name: "Cold Brew",
          price: "S/ 11.50",
          description: "Café frío de elaboración lenta",
        },
        {
          name: "Iced Latte",
          price: "S/ 10.50",
          description: "Café con leche y hielo",
        },
        {
          name: "Limonada",
          price: "S/ 8.50",
          description: "Limonada fresca natural",
        },
      ],
    },
    {
      id: 4,
      name: "Postres",
      icon: "🍰",
      products: [
        {
          name: "Cheesecake",
          price: "S/ 15.50",
          description: "Tarta de queso horneada",
        },
        {
          name: "Brownie",
          price: "S/ 12.50",
          description: "Brownie de chocolate",
        },
        {
          name: "Tres Leches",
          price: "S/ 13.50",
          description: "Bizcocho bañado en tres leches",
        },
      ],
    },
    {
      id: 5,
      name: "Tés",
      icon: "🍵",
      products: [
        {
          name: "Té Verde",
          price: "S/ 7.50",
          description: "Té verde tradicional",
        },
        { name: "Té Chai", price: "S/ 9.50", description: "Té con especias" },
        {
          name: "Manzanilla",
          price: "S/ 6.50",
          description: "Infusión de manzanilla",
        },
      ],
    },
  ];

  return (
    <>
      <div className="hero-wrapper">
        <section className="custom-hero">
          <div className="hero-text">
            <h1 className="hero-title">Bienvenido a Code+Social</h1>
            <p className="hero-description">
            Code+Social es la red social de la UTP que conecta estudiantes y programadores, promoviendo el aprendizaje y la colaboración en tecnología.
            </p>
            <a href="#tienda" className="hero-button">
              ¡Vamos alla!
            </a>
          </div>
          <div className="hero-image-container">
            <img src={img} alt="Bebidas Wicked" className="hero-image" />
          </div>
        </section>
      </div>

      <FAQSection />

      <footer className="custom-footer">
        <div className="footer-sections">
          <div className="footer-column">
            <h5>Sobre Nosotros</h5>
            <ul>
              <li>
                <a href="#">Nuestra compañía</a>
              </li>
              <li>
                <a href="#">Servicio al cliente</a>
              </li>
              <li>
                <a href="#">Línea y ética</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>Nuestra Cultura</h5>
            <ul>
              <li>
                <a href="#">Cultura y Valores</a>
              </li>
              <li>
                <a href="#">Trabaja con nosotros</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>Impacto Social</h5>
            <ul>
              <li>
                <a href="#">Planeta</a>
              </li>
              <li>
                <a href="#">Personas</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>Políticas</h5>
            <ul>
              <li>
                <a href="#">Política de Privacidad</a>
              </li>
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>Atención al Cliente</h5>
            <ul>
              <li>
                Teléfono Lima: <br /> <a href="tel:015050050">(01)505-0050</a>
              </li>
              <li>
                Teléfono Provincia: <br />{" "}
                <a href="tel:044779009">(044)779-009</a>
              </li>
              <li>
                <a href="#">Comprobantes electrónicos</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#">
              <i className="facebook-icon"></i>
            </a>
            <a href="#">
              <i className="instagram-icon"></i>
            </a>
          </div>
          <small>© 2024 Code Coffee Company. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default Hero;
