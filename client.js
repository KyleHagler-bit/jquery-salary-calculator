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

    let monthTotal = 0;

    function clearTable(){
        //lets clear the table
        $('table tbody').empty();
    } //end func clearTable

    function setUp(){
        clearTable();
        monthlyCost(); //show intial monthly cost

        //intialize the table with our employees
   for (let employee of employees){
    let rowElement = $('<tr class = "row"></tr>');
    rowElement.append(`<td>${employee.firstName}</td>`);
    rowElement.append(`<td>${employee.lastName}</td>`);
    rowElement.append(`<td>${employee.idNum}</td>`);
    rowElement.append(`<td>${employee.title}</td>`);
    rowElement.append(`<td class = "salary">$${employee.annualSalary}</td>`);
    rowElement.append(`<td><button class="delete-button">Delete</button></td>`);
    
    $('table tbody').append(rowElement);

    

}//end for of loop






// let rowElement = $('<tr></tr>'); //trying to add empty row at end
// rowElement.append('<td></td>');
// $('table tbody').append(rowElement);

$('.delete-button').on('click', function(event){
    //clear only the row that the clicked button is in!
    const element = event.target; //this is the button that fired this event
    
    // $(element).parent().parent().remove(); THIS LINE WORKS goes find grandparents
    
    parentElement = $(element).parents('tr');
    console.log(parentElement[0].innerHTML);
    let stringId = parentElement[0].innerHTML;

    let index = -1;
    for (let i=0; i<employees.length;i++){ //checks to find match for id
        console.log(employees[i].idNum);
        if (stringId.search(employees[i].idNum) >= 0){
            console.log('match found');
            index = i; //get number so can splice clicked employee out of array
            console.log(index);
        } else{

        } //end else
        
    }; //ends for loop

    console.log(index);
    console.log(employees[index]);
    // let n = stringId.search(employees.idNum.toString());
    // console.log(n);

    $(element).parents('tr').remove(); //takes row off table
    employees.splice(index,1); //takes employee out of array
console.log(employees);
monthlyCost();
    

}); //end delete click

}//end function setUp





    $('#submit').on('click', function(e) { //submit button is clicked
        const firstName = $('#firstName').val();
        const lastName =$('#lastName').val();
        const idNum =Number($('#idNum').val());
        const title =$('#title').val();
        const annualSalary =Number($('#annualSalary').val());

        let check = true;
        for (let i=0; i<employees.length; i++){ //can't have multiple employees with same id!
            if (idNum === employees[i].idNum){
                alert('Error: Employee id is already on table');
                check = false;
                break;
                }
            }
        
     if ((firstName != '' || lastName !='' || idNum != '' || title !='' || title != '' || annualSalary!='') && check === true){

        let newEmployee = {firstName, lastName, idNum, title, annualSalary};
        console.log(newEmployee);

        employees.push(newEmployee);
        console.log(employees);

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
    }); //end submit click

    
    function monthlyCost(){ //calculate total monthly $ from employees
        let yearTotal =0;
        for (let i=0; i < employees.length;i++){
            yearTotal += employees[i].annualSalary;
        }
        console.log(yearTotal);

        monthTotal = (yearTotal/12).toFixed(2); //since 12 months in a year
            let el = $('#monthly');
            el.empty();
            el.append(monthTotal);




    }//end function
    

    $(document).ready(setUp);