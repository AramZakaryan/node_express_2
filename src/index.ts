import {app} from "./main";

const port = process.env.PORT || 3080;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
