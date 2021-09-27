
// let baseUrl = 'https://saslras.netsolutionindia.com/api/';
// let baseUrl = 'http://54.74.233.110/api/';
let baseUrl = 'https://nutritionclubcenter.com/api/';

// https://saslras.netsolutionindia.com/ sent by Ashish
// let imageUrl1 = 'https://saslras.netsolutionindia.com/storage/';
// let imageUrl = 'https://saslras.netsolutionindia.com/';

let imageUrl1 = 'http://54.74.233.110/storage/';
let imageUrl = 'http://54.74.233.110/';


const urls = {
    baseUrl,
    imageUrl,
    imageUrl1,
    check_login:'check_login',
    user_data:'user_data',
    uploadMedia: 'uploadmedia',
    register: 'register',
    complete_registration: 'complete_registration',
    login_with_email: 'login_with_email',
    login_with_phone: 'login_with_phone',
    verify_phone_otp: 'verify_phone_otp',
    social_login: 'social_login',
    get_profile: 'get_profile',
    update_profile: 'update_profile',
    forgot_password: 'forgot_password',
    verify_forgot_password_otp: 'verify_forgot_password_otp',
    update_password: 'update_password',
    search_artist: 'search_artist?q=',
    search_artist_by_serviceID: 'search_artist?service_id=',
    get_artist: 'get_artist',
    add_address: 'add_address',
    get_addresses: 'get_addresses?user_id=',
    addtocart: 'addtocart',
    get_cart: 'get_cart',
    removecart: 'removecart',
    book_artist: 'book_artist',
    get_user_booking: 'get_user_booking',
    reschedule_booking: 'reschedule_booking',
    get_booking_by_service: 'get_booking_by_service',
    get_upcoming_booking_artist: 'get_upcoming_booking_artist',
    get_history_booking_artist: 'get_history_booking_artist',
    get_history_booking_customer: 'get_history_booking_customer',
    accept_booking: 'accept_booking',
    cancel_booking: 'cancel_booking',
    get_upcoming_booking_customer: 'get_upcoming_booking_customer',
    get_booking_member: 'get_booking?artist_id=',
    apply_coupon: 'apply_coupon',
    change_password: 'change_password',
    get_services_by_category: 'get_services_by_category?category_id=',
    menu: 'menu',
    complete_booking: 'complete_booking',
    start_booking: 'start_booking',
    getnotifications: 'notifications?per_page=50',

    forgotPassword: 'forgot_password',
    forceChangePassword: 'force_change_password',
    editProfile: 'edit_profile',
    removeResume: 'removeresume',
    changeEmail: 'change_email',
    changePhone: 'change_phone',
    getUserProfile: 'getuser',
    requestOTP: 'sendOtp',

    getStatesAndCities: 'getCities',
    getCountries: 'getCountries',
    getCitiesByCountry: 'getCitiesByCountry',
    getCategories: 'getCategories',
    getCategoryFieldsForm: 'formdata',
    addPost: 'saveformdata',
    editPost: 'editpost',
    getAds: 'getads',
    getAdsbyKeyword: 'getadsbykeyword',
    getAllAdsByKeyword: 'getsearchedadsbykeyword',
    addtofavourites: 'addtofavourites',
    getAdsBySeller: 'getadsbyuser',
    getSimilarAds: 'getsimilarads',
    getFilteredAds: 'getfilteredads',
    getMyAds: 'getmyads',
    getShipping: 'getShippingCharges',
    activateDeactivateAd: 'activate-deactivate-ad',
    getMyFavouriteAds: 'getfavouriteads',
    deleteAd: 'delete-ad',
    getCommentsOnAd: 'getcommnetonpost',
    postCommentOnAd: 'commnetonpost',
    connectFacebook: 'connect_facebook',
    sendEmailVerificationLink: 'verify_email',
    getBanners: 'getbanners',
    promoteAd: 'promotead',
    report_post: 'report_post',
    applyForJob: 'apply_job',
    getAllChats: 'chats',
    getChatHistory: 'chat_history',
    clearOrDeleteChat: 'clear_chat',

    getTermsAndConditions: 'terms-conditions',
    getFaq: 'faq',
    getFilters: 'getfilters',
    getTrendingAds: 'gettrendingads',
    getAdsByFilters_Shilengae: 'getadsbyfilters',
    getAdById: 'get_single_ad_by_id',
    getCurrentAppVersion: 'app-version',
    getAdsByParent: 'getadsbyparent',
    appLogout: 'app_logout',
    getIndustries: 'getindustrylist',
    getApplier: 'get_single_ad_by_id',
    giveRatingToseller: 'addrating',
    getRatingToseller: 'getsellerrating',
    
    getClearnotifications: 'clearallnotifications',
    getReadNotifications: 'readnotifications',
    getstatesByCountry: 'getstatesByCountry',
    getCitiesByState: 'getCitiesByState',
    getFaqEn: 'faq?lang=en',
    getFaqAm: 'faq?lang=am',
};

export { urls };