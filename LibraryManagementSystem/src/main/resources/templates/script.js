const apiurl="http://localhost:8080/books"
const tableboby=document.getElementById("table_body");
const pageid=document.body.id;
const get_books=async()=>{
    console.log("getting data....")
    let response= await fetch(apiurl);
    let data= await response.json();
    data.forEach(element => {
        const row=document.createElement("tr");
        row.setAttribute('id', `${element.book_id}`);
        row.innerHTML=`

        <td>${element.book_id}</td>
        <td> ${element.book_Name} </td>
        <td> ${element.author} </td>
        <td><button class='delete-btn'>delete me</button></td>
        `
        const deleteButton = row.querySelector('.delete-btn');
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