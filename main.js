const pizzas = [{
        id:1,
        nombre:'Pizza Napolitana',
        ingredientes:['Mozzarella','Tomate', 'Hojas de albahaca'],
        precio:300
    },
    {
        id:2,
        nombre:'Pizza Jamon y Morron',
        ingredientes:['Jamon', 'Morron', 'Salsa', 'Pimiento rojo'],
        precio:700
    },
    {
        id:3,
        nombre:'Pizza con Champiñones',
        ingredientes:['Queso Parmesano', 'Champiñones', 'Cebolla', 'Aceitunas'],
        precio:450
    },
    {
        id:4,
        nombre:'Pizza 4 quesos',
        ingredientes:['Mozzarella', 'Provolone', 'Parmesano', 'Gorgonzola'],
        precio:650,
    },
    {
        id:5,
        nombre:'Pizza Fugazzeta',
        ingredientes:['Mozzarella', 'Cebolla', 'Aceitunas'],
        precio:570,
    },
    {
        id:6,
        nombre:'Pizza Carbonara',
        ingredientes:['Huevo', 'Parmesano', 'Pimienta'],
        precio:420,
    },
]

const inputNumero = document.querySelector('#numero');
const form = document.querySelector('.container__form');

const checkNumero = () =>{

    let valid = false;
    const numeroIngresado = inputNumero.value;
    if(isEmpty(numeroIngresado)){
        showError(inputNumero,'Debe ingresar un número.');
    }else if (!isBetween(numeroIngresado)){
        showError(inputNumero,"Debe ingresar un número entre 1 y 6.");
    }else{
        pizzaElegida(numeroIngresado);
        valid = true;
        showSuccess(inputNumero);
    }
    return valid;
}

const isEmpty = (value) =>!value.length;

const isBetween = (value) => value < 1 || value > 6 ? false : true;

const pizzaElegida = (value) =>{

    const h2 = document.querySelector('.pizzah2');
    const h3 = document.querySelector('.precio');

    pizzas.forEach((pizza) => {
        if(pizza.id == value){
            h2.textContent = pizza.nombre;
            h3.textContent = `$${pizza.precio}`;
        }
    });
}

const showError = (input, mensaje) =>{

    const error = document.querySelector('.renderizado');
    const formField = input.parentElement;
    const h2 = document.querySelector('.pizzah2');
    const h3 = document.querySelector('.precio');

    formField.classList.remove('success');
    formField.classList.add('error');
    error.textContent = mensaje;
    h2.textContent = "";
    h3.textContent = "";
}

const showSuccess = (input) =>{

    const error = document.querySelector('.renderizado');
    const formField = input.parentElement;

    formField.classList.remove('error');
    error.textContent = "";
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    checkNumero();
    form.reset();
})