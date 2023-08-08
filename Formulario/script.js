let countdown;
      const countdownElement = document.getElementById('countdownElement');
      const questionForm = document.getElementById('questionForm');
      const submitButton = document.getElementById('submitButton');
      const resetButton = document.getElementById('resetButton');
  
      function startCountdown() {
        let seconds = 30;
        countdownElement.style.display = 'block';
        countdownElement.textContent = `Tiempo restante: ${seconds} segundos`;
  
        countdown = setInterval(() => {
          seconds--;
          countdownElement.textContent = `Tiempo restante: ${seconds} segundos`;
  
          if (seconds === 0) {
            clearInterval(countdown);
            countdownElement.style.display = 'none';
            alert('¡Tiempo terminado!');
            submitButton.disabled = true;
          }
        }, 1000);
      }
  
      function resetForm() {
        clearInterval(countdown);
        countdownElement.style.display = 'none';
        questionForm.reset();
        submitButton.disabled = true;
        resetButton.disabled = true;
      }
  
      document.getElementById('startButton').addEventListener('click', () => {
        startCountdown();
        submitButton.disabled = false;
        resetButton.disabled = false;
      });
  
      questionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        clearInterval(countdown);
        countdownElement.style.display = 'none';
        const formData = new FormData(questionForm);
        let answers = [];
  
        formData.forEach((value, key) => {
          answers.push(`${key}: ${value}`);
        });
  
        alert("Respuestas:\n" + answers.join("\n"));
        resetForm();
      });
  
      resetButton.addEventListener('click', () => {
        resetForm();
      });

      var preguntas = [
        "¿Cuál es la capital de Guatemala?",
        "¿En donde queda el Monte Everest?",
        "¿Cuál es la montaña más grande?",
        "¿Qué país es el más poblado?",
        "¿Cuántos metros son 10 kilómetros?",
        "¿Cuantos Años tiene la Universidada Mariano Gálvez?"
      ];

      var labels = document.getElementsByTagName('label');

      for (var i = 0; i < preguntas.length; i++) {
        labels[i].textContent = preguntas[i];
      }