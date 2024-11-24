document.addEventListener("DOMContentloaded",function(){
    const apiUrl="http://localhost:8080/books"
    const tableBody=document.gatElementById("book_table");

    fetch(apiUrl)
        .then(response -> response.json())
        .then(data->{
            data.forEach(employees->{
                const row=document.createElement("tr");
                row.innerHTML=
                <th>${book_id}</th>
                <th>${author}</th>
                <th>${book_name}</th>
                tableBody.appendChild(row);
            })
        }).catch(error ->{
            console.log("error "+error);
        })
})