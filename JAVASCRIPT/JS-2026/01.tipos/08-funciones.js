//Declaración → Para funciones importantes, principales y reutilizables
// Función principal: registrar un turno en el gimnasio

// Expresión → Para callbacks, funciones anónimas y funciones dinámicas

// Arrow functions → La versión moderna y compacta de expresión


// ==========================================
// 1. CARGAR DATOS DESDE JSON
// ==========================================

let sistema = null; // Variable global para guardar los datos

async function cargarDatos() {
    try {
        const respuesta = await fetch('datos.json');
        sistema = await respuesta.json();
        console.log('Datos cargados desde JSON');
        return sistema;
    } catch (error) {
        console.error('Error al cargar datos:', error);
        return null;
    }
}

// ==========================================
// 2. FUNCIÓN PRINCIPAL: REGISTRAR TURNO
// ==========================================

function registrarTurno(nombre, actividad, horario) {
    // Crear el objeto del turno
    const turno = {
        nombre: nombre,
        actividad: actividad,
        horario: horario,
        estado: "confirmado"
    };
    
    // Mostrar confirmación
    console.log(`Turno confirmado para ${nombre}`);
    console.log(`   Actividad: ${actividad} a las ${horario}`);
    
    // Devolver el turno para usarlo después
    return turno;
}

// ==========================================
// 3. FUNCIONES SECUNDARIAS
// ==========================================

// Función para buscar un socio por nombre
function buscarSocio(nombre) {
    if (!sistema) {
        console.log('Sistema no inicializado');
        return null;
    }
    
    const socio = sistema.socios.find(s => s.nombre === nombre);
    if (!socio) {
        console.log(`Socio "${nombre}" no encontrado`);
        return null;
    }
    return socio;
}

// Función para buscar una actividad por nombre
function buscarActividad(nombre) {
    if (!sistema) {
        console.log('Sistema no inicializado');
        return null;
    }
    
    const actividad = sistema.actividades.find(a => a.nombre === nombre);
    if (!actividad) {
        console.log(`Actividad "${nombre}" no encontrada`);
        return null;
    }
    return actividad;
}

// ==========================================
// 4. INICIAR SISTEMA
// ==========================================

async function iniciarSistema() {
    // Cargar datos desde JSON
    await cargarDatos();
    
    if (!sistema) {
        console.log(' No se pudieron cargar los datos');
        return;
    }
    
    console.log('\n---------- SOCIOS REGISTRADOS ----------');
    sistema.socios.forEach(s => {
        console.log(` ${s.nombre} (${s.edad} años) - ${s.email}`);
    });
    
    console.log('\---------- ACTIVIDADES DISPONIBLES----------');
    sistema.actividades.forEach(a => {
        console.log(` ${a.nombre} a las ${a.horario}`);
    });
}

// ==========================================
// 5. EJECUTAR EL SISTEMA
// ==========================================

// Iniciar el sistema y luego registrar turnos
async function ejecutarSistema() {
    await iniciarSistema();
    
    if (!sistema) {
        console.log('Sistema no disponible');
        return;
    }
    
    // ==========================================
    // 6. LLAMAR FUNCIÓN CON VARIABLES DESDE JSON
    // ==========================================
    
    console.log('\n---------- REGISTRO EN PROCESO----------');
    
    // Extraer datos del JSON a variables
    const socio1 = sistema.socios[0]; // Gaby
    const socio2 = sistema.socios[1]; // Carlos
    const socio3 = sistema.socios[2]; // Ana
    
    const actividad1 = sistema.actividades[0]; // Musculación
    const actividad2 = sistema.actividades[1]; // Spinning
    const actividad3 = sistema.actividades[2]; // Yoga
    
    // Registrar turnos usando variables del JSON
    const turno1 = registrarTurno(
        socio1.nombre,          // "Gaby"
        actividad2.nombre,      // "Spinning"
        actividad2.horario      // "19:00"
    );
    console.log('Turno registrado:', turno1);
    
    const turno2 = registrarTurno(
        socio2.nombre,          // "Carlos"
        actividad1.nombre,      // "Musculación"
        actividad1.horario      // "18:00"
    );
    console.log('Turno registrado:', turno2);
    
    const turno3 = registrarTurno(
        socio3.nombre,          // "Ana"
        actividad3.nombre,      // "Yoga"
        actividad3.horario      // "20:00"
    );
    console.log('Turno registrado:', turno3);
    
    // Guardar los turnos en el sistema
    sistema.turnos = [turno1, turno2, turno3];
    
    console.log('\n---------- TURNOS REGISTRADOS ----------');
    sistema.turnos.forEach(t => {
        console.log(`   ${t.nombre} | ${t.actividad} | ${t.horario} | ${t.estado}`);
    });
}

// ==========================================
// 7. EJECUTAR
// ==========================================

ejecutarSistema();

// ==========================================
// 8. FUNCIONES ADICIONALES (opcionales)
// ==========================================

// Función para buscar turnos de un socio específico
function buscarTurnosPorSocio(nombre) {
    if (!sistema) {
        console.log('❌ Sistema no inicializado');
        return [];
    }
    
    const turnosFiltrados = sistema.turnos.filter(t => t.nombre === nombre);
    
    if (turnosFiltrados.length === 0) {
        console.log(`📋 ${nombre} no tiene turnos registrados`);
    } else {
        console.log(`📋 Turnos de ${nombre}:`);
        turnosFiltrados.forEach(t => {
            console.log(`   - ${t.actividad} a las ${t.horario} (${t.estado})`);
        });
    }
    
    return turnosFiltrados;
}

// Función para guardar cambios en localStorage
function guardarSistema() {
    if (sistema) {
        localStorage.setItem('sistemaGimnasio', JSON.stringify(sistema));
        console.log('💾 Datos guardados en localStorage');
    }
}

//=============================================
//         EJEMPLO FUNCION POR EXPRESION
//=============================================


const saludar = function(nombre) {
    return `Hola ${nombre}, bienvenido al gimnasio`;
};

// Uso
console.log(saludar("Gaby")); // "Hola Gaby, bienvenido al gimnasio"