export const urls = {

    base_url : 'http://localhost:3000',

    quotes : '/quotes',

    quotesBy : '/quotes/by/{user-id}',

    comments : '/comments/{quote-id}',

    quote : '/quotes/{quote-id}',

    comment : '/comments/{quote-id}/{comment-id}',

    users : '/users',

    user : '/users/{user-id}',

    likes : {

        like_quote : '/actions/like/quote/{quote-id}',

        like_comment : '/actions/like/quote/{quote-id}/comment/{comment-id}'
    },

    save : {

        quotes : '/actions/save/quotes',

        quote : '/actions/save/quotes/{quote-id}',
        
    },

    savedBy : '/actions/saved/by/{user-id}',

    connections : {

        followers : '/connections/followers/{user-id}',
        following : '/connections/following/{user-id}',

        follow : '/connections/follow/{user-id}',
        unfollow : '/connections/unfollow/{user-id}'
    },

    infinite : {

        quoteslimit : '/infinite/quotes/{limit}',

        commentslimit : '/infinite/comments/{limit}',

        quotesrange : '/infinite/quotes/{starting-id}/{limit}',

        commentsrange : '/infinite/comments/{starting-id}/{limit}'
    },

    auth : {

        login : '/auth/login',
        register : '/auth/users',
        user : '/auth/user',
        resetPassword : '/auth/reset-password'
    },

    upload : {

        displayImage : '/upload/displayImage'
    }
}