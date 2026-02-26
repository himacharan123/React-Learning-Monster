import { useEffect, useState } from "react";
import axios from 'axios';

function FetchDataEffect() {
    const [data, setData] = useState([]);
    useEffect(() => {


        async function getUser() {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(result.data);

        }
        getUser();
    }, []);
    return <>
        <ol>
            {
                data.map(({ userId, title, body, id }) =>
                    <div key={id}>
                    <li><u>{title} : </u></li>
                   <p>{body}</p>
                    </div>
                )
            }

        </ol>

    </>
}
export default FetchDataEffect;