var link = document.querySelector(".button-write-us");
      var popup = document.querySelector(".modal-write-us");
      var close = popup.querySelector(".modal-content-close");
			var form = popup.querySelector(".authorization-form");
			var login = popup.querySelector("[name=login]");
			var email = popup.querySelector("[name=email]");
			var storageLogin = localStorage.getItem("login");
			var storageEmail = localStorage.getItem("email");
      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
				if (storageLogin) {
					login.value = storageLogin;
				}
				if (storageEmail) {
					email.value = storageEmail;
				}
				login.focus();
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
				popup.classList.remove("modal-error");
      });
				
				form.addEventListener("submit", function(event) {
         if (!login.value || !email.value) {
          event.preventDefault();
					popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("login", login.value);
					localStorage.setItem("email", login.value);
        }
      });
			window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
						popup.classList.remove("modal-error");
          }
        }
      });
			
			var mapOpen = document.querySelector(".js-open-map");
			var mapPopup = document.querySelector(".modal-content-map");
      var mapClose = mapPopup.querySelector(".modal-content-close");
			 mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
          }
        }
      });