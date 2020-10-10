import React, { useEffect, useState } from "react"
import "./App.css"
import Post from "./Post"
import { db } from "./firebase"
import { Modal, Button, Input } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { auth } from "./firebase"
import ImageUpload from "./ImageUpload"
import InstagramEmbed from "react-instagram-embed"

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

function App() {
  const [posts, setposts] = useState([])
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [open, setopen] = useState(false)
  const [user, setUser] = useState(null)
  const [openSignIn, setopenSignIn] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [user])
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setposts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        )
      })
  }, [])

  const signUp = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        })
      })
      .catch((error) => alert(error.message))

    setopen(false)
    setEmail("")
    setPassword("")
    setUsername("")
  }

  const signIn = (event) => {
    event.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))

    setopenSignIn(false)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerimage'
          src='https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=''
        />
        {user ? (
          <Button onClick={() => auth.signOut()}>Logout</Button>
        ) : (
          <div className='app__logincontainer'>
            <Button onClick={() => setopenSignIn(true)}>Sign In</Button>
            <Button onClick={() => setopen(true)}>Sign Up</Button>
          </div>
        )}
      </div>

      <Modal open={open} onClose={() => setopen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'>
            <center>
              <img
                className='app__headerimage'
                src='https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt=''
              />
            </center>

            <Input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={signUp} type='submit'>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>

      <Modal open={openSignIn} onClose={() => setopenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'>
            <center>
              <img
                className='app__headerimage'
                src='https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt=''
              />
            </center>
            <Input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='text'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={signIn} type='submit'>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      <div className='app__posts'>
        <div className='app__postsleft'>
          {posts.map(({ id, post }) => (
            <Post
              key={id}
              user={user}
              username={post.username}
              imageurl={post.imageurl}
              caption={post.caption}
            />
          ))}
        </div>
        <div className='app__postsright'>
          <InstagramEmbed
            url='https://instagr.am/p/Zw9o4/'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>

      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3>Sorry! You need login to upload</h3>
      )}
    </div>
  )
}

export default App
