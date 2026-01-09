import multer from 'multer'; //multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.
import path from 'path';     /// multer bring image in public folder sp localhost:8088/copy.jpg is the imagie url run in our local host
                                //LAN ip address.mine ip addres:8080/image.jpg shows in next connected computer

const limitsss = {
    fileSize: 1024 * 1024 * 5 // 5 MB
};
//export const uploadss = multer({ dest: './public' });

const storage = multer.diskStorage({
destination: function (req, file, callback) { // callback is a function to specify the destination directory for uploaded files
    callback(null, './public');// null means no error
},
filename: function (req, file, callback) {
    
    callback(null, file.originalname)
        
       
}});
const fileFilter = (req,file,  callback) => {
   
    let originalname = file.originalname; //SHOWS NAME OF FILE
    let fileExtension= path.extname(originalname); //GETS EXTENSION OF FILE path must be installed
       let validFileExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
    let isValid = validFileExtensions.includes(fileExtension.toLowerCase());
    if (isValid) {
        callback(null, true); // Accept the file
    } else {
        (new Error ('Invalid file type. Only images are allowed.'), false); // Reject the file
         //static image means that seen in local host ,dynamic means globally
    }
}


export const uploadMulter = multer({ storage: storage, limits: limitsss,fileFilter:fileFilter });//1st storage is multer storage and 2nd storage is variable created above
//uploadMulter now stores destination and filename configurations along with file size limits
//if we use localhost:8080 / file name then photo will seen in browser
//static means that cannot  be change ,dynamic means as form made by react only