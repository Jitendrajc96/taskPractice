const posts = [
    {title: 'Post1', body: '1st post'},
    {title: 'Post2', body: '2nd post'}
    ];
    function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
    }
    
    function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            // const error = true;
            const error = false;
            if(!error) resolve();
            else reject('Error: Something went wrong');
        }, 2000);
    });
    }
    
    // createPost({title:'Post3',body:'3rd post'})
    // .then(getPosts)
    // .catch(err => console.log(err));

    // /* Promise.all
    const p1 = Promise.resolve("Hello World");
    const p2 = 100;
    const p3 = new Promise((resolve, reject) =>  
        setTimeout(resolve, 2000, 'All promises Resolved')
    );

    const p4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()
    );
    Promise.all([p1, p2, p3, p4]).then(values => console.log(values));
