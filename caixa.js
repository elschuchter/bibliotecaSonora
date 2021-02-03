for (var i = 0; i < document.querySelectorAll(".caixa").length; i++) {
  document.querySelectorAll(".caixa")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

  document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  function makeSound(key) {
    switch (key) {
      //  Centro da Caixa

      case (KeyboardEvent.key = "q"):
        var caixaCentroForte = new Audio(
          "sounds/Caixa/Centro/01Caixa-CentroForte.wav"
        );
        caixaCentroForte.play();
        break;

      case "w":
        var caixaCentroMedio = new Audio(
          "sounds/Caixa/Centro/02Caixa-CentroMedio.wav"
        );
        caixaCentroMedio.play();
        break;

      case "e":
        var caixaCentroFraco = new Audio(
          "sounds/Caixa/Centro/03Caixa-CentroFraco.wav"
        );
        caixaCentroFraco.play();
        break;

      // Centro da Caixa Mão Fraca

      case "a":
        var caixaMaoFracoForte = new Audio(
          "sounds/Caixa/MãoFracaCentro/01Caixa-CentroMão2Forte.wav"
        );
        caixaMaoFracoForte.play();
        break;

      case "s":
        var caixaMaoFracoMedio = new Audio(
          "sounds/Caixa/MãoFracaCentro/02Caixa-CentroMão2Médio.wav"
        );
        caixaMaoFracoMedio.play();
        break;

      case "d":
        var caixaMaoFracoFraco = new Audio(
          "sounds/Caixa/MãoFracaCentro/03Caixa-CentroMão2Fraco.wav"
        );
        caixaMaoFracoFraco.play();
        break;

      // Borda da Caixa

      case "z":
        var caixaBordaForte = new Audio(
          "sounds/Caixa/CaixaBorda/01Caixa-BordaForte.wav"
        );
        caixaBordaForte.play();
        break;

      case "x":
        var caixaBordaMedio = new Audio(
          "sounds/Caixa/CaixaBorda/02Caixa-BordaMedio.wav"
        );
        caixaBordaMedio.play();
        break;

      case "c":
        var caixaBordaFraco = new Audio(
          "sounds/Caixa/CaixaBorda/03Caixa-BordaFraco.wav"
        );
        caixaBordaFraco.play();
        break;

      // Aro Mão Forte

      case "u":
        var aroMao01Forte = new Audio(
          "sounds/Caixa/Aro/MaoForte/01Caixa-AroForte.wav"
        );
        aroMao01Forte.play();
        break;

      case "i":
        var aroMao01Medio = new Audio(
          "sounds/Caixa/Aro/MaoForte/02Caixa-AroMedio.wav"
        );
        aroMao01Medio.play();
        break;

      case "o":
        var aroMao01Fraco = new Audio(
          "sounds/Caixa/Aro/MaoForte/03Caixa-AroFraco.wav"
        );
        aroMao01Fraco.play();
        break;

      //Aro Mão Fraca

      case "j":
        var aroMao02Forte = new Audio(
          "sounds/Caixa/Aro/MaoFraca/01Caixa-Aro2Forte.wav"
        );
        aroMao02Forte.play();
        break;

      case "k":
        var aroMao02Forte = new Audio(
          "sounds/Caixa/Aro/MaoFraca/02Caixa-Aro2Medio.wav"
        );
        aroMao02Forte.play();
        break;

      case "l":
        var aroMao02Forte = new Audio(
          "sounds/Caixa/Aro/MaoFraca/03Caixa-Aro2Fraco.wav"
        );
        aroMao02Forte.play();
        break;

      // Meio Do Raio da Caixa

      case "m":
        var meioRaioForte = new Audio(
          "sounds/Caixa/MeioRaio/01Caixa-Meio-RaioForte.wav"
        );
        meioRaioForte.play();
        break;

      case ",":
        var meioRaioMedio = new Audio(
          "sounds/Caixa/MeioRaio/02Caixa-Meio-RaioMedio.wav"
        );
        meioRaioMedio.play();
        break;

      case ".":
        var meioRaioFraco = new Audio(
          "sounds/Caixa/MeioRaio/03Caixa-Meio-RaioFraco.wav"
        );
        meioRaioFraco.play();
        break;

      default:
        break;
    }
  }

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 200);
  }
}
