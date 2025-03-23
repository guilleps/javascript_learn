function hacerTarea(nombreCurso, callback) {
    console.log(`Haciendo la tarea de ${nombreCurso}`);
    callback();
}

function terminar(alu) {
    console.log('Tarea terminada...')
    alu();
}

hacerTarea('Matematica', terminar);