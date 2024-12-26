const apiurl="http://localhost:8080/books"
const tableboby=document.getElementById("table_body");
const pageid=document.body.id;
selectedrow=null;

//Function to open the edit popup and populate it with the selected row's data 
function editpopup(td){
    selectedrow=td.parentElement.parentElement;
    const bookid=selectedrow.cells[0].textContent;
    const bookname=selectedrow.cells[1].textContent;
    const author=selectedrow.cells[2].textContent;

    //Poulate the form fields with the selected row's data.
    document.getElementById("edit_btn").innerHTML="Update";
    //Open the popup
    openPopup();
    document.getElementById("bookID").value=bookid;
    document.getElementById("bookName").value=bookname;
    document.getElementById("author").value=author;
}

function openPopup(){
    document.getElementById("bookID").value=null;
    document.getElementById("bookName").value=null;
    document.getElementById("author").value=null;
    document.getElementById("popupForm").style.display="block";
}

function closePopup(){
    document.getElementById("popupForm").style.display="none";
    document.getElementById("edit_btn").innerHTML="Add Books";
    selectedrow=null;
}

window.onclick=function(event){
    const popup=document.getElementById("popupForm");
    if(event.target==popup){
        closePopup();
    }
}

function add_data(event){
    //prevent the default form submission
    event.preventDefault();
    //get the values from the form inputs
    const bookid = document.getElementById('bookID');
    const bookname= document.getElementById('bookName');
    const author = document.getElementById('author');

    //create a book object
    const Books = {
        book_id:bookid.value,
        book_Name:bookname.value,
        author:author.value
    };
    console.log(Books);

    //send the data to the api
    if(selectedrow){
        //If selectedrow is define, we are editing an existing book
        fetch(`${apiurl}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Books)
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            // return response.json();
        })
        .then(data=>{
            console.log('Book update successfully',data);
            //Update the table row with new data
            selectedrow.cells[1].innerHTML=bookname.value;
            selectedrow.cells[2].innerHTML=author.value;
            closePopup();
        })
        .catch(error=>{
            console.error('Error:',error);
        });
    }
    else{
        fetch(`${apiurl}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Books)
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            // return response.json();
        })
        .then(data=>{
            console.log('Success',data);
            closePopup();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

//getting data from api and showing it in table.
const get_books=async()=>{
    console.log("getting data....")
    //fetching data from api.
    let response= await fetch(apiurl);
    //storing data in json format.
    let data= await response.json();
    //Adding data to table.
    data.forEach(element => {
        //creating new row in table.
        const row=document.createElement("tr");
        row.setAttribute('id', `${element.book_id}`);
        row.innerHTML=`
        <td>${element.book_id}</td>
        <td> ${element.book_Name} </td>
        <td> ${element.author} </td>
        <td><button class='edit-btn' onclick="editpopup(this)">Edit</button></td>
        <td><button class='delete-btn'>delete me</button></td>
        `
        //create edit and delete buttton variable.
        // const editbutton=row.querySelector('.edit-btn');
        const deleteButton = row.querySelector('.delete-btn');
        //When edit button is clicked.
        // editbutton.addEventListener('click',()=>{
        // });
        //When delete button is clicked.
        deleteButton.addEventListener('click', async () => {
            try{
                const response = await fetch(`${apiurl}/${element.book_id}`,{
                    method: 'DELETE',
                });
                if (response.ok) {
                    // If the response is OK, remove the row from the table
                    row.remove();
                    console.log(`Book with ID ${element.book_id} deleted successfully.`);
                } else {
                    console.error('Failed to delete the book:', response.statusText);
                }
            } catch (error) {
                console.error('Error occurred while deleting the book:', error);
            }
        });
        tableboby.appendChild(row); 
    });
}

switch(pageid){
    case "book_data":
        get_books();
        break;
    default:
        console.log("NO functin found");
}