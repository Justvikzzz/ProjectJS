



let valor = prompt(" marque 1. avanzado, 2. sobresaliente, 3. basico, 4. no aprobado")

switch(valor){

    case 1:
        alert("su nota es 5, su nivel es avanzado");
        break;
    case 2:
        alert("su nota esta entre 4 y 4,9, su nivel es sobresaliente ");
        break;
    case 3:
        alert("Su nota esta entre 3,0 y 3,9, su nivel es basico ");
        break;
    case 4:
        alert("Su nota es menor a 3 , su nivel es no aprobado");
        break;
    default:
        alert("ingrese un valor valido");
        break;
}