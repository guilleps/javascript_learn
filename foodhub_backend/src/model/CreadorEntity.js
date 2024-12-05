// MAPEO DE LA CLASE CON LA BD
class Creador {
  constructor({
    id_creador,
    nombre,
    apellido_paterno,
    apellido_materno,
    correo_electronico,
    contrasenia,
    codigo_colegiatura,
    foto_perfil = null,
    role = "USER",
    account_non_expired = false,
    account_non_locked = false,
    credentials_non_expired = false,
    is_enabled = false,
    token_confirmacion,
  }) {
    this.id_creador = id_creador;
    this.nombre = nombre;
    this.apellido_paterno = apellido_paterno;
    this.apellido_materno = apellido_materno;
    this.correo_electronico = correo_electronico;
    this.contrasenia = contrasenia;
    this.codigo_colegiatura = codigo_colegiatura;
    this.foto_perfil = foto_perfil;
    this.role = role;
    this.account_non_expired = account_non_expired;
    this.account_non_locked = account_non_locked;
    this.credentials_non_expired = credentials_non_expired;
    this.is_enabled = is_enabled;
    this.token_confirmacion = token_confirmacion;
  }
}

export default Creador;
