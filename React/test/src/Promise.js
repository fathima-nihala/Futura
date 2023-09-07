function Hello(num1,num2){
        return new Promise((res,rej)=>{
          res(num1+num2)
        })
      }
      Hello(10,20).then((values)=>{
        console.log(values);
      })

      function functionOne(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                let name="niha"
                resolve(name)
            },3000);  
        })
      }

      function functionTwo(){
        return new Promise((resolve, reject) => {
           setTimeout(()=>{
            let age=20
            resolve(age)
        },3000);
      })
    }

    Promise.all([functionOne(),functionTwo()]).then((result)=>{
        console.log(result);
    } )

    async function display(){
        let name=await functionOne()
        console.log('**',name);
        let age=await functionTwo()
            console.log('**',age);
    }
    display()