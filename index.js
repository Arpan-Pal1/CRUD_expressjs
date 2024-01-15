import {app} from "./app.js";
import connectDb from "./src/db/index.js";

connectDb()
.then(() => {
    app.listen(8000, ()=>{
        console.log(`app is running on the port 8000`);
    })
})
.catch((err)=>{
    console.log(`CONNECTION ERROR ${err}`);
})
