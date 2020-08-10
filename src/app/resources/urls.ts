export const urls = {

    base_url : 'localhost:3000',

    quotes : '/quotes',

    comments : '/comments/{quote-id}',

    quote : '/quotes/{quote-id}',

    comment : '/comments/{quote-id}/{comment-id}',

    likes : {

        like_quote : '/actions/like/quote/{quote-id}',

        like_comment : '/actions/like/quote/{quote-id}'
    },

    infinite : {

        quoteslimit : '/infinite/quotes/{limit}',

        commentslimit : '/infinite/comments/{limit}',

        quotesrange : '/infinite/quotes/{starting-id}/{limit}',

        commentsrange : '/infinite/comments/{starting-id}/{limit}'
    }
}