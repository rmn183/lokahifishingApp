import { Platform } from 'react-native';
import { icons } from '../../../assets';


// const DATE_FORMAT = 'DD/MM/YYYY';
const DATE_FORMAT = 'YYYY/MM/DD';
const HUMAN_READABLE_DATE_FORMAT = 'DD MMM YYYY'; //01 Jan 2020
const DATE_TIME_FORMAT = 'DD/MM/YYYY HH:mm:ss';

const MIN_DATE = '01/1900/01';

const USER_DATA = 'userData';

const GOOGLE_API_KEY = 'AIzaSyBiqZE4ZzRWwULBB0oOnQ8ZHjanQo3wfXk';
//const GOOGLE_API_KEY = 'AIzaSyA3jUB16aJE85Oj9k48p2ILyvwvOk3S8h4';

const regex = {
    emailMobileNo: /^([0-9]{5,12})|([A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4})$/,
    mobileNo: /^([0-9]{5,12})$/,
    price: /^[1-9][0-9]*$/,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
    password: /^[A-Za-z0-9_@./#&+-]*$/ //alpha-numeric and _@./#&+-
};

const LANGUAGES = {
    english: 'en',
    amheric: 'am',
    arabic:'ar',
};

const COUNTRIES = {
    india: 'IN',
    unitedArabEmirates: 'AE',
    unitedStateOfAmerica: 'US',
    Ethiopia: 'ET',
    Eritrea: 'ER',
    Kenya: 'KE'
};

const DEVICE_TYPES = {
    android: 0,
    ios: 1
};

const PROVIDERS = {
    fb: 'facebook',
    web: 'web'
};

const actionsheetImagePickerButtonsiOS = [
    'Camera',
    'Gallery',
    'Cancel'
];

const actionsheetImagePickerButtonsAndroid = [
    'Camera',
    'Gallery',
];

const FILED_TYPES = {
    simple_text: '1',
    multiline_text: '2',
    picker: '3',
    multi_select_option: '4',
    radio_button: '5',
    picture: '6',
    price: '7',
    date: '8',
    location: '9'
};

const POST_TITLE = 'post_title_7d2c77672447';

const MIME_TYPE = {
    image: 'image/jpeg',
    formData: 'multipart/form-data',
    pdf: 'application/pdf'
};

const GENDER = {
    male: 1,
    female: 2
};

const genderOptions = [
    {
        label: 'Male',
        value: 1
    },
    {
        label: 'Female',
        value: 2
    },
    {
        label: 'Others',
        value: 3
    }
];

const salaryExpectattions = [
    {
        label: '50,000 AED - 1,00,000 AED',
        value: 1
    },
    {
        label: '1,00,000 AED - 2,00,000 AED',
        value: 2
    },
    {
        label: '2,00,000 AED - 3,00,000 AED',
        value: 3
    },
    {
        label: '3,00,000 AED - 4,00,000 AED',
        value: 4
    },
    {
        label: 'More than 5,00,000 AED',
        value: 5
    },
];

const carriarLevel = [
    {
        label: 'Student',
        value: 1
    },
    {
        label: 'Intern',
        value: 2
    },
    {
        label: 'Junior',
        value: 3
    },
    {
        label: 'Mid-Level',
        value: 4
    },
    {
        label: 'Senior',
        value: 5
    },
    {
        label: 'Managerial',
        value: 6
    },
    {
        label: 'Executive',
        value: 7
    },
];

const industryOptions = [
    {
        label: 'IT',
        value: 1
    },
    {
        label: 'Transport',
        value: 2
    },
    {
        label: 'Construction',
        value: 3
    }
];
const experienceLevel = [
    {
        label: '0-1 Years',
        value: 1
    },
    {
        label: '1-2 Years',
        value: 2
    },
    {
        label: '2-3 Years',
        value: 3
    },
    {
        label: '3-4 Years',
        value: 4
    },
    {
        label: '4-5 Years',
        value: 5
    },
    {
        label: '5-10 Years',
        value: 6
    },
    {
        label: '10+ Years',
        value: 7
    }
];


const educationOptions = [
    {
        label: ' High-School ',
        value: 1
    },
    {
        label: 'Associate',
        value: 2
    },
    {
        label: 'Bachelor',
        value: 3
    },
    {
        label: 'Masters',
        value: 4
    },
    {
        label: 'Phd',
        value: 5
    }
];


const numberOfEmp = [
    {
        label: ' 1-14',
        value: 1
    },
    {
        label: '15-49',
        value: 2
    },
    {
        label: '50-199',
        value: 3
    },
    {
        label: '200+',
        value: 4
    },
];

const primaryUse = [
    {
        label: 'Looking for talent',
        value: 1
    },
    {
        label: 'Posting Job opportunities',
        value: 2
    },
    {
        label: 'Properties',
        value: 3
    },
    {
        label: 'Motors',
        value: 4
    },
    {
        label: 'Other',
        value: 5
    },
];

const promotionType = {
    free: 0,
    paid: 1,
};

const documentType = Platform.select({
    ios: [
        'org.openxmlformats.wordprocessingml.document',
        'com.adobe.pdf',
        'org.openxmlformats.spreadsheetml.sheet',
        'org.openxmlformats.presentationml.presentation',
    ],
    android: [
        'application/msword',
        'application/pdf',
        'application/vnd.ms-excel',
        'application/vnd.ms-powerpoint',
    ]
});

const messageTypes = {
    text: 'TEXT',
    image: 'IMAGE',
    audio: 'AUDIO',
    video: 'VIDEO',
    file: 'FILE'
};

const socketEvents = {
    sendMessage: 'sendMessage',
    onMessageReceived: 'new-message',
    onMessageReceivedOnAllChatsScreen: 'new-message-forallchats',
    deliverMessage: 'deliverMessage',
    readMessage: 'readMessage',
    ackDeliveredMessage: 'message-delivered',
    ackReadMessage: 'message-read',
};
const MESSAGE_STATUS = {
    sent: 1,
    delivered: 2,
    read: 3
};

const chatOperationTypes = {
    delete: 'delete',
    clear: 'clear'
};

const defaultChatMessageCount = 30;
const defaultGetAdsCount = 30;

const viewListItemType = {
    list: 1,
    grid: 2,
    map: 3
};

const firebaseDynamicLinkType = {
    UNGUESSABLE: 'UNGUESSABLE'
};
// 180000
const OTPExpiringTimeout = 180000; //5 minutes into milliseconds
const otpRequestType = {
    register: 1,
    changePhoneNo: 2,
};

const maxFileSize = 5000000; //5mb 5000000

// const yabalashServices = [
//     {
//         id: 1,
//         label: strings.fixingService,
//         price: 10
//     },
//     {
//         id: 2,
//         label: strings.insuranceService,
//         price: 20
//     },
//     {
//         id: 3,
//         label: strings.movingService,
//         price: 30
//     }
// ];

const JOB_CAT_ID = 33;

const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Visible change in 3 weeks',
        image: icons.ic_active_fitness,
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Forget about strict diet',
        image: icons.ic_active_healthy,
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'Save money on gym membership',
        image: icons.ic_active_money,
        backgroundColor: '#22bcb5',
    }
];


export {
    USER_DATA,
    DATE_FORMAT,
    HUMAN_READABLE_DATE_FORMAT,
    DATE_TIME_FORMAT,
    GOOGLE_API_KEY,
    LANGUAGES,
    COUNTRIES,
    DEVICE_TYPES,
    PROVIDERS,
    FILED_TYPES,
    POST_TITLE,
    MIME_TYPE,
    regex,
    actionsheetImagePickerButtonsiOS,
    actionsheetImagePickerButtonsAndroid,
    GENDER,
    genderOptions,
    industryOptions,
    salaryExpectattions,
    promotionType,
    MIN_DATE,
    messageTypes,
    socketEvents,
    MESSAGE_STATUS,
    documentType,
    chatOperationTypes,
    defaultChatMessageCount,
    defaultGetAdsCount,
    viewListItemType,
    firebaseDynamicLinkType,
    OTPExpiringTimeout,
    otpRequestType,
    maxFileSize,
    // yabalashServices,
    JOB_CAT_ID,
    carriarLevel,
    educationOptions,
    experienceLevel,
    numberOfEmp,
    primaryUse,
    slides
};