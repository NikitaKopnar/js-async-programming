//callback hell
            // const task = (taskdone) => {
            //     setTimeout(() => {
            //         console.log("first task done");
            //     setTimeout(()=>{
            //         console.log("Second task done");
            //     setTimeout(()=>{
            //         console.log("Third task done");
            //     },1000)
            //     },1000)
            //     },1000)
            // }
            // task();

//traditional xml AJAX call
            // const request = new XMLHttpRequest();
            // request.open('GET','https://restcountries.com/v3.1/name/india');
            // request.send();
            // request.addEventListener('load', function() {
            //     const [data]  = JSON.parse(this.responseText)
            //     console.log(data)
            // })

//modern of making AJAX call
            // const modernReq = fetch('https://restcountries.com/v3.1/name/india');
            // console.log(modernReq); // only give promise

            // const courtyData = function() {
            //     fetch('https://restcountries.com/v3.1/name/india').then((response) => {
            //         console.log(response);
            //         return response.json()
            //     }).then((data) => {
            //         console.log(data)
            //     }).catch(err => console.log("Hello erro",err) )
            // }
            // courtyData();

//creating own promise.
            // const lotteryResult = new Promise(function(resolve, reject) {
            //     console.log("Lottery draw happening");
            //     setTimeout(()=> {
            //     if(Math.random() > 0.5)
            //     console.log("You Won!");
            //     else
            //     console.log("You lost!");
            //     },2000) 
            // })
            // lotteryResult.then(res => console.log(res)).catch(err => console.log(err));

//promisifying settimeout
            // const wait = function(seconds) {
            //     return new Promise(function(resolve){
            //         setTimeout(resolve,seconds*1000);
            //     });
            // }

            // wait(1).then(()=>{
            //     console.log("I waited for 1 seconds");
            //     return wait(2);
            // }).then(()=>{
            //     console.log("I waited for 2 seconds");
            //     return wait(3);
            // })

// resolve and reject 
            // Promise.resolve('ABC').then((res)=>{ console.log(res)})
            // Promise.reject(new Error('problem')).then((err)=>{ console.log(err) })

//using async and await keyword for asynchronous programming
        
            // try {
            //     const whereIam = async function() {
            //         const country = await fetch("https://restcountries.com/v3.1/name/india");
            //         const data = await country.json();
            //         //console.log(data);
            //         return data; 
            //     };
            //     (async function() {
            //         const res = await whereIam();
            //         console.log(res);
            //     })();
            //     // whereIam();
            //     // whereIam().then(res => {
            //     //     console.log(res);
            //     // });
            // }
            // catch(error) {
            //     console.error("my error",error);
            // }

