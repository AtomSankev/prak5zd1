
var name = prompt('Input name', '');
var position = prompt('Input profesion', '');
var phone = prompt('Input phone', '');


var logo = 'sqrt.228.png'; 


var visitcard = `
    <div class="visitcard">
        <img src="${logo}" alt="Logo">
        <p>Ім'я: ${name}</p>
        <p>Професія: ${position}</p>
        <p>Телефон: ${phone}</p>
    </div>
`;


var table = '<table>';
for (var i = 0; i < 12; i++) {
    table += '<tr>';
    for (var j = 0; j < 3; j++) {
        table += `<td>${visitcard}</td>`;
    }
    table += '</tr>';
}
table += '</table>';


document.body.innerHTML = table;
