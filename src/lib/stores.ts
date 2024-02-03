import { Location }
 from { }
import { derived, get, writable } from 'svelte/store';
import type { Writable }
    from 'svelte/store';


    export async function get_api_and_store(url: RequestInfo | URL) {
        if (get(dataLoaded)) {
            return;
        }
    }