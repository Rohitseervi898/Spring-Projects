const apiurl="http://localhost:8080/books"
const tableboby=document.getElementById("table_body");
const book_data=document.querySelector("#book-data-btn");
const pageid=document.body.id;
const get_books=async()=>{
    console.log("getting data....")
    let response= await fetch(apiurl);
    let data= await response.json();
    data.forEach(element => {
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${element.book_id}</td>
        <td> ${element.book_Name} </td>
        <td> ${element.author} </td>
        <td><input type="button" value="delete" onclick="document.getElementById('table_body').deleteRow(${element.book_id}-1);"/></td>
        `
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