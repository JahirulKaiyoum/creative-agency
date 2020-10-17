import React from "react";

const habijabi = () => {
  const handleSignIn = () => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;

        fetch(
          `https://mysterious-ocean-37435.herokuapp.com/checkAdmin?email=${email}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              const signedInUser = {
                checkAdmin: true,
                name: displayName,
                email: email,
                image: photoURL,
              };
              setLoggedInUser(signedInUser);
              history.replace(from);
            } else {
              const signedInUser = {
                checkAdmin: false,
                name: displayName,
                email: email,
                image: photoURL,
              };
              setLoggedInUser(signedInUser);
              history.replace(from);
            }
          });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  return <section></section>;
};

export default habijabi;

// <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//             <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" value={loggedInUser.name} />
//             {errors.name && <span className="text-danger">This field is required</span>}

//                 </div>

//              <div className="form-group">
//                 <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" value={loggedInUser.email} />
//             {errors.email && <span className="text-danger">This field is required</span>}
//         </div>
//         <div className="form-group">
//             <input type="text" ref={register({ required: true })} name="service" placeholder="" value={serviceOrder.name} className="form-control" />
//             {errors.GraphicDesign && <span className="text-danger">This field is required</span>}
//         </div>

//          <div class="form-group">
//                     <textarea type="text" ref={register({ required: true })} name="ProjectDetails" placeholder="Project Details" value={serviceOrder.description} className="form-control" style={{ height: '100px' }}></textarea>
//                     {errors.ProjectDetails && <span className="text-danger">This field is required</span>}
//                 </div>
//                 <div className="form-group row">
//                 <div className="col">
//                     <input type="text" ref={register({ required: true })} name="price" placeholder="Price" className="form-control" />
//                     {errors.price && <span className="text-danger">This field is required</span>}
//                 </div>
//                 <div className="col">
//             <input type="file" ref={register({ required: true })} name="file" placeholder="" className="form-control" />
//             {errors.file && <span className="text-danger">This field is required</span>}
//                     </div>
//                     </div>
//         <div className="form-group text-left">
//             <button type="submit" className="" style={{width:"170px",backgroundColor:"#111430",color:"#FFFFFF"}}>Send</button>
//         </div>
//     </form>

// fetch("https://mysterious-ocean-37435.herokuapp.com/allServices")
//           .then((response) => response.json())
//             .then((data) => {

//             console.log(data);
//             setServiceList(data);
//           });

// const handleSignIn = () => {
//     if (firebase.apps.length===0) {
//         firebase.initializeApp(firebaseConfig);
//     }
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         const { displayName, email, photoURL } = result.user;

//         fetch(`https://mysterious-ocean-37435.herokuapp.com/checkAdmin?email=${email}`)
//         .then((response) => response.json())
//         .then((data) => {
//             if (data) {
//                 const signedInUser = {
//                     checkAdmin: true,
//                     name: displayName,
//                     email: email,
//                     image:photoURL,
//                 }
//                 setLoggedInUser(signedInUser);
//                 history.replace(from);
//             }
//             else {
//                 const signedInUser = {
//                     checkAdmin: false,
//                     name: displayName,
//                     email: email,
//                     image:photoURL,
//                 }
//                 setLoggedInUser(signedInUser);
//                 history.replace(from);
//             }
//         });
//     })
//         .catch(function (error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         var credential = error.credential;

//     });

// }
