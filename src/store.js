import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({
    charactersList : [],
});

export function getData() {

    axios.get("https://swapi.dev/api/people/")

        .then((resp) => {
            store.charactersList = resp.data.results;

    })
}