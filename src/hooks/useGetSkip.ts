import type { Skip } from "../types/skip";
import { useEffect, useState } from "react";

export const useGetSkip = () => {
    const [skipList, setSkipList] = useState<Skip[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [postcode, setPostcode] = useState<string>("NR32");
    const [area, setArea] = useState<string>("Lowestoft");

    useEffect(() => {
        setLoading(true);
        fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`)
            .then(res => res.json())
            .then(data => setSkipList(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [postcode, area]);

    return { skipList, loading, error };    
}
