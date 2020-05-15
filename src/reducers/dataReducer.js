const initialState = {
    data: [    
    {id: 1,
    artist: {
        picture_small: 'https://www.fixpicture.org/medias/1589552220_tmp_1589552109_tmp_slider_puffin_jpegmini_mobile__1_.jpg',
        name: 'Eminem'
        },
    duration: '250',
    title: "Lose Your Self"
    },
    {id: 2,
    artist: {
        picture_small: 'https://www.fixpicture.org/medias/1589552220_tmp_1589552109_tmp_slider_puffin_jpegmini_mobile__1_.jpg',
        name: 'Eminem'
        },
    duration: '144',
    title: "The Way I Am"
    },
    {id: 3,
    artist: {
        picture_small: 'https://www.fixpicture.org/medias/1589552220_tmp_1589552109_tmp_slider_puffin_jpegmini_mobile__1_.jpg',
        name: 'Eminem'
        },
    duration: '115',
    title: "Mockingbird"
    },
    {id: 4,
    artist: {
        picture_small: 'https://www.fixpicture.org/medias/1589552220_tmp_1589552109_tmp_slider_puffin_jpegmini_mobile__1_.jpg',
        name: 'Eminem'
        },
    duration: '222',
    title: "The Real Slim Shady"
    },
    {id: 5,
    artist: {
        picture_small: 'https://www.fixpicture.org/medias/1589552220_tmp_1589552109_tmp_slider_puffin_jpegmini_mobile__1_.jpg',
        name: 'Eminem'
        },
    duration: '96',
    title: "Superman"
    },
    {id: 6,
    artist: {
        picture_small: 'https://www.fixpicture.org/medias/1589552220_tmp_1589552109_tmp_slider_puffin_jpegmini_mobile__1_.jpg',
        name: 'Eminem'
        },
    duration: '220',
    title: "Stan"
    }
    ],
    total: 20
}

export default function dataReducer(state = initialState, action) {
    if(action.type === 'PUT_DATA') {
        return action.payload
    }
    if(action.type === 'LOAD_DATA') {
        return state
    }
    return state
}