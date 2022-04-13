$(function(){
    let phoneBook = [];
    const person = {
        name: 'Yuval Kopelman',
        phone: '0509516515'
    };
    phoneBook.push(person);
    $("#btnAddPerson").click(function(){
       const personName = $("#fullName").val();
       const personPhone = $("#phone").val();
       const person = {
           name: personName,
           phone: personPhone
       };
       var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!(personName.length === 0)){
            if (personPhone.match(phoneNo)){
                phoneBook.push(person);
                $("#textThanks").text("Thank You!");
            }else{
            $("#textThanks").text("Try Again Wrong Phone Number!");
            }
        }      
        else{
        $("#textThanks").text("Try Again Full Name is Empty");
        }
    });

    function textFunc(){
        if (phoneBook.length === 0)
            var text = "No Contacts";
        else{
            text = phoneBook[0].name + "," + phoneBook[0].phone + "\n";
            for(let i=1; i< phoneBook.length; i++){
                text += phoneBook[i].name + " , " + phoneBook[i].phone;
            }
        }   
        return text;
    }

    $("#btnPrintAll").click(function(){
        $("#textAll").text(textFunc());
    });

    $("#btnSearchName").click(function(){
        $("#textFound").text("Contact Not Found");
        for(let i=0; i< phoneBook.length; i++){
            if (phoneBook[i].name === $("#nameSearch").val()){
                $("#textFound").text(phoneBook[i].name + " , " + phoneBook[i].phone);
            }
        }
    });

    $("#btnDeleteName").click(function(){
        $("#textDelete").text("Contact Not Found");
        for(let i=0; i<phoneBook.length; i++){
            if (phoneBook[i].name === $("#nameDelete").val()){
                phoneBook.pop();
                $("#textDelete").text("Contact Deleted");
            }
        }
    })

});