import multer from "multer";

/* 
storage engine => A storage engine defines how and where uploaded files are temporarily stored before further processing like cloud uploads. 
diskStorage => files server ke disk mai store hongi(RAM mai nhi)
{} => default behaviour , File ek temporary folder me save hoti hai, Multer random filename generate karta hai
*/
const storage = multer.diskStorage({});

/*
 multer ka instance multer know where is file and how to store it. Now Upload is a middleware
*/
const upload = multer({storage});

export default upload;