class ApiResponse{
    constructor(statusCode,data,error=null){
         this.statusCode = statusCode
         this.data = data
         this.success = statusCode < 400
         this.error = error
    }
 }
 
 export default ApiResponse