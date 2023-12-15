
let p = 0




let coustmer = [{name : 'James' ,img_src :'a.jpeg', content : 'Nice protuct ,great Work' },
                {name : 'celin' ,img_src :'b.png', content : 'very usefull product ' },
                {name : 'Jhon' ,img_src :'c.png', content : 'wonderfull design ' }
]


let image = document.getElementById('img')
     image.src = coustmer[0].img_src
    

let name = document.getElementById('name')
    name.innerText = coustmer[0].name

let con  = document.getElementById('con')
    con.innerText = coustmer[0].content



    // console.log(document.querySelectorAll('.card')[1])
    // p=0
    // document.querySelector('.show_card').innerHTML = document.querySelectorAll('.card')[p].innerHTML
    
    // function change_n(){
    
    //   if(p==coustmer.length-1){
    //     p=0
        
    //     image.src = coustmer[p].img_src
    //     name.innerText = coustmer[p].name
    //     con.innerText = coustmer[p].content
        
    //   }else{

    //     console.log(p);
    //     p+=1
    //     image.src = coustmer[p].img_src
    //     name.innerText = coustmer[p].name
    //     con.innerText = coustmer[p].content
            
    //   }
    
        
    // }
    
    // function change_p(){
       
    //     console.log(p);

    //     if(p==0){
    //        p=coustmer.length-1
            
    //     image.src = coustmer[p].img_src
    //     name.innerText = coustmer[p].name
    //     con.innerText = coustmer[p].content

    //     }else{
    //         p -=1

    //         image.src = coustmer[p].img_src
    //          name.innerText = coustmer[p].name
    //         con.innerText = coustmer[p].content
           
    //     }

        
    
    // }

    function change(btn){
       
        id = btn.id
        if(id=='pre'){

            if(p==coustmer.length-1){
        p=0
        
        image.src = coustmer[p].img_src
        name.innerText = coustmer[p].name
        con.innerText = coustmer[p].content
        
      }else{

        console.log(p);
        p+=1
        image.src = coustmer[p].img_src
        name.innerText = coustmer[p].name
        con.innerText = coustmer[p].content
            
      }
    

        }else{

          if(p==0){

                   p=coustmer.length-1
                    
                image.src = coustmer[p].img_src
                name.innerText = coustmer[p].name
                con.innerText = coustmer[p].content
        
                }else{
                    p -=1
        
                    image.src = coustmer[p].img_src
                     name.innerText = coustmer[p].name
                    con.innerText = coustmer[p].content
                   
                }


        }


    }