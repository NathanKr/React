import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchResources = resource => {
    const baseUrl = "https://jsonplaceholder.typicode.com/";
    const url = `${baseUrl}${resource}`

    const [resources, setResources] = useState([]);

    const fetchResources = () => {
      axios
        .get(url)
        .then(response => {
          setResources(response.data);
        })
        .catch(err => console.log(err));
    };

    // --- invoked on resource change
    useEffect(() => fetchResources(), [resource]);
    return resources;
  };

