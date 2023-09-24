function alerta()
    {
    let mensaje;
    let opcion = confirm("Desea descargar el archivo");
    if (opcion == true) {
        window.open("https://drive.google.com/file/d/1cXWIWow6y1IJc7Nasah2cwVZCAtA4SUo/view?usp=sharing")
        // document.getElementById("download").href = "https://drive.google.com/file/d/1cXWIWow6y1IJc7Nasah2cwVZCAtA4SUo/view?usp=sharing";
	};
}