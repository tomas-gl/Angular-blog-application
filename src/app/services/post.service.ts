export class PostService {
  posts = [
    {
      id: 1,
      title: 'Premier post',
      content: 'Hello World !',
      loveIts: 0,
      created_at: 'Wed Oct 30 2018 16:33:22'
    },
    {
      id: 2,
      title: 'Deuxième post',
      content: 'Bonjour !',
      loveIts: 0,
      created_at: 'Wed Oct 27 2018 16:33:22'
    },
    {
      id: 3,
      title: 'Troisième post',
      content: 'Bonsoir !',
      loveIts: 0,
      created_at: 'Wed Oct 12 2018 16:33:22'
    },
  ];


  addPost(title: string, content: string, loveIts: number, created_at: Date){
    const postObject ={
      id:0,
      title: '',
      content:'',
      loveIts: 0,
      created_at: Date.now(),
    };
    postObject.title= title;
    postObject.content= content;
    postObject.loveIts: loveIts;
    postObject.created_at: created_at;
    postObject.id= this.posts[(this.posts.length -1)].id +1;

    this.posts.push(postObject);
  }

  deletePost(post:array){
    const index: number = this.data.indexOf(post);
    if (index !== -1){
        this.data.splice(index, 1);
    }
  }

}
