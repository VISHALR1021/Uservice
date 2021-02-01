import {useEffect, useContext,useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {UserContext} from '../../App'
import Navbar from '../Navbar'



function CreateProject() {


    const [categories,setCategories] = useState([])

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const [image,setImage] = useState('')
    const [imageURL,setImageURL] = useState('')

    const [authorId,setAuthorId] = useState()

    const {state,dispatch}= useContext(UserContext)   

    useEffect(() => {
        if(state)
        console.log("State: ",state)
    }, [])
    
    const publishProject = () =>{
        console.log("Title: ",title)
        console.log("Description: ",description)
        console.log("Image: ",imageURL)

        fetch('/publishproject',{
            method:"post",
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("jwt"),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:title,
                projectDescription:description,
                projectThumbnail:imageURL,
                categories:categories
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
        })
    }   

    useEffect(() => {
        if(image)
        {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset','Uservice')
        data.append('cloud-name','dkzqxbqor')
        
        fetch('https://api.cloudinary.com/v1_1/dkzqxbqor/image/upload',{
            method:"post",
            body:data
            }
            )
            .then((res)=>res.json())
            .then((data)=>{
            console.log(data.url)
            setImageURL(data.url)
        })
        .catch((err)=>{
            console.log("error: ",err)
        })
        }
        
    }, [image])

    const uploadImage = (e,file)=>{
        
        e.preventDefault()
        setImage(file[0])
    }
    
    const submitCategories = (e)=>{
        e.preventDefault()
        console.log("categories: ",categories)
    }

    const addCategories = (e)=>{ 
        console.log("addCategories",e.target.value)
        categories.push(e.target.value)
    
    }

    

    return (
        <div>
            <Navbar />
            <h2>Create Project</h2>
            <br /><br/>
            <form>
                <input placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
                <input placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}} />
                <br />
            </form>

            
            <form onSubmit = {(e)=>{submitCategories(e)}}>
                <input type="checkbox" value="web development" onChange = {(e)=>{addCategories(e)}} />
                <label for="vehicle1"> Web Development</label><br/>

                <input type="checkbox" value="content creating" onChange = {(e)=>{addCategories(e)}} />
                <label for="vehicle2"> Content Creating</label><br/>

                <input type="checkbox" value="graphic design" onChange = {(e)=>{addCategories(e)}} />
                <label for="vehicle3"> Graphic Design</label><br/>

                <input type="checkbox" value="user interface" onChange = {(e)=>{addCategories(e)}} />
                <label for="vehicle3"> UI/UX</label><br/>

                <input type="checkbox"  value="photography" onChange = {(e)=>{addCategories(e)}} />
                <label for="vehicle3"> Photography</label><br/><br/>

            </form> 

            <form>
                <label>Upload Image</label>
                <input type="file" placeholder="image" onChange={(e)=>{uploadImage(e,e.target.files)}} /> 
            </form>

            <button onClick={publishProject}>Publish Project</button>

        </div>
    )
}

export default CreateProject
