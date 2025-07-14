import ProductList from "./productList";

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a Tu Punto</h1>
      <h2>Más cerca, más fácil</h2>
      <img 
        src="https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/468920828_122171820590098612_9157189475570380038_n.png?stp=dst-png_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Hh5TbqVtLYoQ7kNvwFP-KBV&_nc_oc=AdnrydIwQ-ay8hSiVjVA5KCBKpaHDnd5GLkqnEWgYp1UwhWRUbp0nUnDvYRe1d8dgjw&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=Z4yg4ZS61JLPLMMr53k4ag&oh=00_AfQKpSJECYeHn50BFC4izI1VzlkeA_cAPgoLSpHTCPBO9A&oe=687B037B" 
        alt="TuPuntoIMG"></img>
      
      <p>En Tu Punto, transformamos la forma en que vendedores y compradores interactúan en Bolivia. Somos una red de puntos físicos de entrega y recolección ubicados estratégicamente en zonas clave como El Prado y la Zona Sur de La Paz, creados para facilitar y optimizar el comercio entre emprendedores, marcas y sus clientes.</p>
      <p>Ofrecemos una solución logística ágil, segura y confiable, pensada especialmente para tiendas online, negocios independientes y consumidores que buscan comodidad, ahorro de tiempo y eficiencia en cada entrega. Desde la recepción y resguardo de productos hasta la entrega al cliente final, nuestro modelo reduce costos operativos, elimina la necesidad de contar con infraestructura propia y mejora la experiencia de compra.</p>
      <p>Tu Punto no es solo un espacio de entrega. Es una plataforma de apoyo a emprendedores que incluye servicios complementarios como asistencia logística, seguimiento de productos, promociones cruzadas y fidelización de clientes. Estamos trabajando para expandir nuestras funcionalidades digitales y abriremos nuevos espacios para seguir acompañando el crecimiento del e-commerce y del comercio físico en Bolivia.</p>
      <a href="https://www.linkedin.com/company/tu-punto/">Contactanos!</a>
      <ProductList/>
    </div>
  );
};

export default Home;
