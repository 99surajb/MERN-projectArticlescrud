import React, { useState } from "react";
import '../CSS/AppPro.css'
import axios from "axios";

const AddProduct = () => {

    const[Article,SetName] = useState('');
    const [Description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    const handleAddProduct = async ()=>{

        console.log(!Article);
        if(!Article || !Description || !category || !company){
            setError(true);
            return false;
        }

        console.warn(Article,Description,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
         console.log(userId);
        // const result = await fetch('http://localhost:5000/add-product',{
        //     method:'post',
        //     body:JSON.stringify(name, Description, category, userId, company),
        //     headers:{
        //         'Content-Type':'application/json',
        //         authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //     }
        // });
        // result = await result.json();
        // console.log(result);
        axios.post('http://localhost:5000/add-product',{
            Article, Description, category, userId, company,
                //'authorization': JSON.parse(localStorage.getItem('token'))
                //headers: { Authorization: "Bearer " + localStorage.getItem('token') }
        }).then((response) => {
            console.log(response);
            
        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
            <div>
                <h2 className="phead">Add New Articles</h2>
                <div className="pbox">
                    <input type="text" placeholder="Enter Article Name" className="probox" 
                    value={Article} onChange={(e)=>{
                        SetName(e.target.value);
                    }}
                    />
                    {error && !Article && <span className="invalid-input">Invalid Name</span>}
                    <input type="text" placeholder=" Article Description" className="probox" 
                     value={Description} onChange={(e)=>{
                        setDescription(e.target.value);
                    }}
                    />
                    {error && !Description && <span className="invalid-input">Invalid Description</span>}
                    <input type="text" placeholder="Enter Article Type" className="probox" 
                     value={category} onChange={(e)=>{
                        setCategory(e.target.value);
                    }}
                    />
                    {error && !category && <span className="invalid-input">Invalid Category</span>}
                    <input type="text" placeholder="Enter Aticle Company" className="probox" 
                     value={company} onChange={(e)=>{
                        setCompany(e.target.value);
                    }}
                    />
                    {error && !company && <span className="invalid-input">Invalid Company</span>}
                    <button className="probox" id="addprobtn" onClick={handleAddProduct}>Add</button>
                </div>
            </div>
        </>
    )
}

export default AddProduct;