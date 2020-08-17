const User = require('../models/users')

const getIndex = (req, res) =>{
    User.find((err, User) =>{
      if(err) console.log(err);
   
      res.render('index', {user: User})
    })

}




const  postIndex = (req, res) =>{
    console.log(req.body);

    const user = new User({
        name: req.body.name
    })
    user.save( (err, user) =>{
       if(err) console.log(err);
         console.log(user);
         res.redirect('/')
    })
   
}

const delePost = (req, res) =>{
       console.log('delete: ', req.params.id);
       const { id } = req.params
       User.findByIdAndDelete(id,  (err,  callback) =>{
        if(err)console.log(err);
        res.redirect('/')
    
    })
       
}


module.exports ={getIndex: getIndex, postIndex: postIndex, delePost: delePost}