import React, { useState } from 'react';

const FAQSection = () => {
  // State to track which FAQ items are open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQ data
  const faqData = [
    {
      question: "¿Cómo puedo registrarme en Code+Social?",
      answer: "Solo necesitas tu correo institucional de la UTP para crear una cuenta. Regístrate en la página principal y sigue los pasos."
    },
    {
      question: "¿Qué tipo de contenido puedo compartir en Code+Social?",
      answer: "Puedes compartir proyectos, dudas, tutoriales, artículos o cualquier material relacionado con la tecnología y la programación."
    },
    {
      question: "¿Cómo puedo contactar a otros usuarios en Code+Social?",
      answer: "Puedes enviar mensajes directos a otros estudiantes o programadores desde su perfil o participar en los foros de discusión."
    },
    {
      question: "¿Puedo unirme a proyectos colaborativos en Code+Social?",
      answer: "Sí, hay grupos de estudio y proyectos abiertos. Únete a los que te interesen y empieza a colaborar con otros miembros."
    },
    {
      question: "¿Es posible encontrar cursos o tutoriales dentro de Code+Social?",
      answer: "Sí, en la sección de recursos puedes encontrar cursos, tutoriales y recomendaciones para aprender nuevas tecnologías."
    }
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-card ${openFAQ === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-card-header">
              <h3 className="faq-card-title">{faq.question}</h3>
            </div>
            <div className="faq-card-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;