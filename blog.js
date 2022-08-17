let dataBlog = []
function addBlog(event){
    event.preventDefault()

    let name = document.getElementById("input-blog-project-name").value
    let startDate = document.getElementById("input-blog-date").value
    let endDate = document.getElementById("input-blog-date").value
    let description = document.getElementById("input-blog-description").value
    let image = document.getElementById("input-blog-image").files

    let nodeJS = document.getElementById("input-node-js").checked
    if(nodeJS){
        nodeJS = document.getElementById("input-node-js").value
    } else{
         nodeJS = ''
    }

    let reactJS = document.getElementById("input-react-js").checked
    if(reactJS){
        reactJS = document.getElementById("input-react-js").value
    } else{
        reactJS = ''
    }

    let nextJS = document.getElementById("input-next-js").checked
    if(nextJS){
        nextJS = document.getElementById("input-next-js").value
    } else{
        nextJS = ''
    }

    let typescript = document.getElementById("input-typescript").checked
    if(typescript){
        typescript = document.getElementById("input-typescript").value
    } else{
        typescript = ''
    }

    console.log(nodeJS);
    console.log(reactJS);
    console.log(nextJS);
    console.log(typescript);

    
    // if(name == ""){
    //     return alert("name wajib diisi")
    // } else if(startDate == ""){
    //     return alert("startDate wajib diisi")
    // } else if(endDate == ""){
    //     return alert("endDate wajib diisi")
    // } else if(description == ""){
    //     return alert("description wajib diisi")
    // } else if(image == ""){
    //     return alert("image wajib diisi")
    // }

    // console.log(name);
    // console.log(startDate);
    // console.log(endDate);
    // console.log(description);
    // console.log(image);

    // untuk membuat url gambar, agar tampil
    image = URL.createObjectURL(image[0])

    let blog = {
         name,
         startDate,
         endDate,
         description,
         image,
         nodeJS,
         reactJS,
         nextJS,
         typescript,
    }

    dataBlog.push(blog)

    console.log(dataBlog);

    renderBlog()
}

function renderBlog(){

     document.getElementById("contents").innerHTML = ''

     console.log(dataBlog);

     for (let index = 0; index < dataBlog.length; index++) {

         console.log(dataBlog[index]);
         document.getElementById("contents").innerHTML +=
         ` 
         <div class="card">
         <div class="card-image">
             <img src="${dataBlog[index].image}" alt="test"/>
         </div>
         <div class="desc">
             <h3><a href="blog-detail.html" target="_blank">${dataBlog[index].name}</a></h3>
             <div class="durasi">durasi 3 bulan</div>
             <p>${dataBlog[index].description}</p>

             <div class="icon">
                <i class="fa-brands fa-${dataBlog[index].reactJS} fa-xl"></i>
                <i class="fa-brands fa-${dataBlog[index].nextJS} fa-xl"></i>
                <i class="fa-brands fa-${dataBlog[index].nodeJS} fa-xl"></i>
                <i class="fa-brands fa-${dataBlog[index].typescript} fa-xl"></i>
             </div>
             <div class="btn-group">
                 <button class="btn-edit">Edit Post</button>
                 <button class="btn-post">Delete Blog</button>
             </div>
         </div>
     </div>
     `
    }
}