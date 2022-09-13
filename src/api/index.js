import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3000'
});


export const loginUser = async (data) => {
    try{

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/login', requestOptions);

    const newData = response.json();


    return newData;
    } catch(e){
        return false;
    }
}