// FORMULARIO DE SOLICITUD DE EQUIPO / COTIZACIÓN
function crearFormularioSolicitud() {
    
    // Crear la sección principal
    const seccionSolicitud = document.createElement('section');
    seccionSolicitud.id = 'solicitud';
    seccionSolicitud.className = 'form-solicitud';
    
    
    seccionSolicitud.innerHTML = `
        <h2>📝 SOLICITUD DE EQUIPO / COTIZACIÓN</h2>
        <p>Complete el siguiente formulario y uno de nuestros asesores se contactará con usted en menos de 24 horas.</p>
    `;
    

    const form = document.createElement('form');
    form.id = 'formSolicitud';
    
   
    form.innerHTML = `
        <!-- Datos personales -->
        <div class="form-row">
            <div class="form-group">
                <label for="nombre">🔹 Nombre *</label>
                <input type="text" id="nombre" name="nombre" required placeholder="Ej: Juan Pérez">
            </div>
            <div class="form-group">
                <label for="apellido">🔹 Apellido *</label>
                <input type="text" id="apellido" name="apellido" required placeholder="Ej: Rodríguez">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label for="email">📧 Correo electrónico *</label>
                <input type="email" id="email" name="email" required placeholder="cliente@ejemplo.com">
            </div>
            <div class="form-group">
                <label for="telefono">📞 Teléfono / WhatsApp *</label>
                <input type="tel" id="telefono" name="telefono" required placeholder="+1 809 000 0000">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label for="empresa">🏢 Empresa / Negocio (opcional)</label>
                <input type="text" id="empresa" name="empresa" placeholder="Nombre de su empresa">
            </div>
            <div class="form-group">
                <label for="cargo">👔 Cargo / Puesto</label>
                <input type="text" id="cargo" name="cargo" placeholder="Ej: Administrador, Dueño, IT Manager">
            </div>
        </div>

        <!-- Tipo de solicitud -->
        <div class="form-group">
            <label for="tipoSolicitud">📌 Tipo de solicitud *</label>
            <select id="tipoSolicitud" name="tipoSolicitud" required>
                <option value="">Seleccione una opción</option>
                <option value="cotizacion">💰 Solicitar cotización</option>
                <option value="compra">🛒 Compra directa de equipo</option>
                <option value="instalacion">🔧 Servicio de instalación</option>
                <option value="consultoria">📊 Consultoría en seguridad</option>
                <option value="mantenimiento">🛠️ Mantenimiento de equipos</option>
            </select>
        </div>

        <!-- Equipo solicitado -->
        <div class="form-group">
            <label for="equipo">🖥️ Equipo / Producto que desea *</label>
            <select id="equipo" name="equipo" required>
                <option value="">Seleccione un equipo</option>
                <option value="camara_ptz">📹 Cámara PTZ 4K</option>
                <option value="nvr">🖥️ NVR 16 canales</option>
                <option value="firewall">💻 Firewall FortiGate 60F</option>
                <option value="access_point">📡 Access point UniFi U6 Pro</option>
                <option value="detector_humo">🔊 Detector de humo IoT</option>
                <option value="movil_rugged">📱 Móvil rugged CAT S62 Pro</option>
                <option value="nas">💾 Synology DS923+</option>
                <option value="cerradura">🔒 Cerradura biométrica Yale</option>
                <option value="kit_camaras">📦 Kit de cámaras completo</option>
                <option value="otro">❓ Otro (especificar)</option>
            </select>
        </div>

        <!-- Especificar otro equipo -->
        <div class="form-group" id="divOtroEquipo" style="display: none;">
            <label for="otroEquipo">✏️ Especifique el equipo que necesita</label>
            <input type="text" id="otroEquipo" name="otroEquipo" placeholder="Describa el equipo o producto que busca">
        </div>

        <!-- Cantidad -->
        <div class="form-group">
            <label for="cantidad">🔢 Cantidad *</label>
            <input type="number" id="cantidad" name="cantidad" min="1" value="1" required>
        </div>

        <!-- Presupuesto -->
        <div class="form-group">
            <label for="presupuesto">💰 Presupuesto estimado (USD)</label>
            <select id="presupuesto" name="presupuesto">
                <option value="">Seleccione un rango</option>
                <option value="menos_500">Menos de $500</option>
                <option value="500_1000">$500 - $1,000</option>
                <option value="1000_5000">$1,000 - $5,000</option>
                <option value="5000_10000">$5,000 - $10,000</option>
                <option value="mas_10000">Más de $10,000</option>
            </select>
        </div>

        <!-- Mensaje adicional -->
        <div class="form-group">
            <label for="mensaje">💬 Mensaje o requisitos adicionales</label>
            <textarea id="mensaje" name="mensaje" rows="4" placeholder="Ej: Necesito instalación incluida, requiero factura, urgencia del proyecto, etc."></textarea>
        </div>

        <!-- Preferencia de contacto -->
        <div class="form-group">
            <label>📱 Preferencia de contacto *</label>
            <div style="display: flex; gap: 1rem;">
                <label style="font-weight: normal;">
                    <input type="radio" name="contactoPref" value="whatsapp" checked> WhatsApp
                </label>
                <label style="font-weight: normal;">
                    <input type="radio" name="contactoPref" value="llamada"> Llamada telefónica
                </label>
                <label style="font-weight: normal;">
                    <input type="radio" name="contactoPref" value="email"> Correo electrónico
                </label>
            </div>
        </div>

        <!-- Términos -->
        <div class="form-group">
            <label style="font-weight: normal;">
                <input type="checkbox" id="terminos" required> Acepto que mis datos sean usados para contactarme sobre esta solicitud *
            </label>
        </div>

        <button type="submit" class="btn-enviar">📨 ENVIAR SOLICITUD</button>
        <div id="mensajeFormulario" class="mensaje-form" style="display: none;"></div>
    `;
    
    seccionSolicitud.appendChild(form);
    
    
    const main = document.querySelector('main');
    const presentacion = document.querySelector('#inicio section:first-child');
    if (main && presentacion) {
        presentacion.insertAdjacentElement('afterend', seccionSolicitud);
    } else if (main) {
        main.insertBefore(seccionSolicitud, main.firstChild);
    } else {
        document.body.appendChild(seccionSolicitud);
    }
    
    // Inicializar eventos 
    inicializarEventosFormulario();
}

// Función para inicializar los eventos del formulario
function inicializarEventosFormulario() {
    const formSolicitud = document.getElementById('formSolicitud');
    const equipoSelect = document.getElementById('equipo');
    const divOtroEquipo = document.getElementById('divOtroEquipo');
    const otroEquipoInput = document.getElementById('otroEquipo');
    const mensajeDiv = document.getElementById('mensajeFormulario');
    
    if (!formSolicitud) return;
    

    if (equipoSelect) {
        equipoSelect.addEventListener('change', function() {
            if (this.value === 'otro') {
                divOtroEquipo.style.display = 'block';
                if (otroEquipoInput) otroEquipoInput.required = true;
            } else {
                divOtroEquipo.style.display = 'none';
                if (otroEquipoInput) otroEquipoInput.required = false;
            }
        });
    }
    
 
    formSolicitud.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores
        const nombre = document.getElementById('nombre')?.value.trim() || '';
        const apellido = document.getElementById('apellido')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const telefono = document.getElementById('telefono')?.value.trim() || '';
        const tipoSolicitud = document.getElementById('tipoSolicitud')?.value || '';
        const equipo = document.getElementById('equipo')?.value || '';
        const cantidad = document.getElementById('cantidad')?.value || '';
        const terminos = document.getElementById('terminos')?.checked || false;
        
        // Validaciones
        if (!nombre || !apellido || !email || !telefono || !tipoSolicitud || !equipo || !terminos) {
            mostrarMensaje('❌ Por favor, complete todos los campos obligatorios (*)', 'error', mensajeDiv);
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarMensaje('❌ Ingrese un correo electrónico válido', 'error', mensajeDiv);
            return;
        }
        
        if (telefono.length < 8) {
            mostrarMensaje('❌ Ingrese un número de teléfono válido', 'error', mensajeDiv);
            return;
        }
        
        // Obtener nombre del equipo
        let equipoNombre = '';
        if (equipo === 'otro') {
            equipoNombre = otroEquipoInput?.value.trim() || '';
            if (!equipoNombre) {
                mostrarMensaje('❌ Especifique el equipo que necesita', 'error', mensajeDiv);
                return;
            }
        } else {
            const selectedOption = equipoSelect?.options[equipoSelect.selectedIndex];
            equipoNombre = selectedOption ? selectedOption.text : equipo;
        }
        
        // Obtener presupuesto
        const presupuestoSelect = document.getElementById('presupuesto');
        let presupuestoTexto = '';
        if (presupuestoSelect && presupuestoSelect.value) {
            presupuestoTexto = presupuestoSelect.options[presupuestoSelect.selectedIndex].text;
        }
        
        // Obtener preferencia de contacto
        const contactoPref = document.querySelector('input[name="contactoPref"]:checked');
        const preferenciaContacto = contactoPref ? contactoPref.value : 'whatsapp';
        
        // Obtener mensaje adicional
        const mensajeAdicional = document.getElementById('mensaje')?.value || '';
        const empresa = document.getElementById('empresa')?.value || '';
        const cargo = document.getElementById('cargo')?.value || '';
        
        // Construir objeto con los datos
        const datosSolicitud = {
            nombre: nombre,
            apellido: apellido,
            nombreCompleto: `${nombre} ${apellido}`,
            email: email,
            telefono: telefono,
            empresa: empresa || 'No especifica',
            cargo: cargo || 'No especifica',
            tipoSolicitud: tipoSolicitud,
            equipo: equipoNombre,
            cantidad: cantidad,
            presupuesto: presupuestoTexto || 'No especifica',
            mensaje: mensajeAdicional || 'Sin mensaje adicional',
            preferenciaContacto: preferenciaContacto,
            fecha: new Date().toLocaleString('es-ES')
        };
        
 
        console.log('📋 NUEVA SOLICITUD RECIBIDA:', datosSolicitud);
        
        // Mostrar mensaje de éxito
        const resumen = `
            ✅ ¡Solicitud enviada con éxito!<br><br>
            <strong>Resumen de su solicitud:</strong><br>
            📌 Cliente: ${datosSolicitud.nombreCompleto}<br>
            📧 Email: ${datosSolicitud.email}<br>
            📞 Teléfono: ${datosSolicitud.telefono}<br>
            🖥️ Equipo: ${datosSolicitud.equipo}<br>
            🔢 Cantidad: ${datosSolicitud.cantidad}<br>
            💰 Presupuesto: ${datosSolicitud.presupuesto}<br>
            <br>
            <strong>📞 Un asesor de DK Protech se contactará con usted en las próximas 24 horas por ${preferenciaContacto === 'whatsapp' ? 'WhatsApp' : (preferenciaContacto === 'llamada' ? 'teléfono' : 'correo electrónico')}.</strong>
        `;
        mostrarMensaje(resumen, 'exito', mensajeDiv);

    });
}

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo, elemento) {
    if (elemento) {
        elemento.style.display = 'block';
        elemento.innerHTML = texto;
        elemento.className = `mensaje-form ${tipo === 'exito' ? 'mensaje-exito' : 'mensaje-error'}`;
        
        setTimeout(() => {
            elemento.style.display = 'none';
        }, 8000);
    }
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', crearFormularioSolicitud);
} else {
    crearFormularioSolicitud();
}