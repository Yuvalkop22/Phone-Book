# Phone-Book
Phone-Book website I made with HTML, CSS, JavaScript and JQERY

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
      $("#textAll").text(textFunc()); //print all contacts in the phone-book (name , phone)
  });

  $("#btnSearchName").click(function(){ //search by full name
      $("#textFound").text("Contact Not Found");
      for(let i=0; i< phoneBook.length; i++){
          if (phoneBook[i].name === $("#nameSearch").val()){ //if contact found
              $("#textFound").text(phoneBook[i].name + " , " + phoneBook[i].phone); 
          }
      }
  });

  $("#btnDeleteName").click(function(){ //delete by full name
      $("#textDelete").text("Contact Not Found");
      for(let i=0; i<phoneBook.length; i++){
          if (phoneBook[i].name === $("#nameDelete").val()){
              phoneBook.pop();
              $("#textDelete").text("Contact Deleted");
          }
      }
  })

Enjoy!

https://user-images.githubusercontent.com/80945323/163228572-64001c24-287c-4a37-a960-02b11628ddb8.mp4
