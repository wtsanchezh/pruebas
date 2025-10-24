 let usuario = document.getElementById("usuario");
        let contraseña = document.getElementById("contraseña");
        let boton = document.getElementById("btnInicio");
        let texto = document.getElementById("prueba");

        let usuarioValido = "Wendy";
        let contraseñaValida = 123456;

        boton.addEventListener('click', () => {
            let valorUsuario = usuario.value.trim();
            let valorContraseña = contraseña.value.trim();
            if (valorUsuario == usuarioValido && valorContraseña == contraseñaValida) {
                window.location.href = "https://emojidb.org/";
            } else {
                if (valorUsuario != usuarioValido && valorContraseña == contraseñaValida) {
                    texto.textContent = "⛔ Usuario inválido";
                    usuario.style.borderColor = "#F0210C";
                    contraseña.style.borderColor = "";
                } else if (valorUsuario == usuarioValido && valorContraseña != contraseñaValida) {
                    texto.textContent = "⛔ Contraseña inválida";
                    contraseña.style.borderColor = "#F0210C";
                    usuario.style.borderColor = "";
                } else {
                    texto.textContent = "⛔ Usuario y contraseña inválidos";
                    usuario.style.borderColor = "#F0210C";
                    contraseña.style.borderColor = "#F0210C";
                }
            }
        });