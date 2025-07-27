 const form = document.getElementById("discriminacionForm");
const resultado = document.getElementById("resultado");

const consejos = {
  "Racial": "Habla con alguien de confianza, denuncia ante las autoridades locales y busca grupos antirracismo en tu comunidad.",
  "Género": "No estás sola(o). Busca apoyo en redes de mujeres, colectivos o instituciones que defienden la igualdad de género.",
  "Orientación sexual": "Habla con organizaciones LGBTQ+, conoce tus derechos y no tengas miedo de buscar apoyo psicológico si lo necesitas.",
  "Religión": "Practicar tu fe es un derecho. Busca ayuda legal o apoyo en comunidades religiosas que respeten la diversidad.",
  "Discapacidad": "Tienes derecho a la inclusión. Si sientes que estás siendo excluido, acude a una defensoría o fundación que apoye la discapacidad.",
  "Edad": "La experiencia o la juventud no deben ser motivo de burla. Busca orientación en centros de apoyo o redes generacionales."
};

const lineasDeAyuda = `
  <ul>
    <li>📞 Línea gratuita nacional: 01 8000 91 20 05</li>
    <li>📱 Fundación para la Equidad: +57 300 123 4567</li>
    <li>🌐 Defensoría del Pueblo: www.defensoria.gov.co</li>
    <li>💬 Línea LGBT (Colombia): 01 8000 112 120</li>
  </ul>
`;

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;

  if (!consejos[tipo]) return;

  resultado.innerHTML = `
    <h2>Hola, ${nombre}</h2>
    <p>Lamentamos que estés enfrentando discriminación <strong>${tipo.toLowerCase()}</strong>. Aquí tienes algunos consejos:</p>
    <p>✅ <strong>Consejo:</strong> ${consejos[tipo]}</p>
    <p>📞 <strong>Líneas de atención:</strong></p>
    ${lineasDeAyuda}
  `;
  resultado.style.display = "block";
});