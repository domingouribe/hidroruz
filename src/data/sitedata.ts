import { v4 as uuidv4 } from 'uuid';

const data = {
    menuItems: [
        { id: uuidv4(), label: 'Inicio', link: '/' },
        { id: uuidv4(), label: 'Quiénes somos', link: '/quienes-somos' },
        { id: uuidv4(), label: 'Contacto', link: '/contacto' },
    ],

    hero: {
        imageBackground: 'assets/images/plomero.jpg',
        logo: 'assets/images/logo.svg',
        text: 'Insumos para la gasfitería en la región de Coquimbo - Venta de productos y asesoría profesional para la realización de tus proyectos',
        cta: 'Contáctanos',
        ctaUrl: '/contacto',
    },

    about: {
        title: 'Quiénes somos',
        text: 'En Hidroruz somos profesionales del área de la construcción con más de 10 años de experiencia. Conocemos los materiales porque trabajamos a diario con ellos en proyectos de construcción y ponemos a tu disposición nuestra vasta experiencia para ofrecerte las mejores marcas, productos y asesoría profesional para tus proyectos.',
    },

    brands: {
        title: 'Nuestras marcas',
        text: 'Trabajamos con las mejores marcas y las hemos seleccionado porque no solo las vendemos, sino que las usamos dia a día en nuestros proyectos de construcción.',
    },

    expertos: {
        title: 'Somos expertos en la región',
        text: `Descubre la excelencia en insumos para la gasfitería en Coquimbo con Hidroruz. Con más de una década de experiencia en el apasionante mundo de la construcción, conocemos los materiales de principio a fin. Nuestra trayectoria está respaldada por proyectos exitosos que nos han convertido en auténticos expertos del sector.

        En Hidroruz, hemos reunido las mejores marcas y productos del mercado, para que encuentres todo lo que necesitas en un solo lugar. No importa si eres un profesional en busca de calidad y rendimiento excepcionales, o un aficionado entusiasta que desea resultados impecables en sus proyectos personales, ¡aquí encontrarás lo que necesitas!

        No solo ofrecemos productos de primera calidad, sino que también estamos listos para brindarte nuestra asesoría profesional. Nos apasiona compartir nuestros conocimientos contigo y ayudarte a tomar decisiones informadas que te garanticen el éxito en tus proyectos de gasfitería.

        ¡Confía en Hidroruz para obtener los mejores insumos, un servicio excepcional y resultados impecables en cada proyecto! Déjanos ser tu aliado confiable en el emocionante mundo de la construcción.`,
    },


}

export default data;