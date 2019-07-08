if (!process.env.FEATURED_PRODUCT) {
    process.env.FEATURED_PRODUCT = [];
}

export default {
    theme: 'vuefront',
    css: [
        '@/assets/css/main.scss'
    ],
    menu: ['blog'],
    components: {
        Header: '@/components/elements/common/header',
        HeaderLogo: '@/components/elements/common/header/logo',
        PostsGrid: '@/components/elements/blog/post/grid',
        PostThumb: '@/components/elements/blog/post/thumb',
    },
    templates: {
        Layout: '@/components/templates/common/layout'
    },
    layouts: {
        '*': {
            footerLeft: [
                'Pages'
            ],
            footerCenter: [
                'AccountLinks'
            ],
            footerRight: [
                ['ExtraLinks', {
                    links: [{
                            to: '/store/special',
                            text: 'Special'
                        },
                        {
                            to: '/store/compare',
                            text: 'Compare'
                        },
                        {
                            to: '/contact',
                            text: 'Contact Us'
                        }
                    ]
                }]
            ]
        },
        '/': {
            columnCenterTop: [
                ['LatestPost', { column: true }]
            ],
            columnRight: [
                'BlogCategory', ['LatestPost', {
                    column: true
                }]
            ]
        },
        '/search/*': {
            contentBottom: [
                'SearchProduct',
                'SearchPost'
            ]
        },
        '/store/category*': {
            columnLeft: [
                'StoreCategory', ['LatestProduct', {
                    column: true
                }]
            ]
        },
        '/blog/category*': {
            columnRight: [
                'BlogCategory', ['LatestPost', {
                    column: true
                }]
            ]
        },
        '/store/product/*': {
            contentBottom: [
                'RelatedProduct'
            ]
        },
        '/blog/post*': {
            columnRight: [
                ['LatestPost', {
                    column: true
                }]
            ]
        },
        '/account*': {
            columnRight: [
                'Account'
            ]
        },
        '/store/checkout': {
            contentTop: [
                'Checkout'
            ]
        }
    }
}