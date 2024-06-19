import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Portafolio</h1>
      </header>
      <section>
        <h2>Sobre mí</h2>
        <p>Profesional en ingeniería de sistemas, con experiencia en diseño y ejecución de pruebas funcionales para aplicativos web y móviles. Adicionalmente experiencia en mesa de ayuda, documentación, generación de informes y capacitación de software. Dominio de herramientas como Jira, confluence y Zephyr Squad. Me caracterizo por la orientación al detalle y aprendizaje continuo. Ahora busco seguir desarrollándome como QA en automatización de Pruebas.</p>
      </section>
      <section>
        <h2>Experiencia</h2>

        <h3>Junior QA officer</h3>
        <p>Empresa: <a href='https://mutaworld.com/' target='_blank' rel='noopener noreferrer'>muta world- reaceico s.a.s.</a></p>
        <p>Fecha: 2022/05/03 - actualmente </p>
        <p>Funciones: Diseñar y ejecutar pruebas funcionales para aplicaciones web y moviles para asegurar que el software cumpla con los estándares de calidad establecidos.
        Identificar y documentar problemas y defectos en el software y colaborar con el equipo de desarrollo para corregirlos.
        Supervisar casos y problemas reportados por usuarios internos y externos de la compañía y hacer seguimiento hasta su solución.
        Brindar soporte a los usuarios internos y externos, resolviendo problemas en tiempo real.
        Generación de Informes y capacitación de software con el fin de proporcionar información objetiva y basada en datos para apoyar la toma de decisiones estratégicas y operativas, también facilitar la adopción exitosa del software y minimizar la curva de aprendizaje.</p>

        <h3>Asistente de sistemas</h3>
        <p>Empresa: <a href='https://www.equirent.com.co/home/' target='_blank' rel='noopener noreferrer'>EQUIRENT Vehículos y Maquinaria S.A.S.</a></p>
        <p>Fecha: 2021/12/06 - 2022/05/02 </p>
        <p>Funciones: Realizar pruebas de caja negra, para garantizar la funcionalidad del software, responder casos PQRS que se presenten del sistema y elaborar sus respectivos manuales</p>
        
        <h3>Asistente administrativa y soporte sistemas</h3>
        <p>Empresa: MSMC & ABOGADOS S.A.S.</p>
        <p>Fecha: 2015/05/04 - 2017/03/15 y 2017/12/01 - 2021/12/03 </p>
        <p>Funciones: Brindar soporte al área de sistemas en la administración de correos electrónicos, aplicativos y mantenimiento de impresos y equipos.
        Administrar las base de datos de la compañía, mediante la alimentación oportuna de los diferentes aplicativos de la compañía.
        Llevar un control optimo de la agenda, calendarizar actividades, reuniones, citas. </p>

        <h3>Auxiliar de oficina</h3>
        <p>Empresa: Cooperativa de Caficultores del Tolima</p>
        <p>Fecha: 2014/01/20 - 2015/04/19 </p>
        <p>Funciones: Brindar atención al cliente y gestión del correo y mensajería. Realizar memoriales y manejo del archivo del personal. Organizar, controlar, cotizar y entregar suministros de papelería, realizando inventarios y despachos, tanto en físico como en Syscafe y AS400 </p>

      </section>
      <section>
        <h2>Contacto</h2>
        <a href='https://www.linkedin.com/in/laura-vanegas-qa/' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </section>
    </div>
  );
}

export default App;

