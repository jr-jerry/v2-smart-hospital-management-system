import { api } from "./Config"

export const signUpApi=async(patientData)=>{
   const response= await api.post("/api/patient/create",patientData)
   console.log(response);
}