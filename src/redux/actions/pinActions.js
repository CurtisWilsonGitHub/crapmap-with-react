export const NEW_PIN = 'NEW_PIN';
export const UPDATE_PIN = 'UPDATE_PIN';
export const GET_PINS = 'GET_PINS';
export const DELETE_PIN = 'DELETE_PIN';
export const GET_PINS_FULFILLED = 'GET_PINS_FULFILLED';
export const CLEAR_PINS = 'CLEAR_PINS';
export const GET_BY_CATEGORY = 'GET_BY_CATEGORY';
export const GET_BY_CATEGORY_FULFILLED = 'GET_BY_CATEGORY_FULFILLED';

// CLEAR ALL PINS FROM STORE
export const clearPins = () => ({
    type: CLEAR_PINS,
    payload: []
})

export const getByCategory = (cat) => ({
    type: GET_BY_CATEGORY,
    async payload () {
        const data = await fetchByCategory(cat);
        return data;
    }
})

function fetchByCategory(cat) {
    return fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/get/category/' + cat, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.error("Error", err))
}

// GET PINS - (NEEDS USER OBJECT SEARCH QUERY)
export const getPins = () => ({
    type: GET_PINS,
    async payload () {
        const data = await getPinsFetch();
        return data;
    }
})

function getPinsFetch(input){
    return fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/get', {
            method: 'GET',
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            return data;
        })
        .catch(err => console.error("Error", err))
}

// CREATES NEW PIN
export const newPin = (input) => ({
    type: NEW_PIN,
    async payload() {
        await newPinFetch(input);
    }
})

export async function newPinFetch(input) {
    fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/new', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => console.log(res))
        .catch(err => console.error("Error", err))
}


// DELETE PIN - NEEDS TESTING
export const deletePin = (input) => ({
    type: DELETE_PIN,
    async payload() {
        await deletePinFetch(input);
    }
})

function deletePinFetch(input) {
    return fetch('https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/delete/' + input, {
                method: 'DELETE'
        })
            .then(res => console.log(res))
            .catch(err => console.error("Error", err))
}


// UPDATE/EDITS PIN - NEEDS TESTING
export const updatePin = (input, pinID) => ({
    type: UPDATE_PIN,
    async payload() {
        await updatePinFetch(input, pinID);
    }
})

function updatePinFetch(input, pinID){
    let url = `https://us-central1-crapmap-c5c7f.cloudfunctions.net/api/pins/update/${pinID}`
    console.log(url);
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(input),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
    
}