import app from "./app.js";
import { PORT } from "./sources/constants.js";

//set the server to listen at port
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
