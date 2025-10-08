import { useState } from "react";
import { motion } from "framer-motion";
import {
  PawPrint,
  Stethoscope,
  HeartPulse,
  MapPin,
  Phone,
  Clock,
  Mail,
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="bg-[#fffdf8] text-[#244674] font-[Poppins] overflow-x-hidden">
      {/* HEADER */}
      <header className="bg-white/95 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-sm border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 md:py-6">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="/assets1.png"
              alt="Logo Veterinaria Barcelona"
              className="w-10 h-10 rounded-full object-cover border border-[#a3d9b1]/60 shadow-sm"
            />
            <h1 className="text-2xl font-bold text-[#274472] tracking-tight">
              Veterinaria Barcelona
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[#274472]/90 font-medium text-lg">
            <a href="#servicios" className="hover:text-[#a3d9b1] transition">
              Servicios
            </a>
            <a href="#equipo" className="hover:text-[#a3d9b1] transition">
              Equipo
            </a>
            <a href="#galeria" className="hover:text-[#a3d9b1] transition">
              Galería
            </a>
            <a href="#contacto" className="hover:text-[#a3d9b1] transition">
              Contacto
            </a>
          </nav>

          <button
            onClick={() => scrollTo("contacto")}
            className="hidden md:block bg-[#274472] text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-[#1f3a5f] hover:shadow-md transition-all"
          >
            Agendar cita
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex flex-col justify-center items-center text-center w-full min-h-[75vh] bg-gradient-to-b from-[#eaf8f0] to-[#fff8ef] overflow-hidden pt-32"
      >
        <img
          src="https://images.unsplash.com/photo-1612831455544-38da427b4b86?auto=format&fit=crop&w=1400&q=80"
          alt="Mascotas felices"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#274472] leading-tight mb-5 drop-shadow-sm">
            Cuidamos el corazón de{" "}
            <span className="text-[#f5a623]">tus mascotas</span>
          </h1>
          <p className="text-base md:text-lg text-[#274472]/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Atención médica, amor y bienestar para cada peludo que confía en nosotros.
          </p>

          <div className="flex justify-center gap-8 flex-wrap mt-10">
            <button
              onClick={() => scrollTo("contacto")}
              className="group relative inline-flex items-center justify-center px-12 py-5 text-lg md:text-xl font-semibold text-[#274472] bg-[#a3d9b1] rounded-full shadow-lg hover:bg-[#94cea6] hover:-translate-y-[3px] transition-all"
            >
              Agendar cita
            </button>
            <button
              onClick={() => scrollTo("servicios")}
              className="px-12 py-5 text-lg md:text-xl font-semibold rounded-full border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-white shadow-md hover:shadow-lg hover:-translate-y-[3px] transition-all"
            >
              Ver servicios
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-[#fffdf8] rounded-t-[60px]" />
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-28 px-6 bg-white text-center rounded-t-[4rem]">
        <h2 className="text-4xl font-bold mb-16 text-[#244674]">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              icon: <Stethoscope size={50} className="text-[#9ed2b1]" />,
              title: "Consultas y diagnóstico",
              desc: "Atención profesional con equipos de última generación.",
            },
            {
              icon: <HeartPulse size={50} className="text-[#f5b742]" />,
              title: "Cirugías y emergencias",
              desc: "Cuidamos de tu mascota en cada momento crítico.",
            },
            {
              icon: <PawPrint size={50} className="text-[#244674]" />,
              title: "Baños, spa y estética",
              desc: "Consentimos a tu compañero con productos naturales.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#fffdf8] rounded-3xl shadow-md p-10 border border-[#f2f2f2] hover:shadow-lg hover:scale-[1.02] transition-transform"
            >
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-[#244674]/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="bg-[#f6fdf8] py-28 px-6 text-center rounded-t-[4rem]">
        <h2 className="text-4xl font-bold mb-10 text-[#244674]">
          Conoce a nuestro equipo
        </h2>
        <p className="max-w-3xl mx-auto text-[#244674]/80 mb-16 text-lg leading-relaxed">
          Un grupo de profesionales apasionados por los animales, con años de experiencia y una filosofía centrada en el bienestar integral.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <div className="w-32 h-32 rounded-full mx-auto bg-[#e4e4e4] mb-6" />
              <h3 className="text-xl font-semibold">Dr. Nombre Apellido</h3>
              <p className="text-sm text-[#244674]/70">
                Especialista en medicina general
              </p>
              <p className="mt-4 text-sm italic text-[#244674]/60 leading-relaxed">
                “Mi misión es que cada mascota salga más feliz de lo que llegó.”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="reseñas" className="py-28 px-6 bg-[#f6fdf8] rounded-t-[4rem]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#274472] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-[#274472]/80 max-w-2xl mx-auto text-lg leading-relaxed">
            La confianza y el cariño de nuestros clientes son el reflejo del trabajo que realizamos cada día 🐶🐱
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "María López",
              comment:
                "Excelente atención y trato. Mi perro salió feliz de su revisión. 100% recomendados.",
              img: "/assets-review1.png",
            },
            {
              name: "Carlos Méndez",
              comment:
                "El equipo es muy profesional. Me explicaron todo con paciencia y cuidaron muy bien a mi gato.",
              img: "/assets-review2.png",
            },
            {
              name: "Laura Sánchez",
              comment:
                "Las instalaciones son impecables y el personal es muy amable. Se nota el amor por los animales.",
              img: "/assets-review3.png",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <img
                src={r.img}
                alt={r.name}
                className="w-20 h-20 rounded-full object-cover mb-5 border-2 border-[#a3d9b1]"
              />
              <h3 className="text-xl font-semibold text-[#274472] mb-2">
                {r.name}
              </h3>
              <p className="text-[#274472]/70 italic leading-relaxed text-base">
                “{r.comment}”
              </p>
            </div>
          ))}
        </div>
      </section>


{/* GALERÍA DE INSTALACIONES */}
<section id="galeria" className="py-28 px-6 bg-white rounded-t-[4rem]">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold text-[#274472] mb-4">
      Nuestras Instalaciones
    </h2>
    <p className="text-[#274472]/80 max-w-2xl mx-auto text-lg leading-relaxed">
      Espacios diseñados para el confort y bienestar de tus mascotas, con
      tecnología moderna y un ambiente acogedor.
    </p>
  </div>

 {/* Carrusel */}
  <div className="relative w-full overflow-x-auto flex snap-x snap-mandatory gap-6 pb-6 px-4 scrollbar-hide">
    {[
      "/assets7.png",
      "/assets5.png",
      "/assets2.png",
      "/assets3.png",
      "/assets4.png",
      "/assets6.png",
      "/assets8.png",
      "/assets9.png",
      "/assets11.png",
      "/assets10.png",
      "/assets12.png",
    ].map((url, i) => (
      <div
        key={i}
        className="snap-center flex-shrink-0 w-[88%] md:w-[640px] h-[380px] rounded-[1.8rem] overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-500 ease-out bg-white"
      >
        <img
          src={url}
          alt={`Instalación ${i + 1}`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    ))}
  </div>

  {/* Indicadores */}
  <div className="flex justify-center gap-2 mt-6">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="w-10 h-3 rounded-full bg-[#a3d9b1] opacity-70 hover:opacity-100 transition"
      ></div>
    ))}
  </div>
</section>


{/* UBICACIÓN */}
<section
  id="ubicacion"
  className="py-28 px-6 bg-white rounded-t-[4rem] border-t border-[#eaeaea]"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* 🗺️ Mapa exacto de la clínica */}
    <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-lg border border-[#e5e5e5]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6548020861993!2d-99.0050289248625!3d19.428186741016197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fa2c0a178945%3A0x60f45e76ccfe8a88!2sDel%20Consuelo%207%2C%20Santa%20Martha%20Acatitla%2C%20Iztapalapa%2C%2009510%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1728342831045!5m2!1ses!2smx"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* 🐾 Descripción y botón */}
    <div className="bg-[#f6fdf8] rounded-3xl shadow-lg p-10 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-3xl font-bold text-[#274472] mb-6">
        Dónde estamos ubicados
      </h2>
      <p className="text-[#274472]/80 text-lg leading-relaxed mb-8">
        Nos encontramos en <strong>Del Consuelo 7, Santa Martha Acatitla, Iztapalapa, CDMX.</strong><br /><br />
        Nuestros clientes están satisfechos por la calidad de nuestros servicios, la atención profesional y el cariño con el que cuidamos a cada mascota.
      </p>

      <a
        href="https://www.google.com/maps/place/Del+Consuelo+7,+Santa+Martha+Acatitla,+Iztapalapa,+09510+Ciudad+de+M%C3%A9xico,+CDMX"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#274472] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1f3a5f] hover:shadow-md transition-all duration-300 ease-out"
      >
        Ver reseñas en Google →
      </a>
    </div>
  </div>
</section>





      {/* CONTACTO */}
<section
  id="contacto"
  className="py-28 px-6 bg-[#fff8ef] border-t border-[#eaeaea]"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Imagen lado izquierdo */}
    <div className="hidden md:flex justify-center">
      <div className="w-[90%] h-[420px] rounded-3xl overflow-hidden shadow-lg flex items-center justify-center bg-white">
  <img
    src="/assets1.png"
    alt="Logo Veterinaria Barcelona"
    className="object-contain w-full h-full p-8"
  />
</div>

    </div>

    {/* Formulario lado derecho */}
    <div className="bg-white rounded-3xl shadow-xl p-10">
      <h2 className="text-3xl font-bold text-[#274472] mb-6">
        Contáctanos
      </h2>
      <p className="text-[#274472]/70 mb-8 leading-relaxed">
        Escríbenos y te responderemos lo antes posible. También puedes visitarnos en nuestra clínica.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const nombre = e.target.nombre.value;
          const correo = e.target.correo.value;
          const mensaje = e.target.mensaje.value;
          const asunto = encodeURIComponent(`Consulta de ${nombre}`);
          const cuerpo = encodeURIComponent(
            `Hola, soy ${nombre} (${correo}).\n\n${mensaje}\n\nEnviado desde la página web de Veterinaria Barcelona 🐾`
          );
          window.location.href = `mailto:cvbarcelona.mx@gmail.com?subject=${asunto}&body=${cuerpo}`;
        }}
        className="flex flex-col gap-5"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          required
          className="border border-[#d9d9d9] p-4 rounded-xl focus:outline-[#a3d9b1] text-[#274472]"
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo electrónico"
          required
          className="border border-[#d9d9d9] p-4 rounded-xl focus:outline-[#a3d9b1] text-[#274472]"
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          rows="4"
          required
          className="border border-[#d9d9d9] p-4 rounded-xl focus:outline-[#a3d9b1] text-[#274472]"
        />
        <button
          type="submit"
          className="mt-4 bg-[#f5a623] text-[#274472] py-3 rounded-xl font-semibold hover:bg-[#274472] hover:text-white transition"
        >
          Enviar mensaje
        </button>
      </form>

      {/* Información de contacto */}
      <div className="mt-10 text-[#274472]/80 flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2">
          <MapPin size={18} /> Del Consuelo 7, Santa Martha Acatitla, Iztapalapa, 09510 Ciudad de México, CDMX
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} /> +5215625384349
        </div>
        <div className="flex items-center gap-2">
          <Mail size={18} /> cvbarcelona.mx@gmail.com
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} /> Lunes a Domingo — 9:00 a 19:00 hrs
        </div>
      </div>
    </div>
  </div>
</section>



    {/* Footer */}
<footer className="bg-[#244674] text-white text-center py-10 mt-10 rounded-t-[3rem]">
  <p>© 2025 Veterinaria Barcelona — Cuidamos lo que más amas 🐾</p>
  <p className="mt-3 text-sm text-[#9ed2b1]">
    Diseño Natural & Caring • Hecho en Evolvian •{" "}
    <a
      href="/aviso-de-privacidad"
      className="underline text-[#a3d9b1] hover:text-white transition"
    >
      Aviso de Privacidad
    </a>
  </p>
</footer>


{/* Botón flotante de WhatsApp */}
<a
  href="https://wa.me/5215625384349?text=Hola%20👋%20Quisiera%20agendar%20una%20cita%20para%20mi%20mascota."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-24 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="white"
    className="w-8 h-8"
  >
    <path d="M16 .667A15.331 15.331 0 0 0 .667 16c0 2.702.698 5.35 2.028 7.682L.667 31.333l7.806-2.007A15.26 15.26 0 0 0 16 31.333C24.85 31.333 31.333 24.85 31.333 16S24.85.667 16 .667zm0 28.271a12.998 12.998 0 0 1-6.623-1.789l-.475-.268-4.639 1.192 1.237-4.518-.307-.483A12.964 12.964 0 0 1 3 16.001c0-7.18 5.82-13 13-13 3.479 0 6.747 1.355 9.206 3.813A12.935 12.935 0 0 1 29 16c0 7.18-5.82 12.938-13 12.938zm7.433-9.737c-.403-.2-2.38-1.176-2.747-1.308-.368-.136-.635-.2-.902.2-.27.403-1.036 1.308-1.27 1.58-.232.27-.47.304-.873.102-.403-.2-1.7-.625-3.239-1.995-1.197-1.068-2.006-2.384-2.24-2.787-.232-.403-.025-.62.176-.82.179-.178.403-.47.605-.704.2-.232.268-.403.403-.67.136-.27.068-.503-.034-.704-.102-.2-.902-2.176-1.238-2.98-.325-.78-.656-.674-.902-.684h-.77c-.268 0-.704.1-1.07.503-.368.403-1.403 1.37-1.403 3.34s1.437 3.873 1.637 4.142c.2.27 2.825 4.313 6.846 6.053.957.413 1.7.658 2.28.84.957.305 1.826.262 2.513.159.767-.114 2.38-.97 2.717-1.905.336-.937.336-1.738.232-1.905-.1-.17-.37-.27-.77-.47z" />
  </svg>
</a>



{/* Banner de cookies avanzado */}
{!document.cookie.includes("cookieConsent=") && (
  <div className="fixed bottom-0 left-0 w-full bg-[#274472] text-white text-sm md:text-base py-4 px-6 flex flex-col md:flex-row items-center justify-center md:justify-center gap-4 shadow-lg z-50">
    <p className="text-center md:text-left leading-snug max-w-[600px]">
      🍪 Usamos cookies para mejorar tu experiencia, analizar el tráfico y
      ofrecerte contenido personalizado.{" "}
      <a
        href="/aviso-de-privacidad"
        className="underline text-[#a3d9b1] hover:text-white"
      >
        Ver Aviso de Privacidad
      </a>
    </p>
    <div className="flex gap-2 mt-2 md:mt-0">
      <button
        onClick={() => {
          const expiry = new Date();
          expiry.setMonth(expiry.getMonth() + 6);
          document.cookie = `cookieConsent=essential; expires=${expiry.toUTCString()}; path=/; SameSite=Lax`;
          window.location.reload();
        }}
        className="bg-white text-[#274472] font-semibold px-4 py-2 rounded-full hover:bg-[#ededed] transition"
      >
        Solo esenciales
      </button>
      <button
        onClick={() => {
          const expiry = new Date();
          expiry.setMonth(expiry.getMonth() + 6);
          document.cookie = `cookieConsent=all; expires=${expiry.toUTCString()}; path=/; SameSite=Lax`;
          window.location.reload();
        }}
        className="bg-[#a3d9b1] text-[#274472] font-semibold px-4 py-2 rounded-full hover:bg-[#94cea6] transition"
      >
        Aceptar todas
      </button>
    </div>
  </div>
)}



</div>
);
}
