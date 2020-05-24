console.log('testing');

let employees = [ //starts with 3 employees already entered
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

    let monthTotal = 0;

    function clearTable(){ //clear the table
        $('table tbody').empty();
    } //end func clearTable

    function setUp(){ //-------------------------------------------------------------------
        clearTable();
        monthlyCost(); //show intial monthly cost

        
   for (let employee of employees){ //intialize the table with our employees
    let rowElement = $('<tr class = "row"></tr>');
        rowElement.append(`<td>${employee.firstName}</td>`);
        rowElement.append(`<td>${employee.lastName}</td>`);
        rowElement.append(`<td>${employee.idNum}</td>`);
        rowElement.append(`<td>${employee.title}</td>`);
        rowElement.append(`<td class = "salary">$${employee.annualSalary}</td>`);
        rowElement.append(`<td><button class="delete-button">Delete</button></td>`);
    
    $('table tbody').append(rowElement);

    }//end for of loop

    //add empty row at end of table? stylistic choice perhaps

$('.delete-button').on('click', function(event){ //clear only the row that clicked button is in!
    
    const element = event.target; //this is the button that fired this event
    
    parentElement = $(element).parents('tr'); // $(element).parent().parent().remove();  goes find grandparents
    console.log(parentElement[0].innerHTML); //trying to see what is found inside what...
    let stringId = parentElement[0].innerHTML;

    let index = -1;
    for (let i=0; i<employees.length;i++){ //checks to find match for id
        console.log(employees[i].idNum);
        if (stringId.search(employees[i].idNum) >= 0){
            console.log('match found');
            index = i; //get number so can splice clicked employee out of array
            console.log(index);
        } 
    }; //ends for loop

    console.log(index);
    console.log(employees[index]);

    $(element).parents('tr').remove(); //takes row off table
    employees.splice(index,1); //takes employee out of array
console.log(employees); //check new array to see if it worked
monthlyCost(); //calculate the new monthly cost with altered array
    
}); //end delete click

}//end function setUp ------------------------------------------------------------------------


    $('#submit').on('click', function(e) { //submit button is clicked CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
        const firstName = $('#firstName').val(); //get all inputed values
        const lastName =$('#lastName').val();
        const idNum =Number($('#idNum').val());
        const title =$('#title').val();
        const annualSalary =Number($('#annualSalary').val()); //have to make sure is number not string

        let check = true;
        for (let i=0; i<employees.length; i++){ //can't have multiple employees with same id!
            if (idNum === employees[i].idNum){
                alert('Error: Employee id is already on table');
                check = false;
                break;
                }
                else if (annualSalary < 0){ //cant have annual salary be negative
                    alert('Error: Annual Salary cannot fall below $0') //what is this? an internship?
                    break;
                }
            }
        
     if ((firstName != '' || lastName !='' || idNum != '' || title !='' || title != '' || annualSalary!='') && check === true && annualSalary>=0){

        let newEmployee = {firstName, lastName, idNum, title, annualSalary};
        console.log(newEmployee);

        employees.push(newEmployee); //add to array
        console.log(employees); //check the array

        $('#firstName').val(''); //allows inputs to clear after employee is succesfully added to table
        $('#lastName').val('');
        $('#idNum').val('');
        $('#title').val('');
        $('#annualSalary').val('');

        setUp();
        } //end 

        else if (firstName === '' || lastName ==='' || idNum === '' || title ==='' || title === '' || annualSalary==='') {
            alert('Input fields cannot be left blank before submitting');
        }
    
    monthlyCost();
    
    }); //end submit click CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

    
    function monthlyCost(){ //calculate total monthly $ from employees $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        let yearTotal =0;
        for (let i=0; i < employees.length;i++){
            yearTotal += employees[i].annualSalary;
        }
        console.log('The sum of all annual salaries in array is: ',yearTotal);

        monthTotal = (yearTotal/12).toFixed(2); //since 12 months in a year
            let el = $('#monthly');
            el.empty();
            el.append(monthTotal); //have it appear on the DOM
    }//end function $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    
    $('#deleteAll').on('click', function(e) {
        clearTable(); //takes row off DOM
        if (employees.length ===0){ //if button pressed twice in a row
            alert('The table is already empty!');
        }
        employees=[]; //empty out array so new things can be submitted!
    });


    $(document).ready(setUp);


    //Things to look out for/think about:
    //salary should never be negative
    //make sure deleted row is correct row
    //make sure only one row deletes at a time
    //make sure inputted ids are different
    //make input fields required (should all be required?)
    //clear all button?
    //possible bug found but I couldn't recreate it... still seemed to work? console logs just off (showing -1 for index)