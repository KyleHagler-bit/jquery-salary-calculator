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

    let totalMonthly = 0;

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

$('.delete-button').on('click', function(event){
    //clear only the row that the clicked button is in!
    const element = event.target; //this is the button that fired this event
    // $(element).parent().parent().remove(); THIS LINE WORKS goes find grandparents
    $(element).parents('tr').remove();
});


// let rowElement = $('<tr></tr>'); //trying to add empty row at end
// rowElement.append('<td></td>');
// $('table tbody').append(rowElement);

    }//end function setUp


    function monthlyCost(){

    }//end function

    $('#submit').on('click', function(e) { //submit button is clicked
        const firstName = $('#firstName').val();
        const lastName =$('#lastName').val();
        const idNum =$('#idNum').val();
        const title =$('#title').val();
        const annualSalary =$('#annualSalary').val();

        let newEmployee = {firstName, lastName, idNum, title, annualSalary};
        console.log(newEmployee);

        employees.push(newEmployee);
        console.log(employees);
    });

    $(document).ready(setUp);