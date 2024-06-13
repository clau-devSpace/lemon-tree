    const abrir = document.getElementById("abrir");
    const cerrar = document.getElementById("cerrar");
    const nav = document.getElementById("nav");

    function agregar(){
        const nav = document.getElementById("nav-menu");
        nav.classList.add("visible");
        cerrar.classList.add("visible");
        abrir.classList.add("invisible");
        
    };

    function quitar(){
      const nav = document.getElementById("nav-menu");
      const cerrar = document.getElementById("cerrar");
      const abrir = document.getElementById("abrir");

      nav.classList.remove("visible");
      cerrar.classList.remove("visible");
      abrir.classList.remove("invisible");
      
    };

    
