console.log('testing');

let employees = [
    {
        firstName: 'Jen',
        lastName: 'Barber',
        idNum: 4521,
        title: 'Team Lead',
        annualSalary: 80000,
    },
    {
        firstName: 'Maurice',
        lastName: 'Moss',
        idNum: 8724,
        title: 'Support Team',
        annualSalary: 58000,
    },
    {
        firstName: 'Roy',
        lastName: 'Smith',
        idNum: 9623,
        title: 'Quality Assurance',
        annualSalary: 48000,
    }
    ];

    function clearTable(){
        //lets clear the table
        $('table tbody').empty();
    } //end func clearTable

    function setUp(){
        clearTable();

        //intialize the table with our employees
   for (let employee of employees){
    let rowElement = $('<tr></tr>');
    rowElement.append(`<td>${employee.firstName}</td>`);
    rowElement.append(`<td>${employee.lastName}</td>`);
    rowElement.append(`<td>${employee.idNum}</td>`);
    rowElement.append(`<td>${employee.title}</td>`);
    rowElement.append(`<td class = "salary">$${employee.annualSalary}</td>`);
    rowElement.append(`<td><button class="delete-button">Delete</button></td>`);
    
    $('table tbody').append(rowElement);

}//end for of loop

let rowElement = $('<tr></tr>'); //trying to add empty row at end
rowElement.append('<td></td>');
$('table tbody').append(rowElement);

    }//end function setUp



    $(document).ready(setUp);