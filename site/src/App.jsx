import { useEffect, useState } from "react";
import "./App.css";

function prepareImages(imageModules) {
  return Object.entries(imageModules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([path, src]) => ({
      src,
      label: path
        .split("/")
        .at(-1)
        .replace(/\.[^.]+$/, "")
        .replace(/[-_]+/g, " "),
    }));
}

const trayImages = prepareImages(
  import.meta.glob("./assets/bandejas/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
);
const bagImages = prepareImages(
  import.meta.glob("./assets/bolsas/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
);

function ProductCarousel({
  images,
  carouselId,
  category,
  itemName,
  variant,
  caption,
  showStamp = false,
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (images.length < 2 || isHovered || isFocused) return;

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [images.length, isFocused, isHovered]);

  function showPreviousImage() {
    setActiveImageIndex(
      (current) => (current - 1 + images.length) % images.length,
    );
  }

  function showNextImage() {
    setActiveImageIndex((current) => (current + 1) % images.length);
  }

  return (
    <div
      className={`product-visual product-visual--${variant} product-carousel`}
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Imágenes conceptuales de ${category}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
    >
      {showStamp && (
        <span className="product-visual__stamp">
          <br />
        </span>
      )}
      {images.length > 0 && (
        <>
          <div className="product-carousel__image-wrap">
            <img
              key={images[activeImageIndex].src}
              id={carouselId}
              className="product-carousel__image"
              src={images[activeImageIndex].src}
              alt={`Concepto de ${itemName}: ${images[activeImageIndex].label}`}
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                className="product-carousel__arrow product-carousel__arrow--previous"
                type="button"
                aria-label={`Ver imagen anterior de ${itemName}`}
                aria-controls={carouselId}
                onClick={showPreviousImage}
              >
                <span aria-hidden="true">‹</span>
              </button>
              <span className="product-carousel__count">
                {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
              <button
                className="product-carousel__arrow product-carousel__arrow--next"
                type="button"
                aria-label={`Ver siguiente imagen de ${itemName}`}
                aria-controls={carouselId}
                onClick={showNextImage}
              >
                <span aria-hidden="true">›</span>
              </button>
            </>
          )}
        </>
      )}
      <span className="product-visual__caption">{caption}</span>
    </div>
  );
}

const navigation = [
  { href: "#propuesta", label: "La propuesta" },
  { href: "#productos", label: "Diseños" },
  { href: "#proceso", label: "Proceso" },
  { href: "#equipo", label: "Gerencia" },
];

const managers = [
  {
    name: "Julián Zapata Álvarez",
    role: "Gerente de Comercial / Mercadeo",
    email: "Julian.zapata914@pascualbravo.edu.co",
    initials: "JZ",
    photo: "/gerente-comercial-mercadeo.webp",
  },
  {
    name: "Sidny Yuliana Zapata Hoyos",
    role: "Gerente TIC",
    email: "Sidny.zapata515@pascualbravo.edu.co",
    initials: "SZ",
    photo: "/gerente-tic.jpg",
  },
  {
    name: "Sergio Andrés Ángel Córdoba",
    role: "Gerente de Producción / Creación",
    email: "Sergio.angel742@pascualbravo.edu.co",
    initials: "SA",
    photo: "/gerente-produccion-creacion.jpg",
  },
  {
    name: "Angelly Lorena Bohórquez Rave",
    role: "Gerente Administrativa",
    email: "angelly.bohorquez177@pascualbravo.edu.co",
    initials: "AB",
    photo: "/gerente-administrativa.jpg",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Recolectar",
    description:
      "La propuesta contempla recoger residuos de fruta en plazas, fruterías y restaurantes, en recipientes limpios y herméticos.",
  },
  {
    number: "02",
    title: "Seleccionar",
    description:
      "Imaginamos clasificar las cáscaras por tipo: las aptas continuarían en el proceso y las demás se destinarían a compostaje.",
  },
  {
    number: "03",
    title: "Transformar",
    description:
      "Exploramos lavar, secar y moler las cáscaras para diseñar una formulación con pectina y fibra vegetal, además de tintes naturales.",
  },
  {
    number: "04",
    title: "Diseñar",
    description:
      "La visión incluye bandejas moldeadas y bolsas reutilizables con fibras de banano y fique de productores colombianos.",
  },
  {
    number: "05",
    title: "Devolver",
    description: "El concepto busca que los sobrantes regresen al compostaje.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement__dot" />
        Una idea colombiana en desarrollo
      </div>

      <header className="site-header">
        <a
          className="wordmark"
          href="#inicio"
          onClick={closeMenu}
          aria-label="ECOA, inicio"
        >
          ECOA<span className="wordmark__period">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="site-nav__contact" href="#contacto" onClick={closeMenu}>
            Hablemos <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__content">
            <div className="hero__logo-wrap" data-reveal>
              <img
                className="hero__logo"
                src="/brand/ecoa-lockup.jpg"
                alt="Logotipo ECOA: hoja, frutas y símbolo de economía circular"
                width="420"
                height="420"
              />
            </div>
            <p className="eyebrow hero__eyebrow" data-reveal>
              Empaques inspirados en la naturaleza
            </p>
            <h1 id="hero-title" data-reveal>
              La cáscara es solo el comienzo.
            </h1>
            <p className="hero__intro" data-reveal>
              Imaginamos una nueva vida para los residuos de fruta a través del
              diseño de empaques de origen vegetal.
            </p>
            <a className="button button--dark" href="#productos" data-reveal>
              Explorar la propuesta <span aria-hidden="true">↓</span>
            </a>
            <p className="hero__disclaimer" data-reveal>
              Proyecto en desarrollo
            </p>
          </div>
          <span className="hero__side-note" aria-hidden="true">
            ECOA · COLOMBIA
          </span>
        </section>

        <section
          className="intro-band"
          id="propuesta"
          aria-labelledby="intro-title"
        >
          <div className="intro-band__index">
            01 <span> / LA IDEA</span>
          </div>
          <div className="intro-band__copy">
            <p className="eyebrow">Una propuesta circular</p>
            <h2 id="intro-title">
              Lo que para otros es desperdicio, para nosotros es el comienzo.
            </h2>
          </div>
          <p className="intro-band__text">
            ECOA es un proyecto colombiano que diseña una ruta para aprovechar
            residuos de fruta como materia prima de empaques. Una idea que
            conecta recolección, fibras vegetales y diseño responsable.
          </p>
        </section>

        <section
          className="products section-pad"
          id="productos"
          aria-labelledby="products-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">En etapa de diseño</p>
              <h2 id="products-title">Empaques con otro origen.</h2>
            </div>
            <p>
              Productos para explorar nuevas formas de aprovechar materiales
              vegetales.
            </p>
          </div>

          <div className="product-grid">
            <article className="product-item product-item--tray" data-reveal>
              <ProductCarousel
                images={trayImages}
                carouselId="tray-carousel-image"
                category="bandejas"
                itemName="bandeja"
                variant="tray"
                caption="Fibra vegetal"
              />
              <div className="product-item__meta">
                <span className="product-item__number">01</span>
                <div>
                  <h3>Bandejas compostables</h3>
                  <p>Una formulación con pectina y fibra vegetal.</p>
                </div>
              </div>
            </article>

            <article className="product-item product-item--bag" data-reveal>
              <ProductCarousel
                images={bagImages}
                carouselId="bag-carousel-image"
                category="bolsas"
                itemName="bolsa"
                variant="bag"
                caption="Banano y fique · En diseño"
                showStamp
              />
              <div className="product-item__meta">
                <span className="product-item__number">02</span>
                <div>
                  <h3>Bolsas reutilizables</h3>
                  <p>
                    Diseños en desarrollo que exploran fibras de banano y fique
                    de productores colombianos.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <p className="validation-note">
            Los diseños y las características descritas son proyecciones. No
            corresponden a productos disponibles ni certificados.
          </p>
        </section>

        <section className="collection" aria-labelledby="collection-title">
          <div className="collection__art" aria-hidden="true">
            <div className="collection-bin">
              <span />
              <span />
              <span />
            </div>
            <span className="collection__orbit collection__orbit--one" />
            <span className="collection__orbit collection__orbit--two" />
            <span className="collection__label">
              ECOA
              <br />
              RECOLECTA
            </span>
          </div>
          <div className="collection__copy">
            <p className="eyebrow">Un servicio por desarrollar</p>
            <h2 id="collection-title">Ecoa Recolecta</h2>
            <p className="collection__lead">
              La propuesta: recoger residuos de fruta donde nacen, para imaginar
              con ellos un nuevo destino.
            </p>
            <p>
              El concepto contempla visitas a plazas de mercado, fruterías y
              restaurantes con recipientes limpios y herméticos. La operación y
              los reportes de recolección aún no están activos.
            </p>
            <span className="status-label">
              <span /> Propuesta en desarrollo
            </span>
          </div>
        </section>

        <section
          className="process section-pad"
          id="proceso"
          aria-labelledby="process-title"
        >
          <div className="process__heading" data-reveal>
            <p className="eyebrow">Así imaginamos el ciclo</p>
            <h2 id="process-title">
              De la cáscara
              <br />
              al empaque.
            </h2>
            <p>
              Este es el proceso que estamos diseñando. Cada etapa está
              pendiente de implementación y validación.
            </p>
          </div>
          <ol className="process-list">
            {processSteps.map((step) => (
              <li className="process-step" key={step.number} data-reveal>
                <span className="process-step__number">{step.number}</span>
                <div className="process-step__copy">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="process-step__arrow" aria-hidden="true">
                  ↗
                </span>
              </li>
            ))}
          </ol>
          <p className="process__closing">
            Nada se pierde. Todo vuelve a empezar.
          </p>
        </section>

        <section
          className="brand-note"
          aria-label="Nota sobre el estado del proyecto"
        >
          <span className="brand-note__mark" aria-hidden="true">
            E
          </span>
          <p>
            Ecoa es un proyecto en desarrollo. Las características de nuestros
            productos corresponden a una formulación proyectada que será
            validada mediante pruebas de laboratorio y procesos de
            certificación.
          </p>
        </section>

        <section
          className="team section-pad"
          id="equipo"
          aria-labelledby="team-title"
        >
          <div className="section-heading section-heading--team" data-reveal>
            <div>
              <p className="eyebrow">Las personas detrás de la idea</p>
              <h2 id="team-title">Gerencia ECOA</h2>
            </div>
            <p>
              Un equipo que trabaja en diseñar una nueva relación entre
              materiales, industria y naturaleza.
            </p>
          </div>
          <div className="team-grid">
            {managers.map((manager, index) => (
              <article
                className={`manager manager--${index + 1}`}
                key={manager.email}
                data-reveal
              >
                <div
                  className={`manager__portrait${manager.photo ? " manager__portrait--with-photo" : ""}`}
                >
                  <span>{manager.initials}</span>
                  <small>Foto próximamente</small>
                  {manager.photo && (
                    <img
                      className="manager__photo"
                      src={manager.photo}
                      alt={`Foto de ${manager.name}`}
                      onError={(event) => {
                        event.currentTarget.parentElement?.classList.remove(
                          "manager__portrait--with-photo",
                        );
                        event.currentTarget.remove();
                      }}
                    />
                  )}
                </div>
                <div className="manager__details">
                  <p className="manager__role">{manager.role}</p>
                  <h3>{manager.name}</h3>
                  <a href={`mailto:${manager.email}`}>{manager.email}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="contact"
          id="contacto"
          aria-labelledby="contact-title"
        >
          <div className="contact__main">
            <p className="eyebrow">Conversemos sobre el futuro</p>
            <h2 id="contact-title">
              ¿Imaginamos
              <br />
              algo distinto?
            </h2>
            <p>
              Estamos construyendo la propuesta de Ecoa. Pronto podrás
              escribirnos por nuestros canales oficiales.
            </p>
          </div>
          <div className="contact__channels">
            <div className="contact-channel">
              <span className="contact-channel__index">01</span>
              <div>
                <h3>Correo</h3>
                <p>Próximamente</p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="contact-channel">
              <span className="contact-channel__index">02</span>
              <div>
                <h3>WhatsApp</h3>
                <p>Próximamente</p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="contact-channel">
              <span className="contact-channel__index">03</span>
              <div>
                <h3>Redes sociales</h3>
                <p>Próximamente</p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#inicio">
          ECOA<span className="wordmark__period">.</span>
        </a>
        <p>Diseño circular en desarrollo · Colombia</p>
        <a href="#inicio" className="back-to-top">
          Volver arriba ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
