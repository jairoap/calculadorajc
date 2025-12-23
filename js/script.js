const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

document.getElementById('calculate').addEventListener('click', () => {
    let value = document.getElementById('value').value;
    let fee = (document.getElementById('fee').value) / 100;
    let time = document.getElementById('time').value;

    const total = value * (1 + fee) ** time;
    
    document.getElementById('total').innerHTML = (formatador.format(total))

    

})