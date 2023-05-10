function ConfirmarSenha() {
			const Senha = document.querySelector('input[name=Senha');
			const Confirmar = document.querySelector('input[name=Confirmar');

			if (Confirmar.value === Senha.value) {
				Confirmar.setCustomValidity('');
			}else{
				Confirmar.setCustomValidity('Senhas diferentes');
			}
		}
		function SenhaOkay(){
			alert("As senhas conferem")
		}